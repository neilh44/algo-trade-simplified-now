-- Create user roles enum and table
CREATE TYPE public.user_role AS ENUM ('admin', 'user');

-- Add role to profiles table
ALTER TABLE public.profiles ADD COLUMN role public.user_role DEFAULT 'user';

-- Create resources table for content management
CREATE TABLE public.resources (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  title TEXT NOT NULL,
  description TEXT,
  type TEXT NOT NULL, -- 'course', 'guide', 'tool', 'video', 'script'
  category TEXT NOT NULL, -- 'beginner', 'intermediate', 'advanced', 'tools'
  file_url TEXT,
  is_free BOOLEAN DEFAULT true,
  download_count INTEGER DEFAULT 0,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  created_by UUID REFERENCES public.profiles(user_id)
);

-- Create user activity tracking table
CREATE TABLE public.user_activities (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id UUID NOT NULL REFERENCES public.profiles(user_id),
  activity_type TEXT NOT NULL, -- 'login', 'course_access', 'resource_download', 'progress_update'
  resource_id UUID REFERENCES public.resources(id),
  metadata JSONB,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Create support tickets table
CREATE TABLE public.support_tickets (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id UUID NOT NULL REFERENCES public.profiles(user_id),
  subject TEXT NOT NULL,
  message TEXT NOT NULL,
  status TEXT DEFAULT 'open', -- 'open', 'in_progress', 'resolved', 'closed'
  priority TEXT DEFAULT 'medium', -- 'low', 'medium', 'high', 'urgent'
  assigned_to UUID REFERENCES public.profiles(user_id),
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable RLS
ALTER TABLE public.resources ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.user_activities ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.support_tickets ENABLE ROW LEVEL SECURITY;

-- Create security definer function to check admin role
CREATE OR REPLACE FUNCTION public.is_admin(user_id UUID)
RETURNS BOOLEAN
LANGUAGE SQL
SECURITY DEFINER
STABLE
AS $$
  SELECT EXISTS (
    SELECT 1 FROM public.profiles 
    WHERE profiles.user_id = is_admin.user_id 
    AND role = 'admin'
  );
$$;

-- RLS Policies for resources
CREATE POLICY "Anyone can view free resources" 
  ON public.resources FOR SELECT 
  USING (is_free = true);

CREATE POLICY "Admins can manage all resources" 
  ON public.resources FOR ALL 
  USING (public.is_admin(auth.uid()));

-- RLS Policies for user activities
CREATE POLICY "Users can view their own activities" 
  ON public.user_activities FOR SELECT 
  USING (auth.uid() = user_id);

CREATE POLICY "Admins can view all activities" 
  ON public.user_activities FOR SELECT 
  USING (public.is_admin(auth.uid()));

CREATE POLICY "System can insert activities" 
  ON public.user_activities FOR INSERT 
  WITH CHECK (true);

-- RLS Policies for support tickets
CREATE POLICY "Users can view their own tickets" 
  ON public.support_tickets FOR SELECT 
  USING (auth.uid() = user_id);

CREATE POLICY "Users can create tickets" 
  ON public.support_tickets FOR INSERT 
  WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Admins can manage all tickets" 
  ON public.support_tickets FOR ALL 
  USING (public.is_admin(auth.uid()));

-- Create triggers for updated_at
CREATE TRIGGER update_resources_updated_at
  BEFORE UPDATE ON public.resources
  FOR EACH ROW
  EXECUTE FUNCTION public.update_updated_at_column();

CREATE TRIGGER update_support_tickets_updated_at
  BEFORE UPDATE ON public.support_tickets
  FOR EACH ROW
  EXECUTE FUNCTION public.update_updated_at_column();

-- Function to track user activity
CREATE OR REPLACE FUNCTION public.track_user_activity(
  p_user_id UUID,
  p_activity_type TEXT,
  p_resource_id UUID DEFAULT NULL,
  p_metadata JSONB DEFAULT NULL
)
RETURNS UUID
LANGUAGE plpgsql
SECURITY DEFINER
AS $$
DECLARE
  activity_id UUID;
BEGIN
  INSERT INTO public.user_activities (
    user_id, 
    activity_type, 
    resource_id, 
    metadata
  )
  VALUES (
    p_user_id, 
    p_activity_type, 
    p_resource_id, 
    p_metadata
  )
  RETURNING id INTO activity_id;
  
  RETURN activity_id;
END;
$$;