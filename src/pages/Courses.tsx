import React, { useState, useEffect } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
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
  CheckCircle, 
  BookOpen, 
  Lock,
  Search,
  Filter,
  ArrowRight,
  Trophy,
  Target,
  Lightbulb,
  ExternalLink
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
  redirectUrl: string;
  sessions?: string;
  validity?: string;
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
  const [selectedCourse, setSelectedCourse] = useState<Course | null>(null);
  const [activeModule, setActiveModule] = useState(0);
  const [activeLesson, setActiveLesson] = useState(0);
  const [searchQuery, setSearchQuery] = useState('');
  const [filterLevel, setFilterLevel] = useState<string>('all');

  const handleStartLearning = () => {
    window.open('https://smartwaveacademy.com/', '_blank');
  };

  const handleCourseClick = (course: Course) => {
    window.open(course.redirectUrl, '_blank');
  };

  const courses: Course[] = [
    {
      id: '1',
      title: 'ChatGPT for Python Algo Trading Development Masterclass',
      description: 'Master Python algorithmic trading development using ChatGPT for enhanced productivity and automation.',
      instructor: {
        name: 'SmartWave Academy',
        avatar: '/api/placeholder/40/40',
        credentials: 'Expert Trading Instructors'
      },
      duration: '2 hrs',
      difficulty: 'Intermediate',
      students: 1500,
      rating: 4.8,
      image: '/Users/nileshhanotia/Projects/AlgoTrade/algo-trade-simplified-now/src/assets/thumbnail/ChatGPT for Python Algo Trading.jpg',
      price: 9999,
      sessions: 'Multiple Sessions',
      modules: [],
      redirectUrl: 'https://smartwaveacademy.com/fcafd845-7b32-4ee5-8f6f-a7a4656f4571'
    },
    {
      id: '2',
      title: 'ChatGPT for PineScript Development Masterclass',
      description: 'Learn to develop PineScript strategies efficiently using ChatGPT for TradingView automation.',
      instructor: {
        name: 'SmartWave Academy',
        avatar: '/api/placeholder/40/40',
        credentials: 'Expert Trading Instructors'
      },
      duration: '2 hrs',
      difficulty: 'Intermediate',
      students: 1200,
      rating: 4.7,
      image: '/api/placeholder/400/200',
      price: 9999,
      sessions: 'Multiple Sessions',
      modules: [],
      redirectUrl: 'https://smartwaveacademy.com/4616d461-731e-4276-9835-7af12ca1224d'
    },
    {
      id: '3',
      title: 'Basics Of Indian Equities',
      description: 'Comprehensive guide to understanding Indian equity markets and investment fundamentals.',
      instructor: {
        name: 'SmartWave Academy',
        avatar: '/api/placeholder/40/40',
        credentials: 'Expert Trading Instructors'
      },
      duration: '6 Links',
      difficulty: 'Beginner',
      students: 2800,
      rating: 4.6,
      image: '/api/placeholder/400/200',
      price: 2499,
      validity: 'Valid Indefinitely',
      modules: [],
      redirectUrl: 'https://smartwaveacademy.com/69008cad-1557-4be4-adb3-7d99966ff0d4'
    },
    {
      id: '4',
      title: 'Technical Analysis',
      description: 'Master technical analysis techniques for effective trading decisions and market analysis.',
      instructor: {
        name: 'SmartWave Academy',
        avatar: '/api/placeholder/40/40',
        credentials: 'Expert Trading Instructors'
      },
      duration: '14 Links',
      difficulty: 'Intermediate',
      students: 3200,
      rating: 4.8,
      image: '/api/placeholder/400/200',
      price: 2499,
      validity: 'Valid Indefinitely',
      modules: [],
      redirectUrl: 'https://smartwaveacademy.com/10a13f2b-f9b6-4ad7-819d-e2da41b0c0bc'
    },
    {
      id: '5',
      title: 'Options Greeks, IV, PCR Ratio',
      description: 'Deep dive into options Greeks, implied volatility, and Put-Call ratio for advanced options trading.',
      instructor: {
        name: 'SmartWave Academy',
        avatar: '/api/placeholder/40/40',
        credentials: 'Expert Trading Instructors'
      },
      duration: '5 Links',
      difficulty: 'Advanced',
      students: 1800,
      rating: 4.9,
      image: '/api/placeholder/400/200',
      price: 4999,
      validity: 'Valid Indefinitely',
      modules: [],
      redirectUrl: 'https://smartwaveacademy.com/d323f49c-1d39-4122-b9ab-ecac1b00c5c0'
    },
    {
      id: '6',
      title: 'Advance Options Spreads',
      description: 'Master complex options spread strategies for professional-level options trading.',
      instructor: {
        name: 'SmartWave Academy',
        avatar: '/api/placeholder/40/40',
        credentials: 'Expert Trading Instructors'
      },
      duration: '6 Links',
      difficulty: 'Advanced',
      students: 950,
      rating: 4.8,
      image: '/api/placeholder/400/200',
      price: 7999,
      validity: 'Valid Indefinitely',
      modules: [],
      redirectUrl: 'https://smartwaveacademy.com/69a8f9f9-4ce5-447d-a8ba-c30452fbf239'
    },
    {
      id: '7',
      title: 'No Code Options Automation Webinar',
      description: 'Learn to automate options trading without coding using advanced no-code solutions.',
      instructor: {
        name: 'SmartWave Academy',
        avatar: '/api/placeholder/40/40',
        credentials: 'Expert Trading Instructors'
      },
      duration: 'Webinar',
      difficulty: 'Beginner',
      students: 2500,
      rating: 4.7,
      image: '/api/placeholder/400/200',
      price: 0,
      modules: [],
      redirectUrl: 'https://smartwaveacademy.com/89ca20f8-9f00-41a2-9c8e-f8e4e6141ffe'
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
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-6 leading-relaxed">
            Master Algorithmic Trading
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground mb-6 max-w-2xl mx-auto">
            Learn from industry experts and transform your trading with comprehensive courses designed for every skill level.
          </p>
          <div className="flex flex-wrap justify-center gap-3 mb-6">
            <div className="flex items-center gap-2 bg-white/10 rounded-lg px-3 py-2">
              <Trophy className="h-4 w-4 text-primary" />
              <span className="text-sm font-medium">5,000+ Students</span>
            </div>
            <div className="flex items-center gap-2 bg-white/10 rounded-lg px-3 py-2">
              <Target className="h-4 w-4 text-primary" />
              <span className="text-sm font-medium">95% Success Rate</span>
            </div>
            <div className="flex items-center gap-2 bg-white/10 rounded-lg px-3 py-2">
              <Lightbulb className="h-4 w-4 text-primary" />
              <span className="text-sm font-medium">Expert Instructors</span>
            </div>
          </div>
          <Button size="lg" className="text-lg px-6 py-3" onClick={handleStartLearning}>
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
        <div>
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
        </div>
      </div>

      {/* Course Grid */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {filteredCourses.map((course) => (
          <Card key={course.id} className="group hover:shadow-lg transition-all duration-300 cursor-pointer"
                onClick={() => handleCourseClick(course)}>
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
                  {course.price === 0 ? 'Free' : `₹ ${course.price}`}
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

              {course.sessions && (
                <div className="text-sm text-muted-foreground mb-2">
                  <span className="font-medium">Sessions:</span> {course.sessions}
                </div>
              )}

              {course.validity && (
                <div className="text-sm text-muted-foreground mb-4">
                  <span className="font-medium">Validity:</span> {course.validity}
                </div>
              )}

              <Button className="w-full group">
                <span>Enroll Now</span>
                <ExternalLink className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
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
      {!selectedCourse && <Footer />}
    </div>
  );
};

export default Courses;