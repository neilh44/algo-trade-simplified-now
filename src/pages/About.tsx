import { User, Lightbulb, GraduationCap, Shield, Mail, MapPin, Phone, Award, TrendingUp, Users, BookOpen, Star, CheckCircle, ArrowRight, Target, Eye, Heart, Zap, Trophy, Clock, DollarSign } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useState, useEffect } from "react";

const About = () => {
  const [isVisible, setIsVisible] = useState({});
  const [animatedStats, setAnimatedStats] = useState({ users: 0, rate: 0, strategies: 0 });

  // Animate stats on mount
  useEffect(() => {
    const timer = setTimeout(() => {
      setAnimatedStats({ users: 5000, rate: 98, strategies: 50 });
    }, 500);
    return () => clearTimeout(timer);
  }, []);

  const stats = [
    { number: `${animatedStats.users.toLocaleString()}+`, label: "Happy Traders", icon: Users, color: "from-matdash-primary to-matdash-secondary" },
    { number: `${animatedStats.rate}%`, label: "Success Rate", icon: TrendingUp, color: "from-green-500 to-emerald-600" },
    { number: `${animatedStats.strategies}+`, label: "Trading Strategies", icon: BookOpen, color: "from-matdash-secondary to-teal-600" },
    { number: "24/7", label: "Support Available", icon: Shield, color: "from-matdash-primary to-violet-600" }
  ];

  const achievements = [
    { text: "NISM Certified Training Programs", icon: Award },
    { text: "Featured in Leading Trading Publications", icon: Trophy },
    { text: "Winner of Best Algo Trading Platform 2024", icon: Star },
    { text: "Trusted by 5000+ Active Traders", icon: Users },
    { text: "99.9% Platform Uptime Guarantee", icon: Shield },
    { text: "ISO 27001 Security Certified", icon: CheckCircle }
  ];

  const teamValues = [
    {
      icon: Target,
      title: "Mission Driven",
      description: "Democratizing algorithmic trading for everyone, regardless of technical background.",
      gradient: "from-matdash-primary to-violet-600"
    },
    {
      icon: Eye,
      title: "Visionary Approach", 
      description: "Creating the future where every trader has institutional-grade tools.",
      gradient: "from-matdash-secondary to-teal-600"
    },
    {
      icon: Heart,
      title: "Community First",
      description: "Success measured by community growth and long-term member value.",
      gradient: "from-matdash-primary to-matdash-secondary"
    }
  ];

  const features = [
    { icon: Zap, title: "Lightning Fast", desc: "Execute trades in milliseconds" },
    { icon: Shield, title: "Bank-Grade Security", desc: "Your funds are always protected" },
    { icon: Clock, title: "24/7 Automation", desc: "Trade while you sleep" },
    { icon: DollarSign, title: "Maximize Profits", desc: "Optimize every trading opportunity" }
  ];

  return (
    <div className="min-h-screen bg-background overflow-hidden font-manrope">
      <Header />
      
      {/* Animated Background */}
      <div className="fixed inset-0 -z-10">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-matdash-primary-light rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse"></div>
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-matdash-secondary-light rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse delay-1000"></div>
        <div className="absolute bottom-0 left-1/3 w-96 h-96 bg-matdash-primary-light rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse delay-2000"></div>
      </div>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20">
        <div className="absolute inset-0 bg-gradient-to-br from-matdash-primary via-matdash-secondary to-matdash-primary opacity-5"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center">
            <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-matdash-primary to-matdash-secondary text-white rounded-full text-sm font-semibold mb-8 shadow-2xl animate-bounce">
              <Star className="w-5 h-5 mr-2 animate-spin" />
              Trusted by 5000+ Algorithmic Traders
            </div>
            
            <h1 className="text-6xl md:text-8xl font-extrabold text-text-primary mb-8 tracking-tight">
              <span className="block">Transforming</span>
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-matdash-primary via-matdash-secondary to-matdash-primary animate-pulse">
                Trading Forever
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-text-secondary max-w-4xl mx-auto mb-12 leading-relaxed font-medium">
              Join the <strong className="text-matdash-primary">algorithmic revolution</strong> and build your
              <strong className="text-matdash-secondary"> profitable automated trading empire</strong> today.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16">
              <Button
                size="lg"
                className="bg-gradient-to-r from-matdash-primary to-matdash-secondary hover:from-matdash-primary hover:to-matdash-secondary hover:opacity-90 text-white px-12 py-6 text-xl font-semibold shadow-2xl transform hover:scale-105 transition-all duration-300 rounded-2xl"
                onClick={() => window.location.href = "https://app.automatealgos.in/authentication/side-register"}
              >
                Start Free Today
                <ArrowRight className="ml-3 h-6 w-6" />
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="border-2 border-matdash-primary text-matdash-primary hover:bg-matdash-primary-light px-12 py-6 text-xl font-semibold rounded-2xl"
              >
                Watch Demo
              </Button>
            </div>

            {/* Feature Highlights */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
              {features.map((feature, index) => (
                <div key={index} className="text-center p-4 bg-surface-container backdrop-blur-sm rounded-2xl shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 border border-border">
                  <feature.icon className="h-8 w-8 text-matdash-primary mx-auto mb-2" />
                  <h4 className="font-semibold text-text-primary text-sm">{feature.title}</h4>
                  <p className="text-xs text-text-secondary">{feature.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Animated Stats */}
      <section className="py-16 bg-surface-bright backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center group cursor-pointer">
                <div className={`w-20 h-20 bg-gradient-to-r ${stat.color} rounded-3xl flex items-center justify-center mx-auto mb-4 group-hover:scale-125 transition-all duration-500 shadow-2xl`}>
                  <stat.icon className="h-10 w-10 text-white" />
                </div>
                <div className="text-4xl md:text-5xl font-extrabold text-text-primary mb-2 group-hover:text-matdash-primary transition-colors">
                  {stat.number}
                </div>
                <div className="text-text-secondary font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-24 bg-gradient-to-br from-matdash-primary-light to-matdash-secondary-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-5xl md:text-6xl font-extrabold text-text-primary mb-6">Our Journey</h2>
              <p className="text-2xl text-text-secondary leading-relaxed max-w-3xl mx-auto font-medium">
                From frustrated traders to algorithmic revolution leaders
              </p>
            </div>
            
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div className="space-y-8">
                <div className="bg-surface-container p-8 rounded-3xl shadow-2xl transform hover:scale-105 transition-all duration-300 border border-border">
                  <h3 className="text-3xl font-bold text-text-primary mb-4">The Problem We Solved</h3>
                  <p className="text-lg text-text-secondary leading-relaxed">
                    In 2020, retail traders were stuck with outdated platforms while institutions enjoyed sophisticated algorithmic tools. We changed that forever.
                  </p>
                </div>
                
                <div className="bg-surface-container p-8 rounded-3xl shadow-2xl transform hover:scale-105 transition-all duration-300 border border-border">
                  <h3 className="text-3xl font-bold text-text-primary mb-4">Today's Impact</h3>
                  <p className="text-lg text-text-secondary leading-relaxed">
                    5,000+ traders now profit with our 24/7 automated strategies, creating a new generation of successful algorithmic traders.
                  </p>
                </div>
              </div>
              
              <Card className="p-10 bg-gradient-to-br from-matdash-primary to-matdash-secondary text-white shadow-2xl transform hover:scale-105 transition-all duration-300 border-0">
                <CardContent className="p-0">
                  <h3 className="text-3xl font-bold mb-6">Mission Accomplished</h3>
                  <div className="space-y-4">
                    {["Algorithmic trading for everyone", "Bridge retail-institutional gap", "Education + powerful tools", "24/7 automated profits"].map((item, i) => (
                      <div key={i} className="flex items-center">
                        <CheckCircle className="h-6 w-6 mr-4 text-green-300" />
                        <span className="text-lg font-medium">{item}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-extrabold text-text-primary mb-6">What Drives Us</h2>
            <p className="text-2xl text-text-secondary font-medium">Core principles behind every decision</p>
          </div>
          
          <div className="grid lg:grid-cols-3 gap-10">
            {teamValues.map((value, index) => (
              <Card key={index} className="group hover:shadow-2xl transition-all duration-500 border-border bg-surface-container transform hover:-translate-y-4">
                <CardContent className="p-10">
                  <div className={`w-20 h-20 bg-gradient-to-r ${value.gradient} rounded-3xl flex items-center justify-center mb-6 group-hover:scale-125 transition-transform duration-500 shadow-xl`}>
                    <value.icon className="h-10 w-10 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-text-primary mb-4 group-hover:text-matdash-primary transition-colors">{value.title}</h3>
                  <p className="text-text-secondary leading-relaxed text-lg">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements */}
      <section className="py-24 bg-gradient-to-br from-matdash-secondary-light to-matdash-primary-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-extrabold text-text-primary mb-6">Proud Achievements</h2>
            <p className="text-2xl text-text-secondary font-medium">Recognition that matters</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {achievements.map((achievement, index) => (
              <Card key={index} className="p-8 bg-surface-container hover:shadow-2xl transition-all duration-300 border-border transform hover:-translate-y-2">
                <CardContent className="p-0 flex items-start">
                  <achievement.icon className="h-8 w-8 text-matdash-primary mr-4 mt-1 flex-shrink-0" />
                  <span className="text-text-primary font-medium text-lg leading-relaxed">{achievement.text}</span>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-extrabold text-text-primary mb-6">Meet The Visionaries</h2>
            <p className="text-2xl text-text-secondary font-medium">Leaders who revolutionized trading</p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-16 max-w-6xl mx-auto">
            {/* Archit Mittal */}
            <Card className="group hover:shadow-2xl transition-all duration-500 border-0 overflow-hidden transform hover:scale-105">
              <CardContent className="p-0">
                <div className="bg-gradient-to-br from-matdash-primary to-matdash-secondary p-10 text-white">
                  <div className="flex items-center mb-6">
                    <div className="w-24 h-24 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center mr-6 group-hover:scale-110 transition-transform">
                      <User className="h-12 w-12 text-white" />
                    </div>
                    <div>
                      <h3 className="text-3xl font-bold">Archit Mittal</h3>
                      <p className="text-white/90 text-lg font-medium">Co-Founder & Lead Algo Trader</p>
                    </div>
                  </div>
                </div>
                
                <div className="p-10 space-y-6 bg-gradient-to-br from-matdash-primary-light to-surface-container">
                  <div>
                    <h4 className="text-xl font-bold text-text-primary mb-3">Trading Expertise</h4>
                    <p className="text-text-secondary leading-relaxed text-lg">
                      NISM certified derivatives specialist revolutionizing automated intraday options trading.
                    </p>
                  </div>
                  <blockquote className="text-text-primary italic text-lg border-l-4 border-matdash-primary pl-6 bg-matdash-primary-light p-4 rounded-r-2xl">
                    "Every trader deserves institutional-grade automation."
                  </blockquote>
                </div>
              </CardContent>
            </Card>

            {/* Hasmukh Prajapati */}
            <Card className="group hover:shadow-2xl transition-all duration-500 border-0 overflow-hidden transform hover:scale-105">
              <CardContent className="p-0">
                <div className="bg-gradient-to-br from-matdash-secondary to-matdash-primary p-10 text-white">
                  <div className="flex items-center mb-6">
                    <div className="w-24 h-24 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center mr-6 group-hover:scale-110 transition-transform">
                      <User className="h-12 w-12 text-white" />
                    </div>
                    <div>
                      <h3 className="text-3xl font-bold">Hasmukh Prajapati</h3>
                      <p className="text-white/90 text-lg font-medium">Co-Founder & Strategic Advisor</p>
                    </div>
                  </div>
                </div>
                
                <div className="p-10 space-y-6 bg-gradient-to-br from-matdash-secondary-light to-surface-container">
                  <div>
                    <h4 className="text-xl font-bold text-text-primary mb-3">Strategic Vision</h4>
                    <p className="text-text-secondary leading-relaxed text-lg">
                      Growth mastermind making algorithmic trading accessible and profitable for everyone.
                    </p>
                  </div>
                  <blockquote className="text-text-primary italic text-lg border-l-4 border-matdash-secondary pl-6 bg-matdash-secondary-light p-4 rounded-r-2xl">
                    "Success is building sustainable, stress-free trading."
                  </blockquote>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 bg-gradient-to-br from-gray-900 via-matdash-primary to-matdash-secondary text-white relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-matdash-primary/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-matdash-secondary/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>
        
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center">
            <h2 className="text-6xl md:text-7xl font-extrabold mb-8 bg-gradient-to-r from-white via-matdash-primary to-matdash-secondary bg-clip-text text-transparent">
              Start Your Success Story
            </h2>
            <p className="text-2xl md:text-3xl text-blue-100 max-w-4xl mx-auto mb-6 leading-relaxed font-medium">
              Join thousands making <strong className="text-white">consistent profits</strong> on autopilot
            </p>
            <p className="text-xl text-purple-200 mb-12 font-medium">
              Your financial freedom is one click away
            </p>
            
            <div className="max-w-2xl mx-auto">
              <div className="bg-white/10 backdrop-blur-xl rounded-3xl p-12 border border-white/20 shadow-2xl">
                <Button
                  size="lg"
                  className="w-full bg-gradient-to-r from-matdash-primary via-matdash-secondary to-matdash-primary hover:from-matdash-primary hover:via-matdash-secondary hover:to-matdash-primary hover:opacity-90 text-white font-bold py-8 px-12 text-2xl shadow-2xl transform hover:scale-105 transition-all duration-300 rounded-2xl animate-pulse"
                  onClick={() => window.location.href = "https://app.automatealgos.in/authentication/side-register"}
                >
                  Get Started FREE Now
                  <ArrowRight className="ml-4 h-8 w-8" />
                </Button>
                
                <div className="grid grid-cols-3 gap-6 mt-10 pt-8 border-t border-white/20">
                  <div className="text-center">
                    <p className="text-3xl font-extrabold text-white">10K+</p>
                    <p className="text-sm text-blue-200">Success Stories</p>
                  </div>
                  <div className="text-center">
                    <p className="text-3xl font-extrabold text-white">₹50Cr+</p>
                    <p className="text-sm text-purple-200">Automated</p>
                  </div>
                  <div className="text-center">
                    <p className="text-3xl font-extrabold text-white">24/7</p>
                    <p className="text-sm text-pink-200">Profits</p>
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