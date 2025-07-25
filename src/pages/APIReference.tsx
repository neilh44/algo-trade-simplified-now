import { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { 
  Search, 
  Code2, 
  Key, 
  Database, 
  Zap, 
  Download,
  Copy,
  ExternalLink,
  Terminal
} from 'lucide-react';

export default function APIReference() {
  const [searchQuery, setSearchQuery] = useState('');

  const apiEndpoints = [
    {
      category: 'Authentication',
      icon: Key,
      endpoints: [
        { method: 'POST', path: '/auth/login', description: 'Authenticate user and get access token' },
        { method: 'POST', path: '/auth/refresh', description: 'Refresh access token' },
        { method: 'POST', path: '/auth/logout', description: 'Invalidate access token' },
      ]
    },
    {
      category: 'Market Data',
      icon: Database,
      endpoints: [
        { method: 'GET', path: '/market/quotes', description: 'Get real-time quotes for symbols' },
        { method: 'GET', path: '/market/history', description: 'Get historical price data' },
        { method: 'GET', path: '/market/symbols', description: 'List available trading symbols' },
        { method: 'WS', path: '/market/stream', description: 'Real-time market data stream' },
      ]
    },
    {
      category: 'Trading',
      icon: Zap,
      endpoints: [
        { method: 'POST', path: '/orders/place', description: 'Place a new order' },
        { method: 'GET', path: '/orders', description: 'Get order history' },
        { method: 'DELETE', path: '/orders/{id}', description: 'Cancel an order' },
        { method: 'GET', path: '/positions', description: 'Get current positions' },
      ]
    },
    {
      category: 'Strategy',
      icon: Code2,
      endpoints: [
        { method: 'POST', path: '/strategies', description: 'Create a new strategy' },
        { method: 'GET', path: '/strategies', description: 'List user strategies' },
        { method: 'PUT', path: '/strategies/{id}', description: 'Update strategy' },
        { method: 'POST', path: '/strategies/{id}/backtest', description: 'Run backtest' },
      ]
    }
  ];

  const sdkLanguages = [
    { name: 'Python', code: 'python', popular: true },
    { name: 'JavaScript', code: 'javascript', popular: true },
    { name: 'Java', code: 'java', popular: false },
    { name: 'C#', code: 'csharp', popular: false },
    { name: 'Go', code: 'go', popular: false },
    { name: 'PHP', code: 'php', popular: false },
  ];

  const rateLimits = [
    { tier: 'Free', requests: '1,000/hour', burst: '100/minute', websocket: '5 connections' },
    { tier: 'Pro', requests: '10,000/hour', burst: '500/minute', websocket: '25 connections' },
    { tier: 'Enterprise', requests: 'Unlimited', burst: 'Unlimited', websocket: 'Unlimited' },
  ];

  const getMethodColor = (method: string) => {
    switch (method) {
      case 'GET': return 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300';
      case 'POST': return 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300';
      case 'PUT': return 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300';
      case 'DELETE': return 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300';
      case 'WS': return 'bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-300';
      default: return 'bg-muted text-muted-foreground';
    }
  };

  const pythonExample = `
import automatealgos

# Initialize client
client = automatealgos.Client(
    api_key="your_api_key",
    api_secret="your_api_secret"
)

# Get market quotes
quotes = client.market.get_quotes(["AAPL", "GOOGL"])
print(quotes)

# Place order
order = client.orders.place(
    symbol="AAPL",
    side="buy",
    quantity=100,
    order_type="market"
)
print(f"Order placed: {order.id}")
`;

  const javascriptExample = `
const AutomateAlgos = require('@automatealgos/sdk');

// Initialize client
const client = new AutomateAlgos.Client({
  apiKey: 'your_api_key',
  apiSecret: 'your_api_secret'
});

// Get market quotes
const quotes = await client.market.getQuotes(['AAPL', 'GOOGL']);
console.log(quotes);

// Place order
const order = await client.orders.place({
  symbol: 'AAPL',
  side: 'buy',
  quantity: 100,
  orderType: 'market'
});
console.log(\`Order placed: \${order.id}\`);
`;

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-primary/5 to-secondary/5 py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h1 className="text-4xl font-bold text-foreground mb-4">
                API Reference
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Complete documentation for our trading APIs. Build powerful applications 
                with real-time market data, order management, and strategy automation.
              </p>
            </div>

            {/* Search Bar */}
            <div className="max-w-2xl mx-auto relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-muted-foreground" />
              <Input
                type="text"
                placeholder="Search endpoints..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 pr-4 py-3 text-lg"
              />
            </div>
          </div>
        </section>

        {/* API Overview */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            
            <Tabs defaultValue="endpoints" className="space-y-8">
              <TabsList className="grid w-full grid-cols-4">
                <TabsTrigger value="endpoints">Endpoints</TabsTrigger>
                <TabsTrigger value="authentication">Authentication</TabsTrigger>
                <TabsTrigger value="sdks">SDKs</TabsTrigger>
                <TabsTrigger value="limits">Rate Limits</TabsTrigger>
              </TabsList>

              {/* Endpoints Tab */}
              <TabsContent value="endpoints" className="space-y-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  {apiEndpoints.map((category, index) => {
                    const Icon = category.icon;
                    return (
                      <Card key={index}>
                        <CardHeader>
                          <CardTitle className="flex items-center">
                            <Icon className="h-5 w-5 text-primary mr-2" />
                            {category.category}
                          </CardTitle>
                        </CardHeader>
                        <CardContent>
                          <div className="space-y-4">
                            {category.endpoints.map((endpoint, endpointIndex) => (
                              <div
                                key={endpointIndex}
                                className="p-4 border border-border rounded-lg hover:border-primary/50 transition-colors cursor-pointer"
                              >
                                <div className="flex items-start justify-between mb-2">
                                  <div className="flex items-center space-x-3">
                                    <Badge className={getMethodColor(endpoint.method)}>
                                      {endpoint.method}
                                    </Badge>
                                    <code className="text-sm font-mono text-foreground">
                                      {endpoint.path}
                                    </code>
                                  </div>
                                  <ExternalLink className="h-4 w-4 text-muted-foreground" />
                                </div>
                                <p className="text-sm text-muted-foreground">
                                  {endpoint.description}
                                </p>
                              </div>
                            ))}
                          </div>
                        </CardContent>
                      </Card>
                    );
                  })}
                </div>
              </TabsContent>

              {/* Authentication Tab */}
              <TabsContent value="authentication" className="space-y-8">
                <Card>
                  <CardHeader>
                    <CardTitle>API Authentication</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div>
                      <h3 className="text-lg font-semibold mb-4">Getting Your API Keys</h3>
                      <ol className="list-decimal list-inside space-y-2 text-muted-foreground">
                        <li>Log into your AutomateAlgos dashboard</li>
                        <li>Navigate to Settings → API Keys</li>
                        <li>Click "Generate New API Key"</li>
                        <li>Copy your API Key and Secret (keep them secure!)</li>
                      </ol>
                    </div>

                    <div>
                      <h3 className="text-lg font-semibold mb-4">Authentication Methods</h3>
                      <div className="bg-muted p-4 rounded-lg">
                        <h4 className="font-medium mb-2">API Key Authentication</h4>
                        <pre className="text-sm bg-background p-3 rounded border overflow-x-auto">
{`curl -H "Authorization: Bearer YOUR_API_KEY" \\
     -H "Content-Type: application/json" \\
     https://api.automatealgos.com/v1/market/quotes`}
                        </pre>
                      </div>
                    </div>

                    <div className="flex space-x-3">
                      <Button>
                        <Key className="h-4 w-4 mr-2" />
                        Generate API Key
                      </Button>
                      <Button variant="outline">
                        <Copy className="h-4 w-4 mr-2" />
                        Copy Example
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              {/* SDKs Tab */}
              <TabsContent value="sdks" className="space-y-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  
                  {/* SDK Downloads */}
                  <Card>
                    <CardHeader>
                      <CardTitle>Official SDKs</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="grid grid-cols-2 gap-4">
                        {sdkLanguages.map((lang, index) => (
                          <Button
                            key={index}
                            variant="outline"
                            className="justify-start h-auto p-4"
                          >
                            <div className="text-left">
                              <div className="flex items-center">
                                <span className="font-medium">{lang.name}</span>
                                {lang.popular && (
                                  <Badge variant="secondary" className="ml-2 text-xs">
                                    Popular
                                  </Badge>
                                )}
                              </div>
                              <div className="text-xs text-muted-foreground mt-1">
                                Official SDK
                              </div>
                            </div>
                          </Button>
                        ))}
                      </div>
                    </CardContent>
                  </Card>

                  {/* Code Examples */}
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center">
                        <Terminal className="h-5 w-5 mr-2" />
                        Quick Start Examples
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <Tabs defaultValue="python" className="space-y-4">
                        <TabsList className="grid w-full grid-cols-2">
                          <TabsTrigger value="python">Python</TabsTrigger>
                          <TabsTrigger value="javascript">JavaScript</TabsTrigger>
                        </TabsList>
                        
                        <TabsContent value="python">
                          <div className="bg-muted p-4 rounded-lg">
                            <pre className="text-sm overflow-x-auto">
                              <code>{pythonExample}</code>
                            </pre>
                          </div>
                        </TabsContent>
                        
                        <TabsContent value="javascript">
                          <div className="bg-muted p-4 rounded-lg">
                            <pre className="text-sm overflow-x-auto">
                              <code>{javascriptExample}</code>
                            </pre>
                          </div>
                        </TabsContent>
                      </Tabs>
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>

              {/* Rate Limits Tab */}
              <TabsContent value="limits" className="space-y-8">
                <Card>
                  <CardHeader>
                    <CardTitle>Rate Limiting</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="overflow-x-auto">
                      <table className="w-full">
                        <thead>
                          <tr className="border-b border-border">
                            <th className="text-left py-3 px-4">Plan</th>
                            <th className="text-left py-3 px-4">Requests/Hour</th>
                            <th className="text-left py-3 px-4">Burst Rate</th>
                            <th className="text-left py-3 px-4">WebSocket</th>
                          </tr>
                        </thead>
                        <tbody>
                          {rateLimits.map((limit, index) => (
                            <tr key={index} className="border-b border-border">
                              <td className="py-3 px-4">
                                <Badge variant={limit.tier === 'Enterprise' ? 'default' : 'outline'}>
                                  {limit.tier}
                                </Badge>
                              </td>
                              <td className="py-3 px-4 font-mono text-sm">{limit.requests}</td>
                              <td className="py-3 px-4 font-mono text-sm">{limit.burst}</td>
                              <td className="py-3 px-4 font-mono text-sm">{limit.websocket}</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>

                    <div className="mt-6 p-4 bg-muted rounded-lg">
                      <h4 className="font-medium mb-2">Rate Limit Headers</h4>
                      <p className="text-sm text-muted-foreground mb-3">
                        All API responses include rate limit information in headers:
                      </p>
                      <div className="bg-background p-3 rounded border font-mono text-sm">
                        X-RateLimit-Limit: 1000<br/>
                        X-RateLimit-Remaining: 999<br/>
                        X-RateLimit-Reset: 1640995200
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}