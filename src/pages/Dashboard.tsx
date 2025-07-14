import { useEffect, useState } from 'react';
import { useAuth } from '@/hooks/useAuth';
import { supabase } from '@/integrations/supabase/client';
import { DashboardHeader } from '@/components/dashboard/DashboardHeader';
import { DashboardSidebar } from '@/components/dashboard/DashboardSidebar';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import {
  BookOpen,
  Clock,
  Trophy,
  TrendingUp,
  Play,
  Download,
  Users,
  MessageSquare,
  Calendar,
  Star,
  FileText,
  Code,
  BarChart3,
  Video,
  Award,
} from 'lucide-react';

interface UserProfile {
  full_name: string;
  signup_intent: string;
  trading_experience: string;
  primary_interest: string;
}

export default function Dashboard() {
  const { user } = useAuth();
  const [profile, setProfile] = useState<UserProfile | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProfile = async () => {
      if (!user) return;
      
      try {
        const { data } = await supabase
          .from('profiles')
          .select('*')
          .eq('user_id', user.id)
          .single();
        
        setProfile(data);
      } catch (error) {
        console.error('Error fetching profile:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchProfile();
  }, [user]);

  const getWelcomeMessage = () => {
    if (!profile) return 'Welcome to AutomateAlgos';
    
    const intent = profile.signup_intent;
    if (intent === 'access') {
      return `Welcome back, ${profile.full_name}! Ready to continue your algo trading journey?`;
    } else if (intent === 'download') {
      return `Welcome, ${profile.full_name}! Your resources are ready for download.`;
    }
    return `Welcome to AutomateAlgos, ${profile.full_name}!`;
  };

  const freeCourses = [
    {
      title: 'Algorithmic Trading Basics',
      description: 'Learn the fundamentals of algorithmic trading',
      duration: '2 hours',
      lessons: 8,
      difficulty: 'Beginner',
      icon: BookOpen,
    },
    {
      title: 'Introduction to Python for Trading',
      description: 'Master Python basics for trading applications',
      duration: '3 hours',
      lessons: 12,
      difficulty: 'Beginner',
      icon: Code,
    },
    {
      title: 'Risk Management Fundamentals',
      description: 'Essential risk management strategies',
      duration: '1.5 hours',
      lessons: 6,
      difficulty: 'Intermediate',
      icon: BarChart3,
    },
    {
      title: 'Getting Started with APIs',
      description: 'Connect to trading platforms via APIs',
      duration: '2.5 hours',
      lessons: 10,
      difficulty: 'Intermediate',
      icon: TrendingUp,
    },
  ];

  const freeResources = [
    {
      title: 'Sample Trading Strategies',
      description: 'Ready-to-use Python trading strategies',
      type: 'Python Scripts',
      icon: Code,
    },
    {
      title: 'Basic Algo Trading Guides',
      description: 'Comprehensive PDF guides for beginners',
      type: 'PDF Guides',
      icon: FileText,
    },
    {
      title: 'Trading Tools & Templates',
      description: 'Excel templates and analysis tools',
      type: 'Templates',
      icon: Download,
    },
    {
      title: 'Weekly Market Analysis',
      description: 'Expert market analysis and insights',
      type: 'Reports',
      icon: BarChart3,
    },
  ];

  if (loading) {
    return (
      <div className="min-h-screen bg-background">
        <DashboardHeader />
        <div className="flex">
          <DashboardSidebar />
          <main className="flex-1 p-6">
            <div className="animate-pulse space-y-4">
              <div className="h-8 bg-muted rounded w-1/3"></div>
              <div className="h-32 bg-muted rounded"></div>
              <div className="h-64 bg-muted rounded"></div>
            </div>
          </main>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <DashboardHeader />
      <div className="flex">
        <DashboardSidebar />
        <main className="flex-1 p-6">
          {/* Welcome Section */}
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-foreground mb-2">
              {getWelcomeMessage()}
            </h1>
            <p className="text-muted-foreground">
              Your personalized learning dashboard for algorithmic trading mastery
            </p>
          </div>

          {/* Quick Stats */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center">
                  <BookOpen className="h-8 w-8 text-primary" />
                  <div className="ml-4">
                    <p className="text-sm font-medium text-muted-foreground">Courses Completed</p>
                    <p className="text-2xl font-bold">0/4</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center">
                  <Clock className="h-8 w-8 text-primary" />
                  <div className="ml-4">
                    <p className="text-sm font-medium text-muted-foreground">Hours Learned</p>
                    <p className="text-2xl font-bold">0</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center">
                  <TrendingUp className="h-8 w-8 text-primary" />
                  <div className="ml-4">
                    <p className="text-sm font-medium text-muted-foreground">Current Streak</p>
                    <p className="text-2xl font-bold">1 day</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center">
                  <Trophy className="h-8 w-8 text-primary" />
                  <div className="ml-4">
                    <p className="text-sm font-medium text-muted-foreground">Achievements</p>
                    <p className="text-2xl font-bold">1</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Learning Progress */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle>Learning Progress Overview</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between text-sm mb-2">
                    <span>Overall Progress</span>
                    <span>0%</span>
                  </div>
                  <Progress value={0} className="w-full" />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
                  <div>
                    <h4 className="font-medium mb-2">Current Learning Path</h4>
                    <p className="text-sm text-muted-foreground">Algorithmic Trading Fundamentals</p>
                  </div>
                  <div>
                    <h4 className="font-medium mb-2">Next Recommended</h4>
                    <p className="text-sm text-muted-foreground">Algorithmic Trading Basics</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Free Courses */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="flex items-center">
                <BookOpen className="mr-2 h-5 w-5" />
                Free Courses - Available Now
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {freeCourses.map((course, index) => {
                  const Icon = course.icon;
                  return (
                    <Card key={index} className="border-2 hover:border-primary/50 transition-colors">
                      <CardContent className="p-6">
                        <div className="flex items-start justify-between mb-4">
                          <Icon className="h-8 w-8 text-primary" />
                          <Badge variant="outline">{course.difficulty}</Badge>
                        </div>
                        <h3 className="font-semibold mb-2">{course.title}</h3>
                        <p className="text-sm text-muted-foreground mb-4">
                          {course.description}
                        </p>
                        <div className="flex items-center justify-between text-sm text-muted-foreground mb-4">
                          <span>{course.duration}</span>
                          <span>{course.lessons} lessons</span>
                        </div>
                        <Button className="w-full">
                          <Play className="mr-2 h-4 w-4" />
                          Start Course
                        </Button>
                      </CardContent>
                    </Card>
                  );
                })}
              </div>
            </CardContent>
          </Card>

          {/* Free Resources */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="flex items-center">
                <Download className="mr-2 h-5 w-5" />
                Free Resources
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {freeResources.map((resource, index) => {
                  const Icon = resource.icon;
                  return (
                    <Card key={index} className="border hover:border-primary/50 transition-colors">
                      <CardContent className="p-6">
                        <div className="flex items-start justify-between mb-4">
                          <Icon className="h-6 w-6 text-primary" />
                          <Badge variant="secondary">{resource.type}</Badge>
                        </div>
                        <h3 className="font-semibold mb-2">{resource.title}</h3>
                        <p className="text-sm text-muted-foreground mb-4">
                          {resource.description}
                        </p>
                        <Button variant="outline" className="w-full">
                          <Download className="mr-2 h-4 w-4" />
                          Download
                        </Button>
                      </CardContent>
                    </Card>
                  );
                })}
              </div>
            </CardContent>
          </Card>

          {/* Community & Support */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Users className="mr-2 h-5 w-5" />
                  Community & Support
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <Button variant="outline" className="w-full justify-start">
                  <MessageSquare className="mr-2 h-4 w-4" />
                  Discussion Forums
                </Button>
                <Button variant="outline" className="w-full justify-start">
                  <Users className="mr-2 h-4 w-4" />
                  Student Chat
                </Button>
                <Button variant="outline" className="w-full justify-start">
                  <Calendar className="mr-2 h-4 w-4" />
                  Live Q&A Sessions
                </Button>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Star className="mr-2 h-5 w-5" />
                  Learning Path Recommendations
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="p-4 bg-muted rounded-lg">
                    <h4 className="font-medium mb-2">Recommended for You</h4>
                    <p className="text-sm text-muted-foreground mb-3">
                      Based on your {profile?.trading_experience?.toLowerCase()} experience and interest in {profile?.primary_interest?.toLowerCase()}
                    </p>
                    <Button size="sm">Start Learning Path</Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </main>
      </div>
    </div>
  );
}