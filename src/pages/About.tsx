import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Shield, Users, Award, Target, Globe, Zap } from "lucide-react";

const About = () => {
  const teamMembers = [
    {
      name: "Dr. Sarah Chen",
      role: "CEO & Co-Founder",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b193?w=400&h=400&fit=crop&crop=face",
      bio: "Former head of AI at major fintech company with 15+ years in fraud detection"
    },
    {
      name: "Marcus Rodriguez",
      role: "CTO & Co-Founder",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face",
      bio: "Ex-Google engineer specializing in real-time machine learning systems"
    },
    {
      name: "Dr. Priya Patel",
      role: "Chief Data Scientist",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=400&fit=crop&crop=face",
      bio: "PhD in Machine Learning, former researcher at MIT focusing on financial AI"
    },
    {
      name: "James Wilson",
      role: "VP of Cybersecurity",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face",
      bio: "20+ years in cybersecurity, former CISO at Fortune 500 financial institution"
    },
    {
      name: "Elena Kowalski",
      role: "Head of Product",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop&crop=face",
      bio: "Product leader with experience building fintech solutions at scale"
    },
    {
      name: "David Kim",
      role: "VP of Engineering",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop&crop=face",
      bio: "Full-stack engineer with expertise in distributed systems and API design"
    }
  ];

  const timeline = [
    {
      year: "2021",
      title: "Company Founded",
      description: "SafeZone established by former fintech and AI executives"
    },
    {
      year: "2022",
      title: "First AI Model Deployed",
      description: "Launched beta version with 95% accuracy rate"
    },
    {
      year: "2022",
      title: "Pilot with Regional Bank",
      description: "Successfully prevented $50M in fraud during 6-month pilot"
    },
    {
      year: "2023",
      title: "Series A Funding",
      description: "Raised $25M to expand AI capabilities and team"
    },
    {
      year: "2023",
      title: "99% Accuracy Achieved",
      description: "Major breakthrough in ML model performance"
    },
    {
      year: "2024",
      title: "500+ Bank Partners",
      description: "Reached milestone of protecting over 10M users globally"
    }
  ];

  const values = [
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Security First",
      description: "We prioritize the highest levels of security and privacy in everything we build."
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: "Precision & Accuracy",
      description: "Our AI models are trained for maximum accuracy with minimal false positives."
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Real-time Innovation",
      description: "We continuously push the boundaries of what's possible in fraud detection speed."
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Customer-Centric",
      description: "Every decision we make is focused on protecting and empowering our users."
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: "Global Impact",
      description: "We're committed to making digital payments safer worldwide."
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: "Excellence",
      description: "We strive for excellence in our technology, service, and partnerships."
    }
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-safezone-navy to-safezone-blue">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            About SafeZone
          </h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto mb-8">
            Making digital payments safer with cutting-edge AI technology and unwavering commitment to security
          </p>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-safezone-navy mb-6">
              Our Mission
            </h2>
            <p className="text-xl text-safezone-gray max-w-4xl mx-auto leading-relaxed">
              To revolutionize financial security by providing the world's most advanced AI-powered fraud detection platform, 
              protecting billions in transactions while ensuring seamless user experiences for banks and consumers alike.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="text-center border-0 shadow-lg">
              <CardContent className="pt-8">
                <div className="inline-flex p-4 bg-safezone-blue-light rounded-full text-safezone-blue mb-4">
                  <Shield className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-semibold text-safezone-navy mb-2">Protect</h3>
                <p className="text-safezone-gray">Safeguard financial institutions and users from sophisticated fraud attacks</p>
              </CardContent>
            </Card>
            <Card className="text-center border-0 shadow-lg">
              <CardContent className="pt-8">
                <div className="inline-flex p-4 bg-safezone-orange-light rounded-full text-safezone-orange mb-4">
                  <Zap className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-semibold text-safezone-navy mb-2">Innovate</h3>
                <p className="text-safezone-gray">Push the boundaries of AI technology in real-time fraud detection</p>
              </CardContent>
            </Card>
            <Card className="text-center border-0 shadow-lg">
              <CardContent className="pt-8">
                <div className="inline-flex p-4 bg-green-100 rounded-full text-green-600 mb-4">
                  <Globe className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-semibold text-safezone-navy mb-2">Scale</h3>
                <p className="text-safezone-gray">Enable secure digital payments for millions of users worldwide</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-safezone-gray-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-safezone-navy mb-6">
              Meet Our Team
            </h2>
            <p className="text-xl text-safezone-gray max-w-3xl mx-auto">
              Our world-class team combines deep expertise in AI, cybersecurity, and financial technology
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow text-center">
                <CardContent className="pt-8">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
                  />
                  <h3 className="text-xl font-semibold text-safezone-navy mb-1">{member.name}</h3>
                  <p className="text-safezone-blue font-medium mb-3">{member.role}</p>
                  <p className="text-sm text-safezone-gray">{member.bio}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Company Timeline */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-safezone-navy mb-6">
              Our Journey
            </h2>
            <p className="text-xl text-safezone-gray max-w-3xl mx-auto">
              Key milestones in building the world's most advanced fraud detection platform
            </p>
          </div>

          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-safezone-blue"></div>
            <div className="space-y-12">
              {timeline.map((event, index) => (
                <div key={index} className={`flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}>
                  <div className={`w-1/2 ${index % 2 === 0 ? 'pr-12 text-right' : 'pl-12 text-left'}`}>
                    <Card className="border-0 shadow-lg">
                      <CardHeader>
                        <div className={`flex items-center ${index % 2 === 0 ? 'justify-end' : 'justify-start'}`}>
                          <span className="bg-safezone-blue text-white px-3 py-1 rounded-full text-sm font-semibold">
                            {event.year}
                          </span>
                        </div>
                        <CardTitle className="text-lg">{event.title}</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-safezone-gray">{event.description}</p>
                      </CardContent>
                    </Card>
                  </div>
                  <div className="relative">
                    <div className="w-4 h-4 bg-safezone-orange rounded-full border-4 border-white shadow-lg"></div>
                  </div>
                  <div className="w-1/2"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-safezone-gray-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-safezone-navy mb-6">
              Our Values
            </h2>
            <p className="text-xl text-safezone-gray max-w-3xl mx-auto">
              The principles that guide everything we do at SafeZone
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow text-center">
                <CardContent className="pt-8">
                  <div className="inline-flex p-4 bg-safezone-blue-light rounded-full text-safezone-blue mb-4">
                    {value.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-safezone-navy mb-3">{value.title}</h3>
                  <p className="text-safezone-gray">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-safezone-navy">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Join Our Mission?
          </h2>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto mb-8">
            Whether you're a financial institution looking to protect your customers or a talented individual wanting to make an impact, we'd love to hear from you.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-safezone-blue hover:bg-safezone-blue-dark text-white px-8 py-3">
              Partner With Us
            </Button>
            <Button variant="outline" className="border-white text-white hover:bg-white hover:text-safezone-navy px-8 py-3">
              View Careers
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;