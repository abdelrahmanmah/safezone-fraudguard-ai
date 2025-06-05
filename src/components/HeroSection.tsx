import { Button } from "@/components/ui/button";
import { Shield, Play, TrendingUp } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-safezone-blue-light via-white to-safezone-orange-light overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-20 h-20 border-2 border-safezone-blue rounded-full"></div>
        <div className="absolute top-40 right-20 w-16 h-16 border-2 border-safezone-orange rounded-full"></div>
        <div className="absolute bottom-40 left-20 w-12 h-12 border-2 border-safezone-blue rounded-full"></div>
        <div className="absolute bottom-20 right-10 w-24 h-24 border-2 border-safezone-orange rounded-full"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-4xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center px-4 py-2 bg-safezone-blue-light rounded-full text-safezone-blue font-medium text-sm mb-6">
            <Shield className="w-4 h-4 mr-2" />
            AI-Powered Fraud Detection
          </div>

          {/* Main Headline */}
          <h1 className="text-4xl md:text-6xl font-bold text-safezone-navy mb-6 leading-tight">
            AI-Powered Credit Card{" "}
            <span className="text-safezone-blue">Fraud Detection</span>{" "}
            for Banks & Users
          </h1>

          {/* Subheading */}
          <p className="text-xl md:text-2xl text-safezone-gray mb-8 max-w-3xl mx-auto leading-relaxed">
            Real-time fraud prevention with SafeZone's cutting-edge AI. 
            Reduce chargebacks by 90% and protect your customers with instant alerts.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button 
              size="lg" 
              className="bg-safezone-blue hover:bg-safezone-blue-dark text-white px-8 py-4 text-lg font-semibold"
            >
              <Play className="w-5 h-5 mr-2" />
              Try Demo
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="border-safezone-orange text-safezone-orange hover:bg-safezone-orange hover:text-white px-8 py-4 text-lg font-semibold"
            >
              Learn More
            </Button>
          </div>

          {/* Trust Indicators */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-8 text-safezone-gray">
            <div className="flex items-center">
              <TrendingUp className="w-5 h-5 mr-2 text-green-500" />
              <span className="font-semibold">90% Reduction in Chargebacks</span>
            </div>
            <div className="flex items-center">
              <Shield className="w-5 h-5 mr-2 text-safezone-blue" />
              <span className="font-semibold">Real-time Protection</span>
            </div>
            <div className="flex items-center">
              <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
              <span className="font-semibold">99.9% Uptime</span>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-1/2 left-10 transform -translate-y-1/2 hidden lg:block">
        <div className="bg-white rounded-xl shadow-lg p-4 border border-gray-200">
          <div className="flex items-center space-x-2 mb-2">
            <div className="w-3 h-3 bg-red-500 rounded-full"></div>
            <span className="text-sm font-medium text-safezone-navy">Fraud Alert</span>
          </div>
          <p className="text-xs text-safezone-gray">Suspicious transaction detected</p>
        </div>
      </div>

      <div className="absolute top-1/3 right-10 transform -translate-y-1/2 hidden lg:block">
        <div className="bg-white rounded-xl shadow-lg p-4 border border-gray-200">
          <div className="flex items-center space-x-2 mb-2">
            <div className="w-3 h-3 bg-green-500 rounded-full"></div>
            <span className="text-sm font-medium text-safezone-navy">Protected</span>
          </div>
          <p className="text-xs text-safezone-gray">Transaction verified</p>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;