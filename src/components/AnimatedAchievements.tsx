import { Award, Trophy, Star, Users, Shield, CheckCircle, Clock, Target, Zap, TrendingUp, BookOpen } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { useState } from "react";

interface Achievement {
  text: string;
  icon: any;
  color: string;
  hoverColor: string;
  description?: string;
}

const AnimatedAchievements: React.FC = () => {
  const [hoveredAchievement, setHoveredAchievement] = useState<number | null>(null);

  const achievements: Achievement[] = [
    { 
      text: "Live Trading Since 2021", 
      icon: Clock,
      color: "from-blue-500 to-indigo-500",
      hoverColor: "hover:shadow-blue-200",
      description: "3+ years of proven track record"
    },
    { 
      text: "50+ Algorithmic Strategies", 
      icon: BookOpen,
      color: "from-green-500 to-emerald-500",
      hoverColor: "hover:shadow-green-200",
      description: "Comprehensive strategy library"
    },
    { 
      text: "Real-Time Execution Engine", 
      icon: Zap,
      color: "from-purple-500 to-violet-500",
      hoverColor: "hover:shadow-purple-200",
      description: "Lightning-fast trade execution"
    },
    { 
      text: "Trusted by 5000+ Active Traders", 
      icon: Users,
      color: "from-teal-500 to-cyan-500",
      hoverColor: "hover:shadow-teal-200",
      description: "Growing community of successful traders"
    },
    { 
      text: "99.9% Platform Uptime Guarantee", 
      icon: Shield,
      color: "from-orange-500 to-red-500",
      hoverColor: "hover:shadow-orange-200",
      description: "Reliable and stable platform"
    },
    { 
      text: "Advanced Risk Management", 
      icon: Target,
      color: "from-rose-500 to-pink-500",
      hoverColor: "hover:shadow-rose-200",
      description: "Comprehensive risk controls"
    }
  ];

  const handleMouseEnter = (index: number): void => {
    setHoveredAchievement(index);
  };

  const handleMouseLeave = (): void => {
    setHoveredAchievement(null);
  };

  return (
    <section className="py-20 bg-gradient-to-br from-teal-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Platform Advantages</h2>
          <p className="text-lg text-gray-600">Built for serious algorithmic traders</p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {achievements.map((achievement, index) => {
            const IconComponent = achievement.icon;
            const isHovered = hoveredAchievement === index;
            
            return (
              <Card 
                key={index} 
                className={`group relative overflow-hidden bg-white hover:shadow-2xl transition-all duration-500 border-0 transform hover:-translate-y-3 cursor-pointer ${achievement.hoverColor} hover:shadow-xl`}
                onMouseEnter={() => handleMouseEnter(index)}
                onMouseLeave={handleMouseLeave}
              >
                <CardContent className="p-6 relative">
                  {/* Animated background gradient */}
                  <div className={`absolute inset-0 bg-gradient-to-r ${achievement.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}></div>
                  
                  <div className="relative z-10 flex items-start">
                    <div className={`w-12 h-12 bg-gradient-to-r ${achievement.color} rounded-xl flex items-center justify-center mr-4 group-hover:scale-110 group-hover:rotate-12 transition-all duration-500 shadow-lg`}>
                      <IconComponent className="h-6 w-6 text-white" />
                    </div>
                    
                    <div className="flex-1">
                      <h3 className="text-gray-900 font-semibold leading-relaxed mb-2 group-hover:text-gray-900 transition-colors duration-300">
                        {achievement.text}
                      </h3>
                      
                      {achievement.description && (
                        <p className="text-gray-600 text-sm leading-relaxed group-hover:text-gray-600 transition-colors duration-300">
                          {achievement.description}
                        </p>
                      )}
                      
                      {/* Glowing border effect on hover */}
                      {isHovered && (
                        <div className={`absolute -inset-1 bg-gradient-to-r ${achievement.color} rounded-lg blur opacity-25 animate-pulse`}></div>
                      )}
                    </div>
                  </div>
                  
                  {/* Subtle shine effect */}
                  <div className={`absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-0 group-hover:opacity-20 transform -skew-x-12 translate-x-full group-hover:translate-x-[-200%] transition-all duration-1000`}></div>
                </CardContent>
              </Card>
            );
          })}
        </div>
        
        {/* Additional credible stats */}
        <div className="mt-16 text-center">
          <div className="bg-white rounded-2xl p-8 shadow-xl max-w-4xl mx-auto border border-gray-100">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Platform Performance</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="group cursor-pointer">
                <div className="text-3xl font-bold text-blue-600 mb-2 group-hover:scale-110 transition-transform duration-300">
                  ₹4.8 Cr+
                </div>
                <div className="text-gray-600">Daily Trading Volume</div>
                <div className="text-sm text-gray-500 mt-1">Real user activity</div>
              </div>
              <div className="group cursor-pointer">
                <div className="text-3xl font-bold text-green-600 mb-2 group-hover:scale-110 transition-transform duration-300">
                  &lt;200ms
                </div>
                <div className="text-gray-600">Average Execution Time</div>
                <div className="text-sm text-gray-500 mt-1">Industry leading speed</div>
              </div>
              <div className="group cursor-pointer">
                <div className="text-3xl font-bold text-purple-600 mb-2 group-hover:scale-110 transition-transform duration-300">
                  24/7
                </div>
                <div className="text-gray-600">Automated Monitoring</div>
                <div className="text-sm text-gray-500 mt-1">Never miss an opportunity</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AnimatedAchievements;