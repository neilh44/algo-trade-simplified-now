import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { AppFooter } from "@/components/AppFooter";
import { ArrowLeft, Bug, Upload, AlertTriangle, CheckCircle, Clock, MessageCircle } from "lucide-react";
import { Link } from "react-router-dom";

const BugReports = () => {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);

  const bugs = [
    {
      id: "BUG-2024-001",
      title: "Algorithm execution delays during market open",
      description: "Experiencing 2-3 second delays in trade execution during high volatility periods",
      reporter: "TradingUser123",
      priority: "high",
      status: "in-progress",
      category: "Trading Engine",
      date: "2024-01-15",
      assignee: "Engineering Team",
      comments: 8
    },
    {
      id: "BUG-2024-002", 
      title: "Dashboard charts not updating in real-time",
      description: "Performance charts showing stale data, requires manual refresh",
      reporter: "DashboardUser",
      priority: "medium",
      status: "resolved",
      category: "UI/UX",
      date: "2024-01-12",
      assignee: "Frontend Team",
      comments: 5
    },
    {
      id: "BUG-2024-003",
      title: "Email notifications not sent for stop-loss triggers",
      description: "Users not receiving email alerts when stop-loss orders are executed",
      reporter: "AlertUser",
      priority: "high",
      status: "open",
      category: "Notifications",
      date: "2024-01-10",
      assignee: "Unassigned",
      comments: 12
    },
    {
      id: "BUG-2024-004",
      title: "Mobile view layout broken on iOS Safari",
      description: "Button overlapping and misaligned text on iPhone devices",
      reporter: "MobileUser",
      priority: "low",
      status: "resolved",
      category: "Mobile",
      date: "2024-01-08",
      assignee: "UI Team",
      comments: 3
    }
  ];

  const knownIssues = [
    {
      title: "Occasional login timeouts during peak hours",
      description: "Users may experience longer login times between 9-10 AM EST",
      workaround: "Refresh the page and try again, or use incognito mode",
      eta: "Fix planned for next release"
    },
    {
      title: "Backtesting results may show slight variations",
      description: "Small differences in backtest results due to timestamp precision",
      workaround: "Results are typically within 0.1% variance",
      eta: "Enhancement scheduled for Q2 2024"
    }
  ];

  const getPriorityBadge = (priority: string) => {
    switch (priority) {
      case "high":
        return <Badge className="bg-red-100 text-red-800 border-red-200">High Priority</Badge>;
      case "medium":
        return <Badge className="bg-orange-100 text-orange-800 border-orange-200">Medium Priority</Badge>;
      case "low":
        return <Badge className="bg-blue-100 text-blue-800 border-blue-200">Low Priority</Badge>;
      default:
        return <Badge variant="outline">Normal</Badge>;
    }
  };

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "resolved":
        return <Badge className="bg-green-100 text-green-800 border-green-200">Resolved</Badge>;
      case "in-progress":
        return <Badge className="bg-blue-100 text-blue-800 border-blue-200">In Progress</Badge>;
      case "open":
        return <Badge className="bg-orange-100 text-orange-800 border-orange-200">Open</Badge>;
      default:
        return <Badge variant="outline">New</Badge>;
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "resolved":
        return <CheckCircle className="h-4 w-4 text-green-600" />;
      case "in-progress":
        return <Clock className="h-4 w-4 text-blue-600" />;
      default:
        return <AlertTriangle className="h-4 w-4 text-orange-600" />;
    }
  };

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setSelectedFile(file);
    }
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
              <Bug className="h-4 w-4 mr-2" />
              Report New Bug
            </Button>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8 max-w-6xl">
        {/* Page Header */}
        <div className="text-center mb-8">
          <div className="flex justify-center mb-4">
            <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center">
              <Bug className="h-8 w-8 text-red-600" />
            </div>
          </div>
          <h1 className="text-4xl font-bold text-text-primary mb-4">Bug Reports</h1>
          <p className="text-text-secondary max-w-2xl mx-auto">
            Help us improve AutomateAlgos by reporting bugs and issues. Our engineering team 
            investigates all reports and provides regular updates on resolution progress.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6">
            {/* Bug Reports List */}
            <Card className="bg-background border-border shadow-sm">
              <CardHeader>
                <CardTitle className="text-text-primary">Active Bug Reports</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {bugs.map((bug) => (
                    <div key={bug.id} className="border border-border rounded-lg p-4 hover:bg-surface-container transition-colors">
                      <div className="flex items-start justify-between mb-3">
                        <div className="flex items-center gap-2">
                          {getStatusIcon(bug.status)}
                          <h3 className="font-semibold text-text-primary">{bug.title}</h3>
                        </div>
                        <div className="flex gap-2">
                          {getPriorityBadge(bug.priority)}
                          {getStatusBadge(bug.status)}
                        </div>
                      </div>
                      
                      <p className="text-text-secondary mb-3">{bug.description}</p>
                      
                      <div className="grid md:grid-cols-2 gap-4 text-sm text-text-secondary">
                        <div>
                          <div><span className="font-medium">Bug ID:</span> {bug.id}</div>
                          <div><span className="font-medium">Category:</span> {bug.category}</div>
                          <div><span className="font-medium">Reporter:</span> {bug.reporter}</div>
                        </div>
                        <div>
                          <div><span className="font-medium">Assignee:</span> {bug.assignee}</div>
                          <div><span className="font-medium">Date:</span> {new Date(bug.date).toLocaleDateString()}</div>
                          <div className="flex items-center gap-1">
                            <MessageCircle className="h-3 w-3" />
                            <span>{bug.comments} comments</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Known Issues */}
            <Card className="bg-background border-border shadow-sm">
              <CardHeader>
                <CardTitle className="text-text-primary">Known Issues & Workarounds</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {knownIssues.map((issue, index) => (
                    <div key={index} className="bg-yellow-50 border border-yellow-200 p-4 rounded-lg">
                      <h4 className="font-semibold text-yellow-800 mb-2">{issue.title}</h4>
                      <p className="text-yellow-700 text-sm mb-3">{issue.description}</p>
                      <div className="grid md:grid-cols-2 gap-3 text-sm">
                        <div>
                          <span className="font-medium text-yellow-800">Workaround:</span>
                          <div className="text-yellow-600">{issue.workaround}</div>
                        </div>
                        <div>
                          <span className="font-medium text-yellow-800">ETA:</span>
                          <div className="text-yellow-600">{issue.eta}</div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Report New Bug */}
            <Card className="bg-background border-border shadow-sm">
              <CardHeader>
                <CardTitle className="text-text-primary">Report a Bug</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <label className="text-sm font-medium text-text-primary mb-1 block">Bug Title</label>
                  <Input placeholder="Brief description of the issue" />
                </div>
                
                <div>
                  <label className="text-sm font-medium text-text-primary mb-1 block">Category</label>
                  <select className="w-full border border-border rounded px-3 py-2 text-sm bg-background">
                    <option>Trading Engine</option>
                    <option>UI/UX</option>
                    <option>Notifications</option>
                    <option>API</option>
                    <option>Mobile</option>
                    <option>Other</option>
                  </select>
                </div>

                <div>
                  <label className="text-sm font-medium text-text-primary mb-1 block">Priority</label>
                  <select className="w-full border border-border rounded px-3 py-2 text-sm bg-background">
                    <option>Low - Minor issue, doesn't affect core functionality</option>
                    <option>Medium - Affects some features but has workarounds</option>
                    <option>High - Affects core functionality or causes data loss</option>
                  </select>
                </div>

                <div>
                  <label className="text-sm font-medium text-text-primary mb-1 block">Steps to Reproduce</label>
                  <Textarea placeholder="1. Go to...&#10;2. Click on...&#10;3. Expected vs actual result..." rows={4} />
                </div>

                <div>
                  <label className="text-sm font-medium text-text-primary mb-1 block">Environment</label>
                  <Input placeholder="Browser, OS, device details" />
                </div>

                <div>
                  <label className="text-sm font-medium text-text-primary mb-1 block">Screenshots/Files</label>
                  <div className="border-2 border-dashed border-border rounded-lg p-4 text-center">
                    <input
                      type="file"
                      onChange={handleFileChange}
                      accept="image/*,.pdf,.txt,.log"
                      className="hidden"
                      id="file-upload"
                    />
                    <label htmlFor="file-upload" className="cursor-pointer">
                      <Upload className="h-8 w-8 text-text-secondary mx-auto mb-2" />
                      <div className="text-sm text-text-secondary">
                        {selectedFile ? selectedFile.name : "Click to upload files"}
                      </div>
                    </label>
                  </div>
                </div>
                
                <Button className="w-full">
                  <Bug className="h-4 w-4 mr-2" />
                  Submit Bug Report
                </Button>
              </CardContent>
            </Card>

            {/* Bug Status Info */}
            <Card className="bg-background border-border shadow-sm">
              <CardHeader>
                <CardTitle className="text-text-primary">Bug Status Guide</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3 text-sm">
                  <div className="flex items-center gap-2">
                    <AlertTriangle className="h-4 w-4 text-orange-600" />
                    <span className="text-text-secondary"><strong>Open:</strong> New bug under investigation</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="h-4 w-4 text-blue-600" />
                    <span className="text-text-secondary"><strong>In Progress:</strong> Actively being worked on</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    <span className="text-text-secondary"><strong>Resolved:</strong> Fix deployed and verified</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Contact Info */}
            <Card className="bg-background border-border shadow-sm">
              <CardHeader>
                <CardTitle className="text-text-primary">Need Help?</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3 text-sm text-text-secondary">
                  <p>For urgent issues affecting trading operations:</p>
                  <div className="space-y-2">
                    <Button asChild variant="outline" size="sm" className="w-full">
                      <Link to="/contact">Contact Support</Link>
                    </Button>
                    <Button asChild variant="outline" size="sm" className="w-full">
                      <a href="mailto:bugs@automatealgos.in">Email Bug Team</a>
                    </Button>
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

export default BugReports;