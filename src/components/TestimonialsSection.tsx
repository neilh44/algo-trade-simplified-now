
import { Star, TrendingUp } from "lucide-react";

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "Rajesh Kumar",
      location: "Mumbai",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
      rating: 5,
      text: "Increased my trading returns by 34% in just 3 months. The automation is seamless and the execution speed is incredible.",
      result: "+34% Returns",
      strategy: "Swing Trading"
    },
    {
      name: "Amit Patel",
      location: "Ahmedabad",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
      rating: 5,
      text: "The risk management features saved me from a major loss during the market crash. Excellent platform!",
      result: "Risk Protected",
      strategy: "Options Trading"
    },
    {
      name: "Vikram Singh",
      location: "Pune",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face",
      rating: 5,
      text: "The backtesting feature helped me optimize my strategy before going live. Very professional platform.",
      result: "+23% Win Rate",
      strategy: "Futures Trading"
    }
  ];

  const successMetrics = [
    { metric: "Average 23%", description: "Improvement in execution speed" },
    { metric: "89%", description: "Of users profitable within first month" },
    { metric: "₹2.3 Cr+", description: "In trades executed daily" }
  ];

  return (
    <section className="py-16 lg:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-5xl font-bold text-gray-900 mb-6">
            Trusted by <span className="text-green-600">Successful Traders</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Join thousands of traders who have transformed their trading with our platform. 
            Real results from real traders.
          </p>
        </div>

        {/* Success Metrics */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {successMetrics.map((item, index) => (
            <div key={index} className="bg-white rounded-2xl p-8 text-center shadow-lg">
              <div className="text-3xl lg:text-4xl font-bold text-blue-600 mb-2">{item.metric}</div>
              <div className="text-gray-600">{item.description}</div>
            </div>
          ))}
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
              <div className="flex items-center mb-6">
                <img 
                  src={testimonial.image} 
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full mr-4"
                />
                <div className="flex-1">
                  <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                  <p className="text-sm text-gray-600">{testimonial.location}</p>
                </div>
                <div className="flex">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                  ))}
                </div>
              </div>
              
              <blockquote className="text-gray-700 mb-6 italic">
                "{testimonial.text}"
              </blockquote>
              
              <div className="flex justify-between items-center pt-4 border-t border-gray-100">
                <div className="text-sm">
                  <div className="font-semibold text-green-600">{testimonial.result}</div>
                  <div className="text-gray-500">{testimonial.strategy}</div>
                </div>
                <TrendingUp className="w-5 h-5 text-green-500" />
              </div>
            </div>
          ))}
        </div>

        {/* Case Study Highlight */}
        <div className="bg-gradient-to-r from-blue-600 to-green-600 rounded-2xl p-8 lg:p-12 text-white">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl lg:text-3xl font-bold mb-4">
                Case Study: How Raj Automated His Swing Trading
              </h3>
              <p className="text-blue-100 mb-6 text-lg">
                Raj increased his returns by 34% and reduced his daily trading time from 4 hours to 30 minutes 
                using our automated swing trading strategies.
              </p>
              <button className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                Read Full Case Study
              </button>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
              <div className="space-y-4">
                <div className="flex justify-between">
                  <span className="text-blue-100">Time Saved Daily:</span>
                  <span className="font-semibold">3.5 hours</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-blue-100">Return Improvement:</span>
                  <span className="font-semibold text-green-300">+34%</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-blue-100">Stress Level:</span>
                  <span className="font-semibold text-green-300">-70%</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-blue-100">Win Rate:</span>
                  <span className="font-semibold text-green-300">68%</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Community Proof */}
        <div className="text-center mt-12">
          <p className="text-gray-600 mb-4">Join our growing community of successful traders</p>
          <button className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
            Join 5,000+ Traders on Telegram
          </button>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
