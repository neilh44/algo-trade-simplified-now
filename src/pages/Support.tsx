import { useState } from 'react';
import { DashboardHeader } from '@/components/dashboard/DashboardHeader';
import { DashboardSidebar } from '@/components/dashboard/DashboardSidebar';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { useToast } from '@/hooks/use-toast';
import {
  HelpCircle,
  MessageSquare,
  Search,
  Send,
  Clock,
  CheckCircle,
  AlertCircle,
  BookOpen,
  Video,
  Download,
  Mail,
  Phone,
  Users,
  Star,
  ThumbsUp,
  ThumbsDown,
  FileText,
  ExternalLink,
} from 'lucide-react';

export default function Support() {
  const { toast } = useToast();
  const [searchTerm, setSearchTerm] = useState('');
  const [ticketForm, setTicketForm] = useState({
    subject: '',
    category: '',
    priority: 'medium',
    description: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const supportStats = {
    avgResponseTime: '< 2 hours',
    totalTickets: 1247,
    resolvedTickets: 1189,
    satisfactionRate: '98%',
  };

  const faqs = [
    {
      category: 'Getting Started',
      questions: [
        {
          question: 'How do I start my first algorithmic trading course?',
          answer: 'Navigate to the Free Courses section from your dashboard and click on "Algorithmic Trading Basics". This course is designed for complete beginners and will guide you through the fundamentals.',
        },
        {
          question: 'What programming knowledge do I need?',
          answer: 'No prior programming experience is required! Our courses start from the basics and gradually build up your skills. We recommend starting with "Python for Trading" if you\'re new to programming.',
        },
        {
          question: 'Are the courses really free?',
          answer: 'Yes! All our fundamental courses are completely free. We also offer premium courses and one-on-one mentoring for advanced learners.',
        },
      ],
    },
    {
      category: 'Technical Issues',
      questions: [
        {
          question: 'I can\'t access my course materials',
          answer: 'First, try refreshing your browser and clearing your cache. If the issue persists, check if you\'re logged in with the correct account. Contact support if you still have problems.',
        },
        {
          question: 'Video playback issues',
          answer: 'Ensure you have a stable internet connection. Try switching to a different browser or disabling browser extensions. Our videos work best on Chrome, Firefox, and Safari.',
        },
        {
          question: 'Download problems',
          answer: 'Check your internet connection and available storage space. Some browsers may block downloads - try right-clicking and selecting "Save As" instead.',
        },
      ],
    },
    {
      category: 'Account & Billing',
      questions: [
        {
          question: 'How do I update my profile information?',
          answer: 'Go to your Profile page from the dashboard menu. Click "Edit Profile" to update your personal information, trading experience, and goals.',
        },
        {
          question: 'I forgot my password',
          answer: 'Click "Forgot Password" on the login page and enter your email address. You\'ll receive a password reset link within a few minutes.',
        },
        {
          question: 'Can I change my email address?',
          answer: 'For security reasons, email changes require verification. Please contact our support team with your request and we\'ll guide you through the process.',
        },
      ],
    },
    {
      category: 'Community & Features',
      questions: [
        {
          question: 'How do I join community discussions?',
          answer: 'Visit the Community page from your dashboard. You can browse existing discussions, ask questions, and share your knowledge with fellow traders.',
        },
        {
          question: 'What are achievements and how do I earn them?',
          answer: 'Achievements are badges you earn by completing courses, maintaining learning streaks, and participating in the community. Check the Achievements page to see what you can unlock!',
        },
        {
          question: 'How do live sessions work?',
          answer: 'Live sessions are interactive webinars with expert instructors. You can register for upcoming sessions on the Live Sessions page and participate in real-time Q&A.',
        },
      ],
    },
  ];

  const myTickets = [
    {
      id: 'TK-001',
      subject: 'Unable to download course materials',
      category: 'Technical',
      status: 'resolved',
      priority: 'medium',
      created: '2024-01-10',
      lastUpdate: '2024-01-11',
      responses: 3,
    },
    {
      id: 'TK-002',
      subject: 'Question about Python trading strategies',
      category: 'Course Content',
      status: 'open',
      priority: 'low',
      created: '2024-01-14',
      lastUpdate: '2024-01-15',
      responses: 1,
    },
  ];

  const contactMethods = [
    {
      title: 'Email Support',
      description: 'Get help via email',
      contact: 'support@automatealgo.com',
      responseTime: '< 2 hours',
      icon: Mail,
      available: '24/7',
    },
    {
      title: 'Live Chat',
      description: 'Chat with our support team',
      contact: 'Start Chat',
      responseTime: '< 5 minutes',
      icon: MessageSquare,
      available: '9 AM - 6 PM EST',
    },
    {
      title: 'Community Forum',
      description: 'Ask the community',
      contact: 'Visit Forum',
      responseTime: '< 30 minutes',
      icon: Users,
      available: '24/7',
    },
  ];

  const helpResources = [
    {
      title: 'Video Tutorials',
      description: 'Step-by-step video guides',
      icon: Video,
      link: '/tutorials',
      count: '25+ videos',
    },
    {
      title: 'Documentation',
      description: 'Comprehensive guides',
      icon: FileText,
      link: '/docs',
      count: '50+ articles',
    },
    {
      title: 'Download Center',
      description: 'Tools and resources',
      icon: Download,
      link: '/downloads',
      count: '15+ resources',
    },
  ];

  const handleTicketSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!ticketForm.subject || !ticketForm.description) {
      toast({
        title: 'Error',
        description: 'Please fill in all required fields',
        variant: 'destructive',
      });
      return;
    }

    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      toast({
        title: 'Success',
        description: 'Your support ticket has been submitted. We\'ll get back to you soon!',
      });
      setTicketForm({
        subject: '',
        category: '',
        priority: 'medium',
        description: '',
      });
      setIsSubmitting(false);
    }, 1000);
  };

  const filteredFaqs = faqs.map(category => ({
    ...category,
    questions: category.questions.filter(q =>
      q.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
      q.answer.toLowerCase().includes(searchTerm.toLowerCase())
    ),
  })).filter(category => category.questions.length > 0);

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'open': return 'bg-blue-100 text-blue-800';
      case 'in-progress': return 'bg-yellow-100 text-yellow-800';
      case 'resolved': return 'bg-green-100 text-green-800';
      case 'closed': return 'bg-gray-100 text-gray-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'high': return 'bg-red-100 text-red-800';
      case 'medium': return 'bg-yellow-100 text-yellow-800';
      case 'low': return 'bg-green-100 text-green-800';
      default: return 'bg-gray-100 text-gray-800';
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
            <h1 className="text-3xl font-bold text-foreground mb-2">Support Center</h1>
            <p className="text-muted-foreground">
              Get help, find answers, and connect with our support team
            </p>
          </div>

          {/* Support Stats */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center">
                  <Clock className="h-8 w-8 text-primary" />
                  <div className="ml-4">
                    <p className="text-sm font-medium text-muted-foreground">Avg Response</p>
                    <p className="text-2xl font-bold">{supportStats.avgResponseTime}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center">
                  <MessageSquare className="h-8 w-8 text-primary" />
                  <div className="ml-4">
                    <p className="text-sm font-medium text-muted-foreground">Total Tickets</p>
                    <p className="text-2xl font-bold">{supportStats.totalTickets}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center">
                  <CheckCircle className="h-8 w-8 text-primary" />
                  <div className="ml-4">
                    <p className="text-sm font-medium text-muted-foreground">Resolved</p>
                    <p className="text-2xl font-bold">{supportStats.resolvedTickets}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center">
                  <Star className="h-8 w-8 text-primary" />
                  <div className="ml-4">
                    <p className="text-sm font-medium text-muted-foreground">Satisfaction</p>
                    <p className="text-2xl font-bold">{supportStats.satisfactionRate}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <Tabs defaultValue="faq" className="space-y-6">
            <TabsList>
              <TabsTrigger value="faq">FAQ</TabsTrigger>
              <TabsTrigger value="contact">Contact Support</TabsTrigger>
              <TabsTrigger value="tickets">My Tickets</TabsTrigger>
              <TabsTrigger value="resources">Help Resources</TabsTrigger>
            </TabsList>

            <TabsContent value="faq" className="space-y-6">
              {/* Search */}
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
                <Input
                  placeholder="Search frequently asked questions..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10"
                />
              </div>

              {/* FAQ Categories */}
              <div className="space-y-6">
                {filteredFaqs.map((category, categoryIndex) => (
                  <Card key={categoryIndex}>
                    <CardHeader>
                      <CardTitle className="flex items-center">
                        <HelpCircle className="mr-2 h-5 w-5" />
                        {category.category}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <Accordion type="single" collapsible className="w-full">
                        {category.questions.map((faq, faqIndex) => (
                          <AccordionItem key={faqIndex} value={`item-${categoryIndex}-${faqIndex}`}>
                            <AccordionTrigger className="text-left">
                              {faq.question}
                            </AccordionTrigger>
                            <AccordionContent className="text-muted-foreground">
                              {faq.answer}
                              <div className="flex items-center space-x-2 mt-4">
                                <span className="text-sm">Was this helpful?</span>
                                <Button variant="outline" size="sm">
                                  <ThumbsUp className="h-4 w-4" />
                                </Button>
                                <Button variant="outline" size="sm">
                                  <ThumbsDown className="h-4 w-4" />
                                </Button>
                              </div>
                            </AccordionContent>
                          </AccordionItem>
                        ))}
                      </Accordion>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="contact" className="space-y-6">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {/* Contact Methods */}
                <div className="space-y-6">
                  <Card>
                    <CardHeader>
                      <CardTitle>Contact Methods</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      {contactMethods.map((method, index) => {
                        const Icon = method.icon;
                        return (
                          <div key={index} className="flex items-center space-x-4 p-4 border rounded-lg">
                            <div className="p-3 bg-primary/10 rounded-lg">
                              <Icon className="h-6 w-6 text-primary" />
                            </div>
                            <div className="flex-1">
                              <h3 className="font-semibold">{method.title}</h3>
                              <p className="text-sm text-muted-foreground">{method.description}</p>
                              <div className="flex items-center space-x-4 mt-1 text-xs text-muted-foreground">
                                <span>Response: {method.responseTime}</span>
                                <span>Available: {method.available}</span>
                              </div>
                            </div>
                            <Button variant="outline">
                              {method.contact}
                              {method.icon === Mail && <ExternalLink className="ml-2 h-4 w-4" />}
                            </Button>
                          </div>
                        );
                      })}
                    </CardContent>
                  </Card>
                </div>

                {/* Support Ticket Form */}
                <Card>
                  <CardHeader>
                    <CardTitle>Submit a Support Ticket</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <form onSubmit={handleTicketSubmit} className="space-y-4">
                      <div className="space-y-2">
                        <label className="text-sm font-medium">Subject *</label>
                        <Input
                          value={ticketForm.subject}
                          onChange={(e) => setTicketForm(prev => ({ ...prev, subject: e.target.value }))}
                          placeholder="Brief description of your issue"
                          required
                        />
                      </div>

                      <div className="space-y-2">
                        <label className="text-sm font-medium">Category</label>
                        <Select 
                          value={ticketForm.category} 
                          onValueChange={(value) => setTicketForm(prev => ({ ...prev, category: value }))}
                        >
                          <SelectTrigger>
                            <SelectValue placeholder="Select a category" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="technical">Technical Issue</SelectItem>
                            <SelectItem value="account">Account & Billing</SelectItem>
                            <SelectItem value="course">Course Content</SelectItem>
                            <SelectItem value="community">Community</SelectItem>
                            <SelectItem value="other">Other</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>

                      <div className="space-y-2">
                        <label className="text-sm font-medium">Priority</label>
                        <Select 
                          value={ticketForm.priority} 
                          onValueChange={(value) => setTicketForm(prev => ({ ...prev, priority: value }))}
                        >
                          <SelectTrigger>
                            <SelectValue />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="low">Low</SelectItem>
                            <SelectItem value="medium">Medium</SelectItem>
                            <SelectItem value="high">High</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>

                      <div className="space-y-2">
                        <label className="text-sm font-medium">Description *</label>
                        <Textarea
                          value={ticketForm.description}
                          onChange={(e) => setTicketForm(prev => ({ ...prev, description: e.target.value }))}
                          placeholder="Please provide detailed information about your issue..."
                          className="min-h-[120px]"
                          required
                        />
                      </div>

                      <Button type="submit" className="w-full" disabled={isSubmitting}>
                        <Send className="mr-2 h-4 w-4" />
                        {isSubmitting ? 'Submitting...' : 'Submit Ticket'}
                      </Button>
                    </form>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="tickets" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>My Support Tickets</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {myTickets.map((ticket) => (
                      <div key={ticket.id} className="p-4 border rounded-lg">
                        <div className="flex items-start justify-between mb-3">
                          <div>
                            <h3 className="font-semibold">{ticket.subject}</h3>
                            <p className="text-sm text-muted-foreground">Ticket #{ticket.id}</p>
                          </div>
                          <div className="flex space-x-2">
                            <Badge className={getStatusColor(ticket.status)}>
                              {ticket.status}
                            </Badge>
                            <Badge className={getPriorityColor(ticket.priority)}>
                              {ticket.priority}
                            </Badge>
                          </div>
                        </div>
                        
                        <div className="flex items-center justify-between text-sm text-muted-foreground">
                          <div className="flex items-center space-x-4">
                            <span>Category: {ticket.category}</span>
                            <span>Created: {new Date(ticket.created).toLocaleDateString()}</span>
                            <span>Responses: {ticket.responses}</span>
                          </div>
                          <Button variant="outline" size="sm">
                            View Details
                          </Button>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="resources" className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {helpResources.map((resource, index) => {
                  const Icon = resource.icon;
                  return (
                    <Card key={index} className="hover:shadow-md transition-shadow">
                      <CardContent className="p-6 text-center">
                        <div className="p-4 bg-primary/10 rounded-lg inline-block mb-4">
                          <Icon className="h-8 w-8 text-primary" />
                        </div>
                        <h3 className="font-semibold text-lg mb-2">{resource.title}</h3>
                        <p className="text-muted-foreground mb-4">{resource.description}</p>
                        <Badge variant="outline" className="mb-4">
                          {resource.count}
                        </Badge>
                        <Button className="w-full">
                          Explore
                          <ExternalLink className="ml-2 h-4 w-4" />
                        </Button>
                      </CardContent>
                    </Card>
                  );
                })}
              </div>

              {/* Quick Tips */}
              <Card>
                <CardHeader>
                  <CardTitle>Quick Tips</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="p-4 bg-blue-50 dark:bg-blue-900/10 rounded-lg">
                      <h4 className="font-semibold mb-2">Before Contacting Support</h4>
                      <ul className="text-sm text-muted-foreground space-y-1">
                        <li>• Check our FAQ section first</li>
                        <li>• Try refreshing your browser</li>
                        <li>• Clear your browser cache</li>
                        <li>• Check your internet connection</li>
                      </ul>
                    </div>
                    <div className="p-4 bg-green-50 dark:bg-green-900/10 rounded-lg">
                      <h4 className="font-semibold mb-2">When Contacting Support</h4>
                      <ul className="text-sm text-muted-foreground space-y-1">
                        <li>• Provide detailed descriptions</li>
                        <li>• Include screenshots if helpful</li>
                        <li>• Mention your browser and device</li>
                        <li>• Include any error messages</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </main>
      </div>
    </div>
  );
}