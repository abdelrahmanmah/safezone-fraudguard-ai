import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { AlertTriangle, CheckCircle, Upload, BarChart3, Shield, Brain, Clock, DollarSign } from "lucide-react";
import { useState } from "react";

const Demo = () => {
  const [riskScore, setRiskScore] = useState(0.15);
  const [analysisComplete, setAnalysisComplete] = useState(false);

  const sampleTransactions = [
    {
      id: "txn_001",
      amount: "$150.00",
      merchant: "Amazon",
      location: "San Francisco, CA",
      riskScore: 0.15,
      status: "approved",
      confidence: 0.97,
      factors: ["normal_pattern", "verified_location", "trusted_merchant"]
    },
    {
      id: "txn_002",
      amount: "$2,500.00",
      merchant: "Electronics Store",
      location: "Unknown Location",
      riskScore: 0.89,
      status: "blocked",
      confidence: 0.94,
      factors: ["unusual_amount", "new_merchant", "suspicious_location"]
    },
    {
      id: "txn_003",
      amount: "$75.50",
      merchant: "Coffee Shop",
      location: "New York, NY",
      riskScore: 0.08,
      status: "approved",
      confidence: 0.99,
      factors: ["normal_pattern", "frequent_merchant", "usual_location"]
    }
  ];

  const demoStats = [
    {
      icon: <BarChart3 className="w-6 h-6" />,
      title: "Transactions Analyzed",
      value: "1,247,592",
      change: "+12.5%",
      color: "text-blue-600"
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Fraud Blocked",
      value: "$4.2M",
      change: "+18.3%",
      color: "text-green-600"
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "Avg Response Time",
      value: "0.8ms",
      change: "-5.2%",
      color: "text-orange-600"
    },
    {
      icon: <Brain className="w-6 h-6" />,
      title: "Model Accuracy",
      value: "99.8%",
      change: "+0.1%",
      color: "text-purple-600"
    }
  ];

  const handleAnalyzeTransaction = () => {
    setAnalysisComplete(false);
    // Simulate analysis
    setTimeout(() => {
      setAnalysisComplete(true);
    }, 2000);
  };

  const getRiskLevel = (score: number) => {
    if (score < 0.3) return { level: "Low", color: "bg-green-500", textColor: "text-green-700" };
    if (score < 0.7) return { level: "Medium", color: "bg-yellow-500", textColor: "text-yellow-700" };
    return { level: "High", color: "bg-red-500", textColor: "text-red-700" };
  };

  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-safezone-navy to-safezone-blue">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Interactive Demo
          </h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto mb-8">
            Experience SafeZone's AI-powered fraud detection in action with our live demo dashboard
          </p>
          <div className="inline-flex items-center px-6 py-3 bg-white/10 rounded-full text-white">
            <Shield className="w-5 h-5 mr-2" />
            Sandbox Environment - No Real Data Required
          </div>
        </div>
      </section>

      {/* Demo Dashboard */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Tabs defaultValue="analysis" className="w-full">
            <TabsList className="grid w-full grid-cols-3 mb-12">
              <TabsTrigger value="analysis">Transaction Analysis</TabsTrigger>
              <TabsTrigger value="dashboard">Live Dashboard</TabsTrigger>
              <TabsTrigger value="api">API Playground</TabsTrigger>
            </TabsList>

            <TabsContent value="analysis" className="space-y-8">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-safezone-navy mb-4">Real-time Fraud Analysis</h2>
                <p className="text-xl text-safezone-gray max-w-3xl mx-auto">
                  Test our AI model with sample transaction data or upload your own CSV file
                </p>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Input Form */}
                <Card className="border-0 shadow-lg">
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <Upload className="w-6 h-6 mr-2 text-safezone-blue" />
                      Analyze Transaction
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="amount">Amount ($)</Label>
                        <Input id="amount" placeholder="150.00" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="merchant">Merchant</Label>
                        <Input id="merchant" placeholder="Amazon" />
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="location">Location</Label>
                        <Input id="location" placeholder="San Francisco, CA" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="userId">User ID</Label>
                        <Input id="userId" placeholder="user_12345" />
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="cardNumber">Card Number (Last 4)</Label>
                      <Input id="cardNumber" placeholder="****1234" />
                    </div>
                    
                    <Button 
                      onClick={handleAnalyzeTransaction}
                      className="w-full bg-safezone-blue hover:bg-safezone-blue-dark text-white"
                    >
                      Analyze with AI
                    </Button>
                    
                    <div className="text-center">
                      <p className="text-sm text-safezone-gray mb-2">Or upload CSV file</p>
                      <Button variant="outline" className="w-full">
                        <Upload className="w-4 h-4 mr-2" />
                        Upload Transaction Data
                      </Button>
                    </div>
                  </CardContent>
                </Card>

                {/* Results */}
                <Card className="border-0 shadow-lg">
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <Brain className="w-6 h-6 mr-2 text-safezone-orange" />
                      AI Analysis Results
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    {!analysisComplete ? (
                      <div className="text-center py-12">
                        <div className="animate-spin w-12 h-12 border-4 border-safezone-blue border-t-transparent rounded-full mx-auto mb-4"></div>
                        <p className="text-safezone-gray">Analyzing transaction...</p>
                      </div>
                    ) : (
                      <>
                        <div className="text-center">
                          <div className="text-4xl font-bold text-safezone-navy mb-2">
                            {(riskScore * 100).toFixed(1)}%
                          </div>
                          <p className="text-safezone-gray">Risk Score</p>
                          <div className="mt-4">
                            <Progress value={riskScore * 100} className="h-3" />
                          </div>
                          <div className="mt-2">
                            <Badge className={`${getRiskLevel(riskScore).color} text-white`}>
                              {getRiskLevel(riskScore).level} Risk
                            </Badge>
                          </div>
                        </div>
                        
                        <div className="space-y-4">
                          <div className="flex items-center justify-between p-3 bg-green-50 rounded-lg">
                            <div className="flex items-center">
                              <CheckCircle className="w-5 h-5 text-green-600 mr-2" />
                              <span className="font-medium">Status</span>
                            </div>
                            <Badge className="bg-green-500 text-white">Approved</Badge>
                          </div>
                          
                          <div className="flex items-center justify-between p-3 bg-blue-50 rounded-lg">
                            <span className="font-medium">Confidence</span>
                            <span className="text-safezone-blue font-semibold">97.2%</span>
                          </div>
                          
                          <div className="p-3 bg-gray-50 rounded-lg">
                            <h4 className="font-medium mb-2">Risk Factors</h4>
                            <div className="space-y-1">
                              <div className="flex items-center text-sm">
                                <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                                Normal spending pattern
                              </div>
                              <div className="flex items-center text-sm">
                                <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                                Verified location
                              </div>
                              <div className="flex items-center text-sm">
                                <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                                Trusted merchant
                              </div>
                            </div>
                          </div>
                        </div>
                        
                        <div className="text-center pt-4">
                          <p className="text-sm text-gray-500">Analysis completed in 0.8ms</p>
                        </div>
                      </>
                    )}
                  </CardContent>
                </Card>
              </div>

              {/* Sample Transactions */}
              <div className="mt-16">
                <h3 className="text-2xl font-bold text-safezone-navy mb-8 text-center">Sample Transaction Analysis</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {sampleTransactions.map((transaction, index) => (
                    <Card key={index} className="border-0 shadow-lg">
                      <CardHeader className="pb-3">
                        <div className="flex items-center justify-between">
                          <span className="font-mono text-sm text-gray-500">{transaction.id}</span>
                          <Badge className={transaction.status === 'approved' ? 'bg-green-500 text-white' : 'bg-red-500 text-white'}>
                            {transaction.status}
                          </Badge>
                        </div>
                      </CardHeader>
                      <CardContent className="space-y-3">
                        <div className="flex justify-between">
                          <span className="text-safezone-gray">Amount:</span>
                          <span className="font-semibold">{transaction.amount}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-safezone-gray">Merchant:</span>
                          <span className="font-medium">{transaction.merchant}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-safezone-gray">Risk Score:</span>
                          <span className={`font-semibold ${getRiskLevel(transaction.riskScore).textColor}`}>
                            {(transaction.riskScore * 100).toFixed(1)}%
                          </span>
                        </div>
                        <div className="pt-2">
                          <Progress value={transaction.riskScore * 100} className="h-2" />
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            </TabsContent>

            <TabsContent value="dashboard" className="space-y-8">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-safezone-navy mb-4">Live Analytics Dashboard</h2>
                <p className="text-xl text-safezone-gray max-w-3xl mx-auto">
                  Real-time fraud detection metrics and insights
                </p>
              </div>

              {/* Stats Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
                {demoStats.map((stat, index) => (
                  <Card key={index} className="border-0 shadow-lg">
                    <CardContent className="pt-6">
                      <div className="flex items-center justify-between">
                        <div className={`p-2 bg-gray-100 rounded-lg ${stat.color}`}>
                          {stat.icon}
                        </div>
                        <span className={`text-sm font-medium ${stat.change.startsWith('+') ? 'text-green-600' : 'text-red-600'}`}>
                          {stat.change}
                        </span>
                      </div>
                      <div className="mt-4">
                        <div className="text-2xl font-bold text-safezone-navy">{stat.value}</div>
                        <p className="text-sm text-safezone-gray">{stat.title}</p>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {/* Charts Placeholder */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <Card className="border-0 shadow-lg">
                  <CardHeader>
                    <CardTitle>Fraud Detection Trends</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="h-64 bg-gradient-to-br from-safezone-blue-light to-white rounded-lg flex items-center justify-center">
                      <p className="text-safezone-gray">Interactive chart would be displayed here</p>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-0 shadow-lg">
                  <CardHeader>
                    <CardTitle>Risk Score Distribution</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="h-64 bg-gradient-to-br from-safezone-orange-light to-white rounded-lg flex items-center justify-center">
                      <p className="text-safezone-gray">Interactive chart would be displayed here</p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="api" className="space-y-8">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-safezone-navy mb-4">API Playground</h2>
                <p className="text-xl text-safezone-gray max-w-3xl mx-auto">
                  Test SafeZone APIs with interactive examples
                </p>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <Card className="border-0 shadow-lg">
                  <CardHeader>
                    <CardTitle>API Request</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <pre className="bg-gray-900 text-green-400 p-4 rounded-lg text-sm overflow-x-auto">
{`POST /api/v1/analyze-transaction
Content-Type: application/json
Authorization: Bearer demo_key_123

{
  "transaction_id": "txn_demo_001",
  "amount": 150.00,
  "merchant": "Amazon",
  "user_id": "user_12345",
  "timestamp": "2024-01-15T10:30:00Z",
  "location": "San Francisco, CA",
  "card_last_four": "1234"
}`}
                    </pre>
                    <Button className="w-full mt-4 bg-safezone-blue hover:bg-safezone-blue-dark text-white">
                      Send Request
                    </Button>
                  </CardContent>
                </Card>

                <Card className="border-0 shadow-lg">
                  <CardHeader>
                    <CardTitle>API Response</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <pre className="bg-gray-900 text-blue-400 p-4 rounded-lg text-sm overflow-x-auto">
{`HTTP/1.1 200 OK
Content-Type: application/json

{
  "transaction_id": "txn_demo_001",
  "risk_score": 0.15,
  "status": "approved",
  "confidence": 0.97,
  "processing_time_ms": 0.8,
  "factors": [
    "normal_spending_pattern",
    "verified_location", 
    "trusted_merchant"
  ],
  "recommendations": [
    "allow_transaction"
  ]
}`}
                    </pre>
                  </CardContent>
                </Card>
              </div>

              <Card className="border-0 shadow-lg mt-8">
                <CardHeader>
                  <CardTitle>Try Different Scenarios</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <Button variant="outline" className="p-4 h-auto flex flex-col">
                      <span className="font-semibold mb-1">Normal Transaction</span>
                      <span className="text-sm text-gray-500">Low risk, trusted merchant</span>
                    </Button>
                    <Button variant="outline" className="p-4 h-auto flex flex-col">
                      <span className="font-semibold mb-1">Suspicious Activity</span>
                      <span className="text-sm text-gray-500">High amount, new location</span>
                    </Button>
                    <Button variant="outline" className="p-4 h-auto flex flex-col">
                      <span className="font-semibold mb-1">Edge Case</span>
                      <span className="text-sm text-gray-500">Multiple risk factors</span>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-safezone-navy">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Implement SafeZone?
          </h2>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto mb-8">
            Contact our team to discuss implementation and get access to full API documentation
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-safezone-blue hover:bg-safezone-blue-dark text-white px-8 py-3">
              Schedule Implementation Call
            </Button>
            <Button variant="outline" className="border-white text-white hover:bg-white hover:text-safezone-navy px-8 py-3">
              Get API Access
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Demo;