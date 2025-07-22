import { User, Lightbulb, GraduationCap, Shield, Mail, MapPin, Phone, Award, TrendingUp, Users, BookOpen, Star, CheckCircle, ArrowRight, Target, Eye, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const About = () => {
  const stats = [
    { number: "5000+", label: "Happy Traders", icon: Users },
    { number: "98%", label: "Success Rate", icon: TrendingUp },
    { number: "50+", label: "Trading Strategies", icon: BookOpen },
    { number: "24/7", label: "Support Available", icon: Shield }
  ];

  const achievements = [
    "NISM Certified Training Programs",
    "Featured in Leading Trading Publications",
    "Winner of Best Algo Trading Platform 2024",
    "Trusted by 5000+ Active Traders",
    "99.9% Platform Uptime Guarantee",
    "ISO 27001 Security Certified"
  ];

  const teamValues = [
    {
      icon: Target,
      title: "Mission Driven",
      description: "We're on a mission to democratize algorithmic trading and make it accessible to everyone, regardless of their technical background."
    },
    {
      icon: Eye,
      title: "Visionary Approach", 
      description: "We envision a future where every trader has access to institutional-grade trading tools and strategies."
    },
    {
      icon: Heart,
      title: "Community First",
      description: "Our success is measured by our community's success. We're committed to creating long-term value for every member."
    }
  ];

  const milestones = [
    { year: "2020", title: "Company Founded", description: "Started with a vision to revolutionize algorithmic trading education" },
    { year: "2021", title: "First 1000 Users", description: "Reached our first milestone of helping 1000 traders automate their strategies" },
    { year: "2022", title: "Platform Launch", description: "Launched our comprehensive algorithmic trading platform" },
    { year: "2023", title: "Educational Expansion", description: "Introduced advanced courses and mentorship programs" },
    { year: "2024", title: "5000+ Community", description: "Built a thriving community of successful algorithmic traders" }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary-light via-secondary-light to-surface-bright pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-grid-white/25 [mask-image:linear-gradient(0deg,#fff,rgba(255,255,255,0.6))]"></div>
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-gradient-to-r from-primary/20 to-secondary/20 rounded-full blur-3xl"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center">
            <div className="inline-flex items-center px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full text-sm font-medium text-primary mb-8 shadow-sm">
              <Star className="w-4 h-4 mr-2" />
              Trusted by 5000+ Algorithmic Traders
            </div>
            
            <h1 className="text-5xl md:text-7xl font-black text-foreground mb-6 tracking-tight font-manrope">
              Transforming Trading
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
                Through Innovation
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-muted-foreground max-w-4xl mx-auto mb-8 leading-relaxed">
              We're not just another trading platform. We're your partners in building a 
              <strong className="text-foreground"> profitable algorithmic trading career</strong> with 
              cutting-edge technology and proven strategies.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-gradient-to-r from-primary to-secondary hover:opacity-90 text-primary-foreground px-8 py-4 text-lg font-semibold shadow-lg">
                Start Your Journey
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button variant="outline" size="lg" className="border-2 border-border hover:border-primary px-8 py-4 text-lg font-semibold">
                Watch Our Story
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-background relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center group">
                <div className="w-16 h-16 bg-gradient-to-br from-primary to-secondary rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <stat.icon className="h-8 w-8 text-primary-foreground" />
                </div>
                <div className="text-3xl md:text-4xl font-black text-foreground mb-2 font-manrope">{stat.number}</div>
                <div className="text-muted-foreground font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-24 bg-gradient-to-br from-surface-bright to-primary-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-black text-foreground mb-6 font-manrope">Our Story</h2>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Born from the frustration of complex trading systems and the desire to make 
                algorithmic trading accessible to everyone.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-16 items-center">
              <div className="space-y-6">
                <p className="text-lg text-muted-foreground leading-relaxed">
                  In 2020, our founders Archit Mittal and Hasmukh Prajapati recognized a critical gap in the trading world. 
                  While institutional traders had access to sophisticated algorithmic tools, retail traders were left behind with 
                  outdated platforms and limited resources.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Today, we've empowered over 5,000 traders with automated strategies that work 24/7, 
                  combining cutting-edge technology with comprehensive education to create a new generation of successful algorithmic traders.
                </p>
              </div>
              
              <Card className="p-8 bg-card shadow-xl border-border">
                <CardContent className="p-0">
                  <h3 className="text-2xl font-bold text-foreground mb-4 font-manrope">Why We Started</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <CheckCircle className="h-6 w-6 text-secondary mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-muted-foreground">Make algorithmic trading accessible to everyone</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-6 w-6 text-secondary mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-muted-foreground">Bridge the gap between retail and institutional trading</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-6 w-6 text-secondary mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-muted-foreground">Provide education alongside powerful tools</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Mission, Vision, Values */}
      <section className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black text-foreground mb-6 font-manrope">What Drives Us</h2>
            <p className="text-xl text-muted-foreground">Our core principles that guide every decision we make</p>
          </div>
          
          <div className="grid lg:grid-cols-3 gap-8">
            {teamValues.map((value, index) => (
              <Card key={index} className="relative group hover:shadow-2xl transition-all duration-300 border-border bg-card hover:bg-hover-background">
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-gradient-to-br from-primary to-secondary rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <value.icon className="h-8 w-8 text-primary-foreground" />
                  </div>
                  <h3 className="text-2xl font-bold text-foreground mb-4 font-manrope">{value.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-24 bg-gradient-to-br from-foreground to-primary text-primary-foreground">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black mb-6 font-manrope">Our Journey</h2>
            <p className="text-xl text-primary-foreground/80">Milestones that shaped our path to success</p>
          </div>
          
          <div className="relative pb-32 pt-8">
            {/* Horizontal timeline line */}
            <div className="absolute top-1/2 left-4 right-4 h-1 bg-gradient-to-r from-primary to-secondary transform -translate-y-1/2 z-0"></div>
            
            {/* Timeline items container */}
            <div className="flex items-center justify-between w-full px-4 relative z-10">
              {[
                {
                  year: "2020",
                  title: "Company Founded",
                  description: "Started with a vision to revolutionize the industry"
                },
                {
                  year: "2021",
                  title: "First Major Client",
                  description: "Secured our breakthrough partnership that changed everything"
                },
                {
                  year: "2022",
                  title: "Team Expansion",
                  description: "Grew from 5 to 50 talented professionals"
                },
                {
                  year: "2023",
                  title: "Global Reach",
                  description: "Expanded operations to 15 countries worldwide"
                },
                {
                  year: "2024",
                  title: "Innovation Award",
                  description: "Recognized for outstanding technological advancement"
                }
              ].map((milestone, index) => (
                <div key={index} className="flex flex-col items-center relative group">
                  {/* Timeline dot */}
                  <div className="w-4 h-4 bg-secondary rounded-full border-4 border-primary-foreground relative z-20 mb-8 group-hover:scale-125 transition-transform"></div>
                  
                  {/* Card positioned above the timeline */}
                  <div className="absolute top-8 transform translate-y-2 w-48 -translate-x-1/2">
                    <div className="bg-primary-foreground/10 backdrop-blur-sm border border-primary-foreground/20 hover:bg-primary-foreground/20 transition-all rounded-lg">
                      <div className="p-3 text-center">
                        <div className="text-xl font-black text-secondary mb-1 font-manrope">{milestone.year}</div>
                        <h3 className="text-sm font-bold mb-1 text-primary-foreground leading-tight">{milestone.title}</h3>
                        <p className="text-primary-foreground/80 text-xs leading-relaxed">{milestone.description}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Mobile responsive version */}
          <div className="lg:hidden mt-8">
            <div className="space-y-8">
              {[
                {
                  year: "2020",
                  title: "Company Founded",
                  description: "Started with a vision to revolutionize the industry"
                },
                {
                  year: "2021",
                  title: "First Major Client",
                  description: "Secured our breakthrough partnership that changed everything"
                },
                {
                  year: "2022",
                  title: "Team Expansion",
                  description: "Grew from 5 to 50 talented professionals"
                },
                {
                  year: "2023",
                  title: "Global Reach",
                  description: "Expanded operations to 15 countries worldwide"
                },
                {
                  year: "2024",
                  title: "Innovation Award",
                  description: "Recognized for outstanding technological advancement"
                }
              ].map((milestone, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <div className="w-4 h-4 bg-secondary rounded-full border-2 border-primary-foreground mt-2 flex-shrink-0"></div>
                  <div className="bg-primary-foreground/10 backdrop-blur-sm border border-primary-foreground/20 hover:bg-primary-foreground/20 transition-all rounded-lg flex-1">
                    <div className="p-4">
                      <div className="text-2xl font-black text-secondary mb-1 font-manrope">{milestone.year}</div>
                      <h3 className="text-lg font-bold mb-1 text-primary-foreground">{milestone.title}</h3>
                      <p className="text-primary-foreground/80 text-sm">{milestone.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Achievements */}
      <section className="py-24 bg-gradient-to-br from-surface-bright to-secondary-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black text-foreground mb-6 font-manrope">Our Achievements</h2>
            <p className="text-xl text-muted-foreground">Recognition and milestones we're proud of</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {achievements.map((achievement, index) => (
              <Card key={index} className="p-6 bg-card shadow-lg hover:shadow-xl transition-shadow border-border">
                <CardContent className="p-0 flex items-start">
                  <Award className="h-6 w-6 text-accent mr-3 mt-1 flex-shrink-0" />
                  <span className="text-foreground font-medium">{achievement}</span>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

    {/* Team Section */}
    <section className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black text-foreground mb-6 font-manrope">Meet Our Founders</h2>
          <p className="text-xl text-muted-foreground">The visionaries who started it all</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Archit Mittal */}
          <Card className="group hover:shadow-2xl transition-all duration-300 border-border overflow-hidden">
            <CardContent className="p-0">
              <div className="bg-gradient-to-br from-primary to-secondary p-8 text-primary-foreground">
                <div className="flex items-center mb-6">
                  <div className="w-20 h-20 bg-primary-foreground/20 backdrop-blur-sm rounded-full flex items-center justify-center mr-6">
                    <User className="h-10 w-10 text-primary-foreground" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold font-manrope">Archit Mittal</h3>
                    <p className="text-primary-foreground/80 font-medium">Co-Founder & Lead Algo Trader</p>
                  </div>
                </div>
              </div>

              <div className="p-8 space-y-6">
                <div>
                  <h4 className="text-lg font-bold text-foreground mb-3">Expertise & Background</h4>
                  <p className="text-muted-foreground leading-relaxed">
                    NISM certified derivatives specialist with deep expertise in automated intraday options trading. 
                    Passionate about creating strategies that work while you sleep.
                  </p>
                </div>

                <div>
                  <h4 className="text-lg font-bold text-foreground mb-3">Philosophy</h4>
                  <blockquote className="text-muted-foreground italic border-l-4 border-primary pl-4">
                    "Every trader deserves access to institutional-grade automation. My mission is to make 
                    that happen through education and technology."
                  </blockquote>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Hasmukh Prajapati */}
          <Card className="group hover:shadow-2xl transition-all duration-300 border-border overflow-hidden">
            <CardContent className="p-0">
              <div className="bg-gradient-to-br from-secondary to-accent p-8 text-primary-foreground">
                <div className="flex items-center mb-6">
                  <div className="w-20 h-20 bg-primary-foreground/20 backdrop-blur-sm rounded-full flex items-center justify-center mr-6">
                    <User className="h-10 w-10 text-primary-foreground" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold font-manrope">Hasmukh Prajapati</h3>
                    <p className="text-primary-foreground/80 font-medium">Co-Founder & Strategic Advisor</p>
                  </div>
                </div>
              </div>

              <div className="p-8 space-y-6">
                <div>
                  <h4 className="text-lg font-bold text-foreground mb-3">Role & Vision</h4>
                  <p className="text-muted-foreground leading-relaxed">
                    Strategic mastermind behind our growth and community building efforts. 
                    Focuses on making algorithmic trading education accessible and practical for everyone.
                  </p>
                </div>

                <div>
                  <h4 className="text-lg font-bold text-foreground mb-3">Mission</h4>
                  <blockquote className="text-muted-foreground italic border-l-4 border-secondary pl-4">
                    "Success in trading isn't just about profit—it's about building a sustainable, 
                    stress-free approach that scales with your ambitions."
                  </blockquote>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>

                
    {/* CTA Section */}
    <section className="py-32 bg-gradient-to-br from-gray-900 to-indigo-900 text-white relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-blue-500/20 via-transparent to-transparent"></div>
      <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl"></div>
      <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-indigo-500/10 rounded-full blur-3xl"></div>
      
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center">
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-black mb-8 bg-gradient-to-r from-white via-blue-100 to-indigo-200 bg-clip-text text-transparent">
            Ready to Transform Your Trading?
          </h2>
          
          <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto mb-4 leading-relaxed">
            Join thousands of successful traders who've automated their way to consistent profits
          </p>
          
          <p className="text-lg text-blue-200 mb-12 font-medium">
            Your automated trading journey starts with a single click
          </p>
          
          <div className="max-w-2xl mx-auto">
            <div className="bg-white/5 backdrop-blur-sm rounded-3xl p-8 md:p-12 border border-white/10 shadow-2xl">
              <div className="space-y-8">
                {/* Main CTA Button */}
                <Button 
                  size="lg" 
                  className="w-full bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 text-white font-bold py-6 px-8 text-xl shadow-2xl transform hover:scale-105 transition-all duration-300 border-0"
                  onClick={() => window.location.href = "https://app.automatealgos.in/authentication/side-register"}
                >
                  Get Started Free
                  <ArrowRight className="ml-3 h-6 w-6" />
                </Button>
                
                {/* Trust indicators */}
                <div className="flex flex-col sm:flex-row justify-center items-center gap-4 text-sm text-gray-400">
                  <div className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-400 mr-2" />
                    No credit card required
                  </div>
                  <div className="hidden sm:block w-1 h-1 bg-gray-500 rounded-full"></div>
                  <div className="flex items-center">
                    <Shield className="h-4 w-4 text-green-400 mr-2" />
                    30-day money-back guarantee
                  </div>
                </div>
                
                {/* Stats or social proof */}
                <div className="pt-6 border-t border-white/10">
                  <div className="grid grid-cols-3 gap-4 text-center">
                    <div>
                      <p className="text-2xl font-bold text-white">10K+</p>
                      <p className="text-xs text-gray-400">Active Traders</p>
                    </div>
                    <div>
                      <p className="text-2xl font-bold text-white">₹50Cr+</p>
                      <p className="text-xs text-gray-400">Trades Automated</p>
                    </div>
                    <div>
                      <p className="text-2xl font-bold text-white">24/7</p>
                      <p className="text-xs text-gray-400">Support</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

      <Footer />
    </div>
  );
};

export default About;