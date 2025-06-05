import { Card } from "@/components/ui/card";
import { Star, Quote, Shield, Users } from "lucide-react";

const TrustSection = () => {
  const testimonials = [
    {
      quote: "SafeZone reduced our fraud losses by 87% in the first quarter. The real-time detection is incredibly accurate.",
      author: "Sarah Chen",
      role: "Chief Risk Officer",
      company: "Metro Bank",
      rating: 5
    },
    {
      quote: "Implementation was seamless and our customers love the instant fraud alerts. Game-changing technology.",
      author: "Michael Rodriguez",
      role: "VP of Security",
      company: "Community Credit Union",
      rating: 5
    },
    {
      quote: "The AI insights have transformed how we understand fraud patterns. Exceptional platform and support.",
      author: "Dr. Amanda Foster",
      role: "Director of Financial Crimes",
      company: "First National Bank",
      rating: 5
    }
  ];

  const stats = [
    { number: "500+", label: "Banks Protected" },
    { number: "50M+", label: "Transactions Analyzed" },
    { number: "$2.3B", label: "Fraud Prevented" },
    { number: "99.9%", label: "Uptime" }
  ];

  return (
    <section className="py-20 bg-safezone-navy">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Trusted by Leading Financial Institutions
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Join hundreds of banks and credit unions protecting their customers with SafeZone's AI-powered fraud detection.
          </p>
        </div>

        {/* Statistics */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-safezone-orange mb-2">
                {stat.number}
              </div>
              <p className="text-gray-300 font-medium">{stat.label}</p>
            </div>
          ))}
        </div>

        {/* Testimonials */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="p-6 bg-white/10 backdrop-blur-sm border-white/20 text-white">
              {/* Quote Icon */}
              <div className="mb-4">
                <Quote className="w-8 h-8 text-safezone-orange" />
              </div>

              {/* Rating */}
              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>

              {/* Quote */}
              <blockquote className="text-gray-100 mb-6 leading-relaxed">
                "{testimonial.quote}"
              </blockquote>

              {/* Author */}
              <div className="border-t border-white/20 pt-4">
                <div className="font-semibold text-white">{testimonial.author}</div>
                <div className="text-sm text-gray-300">{testimonial.role}</div>
                <div className="text-sm text-safezone-orange font-medium">{testimonial.company}</div>
              </div>
            </Card>
          ))}
        </div>

        {/* Trust Badges */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center space-x-8 text-gray-300">
            <div className="flex items-center space-x-2">
              <Shield className="w-6 h-6 text-green-400" />
              <span className="font-medium">SOC 2 Certified</span>
            </div>
            <div className="flex items-center space-x-2">
              <Shield className="w-6 h-6 text-green-400" />
              <span className="font-medium">PCI DSS Compliant</span>
            </div>
            <div className="flex items-center space-x-2">
              <Users className="w-6 h-6 text-green-400" />
              <span className="font-medium">GDPR Compliant</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustSection;