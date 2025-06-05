import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { FileText, Code, BookOpen, Download, ExternalLink, Search, Users, Settings } from "lucide-react";

const Documentation = () => {
  const apiEndpoints = [
    {
      method: "POST",
      endpoint: "/api/v1/analyze-transaction",
      description: "Analyze a transaction for fraud risk",
      params: "transaction_data, user_id, merchant_id"
    },
    {
      method: "GET",
      endpoint: "/api/v1/risk-score/{transaction_id}",
      description: "Get fraud risk score for a specific transaction",
      params: "transaction_id"
    },
    {
      method: "POST",
      endpoint: "/api/v1/block-transaction",
      description: "Block a flagged transaction",
      params: "transaction_id, reason"
    },
    {
      method: "GET",
      endpoint: "/api/v1/fraud-alerts/{user_id}",
      description: "Get fraud alerts for a specific user",
      params: "user_id, date_range"
    }
  ];

  const guides = [
    {
      icon: <Settings className="w-6 h-6" />,
      title: "Quick Start Guide",
      description: "Get started with SafeZone API in 5 minutes",
      time: "5 min read"
    },
    {
      icon: <Code className="w-6 h-6" />,
      title: "Integration Guide for Banks",
      description: "Step-by-step integration process for financial institutions",
      time: "15 min read"
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "User App Setup",
      description: "How to implement user-facing fraud alerts",
      time: "10 min read"
    },
    {
      icon: <Search className="w-6 h-6" />,
      title: "Model Explainability",
      description: "Understanding how our AI detects fraud patterns",
      time: "12 min read"
    }
  ];

  const faqs = [
    {
      question: "How accurate is SafeZone's fraud detection?",
      answer: "SafeZone achieves 99.8% accuracy with less than 2% false positives, significantly outperforming traditional rule-based systems."
    },
    {
      question: "What's the average response time for fraud detection?",
      answer: "Our AI analyzes transactions in under 1 millisecond, providing real-time protection without impacting user experience."
    },
    {
      question: "How does SafeZone integrate with existing banking systems?",
      answer: "We provide RESTful APIs that easily integrate with core banking systems, payment processors, and mobile applications with minimal setup time."
    },
    {
      question: "What types of fraud can SafeZone detect?",
      answer: "Our AI detects various fraud types including card-not-present fraud, account takeovers, synthetic identity fraud, and emerging attack patterns."
    },
    {
      question: "Is customer data secure with SafeZone?",
      answer: "Yes, we use enterprise-grade encryption, comply with PCI DSS standards, and follow strict data privacy regulations including GDPR and CCPA."
    }
  ];

  const whitepapers = [
    {
      title: "Machine Learning in Fraud Detection: A Comprehensive Analysis",
      description: "Deep dive into ML algorithms and their effectiveness in preventing financial fraud",
      pages: "24 pages",
      type: "PDF"
    },
    {
      title: "Real-time Fraud Prevention: Technical Architecture",
      description: "Technical overview of SafeZone's real-time processing capabilities",
      pages: "18 pages",
      type: "PDF"
    },
    {
      title: "The Future of Financial Security: AI-Driven Approaches",
      description: "Industry trends and future developments in AI-powered fraud prevention",
      pages: "32 pages",
      type: "PDF"
    }
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-safezone-navy to-safezone-blue">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Documentation
          </h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto mb-8">
            Everything you need to integrate and use SafeZone's fraud detection platform
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-white text-safezone-blue hover:bg-gray-100">
              <BookOpen className="w-5 h-5 mr-2" />
              Getting Started
            </Button>
            <Button variant="outline" className="border-white text-white hover:bg-white hover:text-safezone-blue">
              <ExternalLink className="w-5 h-5 mr-2" />
              API Reference
            </Button>
          </div>
        </div>
      </section>

      {/* Main Documentation */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Tabs defaultValue="api" className="w-full">
            <TabsList className="grid w-full grid-cols-4 mb-12">
              <TabsTrigger value="api">API Documentation</TabsTrigger>
              <TabsTrigger value="guides">Integration Guides</TabsTrigger>
              <TabsTrigger value="faqs">FAQs</TabsTrigger>
              <TabsTrigger value="research">Research</TabsTrigger>
            </TabsList>

            <TabsContent value="api" className="space-y-8">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-safezone-navy mb-4">API Reference</h2>
                <p className="text-xl text-safezone-gray max-w-3xl mx-auto">
                  RESTful APIs for seamless integration with your existing systems
                </p>
              </div>

              <Card className="border-0 shadow-lg">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Code className="w-6 h-6 mr-2 text-safezone-blue" />
                    Available Endpoints
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    {apiEndpoints.map((endpoint, index) => (
                      <div key={index} className="border rounded-lg p-4 hover:shadow-md transition-shadow">
                        <div className="flex items-center justify-between mb-2">
                          <div className="flex items-center">
                            <span className={`px-2 py-1 rounded text-xs font-medium mr-3 ${
                              endpoint.method === 'POST' ? 'bg-green-100 text-green-800' : 'bg-blue-100 text-blue-800'
                            }`}>
                              {endpoint.method}
                            </span>
                            <code className="text-sm font-mono text-safezone-navy">{endpoint.endpoint}</code>
                          </div>
                          <Button variant="outline" size="sm">
                            Try It
                          </Button>
                        </div>
                        <p className="text-safezone-gray mb-2">{endpoint.description}</p>
                        <p className="text-sm text-gray-500">Parameters: {endpoint.params}</p>
                      </div>
                    ))}
                  </div>
                  
                  <div className="mt-8 p-4 bg-safezone-blue-light rounded-lg">
                    <h4 className="font-semibold text-safezone-navy mb-2">Authentication</h4>
                    <p className="text-sm text-safezone-gray">
                      All API requests require an API key in the header: <code className="bg-white px-2 py-1 rounded">Authorization: Bearer YOUR_API_KEY</code>
                    </p>
                  </div>
                </CardContent>
              </Card>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Card className="border-0 shadow-lg">
                  <CardHeader>
                    <CardTitle>Sample Request</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <pre className="bg-gray-900 text-green-400 p-4 rounded-lg text-sm overflow-x-auto">
{`curl -X POST \\
  https://api.safezone.ai/v1/analyze-transaction \\
  -H "Authorization: Bearer YOUR_API_KEY" \\
  -H "Content-Type: application/json" \\
  -d '{
    "transaction_id": "txn_123",
    "amount": 150.00,
    "merchant": "Amazon",
    "user_id": "user_456",
    "timestamp": "2024-01-15T10:30:00Z"
  }'`}
                    </pre>
                  </CardContent>
                </Card>

                <Card className="border-0 shadow-lg">
                  <CardHeader>
                    <CardTitle>Sample Response</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <pre className="bg-gray-900 text-blue-400 p-4 rounded-lg text-sm overflow-x-auto">
{`{
  "transaction_id": "txn_123",
  "risk_score": 0.15,
  "status": "approved",
  "confidence": 0.97,
  "factors": [
    "normal_spending_pattern",
    "verified_location",
    "trusted_merchant"
  ],
  "timestamp": "2024-01-15T10:30:01Z"
}`}
                    </pre>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="guides" className="space-y-8">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-safezone-navy mb-4">Integration Guides</h2>
                <p className="text-xl text-safezone-gray max-w-3xl mx-auto">
                  Step-by-step guides to help you integrate SafeZone with your systems
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {guides.map((guide, index) => (
                  <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow cursor-pointer">
                    <CardHeader>
                      <div className="flex items-center mb-2">
                        <div className="p-2 bg-safezone-blue-light rounded-lg text-safezone-blue mr-3">
                          {guide.icon}
                        </div>
                        <div>
                          <CardTitle className="text-lg">{guide.title}</CardTitle>
                          <p className="text-sm text-safezone-gray">{guide.time}</p>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-safezone-gray mb-4">{guide.description}</p>
                      <Button variant="outline" className="w-full">
                        Read Guide
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="faqs" className="space-y-8">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-safezone-navy mb-4">Frequently Asked Questions</h2>
                <p className="text-xl text-safezone-gray max-w-3xl mx-auto">
                  Common questions about SafeZone's fraud detection platform
                </p>
              </div>

              <div className="space-y-6">
                {faqs.map((faq, index) => (
                  <Card key={index} className="border-0 shadow-lg">
                    <CardHeader>
                      <CardTitle className="text-lg text-safezone-navy">{faq.question}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-safezone-gray">{faq.answer}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>

              <div className="text-center mt-12">
                <p className="text-safezone-gray mb-4">Can't find what you're looking for?</p>
                <Button className="bg-safezone-blue hover:bg-safezone-blue-dark text-white">
                  Contact Support
                </Button>
              </div>
            </TabsContent>

            <TabsContent value="research" className="space-y-8">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-safezone-navy mb-4">Research & Whitepapers</h2>
                <p className="text-xl text-safezone-gray max-w-3xl mx-auto">
                  In-depth research and technical papers on fraud detection and AI security
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {whitepapers.map((paper, index) => (
                  <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow">
                    <CardHeader>
                      <div className="flex items-center justify-between mb-2">
                        <FileText className="w-8 h-8 text-safezone-orange" />
                        <span className="text-xs bg-safezone-gray-light px-2 py-1 rounded">{paper.type}</span>
                      </div>
                      <CardTitle className="text-lg">{paper.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-safezone-gray mb-4">{paper.description}</p>
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-gray-500">{paper.pages}</span>
                        <Button size="sm" className="bg-safezone-orange hover:bg-safezone-orange-dark text-white">
                          <Download className="w-4 h-4 mr-1" />
                          Download
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Documentation;