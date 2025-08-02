// types/supabase.ts
export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

// Enums
export type UserRole = 'user' | 'admin'
export type ResourceType = 'course' | 'guide' | 'tool' | 'video' | 'script'
export type ResourceCategory = 'beginner' | 'intermediate' | 'advanced' | 'tools'
export type TradingExperience = 'beginner' | 'intermediate' | 'advanced' | 'expert'
export type ActivityType = 'login' | 'logout' | 'resource_download' | 'resource_view' | 'profile_update' | 'ticket_created'
export type TicketStatus = 'open' | 'in_progress' | 'resolved' | 'closed'
export type TicketPriority = 'low' | 'medium' | 'high' | 'urgent'

export interface Database {
  public: {
    Tables: {
      profiles: {
        Row: {
          id: string
          user_id: string
          full_name: string | null
          phone_number: string | null
          trading_experience: TradingExperience | null
          primary_interest: string | null
          role: UserRole | null
          avatar_url: string | null
          bio: string | null
          location: string | null
          website: string | null
          social_links: Json
          preferences: Json
          is_active: boolean | null
          email_verified: boolean | null
          last_login_at: string | null
          created_at: string
          updated_at: string
        }
        Insert: {
          id: string
          user_id: string
          full_name?: string | null
          phone_number?: string | null
          trading_experience?: TradingExperience | null
          primary_interest?: string | null
          role?: UserRole | null
          avatar_url?: string | null
          bio?: string | null
          location?: string | null
          website?: string | null
          social_links?: Json
          preferences?: Json
          is_active?: boolean | null
          email_verified?: boolean | null
          last_login_at?: string | null
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          user_id?: string
          full_name?: string | null
          phone_number?: string | null
          trading_experience?: TradingExperience | null
          primary_interest?: string | null
          role?: UserRole | null
          avatar_url?: string | null
          bio?: string | null
          location?: string | null
          website?: string | null
          social_links?: Json
          preferences?: Json
          is_active?: boolean | null
          email_verified?: boolean | null
          last_login_at?: string | null
          created_at?: string
          updated_at?: string
        }
      }
      resources: {
        Row: {
          id: string
          title: string
          description: string | null
          type: ResourceType
          category: ResourceCategory
          content_url: string | null
          file_path: string | null
          file_size: number | null
          file_type: string | null
          thumbnail_url: string | null
          is_free: boolean | null
          price: number | null
          download_count: number | null
          view_count: number | null
          rating: number | null
          tags: string[] | null
          prerequisites: string[] | null
          difficulty_level: number | null
          duration_minutes: number | null
          author_id: string | null
          is_published: boolean | null
          featured: boolean | null
          metadata: Json
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          title: string
          description?: string | null
          type: ResourceType
          category: ResourceCategory
          content_url?: string | null
          file_path?: string | null
          file_size?: number | null
          file_type?: string | null
          thumbnail_url?: string | null
          is_free?: boolean | null
          price?: number | null
          download_count?: number | null
          view_count?: number | null
          rating?: number | null
          tags?: string[] | null
          prerequisites?: string[] | null
          difficulty_level?: number | null
          duration_minutes?: number | null
          author_id?: string | null
          is_published?: boolean | null
          featured?: boolean | null
          metadata?: Json
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          title?: string
          description?: string | null
          type?: ResourceType
          category?: ResourceCategory
          content_url?: string | null
          file_path?: string | null
          file_size?: number | null
          file_type?: string | null
          thumbnail_url?: string | null
          is_free?: boolean | null
          price?: number | null
          download_count?: number | null
          view_count?: number | null
          rating?: number | null
          tags?: string[] | null
          prerequisites?: string[] | null
          difficulty_level?: number | null
          duration_minutes?: number | null
          author_id?: string | null
          is_published?: boolean | null
          featured?: boolean | null
          metadata?: Json
          created_at?: string
          updated_at?: string
        }
      }
      user_activities: {
        Row: {
          id: string
          user_id: string
          activity_type: ActivityType
          resource_id: string | null
          description: string | null
          metadata: Json
          ip_address: string | null
          user_agent: string | null
          created_at: string
        }
        Insert: {
          id?: string
          user_id: string
          activity_type: ActivityType
          resource_id?: string | null
          description?: string | null
          metadata?: Json
          ip_address?: string | null
          user_agent?: string | null
          created_at?: string
        }
        Update: {
          id?: string
          user_id?: string
          activity_type?: ActivityType
          resource_id?: string | null
          description?: string | null
          metadata?: Json
          ip_address?: string | null
          user_agent?: string | null
          created_at?: string
        }
      }
      tickets: {
        Row: {
          id: string
          user_id: string
          title: string
          description: string
          status: TicketStatus | null
          priority: TicketPriority | null
          category: string | null
          assigned_to: string | null
          resolution: string | null
          attachments: string[] | null
          tags: string[] | null
          metadata: Json
          created_at: string
          updated_at: string
          resolved_at: string | null
        }
        Insert: {
          id?: string
          user_id: string
          title: string
          description: string
          status?: TicketStatus | null
          priority?: TicketPriority | null
          category?: string | null
          assigned_to?: string | null
          resolution?: string | null
          attachments?: string[] | null
          tags?: string[] | null
          metadata?: Json
          created_at?: string
          updated_at?: string
          resolved_at?: string | null
        }
        Update: {
          id?: string
          user_id?: string
          title?: string
          description?: string
          status?: TicketStatus | null
          priority?: TicketPriority | null
          category?: string | null
          assigned_to?: string | null
          resolution?: string | null
          attachments?: string[] | null
          tags?: string[] | null
          metadata?: Json
          created_at?: string
          updated_at?: string
          resolved_at?: string | null
        }
      }
      resource_downloads: {
        Row: {
          id: string
          user_id: string
          resource_id: string
          downloaded_at: string
          ip_address: string | null
        }
        Insert: {
          id?: string
          user_id: string
          resource_id: string
          downloaded_at?: string
          ip_address?: string | null
        }
        Update: {
          id?: string
          user_id?: string
          resource_id?: string
          downloaded_at?: string
          ip_address?: string | null
        }
      }
      user_progress: {
        Row: {
          id: string
          user_id: string
          resource_id: string
          progress_percentage: number | null
          completed_at: string | null
          last_accessed_at: string
          notes: string | null
          bookmarks: Json
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          user_id: string
          resource_id: string
          progress_percentage?: number | null
          completed_at?: string | null
          last_accessed_at?: string
          notes?: string | null
          bookmarks?: Json
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          user_id?: string
          resource_id?: string
          progress_percentage?: number | null
          completed_at?: string | null
          last_accessed_at?: string
          notes?: string | null
          bookmarks?: Json
          created_at?: string
          updated_at?: string
        }
      }
      notifications: {
        Row: {
          id: string
          user_id: string
          title: string
          message: string
          type: string | null
          read_at: string | null
          action_url: string | null
          metadata: Json
          created_at: string
        }
        Insert: {
          id?: string
          user_id: string
          title: string
          message: string
          type?: string | null
          read_at?: string | null
          action_url?: string | null
          metadata?: Json
          created_at?: string
        }
        Update: {
          id?: string
          user_id?: string
          title?: string
          message?: string
          type?: string | null
          read_at?: string | null
          action_url?: string | null
          metadata?: Json
          created_at?: string
        }
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      user_role: UserRole
      resource_type: ResourceType
      resource_category: ResourceCategory
      trading_experience: TradingExperience
      activity_type: ActivityType
      ticket_status: TicketStatus
      ticket_priority: TicketPriority
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

// Helper types for easier use
export type Tables<T extends keyof Database['public']['Tables']> = Database['public']['Tables'][T]['Row']
export type TablesInsert<T extends keyof Database['public']['Tables']> = Database['public']['Tables'][T]['Insert']
export type TablesUpdate<T extends keyof Database['public']['Tables']> = Database['public']['Tables'][T]['Update']

// Specific table types for convenience
export type Profile = Tables<'profiles'>
export type Resource = Tables<'resources'>
export type UserActivity = Tables<'user_activities'>
export type Ticket = Tables<'tickets'>
export type ResourceDownload = Tables<'resource_downloads'>
export type UserProgress = Tables<'user_progress'>
export type Notification = Tables<'notifications'>