import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { AppFooter } from "@/components/AppFooter";
import { ArrowLeft, CheckCircle, AlertTriangle, Clock, Activity, Server, Database, Zap } from "lucide-react";
import { Link } from "react-router-dom";

const SystemStatus = () => {
  const systems = [
    { name: "Trading Platform", status: "operational", uptime: "99.9%", lastIncident: "None" },
    { name: "API Services", status: "operational", uptime: "99.8%", lastIncident: "None" },
    { name: "Database Systems", status: "operational", uptime: "100%", lastIncident: "None" },
    { name: "Authentication", status: "operational", uptime: "99.9%", lastIncident: "None" },
    { name: "Payment Processing", status: "maintenance", uptime: "99.5%", lastIncident: "Scheduled maintenance" },
    { name: "Notifications", status: "operational", uptime: "99.7%", lastIncident: "None" }
  ];

  const recentIncidents = [
    {
      date: "Jan 15, 2024",
      title: "Scheduled Database Maintenance",
      status: "resolved",
      duration: "2 hours",
      impact: "No user impact"
    },
    {
      date: "Jan 10, 2024", 
      title: "API Response Delays",
      status: "resolved",
      duration: "45 minutes",
      impact: "Minor delays in trade execution"
    },
    {
      date: "Jan 5, 2024",
      title: "Payment Gateway Update",
      status: "resolved", 
      duration: "1 hour",
      impact: "Temporary payment processing delays"
    }
  ];

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "operational":
        return <CheckCircle className="h-4 w-4 text-green-600" />;
      case "maintenance":
        return <Clock className="h-4 w-4 text-orange-600" />;
      case "degraded":
        return <AlertTriangle className="h-4 w-4 text-yellow-600" />;
      case "outage":
        return <AlertTriangle className="h-4 w-4 text-red-600" />;
      default:
        return <CheckCircle className="h-4 w-4 text-green-600" />;
    }
  };

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "operational":
        return <Badge className="bg-green-100 text-green-800 border-green-200">Operational</Badge>;
      case "maintenance":
        return <Badge className="bg-orange-100 text-orange-800 border-orange-200">Maintenance</Badge>;
      case "degraded":
        return <Badge className="bg-yellow-100 text-yellow-800 border-yellow-200">Degraded</Badge>;
      case "outage":
        return <Badge className="bg-red-100 text-red-800 border-red-200">Outage</Badge>;
      default:
        return <Badge className="bg-green-100 text-green-800 border-green-200">Operational</Badge>;
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
            <div className="flex gap-2">
              <Badge className="bg-green-100 text-green-800 border-green-200">All Systems Operational</Badge>
              <Button variant="outline" size="sm">
                Subscribe to Updates
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8 max-w-4xl">
        {/* Page Header */}
        <div className="text-center mb-8">
          <div className="flex justify-center mb-4">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center">
              <Activity className="h-8 w-8 text-green-600" />
            </div>
          </div>
          <h1 className="text-4xl font-bold text-text-primary mb-4">System Status</h1>
          <p className="text-text-secondary max-w-2xl mx-auto">
            Real-time status of AutomateAlgos platform services and infrastructure. 
            We monitor all systems 24/7 to ensure optimal performance.
          </p>
          <div className="flex items-center justify-center gap-4 text-text-secondary mt-4">
            <span>Last Updated: 2 minutes ago</span>
            <span className="text-border">•</span>
            <span>Auto-refresh: Every 30 seconds</span>
          </div>
        </div>

        {/* Overall Status */}
        <Card className="bg-background border-border shadow-sm mb-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-text-primary">
              <CheckCircle className="h-5 w-5 text-green-600" />
              Overall System Health
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-4 gap-4">
              <div className="text-center p-4 bg-green-50 border border-green-200 rounded-lg">
                <div className="text-2xl font-bold text-green-800 mb-1">99.8%</div>
                <div className="text-sm text-green-600">Average Uptime</div>
                <div className="text-xs text-green-500 mt-1">Last 30 days</div>
              </div>
              <div className="text-center p-4 bg-blue-50 border border-blue-200 rounded-lg">
                <div className="text-2xl font-bold text-blue-800 mb-1">< 100ms</div>
                <div className="text-sm text-blue-600">Average Response</div>
                <div className="text-xs text-blue-500 mt-1">API latency</div>
              </div>
              <div className="text-center p-4 bg-purple-50 border border-purple-200 rounded-lg">
                <div className="text-2xl font-bold text-purple-800 mb-1">6/6</div>
                <div className="text-sm text-purple-600">Services Online</div>
                <div className="text-xs text-purple-500 mt-1">Real-time status</div>
              </div>
              <div className="text-center p-4 bg-orange-50 border border-orange-200 rounded-lg">
                <div className="text-2xl font-bold text-orange-800 mb-1">0</div>
                <div className="text-sm text-orange-600">Active Incidents</div>
                <div className="text-xs text-orange-500 mt-1">Current issues</div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Services Status */}
        <Card className="bg-background border-border shadow-sm mb-8">
          <CardHeader>
            <CardTitle className="text-text-primary">Service Status</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {systems.map((system, index) => (
                <div key={index} className="flex items-center justify-between p-4 bg-surface-container rounded-lg">
                  <div className="flex items-center gap-3">
                    {getStatusIcon(system.status)}
                    <div>
                      <div className="font-semibold text-text-primary">{system.name}</div>
                      <div className="text-sm text-text-secondary">Uptime: {system.uptime}</div>
                    </div>
                  </div>
                  <div className="text-right">
                    {getStatusBadge(system.status)}
                    <div className="text-xs text-text-secondary mt-1">
                      Last incident: {system.lastIncident}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Performance Metrics */}
        <Card className="bg-background border-border shadow-sm mb-8">
          <CardHeader>
            <CardTitle className="text-text-primary">Performance Metrics</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="w-12 h-12 bg-matdash-primary/10 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Server className="h-6 w-6 text-matdash-primary" />
                </div>
                <h4 className="font-semibold text-text-primary mb-2">Server Response Time</h4>
                <div className="text-2xl font-bold text-matdash-primary mb-1">89ms</div>
                <div className="text-sm text-text-secondary">Average over 24h</div>
                <div className="w-full bg-gray-200 rounded-full h-2 mt-2">
                  <div className="bg-matdash-primary h-2 rounded-full" style={{ width: "85%" }}></div>
                </div>
              </div>
              
              <div className="text-center">
                <div className="w-12 h-12 bg-matdash-secondary/10 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Database className="h-6 w-6 text-matdash-secondary" />
                </div>
                <h4 className="font-semibold text-text-primary mb-2">Database Query Time</h4>
                <div className="text-2xl font-bold text-matdash-secondary mb-1">12ms</div>
                <div className="text-sm text-text-secondary">Average over 24h</div>
                <div className="w-full bg-gray-200 rounded-full h-2 mt-2">
                  <div className="bg-matdash-secondary h-2 rounded-full" style={{ width: "95%" }}></div>
                </div>
              </div>
              
              <div className="text-center">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Zap className="h-6 w-6 text-primary" />
                </div>
                <h4 className="font-semibold text-text-primary mb-2">Trade Execution Speed</h4>
                <div className="text-2xl font-bold text-primary mb-1">45ms</div>
                <div className="text-sm text-text-secondary">Average over 24h</div>
                <div className="w-full bg-gray-200 rounded-full h-2 mt-2">
                  <div className="bg-primary h-2 rounded-full" style={{ width: "90%" }}></div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Recent Incidents */}
        <Card className="bg-background border-border shadow-sm mb-8">
          <CardHeader>
            <CardTitle className="text-text-primary">Recent Incidents</CardTitle>
          </CardHeader>
          <CardContent>
            {recentIncidents.length > 0 ? (
              <div className="space-y-4">
                {recentIncidents.map((incident, index) => (
                  <div key={index} className="border border-border rounded-lg p-4">
                    <div className="flex items-start justify-between mb-2">
                      <div>
                        <h4 className="font-semibold text-text-primary">{incident.title}</h4>
                        <div className="text-sm text-text-secondary">{incident.date}</div>
                      </div>
                      <Badge className="bg-green-100 text-green-800 border-green-200">
                        {incident.status}
                      </Badge>
                    </div>
                    <div className="grid md:grid-cols-2 gap-4 text-sm text-text-secondary">
                      <div>
                        <span className="font-medium">Duration:</span> {incident.duration}
                      </div>
                      <div>
                        <span className="font-medium">Impact:</span> {incident.impact}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center py-8">
                <CheckCircle className="h-12 w-12 text-green-600 mx-auto mb-3" />
                <h4 className="font-semibold text-text-primary mb-2">No Recent Incidents</h4>
                <p className="text-text-secondary">All systems have been running smoothly.</p>
              </div>
            )}
          </CardContent>
        </Card>

        {/* Maintenance Schedule */}
        <Card className="bg-background border-border shadow-sm">
          <CardHeader>
            <CardTitle className="text-text-primary">Scheduled Maintenance</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="bg-blue-50 border border-blue-200 p-4 rounded-lg">
              <div className="flex items-start gap-3">
                <Clock className="h-5 w-5 text-blue-600 flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-semibold text-blue-800 mb-1">Upcoming Maintenance</h4>
                  <p className="text-blue-700 text-sm mb-2">
                    Database optimization and security updates scheduled for this weekend.
                  </p>
                  <div className="grid md:grid-cols-3 gap-3 text-sm">
                    <div>
                      <span className="font-medium text-blue-800">Date:</span>
                      <div className="text-blue-600">January 20, 2024</div>
                    </div>
                    <div>
                      <span className="font-medium text-blue-800">Time:</span>
                      <div className="text-blue-600">2:00 AM - 4:00 AM UTC</div>
                    </div>
                    <div>
                      <span className="font-medium text-blue-800">Expected Impact:</span>
                      <div className="text-blue-600">Minimal service interruption</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Contact Section */}
        <div className="mt-8 text-center">
          <h3 className="text-lg font-semibold text-text-primary mb-2">Having Issues?</h3>
          <p className="text-text-secondary mb-4">
            If you're experiencing problems not reflected on this page, please contact our support team.
          </p>
          <div className="flex justify-center gap-4">
            <Button asChild variant="outline">
              <Link to="/contact">Contact Support</Link>
            </Button>
            <Button asChild>
              <a href="mailto:support@automatealgos.in">Report an Issue</a>
            </Button>
          </div>
        </div>
      </div>

      <AppFooter />
    </div>
  );
};

export default SystemStatus;