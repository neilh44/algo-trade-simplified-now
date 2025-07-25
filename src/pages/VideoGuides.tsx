import { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { 
  Search, 
  Play, 
  Clock, 
  Eye, 
  Download, 
  BookOpen,
  TrendingUp,
  Code,
  BarChart3,
  Users,
  Calendar
} from 'lucide-react';

export default function VideoGuides() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = ['All', 'Getting Started', 'Advanced Features', 'Best Practices', 'API Usage', 'Strategy Building'];

  const videoSeries = [
    {
      id: 1,
      title: 'Complete Beginner Series',
      description: 'Everything you need to start algorithmic trading from zero',
      videos: 12,
      totalDuration: '6 hours',
      views: 125000,
      category: 'Getting Started',
      instructor: 'John Smith',
      thumbnail: '/api/placeholder/400/250',
      difficulty: 'Beginner',
      lastUpdated: '1 week ago'
    },
    {
      id: 2,
      title: 'Advanced Strategy Development',
      description: 'Professional techniques for building robust trading strategies',
      videos: 8,
      totalDuration: '4.5 hours',
      views: 78000,
      category: 'Advanced Features',
      instructor: 'Sarah Johnson',
      thumbnail: '/api/placeholder/400/250',
      difficulty: 'Advanced',
      lastUpdated: '3 days ago'
    },
    {
      id: 3,
      title: 'API Mastery Course',
      description: 'Complete guide to using our trading APIs effectively',
      videos: 15,
      totalDuration: '8 hours',
      views: 92000,
      category: 'API Usage',
      instructor: 'Mike Chen',
      thumbnail: '/api/placeholder/400/250',
      difficulty: 'Intermediate',
      lastUpdated: '5 days ago'
    }
  ];

  const featuredVideos = [
    {
      id: 1,
      title: 'Building Your First Trading Bot in 30 Minutes',
      duration: '32:15',
      views: 45000,
      category: 'Getting Started',
      instructor: 'John Smith',
      description: 'Step-by-step walkthrough of creating a simple moving average crossover strategy',
      thumbnail: '/api/placeholder/600/340',
      difficulty: 'Beginner',
      publishedDate: '2 days ago',
      hasTranscript: true,
      hasResources: true
    },
    {
      id: 2,
      title: 'Advanced Risk Management Techniques',
      duration: '45:20',
      views: 32000,
      category: 'Best Practices',
      instructor: 'Sarah Johnson',
      description: 'Professional risk management strategies used by institutional traders',
      thumbnail: '/api/placeholder/600/340',
      difficulty: 'Advanced',
      publishedDate: '1 week ago',
      hasTranscript: true,
      hasResources: true
    },
    {
      id: 3,
      title: 'Real-time Data Streaming with WebSockets',
      duration: '28:45',
      views: 28000,
      category: 'API Usage',
      instructor: 'Mike Chen',
      description: 'Implement live market data feeds for your trading applications',
      thumbnail: '/api/placeholder/600/340',
      difficulty: 'Intermediate',
      publishedDate: '4 days ago',
      hasTranscript: true,
      hasResources: false
    },
    {
      id: 4,
      title: 'Backtesting Strategies Like a Pro',
      duration: '52:30',
      views: 67000,
      category: 'Best Practices',
      instructor: 'Emma Wilson',
      description: 'Master the art of backtesting and avoid common pitfalls',
      thumbnail: '/api/placeholder/600/340',
      difficulty: 'Intermediate',
      publishedDate: '3 weeks ago',
      hasTranscript: true,
      hasResources: true
    },
    {
      id: 5,
      title: 'Machine Learning in Trading',
      duration: '1:15:20',
      views: 89000,
      category: 'Advanced Features',
      instructor: 'Dr. Alex Rodriguez',
      description: 'Apply machine learning algorithms to predict market movements',
      thumbnail: '/api/placeholder/600/340',
      difficulty: 'Advanced',
      publishedDate: '2 weeks ago',
      hasTranscript: true,
      hasResources: true
    },
    {
      id: 6,
      title: 'Portfolio Optimization Strategies',
      duration: '38:15',
      views: 41000,
      category: 'Best Practices',
      instructor: 'Lisa Chen',
      description: 'Modern portfolio theory applied to algorithmic trading',
      thumbnail: '/api/placeholder/600/340',
      difficulty: 'Advanced',
      publishedDate: '1 week ago',
      hasTranscript: false,
      hasResources: true
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

  const filteredVideos = featuredVideos.filter(video => {
    const matchesSearch = video.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         video.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || video.category === selectedCategory;
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
                Video Guides
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Learn through comprehensive video tutorials. Watch expert instructors guide you 
                through every aspect of algorithmic trading, from basics to advanced strategies.
              </p>
            </div>

            {/* Search and Filter */}
            <div className="max-w-4xl mx-auto space-y-6">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                <Input
                  type="text"
                  placeholder="Search video guides..."
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

        {/* Video Series */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-foreground mb-8 text-center">
              Complete Video Series
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
              {videoSeries.map((series) => (
                <Card key={series.id} className="hover:shadow-lg transition-shadow group">
                  <div className="aspect-video bg-muted rounded-t-lg relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    <div className="absolute bottom-4 left-4 text-white">
                      <div className="flex items-center space-x-4 text-sm">
                        <div className="flex items-center space-x-1">
                          <Play className="h-4 w-4" />
                          <span>{series.videos} videos</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Clock className="h-4 w-4" />
                          <span>{series.totalDuration}</span>
                        </div>
                      </div>
                    </div>
                    <div className="absolute top-4 right-4">
                      <Badge className={getDifficultyColor(series.difficulty)}>
                        {series.difficulty}
                      </Badge>
                    </div>
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                      <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center">
                        <Play className="h-8 w-8 text-primary-foreground ml-1" />
                      </div>
                    </div>
                  </div>
                  
                  <CardContent className="p-6">
                    <div className="space-y-4">
                      <div>
                        <h3 className="font-semibold text-xl mb-2">{series.title}</h3>
                        <p className="text-muted-foreground">{series.description}</p>
                      </div>

                      <div className="flex items-center justify-between text-sm">
                        <div className="flex items-center space-x-1 text-muted-foreground">
                          <Eye className="h-4 w-4" />
                          <span>{series.views.toLocaleString()} views</span>
                        </div>
                        <span className="text-muted-foreground">Updated {series.lastUpdated}</span>
                      </div>

                      <div className="flex items-center text-sm text-muted-foreground">
                        <Users className="h-4 w-4 mr-1" />
                        {series.instructor}
                      </div>

                      <Button className="w-full">
                        <Play className="h-4 w-4 mr-2" />
                        Watch Series
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Individual Videos */}
        <section className="pb-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-3xl font-bold text-foreground">
                Featured Videos ({filteredVideos.length})
              </h2>
              <div className="flex items-center space-x-4">
                <span className="text-sm text-muted-foreground">Sort by:</span>
                <select className="border border-border rounded-md px-3 py-1 text-sm bg-background">
                  <option>Most Recent</option>
                  <option>Most Popular</option>
                  <option>Duration</option>
                  <option>Difficulty</option>
                </select>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredVideos.map((video) => (
                <Card key={video.id} className="hover:shadow-lg transition-shadow group">
                  <div className="aspect-video bg-muted rounded-t-lg relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    <div className="absolute bottom-4 left-4 text-white">
                      <div className="flex items-center space-x-2 text-sm">
                        <Clock className="h-4 w-4" />
                        <span>{video.duration}</span>
                      </div>
                    </div>
                    <div className="absolute top-4 right-4">
                      <Badge className={getDifficultyColor(video.difficulty)}>
                        {video.difficulty}
                      </Badge>
                    </div>
                    <div className="absolute top-4 left-4 flex space-x-2">
                      {video.hasTranscript && (
                        <Badge variant="secondary" className="text-xs">
                          CC
                        </Badge>
                      )}
                      {video.hasResources && (
                        <Badge variant="secondary" className="text-xs">
                          <Download className="h-3 w-3" />
                        </Badge>
                      )}
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
                          {video.title}
                        </h3>
                        <p className="text-muted-foreground text-sm">
                          {video.description}
                        </p>
                      </div>

                      <div className="flex items-center justify-between text-sm">
                        <div className="flex items-center space-x-1 text-muted-foreground">
                          <Eye className="h-4 w-4" />
                          <span>{video.views.toLocaleString()}</span>
                        </div>
                        <div className="flex items-center space-x-1 text-muted-foreground">
                          <Calendar className="h-4 w-4" />
                          <span>{video.publishedDate}</span>
                        </div>
                      </div>

                      <div className="flex items-center text-sm text-muted-foreground">
                        <Users className="h-4 w-4 mr-1" />
                        {video.instructor}
                      </div>

                      <Badge variant="outline" className="text-xs">
                        {video.category}
                      </Badge>

                      <div className="flex space-x-2">
                        <Button className="flex-1">
                          <Play className="h-4 w-4 mr-2" />
                          Watch
                        </Button>
                        {video.hasResources && (
                          <Button variant="outline" size="sm">
                            <Download className="h-4 w-4" />
                          </Button>
                        )}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}