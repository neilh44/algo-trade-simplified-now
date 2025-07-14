import { useState, useEffect, createContext, useContext, ReactNode } from 'react';
import { User, Session } from '@supabase/supabase-js';
import { supabase } from '@/integrations/supabase/client';
import { useToast } from '@/hooks/use-toast';

interface AuthContextType {
  user: User | null;
  session: Session | null;
  loading: boolean;
  signUp: (formData: SignUpData) => Promise<{ error?: string }>;
  signIn: (email: string, password: string) => Promise<{ error?: string }>;
  signOut: () => Promise<void>;
  resetPassword: (email: string) => Promise<{ error?: string }>;
}

interface SignUpData {
  fullName: string;
  email: string;
  password: string;
  phoneNumber: string;
  tradingExperience: string;
  primaryInterest: string;
  howHeardAboutUs: string;
  goalsMessage: string;
  intent?: string;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
  const [session, setSession] = useState<Session | null>(null);
  const [loading, setLoading] = useState(true);
  const { toast } = useToast();

  useEffect(() => {
    // Set up auth state listener
    const { data: { subscription } } = supabase.auth.onAuthStateChange(
      async (event, session) => {
        setSession(session);
        setUser(session?.user ?? null);
        
        if (event === 'SIGNED_IN' && session?.user) {
          // Defer profile creation to prevent deadlocks
          setTimeout(() => {
            checkAndCreateProfile(session.user);
          }, 0);
        }
        
        setLoading(false);
      }
    );

    // Check for existing session
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session);
      setUser(session?.user ?? null);
      setLoading(false);
    });

    return () => subscription.unsubscribe();
  }, []);

  const checkAndCreateProfile = async (user: User) => {
    try {
      const { data: profile } = await supabase
        .from('profiles')
        .select('*')
        .eq('user_id', user.id)
        .maybeSingle();

      if (!profile) {
        // Create profile if it doesn't exist
        await supabase
          .from('profiles')
          .insert({
            user_id: user.id,
            full_name: user.user_metadata?.full_name || '',
          });
      }
    } catch (error) {
      console.error('Error checking/creating profile:', error);
    }
  };

  const signUp = async (formData: SignUpData): Promise<{ error?: string }> => {
    try {
      const redirectUrl = `${window.location.origin}/dashboard`;
      
      const { data, error } = await supabase.auth.signUp({
        email: formData.email,
        password: formData.password,
        options: {
          emailRedirectTo: redirectUrl,
          data: {
            full_name: formData.fullName,
          },
        },
      });

      if (error) throw error;

      if (data.user) {
        // Create detailed profile
        await supabase
          .from('profiles')
          .upsert({
            user_id: data.user.id,
            full_name: formData.fullName,
            phone_number: formData.phoneNumber,
            trading_experience: formData.tradingExperience,
            primary_interest: formData.primaryInterest,
            how_heard_about_us: formData.howHeardAboutUs,
            goals_message: formData.goalsMessage,
            signup_intent: formData.intent || 'general',
          });

        toast({
          title: "Account created successfully!",
          description: "Please check your email to verify your account.",
        });

        return {};
      }

      return { error: 'Failed to create account' };
    } catch (error: any) {
      return { error: error.message };
    }
  };

  const signIn = async (email: string, password: string): Promise<{ error?: string }> => {
    try {
      const { data, error } = await supabase.auth.signInWithPassword({
        email,
        password,
      });

      if (error) throw error;

      if (data.user) {
        window.location.href = '/dashboard';
        return {};
      }

      return { error: 'Failed to sign in' };
    } catch (error: any) {
      return { error: error.message };
    }
  };

  const signOut = async (): Promise<void> => {
    try {
      await supabase.auth.signOut();
      window.location.href = '/';
    } catch (error) {
      console.error('Error signing out:', error);
    }
  };

  const resetPassword = async (email: string): Promise<{ error?: string }> => {
    try {
      const { error } = await supabase.auth.resetPasswordForEmail(email, {
        redirectTo: `${window.location.origin}/reset-password`,
      });

      if (error) throw error;

      toast({
        title: "Password reset email sent",
        description: "Check your email for password reset instructions.",
      });

      return {};
    } catch (error: any) {
      return { error: error.message };
    }
  };

  return (
    <AuthContext.Provider 
      value={{ 
        user, 
        session, 
        loading, 
        signUp, 
        signIn, 
        signOut, 
        resetPassword 
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};