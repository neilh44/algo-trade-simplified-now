import { User, Lightbulb, GraduationCap, Shield, Mail, MapPin, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary/10 via-secondary/5 to-surface-bright pt-32 pb-20">
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6 font-manrope">
              Empowering Traders with{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
                Smart Technology
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto font-normal">
              Your trusted partner in algorithmic trading education and solutions
            </p>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-20 bg-surface-bright">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8 font-manrope">Our Journey</h2>
            <p className="text-lg text-muted-foreground leading-relaxed font-normal">
              Founded with a vision to democratize algorithmic trading, we bridge the gap between complex 
              financial markets and everyday traders. Our platform combines cutting-edge technology with 
              educational excellence to help you master the art of automated trading.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            <Card className="p-8 border-primary/20">
              <CardContent className="p-0">
                <h3 className="text-2xl font-bold text-foreground mb-4">Our Mission</h3>
                <p className="text-muted-foreground leading-relaxed">
                  To provide innovative, accessible, and reliable algorithmic trading solutions that 
                  empower traders at every level to achieve their financial goals.
                </p>
              </CardContent>
            </Card>
            
            <Card className="p-8 border-secondary/20">
              <CardContent className="p-0">
                <h3 className="text-2xl font-bold text-foreground mb-4">Our Vision</h3>
                <p className="text-muted-foreground leading-relaxed">
                  To become the leading platform where technology meets trading expertise, creating 
                  a community of successful algorithmic traders worldwide.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Our Values Section */}
      <section className="py-20 bg-card/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Our Values</h2>
            <p className="text-lg text-muted-foreground">The principles that guide everything we do</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center p-8 hover:shadow-lg transition-shadow">
              <CardContent className="p-0">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Lightbulb className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-4">Innovation</h3>
                <p className="text-muted-foreground">
                  Constantly evolving our platform with the latest trading technologies and market insights
                </p>
              </CardContent>
            </Card>

            <Card className="text-center p-8 hover:shadow-lg transition-shadow">
              <CardContent className="p-0">
                <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <GraduationCap className="h-8 w-8 text-secondary" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-4">Education</h3>
                <p className="text-muted-foreground">
                  Committed to providing comprehensive learning resources and expert guidance
                </p>
              </CardContent>
            </Card>

            <Card className="text-center p-8 hover:shadow-lg transition-shadow">
              <CardContent className="p-0">
                <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Shield className="h-8 w-8 text-accent" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-4">Trust</h3>
                <p className="text-muted-foreground">
                  Building long-term relationships through transparency, reliability, and proven results
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* What Sets Us Apart */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">What Sets Us Apart</h2>
            <p className="text-lg text-muted-foreground">Why traders choose our platform</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <h3 className="text-lg font-semibold text-foreground mb-3">Expert Team</h3>
              <p className="text-muted-foreground">Our team combines years of trading experience with technical expertise</p>
            </div>
            <div className="text-center">
              <h3 className="text-lg font-semibold text-foreground mb-3">Proven Strategies</h3>
              <p className="text-muted-foreground">Battle-tested algorithms and risk management systems</p>
            </div>
            <div className="text-center">
              <h3 className="text-lg font-semibold text-foreground mb-3">Community Focus</h3>
              <p className="text-muted-foreground">A supportive community of traders sharing knowledge and experiences</p>
            </div>
            <div className="text-center">
              <h3 className="text-lg font-semibold text-foreground mb-3">Continuous Learning</h3>
              <p className="text-muted-foreground">Regular updates, webinars, and educational content</p>
            </div>
          </div>
        </div>
      </section>

      {/* Founders Section */}
      <section className="py-20 bg-card/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Meet Our Founders</h2>
            <p className="text-lg text-muted-foreground">The visionaries behind Smart Wave Academy</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Archit Mittal */}
            <Card className="p-8 hover:shadow-lg transition-shadow">
              <CardContent className="p-0">
                <div className="text-center mb-6">
                  <div className="w-24 h-24 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <User className="h-12 w-12 text-primary" />
                  </div>
                  <h3 className="text-2xl font-bold text-foreground">Archit Mittal</h3>
                  <p className="text-primary font-semibold">Co-Founder & Lead Derivatives Algo Trader</p>
                </div>
                
                <div className="space-y-4 text-sm">
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">Professional Background</h4>
                    <p className="text-muted-foreground">Passionate Derivatives Algo Trader with expertise in automated trading strategies</p>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">Education</h4>
                    <p className="text-muted-foreground">National Institute of Securities Markets (NISM) certified</p>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">Specialization</h4>
                    <p className="text-muted-foreground">Intraday options automation, algorithmic trading strategies, and risk management</p>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">Mission</h4>
                    <p className="text-muted-foreground italic">"Empowering both beginners and intermediate traders to optimize their trading through automation"</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Hasmukh Prajapati */}
            <Card className="p-8 hover:shadow-lg transition-shadow">
              <CardContent className="p-0">
                <div className="text-center mb-6">
                  <div className="w-24 h-24 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <User className="h-12 w-12 text-secondary" />
                  </div>
                  <h3 className="text-2xl font-bold text-foreground">Hasmukh Prajapati</h3>
                  <p className="text-secondary font-semibold">Co-Founder & Strategic Advisor</p>
                </div>
                
                <div className="space-y-4 text-sm">
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">Professional Background</h4>
                    <p className="text-muted-foreground">Brings diverse expertise to the algorithmic trading education space</p>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">Focus</h4>
                    <p className="text-muted-foreground">Strategic planning and business development for Smart Wave Academy</p>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">Vision</h4>
                    <p className="text-muted-foreground italic">"Democratizing access to professional-grade trading education and tools"</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Get In Touch</h2>
            <p className="text-lg text-muted-foreground">Ready to start your algorithmic trading journey?</p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <div className="text-center">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Mail className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">Email</h3>
                <p className="text-muted-foreground">support@automatealgos.in</p>
              </div>
              
              <div className="text-center">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Phone className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">Phone</h3>
                <p className="text-muted-foreground">+91 70166 43084</p>
              </div>
              
              <div className="text-center">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <MapPin className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">Location</h3>
                <p className="text-muted-foreground">Gandhinagar, India</p>
              </div>
            </div>
            
            <div className="text-center">
                <Button 
                size="lg" 
                className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold"
                onClick={() => window.location.href = "https://app.automatealgos.in/authentication/side-register"}
              >
                Start Your Journey Today
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;