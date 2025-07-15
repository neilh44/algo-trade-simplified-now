import { useState } from 'react';
import { DashboardHeader } from '@/components/dashboard/DashboardHeader';
import { DashboardSidebar } from '@/components/dashboard/DashboardSidebar';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import {
  Download,
  FileText,
  Code,
  BarChart3,
  Search,
  Filter,
  Calendar,
  Users,
  Star,
  Eye,
  Heart,
  Share,
} from 'lucide-react';

export default function Resources() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedType, setSelectedType] = useState('all');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const resources = [
    {
      id: 1,
      title: 'Python Trading Bot Template',
      description: 'Complete trading bot template with risk management, backtesting, and live trading capabilities.',
      type: 'Code',
      category: 'Templates',
      downloads: 2340,
      rating: 4.9,
      size: '2.4 MB',
      lastUpdated: '2024-01-15',
      author: 'AutomateAlgos Team',
      icon: Code,
      tags: ['Python', 'Trading Bot', 'Template', 'Risk Management'],
      featured: true,
    },
    {
      id: 2,
      title: 'Algorithmic Trading Guide 2024',
      description: 'Comprehensive 50-page guide covering everything from basics to advanced strategies.',
      type: 'PDF',
      category: 'Guides',
      downloads: 5670,
      rating: 4.8,
      size: '8.2 MB',
      lastUpdated: '2024-01-10',
      author: 'Sarah Johnson',
      icon: FileText,
      tags: ['Guide', 'Strategies', 'Beginner Friendly', 'Advanced'],
      featured: true,
    },
    {
      id: 3,
      title: 'Risk Management Calculator',
      description: 'Excel spreadsheet to calculate position sizes, risk/reward ratios, and portfolio allocation.',
      type: 'Spreadsheet',
      category: 'Tools',
      downloads: 1890,
      rating: 4.7,
      size: '1.2 MB',
      lastUpdated: '2024-01-08',
      author: 'David Wilson',
      icon: BarChart3,
      tags: ['Excel', 'Risk Management', 'Calculator', 'Portfolio'],
      featured: false,
    },
    {
      id: 4,
      title: 'Market Data Analysis Scripts',
      description: 'Collection of Python scripts for analyzing market data, finding patterns, and generating insights.',
      type: 'Code',
      category: 'Analysis',
      downloads: 980,
      rating: 4.6,
      size: '5.1 MB',
      lastUpdated: '2024-01-05',
      author: 'Michael Chen',
      icon: Code,
      tags: ['Python', 'Data Analysis', 'Market Data', 'Patterns'],
      featured: false,
    },
    {
      id: 5,
      title: 'Technical Indicators Cheat Sheet',
      description: 'Quick reference guide for 30+ technical indicators with formulas and usage examples.',
      type: 'PDF',
      category: 'References',
      downloads: 3240,
      rating: 4.8,
      size: '3.6 MB',
      lastUpdated: '2024-01-03',
      author: 'Emma Rodriguez',
      icon: FileText,
      tags: ['Technical Analysis', 'Indicators', 'Cheat Sheet', 'Reference'],
      featured: false,
    },
    {
      id: 6,
      title: 'Backtesting Framework',
      description: 'Robust Python framework for backtesting trading strategies with detailed performance metrics.',
      type: 'Code',
      category: 'Frameworks',
      downloads: 1450,
      rating: 4.9,
      size: '12.8 MB',
      lastUpdated: '2023-12-28',
      author: 'Alex Thompson',
      icon: Code,
      tags: ['Python', 'Backtesting', 'Framework', 'Performance'],
      featured: false,
    },
  ];

  const filteredResources = resources.filter(resource => {
    const matchesSearch = resource.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         resource.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         resource.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    const matchesType = selectedType === 'all' || resource.type.toLowerCase() === selectedType;
    const matchesCategory = selectedCategory === 'all' || resource.category.toLowerCase() === selectedCategory.toLowerCase();
    
    return matchesSearch && matchesType && matchesCategory;
  });

  const featuredResources = resources.filter(resource => resource.featured);

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'Code': return 'bg-primary text-primary-foreground';
      case 'PDF': return 'bg-secondary text-secondary-foreground';
      case 'Spreadsheet': return 'bg-accent text-accent-foreground';
      default: return 'bg-muted text-muted-foreground';
    }
  };

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'Code': return Code;
      case 'PDF': return FileText;
      case 'Spreadsheet': return BarChart3;
      default: return FileText;
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
            <h1 className="text-3xl font-bold text-foreground mb-2">Resources</h1>
            <p className="text-muted-foreground">
              Download free tools, templates, and guides to accelerate your trading journey
            </p>
          </div>

          {/* Featured Resources */}
          {featuredResources.length > 0 && (
            <div className="mb-8">
              <h2 className="text-xl font-semibold mb-4 text-foreground">Featured Resources</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {featuredResources.map((resource) => {
                  const TypeIcon = getTypeIcon(resource.type);
                  return (
                    <Card key={resource.id} className="border-2 border-primary/20 bg-primary/5">
                      <CardHeader>
                        <div className="flex items-start justify-between">
                          <div className="flex items-center space-x-3">
                            <div className="p-2 bg-primary/10 rounded-lg">
                              <TypeIcon className="h-5 w-5 text-primary" />
                            </div>
                            <div>
                              <CardTitle className="text-lg">{resource.title}</CardTitle>
                              <p className="text-sm text-muted-foreground">{resource.description}</p>
                            </div>
                          </div>
                          <Badge className={getTypeColor(resource.type)}>
                            {resource.type}
                          </Badge>
                        </div>
                      </CardHeader>
                      <CardContent className="space-y-4">
                        <div className="flex flex-wrap gap-2">
                          {resource.tags.slice(0, 3).map((tag, index) => (
                            <Badge key={index} variant="outline" className="text-xs">
                              {tag}
                            </Badge>
                          ))}
                        </div>
                        <div className="flex items-center justify-between text-sm text-muted-foreground">
                          <div className="flex items-center space-x-4">
                            <div className="flex items-center">
                              <Download className="h-4 w-4 mr-1" />
                              {resource.downloads.toLocaleString()}
                            </div>
                            <div className="flex items-center">
                              <Star className="h-4 w-4 mr-1 text-yellow-500 fill-current" />
                              {resource.rating}
                            </div>
                          </div>
                          <span>{resource.size}</span>
                        </div>
                        <Button className="w-full">
                          <Download className="mr-2 h-4 w-4" />
                          Download Now
                        </Button>
                      </CardContent>
                    </Card>
                  );
                })}
              </div>
            </div>
          )}

          {/* Search and Filter */}
          <div className="mb-8 space-y-4">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
                <Input
                  placeholder="Search resources, tags, or descriptions..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10"
                />
              </div>
              <Select value={selectedType} onValueChange={setSelectedType}>
                <SelectTrigger className="w-full md:w-48">
                  <Filter className="mr-2 h-4 w-4" />
                  <SelectValue placeholder="Resource Type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Types</SelectItem>
                  <SelectItem value="code">Code</SelectItem>
                  <SelectItem value="pdf">PDF</SelectItem>
                  <SelectItem value="spreadsheet">Spreadsheet</SelectItem>
                </SelectContent>
              </Select>
              <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                <SelectTrigger className="w-full md:w-48">
                  <SelectValue placeholder="Category" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Categories</SelectItem>
                  <SelectItem value="templates">Templates</SelectItem>
                  <SelectItem value="guides">Guides</SelectItem>
                  <SelectItem value="tools">Tools</SelectItem>
                  <SelectItem value="analysis">Analysis</SelectItem>
                  <SelectItem value="references">References</SelectItem>
                  <SelectItem value="frameworks">Frameworks</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center">
                  <FileText className="h-8 w-8 text-primary" />
                  <div className="ml-4">
                    <p className="text-sm font-medium text-muted-foreground">Total Resources</p>
                    <p className="text-2xl font-bold">{resources.length}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center">
                  <Download className="h-8 w-8 text-primary" />
                  <div className="ml-4">
                    <p className="text-sm font-medium text-muted-foreground">Total Downloads</p>
                    <p className="text-2xl font-bold">15.5K</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center">
                  <Users className="h-8 w-8 text-primary" />
                  <div className="ml-4">
                    <p className="text-sm font-medium text-muted-foreground">Contributors</p>
                    <p className="text-2xl font-bold">12</p>
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

          {/* All Resources */}
          <div className="mb-6">
            <h2 className="text-xl font-semibold mb-4 text-foreground">All Resources</h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {filteredResources.map((resource) => {
              const TypeIcon = getTypeIcon(resource.type);
              return (
                <Card key={resource.id} className="hover:shadow-lg transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="p-3 bg-muted rounded-lg">
                        <TypeIcon className="h-6 w-6 text-muted-foreground" />
                      </div>
                      <div className="flex-1 space-y-3">
                        <div className="flex items-start justify-between">
                          <div>
                            <h3 className="font-semibold text-lg">{resource.title}</h3>
                            <p className="text-sm text-muted-foreground">{resource.description}</p>
                          </div>
                          <Badge className={getTypeColor(resource.type)}>
                            {resource.type}
                          </Badge>
                        </div>
                        
                        <div className="flex flex-wrap gap-2">
                          {resource.tags.slice(0, 4).map((tag, index) => (
                            <Badge key={index} variant="outline" className="text-xs">
                              {tag}
                            </Badge>
                          ))}
                        </div>

                        <div className="flex items-center justify-between text-sm text-muted-foreground">
                          <div className="flex items-center space-x-4">
                            <div className="flex items-center">
                              <Download className="h-4 w-4 mr-1" />
                              {resource.downloads.toLocaleString()}
                            </div>
                            <div className="flex items-center">
                              <Star className="h-4 w-4 mr-1 text-yellow-500 fill-current" />
                              {resource.rating}
                            </div>
                            <div className="flex items-center">
                              <Calendar className="h-4 w-4 mr-1" />
                              {new Date(resource.lastUpdated).toLocaleDateString()}
                            </div>
                          </div>
                          <span>{resource.size}</span>
                        </div>

                        <div className="text-xs text-muted-foreground">
                          By {resource.author}
                        </div>

                        <div className="flex space-x-2">
                          <Button className="flex-1">
                            <Download className="mr-2 h-4 w-4" />
                            Download
                          </Button>
                          <Button variant="outline" size="icon">
                            <Eye className="h-4 w-4" />
                          </Button>
                          <Button variant="outline" size="icon">
                            <Heart className="h-4 w-4" />
                          </Button>
                          <Button variant="outline" size="icon">
                            <Share className="h-4 w-4" />
                          </Button>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          {filteredResources.length === 0 && (
            <div className="text-center py-12">
              <Download className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
              <p className="text-lg text-muted-foreground">No resources found matching your criteria</p>
              <p className="text-sm text-muted-foreground">Try adjusting your search or filter options</p>
            </div>
          )}
        </main>
      </div>
    </div>
  );
}