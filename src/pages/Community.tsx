import { useState } from 'react';
import { DashboardHeader } from '@/components/dashboard/DashboardHeader';
import { DashboardSidebar } from '@/components/dashboard/DashboardSidebar';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import {
  Users,
  MessageSquare,
  Heart,
  Reply,
  TrendingUp,
  Clock,
  Trophy,
  Search,
  Plus,
  Star,
  Pin,
  Filter,
  ThumbsUp,
  Share,
  Calendar,
} from 'lucide-react';

export default function Community() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const communityStats = {
    totalMembers: 2847,
    onlineNow: 156,
    postsToday: 23,
    questionsAnswered: 1204,
  };

  const popularTopics = [
    { name: 'Python Trading', posts: 245, trend: '+12%' },
    { name: 'Risk Management', posts: 189, trend: '+8%' },
    { name: 'API Integration', posts: 156, trend: '+15%' },
    { name: 'Backtesting', posts: 134, trend: '+5%' },
    { name: 'Strategy Development', posts: 98, trend: '+22%' },
  ];

  const discussions = [
    {
      id: 1,
      title: 'Best practices for backtesting trading strategies?',
      author: 'AlexTrader',
      authorLevel: 'Advanced',
      category: 'Strategy Development',
      replies: 12,
      likes: 24,
      views: 156,
      timeAgo: '2 hours ago',
      isPinned: true,
      isAnswered: true,
      tags: ['backtesting', 'strategies', 'best-practices'],
      excerpt: 'I\'ve been working on backtesting my trading strategies and wondering what the community considers...'
    },
    {
      id: 2,
      title: 'Python libraries for real-time market data',
      author: 'DataNinja',
      authorLevel: 'Intermediate',
      category: 'Programming',
      replies: 8,
      likes: 18,
      views: 89,
      timeAgo: '4 hours ago',
      isPinned: false,
      isAnswered: false,
      tags: ['python', 'market-data', 'real-time'],
      excerpt: 'Looking for recommendations on Python libraries that can handle real-time market data efficiently...'
    },
    {
      id: 3,
      title: 'Risk management: Position sizing strategies',
      author: 'RiskMaster',
      authorLevel: 'Expert',
      category: 'Risk Management',
      replies: 15,
      likes: 31,
      views: 203,
      timeAgo: '6 hours ago',
      isPinned: false,
      isAnswered: true,
      tags: ['risk-management', 'position-sizing', 'portfolio'],
      excerpt: 'Let\'s discuss different approaches to position sizing. I\'ll share my Kelly Criterion implementation...'
    },
    {
      id: 4,
      title: 'API rate limiting best practices',
      author: 'TechGuru',
      authorLevel: 'Advanced',
      category: 'Programming',
      replies: 6,
      likes: 12,
      views: 67,
      timeAgo: '8 hours ago',
      isPinned: false,
      isAnswered: false,
      tags: ['api', 'rate-limiting', 'optimization'],
      excerpt: 'How do you handle API rate limiting in your trading bots? Looking for efficient strategies...'
    },
    {
      id: 5,
      title: 'Beginner question: Starting with algorithmic trading',
      author: 'NewbieTrader',
      authorLevel: 'Beginner',
      category: 'General',
      replies: 20,
      likes: 45,
      views: 312,
      timeAgo: '1 day ago',
      isPinned: false,
      isAnswered: true,
      tags: ['beginner', 'getting-started', 'advice'],
      excerpt: 'Complete beginner here. What would you recommend as the first steps to get into algo trading?...'
    },
  ];

  const topContributors = [
    { name: 'TradingPro', points: 2340, badge: 'Expert', posts: 156, helpfulAnswers: 89 },
    { name: 'CodeMaster', points: 1890, badge: 'Advanced', posts: 124, helpfulAnswers: 67 },
    { name: 'StrategyKing', points: 1567, badge: 'Advanced', posts: 98, helpfulAnswers: 54 },
    { name: 'DataWhiz', points: 1234, badge: 'Intermediate', posts: 76, helpfulAnswers: 43 },
    { name: 'RiskGuru', points: 987, badge: 'Intermediate', posts: 65, helpfulAnswers: 38 },
  ];

  const upcomingEvents = [
    {
      title: 'Weekly Strategy Discussion',
      date: '2024-01-20',
      time: '2:00 PM EST',
      attendees: 45,
      type: 'Live Session',
    },
    {
      title: 'Python for Trading Workshop',
      date: '2024-01-22',
      time: '6:00 PM EST',
      attendees: 78,
      type: 'Workshop',
    },
    {
      title: 'Q&A with Expert Traders',
      date: '2024-01-25',
      time: '3:00 PM EST',
      attendees: 156,
      type: 'Q&A Session',
    },
  ];

  const getLevelColor = (level: string) => {
    switch (level) {
      case 'Beginner': return 'bg-secondary text-secondary-foreground';
      case 'Intermediate': return 'bg-primary text-primary-foreground';
      case 'Advanced': return 'bg-accent text-accent-foreground';
      case 'Expert': return 'bg-destructive text-destructive-foreground';
      default: return 'bg-muted text-muted-foreground';
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
            <h1 className="text-3xl font-bold text-foreground mb-2">Community</h1>
            <p className="text-muted-foreground">
              Connect with fellow traders, share knowledge, and grow together
            </p>
          </div>

          {/* Community Stats */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center">
                  <Users className="h-8 w-8 text-primary" />
                  <div className="ml-4">
                    <p className="text-sm font-medium text-muted-foreground">Total Members</p>
                    <p className="text-2xl font-bold">{communityStats.totalMembers.toLocaleString()}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-secondary rounded-full mr-2"></div>
                  <div className="ml-2">
                    <p className="text-sm font-medium text-muted-foreground">Online Now</p>
                    <p className="text-2xl font-bold">{communityStats.onlineNow}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center">
                  <MessageSquare className="h-8 w-8 text-primary" />
                  <div className="ml-4">
                    <p className="text-sm font-medium text-muted-foreground">Posts Today</p>
                    <p className="text-2xl font-bold">{communityStats.postsToday}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center">
                  <Trophy className="h-8 w-8 text-primary" />
                  <div className="ml-4">
                    <p className="text-sm font-medium text-muted-foreground">Questions Answered</p>
                    <p className="text-2xl font-bold">{communityStats.questionsAnswered.toLocaleString()}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
            {/* Main Content */}
            <div className="lg:col-span-3">
              <Tabs defaultValue="discussions" className="space-y-6">
                <div className="flex items-center justify-between">
                  <TabsList>
                    <TabsTrigger value="discussions">Discussions</TabsTrigger>
                    <TabsTrigger value="questions">Q&A</TabsTrigger>
                    <TabsTrigger value="events">Events</TabsTrigger>
                  </TabsList>
                  <Button>
                    <Plus className="mr-2 h-4 w-4" />
                    New Post
                  </Button>
                </div>

                <TabsContent value="discussions" className="space-y-6">
                  {/* Search and Filter */}
                  <div className="flex flex-col md:flex-row gap-4">
                    <div className="relative flex-1">
                      <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
                      <Input
                        placeholder="Search discussions..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="pl-10"
                      />
                    </div>
                    <Button variant="outline">
                      <Filter className="mr-2 h-4 w-4" />
                      Filter
                    </Button>
                  </div>

                  {/* Discussions List */}
                  <div className="space-y-4">
                    {discussions.map((discussion) => (
                      <Card key={discussion.id} className="hover:shadow-md transition-shadow">
                        <CardContent className="p-6">
                          <div className="flex items-start space-x-4">
                            <Avatar>
                              <AvatarFallback>
                                {discussion.author.slice(0, 2).toUpperCase()}
                              </AvatarFallback>
                            </Avatar>
                            <div className="flex-1 space-y-3">
                              <div className="flex items-start justify-between">
                                <div className="flex-1">
                                  <div className="flex items-center space-x-2 mb-1">
                                    {discussion.isPinned && (
                                      <Pin className="h-4 w-4 text-primary" />
                                    )}
                                    <h3 className="font-semibold text-lg hover:text-primary cursor-pointer">
                                      {discussion.title}
                                    </h3>
                                    {discussion.isAnswered && (
                                      <Badge variant="outline" className="bg-secondary text-secondary-foreground">
                                        Answered
                                      </Badge>
                                    )}
                                  </div>
                                  <p className="text-muted-foreground text-sm mb-2">
                                    {discussion.excerpt}
                                  </p>
                                  <div className="flex flex-wrap gap-2 mb-3">
                                    {discussion.tags.map((tag, index) => (
                                      <Badge key={index} variant="outline" className="text-xs">
                                        {tag}
                                      </Badge>
                                    ))}
                                  </div>
                                </div>
                              </div>
                              
                              <div className="flex items-center justify-between">
                                <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                                  <div className="flex items-center space-x-1">
                                    <span className="font-medium">{discussion.author}</span>
                          <Badge className={getLevelColor(discussion.authorLevel)}>
                            {discussion.authorLevel}
                          </Badge>
                                  </div>
                                  <span>•</span>
                                  <span>{discussion.timeAgo}</span>
                                  <span>•</span>
                                  <span>{discussion.category}</span>
                                </div>
                                
                                <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                                  <div className="flex items-center space-x-1">
                                    <Reply className="h-4 w-4" />
                                    <span>{discussion.replies}</span>
                                  </div>
                                  <div className="flex items-center space-x-1">
                                    <ThumbsUp className="h-4 w-4" />
                                    <span>{discussion.likes}</span>
                                  </div>
                                  <div className="flex items-center space-x-1">
                                    <span>{discussion.views} views</span>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </TabsContent>

                <TabsContent value="questions" className="space-y-6">
                  <Card>
                    <CardContent className="p-6 text-center">
                      <MessageSquare className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                      <p className="text-lg text-muted-foreground">Q&A section coming soon!</p>
                      <p className="text-sm text-muted-foreground">
                        Ask questions and get answers from expert traders
                      </p>
                    </CardContent>
                  </Card>
                </TabsContent>

                <TabsContent value="events" className="space-y-6">
                  <div className="space-y-4">
                    {upcomingEvents.map((event, index) => (
                      <Card key={index}>
                        <CardContent className="p-6">
                          <div className="flex items-center justify-between">
                            <div className="flex items-center space-x-4">
                              <div className="p-3 bg-primary/10 rounded-lg">
                                <Calendar className="h-6 w-6 text-primary" />
                              </div>
                              <div>
                                <h3 className="font-semibold">{event.title}</h3>
                                <p className="text-sm text-muted-foreground">
                                  {new Date(event.date).toLocaleDateString()} at {event.time}
                                </p>
                                <div className="flex items-center space-x-2 mt-1">
                                  <Badge variant="outline">{event.type}</Badge>
                                  <span className="text-xs text-muted-foreground">
                                    {event.attendees} attending
                                  </span>
                                </div>
                              </div>
                            </div>
                            <Button>Join Event</Button>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </TabsContent>
              </Tabs>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Popular Topics */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <TrendingUp className="mr-2 h-5 w-5" />
                    Popular Topics
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  {popularTopics.map((topic, index) => (
                    <div key={index} className="flex items-center justify-between">
                      <div>
                        <p className="font-medium text-sm">{topic.name}</p>
                        <p className="text-xs text-muted-foreground">
                          {topic.posts} posts
                        </p>
                      </div>
                      <Badge variant="outline" className="text-xs">
                        {topic.trend}
                      </Badge>
                    </div>
                  ))}
                </CardContent>
              </Card>

              {/* Top Contributors */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Star className="mr-2 h-5 w-5" />
                    Top Contributors
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {topContributors.map((contributor, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <div className="flex items-center justify-center w-8 h-8 bg-primary/10 rounded-full text-sm font-bold text-primary">
                        {index + 1}
                      </div>
                      <Avatar>
                        <AvatarFallback>
                          {contributor.name.slice(0, 2).toUpperCase()}
                        </AvatarFallback>
                      </Avatar>
                      <div className="flex-1">
                        <div className="flex items-center space-x-2">
                          <p className="font-medium text-sm">{contributor.name}</p>
                        <Badge className={getLevelColor(contributor.badge)}>
                          {contributor.badge}
                        </Badge>
                        </div>
                        <p className="text-xs text-muted-foreground">
                          {contributor.points} points • {contributor.helpfulAnswers} helpful answers
                        </p>
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>

              {/* Community Guidelines */}
              <Card>
                <CardHeader>
                  <CardTitle>Community Guidelines</CardTitle>
                </CardHeader>
                <CardContent className="text-sm text-muted-foreground space-y-2">
                  <p>• Be respectful and professional</p>
                  <p>• Share knowledge and help others</p>
                  <p>• No spam or self-promotion</p>
                  <p>• Keep discussions relevant</p>
                  <Button variant="outline" size="sm" className="w-full mt-4">
                    Read Full Guidelines
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}