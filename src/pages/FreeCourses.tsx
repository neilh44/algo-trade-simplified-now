import { useState } from 'react';
import { DashboardHeader } from '@/components/dashboard/DashboardHeader';
import { DashboardSidebar } from '@/components/dashboard/DashboardSidebar';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import {
  BookOpen,
  Play,
  Clock,
  Users,
  Star,
  Search,
  Filter,
  Code,
  BarChart3,
  TrendingUp,
  Shield,
} from 'lucide-react';

export default function FreeCourses() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedLevel, setSelectedLevel] = useState('all');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const courses = [
    {
      id: 1,
      title: 'Algorithmic Trading Basics',
      description: 'Learn the fundamentals of algorithmic trading from scratch. Perfect for beginners who want to understand how automated trading works.',
      duration: '2 hours',
      lessons: 8,
      students: 1250,
      difficulty: 'Beginner',
      category: 'Fundamentals',
      rating: 4.8,
      progress: 0,
      instructor: 'Sarah Johnson',
      icon: BookOpen,
      topics: ['Trading Concepts', 'Market Structure', 'Order Types'],
    },
    {
      id: 2,
      title: 'Python for Trading',
      description: 'Master Python programming specifically for trading applications. Learn to build your first trading algorithm.',
      duration: '3 hours',
      lessons: 12,
      students: 980,
      difficulty: 'Beginner',
      category: 'Programming',
      rating: 4.9,
      progress: 0,
      instructor: 'Michael Chen',
      icon: Code,
      topics: ['Python Basics', 'Data Analysis', 'API Integration'],
    },
    {
      id: 3,
      title: 'Risk Management Fundamentals',
      description: 'Essential risk management strategies every trader needs to know. Protect your capital and maximize returns.',
      duration: '1.5 hours',
      lessons: 6,
      students: 750,
      difficulty: 'Intermediate',
      category: 'Risk Management',
      rating: 4.7,
      progress: 0,
      instructor: 'David Wilson',
      icon: Shield,
      topics: ['Position Sizing', 'Stop Losses', 'Portfolio Risk'],
    },
    {
      id: 4,
      title: 'Technical Analysis with Python',
      description: 'Learn to implement technical indicators and analysis tools using Python for better trading decisions.',
      duration: '2.5 hours',
      lessons: 10,
      students: 865,
      difficulty: 'Intermediate',
      category: 'Technical Analysis',
      rating: 4.6,
      progress: 0,
      instructor: 'Emma Rodriguez',
      icon: BarChart3,
      topics: ['Indicators', 'Chart Patterns', 'Backtesting'],
    },
    {
      id: 5,
      title: 'API Trading Fundamentals',
      description: 'Connect to trading platforms via APIs and start building automated trading systems.',
      duration: '2.5 hours',
      lessons: 10,
      students: 690,
      difficulty: 'Intermediate',
      category: 'Programming',
      rating: 4.8,
      progress: 0,
      instructor: 'Alex Thompson',
      icon: TrendingUp,
      topics: ['REST APIs', 'WebSockets', 'Order Management'],
    },
    {
      id: 6,
      title: 'Strategy Development Workshop',
      description: 'Build and test your own trading strategies from concept to implementation.',
      duration: '4 hours',
      lessons: 15,
      students: 520,
      difficulty: 'Advanced',
      category: 'Strategy',
      rating: 4.9,
      progress: 0,
      instructor: 'Robert Kim',
      icon: TrendingUp,
      topics: ['Strategy Design', 'Backtesting', 'Optimization'],
    },
  ];

  const filteredCourses = courses.filter(course => {
    const matchesSearch = course.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         course.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesLevel = selectedLevel === 'all' || course.difficulty.toLowerCase() === selectedLevel;
    const matchesCategory = selectedCategory === 'all' || course.category.toLowerCase() === selectedCategory.toLowerCase();
    
    return matchesSearch && matchesLevel && matchesCategory;
  });

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'Beginner': return 'bg-secondary text-secondary-foreground';
      case 'Intermediate': return 'bg-primary text-primary-foreground';
      case 'Advanced': return 'bg-destructive text-destructive-foreground';
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
            <h1 className="text-3xl font-bold text-foreground mb-2">Free Courses</h1>
            <p className="text-muted-foreground">
              Master algorithmic trading with our comprehensive free course library
            </p>
          </div>

          {/* Search and Filter */}
          <div className="mb-8 space-y-4">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
                <Input
                  placeholder="Search courses..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10"
                />
              </div>
              <Select value={selectedLevel} onValueChange={setSelectedLevel}>
                <SelectTrigger className="w-full md:w-48">
                  <Filter className="mr-2 h-4 w-4" />
                  <SelectValue placeholder="Difficulty" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Levels</SelectItem>
                  <SelectItem value="beginner">Beginner</SelectItem>
                  <SelectItem value="intermediate">Intermediate</SelectItem>
                  <SelectItem value="advanced">Advanced</SelectItem>
                </SelectContent>
              </Select>
              <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                <SelectTrigger className="w-full md:w-48">
                  <SelectValue placeholder="Category" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Categories</SelectItem>
                  <SelectItem value="fundamentals">Fundamentals</SelectItem>
                  <SelectItem value="programming">Programming</SelectItem>
                  <SelectItem value="risk management">Risk Management</SelectItem>
                  <SelectItem value="technical analysis">Technical Analysis</SelectItem>
                  <SelectItem value="strategy">Strategy</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center">
                  <BookOpen className="h-8 w-8 text-primary" />
                  <div className="ml-4">
                    <p className="text-sm font-medium text-muted-foreground">Total Courses</p>
                    <p className="text-2xl font-bold">{courses.length}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center">
                  <Clock className="h-8 w-8 text-primary" />
                  <div className="ml-4">
                    <p className="text-sm font-medium text-muted-foreground">Total Hours</p>
                    <p className="text-2xl font-bold">16</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center">
                  <Users className="h-8 w-8 text-primary" />
                  <div className="ml-4">
                    <p className="text-sm font-medium text-muted-foreground">Students</p>
                    <p className="text-2xl font-bold">5,055</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center">
                  <Star className="h-8 w-8 text-primary" />
                  <div className="ml-4">
                    <p className="text-sm font-medium text-muted-foreground">Avg Rating</p>
                    <p className="text-2xl font-bold">4.8</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Courses Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredCourses.map((course) => {
              const Icon = course.icon;
              return (
                <Card key={course.id} className="hover:shadow-lg transition-all duration-300 border-2 hover:border-primary/50">
                  <CardHeader className="space-y-4">
                    <div className="flex items-start justify-between">
                      <div className="p-3 bg-primary/10 rounded-lg">
                        <Icon className="h-6 w-6 text-primary" />
                      </div>
                      <Badge className={getDifficultyColor(course.difficulty)}>
                        {course.difficulty}
                      </Badge>
                    </div>
                    <div>
                      <CardTitle className="text-lg mb-2">{course.title}</CardTitle>
                      <p className="text-sm text-muted-foreground">{course.description}</p>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span className="text-muted-foreground">Progress</span>
                        <span>{course.progress}%</span>
                      </div>
                      <Progress value={course.progress} className="w-full" />
                    </div>
                    
                    <div className="flex flex-wrap gap-2">
                      {course.topics.slice(0, 2).map((topic, index) => (
                        <Badge key={index} variant="outline" className="text-xs">
                          {topic}
                        </Badge>
                      ))}
                      {course.topics.length > 2 && (
                        <Badge variant="outline" className="text-xs">
                          +{course.topics.length - 2} more
                        </Badge>
                      )}
                    </div>

                    <div className="flex items-center justify-between text-sm text-muted-foreground">
                      <div className="flex items-center">
                        <Clock className="h-4 w-4 mr-1" />
                        {course.duration}
                      </div>
                      <div className="flex items-center">
                        <Users className="h-4 w-4 mr-1" />
                        {course.students.toLocaleString()}
                      </div>
                      <div className="flex items-center">
                        <Star className="h-4 w-4 mr-1 text-yellow-500 fill-current" />
                        {course.rating}
                      </div>
                    </div>

                    <div className="text-sm text-muted-foreground">
                      Instructor: {course.instructor}
                    </div>

                    <Button className="w-full">
                      <Play className="mr-2 h-4 w-4" />
                      {course.progress > 0 ? 'Continue Course' : 'Start Course'}
                    </Button>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          {filteredCourses.length === 0 && (
            <div className="text-center py-12">
              <BookOpen className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
              <p className="text-lg text-muted-foreground">No courses found matching your criteria</p>
              <p className="text-sm text-muted-foreground">Try adjusting your search or filter options</p>
            </div>
          )}
        </main>
      </div>
    </div>
  );
}