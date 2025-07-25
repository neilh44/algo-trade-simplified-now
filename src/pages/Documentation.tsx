import { useState } from 'react';
import { Link } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { 
  Search, 
  BookOpen, 
  Code, 
  Play, 
  Download, 
  ExternalLink,
  ChevronRight,
  Clock,
  Users
} from 'lucide-react';

export default function Documentation() {
  const [searchQuery, setSearchQuery] = useState('');

  const docSections = [
    {
      title: 'Getting Started',
      description: 'New to algorithmic trading? Start here with our comprehensive guides.',
      icon: BookOpen,
      items: [
        { title: 'Platform Overview', duration: '5 min read', difficulty: 'Beginner' },
        { title: 'Account Setup', duration: '10 min read', difficulty: 'Beginner' },
        { title: 'First Strategy', duration: '15 min read', difficulty: 'Beginner' },
        { title: 'Risk Management Basics', duration: '12 min read', difficulty: 'Beginner' },
      ]
    },
    {
      title: 'API Documentation',
      description: 'Complete reference for our trading APIs and integration guides.',
      icon: Code,
      items: [
        { title: 'Authentication & Setup', duration: '8 min read', difficulty: 'Intermediate' },
        { title: 'Market Data API', duration: '15 min read', difficulty: 'Intermediate' },
        { title: 'Order Management', duration: '20 min read', difficulty: 'Advanced' },
        { title: 'Webhooks & Events', duration: '12 min read', difficulty: 'Advanced' },
      ]
    },
    {
      title: 'Strategy Development',
      description: 'Learn to build, test, and deploy profitable trading strategies.',
      icon: Play,
      items: [
        { title: 'Strategy Framework', duration: '25 min read', difficulty: 'Intermediate' },
        { title: 'Backtesting Guide', duration: '30 min read', difficulty: 'Intermediate' },
        { title: 'Live Trading Setup', duration: '20 min read', difficulty: 'Advanced' },
        { title: 'Performance Analysis', duration: '18 min read', difficulty: 'Advanced' },
      ]
    },
    {
      title: 'Platform Features',
      description: 'Detailed guides on using all platform features effectively.',
      icon: Download,
      items: [
        { title: 'Dashboard Overview', duration: '10 min read', difficulty: 'Beginner' },
        { title: 'Portfolio Management', duration: '15 min read', difficulty: 'Intermediate' },
        { title: 'Alert System', duration: '8 min read', difficulty: 'Beginner' },
        { title: 'Reporting Tools', duration: '12 min read', difficulty: 'Intermediate' },
      ]
    }
  ];

  const popularDocs = [
    { title: 'Quick Start Guide', views: '12.5k', category: 'Getting Started' },
    { title: 'REST API Reference', views: '8.3k', category: 'API' },
    { title: 'Strategy Templates', views: '6.7k', category: 'Development' },
    { title: 'Error Codes', views: '5.2k', category: 'Troubleshooting' },
    { title: 'Webhook Setup', views: '4.8k', category: 'Integration' },
  ];

  const recentUpdates = [
    { title: 'New Portfolio Analytics', date: '2 days ago', type: 'Feature' },
    { title: 'API Rate Limits Update', date: '1 week ago', type: 'API' },
    { title: 'Security Best Practices', date: '2 weeks ago', type: 'Security' },
  ];

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'Beginner': return 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300';
      case 'Intermediate': return 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300';
      case 'Advanced': return 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300';
      default: return 'bg-muted text-muted-foreground';
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-primary/5 to-secondary/5 py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h1 className="text-4xl font-bold text-foreground mb-4">
                Documentation
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Everything you need to master algorithmic trading with our platform. 
                From getting started guides to advanced API documentation.
              </p>
            </div>

            {/* Search Bar */}
            <div className="max-w-2xl mx-auto relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-muted-foreground" />
              <Input
                type="text"
                placeholder="Search documentation..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 pr-4 py-3 text-lg"
              />
            </div>
          </div>
        </section>

        {/* Quick Links */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              
              {/* Main Documentation Sections */}
              <div className="lg:col-span-2">
                <h2 className="text-2xl font-bold text-foreground mb-8">Browse Documentation</h2>
                
                <div className="space-y-8">
                  {docSections.map((section, index) => {
                    const Icon = section.icon;
                    return (
                      <Card key={index} className="hover:shadow-lg transition-shadow">
                        <CardHeader>
                          <CardTitle className="flex items-center text-xl">
                            <Icon className="h-6 w-6 text-primary mr-3" />
                            {section.title}
                          </CardTitle>
                          <p className="text-muted-foreground">{section.description}</p>
                        </CardHeader>
                        <CardContent>
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {section.items.map((item, itemIndex) => (
                              <Link
                                key={itemIndex}
                                to={`/docs/${section.title.toLowerCase().replace(/\s+/g, '-')}/${item.title.toLowerCase().replace(/\s+/g, '-')}`}
                                className="p-4 border border-border rounded-lg hover:border-primary/50 transition-colors group"
                              >
                                <div className="flex items-start justify-between mb-2">
                                  <h4 className="font-medium group-hover:text-primary transition-colors">
                                    {item.title}
                                  </h4>
                                  <ChevronRight className="h-4 w-4 text-muted-foreground group-hover:text-primary transition-colors" />
                                </div>
                                <div className="flex items-center justify-between">
                                  <div className="flex items-center text-sm text-muted-foreground">
                                    <Clock className="h-3 w-3 mr-1" />
                                    {item.duration}
                                  </div>
                                  <Badge className={getDifficultyColor(item.difficulty)}>
                                    {item.difficulty}
                                  </Badge>
                                </div>
                              </Link>
                            ))}
                          </div>
                        </CardContent>
                      </Card>
                    );
                  })}
                </div>
              </div>

              {/* Sidebar */}
              <div className="space-y-8">
                
                {/* Popular Documentation */}
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <Users className="h-5 w-5 text-primary mr-2" />
                      Popular Docs
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {popularDocs.map((doc, index) => (
                        <Link
                          key={index}
                          to={`/docs/${doc.title.toLowerCase().replace(/\s+/g, '-')}`}
                          className="block group"
                        >
                          <div className="flex items-start justify-between">
                            <div className="flex-1">
                              <h4 className="font-medium group-hover:text-primary transition-colors">
                                {doc.title}
                              </h4>
                              <div className="flex items-center justify-between mt-1">
                                <Badge variant="outline" className="text-xs">
                                  {doc.category}
                                </Badge>
                                <span className="text-xs text-muted-foreground">
                                  {doc.views} views
                                </span>
                              </div>
                            </div>
                          </div>
                        </Link>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                {/* Recent Updates */}
                <Card>
                  <CardHeader>
                    <CardTitle>Recent Updates</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {recentUpdates.map((update, index) => (
                        <div key={index} className="border-b border-border last:border-b-0 pb-3 last:pb-0">
                          <h4 className="font-medium text-sm">{update.title}</h4>
                          <div className="flex items-center justify-between mt-1">
                            <Badge variant="outline" className="text-xs">
                              {update.type}
                            </Badge>
                            <span className="text-xs text-muted-foreground">
                              {update.date}
                            </span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                {/* Quick Actions */}
                <Card>
                  <CardHeader>
                    <CardTitle>Quick Actions</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <Button variant="outline" className="w-full justify-start">
                      <Download className="h-4 w-4 mr-2" />
                      Download SDK
                    </Button>
                    <Button variant="outline" className="w-full justify-start">
                      <ExternalLink className="h-4 w-4 mr-2" />
                      API Playground
                    </Button>
                    <Button variant="outline" className="w-full justify-start">
                      <Code className="h-4 w-4 mr-2" />
                      Code Examples
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}