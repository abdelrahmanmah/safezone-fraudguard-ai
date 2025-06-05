import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CheckCircle, Building2, Smartphone, BarChart3, Shield, Clock, DollarSign } from "lucide-react";

const Solution = () => {
  const bankFeatures = [
    {
      icon: <BarChart3 className="w-6 h-6" />,
      title: "Advanced Analytics Dashboard",
      description: "Real-time fraud monitoring with comprehensive reporting and trend analysis for your institution."
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "API Integration",
      description: "Seamlessly integrate with your existing banking infrastructure without disrupting operations."
    },
    {
      icon: <DollarSign className="w-6 h-6" />,
      title: "Cost Reduction",
      description: "Reduce fraud-related losses by up to 90% with our AI-powered detection system."
    }
  ];

  const userFeatures = [
    {
      icon: <Smartphone className="w-6 h-6" />,
      title: "Mobile Alerts",
      description: "Instant notifications on your mobile device for any suspicious transaction activity."
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "Real-time Protection",
      description: "24/7 monitoring with immediate blocking of fraudulent transactions before they complete."
    },
    {
      icon: <CheckCircle className="w-6 h-6" />,
      title: "Easy Management",
      description: "Simple interface to review, approve, or decline flagged transactions with one tap."
    }
  ];

  const comparisonData = [
    { feature: "Detection Speed", traditional: "24-48 hours", safezone: "< 1 second" },
    { feature: "Accuracy Rate", traditional: "85%", safezone: "99.8%" },
    { feature: "False Positives", traditional: "15-25%", safezone: "< 2%" },
    { feature: "Setup Time", traditional: "6-12 months", safezone: "2-4 weeks" },
    { feature: "Customer Impact", traditional: "High friction", safezone: "Seamless experience" }
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-safezone-blue to-safezone-navy">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            AI-Powered Fraud Detection
          </h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto mb-8">
            Comprehensive protection for banks and end-users with cutting-edge machine learning technology
          </p>
        </div>
      </section>

      {/* For Banks Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center mb-12">
            <Building2 className="w-12 h-12 text-safezone-blue mr-4" />
            <h2 className="text-3xl md:text-4xl font-bold text-safezone-navy">For Financial Institutions</h2>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h3 className="text-2xl font-bold text-safezone-navy mb-6">
                Reduce Chargebacks by 90% with AI-Driven Insights
              </h3>
              <p className="text-safezone-gray text-lg mb-8">
                Deploy our advanced machine learning models to protect your institution and customers from sophisticated fraud attacks. Our solution integrates seamlessly with your existing infrastructure.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-safezone-blue-light p-4 rounded-lg">
                  <div className="text-2xl font-bold text-safezone-blue mb-1">$2.3B+</div>
                  <div className="text-sm text-safezone-gray">Fraud Prevented</div>
                </div>
                <div className="bg-safezone-orange-light p-4 rounded-lg">
                  <div className="text-2xl font-bold text-safezone-orange mb-1">500+</div>
                  <div className="text-sm text-safezone-gray">Bank Partners</div>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-1 gap-6">
              {bankFeatures.map((feature, index) => (
                <Card key={index} className="border-0 shadow-md">
                  <CardHeader className="pb-3">
                    <div className="flex items-center">
                      <div className="p-2 bg-safezone-blue-light rounded-lg text-safezone-blue mr-3">
                        {feature.icon}
                      </div>
                      <CardTitle className="text-lg">{feature.title}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-safezone-gray">{feature.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          <div className="text-center">
            <Button className="bg-safezone-blue hover:bg-safezone-blue-dark text-white px-8 py-3">
              Request Bank Demo
            </Button>
          </div>
        </div>
      </section>

      {/* For Users Section */}
      <section className="py-20 bg-safezone-gray-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center mb-12">
            <Smartphone className="w-12 h-12 text-safezone-orange mr-4" />
            <h2 className="text-3xl md:text-4xl font-bold text-safezone-navy">For End Users</h2>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <div className="order-2 lg:order-1 grid grid-cols-1 gap-6">
              {userFeatures.map((feature, index) => (
                <Card key={index} className="border-0 shadow-md">
                  <CardHeader className="pb-3">
                    <div className="flex items-center">
                      <div className="p-2 bg-safezone-orange-light rounded-lg text-safezone-orange mr-3">
                        {feature.icon}
                      </div>
                      <CardTitle className="text-lg">{feature.title}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-safezone-gray">{feature.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
            <div className="order-1 lg:order-2">
              <h3 className="text-2xl font-bold text-safezone-navy mb-6">
                Block Suspicious Transactions Instantly
              </h3>
              <p className="text-safezone-gray text-lg mb-8">
                Get real-time alerts on your mobile device and take immediate action to protect your accounts. Our user-friendly interface makes fraud prevention effortless.
              </p>
              <div className="bg-white p-6 rounded-xl shadow-lg">
                <h4 className="font-semibold text-safezone-navy mb-4">Mobile App Preview</h4>
                <div className="space-y-3">
                  <div className="flex items-center justify-between p-3 bg-red-50 rounded-lg border-l-4 border-red-500">
                    <span className="text-sm">Suspicious transaction detected</span>
                    <span className="text-xs text-red-600">BLOCKED</span>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-green-50 rounded-lg border-l-4 border-green-500">
                    <span className="text-sm">Transaction approved</span>
                    <span className="text-xs text-green-600">APPROVED</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center">
            <Button className="bg-safezone-orange hover:bg-safezone-orange-dark text-white px-8 py-3">
              Download App
            </Button>
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-safezone-navy text-center mb-12">
            SafeZone vs. Traditional Fraud Detection
          </h2>
          
          <div className="overflow-x-auto">
            <table className="w-full bg-white rounded-xl shadow-lg overflow-hidden">
              <thead className="bg-safezone-navy text-white">
                <tr>
                  <th className="px-6 py-4 text-left">Feature</th>
                  <th className="px-6 py-4 text-center">Traditional Methods</th>
                  <th className="px-6 py-4 text-center">SafeZone AI</th>
                </tr>
              </thead>
              <tbody>
                {comparisonData.map((row, index) => (
                  <tr key={index} className={index % 2 === 0 ? "bg-gray-50" : "bg-white"}>
                    <td className="px-6 py-4 font-medium text-safezone-navy">{row.feature}</td>
                    <td className="px-6 py-4 text-center text-red-600">{row.traditional}</td>
                    <td className="px-6 py-4 text-center text-green-600 font-semibold">{row.safezone}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Solution;