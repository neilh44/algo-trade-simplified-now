import { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { 
  Search, 
  Download, 
  Star, 
  Eye, 
  TrendingUp,
  Code,
  BarChart3,
  Shield,
  Calendar,
  Users,
  GitBranch,
  Filter
} from 'lucide-react';

export default function StrategyTemplates() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedComplexity, setSelectedComplexity] = useState('All');

  const categories = ['All', 'Trend Following', 'Mean Reversion', 'Momentum', 'Arbitrage', 'Options', 'Crypto'];
  const complexityLevels = ['All', 'Beginner', 'Intermediate', 'Advanced'];

  const strategyTemplates = [
    {
      id: 1,
      name: 'Simple Moving Average Crossover',
      description: 'Classic trend-following strategy using SMA crossovers for entry and exit signals',
      category: 'Trend Following',
      complexity: 'Beginner',
      language: 'Python',
      rating: 4.8,
      downloads: 15420,
      author: 'AutomateAlgos Team',
      lastUpdated: '2 days ago',
      backtestReturn: '+24.5%',
      sharpeRatio: '1.32',
      maxDrawdown: '-8.2%',
      features: ['Stop Loss', 'Position Sizing', 'Risk Management'],
      tags: ['SMA', 'Crossover', 'Beginner-Friendly'],
      isPremium: false,
      hasBacktest: true
    },
    {
      id: 2,
      name: 'RSI Mean Reversion',
      description: 'Mean reversion strategy using RSI oversold/overbought conditions',
      category: 'Mean Reversion',
      complexity: 'Intermediate',
      language: 'Python',
      rating: 4.6,
      downloads: 12850,
      author: 'Sarah Johnson',
      lastUpdated: '1 week ago',
      backtestReturn: '+18.7%',
      sharpeRatio: '1.18',
      maxDrawdown: '-12.4%',
      features: ['RSI Signals', 'Dynamic Position Sizing', 'Multi-timeframe'],
      tags: ['RSI', 'Mean Reversion', 'Oscillator'],
      isPremium: false,
      hasBacktest: true
    },
    {
      id: 3,
      name: 'Momentum Breakout Strategy',
      description: 'Capture momentum breakouts using volume-confirmed price movements',
      category: 'Momentum',
      complexity: 'Advanced',
      language: 'Python',
      rating: 4.9,
      downloads: 8930,
      author: 'Mike Chen',
      lastUpdated: '3 days ago',
      backtestReturn: '+42.1%',
      sharpeRatio: '1.87',
      maxDrawdown: '-15.6%',
      features: ['Volume Analysis', 'Breakout Detection', 'Advanced Risk Management'],
      tags: ['Momentum', 'Volume', 'Breakout'],
      isPremium: true,
      hasBacktest: true
    },
    {
      id: 4,
      name: 'Crypto Grid Trading Bot',
      description: 'Automated grid trading strategy optimized for cryptocurrency markets',
      category: 'Crypto',
      complexity: 'Intermediate',
      language: 'Python',
      rating: 4.7,
      downloads: 11200,
      author: 'Alex Rodriguez',
      lastUpdated: '5 days ago',
      backtestReturn: '+67.3%',
      sharpeRatio: '2.14',
      maxDrawdown: '-22.1%',
      features: ['Grid Strategy', 'DCA Logic', 'Crypto Optimized'],
      tags: ['Grid', 'Crypto', 'DCA'],
      isPremium: true,
      hasBacktest: true
    },
    {
      id: 5,
      name: 'Pairs Trading Strategy',
      description: 'Statistical arbitrage using correlated stock pairs',
      category: 'Arbitrage',
      complexity: 'Advanced',
      language: 'Python',
      rating: 4.5,
      downloads: 6750,
      author: 'Emma Wilson',
      lastUpdated: '1 week ago',
      backtestReturn: '+16.2%',
      sharpeRatio: '1.45',
      maxDrawdown: '-6.8%',
      features: ['Cointegration Testing', 'Z-Score Analysis', 'Market Neutral'],
      tags: ['Pairs Trading', 'Statistical Arbitrage', 'Market Neutral'],
      isPremium: true,
      hasBacktest: true
    },
    {
      id: 6,
      name: 'Options Wheel Strategy',
      description: 'Generate income through systematic put selling and covered calls',
      category: 'Options',
      complexity: 'Advanced',
      language: 'Python',
      rating: 4.4,
      downloads: 5420,
      author: 'Lisa Chen',
      lastUpdated: '4 days ago',
      backtestReturn: '+28.9%',
      sharpeRatio: '1.62',
      maxDrawdown: '-11.3%',
      features: ['Options Chain Analysis', 'Greeks Calculation', 'Income Generation'],
      tags: ['Options', 'Wheel', 'Income'],
      isPremium: true,
      hasBacktest: true
    }
  ];

  const getComplexityColor = (complexity: string) => {
    switch (complexity) {
      case 'Beginner': return 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300';
      case 'Intermediate': return 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300';
      case 'Advanced': return 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300';
      default: return 'bg-muted text-muted-foreground';
    }
  };

  const getReturnColor = (returnStr: string) => {
    const value = parseFloat(returnStr.replace('%', ''));
    return value > 0 ? 'text-green-600' : 'text-red-600';
  };

  const filteredTemplates = strategyTemplates.filter(template => {
    const matchesSearch = template.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         template.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         template.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    const matchesCategory = selectedCategory === 'All' || template.category === selectedCategory;
    const matchesComplexity = selectedComplexity === 'All' || template.complexity === selectedComplexity;
    return matchesSearch && matchesCategory && matchesComplexity;
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
                Strategy Templates
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Download ready-to-use trading strategy templates. Each template includes complete code, 
                backtesting results, and customization guides to get you started quickly.
              </p>
            </div>

            {/* Search and Filters */}
            <div className="max-w-4xl mx-auto space-y-6">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                <Input
                  type="text"
                  placeholder="Search strategy templates..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10 pr-4 py-3 text-lg"
                />
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <div className="flex-1">
                  <label className="block text-sm font-medium mb-2">Category</label>
                  <select 
                    value={selectedCategory}
                    onChange={(e) => setSelectedCategory(e.target.value)}
                    className="w-full border border-border rounded-md px-3 py-2 bg-background"
                  >
                    {categories.map(category => (
                      <option key={category} value={category}>{category}</option>
                    ))}
                  </select>
                </div>
                <div className="flex-1">
                  <label className="block text-sm font-medium mb-2">Complexity</label>
                  <select 
                    value={selectedComplexity}
                    onChange={(e) => setSelectedComplexity(e.target.value)}
                    className="w-full border border-border rounded-md px-3 py-2 bg-background"
                  >
                    {complexityLevels.map(level => (
                      <option key={level} value={level}>{level}</option>
                    ))}
                  </select>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-12 bg-muted/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">{strategyTemplates.length}</div>
                <div className="text-sm text-muted-foreground">Strategy Templates</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">
                  {strategyTemplates.reduce((acc, t) => acc + t.downloads, 0).toLocaleString()}
                </div>
                <div className="text-sm text-muted-foreground">Total Downloads</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">6</div>
                <div className="text-sm text-muted-foreground">Strategy Categories</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">4.7</div>
                <div className="text-sm text-muted-foreground">Average Rating</div>
              </div>
            </div>
          </div>
        </section>

        {/* Templates Grid */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-3xl font-bold text-foreground">
                Templates ({filteredTemplates.length})
              </h2>
              <div className="flex items-center space-x-4">
                <span className="text-sm text-muted-foreground">Sort by:</span>
                <select className="border border-border rounded-md px-3 py-1 text-sm bg-background">
                  <option>Most Popular</option>
                  <option>Highest Rated</option>
                  <option>Recently Updated</option>
                  <option>Best Performance</option>
                </select>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {filteredTemplates.map((template) => (
                <Card key={template.id} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <CardTitle className="text-xl mb-2 flex items-center">
                          {template.name}
                          {template.isPremium && (
                            <Badge variant="default" className="ml-2 text-xs">
                              Premium
                            </Badge>
                          )}
                        </CardTitle>
                        <p className="text-muted-foreground text-sm mb-3">
                          {template.description}
                        </p>
                        <div className="flex items-center space-x-4 text-sm">
                          <Badge className={getComplexityColor(template.complexity)}>
                            {template.complexity}
                          </Badge>
                          <Badge variant="outline">{template.category}</Badge>
                          <Badge variant="outline">{template.language}</Badge>
                        </div>
                      </div>
                    </div>
                  </CardHeader>
                  
                  <CardContent className="space-y-6">
                    {/* Performance Metrics */}
                    <div className="grid grid-cols-3 gap-4 p-4 bg-muted/30 rounded-lg">
                      <div className="text-center">
                        <div className={`text-lg font-bold ${getReturnColor(template.backtestReturn)}`}>
                          {template.backtestReturn}
                        </div>
                        <div className="text-xs text-muted-foreground">Return</div>
                      </div>
                      <div className="text-center">
                        <div className="text-lg font-bold text-foreground">{template.sharpeRatio}</div>
                        <div className="text-xs text-muted-foreground">Sharpe Ratio</div>
                      </div>
                      <div className="text-center">
                        <div className="text-lg font-bold text-red-600">{template.maxDrawdown}</div>
                        <div className="text-xs text-muted-foreground">Max Drawdown</div>
                      </div>
                    </div>

                    {/* Features */}
                    <div>
                      <h4 className="font-medium mb-2 text-sm">Key Features</h4>
                      <div className="flex flex-wrap gap-1">
                        {template.features.map((feature, index) => (
                          <Badge key={index} variant="outline" className="text-xs">
                            {feature}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    {/* Stats */}
                    <div className="flex items-center justify-between text-sm text-muted-foreground">
                      <div className="flex items-center space-x-4">
                        <div className="flex items-center space-x-1">
                          <Star className="h-4 w-4 text-yellow-500" />
                          <span>{template.rating}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Download className="h-4 w-4" />
                          <span>{template.downloads.toLocaleString()}</span>
                        </div>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Calendar className="h-4 w-4" />
                        <span>{template.lastUpdated}</span>
                      </div>
                    </div>

                    {/* Author */}
                    <div className="flex items-center text-sm text-muted-foreground">
                      <Users className="h-4 w-4 mr-1" />
                      <span>by {template.author}</span>
                    </div>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-1">
                      {template.tags.map((tag, index) => (
                        <Badge key={index} variant="secondary" className="text-xs">
                          #{tag}
                        </Badge>
                      ))}
                    </div>

                    {/* Actions */}
                    <div className="flex space-x-3">
                      <Button className="flex-1">
                        <Download className="h-4 w-4 mr-2" />
                        {template.isPremium ? 'Get Premium' : 'Download Free'}
                      </Button>
                      {template.hasBacktest && (
                        <Button variant="outline">
                          <BarChart3 className="h-4 w-4 mr-2" />
                          View Backtest
                        </Button>
                      )}
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