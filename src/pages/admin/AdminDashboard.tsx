import { useEffect, useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { useAdmin } from '@/hooks/useAdmin';
import { Users, FileText, Activity, HelpCircle } from 'lucide-react';

export const AdminDashboard = () => {
  const { 
    users, 
    resources, 
    activities, 
    tickets,
    fetchUsers,
    fetchResources,
    fetchActivities,
    fetchTickets
  } = useAdmin();

  const [stats, setStats] = useState({
    totalUsers: 0,
    totalResources: 0,
    recentActivities: 0,
    openTickets: 0,
    resourceDownloads: 0,
    activeUsers: 0
  });

  useEffect(() => {
    const loadData = async () => {
      await Promise.all([
        fetchUsers(),
        fetchResources(),
        fetchActivities(),
        fetchTickets()
      ]);
    };
    loadData();
  }, []);

  useEffect(() => {
    // Calculate stats when data is loaded
    const totalDownloads = resources.reduce((sum, resource) => sum + (resource.download_count || 0), 0);
    const openTicketsCount = tickets.filter(ticket => ticket.status === 'open').length;
    const recentActivitiesCount = activities.filter(activity => {
      const activityDate = new Date(activity.created_at);
      const weekAgo = new Date();
      weekAgo.setDate(weekAgo.getDate() - 7);
      return activityDate > weekAgo;
    }).length;

    // Calculate active users (users with activity in last 30 days)
    const monthAgo = new Date();
    monthAgo.setDate(monthAgo.getDate() - 30);
    const activeUserIds = new Set(
      activities
        .filter(activity => new Date(activity.created_at) > monthAgo)
        .map(activity => activity.user_id)
    );

    setStats({
      totalUsers: users.length,
      totalResources: resources.length,
      recentActivities: recentActivitiesCount,
      openTickets: openTicketsCount,
      resourceDownloads: totalDownloads,
      activeUsers: activeUserIds.size
    });
  }, [users, resources, activities, tickets]);

  const statCards = [
    {
      title: 'Total Users',
      value: stats.totalUsers,
      icon: Users,
      description: `${stats.activeUsers} active this month`
    },
    {
      title: 'Resources',
      value: stats.totalResources,
      icon: FileText,
      description: `${stats.resourceDownloads} total downloads`
    },
    {
      title: 'Recent Activity',
      value: stats.recentActivities,
      icon: Activity,
      description: 'Actions this week'
    },
    {
      title: 'Open Tickets',
      value: stats.openTickets,
      icon: HelpCircle,
      description: 'Require attention'
    }
  ];

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-foreground">Admin Dashboard</h1>
        <p className="text-muted-foreground">
          Overview of your AutomateAlgos platform
        </p>
      </div>

      {/* Stats Grid */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {statCards.map((stat) => (
          <Card key={stat.title}>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">
                {stat.title}
              </CardTitle>
              <stat.icon className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-foreground">{stat.value}</div>
              <p className="text-xs text-muted-foreground">{stat.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Recent Activity Overview */}
      <div className="grid gap-4 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Recent User Activity</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              {activities.slice(0, 5).map((activity) => (
                <div key={activity.id} className="flex items-center justify-between text-sm">
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-primary rounded-full" />
                    <span className="text-foreground">
                      {activity.activity_type.replace('_', ' ')}
                    </span>
                  </div>
                  <span className="text-muted-foreground">
                    {new Date(activity.created_at).toLocaleDateString()}
                  </span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Popular Resources</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              {resources
                .sort((a, b) => (b.download_count || 0) - (a.download_count || 0))
                .slice(0, 5)
                .map((resource) => (
                  <div key={resource.id} className="flex items-center justify-between text-sm">
                    <span className="text-foreground truncate">{resource.title}</span>
                    <span className="text-muted-foreground">
                      {resource.download_count || 0} downloads
                    </span>
                  </div>
                ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};