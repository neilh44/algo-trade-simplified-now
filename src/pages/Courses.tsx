import React, { useState, useEffect } from 'react';
import Header from '@/components/Header';
import AppFooter from '@/components/AppFooter';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Separator } from '@/components/ui/separator';
import { 
  Play, 
  Clock, 
  Users, 
  Star, 
  Download, 
  BookOpen, 
  CheckCircle, 
  Lock,
  Search,
  Filter,
  Grid,
  List,
  ArrowRight,
  Trophy,
  Target,
  Lightbulb
} from 'lucide-react';

interface Course {
  id: string;
  title: string;
  description: string;
  instructor: {
    name: string;
    avatar: string;
    credentials: string;
  };
  duration: string;
  difficulty: 'Beginner' | 'Intermediate' | 'Advanced';
  students: number;
  rating: number;
  image: string;
  price: number;
  modules: Module[];
  progress?: number;
  isEnrolled?: boolean;
}

interface Module {
  id: string;
  title: string;
  lessons: Lesson[];
  duration: string;
  isCompleted?: boolean;
}

interface Lesson {
  id: string;
  title: string;
  duration: string;
  type: 'video' | 'text' | 'quiz' | 'exercise';
  isCompleted?: boolean;
  isLocked?: boolean;
}

const Courses = () => {
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [selectedCourse, setSelectedCourse] = useState<Course | null>(null);
  const [activeModule, setActiveModule] = useState(0);
  const [activeLesson, setActiveLesson] = useState(0);
  const [searchQuery, setSearchQuery] = useState('');
  const [filterLevel, setFilterLevel] = useState<string>('all');

  const courses: Course[] = [
    {
      id: '1',
      title: 'Complete Algorithmic Trading Mastery',
      description: 'Master the fundamentals of algorithmic trading from strategy development to live deployment.',
      instructor: {
        name: 'Dr. Sarah Chen',
        avatar: '/api/placeholder/40/40',
        credentials: 'PhD in Finance, Former Goldman Sachs Quant'
      },
      duration: '12 hours',
      difficulty: 'Intermediate',
      students: 2847,
      rating: 4.8,
      image: '/api/placeholder/400/200',
      price: 299,
      progress: 65,
      isEnrolled: true,
      modules: [
        {
          id: 'm1',
          title: 'Introduction & Setup',
          duration: '2 hours',
          isCompleted: true,
          lessons: [
            { id: 'l1', title: 'Course Overview', duration: '15 min', type: 'video', isCompleted: true },
            { id: 'l2', title: 'Platform Setup', duration: '30 min', type: 'video', isCompleted: true },
            { id: 'l3', title: 'API Configuration', duration: '45 min', type: 'exercise', isCompleted: true }
          ]
        },
        {
          id: 'm2',
          title: 'Strategy Development',
          duration: '4 hours',
          isCompleted: false,
          lessons: [
            { id: 'l4', title: 'Market Analysis', duration: '60 min', type: 'video', isCompleted: true },
            { id: 'l5', title: 'Strategy Design', duration: '90 min', type: 'video', isCompleted: false },
            { id: 'l6', title: 'Backtesting Basics', duration: '90 min', type: 'exercise', isCompleted: false, isLocked: true }
          ]
        },
        {
          id: 'm3',
          title: 'Risk Management',
          duration: '3 hours',
          isCompleted: false,
          lessons: [
            { id: 'l7', title: 'Position Sizing', duration: '45 min', type: 'video', isCompleted: false, isLocked: true },
            { id: 'l8', title: 'Stop Loss Strategies', duration: '60 min', type: 'video', isCompleted: false, isLocked: true },
            { id: 'l9', title: 'Portfolio Optimization', duration: '75 min', type: 'exercise', isCompleted: false, isLocked: true }
          ]
        },
        {
          id: 'm4',
          title: 'Live Trading',
          duration: '3 hours',
          isCompleted: false,
          lessons: [
            { id: 'l10', title: 'Paper Trading', duration: '60 min', type: 'video', isCompleted: false, isLocked: true },
            { id: 'l11', title: 'Going Live', duration: '45 min', type: 'video', isCompleted: false, isLocked: true },
            { id: 'l12', title: 'Performance Monitoring', duration: '75 min', type: 'exercise', isCompleted: false, isLocked: true }
          ]
        }
      ]
    },
    {
      id: '2',
      title: 'Python for Trading Automation',
      description: 'Learn Python programming specifically for trading applications and automation.',
      instructor: {
        name: 'Mike Rodriguez',
        avatar: '/api/placeholder/40/40',
        credentials: 'Senior Software Engineer, Trading Systems Expert'
      },
      duration: '8 hours',
      difficulty: 'Beginner',
      students: 1924,
      rating: 4.6,
      image: '/api/placeholder/400/200',
      price: 199,
      modules: []
    },
    {
      id: '3',
      title: 'Advanced Options Strategies',
      description: 'Master complex options strategies and automated execution techniques.',
      instructor: {
        name: 'Jennifer Park',
        avatar: '/api/placeholder/40/40',
        credentials: 'CFA, Options Trading Specialist'
      },
      duration: '15 hours',
      difficulty: 'Advanced',
      students: 856,
      rating: 4.9,
      image: '/api/placeholder/400/200',
      price: 499,
      modules: []
    }
  ];

  const filteredCourses = courses.filter(course => {
    const matchesSearch = course.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         course.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesFilter = filterLevel === 'all' || course.difficulty.toLowerCase() === filterLevel;
    return matchesSearch && matchesFilter;
  });

  const CourseBrowser = () => (
    <div className="space-y-8">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-background via-primary/5 to-secondary/10 px-6 py-16 rounded-2xl">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl lg:text-6xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent mb-6">
            Master Algorithmic Trading
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Learn from industry experts and transform your trading with comprehensive courses designed for every skill level.
          </p>
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <div className="flex items-center gap-2 bg-white/10 rounded-lg px-4 py-2">
              <Trophy className="h-5 w-5 text-primary" />
              <span className="text-sm font-medium">5,000+ Students</span>
            </div>
            <div className="flex items-center gap-2 bg-white/10 rounded-lg px-4 py-2">
              <Target className="h-5 w-5 text-primary" />
              <span className="text-sm font-medium">95% Success Rate</span>
            </div>
            <div className="flex items-center gap-2 bg-white/10 rounded-lg px-4 py-2">
              <Lightbulb className="h-5 w-5 text-primary" />
              <span className="text-sm font-medium">Expert Instructors</span>
            </div>
          </div>
          <Button size="lg" className="text-lg px-8 py-3">
            Start Learning Today
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </section>

      {/* Search and Filter */}
      <div className="flex flex-col lg:flex-row gap-4 items-center justify-between">
        <div className="flex-1 relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <input
            type="text"
            placeholder="Search courses..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-10 pr-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
          />
        </div>
        <div className="flex gap-2">
          <select
            value={filterLevel}
            onChange={(e) => setFilterLevel(e.target.value)}
            className="px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
          >
            <option value="all">All Levels</option>
            <option value="beginner">Beginner</option>
            <option value="intermediate">Intermediate</option>
            <option value="advanced">Advanced</option>
          </select>
          <div className="flex border border-border rounded-lg">
            <button
              onClick={() => setViewMode('grid')}
              className={`p-2 ${viewMode === 'grid' ? 'bg-primary text-primary-foreground' : ''}`}
            >
              <Grid className="h-4 w-4" />
            </button>
            <button
              onClick={() => setViewMode('list')}
              className={`p-2 ${viewMode === 'list' ? 'bg-primary text-primary-foreground' : ''}`}
            >
              <List className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>

      {/* Course Grid */}
      <div className={`grid gap-6 ${viewMode === 'grid' ? 'md:grid-cols-2 lg:grid-cols-3' : 'grid-cols-1'}`}>
        {filteredCourses.map((course) => (
          <Card key={course.id} className="group hover:shadow-lg transition-all duration-300 cursor-pointer"
                onClick={() => setSelectedCourse(course)}>
            <div className="relative overflow-hidden rounded-t-lg">
              <img 
                src={course.image} 
                alt={course.title}
                className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute top-4 left-4">
                <Badge variant={course.difficulty === 'Beginner' ? 'secondary' : 
                               course.difficulty === 'Intermediate' ? 'default' : 'destructive'}>
                  {course.difficulty}
                </Badge>
              </div>
              <div className="absolute top-4 right-4">
                <Badge variant="outline" className="bg-background/80">
                  ${course.price}
                </Badge>
              </div>
            </div>
            <CardHeader>
              <CardTitle className="line-clamp-2">{course.title}</CardTitle>
              <CardDescription className="line-clamp-3">{course.description}</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex items-center gap-2 mb-4">
                <Avatar className="h-8 w-8">
                  <AvatarImage src={course.instructor.avatar} alt={course.instructor.name} />
                  <AvatarFallback>{course.instructor.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                </Avatar>
                <div className="text-sm">
                  <p className="font-medium">{course.instructor.name}</p>
                  <p className="text-muted-foreground text-xs">{course.instructor.credentials}</p>
                </div>
              </div>
              
              <div className="flex items-center justify-between text-sm text-muted-foreground mb-4">
                <div className="flex items-center gap-1">
                  <Clock className="h-4 w-4" />
                  {course.duration}
                </div>
                <div className="flex items-center gap-1">
                  <Users className="h-4 w-4" />
                  {course.students.toLocaleString()}
                </div>
                <div className="flex items-center gap-1">
                  <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  {course.rating}
                </div>
              </div>

              {course.isEnrolled && course.progress !== undefined && (
                <div className="mb-4">
                  <div className="flex justify-between text-sm mb-1">
                    <span>Progress</span>
                    <span>{course.progress}%</span>
                  </div>
                  <Progress value={course.progress} className="h-2" />
                </div>
              )}

              <Button 
                className="w-full" 
                variant={course.isEnrolled ? "outline" : "default"}
              >
                {course.isEnrolled ? "Continue Learning" : "Enroll Now"}
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );

  const CourseViewer = ({ course }: { course: Course }) => (
    <div className="grid lg:grid-cols-4 gap-6 h-screen">
      {/* Sidebar Navigation */}
      <div className="lg:col-span-1 bg-muted/30 rounded-lg p-4 overflow-y-auto">
        <div className="mb-6">
          <button 
            onClick={() => setSelectedCourse(null)}
            className="text-sm text-muted-foreground hover:text-foreground mb-4"
          >
            ← Back to Courses
          </button>
          <h3 className="font-bold text-lg">{course.title}</h3>
          <div className="flex justify-between text-sm text-muted-foreground mt-2">
            <span>Progress</span>
            <span>{course.progress}%</span>
          </div>
          <Progress value={course.progress} className="h-2 mt-1" />
        </div>

        <Accordion type="single" value={`module-${activeModule}`} onValueChange={(value) => {
          const moduleIndex = parseInt(value?.split('-')[1] || '0');
          setActiveModule(moduleIndex);
        }}>
          {course.modules.map((module, moduleIndex) => (
            <AccordionItem key={module.id} value={`module-${moduleIndex}`}>
              <AccordionTrigger className="text-left">
                <div className="flex items-center gap-2">
                  {module.isCompleted && <CheckCircle className="h-4 w-4 text-green-500" />}
                  <div>
                    <p className="font-medium">{module.title}</p>
                    <p className="text-xs text-muted-foreground">{module.duration}</p>
                  </div>
                </div>
              </AccordionTrigger>
              <AccordionContent>
                <div className="space-y-2">
                  {module.lessons.map((lesson, lessonIndex) => (
                    <button
                      key={lesson.id}
                      onClick={() => !lesson.isLocked && setActiveLesson(lessonIndex)}
                      disabled={lesson.isLocked}
                      className={`w-full flex items-center gap-3 p-2 rounded text-left text-sm transition-colors
                        ${lesson.isLocked 
                          ? 'text-muted-foreground cursor-not-allowed' 
                          : activeLesson === lessonIndex 
                            ? 'bg-primary text-primary-foreground' 
                            : 'hover:bg-muted'
                        }`}
                    >
                      {lesson.isLocked ? (
                        <Lock className="h-4 w-4" />
                      ) : lesson.isCompleted ? (
                        <CheckCircle className="h-4 w-4 text-green-500" />
                      ) : lesson.type === 'video' ? (
                        <Play className="h-4 w-4" />
                      ) : lesson.type === 'quiz' ? (
                        <Target className="h-4 w-4" />
                      ) : (
                        <BookOpen className="h-4 w-4" />
                      )}
                      <div className="flex-1">
                        <p className="font-medium">{lesson.title}</p>
                        <p className="text-xs opacity-75">{lesson.duration}</p>
                      </div>
                    </button>
                  ))}
                </div>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>

      {/* Main Content Area */}
      <div className="lg:col-span-3 space-y-6">
        {/* Video Player / Content Viewer */}
        <Card>
          <CardContent className="p-0">
            <div className="bg-black rounded-t-lg aspect-video flex items-center justify-center">
              <div className="text-center text-white">
                <Play className="h-16 w-16 mx-auto mb-4 opacity-50" />
                <p className="text-lg">Video Player Placeholder</p>
                <p className="text-sm opacity-75">
                  {course.modules[activeModule]?.lessons[activeLesson]?.title || 'Select a lesson'}
                </p>
              </div>
            </div>
            <div className="p-6">
              <h2 className="text-2xl font-bold mb-4">
                {course.modules[activeModule]?.lessons[activeLesson]?.title}
              </h2>
              <p className="text-muted-foreground mb-6">
                This is where the lesson content would be displayed. The actual implementation would include 
                a proper video player, interactive exercises, code editors, and other rich media content.
              </p>
              
              <div className="flex gap-4">
                <Button variant="outline">
                  <Download className="h-4 w-4 mr-2" />
                  Download Resources
                </Button>
                <Button variant="outline">
                  <BookOpen className="h-4 w-4 mr-2" />
                  Take Notes
                </Button>
                <Button>
                  Mark Complete
                  <CheckCircle className="h-4 w-4 ml-2" />
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Lesson Tabs */}
        <Tabs defaultValue="overview" className="w-full">
          <TabsList>
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="resources">Resources</TabsTrigger>
            <TabsTrigger value="discussion">Discussion</TabsTrigger>
            <TabsTrigger value="notes">My Notes</TabsTrigger>
          </TabsList>
          
          <TabsContent value="overview" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Lesson Overview</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Detailed lesson description and learning objectives would go here.
                </p>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="resources" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Downloadable Resources</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <div className="flex items-center justify-between p-3 border rounded">
                    <span>Strategy Template.xlsx</span>
                    <Button size="sm" variant="outline">
                      <Download className="h-4 w-4" />
                    </Button>
                  </div>
                  <div className="flex items-center justify-between p-3 border rounded">
                    <span>Code Examples.py</span>
                    <Button size="sm" variant="outline">
                      <Download className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="discussion" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Discussion & Q&A</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Community discussion forum would be integrated here.
                </p>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="notes" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>My Notes</CardTitle>
              </CardHeader>
              <CardContent>
                <textarea 
                  className="w-full h-32 p-3 border rounded-lg resize-none focus:outline-none focus:ring-2 focus:ring-primary"
                  placeholder="Take notes for this lesson..."
                />
                <Button className="mt-2">Save Notes</Button>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container mx-auto px-4 py-8">
        {selectedCourse ? (
          <CourseViewer course={selectedCourse} />
        ) : (
          <CourseBrowser />
        )}
      </main>
      {!selectedCourse && <AppFooter />}
    </div>
  );
};

export default Courses;