import { useState } from 'react';
import { Link } from 'react-router-dom';
import Header from '@/components/Header';
import AppFooter from '@/components/AppFooter';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { 
  Search, 
  Play, 
  Clock, 
  User, 
  Code, 
  BarChart3, 
  TrendingUp,
  BookOpen,
  CheckCircle,
  Star
} from 'lucide-react';

export default function Tutorials() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = ['All', 'Beginner', 'Intermediate', 'Advanced', 'Python', 'JavaScript', 'Strategy Development'];

  const tutorials = [
    {
      id: 1,
      title: 'Your First Trading Bot',
      description: 'Build a simple moving average crossover strategy from scratch',
      duration: '45 minutes',
      difficulty: 'Beginner',
      category: 'Strategy Development',
      instructor: 'John Smith',
      rating: 4.8,
      completions: 12500,
      progress: 0,
      steps: 8,
      tags: ['Python', 'Strategy', 'Beginner'],
      thumbnail: '/api/placeholder/400/250'
    },
    {
      id: 2,
      title: 'Advanced Risk Management',
      description: 'Implement sophisticated risk management techniques',
      duration: '1 hour 20 minutes',
      difficulty: 'Advanced',
      category: 'Risk Management',
      instructor: 'Sarah Johnson',
      rating: 4.9,
      completions: 8300,
      progress: 65,
      steps: 12,
      tags: ['Risk', 'Advanced', 'Portfolio'],
      thumbnail: '/api/placeholder/400/250'
    },
    {
      id: 3,
      title: 'API Integration Basics',
      description: 'Connect your strategies to live market data and trading platforms',
      duration: '35 minutes',
      difficulty: 'Intermediate',
      category: 'API Integration',
      instructor: 'Mike Chen',
      rating: 4.7,
      completions: 9800,
      progress: 0,
      steps: 6,
      tags: ['API', 'Integration', 'JavaScript'],
      thumbnail: '/api/placeholder/400/250'
    },
    {
      id: 4,
      title: 'Backtesting Like a Pro',
      description: 'Master the art of backtesting trading strategies effectively',
      duration: '55 minutes',
      difficulty: 'Intermediate',
      category: 'Testing',
      instructor: 'Emma Wilson',
      rating: 4.8,
      completions: 7200,
      progress: 100,
      steps: 10,
      tags: ['Backtesting', 'Analysis', 'Python'],
      thumbnail: '/api/placeholder/400/250'
    },
    {
      id: 5,
      title: 'Machine Learning in Trading',
      description: 'Apply ML algorithms to predict market movements',
      duration: '2 hours',
      difficulty: 'Advanced',
      category: 'Machine Learning',
      instructor: 'Dr. Alex Rodriguez',
      rating: 4.9,
      completions: 4500,
      progress: 25,
      steps: 15,
      tags: ['ML', 'Advanced', 'Python'],
      thumbnail: '/api/placeholder/400/250'
    },
    {
      id: 6,
      title: 'Portfolio Optimization',
      description: 'Learn modern portfolio theory and optimization techniques',
      duration: '1 hour 15 minutes',
      difficulty: 'Advanced',
      category: 'Portfolio',
      instructor: 'Lisa Chen',
      rating: 4.7,
      completions: 6100,
      progress: 0,
      steps: 9,
      tags: ['Portfolio', 'Optimization', 'Math'],
      thumbnail: '/api/placeholder/400/250'
    }
  ];

  const learningPaths = [
    {
      title: 'Complete Beginner Path',
      description: 'Start from zero and build your first trading algorithm',
      courses: 8,
      duration: '12 hours',
      students: 25000,
      difficulty: 'Beginner'
    },
    {
      title: 'Professional Trader Path',
      description: 'Advanced strategies and institutional-grade techniques',
      courses: 15,
      duration: '30 hours',
      students: 8500,
      difficulty: 'Advanced'
    },
    {
      title: 'Quantitative Analysis Path',
      description: 'Mathematical and statistical approaches to trading',
      courses: 12,
      duration: '25 hours',
      students: 5200,
      difficulty: 'Advanced'
    }
  ];

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'Beginner': return 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300';
      case 'Intermediate': return 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300';
      case 'Advanced': return 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300';
      default: return 'bg-muted text-muted-foreground';
    }
  };

  const getProgressIcon = (progress: number) => {
    if (progress === 0) return Play;
    if (progress === 100) return CheckCircle;
    return Play;
  };

  const filteredTutorials = tutorials.filter(tutorial => {
    const matchesSearch = tutorial.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         tutorial.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || 
                           tutorial.difficulty === selectedCategory ||
                           tutorial.tags.includes(selectedCategory);
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-primary/5 to-secondary/5 py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h1 className="text-4xl font-bold text-foreground mb-4">
                Interactive Tutorials
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Learn algorithmic trading through hands-on tutorials. Follow step-by-step guides 
                with interactive code examples and track your progress.
              </p>
            </div>

            {/* Search and Filter */}
            <div className="max-w-4xl mx-auto space-y-6">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                <Input
                  type="text"
                  placeholder="Search tutorials..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10 pr-4 py-3 text-lg"
                />
              </div>

              <div className="flex flex-wrap gap-2 justify-center">
                {categories.map((category) => (
                  <Button
                    key={category}
                    variant={selectedCategory === category ? "default" : "outline"}
                    size="sm"
                    onClick={() => setSelectedCategory(category)}
                  >
                    {category}
                  </Button>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Learning Paths */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-foreground mb-8 text-center">
              Structured Learning Paths
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
              {learningPaths.map((path, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <CardTitle className="text-xl">{path.title}</CardTitle>
                    <p className="text-muted-foreground">{path.description}</p>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="flex justify-between text-sm">
                        <span>{path.courses} courses</span>
                        <span>{path.duration}</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center text-sm text-muted-foreground">
                          <User className="h-4 w-4 mr-1" />
                          {path.students.toLocaleString()} students
                        </div>
                        <Badge className={getDifficultyColor(path.difficulty)}>
                          {path.difficulty}
                        </Badge>
                      </div>
                      <Button className="w-full">
                        Start Learning Path
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Tutorials Grid */}
        <section className="pb-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-3xl font-bold text-foreground">
                All Tutorials ({filteredTutorials.length})
              </h2>
              <div className="flex items-center space-x-4">
                <span className="text-sm text-muted-foreground">Sort by:</span>
                <select className="border border-border rounded-md px-3 py-1 text-sm bg-background">
                  <option>Most Popular</option>
                  <option>Newest</option>
                  <option>Duration</option>
                  <option>Difficulty</option>
                </select>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredTutorials.map((tutorial) => {
                const ProgressIcon = getProgressIcon(tutorial.progress);
                
                return (
                  <Card key={tutorial.id} className="hover:shadow-lg transition-shadow group">
                    <div className="aspect-video bg-muted rounded-t-lg relative overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                      <div className="absolute bottom-4 left-4 text-white">
                        <div className="flex items-center space-x-2 text-sm">
                          <Clock className="h-4 w-4" />
                          <span>{tutorial.duration}</span>
                        </div>
                      </div>
                      <div className="absolute top-4 right-4">
                        <Badge className={getDifficultyColor(tutorial.difficulty)}>
                          {tutorial.difficulty}
                        </Badge>
                      </div>
                      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                        <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center">
                          <Play className="h-6 w-6 text-primary-foreground ml-1" />
                        </div>
                      </div>
                    </div>
                    
                    <CardContent className="p-6">
                      <div className="space-y-4">
                        <div>
                          <h3 className="font-semibold text-lg mb-2 group-hover:text-primary transition-colors">
                            {tutorial.title}
                          </h3>
                          <p className="text-muted-foreground text-sm">
                            {tutorial.description}
                          </p>
                        </div>

                        <div className="flex items-center justify-between text-sm">
                          <div className="flex items-center space-x-1">
                            <Star className="h-4 w-4 text-yellow-500" />
                            <span>{tutorial.rating}</span>
                            <span className="text-muted-foreground">
                              ({tutorial.completions.toLocaleString()})
                            </span>
                          </div>
                          <span className="text-muted-foreground">
                            {tutorial.steps} steps
                          </span>
                        </div>

                        <div className="flex items-center text-sm text-muted-foreground">
                          <User className="h-4 w-4 mr-1" />
                          {tutorial.instructor}
                        </div>

                        {tutorial.progress > 0 && (
                          <div className="space-y-2">
                            <div className="flex justify-between text-sm">
                              <span>Progress</span>
                              <span>{tutorial.progress}%</span>
                            </div>
                            <Progress value={tutorial.progress} className="h-2" />
                          </div>
                        )}

                        <div className="flex flex-wrap gap-1">
                          {tutorial.tags.map((tag, tagIndex) => (
                            <Badge key={tagIndex} variant="outline" className="text-xs">
                              {tag}
                            </Badge>
                          ))}
                        </div>

                        <Button className="w-full" asChild>
                          <Link to={`/tutorials/${tutorial.id}`}>
                            <ProgressIcon className="h-4 w-4 mr-2" />
                            {tutorial.progress === 0 ? 'Start Tutorial' : 
                             tutorial.progress === 100 ? 'Review' : 'Continue'}
                          </Link>
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>
      </main>

      <AppFooter />
    </div>
  );
}