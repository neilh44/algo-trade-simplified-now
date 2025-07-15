import { DashboardHeader } from '@/components/dashboard/DashboardHeader';
import { DashboardSidebar } from '@/components/dashboard/DashboardSidebar';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import {
  Trophy,
  Award,
  Star,
  Target,
  Crown,
  Medal,
  Zap,
  Flame,
  BookOpen,
  Code,
  Users,
  Calendar,
  Clock,
  TrendingUp,
  Shield,
  Brain,
  Rocket,
} from 'lucide-react';

export default function Achievements() {
  const userStats = {
    totalPoints: 1250,
    level: 'Bronze Trader',
    rank: 85,
    totalUsers: 2847,
    achievementsEarned: 8,
    totalAchievements: 24,
  };

  const categories = [
    { name: 'Learning', icon: BookOpen, earned: 4, total: 8, color: 'text-blue-500' },
    { name: 'Programming', icon: Code, earned: 2, total: 6, color: 'text-green-500' },
    { name: 'Community', icon: Users, earned: 1, total: 4, color: 'text-purple-500' },
    { name: 'Consistency', icon: Calendar, earned: 1, total: 6, color: 'text-orange-500' },
  ];

  const recentAchievements = [
    {
      title: 'Dedicated Student',
      description: 'Maintained a 7-day learning streak',
      category: 'Consistency',
      points: 150,
      earnedDate: '2024-01-15',
      icon: Flame,
      rarity: 'Common',
    },
    {
      title: 'Quick Learner',
      description: 'Completed first course in under 3 days',
      category: 'Learning',
      points: 200,
      earnedDate: '2024-01-10',
      icon: Zap,
      rarity: 'Uncommon',
    },
    {
      title: 'First Steps',
      description: 'Started your first course',
      category: 'Learning',
      points: 100,
      earnedDate: '2024-01-08',
      icon: BookOpen,
      rarity: 'Common',
    },
  ];

  const allAchievements = [
    // Learning Achievements
    {
      id: 1,
      title: 'First Steps',
      description: 'Start your first course',
      category: 'Learning',
      points: 100,
      icon: BookOpen,
      rarity: 'Common',
      earned: true,
      earnedDate: '2024-01-08',
      progress: 100,
    },
    {
      id: 2,
      title: 'Course Crusher',
      description: 'Complete your first course',
      category: 'Learning',
      points: 200,
      icon: Trophy,
      rarity: 'Common',
      earned: true,
      earnedDate: '2024-01-10',
      progress: 100,
    },
    {
      id: 3,
      title: 'Knowledge Seeker',
      description: 'Complete 5 courses',
      category: 'Learning',
      points: 500,
      icon: Star,
      rarity: 'Uncommon',
      earned: false,
      progress: 40,
      requirement: '2/5 courses completed',
    },
    {
      id: 4,
      title: 'Learning Master',
      description: 'Complete 10 courses',
      category: 'Learning',
      points: 1000,
      icon: Crown,
      rarity: 'Rare',
      earned: false,
      progress: 20,
      requirement: '2/10 courses completed',
    },
    // Programming Achievements
    {
      id: 5,
      title: 'Code Newbie',
      description: 'Complete your first Python lesson',
      category: 'Programming',
      points: 150,
      icon: Code,
      rarity: 'Common',
      earned: true,
      earnedDate: '2024-01-12',
      progress: 100,
    },
    {
      id: 6,
      title: 'Algorithm Architect',
      description: 'Build your first trading algorithm',
      category: 'Programming',
      points: 300,
      icon: Brain,
      rarity: 'Uncommon',
      earned: false,
      progress: 0,
      requirement: 'Complete algorithm building course',
    },
    // Community Achievements
    {
      id: 7,
      title: 'Helpful Member',
      description: 'Help 5 community members',
      category: 'Community',
      points: 250,
      icon: Users,
      rarity: 'Uncommon',
      earned: false,
      progress: 0,
      requirement: '0/5 members helped',
    },
    // Consistency Achievements
    {
      id: 8,
      title: 'Dedicated Student',
      description: 'Maintain a 7-day learning streak',
      category: 'Consistency',
      points: 150,
      icon: Flame,
      rarity: 'Common',
      earned: true,
      earnedDate: '2024-01-15',
      progress: 100,
    },
    {
      id: 9,
      title: 'Streak Master',
      description: 'Maintain a 30-day learning streak',
      category: 'Consistency',
      points: 500,
      icon: Rocket,
      rarity: 'Rare',
      earned: false,
      progress: 23,
      requirement: '7/30 days streak',
    },
  ];

  const leaderboard = [
    { rank: 1, name: 'TradingPro', points: 4560, level: 'Gold Trader', avatar: 'TP' },
    { rank: 2, name: 'CodeMaster', points: 3890, level: 'Silver Trader', avatar: 'CM' },
    { rank: 3, name: 'StrategyKing', points: 3245, level: 'Silver Trader', avatar: 'SK' },
    { rank: 4, name: 'DataWhiz', points: 2987, level: 'Bronze Trader', avatar: 'DW' },
    { rank: 5, name: 'AlgoGuru', points: 2654, level: 'Bronze Trader', avatar: 'AG' },
  ];

  const getRarityColor = (rarity: string) => {
    switch (rarity) {
      case 'Common': return 'text-gray-600 border-gray-200';
      case 'Uncommon': return 'text-green-600 border-green-200';
      case 'Rare': return 'text-blue-600 border-blue-200';
      case 'Epic': return 'text-purple-600 border-purple-200';
      case 'Legendary': return 'text-yellow-600 border-yellow-200';
      default: return 'text-gray-600 border-gray-200';
    }
  };

  const getLevelIcon = (level: string) => {
    if (level.includes('Gold')) return Crown;
    if (level.includes('Silver')) return Medal;
    if (level.includes('Bronze')) return Trophy;
    return Award;
  };

  return (
    <div className="min-h-screen bg-background">
      <DashboardHeader />
      <div className="flex">
        <DashboardSidebar />
        <main className="flex-1 p-6">
          {/* Header */}
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-foreground mb-2">Achievements</h1>
            <p className="text-muted-foreground">
              Track your progress and celebrate your milestones in algorithmic trading
            </p>
          </div>

          {/* User Stats */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center">
                  <Trophy className="h-8 w-8 text-primary" />
                  <div className="ml-4">
                    <p className="text-sm font-medium text-muted-foreground">Total Points</p>
                    <p className="text-2xl font-bold">{userStats.totalPoints.toLocaleString()}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center">
                  <Star className="h-8 w-8 text-primary" />
                  <div className="ml-4">
                    <p className="text-sm font-medium text-muted-foreground">Current Level</p>
                    <p className="text-2xl font-bold">{userStats.level}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center">
                  <TrendingUp className="h-8 w-8 text-primary" />
                  <div className="ml-4">
                    <p className="text-sm font-medium text-muted-foreground">Global Rank</p>
                    <p className="text-2xl font-bold">#{userStats.rank}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center">
                  <Award className="h-8 w-8 text-primary" />
                  <div className="ml-4">
                    <p className="text-sm font-medium text-muted-foreground">Achievements</p>
                    <p className="text-2xl font-bold">
                      {userStats.achievementsEarned}/{userStats.totalAchievements}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Category Progress */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle>Achievement Categories</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                {categories.map((category, index) => {
                  const Icon = category.icon;
                  const progress = (category.earned / category.total) * 100;
                  return (
                    <div key={index} className="text-center space-y-3">
                      <div className="p-4 bg-muted rounded-lg">
                        <Icon className={`h-8 w-8 mx-auto ${category.color}`} />
                      </div>
                      <div>
                        <h3 className="font-semibold">{category.name}</h3>
                        <p className="text-sm text-muted-foreground">
                          {category.earned}/{category.total} earned
                        </p>
                      </div>
                      <Progress value={progress} className="w-full" />
                    </div>
                  );
                })}
              </div>
            </CardContent>
          </Card>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Main Achievement Content */}
            <div className="lg:col-span-2">
              <Tabs defaultValue="all" className="space-y-6">
                <TabsList>
                  <TabsTrigger value="all">All Achievements</TabsTrigger>
                  <TabsTrigger value="earned">Earned</TabsTrigger>
                  <TabsTrigger value="progress">In Progress</TabsTrigger>
                </TabsList>

                <TabsContent value="all" className="space-y-4">
                  {allAchievements.map((achievement) => {
                    const Icon = achievement.icon;
                    return (
                      <Card 
                        key={achievement.id} 
                        className={`transition-all ${
                          achievement.earned 
                            ? 'border-primary/20 bg-primary/5' 
                            : 'opacity-60 hover:opacity-80'
                        }`}
                      >
                        <CardContent className="p-6">
                          <div className="flex items-start space-x-4">
                            <div className={`p-3 rounded-lg ${
                              achievement.earned 
                                ? 'bg-primary text-primary-foreground' 
                                : 'bg-muted text-muted-foreground'
                            }`}>
                              <Icon className="h-6 w-6" />
                            </div>
                            <div className="flex-1 space-y-3">
                              <div className="flex items-start justify-between">
                                <div>
                                  <h3 className="font-semibold text-lg">{achievement.title}</h3>
                                  <p className="text-muted-foreground">{achievement.description}</p>
                                </div>
                                <div className="flex flex-col items-end space-y-2">
                                  <Badge className={getRarityColor(achievement.rarity)} variant="outline">
                                    {achievement.rarity}
                                  </Badge>
                                  <Badge variant="outline">
                                    {achievement.points} pts
                                  </Badge>
                                </div>
                              </div>
                              
                              {!achievement.earned && achievement.requirement && (
                                <div className="space-y-2">
                                  <div className="flex justify-between text-sm">
                                    <span className="text-muted-foreground">Progress</span>
                                    <span>{achievement.progress}%</span>
                                  </div>
                                  <Progress value={achievement.progress} className="w-full" />
                                  <p className="text-xs text-muted-foreground">
                                    {achievement.requirement}
                                  </p>
                                </div>
                              )}
                              
                              {achievement.earned && achievement.earnedDate && (
                                <p className="text-sm text-secondary">
                                  Earned on {new Date(achievement.earnedDate).toLocaleDateString()}
                                </p>
                              )}
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    );
                  })}
                </TabsContent>

                <TabsContent value="earned" className="space-y-4">
                  {allAchievements
                    .filter(achievement => achievement.earned)
                    .map((achievement) => {
                      const Icon = achievement.icon;
                      return (
                        <Card key={achievement.id} className="border-primary/20 bg-primary/5">
                          <CardContent className="p-6">
                            <div className="flex items-center space-x-4">
                              <div className="p-3 bg-primary text-primary-foreground rounded-lg">
                                <Icon className="h-6 w-6" />
                              </div>
                              <div className="flex-1">
                                <h3 className="font-semibold text-lg">{achievement.title}</h3>
                                <p className="text-muted-foreground">{achievement.description}</p>
                                <p className="text-sm text-secondary mt-2">
                                  Earned on {new Date(achievement.earnedDate!).toLocaleDateString()}
                                </p>
                              </div>
                              <Badge variant="outline">
                                {achievement.points} pts
                              </Badge>
                            </div>
                          </CardContent>
                        </Card>
                      );
                    })}
                </TabsContent>

                <TabsContent value="progress" className="space-y-4">
                  {allAchievements
                    .filter(achievement => !achievement.earned && achievement.progress > 0)
                    .map((achievement) => {
                      const Icon = achievement.icon;
                      return (
                        <Card key={achievement.id}>
                          <CardContent className="p-6">
                            <div className="flex items-start space-x-4">
                              <div className="p-3 bg-muted text-muted-foreground rounded-lg">
                                <Icon className="h-6 w-6" />
                              </div>
                              <div className="flex-1 space-y-3">
                                <div>
                                  <h3 className="font-semibold text-lg">{achievement.title}</h3>
                                  <p className="text-muted-foreground">{achievement.description}</p>
                                </div>
                                <div className="space-y-2">
                                  <div className="flex justify-between text-sm">
                                    <span className="text-muted-foreground">Progress</span>
                                    <span>{achievement.progress}%</span>
                                  </div>
                                  <Progress value={achievement.progress} className="w-full" />
                                  <p className="text-xs text-muted-foreground">
                                    {achievement.requirement}
                                  </p>
                                </div>
                              </div>
                            </div>
                          </CardContent>
                        </Card>
                      );
                    })}
                </TabsContent>
              </Tabs>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Recent Achievements */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Award className="mr-2 h-5 w-5" />
                    Recent Achievements
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {recentAchievements.map((achievement, index) => {
                    const Icon = achievement.icon;
                    return (
                      <div key={index} className="flex items-center space-x-3 p-3 bg-primary/5 rounded-lg border border-primary/10">
                        <div className="p-2 bg-primary text-primary-foreground rounded-lg">
                          <Icon className="h-4 w-4" />
                        </div>
                        <div className="flex-1">
                          <p className="font-medium text-sm">{achievement.title}</p>
                          <p className="text-xs text-muted-foreground">
                            +{achievement.points} points
                          </p>
                        </div>
                      </div>
                    );
                  })}
                </CardContent>
              </Card>

              {/* Leaderboard */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Trophy className="mr-2 h-5 w-5" />
                    Top Achievers
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  {leaderboard.map((user, index) => {
                    const LevelIcon = getLevelIcon(user.level);
                    return (
                      <div key={index} className="flex items-center space-x-3">
                        <div className="flex items-center justify-center w-8 h-8 bg-primary/10 rounded-full text-sm font-bold text-primary">
                          {user.rank}
                        </div>
                        <div className="w-8 h-8 bg-muted rounded-full flex items-center justify-center text-xs font-medium">
                          {user.avatar}
                        </div>
                        <div className="flex-1">
                          <p className="font-medium text-sm">{user.name}</p>
                          <div className="flex items-center space-x-1">
                            <LevelIcon className="h-3 w-3 text-muted-foreground" />
                            <p className="text-xs text-muted-foreground">{user.level}</p>
                          </div>
                        </div>
                        <p className="text-sm font-medium">{user.points.toLocaleString()}</p>
                      </div>
                    );
                  })}
                </CardContent>
              </Card>

              {/* Next Level Progress */}
              <Card>
                <CardHeader>
                  <CardTitle>Next Level</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="text-center">
                    <h3 className="font-semibold">Silver Trader</h3>
                    <p className="text-sm text-muted-foreground">750 points needed</p>
                  </div>
                  <Progress value={62} className="w-full" />
                  <div className="flex justify-between text-xs text-muted-foreground">
                    <span>1,250 pts</span>
                    <span>2,000 pts</span>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}