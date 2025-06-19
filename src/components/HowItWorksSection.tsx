import { Card } from "@/components/ui/card";
import { Monitor, Brain, AlertTriangle, ArrowRight } from "lucide-react";
const HowItWorksSection = () => {
  const steps = [{
    icon: <Monitor className="w-12 h-12" />,
    title: "Transaction Monitoring",
    description: "Every transaction is captured in real-time through our secure API integration with your existing banking infrastructure.",
    color: "bg-blue-500"
  }, {
    icon: <Brain className="w-12 h-12" />,
    title: "AI Analysis",
    description: "Our machine learning algorithms analyze transaction patterns, user behavior, and risk factors in milliseconds.",
    color: "bg-purple-500"
  }, {
    icon: <AlertTriangle className="w-12 h-12" />,
    title: "Instant Alerts",
    description: "Suspicious activities trigger immediate alerts to both banks and users, with recommended actions for prevention.",
    color: "bg-orange-500"
  }];
  return <section className="py-20 bg-gradient-to-br from-safezone-gray-light to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-safezone-navy mb-4">
            How SafeZone Works
          </h2>
          <p className="text-xl text-safezone-gray max-w-3xl mx-auto">
            Our three-step process ensures comprehensive fraud protection with minimal impact on legitimate transactions.
          </p>
        </div>

        {/* Steps */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
          {steps.map((step, index) => <div key={index} className="relative">
              <Card className="p-8 text-center bg-white border-0 shadow-lg hover:shadow-xl transition-all duration-300">
                {/* Step Number */}
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="w-8 h-8 bg-safezone-blue text-white rounded-full flex items-center justify-center font-bold text-sm">
                    {index + 1}
                  </div>
                </div>

                {/* Icon */}
                <div className="mb-6 flex justify-center">
                  <div className={`p-4 ${step.color} rounded-xl text-white`}>
                    {step.icon}
                  </div>
                </div>

                {/* Content */}
                <h3 className="text-xl font-semibold text-safezone-navy mb-4">
                  {step.title}
                </h3>
                <p className="text-safezone-gray leading-relaxed">
                  {step.description}
                </p>
              </Card>

              {/* Arrow (desktop only) */}
              {index < steps.length - 1}
            </div>)}
        </div>

        {/* Bottom Stats */}
        <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-safezone-blue mb-2">
              &lt;1ms
            </div>
            <p className="text-safezone-gray font-medium">Analysis Time</p>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-safezone-orange mb-2">
              99.8%
            </div>
            <p className="text-safezone-gray font-medium">Accuracy Rate</p>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-green-500 mb-2">
              24/7
            </div>
            <p className="text-safezone-gray font-medium">Protection</p>
          </div>
        </div>
      </div>
    </section>;
};
export default HowItWorksSection;