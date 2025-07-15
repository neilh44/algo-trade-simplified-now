import { useState, useEffect } from 'react';
import { useAuth } from '@/hooks/useAuth';
import { supabase } from '@/integrations/supabase/client';
import { DashboardHeader } from '@/components/dashboard/DashboardHeader';
import { DashboardSidebar } from '@/components/dashboard/DashboardSidebar';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useToast } from '@/hooks/use-toast';
import {
  User,
  Mail,
  Phone,
  MapPin,
  Calendar,
  Edit,
  Save,
  Trophy,
  BookOpen,
  Clock,
  Star,
  Shield,
  Bell,
  Eye,
  EyeOff,
  Camera,
  Settings,
} from 'lucide-react';

interface UserProfile {
  full_name: string;
  phone_number: string;
  trading_experience: string;
  primary_interest: string;
  goals_message: string;
  how_heard_about_us: string;
  signup_intent: string;
  created_at: string;
}

export default function Profile() {
  const { user, signOut } = useAuth();
  const { toast } = useToast();
  const [profile, setProfile] = useState<UserProfile | null>(null);
  const [isEditing, setIsEditing] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [isSaving, setIsSaving] = useState(false);

  const [formData, setFormData] = useState({
    fullName: '',
    phoneNumber: '',
    tradingExperience: '',
    primaryInterest: '',
    goalsMessage: '',
    howHeardAboutUs: '',
  });

  const profileStats = {
    coursesCompleted: 2,
    hoursLearned: 5.5,
    streak: 7,
    achievements: 8,
    rank: 85,
    joinDate: '2024-01-08',
  };

  const recentActivity = [
    { type: 'course_completed', title: 'Algorithmic Trading Basics', date: '2024-01-15' },
    { type: 'lesson_completed', title: 'Python Variables and Data Types', date: '2024-01-14' },
    { type: 'quiz_passed', title: 'Risk Management Quiz', date: '2024-01-13' },
    { type: 'achievement_earned', title: 'Dedicated Student Badge', date: '2024-01-12' },
  ];

  const preferences = {
    emailNotifications: true,
    smsNotifications: false,
    coursesReminders: true,
    communityUpdates: true,
    marketingEmails: false,
    profileVisibility: 'public',
    showProgress: true,
    showAchievements: true,
  };

  useEffect(() => {
    const fetchProfile = async () => {
      if (!user) return;
      
      try {
        const { data, error } = await supabase
          .from('profiles')
          .select('*')
          .eq('user_id', user.id)
          .single();
        
        if (error) throw error;
        
        setProfile(data);
        setFormData({
          fullName: data.full_name || '',
          phoneNumber: data.phone_number || '',
          tradingExperience: data.trading_experience || '',
          primaryInterest: data.primary_interest || '',
          goalsMessage: data.goals_message || '',
          howHeardAboutUs: data.how_heard_about_us || '',
        });
      } catch (error) {
        console.error('Error fetching profile:', error);
        toast({
          title: 'Error',
          description: 'Failed to load profile data',
          variant: 'destructive',
        });
      } finally {
        setIsLoading(false);
      }
    };

    fetchProfile();
  }, [user, toast]);

  const handleSave = async () => {
    if (!user) return;
    
    setIsSaving(true);
    try {
      const { error } = await supabase
        .from('profiles')
        .update({
          full_name: formData.fullName,
          phone_number: formData.phoneNumber,
          trading_experience: formData.tradingExperience,
          primary_interest: formData.primaryInterest,
          goals_message: formData.goalsMessage,
          how_heard_about_us: formData.howHeardAboutUs,
          updated_at: new Date().toISOString(),
        })
        .eq('user_id', user.id);

      if (error) throw error;

      setIsEditing(false);
      toast({
        title: 'Success',
        description: 'Profile updated successfully',
      });
      
      // Refresh profile data
      window.location.reload();
    } catch (error) {
      console.error('Error updating profile:', error);
      toast({
        title: 'Error',
        description: 'Failed to update profile',
        variant: 'destructive',
      });
    } finally {
      setIsSaving(false);
    }
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  if (isLoading) {
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

  const getInitials = (name: string) => {
    return name
      .split(' ')
      .map(n => n[0])
      .join('')
      .toUpperCase()
      .slice(0, 2);
  };

  return (
    <div className="min-h-screen bg-background">
      <DashboardHeader />
      <div className="flex">
        <DashboardSidebar />
        <main className="flex-1 p-6">
          {/* Header */}
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-foreground mb-2">Profile</h1>
            <p className="text-muted-foreground">
              Manage your account settings and personal information
            </p>
          </div>

          {/* Profile Header */}
          <Card className="mb-8">
            <CardContent className="p-6">
              <div className="flex items-start space-x-6">
                <div className="relative">
                  <Avatar className="w-24 h-24">
                    <AvatarFallback className="text-2xl">
                      {profile?.full_name ? getInitials(profile.full_name) : 'U'}
                    </AvatarFallback>
                  </Avatar>
                  <Button
                    size="sm"
                    variant="outline"
                    className="absolute -bottom-2 -right-2 w-8 h-8 rounded-full p-0"
                  >
                    <Camera className="h-4 w-4" />
                  </Button>
                </div>
                
                <div className="flex-1 space-y-4">
                  <div className="flex items-start justify-between">
                    <div>
                      <h2 className="text-2xl font-bold">{profile?.full_name || 'User'}</h2>
                      <p className="text-muted-foreground">{user?.email}</p>
                      <div className="flex items-center space-x-4 mt-2 text-sm text-muted-foreground">
                        <div className="flex items-center space-x-1">
                          <Calendar className="h-4 w-4" />
                          <span>Joined {new Date(profileStats.joinDate).toLocaleDateString()}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Trophy className="h-4 w-4" />
                          <span>Rank #{profileStats.rank}</span>
                        </div>
                      </div>
                    </div>
                    
                    <div className="flex space-x-2">
                      {isEditing ? (
                        <>
                          <Button
                            variant="outline"
                            onClick={() => setIsEditing(false)}
                            disabled={isSaving}
                          >
                            Cancel
                          </Button>
                          <Button onClick={handleSave} disabled={isSaving}>
                            <Save className="mr-2 h-4 w-4" />
                            {isSaving ? 'Saving...' : 'Save Changes'}
                          </Button>
                        </>
                      ) : (
                        <Button onClick={() => setIsEditing(true)}>
                          <Edit className="mr-2 h-4 w-4" />
                          Edit Profile
                        </Button>
                      )}
                    </div>
                  </div>

                  {/* Quick Stats */}
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    <div className="text-center p-3 bg-muted rounded-lg">
                      <BookOpen className="h-5 w-5 text-primary mx-auto mb-1" />
                      <p className="text-sm font-medium">{profileStats.coursesCompleted}</p>
                      <p className="text-xs text-muted-foreground">Courses</p>
                    </div>
                    <div className="text-center p-3 bg-muted rounded-lg">
                      <Clock className="h-5 w-5 text-primary mx-auto mb-1" />
                      <p className="text-sm font-medium">{profileStats.hoursLearned}h</p>
                      <p className="text-xs text-muted-foreground">Learned</p>
                    </div>
                    <div className="text-center p-3 bg-muted rounded-lg">
                      <Star className="h-5 w-5 text-primary mx-auto mb-1" />
                      <p className="text-sm font-medium">{profileStats.streak}</p>
                      <p className="text-xs text-muted-foreground">Day Streak</p>
                    </div>
                    <div className="text-center p-3 bg-muted rounded-lg">
                      <Trophy className="h-5 w-5 text-primary mx-auto mb-1" />
                      <p className="text-sm font-medium">{profileStats.achievements}</p>
                      <p className="text-xs text-muted-foreground">Achievements</p>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Tabs defaultValue="personal" className="space-y-6">
            <TabsList>
              <TabsTrigger value="personal">Personal Info</TabsTrigger>
              <TabsTrigger value="activity">Activity</TabsTrigger>
              <TabsTrigger value="preferences">Preferences</TabsTrigger>
              <TabsTrigger value="security">Security</TabsTrigger>
            </TabsList>

            <TabsContent value="personal" className="space-y-6">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Personal Information</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="fullName">Full Name</Label>
                      <Input
                        id="fullName"
                        value={formData.fullName}
                        onChange={(e) => handleInputChange('fullName', e.target.value)}
                        disabled={!isEditing}
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="email">Email Address</Label>
                      <Input
                        id="email"
                        value={user?.email || ''}
                        disabled
                        className="bg-muted"
                      />
                      <p className="text-xs text-muted-foreground">
                        Email cannot be changed directly. Contact support if needed.
                      </p>
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone Number</Label>
                      <Input
                        id="phone"
                        value={formData.phoneNumber}
                        onChange={(e) => handleInputChange('phoneNumber', e.target.value)}
                        disabled={!isEditing}
                      />
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Trading Background</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="experience">Trading Experience</Label>
                      <Select
                        value={formData.tradingExperience}
                        onValueChange={(value) => handleInputChange('tradingExperience', value)}
                        disabled={!isEditing}
                      >
                        <SelectTrigger>
                          <SelectValue placeholder="Select your experience level" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="beginner">Beginner</SelectItem>
                          <SelectItem value="intermediate">Intermediate</SelectItem>
                          <SelectItem value="advanced">Advanced</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="interest">Primary Interest</Label>
                      <Select
                        value={formData.primaryInterest}
                        onValueChange={(value) => handleInputChange('primaryInterest', value)}
                        disabled={!isEditing}
                      >
                        <SelectTrigger>
                          <SelectValue placeholder="Select your primary interest" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="python-trading">Python Trading</SelectItem>
                          <SelectItem value="strategy-development">Strategy Development</SelectItem>
                          <SelectItem value="risk-management">Risk Management</SelectItem>
                          <SelectItem value="api-integration">API Integration</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="source">How did you hear about us?</Label>
                      <Select
                        value={formData.howHeardAboutUs}
                        onValueChange={(value) => handleInputChange('howHeardAboutUs', value)}
                        disabled={!isEditing}
                      >
                        <SelectTrigger>
                          <SelectValue placeholder="Select an option" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="google">Google Search</SelectItem>
                          <SelectItem value="youtube">YouTube</SelectItem>
                          <SelectItem value="social-media">Social Media</SelectItem>
                          <SelectItem value="referral">Friend Referral</SelectItem>
                          <SelectItem value="blog">Blog/Article</SelectItem>
                          <SelectItem value="other">Other</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </CardContent>
                </Card>
              </div>

              <Card>
                <CardHeader>
                  <CardTitle>Goals & Message</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <Label htmlFor="goals">Your Trading Goals</Label>
                    <Textarea
                      id="goals"
                      value={formData.goalsMessage}
                      onChange={(e) => handleInputChange('goalsMessage', e.target.value)}
                      disabled={!isEditing}
                      placeholder="Tell us about your trading goals and what you'd like to achieve..."
                      className="min-h-[100px]"
                    />
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="activity" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Recent Activity</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {recentActivity.map((activity, index) => (
                      <div key={index} className="flex items-center space-x-3 p-3 rounded-lg border">
                        <div className="p-2 bg-primary/10 rounded-lg">
                          {activity.type === 'course_completed' && <BookOpen className="h-4 w-4 text-primary" />}
                          {activity.type === 'lesson_completed' && <Star className="h-4 w-4 text-primary" />}
                          {activity.type === 'quiz_passed' && <Trophy className="h-4 w-4 text-primary" />}
                          {activity.type === 'achievement_earned' && <Shield className="h-4 w-4 text-primary" />}
                        </div>
                        <div className="flex-1">
                          <p className="font-medium">{activity.title}</p>
                          <p className="text-sm text-muted-foreground">
                            {new Date(activity.date).toLocaleDateString()}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="preferences" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Notification Preferences</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <Label>Email Notifications</Label>
                        <p className="text-sm text-muted-foreground">Receive course updates and announcements</p>
                      </div>
                      <Button variant="outline" size="sm">
                        {preferences.emailNotifications ? 'Enabled' : 'Disabled'}
                      </Button>
                    </div>
                    <div className="flex items-center justify-between">
                      <div>
                        <Label>Course Reminders</Label>
                        <p className="text-sm text-muted-foreground">Get reminded about scheduled sessions</p>
                      </div>
                      <Button variant="outline" size="sm">
                        {preferences.coursesReminders ? 'Enabled' : 'Disabled'}
                      </Button>
                    </div>
                    <div className="flex items-center justify-between">
                      <div>
                        <Label>Community Updates</Label>
                        <p className="text-sm text-muted-foreground">Stay updated with community discussions</p>
                      </div>
                      <Button variant="outline" size="sm">
                        {preferences.communityUpdates ? 'Enabled' : 'Disabled'}
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Privacy Settings</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <Label>Profile Visibility</Label>
                      <p className="text-sm text-muted-foreground">Control who can see your profile</p>
                    </div>
                    <Badge variant="outline">Public</Badge>
                  </div>
                  <div className="flex items-center justify-between">
                    <div>
                      <Label>Show Learning Progress</Label>
                      <p className="text-sm text-muted-foreground">Display your course progress to others</p>
                    </div>
                    <Button variant="outline" size="sm">
                      {preferences.showProgress ? <Eye className="h-4 w-4" /> : <EyeOff className="h-4 w-4" />}
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="security" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Security Settings</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <Label>Password</Label>
                      <p className="text-sm text-muted-foreground">Last changed 30 days ago</p>
                    </div>
                    <Button variant="outline">Change Password</Button>
                  </div>
                  <div className="flex items-center justify-between">
                    <div>
                      <Label>Two-Factor Authentication</Label>
                      <p className="text-sm text-muted-foreground">Add an extra layer of security</p>
                    </div>
                    <Button variant="outline">Enable 2FA</Button>
                  </div>
                  <div className="flex items-center justify-between">
                    <div>
                      <Label>Account Deletion</Label>
                      <p className="text-sm text-muted-foreground">Permanently delete your account</p>
                    </div>
                    <Button variant="destructive" size="sm">Delete Account</Button>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Active Sessions</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between p-3 border rounded-lg">
                      <div>
                        <p className="font-medium">Current Session</p>
                        <p className="text-sm text-muted-foreground">Chrome on Windows • Now</p>
                      </div>
                      <Badge variant="outline">Current</Badge>
                    </div>
                    <Button variant="outline" className="w-full">
                      Sign Out All Devices
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </main>
      </div>
    </div>
  );
}