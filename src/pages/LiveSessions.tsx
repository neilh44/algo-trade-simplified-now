import { useState } from 'react';
import { DashboardHeader } from '@/components/dashboard/DashboardHeader';
import { DashboardSidebar } from '@/components/dashboard/DashboardSidebar';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import {
  Video,
  Calendar,
  Clock,
  Users,
  Play,
  Bookmark,
  MessageSquare,
  Star,
  Filter,
  Search,
  Bell,
  Headphones,
  Monitor,
  Camera,
  Shield,
} from 'lucide-react';

export default function LiveSessions() {
  const [filter, setFilter] = useState('all');

  const upcomingSessions = [
    {
      id: 1,
      title: 'Advanced Python Trading Strategies',
      instructor: 'Sarah Johnson',
      instructorTitle: 'Senior Quantitative Analyst',
      date: '2024-01-20',
      time: '2:00 PM EST',
      duration: '90 minutes',
      attendees: 156,
      maxAttendees: 200,
      level: 'Advanced',
      category: 'Programming',
      description: 'Deep dive into advanced Python techniques for developing robust trading strategies.',
      topics: ['Advanced Python', 'Strategy Development', 'Risk Management', 'Live Coding'],
      isLive: false,
      hasReminder: true,
      price: 'Free',
      recording: true,
    },
    {
      id: 2,
      title: 'Market Analysis & Trading Psychology',
      instructor: 'Michael Chen',
      instructorTitle: 'Professional Trader',
      date: '2024-01-22',
      time: '6:00 PM EST',
      duration: '60 minutes',
      attendees: 89,
      maxAttendees: 150,
      level: 'Intermediate',
      category: 'Psychology',
      description: 'Learn how to analyze markets effectively and master the psychological aspects of trading.',
      topics: ['Market Analysis', 'Trading Psychology', 'Risk Management', 'Q&A'],
      isLive: false,
      hasReminder: false,
      price: 'Free',
      recording: true,
    },
    {
      id: 3,
      title: 'Building Your First Trading Bot',
      instructor: 'Emma Rodriguez',
      instructorTitle: 'Lead Developer',
      date: '2024-01-25',
      time: '3:00 PM EST',
      duration: '120 minutes',
      attendees: 234,
      maxAttendees: 300,
      level: 'Beginner',
      category: 'Programming',
      description: 'Step-by-step guide to building your first automated trading bot from scratch.',
      topics: ['Bot Development', 'API Integration', 'Strategy Implementation', 'Testing'],
      isLive: false,
      hasReminder: true,
      price: 'Free',
      recording: true,
    },
  ];

  const liveNow = [
    {
      id: 4,
      title: 'Weekly Market Wrap-up & Q&A',
      instructor: 'David Wilson',
      instructorTitle: 'Market Analyst',
      startTime: '1:00 PM EST',
      duration: '45 minutes',
      attendees: 78,
      level: 'All Levels',
      category: 'Market Analysis',
      isLive: true,
    },
  ];

  const pastSessions = [
    {
      id: 5,
      title: 'Introduction to Algorithmic Trading',
      instructor: 'Alex Thompson',
      date: '2024-01-15',
      duration: '75 minutes',
      views: 1240,
      rating: 4.8,
      level: 'Beginner',
      category: 'Fundamentals',
      hasRecording: true,
    },
    {
      id: 6,
      title: 'Risk Management Best Practices',
      instructor: 'Lisa Park',
      date: '2024-01-12',
      duration: '90 minutes',
      views: 890,
      rating: 4.9,
      level: 'Intermediate',
      category: 'Risk Management',
      hasRecording: true,
    },
    {
      id: 7,
      title: 'Technical Analysis with Python',
      instructor: 'Robert Kim',
      date: '2024-01-10',
      duration: '100 minutes',
      views: 1567,
      rating: 4.7,
      level: 'Advanced',
      category: 'Technical Analysis',
      hasRecording: true,
    },
  ];

  const getLevelColor = (level: string) => {
    switch (level) {
      case 'Beginner': return 'bg-secondary text-secondary-foreground';
      case 'Intermediate': return 'bg-primary text-primary-foreground';
      case 'Advanced': return 'bg-accent text-accent-foreground';
      case 'All Levels': return 'bg-muted text-muted-foreground';
      default: return 'bg-muted text-muted-foreground';
    }
  };

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'Programming': return Monitor;
      case 'Market Analysis': return Calendar;
      case 'Psychology': return Headphones;
      case 'Risk Management': return Shield;
      default: return Video;
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <DashboardHeader />
      <div className="flex">
        <DashboardSidebar />
        <main className="flex-1 p-6">
          {/* Header */}
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-foreground mb-2">Live Sessions</h1>
            <p className="text-muted-foreground">
              Join live trading sessions with expert instructors and interactive Q&A
            </p>
          </div>

          {/* Live Now Banner */}
          {liveNow.length > 0 && (
            <Card className="mb-8 border-2 border-red-500 bg-red-50 dark:bg-red-900/10">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <div className="flex items-center space-x-2">
                      <div className="w-3 h-3 bg-red-500 rounded-full animate-pulse"></div>
                      <Badge className="bg-red-500 text-white">LIVE NOW</Badge>
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg">{liveNow[0].title}</h3>
                      <p className="text-sm text-muted-foreground">
                        with {liveNow[0].instructor} • {liveNow[0].attendees} watching
                      </p>
                    </div>
                  </div>
                  <Button className="bg-red-500 hover:bg-red-600">
                    <Camera className="mr-2 h-4 w-4" />
                    Join Live Session
                  </Button>
                </div>
              </CardContent>
            </Card>
          )}

          <Tabs defaultValue="upcoming" className="space-y-6">
            <TabsList>
              <TabsTrigger value="upcoming">Upcoming Sessions</TabsTrigger>
              <TabsTrigger value="recordings">Past Recordings</TabsTrigger>
              <TabsTrigger value="schedule">My Schedule</TabsTrigger>
            </TabsList>

            <TabsContent value="upcoming" className="space-y-6">
              {/* Quick Stats */}
              <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-center">
                      <Video className="h-8 w-8 text-primary" />
                      <div className="ml-4">
                        <p className="text-sm font-medium text-muted-foreground">This Week</p>
                        <p className="text-2xl font-bold">3</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-center">
                      <Users className="h-8 w-8 text-primary" />
                      <div className="ml-4">
                        <p className="text-sm font-medium text-muted-foreground">Total Attendees</p>
                        <p className="text-2xl font-bold">479</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-center">
                      <Clock className="h-8 w-8 text-primary" />
                      <div className="ml-4">
                        <p className="text-sm font-medium text-muted-foreground">Hours This Month</p>
                        <p className="text-2xl font-bold">12.5</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-center">
                      <Bookmark className="h-8 w-8 text-primary" />
                      <div className="ml-4">
                        <p className="text-sm font-medium text-muted-foreground">Saved Sessions</p>
                        <p className="text-2xl font-bold">8</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Upcoming Sessions */}
              <div className="space-y-6">
                {upcomingSessions.map((session) => {
                  const CategoryIcon = getCategoryIcon(session.category);
                  return (
                    <Card key={session.id} className="hover:shadow-lg transition-shadow">
                      <CardContent className="p-6">
                        <div className="flex items-start space-x-6">
                          <div className="p-4 bg-primary/10 rounded-lg">
                            <CategoryIcon className="h-8 w-8 text-primary" />
                          </div>
                          
                          <div className="flex-1 space-y-4">
                            <div className="flex items-start justify-between">
                              <div>
                                <h3 className="text-xl font-semibold mb-2">{session.title}</h3>
                                <p className="text-muted-foreground mb-3">{session.description}</p>
                                
                                <div className="flex items-center space-x-4 text-sm text-muted-foreground mb-3">
                                  <div className="flex items-center space-x-1">
                                    <Calendar className="h-4 w-4" />
                                    <span>{new Date(session.date).toLocaleDateString()}</span>
                                  </div>
                                  <div className="flex items-center space-x-1">
                                    <Clock className="h-4 w-4" />
                                    <span>{session.time}</span>
                                  </div>
                                  <div className="flex items-center space-x-1">
                                    <Users className="h-4 w-4" />
                                    <span>{session.attendees}/{session.maxAttendees}</span>
                                  </div>
                                </div>

                                <div className="flex items-center space-x-3 mb-4">
                                  <Avatar>
                                    <AvatarFallback>
                                      {session.instructor.split(' ').map(n => n[0]).join('')}
                                    </AvatarFallback>
                                  </Avatar>
                                  <div>
                                    <p className="font-medium">{session.instructor}</p>
                                    <p className="text-xs text-muted-foreground">{session.instructorTitle}</p>
                                  </div>
                                </div>
                              </div>
                              
                              <div className="flex flex-col items-end space-y-2">
                                <Badge className={getLevelColor(session.level)}>
                                  {session.level}
                                </Badge>
                                <Badge variant="outline">{session.category}</Badge>
                                {session.recording && (
                                  <Badge variant="outline" className="text-xs">
                                    <Video className="mr-1 h-3 w-3" />
                                    Recorded
                                  </Badge>
                                )}
                              </div>
                            </div>

                            <div className="flex flex-wrap gap-2 mb-4">
                              {session.topics.map((topic, index) => (
                                <Badge key={index} variant="outline" className="text-xs">
                                  {topic}
                                </Badge>
                              ))}
                            </div>

                            <div className="flex items-center justify-between">
                              <div className="flex items-center space-x-2">
                                <Badge variant="outline" className="text-green-600 border-green-600">
                                  {session.price}
                                </Badge>
                                <span className="text-sm text-muted-foreground">
                                  Duration: {session.duration}
                                </span>
                              </div>
                              
                              <div className="flex space-x-2">
                                <Button variant="outline" size="sm">
                                  <Bell className={`h-4 w-4 mr-2 ${session.hasReminder ? 'text-primary' : ''}`} />
                                  {session.hasReminder ? 'Reminder Set' : 'Set Reminder'}
                                </Button>
                                <Button size="sm">
                                  <Users className="mr-2 h-4 w-4" />
                                  Register
                                </Button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  );
                })}
              </div>
            </TabsContent>

            <TabsContent value="recordings" className="space-y-6">
              <div className="space-y-4">
                {pastSessions.map((session) => (
                  <Card key={session.id} className="hover:shadow-md transition-shadow">
                    <CardContent className="p-6">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-4">
                          <div className="p-3 bg-muted rounded-lg">
                            <Play className="h-6 w-6 text-muted-foreground" />
                          </div>
                          <div>
                            <h3 className="font-semibold text-lg">{session.title}</h3>
                            <p className="text-sm text-muted-foreground">
                              with {session.instructor} • {new Date(session.date).toLocaleDateString()}
                            </p>
                            <div className="flex items-center space-x-4 mt-2">
                        <Badge className={getLevelColor(session.level)}>
                          {session.level}
                        </Badge>
                              <div className="flex items-center space-x-1 text-sm text-muted-foreground">
                                <Clock className="h-4 w-4" />
                                <span>{session.duration}</span>
                              </div>
                              <div className="flex items-center space-x-1 text-sm text-muted-foreground">
                                <Play className="h-4 w-4" />
                                <span>{session.views.toLocaleString()} views</span>
                              </div>
                              <div className="flex items-center space-x-1 text-sm text-muted-foreground">
                                <Star className="h-4 w-4 text-yellow-500 fill-current" />
                                <span>{session.rating}</span>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="flex space-x-2">
                          <Button variant="outline" size="sm">
                            <Bookmark className="h-4 w-4 mr-2" />
                            Save
                          </Button>
                          <Button size="sm">
                            <Play className="h-4 w-4 mr-2" />
                            Watch
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="schedule" className="space-y-6">
              <Card>
                <CardContent className="p-6 text-center">
                  <Calendar className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                  <p className="text-lg text-muted-foreground">Your Personal Schedule</p>
                  <p className="text-sm text-muted-foreground mb-4">
                    View all your registered sessions and set custom reminders
                  </p>
                  <Button>
                    <Calendar className="mr-2 h-4 w-4" />
                    View Calendar
                  </Button>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </main>
      </div>
    </div>
  );
}