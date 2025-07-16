import { useState } from 'react';
import { Link } from 'react-router-dom';
import Header from '@/components/Header';
import AppFooter from '@/components/AppFooter';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { 
  Search, 
  Calendar, 
  User, 
  Clock, 
  Eye,
  TrendingUp,
  ArrowRight,
  BookOpen,
  Code,
  BarChart3,
  Lightbulb
} from 'lucide-react';

export default function Blog() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = ['All', 'News', 'Tutorials', 'Case Studies', 'Industry Insights', 'Product Updates'];

  const featuredPost = {
    id: 1,
    title: 'The Future of Algorithmic Trading: AI and Machine Learning Trends',
    excerpt: 'Explore how artificial intelligence and machine learning are revolutionizing algorithmic trading strategies and what it means for retail traders.',
    category: 'Industry Insights',
    author: 'Dr. Sarah Johnson',
    publishedAt: '2024-01-15',
    readTime: '8 min read',
    views: 15420,
    image: '/api/placeholder/800/400',
    tags: ['AI', 'Machine Learning', 'Future Trends']
  };

  const blogPosts = [
    {
      id: 2,
      title: 'Building Your First Momentum Trading Strategy',
      excerpt: 'Step-by-step guide to creating a momentum-based trading algorithm with Python.',
      category: 'Tutorials',
      author: 'Mike Chen',
      publishedAt: '2024-01-12',
      readTime: '12 min read',
      views: 8750,
      image: '/api/placeholder/400/250',
      tags: ['Python', 'Momentum', 'Tutorial'],
      featured: false
    },
    {
      id: 3,
      title: 'Market Volatility Analysis: Q4 2023 Report',
      excerpt: 'Comprehensive analysis of market volatility patterns and their impact on algorithmic strategies.',
      category: 'Industry Insights',
      author: 'Emma Wilson',
      publishedAt: '2024-01-10',
      readTime: '6 min read',
      views: 12300,
      image: '/api/placeholder/400/250',
      tags: ['Market Analysis', 'Volatility', 'Report'],
      featured: false
    },
    {
      id: 4,
      title: 'New API Features: Real-time WebSocket Streaming',
      excerpt: 'Announcing enhanced real-time data streaming capabilities with improved latency and reliability.',
      category: 'Product Updates',
      author: 'AutomateAlgos Team',
      publishedAt: '2024-01-08',
      readTime: '4 min read',
      views: 6890,
      image: '/api/placeholder/400/250',
      tags: ['API', 'WebSocket', 'Updates'],
      featured: false
    },
    {
      id: 5,
      title: 'Case Study: Hedge Fund Strategy Implementation',
      excerpt: 'How a mid-size hedge fund increased returns by 35% using our algorithmic trading platform.',
      category: 'Case Studies',
      author: 'John Smith',
      publishedAt: '2024-01-05',
      readTime: '10 min read',
      views: 11250,
      image: '/api/placeholder/400/250',
      tags: ['Case Study', 'Hedge Fund', 'Success Story'],
      featured: false
    },
    {
      id: 6,
      title: 'Risk Management Best Practices for Algo Traders',
      excerpt: 'Essential risk management techniques every algorithmic trader should implement.',
      category: 'Tutorials',
      author: 'Lisa Chen',
      publishedAt: '2024-01-03',
      readTime: '7 min read',
      views: 9630,
      image: '/api/placeholder/400/250',
      tags: ['Risk Management', 'Best Practices', 'Tutorial'],
      featured: false
    },
    {
      id: 7,
      title: 'Cryptocurrency Market Trends: January 2024',
      excerpt: 'Analysis of recent cryptocurrency market movements and opportunities for algorithmic trading.',
      category: 'News',
      author: 'Alex Rodriguez',
      publishedAt: '2024-01-01',
      readTime: '5 min read',
      views: 7420,
      image: '/api/placeholder/400/250',
      tags: ['Cryptocurrency', 'Market Trends', 'Analysis'],
      featured: false
    }
  ];

  const popularTags = [
    'Python', 'API', 'Machine Learning', 'Risk Management', 'Backtesting', 
    'Cryptocurrency', 'Market Analysis', 'Trading Strategies', 'Tutorial'
  ];

  const recentPosts = [
    { title: 'Advanced Portfolio Optimization', date: '2024-01-14' },
    { title: 'Options Trading Algorithms', date: '2024-01-11' },
    { title: 'Market Sentiment Analysis', date: '2024-01-09' },
    { title: 'High-Frequency Trading Basics', date: '2024-01-06' },
  ];

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'Tutorials': return BookOpen;
      case 'News': return TrendingUp;
      case 'Case Studies': return BarChart3;
      case 'Industry Insights': return Lightbulb;
      case 'Product Updates': return Code;
      default: return BookOpen;
    }
  };

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'Tutorials': return 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300';
      case 'News': return 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300';
      case 'Case Studies': return 'bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-300';
      case 'Industry Insights': return 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300';
      case 'Product Updates': return 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300';
      default: return 'bg-muted text-muted-foreground';
    }
  };

  const filteredPosts = blogPosts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         post.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    const matchesCategory = selectedCategory === 'All' || post.category === selectedCategory;
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
                Trading Blog
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Stay informed with the latest insights, tutorials, and industry news. 
                Learn from experts and discover new strategies to enhance your trading.
              </p>
            </div>

            {/* Search and Filter */}
            <div className="max-w-4xl mx-auto space-y-6">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                <Input
                  type="text"
                  placeholder="Search articles..."
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

        {/* Featured Post */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-foreground mb-8">Featured Article</h2>
            
            <Card className="hover:shadow-lg transition-shadow mb-16">
              <div className="md:flex">
                <div className="md:w-1/2">
                  <div className="aspect-video md:aspect-square bg-muted rounded-l-lg"></div>
                </div>
                <div className="md:w-1/2 p-8">
                  <div className="space-y-4">
                    <Badge className={getCategoryColor(featuredPost.category)}>
                      {featuredPost.category}
                    </Badge>
                    
                    <h3 className="text-2xl font-bold text-foreground">
                      {featuredPost.title}
                    </h3>
                    
                    <p className="text-muted-foreground">
                      {featuredPost.excerpt}
                    </p>
                    
                    <div className="flex items-center space-x-6 text-sm text-muted-foreground">
                      <div className="flex items-center space-x-1">
                        <User className="h-4 w-4" />
                        <span>{featuredPost.author}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Calendar className="h-4 w-4" />
                        <span>{new Date(featuredPost.publishedAt).toLocaleDateString()}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Clock className="h-4 w-4" />
                        <span>{featuredPost.readTime}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Eye className="h-4 w-4" />
                        <span>{featuredPost.views.toLocaleString()}</span>
                      </div>
                    </div>
                    
                    <div className="flex flex-wrap gap-1">
                      {featuredPost.tags.map((tag, index) => (
                        <Badge key={index} variant="outline" className="text-xs">
                          #{tag}
                        </Badge>
                      ))}
                    </div>
                    
                    <Button asChild>
                      <Link to={`/blog/${featuredPost.id}`}>
                        Read Full Article
                        <ArrowRight className="h-4 w-4 ml-2" />
                      </Link>
                    </Button>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </section>

        {/* Blog Posts Grid */}
        <section className="pb-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              
              {/* Main Content */}
              <div className="lg:col-span-2">
                <div className="flex items-center justify-between mb-8">
                  <h2 className="text-2xl font-bold text-foreground">
                    Latest Articles ({filteredPosts.length})
                  </h2>
                  <select className="border border-border rounded-md px-3 py-1 text-sm bg-background">
                    <option>Most Recent</option>
                    <option>Most Popular</option>
                    <option>Most Viewed</option>
                  </select>
                </div>

                <div className="space-y-8">
                  {filteredPosts.map((post) => {
                    const CategoryIcon = getCategoryIcon(post.category);
                    
                    return (
                      <Card key={post.id} className="hover:shadow-lg transition-shadow">
                        <div className="md:flex">
                          <div className="md:w-1/3">
                            <div className="aspect-video bg-muted rounded-l-lg"></div>
                          </div>
                          <div className="md:w-2/3 p-6">
                            <div className="space-y-3">
                              <div className="flex items-center space-x-2">
                                <CategoryIcon className="h-4 w-4 text-primary" />
                                <Badge className={getCategoryColor(post.category)}>
                                  {post.category}
                                </Badge>
                              </div>
                              
                              <h3 className="text-xl font-bold text-foreground hover:text-primary transition-colors">
                                <Link to={`/blog/${post.id}`}>
                                  {post.title}
                                </Link>
                              </h3>
                              
                              <p className="text-muted-foreground">
                                {post.excerpt}
                              </p>
                              
                              <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                                <div className="flex items-center space-x-1">
                                  <User className="h-3 w-3" />
                                  <span>{post.author}</span>
                                </div>
                                <div className="flex items-center space-x-1">
                                  <Calendar className="h-3 w-3" />
                                  <span>{new Date(post.publishedAt).toLocaleDateString()}</span>
                                </div>
                                <div className="flex items-center space-x-1">
                                  <Clock className="h-3 w-3" />
                                  <span>{post.readTime}</span>
                                </div>
                                <div className="flex items-center space-x-1">
                                  <Eye className="h-3 w-3" />
                                  <span>{post.views.toLocaleString()}</span>
                                </div>
                              </div>
                              
                              <div className="flex flex-wrap gap-1">
                                {post.tags.map((tag, index) => (
                                  <Badge key={index} variant="secondary" className="text-xs">
                                    #{tag}
                                  </Badge>
                                ))}
                              </div>
                            </div>
                          </div>
                        </div>
                      </Card>
                    );
                  })}
                </div>
              </div>

              {/* Sidebar */}
              <div className="space-y-8">
                
                {/* Newsletter Signup */}
                <Card>
                  <CardHeader>
                    <CardTitle>Stay Updated</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-4">
                      Get the latest articles and insights delivered to your inbox.
                    </p>
                    <div className="space-y-3">
                      <Input type="email" placeholder="Your email address" />
                      <Button className="w-full">Subscribe</Button>
                    </div>
                  </CardContent>
                </Card>

                {/* Popular Tags */}
                <Card>
                  <CardHeader>
                    <CardTitle>Popular Tags</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2">
                      {popularTags.map((tag, index) => (
                        <Badge key={index} variant="outline" className="cursor-pointer hover:bg-primary hover:text-primary-foreground">
                          #{tag}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                {/* Recent Posts */}
                <Card>
                  <CardHeader>
                    <CardTitle>Recent Posts</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {recentPosts.map((post, index) => (
                        <div key={index} className="border-b border-border last:border-b-0 pb-3 last:pb-0">
                          <Link 
                            to={`/blog/${index + 10}`}
                            className="block hover:text-primary transition-colors"
                          >
                            <h4 className="font-medium text-sm">{post.title}</h4>
                            <p className="text-xs text-muted-foreground mt-1">
                              {new Date(post.date).toLocaleDateString()}
                            </p>
                          </Link>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>
      </main>

      <AppFooter />
    </div>
  );
}