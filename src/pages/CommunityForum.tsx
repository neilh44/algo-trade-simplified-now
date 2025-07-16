import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import AppFooter from "@/components/AppFooter";
import { ArrowLeft, MessageSquare, Users, TrendingUp, Search, Plus, Pin, ThumbsUp, MessageCircle, Eye } from "lucide-react";
import { Link } from "react-router-dom";

const CommunityForum = () => {
  const [activeCategory, setActiveCategory] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");

  const categories = [
    { id: "all", name: "All Topics", count: 156, icon: MessageSquare },
    { id: "trading-strategies", name: "Trading Strategies", count: 45, icon: TrendingUp },
    { id: "platform-help", name: "Platform Help", count: 38, icon: Users },
    { id: "algorithm-development", name: "Algorithm Development", count: 32, icon: MessageSquare },
    { id: "market-analysis", name: "Market Analysis", count: 28, icon: TrendingUp },
    { id: "general-discussion", name: "General Discussion", count: 13, icon: MessageSquare }
  ];

  const posts = [
    {
      id: 1,
      title: "Best practices for risk management in algorithmic trading",
      category: "trading-strategies",
      author: "RiskManagerPro",
      authorAvatar: "/placeholder.svg",
      reputation: 2840,
      isPinned: true,
      lastActive: "2 hours ago",
      replies: 23,
      views: 156,
      likes: 45,
      excerpt: "After 5 years of algo trading, here are the essential risk management strategies that have saved my portfolio multiple times..."
    },
    {
      id: 2,
      title: "How to optimize backtesting for better real-world performance",
      category: "algorithm-development",
      author: "AlgoDevExpert",
      authorAvatar: "/placeholder.svg",
      reputation: 1920,
      isPinned: false,
      lastActive: "4 hours ago",
      replies: 18,
      views: 89,
      likes: 32,
      excerpt: "Common mistakes in backtesting that lead to overoptimized strategies and how to avoid them..."
    },
    {
      id: 3,
      title: "Platform downtime during market hours - Anyone else affected?",
      category: "platform-help",
      author: "ConcernedTrader",
      authorAvatar: "/placeholder.svg",
      reputation: 450,
      isPinned: false,
      lastActive: "6 hours ago",
      replies: 12,
      views: 67,
      likes: 8,
      excerpt: "Experienced 3-minute downtime this morning during market open. Lost potential profits..."
    },
    {
      id: 4,
      title: "Market volatility analysis - Q1 2024 trends",
      category: "market-analysis",
      author: "MarketAnalyst",
      authorAvatar: "/placeholder.svg",
      reputation: 3200,
      isPinned: false,
      lastActive: "8 hours ago",
      replies: 15,
      views: 124,
      likes: 28,
      excerpt: "Comprehensive analysis of Q1 volatility patterns and implications for algorithmic strategies..."
    },
    {
      id: 5,
      title: "Welcome new members! Introduce yourself here",
      category: "general-discussion",
      author: "ModeratorTeam",
      authorAvatar: "/placeholder.svg",
      reputation: 5000,
      isPinned: true,
      lastActive: "1 day ago",
      replies: 87,
      views: 342,
      likes: 156,
      excerpt: "New to AutomateAlgos? Tell us about your trading background and what brought you here..."
    }
  ];

  const topContributors = [
    { name: "AlgoMaster", posts: 156, reputation: 4820, avatar: "/placeholder.svg" },
    { name: "TradingGuru", posts: 142, reputation: 4200, avatar: "/placeholder.svg" },
    { name: "QuantDev", posts: 98, reputation: 3650, avatar: "/placeholder.svg" },
    { name: "RiskPro", posts: 87, reputation: 3240, avatar: "/placeholder.svg" }
  ];

  const filteredPosts = posts.filter(post => 
    (activeCategory === "all" || post.category === activeCategory) &&
    (searchQuery === "" || post.title.toLowerCase().includes(searchQuery.toLowerCase()))
  );

  const getReputationBadge = (reputation: number) => {
    if (reputation >= 3000) return <Badge className="bg-purple-100 text-purple-800 border-purple-200">Expert</Badge>;
    if (reputation >= 1000) return <Badge className="bg-blue-100 text-blue-800 border-blue-200">Advanced</Badge>;
    if (reputation >= 500) return <Badge className="bg-green-100 text-green-800 border-green-200">Regular</Badge>;
    return <Badge variant="outline">Newcomer</Badge>;
  };

  return (
    <div className="min-h-screen bg-surface-bright">
      {/* Header */}
      <div className="bg-background border-b border-border">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link to="/" className="flex items-center gap-2 text-primary hover:text-primary/80 transition-colors">
              <ArrowLeft className="h-4 w-4" />
              <span className="font-medium">Back to Home</span>
            </Link>
            <Button>
              <Plus className="h-4 w-4 mr-2" />
              New Post
            </Button>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8 max-w-7xl">
        {/* Page Header */}
        <div className="text-center mb-8">
          <div className="flex justify-center mb-4">
            <div className="w-16 h-16 bg-matdash-primary-light rounded-full flex items-center justify-center">
              <Users className="h-8 w-8 text-matdash-primary" />
            </div>
          </div>
          <h1 className="text-4xl font-bold text-text-primary mb-4">Community Forum</h1>
          <p className="text-text-secondary max-w-2xl mx-auto">
            Connect with fellow algorithmic traders, share strategies, get help, and discuss market insights. 
            Learn from experienced traders and contribute to the community.
          </p>
        </div>

        {/* Search and Stats */}
        <div className="mb-8">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between mb-6">
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-text-secondary" />
              <Input
                placeholder="Search discussions..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10"
              />
            </div>
            
            <div className="flex gap-6 text-sm text-text-secondary">
              <div className="text-center">
                <div className="font-semibold text-text-primary">1,247</div>
                <div>Total Posts</div>
              </div>
              <div className="text-center">
                <div className="font-semibold text-text-primary">324</div>
                <div>Active Members</div>
              </div>
              <div className="text-center">
                <div className="font-semibold text-text-primary">89</div>
                <div>Online Now</div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-4 gap-8">
          {/* Sidebar */}
          <div className="space-y-6">
            {/* Categories */}
            <Card className="bg-background border-border shadow-sm">
              <CardHeader>
                <CardTitle className="text-text-primary">Categories</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  {categories.map((category) => {
                    const IconComponent = category.icon;
                    return (
                      <button
                        key={category.id}
                        onClick={() => setActiveCategory(category.id)}
                        className={`w-full flex items-center justify-between p-2 rounded-lg text-left transition-colors ${
                          activeCategory === category.id
                            ? "bg-matdash-primary text-white"
                            : "hover:bg-surface-container text-text-secondary"
                        }`}
                      >
                        <div className="flex items-center gap-2">
                          <IconComponent className="h-4 w-4" />
                          <span className="text-sm">{category.name}</span>
                        </div>
                        <Badge variant="outline" className="text-xs">
                          {category.count}
                        </Badge>
                      </button>
                    );
                  })}
                </div>
              </CardContent>
            </Card>

            {/* Top Contributors */}
            <Card className="bg-background border-border shadow-sm">
              <CardHeader>
                <CardTitle className="text-text-primary">Top Contributors</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {topContributors.map((contributor, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <Avatar className="h-8 w-8">
                        <AvatarImage src={contributor.avatar} />
                        <AvatarFallback>{contributor.name.slice(0, 2)}</AvatarFallback>
                      </Avatar>
                      <div className="flex-1">
                        <div className="text-sm font-medium text-text-primary">{contributor.name}</div>
                        <div className="text-xs text-text-secondary">{contributor.posts} posts • {contributor.reputation} rep</div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Community Guidelines */}
            <Card className="bg-background border-border shadow-sm">
              <CardHeader>
                <CardTitle className="text-text-primary">Community Guidelines</CardTitle>
              </CardHeader>
              <CardContent className="text-sm text-text-secondary space-y-2">
                <div>• Be respectful and professional</div>
                <div>• No spam or self-promotion</div>
                <div>• Share knowledge and help others</div>
                <div>• Use clear and descriptive titles</div>
                <div>• Search before posting duplicates</div>
                <Link to="/community-rules" className="text-primary hover:text-primary/80 text-xs">
                  View full guidelines →
                </Link>
              </CardContent>
            </Card>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3 space-y-4">
            {filteredPosts.map((post) => (
              <Card key={post.id} className="bg-background border-border shadow-sm hover:shadow-md transition-shadow">
                <CardContent className="p-6">
                  <div className="flex gap-4">
                    {/* Author Avatar */}
                    <Avatar className="h-10 w-10">
                      <AvatarImage src={post.authorAvatar} />
                      <AvatarFallback>{post.author.slice(0, 2)}</AvatarFallback>
                    </Avatar>

                    {/* Post Content */}
                    <div className="flex-1">
                      <div className="flex items-start justify-between mb-2">
                        <div className="flex items-center gap-2">
                          {post.isPinned && <Pin className="h-4 w-4 text-matdash-primary" />}
                          <h3 className="font-semibold text-text-primary hover:text-primary cursor-pointer">
                            {post.title}
                          </h3>
                        </div>
                        <Badge variant="outline" className="text-xs">
                          {categories.find(c => c.id === post.category)?.name}
                        </Badge>
                      </div>

                      <p className="text-text-secondary mb-3 text-sm">{post.excerpt}</p>

                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-4 text-sm text-text-secondary">
                          <div className="flex items-center gap-1">
                            <span className="font-medium text-text-primary">{post.author}</span>
                            {getReputationBadge(post.reputation)}
                          </div>
                          <div>{post.lastActive}</div>
                        </div>

                        <div className="flex items-center gap-4 text-sm text-text-secondary">
                          <div className="flex items-center gap-1">
                            <ThumbsUp className="h-3 w-3" />
                            <span>{post.likes}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <MessageCircle className="h-3 w-3" />
                            <span>{post.replies}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <Eye className="h-3 w-3" />
                            <span>{post.views}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}

            {filteredPosts.length === 0 && (
              <Card className="bg-background border-border shadow-sm">
                <CardContent className="text-center py-12">
                  <MessageSquare className="h-12 w-12 text-text-secondary mx-auto mb-4" />
                  <h3 className="font-semibold text-text-primary mb-2">No posts found</h3>
                  <p className="text-text-secondary mb-4">
                    {searchQuery ? "Try adjusting your search terms" : "Be the first to start a discussion in this category"}
                  </p>
                  <Button>
                    <Plus className="h-4 w-4 mr-2" />
                    Create New Post
                  </Button>
                </CardContent>
              </Card>
            )}
          </div>
        </div>
      </div>

      <AppFooter />
    </div>
  );
};

export default CommunityForum;