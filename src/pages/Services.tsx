import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  BookOpen, 
  Users, 
  Award, 
  Clock, 
  Star, 
  Video, 
  Calendar, 
  TrendingUp, 
  Target, 
  CheckCircle,
  Play,
  GraduationCap,
  User,
  Trophy
} from "lucide-react";

const Services = () => {
  const redirectToAuth = () => {
    window.location.href = "https://automatealgos.in/";
  };

  const courses = [
    {
      title: "Stock Market Fundamentals Mastery",
      level: "Beginner",
      duration: "6 weeks",
      students: "2,847",
      rating: "4.8",
      reviews: "1,234",
      price: "12,999",
      earlyBird: "9,999",
      instructor: "Hashmukh Prajapati",
      experience: "15+ years",
      features: ["Live sessions twice weekly", "Personal mentor assignment", "Practical trading assignments", "Lifetime access to materials"],
      modules: ["Market basics", "Order types", "Risk management", "Portfolio theory"]
    },
    {
      title: "Advanced Technical Analysis & Chart Patterns",
      level: "Advanced",
      duration: "8 weeks",
      students: "1,923",
      rating: "4.9",
      reviews: "876",
      price: "18,999",
      earlyBird: null,
      instructor: "Rachit Mittal",
      experience: "CFA, 12 years institutional trading",
      features: ["Real-time market analysis", "Daily trade setups", "Personal trading journal review"],
      modules: ["Candlestick patterns", "Support/resistance", "Indicators", "Wave theory"]
    },
    {
      title: "Build Your Own Trading Algorithms",
      level: "Expert",
      duration: "12 weeks",
      students: "847",
      rating: "4.7",
      reviews: "432",
      price: "34,999",
      earlyBird: "29,999",
      instructor: "Amit Gupta",
      experience: "Ex-Goldman Sachs, Algorithmic Trading Head",
      features: ["One-on-one code reviews", "GitHub repository access", "Live trading support"],
      modules: ["Python for trading", "Strategy development", "Backtesting", "Live deployment"]
    },
    {
      title: "Professional Options Strategies & Risk Management",
      level: "Professional",
      duration: "10 weeks",
      students: "1,456",
      rating: "4.8",
      reviews: "723",
      price: "24,999",
      earlyBird: null,
      instructor: "Dr. Suresh Patel",
      experience: "PhD Finance, 18 years derivatives experience",
      features: ["Live options chain analysis", "Risk calculator tools", "Strategy simulator"],
      modules: ["Greeks", "Volatility trading", "Complex strategies", "Portfolio hedging"]
    }
  ];

  const webinars = [
    {
      day: "Monday",
      title: "Market Analysis",
      time: "8:00 PM IST",
      duration: "90 minutes",
      attendance: "5,000+",
      price: "Free for students, ₹499 for others",
      agenda: "Week ahead analysis, key levels, sector outlook"
    },
    {
      day: "Wednesday",
      title: "Technical Deep Dive",
      time: "7:30 PM IST",
      duration: "2 hours",
      attendance: "3,500+",
      price: "Free for premium members",
      agenda: "Chart pattern analysis, indicator strategies, live trading"
    },
    {
      day: "Friday",
      title: "Strategy Sessions",
      time: "8:30 PM IST",
      duration: "2.5 hours",
      attendance: "2,800+",
      price: "₹999 (includes recording access)",
      agenda: "Advanced strategies, risk management, portfolio optimization"
    }
  ];

  const packages = [
    {
      title: "Complete Trading Bundle",
      description: "All courses + 1 year mentoring",
      originalPrice: "149,999",
      price: "99,999",
      savings: "50,000",
      features: ["All foundation & advanced courses", "12 months personal mentoring", "Priority support", "Exclusive community access", "Trading tools included"]
    },
    {
      title: "Technical Analysis Suite",
      description: "3 courses + trading tools",
      originalPrice: "74,999",
      price: "49,999",
      savings: "25,000",
      features: ["Technical analysis courses", "Chart pattern tools", "Signal alerts", "Weekly market reports", "6 months support"]
    },
    {
      title: "Algorithmic Trading Package",
      description: "Development course + tools",
      originalPrice: "79,999",
      price: "59,999",
      savings: "20,000",
      features: ["Algorithm development course", "Python trading toolkit", "Backtesting platform", "Strategy templates", "Code review sessions"]
    }
  ];

  const testimonials = [
    {
      name: "Rajesh Kumar",
      role: "Software Engineer, Mumbai",
      content: "The Technical Analysis course transformed my trading approach. From random trades to systematic analysis, my success rate improved from 30% to 75%.",
      course: "Technical Analysis Professional",
      rating: 5
    },
    {
      name: "Priya Sharma",
      role: "Full-time Trader, Delhi",
      content: "The algorithmic trading course gave me the skills to automate my strategies. Now I'm generating consistent returns while managing risk effectively.",
      course: "Build Your Own Trading Algorithms",
      rating: 5
    },
    {
      name: "Vikram Patel",
      role: "Investment Banker, Mumbai",
      content: "The options strategies course helped me understand complex derivatives. The risk management techniques are invaluable for institutional trading.",
      course: "Professional Options Strategies",
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="relative pt-20 pb-16 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-accent/5 to-background" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16">
          <div className="text-center max-w-4xl mx-auto">
            <Badge variant="outline" className="mb-4 text-primary border-primary/20">
              SEBI Registered • 500+ Success Stories • Industry-Recognized Certification
            </Badge>
            <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6">
              Master Trading with Professional 
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent"> Education</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              From Beginner to Expert - Comprehensive Trading Education for Every Level.<br />
              Join 15,000+ students who've transformed their trading careers with our proven curriculum.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                onClick={redirectToAuth}
                className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-6 text-lg"
              >
                Start Your Learning Journey
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="px-8 py-6 text-lg border-primary/20 hover:bg-primary/5"
              >
                <Play className="mr-2 h-5 w-5" />
                Watch Free Demo Class
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-card/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { label: "Active Students", value: "15,000+", icon: Users },
              { label: "Course Completion Rate", value: "89%", icon: Trophy },
              { label: "Job Placements", value: "2,300+", icon: Award },
              { label: "Success Rate", value: "92%", icon: Target }
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <stat.icon className="h-8 w-8 mx-auto mb-2 text-primary" />
                <div className="text-3xl font-bold text-foreground">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Professional Trading Courses */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">Professional Trading Courses</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Comprehensive curriculum designed by industry experts with practical, hands-on learning approach
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {courses.map((course, index) => (
              <Card key={index} className="border-border/50 hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-start justify-between mb-2">
                    <Badge variant={course.level === 'Beginner' ? 'default' : course.level === 'Advanced' ? 'secondary' : 'outline'}>
                      {course.level}
                    </Badge>
                    <div className="flex items-center gap-1 text-sm">
                      <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                      <span className="font-medium">{course.rating}</span>
                      <span className="text-muted-foreground">({course.reviews})</span>
                    </div>
                  </div>
                  <CardTitle className="text-xl">{course.title}</CardTitle>
                  <CardDescription className="flex items-center gap-4 text-sm">
                    <span className="flex items-center gap-1">
                      <Clock className="h-4 w-4" />
                      {course.duration}
                    </span>
                    <span className="flex items-center gap-1">
                      <Users className="h-4 w-4" />
                      {course.students} students
                    </span>
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="mb-4">
                    <div className="flex items-center gap-2 mb-2">
                      <User className="h-4 w-4 text-muted-foreground" />
                      <span className="font-medium">{course.instructor}</span>
                    </div>
                    <p className="text-sm text-muted-foreground">{course.experience}</p>
                  </div>

                  <div className="mb-4">
                    <h4 className="font-medium mb-2">Course Modules:</h4>
                    <div className="flex flex-wrap gap-2">
                      {course.modules.map((module, idx) => (
                        <Badge key={idx} variant="outline" className="text-xs">
                          {module}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <div className="mb-4">
                    <h4 className="font-medium mb-2">Key Features:</h4>
                    <ul className="space-y-1">
                      {course.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center gap-2 text-sm">
                          <CheckCircle className="h-4 w-4 text-green-500" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex items-center justify-between pt-4 border-t border-border">
                    <div>
                      {course.earlyBird && (
                        <div className="text-sm text-muted-foreground line-through">₹{course.price}</div>
                      )}
                      <div className="text-2xl font-bold text-foreground">
                        ₹{course.earlyBird || course.price}
                      </div>
                      {course.earlyBird && (
                        <Badge variant="destructive" className="text-xs">
                          Early Bird Offer
                        </Badge>
                      )}
                    </div>
                    <Button onClick={redirectToAuth}>
                      Enroll Now
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Live Webinars */}
      <section className="py-20 bg-card/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">Live Webinars & Workshops</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Stay updated with weekly live sessions covering market analysis, strategies, and real-time trading
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {webinars.map((webinar, index) => (
              <Card key={index} className="border-border/50">
                <CardHeader>
                  <div className="flex items-center gap-2 mb-2">
                    <Calendar className="h-5 w-5 text-primary" />
                    <Badge variant="outline">{webinar.day}</Badge>
                  </div>
                  <CardTitle className="text-xl">{webinar.title}</CardTitle>
                  <CardDescription>
                    <div className="flex items-center gap-1 mb-1">
                      <Clock className="h-4 w-4" />
                      {webinar.time} • {webinar.duration}
                    </div>
                    <div className="flex items-center gap-1">
                      <Users className="h-4 w-4" />
                      {webinar.attendance} live participants
                    </div>
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-4">
                    {webinar.agenda}
                  </p>
                  <div className="flex items-center justify-between pt-4 border-t border-border">
                    <div className="text-sm font-medium">{webinar.price}</div>
                    <Button size="sm" onClick={redirectToAuth}>
                      Register
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Learning Packages */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">Bundled Learning Packages</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Comprehensive packages combining multiple courses with exclusive benefits and significant savings
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {packages.map((pkg, index) => (
              <Card key={index} className={`border-border/50 ${index === 1 ? 'ring-2 ring-primary/20 bg-primary/5' : ''}`}>
                <CardHeader>
                  {index === 1 && (
                    <Badge className="w-fit mb-2 bg-primary text-primary-foreground">Most Popular</Badge>
                  )}
                  <CardTitle className="text-xl">{pkg.title}</CardTitle>
                  <CardDescription>{pkg.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="mb-6">
                    <div className="text-sm text-muted-foreground line-through mb-1">₹{pkg.originalPrice}</div>
                    <div className="text-3xl font-bold text-foreground mb-1">₹{pkg.price}</div>
                    <Badge variant="destructive" className="text-xs">Save ₹{pkg.savings}</Badge>
                  </div>

                  <ul className="space-y-3 mb-6">
                    {pkg.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-sm">
                        <CheckCircle className="h-4 w-4 text-green-500" />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <Button 
                    onClick={redirectToAuth}
                    className={`w-full ${index === 1 ? 'bg-primary hover:bg-primary/90' : ''}`}
                    variant={index === 1 ? 'default' : 'outline'}
                  >
                    Choose Package
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Student Testimonials */}
      <section className="py-20 bg-card/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">Student Success Stories</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Real transformations from our students who've applied our education to achieve trading success
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="border-border/50">
                <CardHeader>
                  <div className="flex items-center gap-1 mb-2">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <CardTitle className="text-lg">{testimonial.name}</CardTitle>
                  <CardDescription>{testimonial.role}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-4">"{testimonial.content}"</p>
                  <Badge variant="outline" className="text-xs">
                    {testimonial.course}
                  </Badge>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Learning Methodology */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">Our Learning Methodology</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Proven approach combining theory, practice, and mentorship for optimal learning outcomes
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Video,
                title: "Live Interactive Sessions",
                description: "Real-time Q&A with expert instructors and hands-on market analysis"
              },
              {
                icon: TrendingUp,
                title: "Hands-on Practice",
                description: "Trade with virtual money in our realistic market simulation environment"
              },
              {
                icon: User,
                title: "Personal Mentoring",
                description: "One-on-one guidance from industry professionals with decades of experience"
              },
              {
                icon: GraduationCap,
                title: "Certification & Career Support",
                description: "Industry-recognized certificates and job placement assistance"
              }
            ].map((method, index) => (
              <Card key={index} className="border-border/50 text-center">
                <CardHeader>
                  <method.icon className="h-12 w-12 mx-auto mb-4 text-primary" />
                  <CardTitle className="text-lg">{method.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">{method.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary/10 via-accent/5 to-primary/10">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-foreground mb-6">
            Ready to Transform Your Trading Career?
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            Join thousands of successful traders who started their journey with our comprehensive education programs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              onClick={redirectToAuth}
              className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-6 text-lg"
            >
              <BookOpen className="mr-2 h-5 w-5" />
              Start Learning Today
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="px-8 py-6 text-lg border-primary/20 hover:bg-primary/5"
            >
              Download Course Brochure
            </Button>
          </div>
        </div>
      </section>

      <Footer id="contact" />
    </div>
  );
};

export default Services;