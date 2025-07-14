import { useState, useEffect } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { useAuth } from './useAuth';
import type { Tables } from '@/integrations/supabase/types';

type Profile = Tables<'profiles'>;
type Resource = Tables<'resources'>;
type UserActivity = Tables<'user_activities'>;
type SupportTicket = Tables<'support_tickets'>;

export const useAdmin = () => {
  const { user } = useAuth();
  const [isAdmin, setIsAdmin] = useState(false);
  const [users, setUsers] = useState<Profile[]>([]);
  const [resources, setResources] = useState<Resource[]>([]);
  const [activities, setActivities] = useState<UserActivity[]>([]);
  const [tickets, setTickets] = useState<SupportTicket[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    checkAdminStatus();
  }, [user]);

  const checkAdminStatus = async () => {
    if (!user) {
      setIsAdmin(false);
      setLoading(false);
      return;
    }

    try {
      const { data: profile } = await supabase
        .from('profiles')
        .select('role')
        .eq('user_id', user.id)
        .single();

      setIsAdmin(profile?.role === 'admin');
    } catch (error) {
      console.error('Error checking admin status:', error);
      setIsAdmin(false);
    } finally {
      setLoading(false);
    }
  };

  const fetchUsers = async () => {
    if (!isAdmin) return;
    
    try {
      const { data, error } = await supabase
        .from('profiles')
        .select('*')
        .order('created_at', { ascending: false });

      if (error) throw error;
      setUsers(data || []);
    } catch (error) {
      console.error('Error fetching users:', error);
    }
  };

  const fetchResources = async () => {
    if (!isAdmin) return;
    
    try {
      const { data, error } = await supabase
        .from('resources')
        .select('*')
        .order('created_at', { ascending: false });

      if (error) throw error;
      setResources(data || []);
    } catch (error) {
      console.error('Error fetching resources:', error);
    }
  };

  const fetchActivities = async () => {
    if (!isAdmin) return;
    
    try {
      const { data, error } = await supabase
        .from('user_activities')
        .select(`
          *,
          profiles!user_activities_user_id_fkey(full_name),
          resources(title)
        `)
        .order('created_at', { ascending: false })
        .limit(100);

      if (error) throw error;
      setActivities(data || []);
    } catch (error) {
      console.error('Error fetching activities:', error);
    }
  };

  const fetchTickets = async () => {
    if (!isAdmin) return;
    
    try {
      const { data, error } = await supabase
        .from('support_tickets')
        .select(`
          *,
          profiles!support_tickets_user_id_fkey(full_name)
        `)
        .order('created_at', { ascending: false });

      if (error) throw error;
      setTickets(data || []);
    } catch (error) {
      console.error('Error fetching tickets:', error);
    }
  };

  const createResource = async (resource: Omit<Resource, 'id' | 'created_at' | 'updated_at' | 'download_count' | 'created_by'>) => {
    if (!isAdmin || !user) return;

    try {
      const { data, error } = await supabase
        .from('resources')
        .insert([{ ...resource, created_by: user.id }])
        .select()
        .single();

      if (error) throw error;
      await fetchResources();
      return data;
    } catch (error) {
      console.error('Error creating resource:', error);
      throw error;
    }
  };

  const updateResource = async (id: string, updates: Partial<Resource>) => {
    if (!isAdmin) return;

    try {
      const { error } = await supabase
        .from('resources')
        .update(updates)
        .eq('id', id);

      if (error) throw error;
      await fetchResources();
    } catch (error) {
      console.error('Error updating resource:', error);
      throw error;
    }
  };

  const deleteResource = async (id: string) => {
    if (!isAdmin) return;

    try {
      const { error } = await supabase
        .from('resources')
        .delete()
        .eq('id', id);

      if (error) throw error;
      await fetchResources();
    } catch (error) {
      console.error('Error deleting resource:', error);
      throw error;
    }
  };

  const updateTicketStatus = async (id: string, status: string) => {
    if (!isAdmin) return;

    try {
      const { error } = await supabase
        .from('support_tickets')
        .update({ status, assigned_to: user?.id })
        .eq('id', id);

      if (error) throw error;
      await fetchTickets();
    } catch (error) {
      console.error('Error updating ticket:', error);
      throw error;
    }
  };

  return {
    isAdmin,
    loading,
    users,
    resources,
    activities,
    tickets,
    fetchUsers,
    fetchResources,
    fetchActivities,
    fetchTickets,
    createResource,
    updateResource,
    deleteResource,
    updateTicketStatus,
  };
};