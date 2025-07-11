
import { BookOpen, Download, Calculator, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";

const LearningSection = () => {
  const courses = [
    {
      title: "Algorithmic Trading Zero to Hero",
      description: "Complete beginner's guide to automated trading strategies",
      duration: "8 hours",
      level: "Beginner",
      icon: BookOpen,
      color: "bg-blue-500"
    },
    {
      title: "TradingView to Broker Automation",
      description: "Master Pine Script integration with Indian brokers",
      duration: "6 hours",
      level: "Intermediate",
      icon: TrendingUp,
      color: "bg-green-500"
    },
    {
      title: "Python for Traders",
      description: "Build custom trading algorithms with Python",
      duration: "12 hours",
      level: "Advanced",
      icon: BookOpen,
      color: "bg-purple-500"
    },
    {
      title: "Risk Management in Algo Trading",
      description: "Protect your capital with advanced risk controls",
      duration: "4 hours",
      level: "Intermediate",
      icon: BookOpen,
      color: "bg-orange-500"
    }
  ];

  const freeResources = [
    {
      title: "Top 10 TradingView Strategies",
      description: "Proven Pine Script strategies with backtesting results",
      type: "PDF Guide",
      icon: Download,
      downloads: "2,450+"
    },
    {
      title: "Risk Calculator Tool",
      description: "Calculate position sizes and risk-reward ratios",
      type: "Excel Tool",
      icon: Calculator,
      downloads: "1,890+"
    },
    {
      title: "Broker Comparison Guide",
      description: "Compare fees, features, and API capabilities",
      type: "Spreadsheet",
      icon: Download,
      downloads: "3,200+"
    },
    {
      title: "Algo Trading Starter Kit",
      description: "Templates, checklists, and setup guides",
      type: "Resource Pack",
      icon: Download,
      downloads: "1,650+"
    }
  ];

  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-5xl font-bold text-gray-900 mb-6">
            Master <span className="text-blue-600">Algorithmic Trading</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Learn from trading experts and get access to proven strategies, tools, and resources 
            that will accelerate your automated trading journey.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Courses */}
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-8">Expert-Led Courses</h3>
            <div className="space-y-6">
              {courses.map((course, index) => (
                <div key={index} className="bg-gray-50 rounded-xl p-6 hover:bg-white hover:shadow-lg transition-all">
                  <div className="flex items-start space-x-4">
                    <div className={`${course.color} w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0`}>
                      <course.icon className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <h4 className="text-lg font-semibold text-gray-900 mb-2">{course.title}</h4>
                      <p className="text-gray-600 mb-4">{course.description}</p>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-4 text-sm text-gray-500">
                          <span>{course.duration}</span>
                          <span>•</span>
                          <span>{course.level}</span>
                        </div>
                        <Button variant="outline" size="sm">
                          Enroll Now
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-8 text-center">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
                Access All Courses
              </Button>
            </div>
          </div>

          {/* Free Resources */}
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-8">Free Resources</h3>
            <div className="space-y-6">
              {freeResources.map((resource, index) => (
                <div key={index} className="bg-gradient-to-r from-green-50 to-blue-50 rounded-xl p-6 border border-green-100 hover:shadow-lg transition-all">
                  <div className="flex items-start space-x-4">
                    <div className="bg-green-500 w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0">
                      <resource.icon className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-2">
                        <h4 className="text-lg font-semibold text-gray-900">{resource.title}</h4>
                        <span className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded">FREE</span>
                      </div>
                      <p className="text-gray-600 mb-4">{resource.description}</p>
                      <div className="flex items-center justify-between">
                        <div className="text-sm text-gray-500">
                          <span className="font-medium">{resource.downloads}</span> downloads
                        </div>
                        <Button variant="outline" size="sm" className="border-green-500 text-green-600 hover:bg-green-500 hover:text-white">
                          Download {resource.type}
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-8 text-center">
              <Button size="lg" variant="outline" className="border-green-500 text-green-600 hover:bg-green-500 hover:text-white">
                Download All Resources
              </Button>
            </div>
          </div>
        </div>

        {/* Newsletter Signup */}
        <div className="mt-16 bg-gray-900 rounded-2xl p-8 lg:p-12 text-white">
          <div className="text-center mb-8">
            <h3 className="text-2xl lg:text-3xl font-bold mb-4">
              Weekly Algo Trading Insights
            </h3>
            <p className="text-gray-300 text-lg max-w-2xl mx-auto">
              Get strategy breakdowns, market analysis, and platform updates delivered to your inbox every week. 
              Join 3,500+ traders who rely on our insights.
            </p>
          </div>
          <div className="max-w-md mx-auto">
            <div className="flex gap-4">
              <input 
                type="email" 
                placeholder="Enter your email address"
                className="flex-1 px-4 py-3 rounded-lg bg-gray-800 border border-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <Button className="bg-blue-600 hover:bg-blue-700 px-6">
                Subscribe
              </Button>
            </div>
            <p className="text-xs text-gray-400 mt-2 text-center">
              No spam. Unsubscribe anytime.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LearningSection;
