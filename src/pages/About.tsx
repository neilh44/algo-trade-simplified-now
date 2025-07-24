import { User, Lightbulb, GraduationCap, Shield, Mail, MapPin, Phone, Award, TrendingUp, Users, BookOpen, Star, CheckCircle, ArrowRight, Target, Eye, Heart, Zap, Trophy, Clock, DollarSign, LucideIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AnimatedAchievements from "@/components/AnimatedAchievements";
import { useState, useEffect, useRef } from "react";

interface Stat {
  number: string;
  label: string;
  icon: LucideIcon;
  color: string;
  targetValue: number;
  suffix: string;
}

interface TeamValue {
  icon: LucideIcon;
  title: string;
  description: string;
  gradient: string;
}

interface Feature {
  icon: LucideIcon;
  title: string;
  desc: string;
}

interface AnimatedStats {
  users: number;
  rate: number;
  strategies: number;
}

const About: React.FC = () => {
  const [isVisible, setIsVisible] = useState<{[key: string]: boolean}>({});
  const [animatedStats, setAnimatedStats] = useState<AnimatedStats>({ users: 0, rate: 0, strategies: 0 });
  const [hasAnimated, setHasAnimated] = useState(false);
  const statsRef = useRef<HTMLDivElement>(null);

  // Animate stats when section comes into view
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimated) {
            setHasAnimated(true);
            // Animate users count
            let userCount = 0;
            const userTimer = setInterval(() => {
              userCount += 125;
              if (userCount >= 5000) {
                userCount = 5000;
                clearInterval(userTimer);
              }
              setAnimatedStats(prev => ({ ...prev, users: userCount }));
            }, 50);

            // Animate success rate
            let rateCount = 0;
            const rateTimer = setInterval(() => {
              rateCount += 2;
              if (rateCount >= 98) {
                rateCount = 98;
                clearInterval(rateTimer);
              }
              setAnimatedStats(prev => ({ ...prev, rate: rateCount }));
            }, 50);

            // Animate strategies count
            let strategyCount = 0;
            const strategyTimer = setInterval(() => {
              strategyCount += 1;
              if (strategyCount >= 50) {
                strategyCount = 50;
                clearInterval(strategyTimer);
              }
              setAnimatedStats(prev => ({ ...prev, strategies: strategyCount }));
            }, 80);
          }
        });
      },
      { threshold: 0.3 }
    );

    if (statsRef.current) {
      observer.observe(statsRef.current);
    }

    return () => observer.disconnect();
  }, [hasAnimated]);

  const stats: Stat[] = [
    { 
      number: `${animatedStats.users.toLocaleString()}+`, 
      label: "Happy Traders", 
      icon: Users, 
      color: "from-blue-500 to-teal-500",
      targetValue: 5000,
      suffix: "+"
    },
    { 
      number: `${animatedStats.rate}%`, 
      label: "Success Rate", 
      icon: TrendingUp, 
      color: "from-green-500 to-emerald-600",
      targetValue: 98,
      suffix: "%"
    },
    { 
      number: `${animatedStats.strategies}+`, 
      label: "Trading Strategies", 
      icon: BookOpen, 
      color: "from-teal-500 to-teal-600",
      targetValue: 50,
      suffix: "+"
    },
    { 
      number: "24/7", 
      label: "Support Available", 
      icon: Shield, 
      color: "from-blue-500 to-violet-600",
      targetValue: 0,
      suffix: ""
    }
  ];

  const teamValues: TeamValue[] = [
    {
      icon: Target,
      title: "Mission Driven",
      description: "Democratizing algorithmic trading for everyone, regardless of technical background.",
      gradient: "from-blue-500 to-violet-600"
    },
    {
      icon: Eye,
      title: "Visionary Approach", 
      description: "Creating the future where every trader has institutional-grade tools.",
      gradient: "from-teal-500 to-teal-600"
    },
    {
      icon: Heart,
      title: "Community First",
      description: "Success measured by community growth and long-term member value.",
      gradient: "from-blue-500 to-teal-500"
    }
  ];

  const features: Feature[] = [
    { icon: Zap, title: "Lightning Fast", desc: "Execute trades in milliseconds" },
    { icon: TrendingUp, title: "Smart Analytics", desc: "AI-powered market insights" },
    { icon: Clock, title: "24/7 Automation", desc: "Trade while you sleep" },
    { icon: DollarSign, title: "Maximize Trade", desc: "Optimize every trading opportunity" }
  ];

  const missionItems: string[] = [
    "Algorithmic trading for everyone", 
    "Bridge retail-institutional gap", 
    "Education + powerful tools", 
    "24/7 automated trading"
  ];

  return (
    <div className="min-h-screen bg-background overflow-hidden font-manrope">
      <Header />
      
      {/* Animated Background */}
      <div className="fixed inset-0 -z-10">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse"></div>
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-teal-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse delay-1000"></div>
        <div className="absolute bottom-0 left-1/3 w-96 h-96 bg-blue-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse delay-2000"></div>
      </div>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500 via-teal-500 to-blue-500 opacity-5"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center">
            <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-blue-500 to-teal-500 text-white rounded-full text-sm font-medium mb-8 shadow-2xl animate-bounce">
              <Star className="w-4 h-4 mr-2 animate-spin" />
              Trusted by 5000+ Algorithmic Traders
            </div>

            <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6 tracking-tight leading-tight">
              <span className="block">Transforming</span>
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-teal-500 to-blue-500 animate-pulse py-2">
                Trading Forever
              </span>
            </h1>
            
            <p className="text-lg md:text-xl text-muted-foreground max-w-4xl mx-auto mb-10 leading-relaxed">
              Join the <strong className="text-blue-500">algorithmic revolution</strong> and build your
              <strong className="text-teal-500">  automated trading empire</strong> today.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Button
                size="lg"
                className="bg-gradient-to-r from-blue-500 to-teal-500 hover:from-blue-600 hover:to-teal-600 text-white px-8 py-4 text-lg font-medium shadow-2xl transform hover:scale-105 transition-all duration-300 rounded-xl"
                onClick={() => window.location.href = "https://app.automatealgos.in/authentication/side-register"}
              >
                Start Free Today
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="border-2 border-blue-500 text-blue-500 hover:bg-blue-50 hover:text-blue-700 px-8 py-4 text-lg font-medium rounded-xl"
                onClick={() => window.open("https://www.youtube.com/watch?v=yjtgComx9xY&feature=youtu.be", "_blank")}
              >
                Watch Demo
              </Button>
            </div>

            {/* Feature Highlights */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
              {features.map((feature, index) => {
                const IconComponent = feature.icon;
                return (
                  <div key={index} className="text-center p-4 bg-card backdrop-blur-sm rounded-xl shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 border border-border">
                    <IconComponent className="h-5 w-5 text-blue-500 mx-auto mb-2" />
                    <h4 className="font-medium text-foreground text-sm">{feature.title}</h4>
                    <p className="text-xs text-muted-foreground">{feature.desc}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Animated Stats - THIS IS THE SECTION YOU WANT ANIMATED */}
      <section ref={statsRef} className="py-16 bg-muted/30 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => {
              const IconComponent = stat.icon;
              return (
                <div key={index} className="text-center group cursor-pointer">
                  <div className={`w-16 h-16 bg-gradient-to-r ${stat.color} rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-all duration-500 shadow-xl group-hover:shadow-2xl`}>
                    <IconComponent className="h-6 w-6 text-white" />
                  </div>
                  <div className="text-3xl md:text-4xl font-bold text-foreground mb-2 group-hover:text-blue-500 transition-colors transform group-hover:scale-105 duration-300">
                    {stat.number}
                  </div>
                  <div className="text-muted-foreground text-sm font-medium">{stat.label}</div>
                  
                  {/* Progress bar effect */}
                  <div className="mt-2 w-full bg-gray-200 rounded-full h-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div 
                      className={`h-1 bg-gradient-to-r ${stat.color} rounded-full transition-all duration-1000 ease-out`}
                      style={{ 
                        width: hasAnimated ? "100%" : "0%"
                      }}
                    ></div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-teal-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Our Journey</h2>
              <p className="text-lg text-muted-foreground leading-relaxed max-w-3xl mx-auto">
                From frustrated traders to algorithmic revolution leaders
              </p>
            </div>
            
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <div className="bg-card p-6 rounded-2xl shadow-xl transform hover:scale-105 transition-all duration-300 border border-border">
                  <h3 className="text-xl font-bold text-foreground mb-3">The Problem We Solved</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    In 2020, retail traders were stuck with outdated platforms while institutions enjoyed sophisticated algorithmic tools. We changed that forever.
                  </p>
                </div>
                
                <div className="bg-card p-6 rounded-2xl shadow-xl transform hover:scale-105 transition-all duration-300 border border-border">
                  <h3 className="text-xl font-bold text-foreground mb-3">Today's Impact</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    5,000+ traders now take advantage with our 24/7 automated strategies, creating a new generation of successful algorithmic traders.
                  </p>
                </div>
              </div>
              
              <Card className="p-8 bg-gradient-to-br from-blue-500 to-teal-500 text-white shadow-2xl transform hover:scale-105 transition-all duration-300 border-0">
                <CardContent className="p-0">
                  <h3 className="text-2xl font-bold mb-4">Mission Accomplished</h3>
                  <div className="space-y-3">
                    {missionItems.map((item, i) => (
                      <div key={i} className="flex items-center">
                        <CheckCircle className="h-4 w-4 mr-3 text-green-300 flex-shrink-0" />
                        <span className="font-medium">{item}</span>
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
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">What Drives Us</h2>
            <p className="text-lg text-muted-foreground">Core principles behind every decision</p>
          </div>
          
          <div className="grid lg:grid-cols-3 gap-8">
            {teamValues.map((value, index) => {
              const IconComponent = value.icon;
              return (
                <Card key={index} className="group hover:shadow-2xl transition-all duration-500 border-border bg-card transform hover:-translate-y-4">
                  <CardContent className="p-8">
                    <div className={`w-14 h-14 bg-gradient-to-r ${value.gradient} rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-500 shadow-lg`}>
                      <IconComponent className="h-6 w-6 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-blue-500 transition-colors">{value.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{value.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Platform Advantages - NO NUMBER ANIMATIONS */}
      <AnimatedAchievements />

      {/* Team */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Meet The Visionaries</h2>
            <p className="text-lg text-muted-foreground">Leaders who revolutionized trading</p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Archit Mittal */}
            <Card className="group hover:shadow-2xl transition-all duration-500 border-0 overflow-hidden transform hover:scale-105">
              <CardContent className="p-0">
                <div className="bg-gradient-to-br from-blue-500 to-teal-500 p-8 text-white">
                  <div className="flex items-center mb-4">
                    <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center mr-4 group-hover:scale-110 transition-transform">
                      <User className="h-7 w-7 text-white" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold">Archit Mittal</h3>
                      <p className="text-white/90 font-medium">Co-Founder & Lead Algo Trader</p>
                    </div>
                  </div>
                </div>
                
                <div className="p-8 space-y-4 bg-gradient-to-br from-blue-50 to-card">
                  <div>
                    <h4 className="text-lg font-bold text-foreground mb-2">Trading Expertise</h4>
                    <p className="text-muted-foreground leading-relaxed">
                      Experienced derivatives specialist revolutionizing automated intraday options trading.
                    </p>
                  </div>
                  <blockquote className="text-foreground italic border-l-4 border-blue-500 pl-4 bg-blue-50 p-3 rounded-r-xl">
                    "Every trader deserves institutional-grade automation."
                  </blockquote>
                </div>
              </CardContent>
            </Card>

            {/* Hasmukh Prajapati */}
            <Card className="group hover:shadow-2xl transition-all duration-500 border-0 overflow-hidden transform hover:scale-105">
              <CardContent className="p-0">
                <div className="bg-gradient-to-br from-teal-500 to-blue-500 p-8 text-white">
                  <div className="flex items-center mb-4">
                    <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center mr-4 group-hover:scale-110 transition-transform">
                      <User className="h-7 w-7 text-white" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold">Hasmukh Prajapati</h3>
                      <p className="text-white/90 font-medium">Co-Founder & Strategic Advisor</p>
                    </div>
                  </div>
                </div>
                
                <div className="p-8 space-y-4 bg-gradient-to-br from-teal-50 to-card">
                  <div>
                    <h4 className="text-lg font-bold text-foreground mb-2">Strategic Vision</h4>
                    <p className="text-muted-foreground leading-relaxed">
                      Growth mastermind making algorithmic trading accessible and profitable for everyone.
                    </p>
                  </div>
                  <blockquote className="text-foreground italic border-l-4 border-teal-500 pl-4 bg-teal-50 p-3 rounded-r-xl">
                    "Success is building sustainable, stress-free trading."
                  </blockquote>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-br from-gray-900 via-blue-500 to-teal-500 text-white relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-teal-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>
        
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white via-blue-200 to-teal-200 bg-clip-text text-transparent">
              Start Your Success Story
            </h2>
            <p className="text-xl md:text-2xl text-blue-100 max-w-4xl mx-auto mb-4 leading-relaxed">
              Join thousands making <strong className="text-white">consistent trading</strong> on autopilot
            </p>
            <p className="text-lg text-purple-200 mb-10">
              Your financial freedom is one click away
            </p>
            
            <div className="max-w-2xl mx-auto">
              <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-8 border border-white/20 shadow-2xl">
              <Button
                  size="lg"
                  className="w-full bg-gradient-to-r from-blue-500 via-teal-500 to-blue-500 hover:from-blue-600 hover:via-teal-600 hover:to-blue-600 text-white font-bold py-6 px-8 text-xl shadow-2xl transform hover:scale-105 transition-all duration-300 rounded-xl"
                  onClick={() => window.location.href = "https://app.automatealgos.in/authentication/side-register"}
                >
                  Get Started FREE Now
                  <ArrowRight className="ml-3 h-6 w-6" />
                </Button>
                
                <div className="grid grid-cols-3 gap-4 mt-8 pt-6 border-t border-white/20">
                  <div className="text-center">
                    <p className="text-2xl font-bold text-white">10K+</p>
                    <p className="text-sm text-blue-200">Success Stories</p>
                  </div>
                  <div className="text-center">
                    <p className="text-2xl font-bold text-white">₹50Cr+</p>
                    <p className="text-sm text-purple-200">Automated</p>
                  </div>
                  <div className="text-center">
                    <p className="text-2xl font-bold text-white">24/7</p>
                    <p className="text-sm text-pink-200">Trading</p>
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