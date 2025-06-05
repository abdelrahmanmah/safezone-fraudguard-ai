import { Card } from "@/components/ui/card";
import { Shield, Zap, BarChart3, Settings, Brain, Clock } from "lucide-react";

const FeaturesSection = () => {
  const features = [
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Real-time Fraud Detection",
      description: "Instant analysis of transactions with millisecond response times to block fraudulent activities before they complete."
    },
    {
      icon: <Brain className="w-8 h-8" />,
      title: "Machine Learning Models",
      description: "Advanced AI algorithms trained on millions of transactions to detect even the most sophisticated fraud patterns."
    },
    {
      icon: <BarChart3 className="w-8 h-8" />,
      title: "Analytics Dashboard",
      description: "Comprehensive insights and reporting for both banks and users with detailed fraud analytics and trends."
    },
    {
      icon: <Settings className="w-8 h-8" />,
      title: "Seamless API Integration",
      description: "Easy-to-implement APIs that integrate with existing banking systems without disrupting current operations."
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Multi-layer Security",
      description: "Advanced encryption and security protocols ensure your data and transactions remain completely protected."
    },
    {
      icon: <Clock className="w-8 h-8" />,
      title: "24/7 Monitoring",
      description: "Continuous surveillance of transaction patterns with automatic alerts for suspicious activities around the clock."
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-safezone-navy mb-4">
            Powerful Features for Complete Protection
          </h2>
          <p className="text-xl text-safezone-gray max-w-3xl mx-auto">
            Our comprehensive fraud detection platform combines cutting-edge AI with intuitive interfaces 
            to provide unmatched security for financial institutions and their customers.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card 
              key={index} 
              className="p-6 hover:shadow-lg transition-all duration-300 border-0 bg-gradient-to-br from-white to-safezone-gray-light group hover:scale-105"
            >
              <div className="mb-4">
                <div className="inline-flex p-3 bg-safezone-blue-light rounded-lg text-safezone-blue group-hover:bg-safezone-blue group-hover:text-white transition-all duration-300">
                  {feature.icon}
                </div>
              </div>
              <h3 className="text-xl font-semibold text-safezone-navy mb-3">
                {feature.title}
              </h3>
              <p className="text-safezone-gray leading-relaxed">
                {feature.description}
              </p>
            </Card>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="inline-flex items-center px-6 py-3 bg-safezone-orange-light rounded-full text-safezone-orange font-medium">
            <Shield className="w-5 h-5 mr-2" />
            Trusted by 500+ Financial Institutions
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;