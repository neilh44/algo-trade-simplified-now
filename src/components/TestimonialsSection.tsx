import { Star, TrendingUp, ChevronLeft, ChevronRight, Play, Users, Award, Clock } from "lucide-react";
import { useState, useEffect } from "react";

const TestimonialsSection = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [hoveredMetric, setHoveredMetric] = useState(null);
  const [animatedNumbers, setAnimatedNumbers] = useState({});

  const testimonials = [
    {
      name: "Rajesh Kumar",
      location: "Mumbai",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
      rating: 5,
      text: "Increased my trading returns by 34% in just 3 months. The automation is seamless and the execution speed is incredible.",
      result: "+34% Returns",
      strategy: "Swing Trading",
      videoTestimonial: true,
      monthsTrading: 6,
      totalProfit: "₹2.8L"
    },
    {
      name: "Amit Patel",
      location: "Ahmedabad",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
      rating: 5,
      text: "The risk management features saved me from a major loss during the market crash. Excellent platform!",
      result: "Risk Protected",
      strategy: "Options Trading",
      videoTestimonial: false,
      monthsTrading: 4,
      totalProfit: "₹1.5L"
    },
    {
      name: "Vikram Singh",
      location: "Pune",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face",
      rating: 5,
      text: "The backtesting feature helped me optimize my strategy before going live. Very professional platform.",
      result: "+23% Win Rate",
      strategy: "Futures Trading",
      videoTestimonial: true,
      monthsTrading: 8,
      totalProfit: "₹4.2L"
    },
    {
      name: "Priya Sharma",
      location: "Delhi",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face",
      rating: 5,
      text: "As a beginner, the educational resources and support helped me become profitable within 2 months.",
      result: "+18% Returns",
      strategy: "Intraday Trading",
      videoTestimonial: false,
      monthsTrading: 3,
      totalProfit: "₹95K"
    }
  ];

  const successMetrics = [
    { metric: "23%", description: "Improvement in execution speed", icon: Clock, color: "text-purple-600" },
    { metric: "89%", description: "Of users profitable within first month", icon: Users, color: "text-green-600" },
    { metric: "₹4.8 Cr+", description: "In trades executed daily", icon: Award, color: "text-blue-600" }
  ];

  // Auto-rotate testimonials
  useEffect(() => {
    if (isPlaying) {
      const interval = setInterval(() => {
        setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
      }, 4000);
      return () => clearInterval(interval);
    }
  }, [isPlaying, testimonials.length]);

  // Animate numbers on hover
  const animateNumber = (index, targetValue) => {
    let startValue = 0;
    const duration = 1000;
    const increment = targetValue / (duration / 16);
    
    const animate = () => {
      startValue += increment;
      if (startValue < targetValue) {
        setAnimatedNumbers(prev => ({
          ...prev,
          [index]: Math.floor(startValue)
        }));
        requestAnimationFrame(animate);
      } else {
        setAnimatedNumbers(prev => ({
          ...prev,
          [index]: targetValue
        }));
      }
    };
    animate();
  };

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="py-16 lg:py-24 bg-gradient-to-br from-gray-50 to-blue-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 relative">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-green-600/10 rounded-3xl blur-3xl"></div>
          <div className="relative">
            <h2 className="text-3xl lg:text-5xl font-bold text-gray-900 mb-6 animate-pulse">
              Trusted by <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-blue-600">Successful Traders</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Join thousands of traders who have transformed their trading with our platform. 
              Real results from real traders.
            </p>
          </div>
        </div>

        {/* Interactive Success Metrics */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {successMetrics.map((item, index) => {
            const IconComponent = item.icon;
            return (
              <div 
                key={index} 
                className={`bg-white rounded-2xl p-8 text-center shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer transform hover:scale-105 ${
                  hoveredMetric === index ? 'ring-4 ring-blue-200' : ''
                }`}
                onMouseEnter={() => {
                  setHoveredMetric(index);
                  if (item.metric.includes('%')) {
                    animateNumber(index, parseInt(item.metric));
                  }
                }}
                onMouseLeave={() => setHoveredMetric(null)}
              >
                <div className="mb-4 flex justify-center">
                  <IconComponent className={`w-12 h-12 ${item.color} transition-all duration-300 ${
                    hoveredMetric === index ? 'scale-125 rotate-12' : ''
                  }`} />
                </div>
                <div className={`text-3xl lg:text-4xl font-bold ${item.color} mb-2 transition-all duration-300`}>
                  {item.metric.includes('%') && animatedNumbers[index] !== undefined 
                    ? `${animatedNumbers[index]}%` 
                    : item.metric}
                </div>
                <div className="text-gray-600 font-medium">{item.description}</div>
                {hoveredMetric === index && (
                  <div className="mt-4 text-sm text-gray-500 animate-fade-in">
                    Click to learn more
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Interactive Testimonials Carousel */}
        <div className="relative mb-16">
          <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">
            <div className="relative h-96 lg:h-80">
              {testimonials.map((testimonial, index) => (
                <div
                  key={index}
                  className={`absolute inset-0 transition-all duration-700 transform ${
                    index === currentTestimonial 
                      ? 'translate-x-0 opacity-100' 
                      : index < currentTestimonial 
                        ? '-translate-x-full opacity-0' 
                        : 'translate-x-full opacity-0'
                  }`}
                >
                  <div className="flex h-full">
                    <div className="flex-1 p-8 lg:p-12 flex flex-col justify-center">
                      <div className="flex items-center mb-6">
                        <div className="relative">
                          <img 
                            src={testimonial.image} 
                            alt={testimonial.name}
                            className="w-16 h-16 rounded-full mr-6 ring-4 ring-blue-100"
                          />
                          {testimonial.videoTestimonial && (
                            <div className="absolute -bottom-1 -right-1 bg-red-500 rounded-full p-1">
                              <Play className="w-3 h-3 text-white fill-current" />
                            </div>
                          )}
                        </div>
                        <div className="flex-1">
                          <h4 className="font-bold text-xl text-gray-900">{testimonial.name}</h4>
                          <p className="text-gray-600">{testimonial.location}</p>
                          <div className="flex mt-2">
                            {[...Array(testimonial.rating)].map((_, i) => (
                              <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                            ))}
                          </div>
                        </div>
                      </div>
                      
                      <blockquote className="text-gray-700 mb-6 italic text-lg leading-relaxed">
                        "{testimonial.text}"
                      </blockquote>
                      
                      <div className="flex justify-between items-center">
                        <div className="flex space-x-6">
                          <div className="text-center">
                            <div className="font-bold text-green-600">{testimonial.result}</div>
                            <div className="text-xs text-gray-500">{testimonial.strategy}</div>
                          </div>
                          <div className="text-center">
                            <div className="font-bold text-blue-600">{testimonial.totalProfit}</div>
                            <div className="text-xs text-gray-500">Total Profit</div>
                          </div>
                        </div>
                        <TrendingUp className="w-8 h-8 text-green-500" />
                      </div>
                    </div>
                    
                    <div className="hidden lg:flex w-1/3 bg-gradient-to-br from-blue-500 to-green-500 items-center justify-center">
                      <div className="text-white text-center">
                        <div className="text-6xl font-bold mb-2">{testimonial.monthsTrading}</div>
                        <div className="text-sm opacity-90">Months Trading</div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Controls */}
          <div className="flex justify-center mt-8 space-x-4">
            <button
              onClick={prevTestimonial}
              className="bg-white shadow-lg rounded-full p-3 hover:shadow-xl transition-all duration-200 hover:scale-110"
            >
              <ChevronLeft className="w-6 h-6 text-gray-600" />
            </button>
            
            <button
              onClick={() => setIsPlaying(!isPlaying)}
              className={`px-6 py-3 rounded-full font-semibold transition-all duration-200 ${
                isPlaying 
                  ? 'bg-red-500 hover:bg-red-600 text-white' 
                  : 'bg-green-500 hover:bg-green-600 text-white'
              }`}
            >
              {isPlaying ? 'Pause' : 'Auto Play'}
            </button>
            
            <button
              onClick={nextTestimonial}
              className="bg-white shadow-lg rounded-full p-3 hover:shadow-xl transition-all duration-200 hover:scale-110"
            >
              <ChevronRight className="w-6 h-6 text-gray-600" />
            </button>
          </div>

          {/* Testimonial Dots */}
          <div className="flex justify-center mt-4 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentTestimonial(index)}
                className={`w-3 h-3 rounded-full transition-all duration-200 ${
                  index === currentTestimonial 
                    ? 'bg-blue-500 scale-125' 
                    : 'bg-gray-300 hover:bg-gray-400'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Enhanced Case Study */}
        <div className="bg-gradient-to-r from-blue-600 to-green-600 rounded-3xl p-8 lg:p-12 text-white relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl transform translate-x-32 -translate-y-32"></div>
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/10 rounded-full blur-3xl transform -translate-x-24 translate-y-24"></div>
          
          <div className="grid lg:grid-cols-2 gap-8 items-center relative z-10">
            <div>
              <h3 className="text-2xl lg:text-3xl font-bold mb-4">
                Case Study: How Raj Automated His Swing Trading
              </h3>
              <p className="text-blue-100 mb-6 text-lg leading-relaxed">
                Raj increased his returns by 34% and reduced his daily trading time from 4 hours to 30 minutes 
                using our automated swing trading strategies.
              </p>
              <div className="flex space-x-4">
                <button className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-200 hover:scale-105">
                  Read Full Case Study
                </button>
                <button className="border border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white/10 transition-all duration-200">
                  Watch Video
                </button>
              </div>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/20 transition-all duration-300">
              <div className="space-y-4">
                {[
                  { label: "Time Saved Daily:", value: "3.5 hours", color: "text-yellow-300" },
                  { label: "Return Improvement:", value: "+34%", color: "text-green-300" },
                  { label: "Stress Level:", value: "-70%", color: "text-green-300" },
                  { label: "Win Rate:", value: "68%", color: "text-green-300" }
                ].map((item, index) => (
                  <div key={index} className="flex justify-between items-center hover:scale-105 transition-transform duration-200">
                    <span className="text-blue-100">{item.label}</span>
                    <span className={`font-bold text-xl ${item.color}`}>{item.value}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Interactive Community Section */}
        <div className="text-center mt-12">
          <p className="text-gray-600 mb-6 text-lg">Join our growing community of successful traders</p>
          <div className="flex justify-center space-x-4">
            <button className="bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-all duration-200 hover:scale-105 shadow-lg hover:shadow-xl">
              Join 5,000+ Traders on Telegram
            </button>
            <button className="border border-blue-600 text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-blue-50 transition-all duration-200 hover:scale-105">
              Start Free Trial
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;