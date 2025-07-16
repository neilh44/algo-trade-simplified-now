import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import AppFooter from "@/components/AppFooter";
import { ArrowLeft, Plus, ThumbsUp, MessageCircle, Clock, CheckCircle, ArrowUpDown } from "lucide-react";
import { Link } from "react-router-dom";

const FeatureRequests = () => {
  const [sortBy, setSortBy] = useState("votes");
  const [filterStatus, setFilterStatus] = useState("all");

  const features = [
    {
      id: 1,
      title: "Advanced Backtesting with Custom Indicators",
      description: "Add support for custom technical indicators in the backtesting engine",
      author: "TradingPro",
      votes: 45,
      status: "in-progress",
      category: "Trading Tools",
      date: "2024-01-10",
      comments: 12
    },
    {
      id: 2,
      title: "Mobile App for iOS and Android",
      description: "Native mobile application for monitoring and managing algorithms on the go",
      author: "MobileTrader",
      votes: 38,
      status: "planned",
      category: "Platform",
      date: "2024-01-08",
      comments: 8
    },
    {
      id: 3,
      title: "Real-time Notifications for Trade Alerts",
      description: "Push notifications for important trading events and alerts",
      author: "AlertUser",
      votes: 32,
      status: "completed",
      category: "Notifications",
      date: "2024-01-05",
      comments: 15
    },
    {
      id: 4,
      title: "Paper Trading Mode",
      description: "Practice trading with virtual money before going live",
      author: "NewTrader",
      votes: 28,
      status: "under-review",
      category: "Trading Tools",
      date: "2024-01-12",
      comments: 6
    },
    {
      id: 5,
      title: "Portfolio Risk Analytics Dashboard",
      description: "Comprehensive risk analysis and portfolio management tools",
      author: "RiskManager",
      votes: 25,
      status: "planned",
      category: "Analytics",
      date: "2024-01-15",
      comments: 9
    }
  ];

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "completed":
        return <Badge className="bg-green-100 text-green-800 border-green-200">Completed</Badge>;
      case "in-progress":
        return <Badge className="bg-blue-100 text-blue-800 border-blue-200">In Progress</Badge>;
      case "planned":
        return <Badge className="bg-purple-100 text-purple-800 border-purple-200">Planned</Badge>;
      case "under-review":
        return <Badge className="bg-orange-100 text-orange-800 border-orange-200">Under Review</Badge>;
      default:
        return <Badge variant="outline">New</Badge>;
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "completed":
        return <CheckCircle className="h-4 w-4 text-green-600" />;
      case "in-progress":
        return <Clock className="h-4 w-4 text-blue-600" />;
      default:
        return <Clock className="h-4 w-4 text-orange-600" />;
    }
  };

  const filteredFeatures = features.filter(feature => 
    filterStatus === "all" || feature.status === filterStatus
  );

  const sortedFeatures = [...filteredFeatures].sort((a, b) => {
    if (sortBy === "votes") return b.votes - a.votes;
    if (sortBy === "date") return new Date(b.date).getTime() - new Date(a.date).getTime();
    return 0;
  });

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
              Submit Request
            </Button>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8 max-w-6xl">
        {/* Page Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-text-primary mb-4">Feature Requests</h1>
          <p className="text-text-secondary max-w-2xl mx-auto">
            Help shape the future of AutomateAlgos by suggesting new features and voting on community requests. 
            Your input drives our development priorities.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6">
            {/* Filters and Sorting */}
            <Card className="bg-background border-border shadow-sm">
              <CardContent className="p-4">
                <div className="flex flex-wrap gap-4 items-center justify-between">
                  <div className="flex gap-2">
                    <Button
                      variant={filterStatus === "all" ? "default" : "outline"}
                      size="sm"
                      onClick={() => setFilterStatus("all")}
                    >
                      All ({features.length})
                    </Button>
                    <Button
                      variant={filterStatus === "planned" ? "default" : "outline"}
                      size="sm"
                      onClick={() => setFilterStatus("planned")}
                    >
                      Planned
                    </Button>
                    <Button
                      variant={filterStatus === "in-progress" ? "default" : "outline"}
                      size="sm"
                      onClick={() => setFilterStatus("in-progress")}
                    >
                      In Progress
                    </Button>
                    <Button
                      variant={filterStatus === "completed" ? "default" : "outline"}
                      size="sm"
                      onClick={() => setFilterStatus("completed")}
                    >
                      Completed
                    </Button>
                  </div>
                  
                  <div className="flex items-center gap-2">
                    <ArrowUpDown className="h-4 w-4 text-text-secondary" />
                    <select
                      className="border border-border rounded px-3 py-1 text-sm bg-background"
                      value={sortBy}
                      onChange={(e) => setSortBy(e.target.value)}
                    >
                      <option value="votes">Most Voted</option>
                      <option value="date">Most Recent</option>
                    </select>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Feature Requests List */}
            <div className="space-y-4">
              {sortedFeatures.map((feature) => (
                <Card key={feature.id} className="bg-background border-border shadow-sm hover:shadow-md transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex gap-4">
                      {/* Vote Section */}
                      <div className="flex flex-col items-center gap-1 min-w-[60px]">
                        <Button variant="outline" size="sm" className="p-2">
                          <ThumbsUp className="h-4 w-4" />
                        </Button>
                        <div className="text-sm font-semibold text-text-primary">{feature.votes}</div>
                        <div className="text-xs text-text-secondary">votes</div>
                      </div>
                      
                      {/* Content */}
                      <div className="flex-1">
                        <div className="flex items-start justify-between mb-2">
                          <h3 className="text-lg font-semibold text-text-primary hover:text-primary cursor-pointer">
                            {feature.title}
                          </h3>
                          {getStatusBadge(feature.status)}
                        </div>
                        
                        <p className="text-text-secondary mb-3">{feature.description}</p>
                        
                        <div className="flex items-center gap-4 text-sm text-text-secondary">
                          <div className="flex items-center gap-1">
                            {getStatusIcon(feature.status)}
                            <span>{feature.category}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <MessageCircle className="h-4 w-4" />
                            <span>{feature.comments} comments</span>
                          </div>
                          <div>by {feature.author}</div>
                          <div>{new Date(feature.date).toLocaleDateString()}</div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Submit New Request */}
            <Card className="bg-background border-border shadow-sm">
              <CardHeader>
                <CardTitle className="text-text-primary">Submit New Feature Request</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <label className="text-sm font-medium text-text-primary mb-1 block">Feature Title</label>
                  <Input placeholder="Brief description of your feature idea" />
                </div>
                
                <div>
                  <label className="text-sm font-medium text-text-primary mb-1 block">Category</label>
                  <select className="w-full border border-border rounded px-3 py-2 text-sm bg-background">
                    <option>Trading Tools</option>
                    <option>Platform</option>
                    <option>Analytics</option>
                    <option>Notifications</option>
                    <option>API</option>
                    <option>Other</option>
                  </select>
                </div>
                
                <div>
                  <label className="text-sm font-medium text-text-primary mb-1 block">Description</label>
                  <Textarea placeholder="Detailed description of the feature and why it would be valuable" rows={4} />
                </div>
                
                <Button className="w-full">
                  <Plus className="h-4 w-4 mr-2" />
                  Submit Request
                </Button>
              </CardContent>
            </Card>

            {/* Top Categories */}
            <Card className="bg-background border-border shadow-sm">
              <CardHeader>
                <CardTitle className="text-text-primary">Popular Categories</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-text-secondary">Trading Tools</span>
                    <Badge variant="outline">15 requests</Badge>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-text-secondary">Platform</span>
                    <Badge variant="outline">12 requests</Badge>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-text-secondary">Analytics</span>
                    <Badge variant="outline">8 requests</Badge>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-text-secondary">API</span>
                    <Badge variant="outline">6 requests</Badge>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Request Guidelines */}
            <Card className="bg-background border-border shadow-sm">
              <CardHeader>
                <CardTitle className="text-text-primary">Submission Guidelines</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3 text-sm text-text-secondary">
                  <div className="flex gap-2">
                    <CheckCircle className="h-4 w-4 text-green-600 flex-shrink-0 mt-0.5" />
                    <span>Search existing requests before submitting</span>
                  </div>
                  <div className="flex gap-2">
                    <CheckCircle className="h-4 w-4 text-green-600 flex-shrink-0 mt-0.5" />
                    <span>Provide clear and detailed descriptions</span>
                  </div>
                  <div className="flex gap-2">
                    <CheckCircle className="h-4 w-4 text-green-600 flex-shrink-0 mt-0.5" />
                    <span>Explain the business value or use case</span>
                  </div>
                  <div className="flex gap-2">
                    <CheckCircle className="h-4 w-4 text-green-600 flex-shrink-0 mt-0.5" />
                    <span>Vote on existing requests you support</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      <AppFooter />
    </div>
  );
};

export default FeatureRequests;