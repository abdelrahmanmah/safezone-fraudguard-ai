import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Mail, Phone, MapPin, MessageCircle, Clock, Globe } from "lucide-react";

const Contact = () => {
  const contactMethods = [
    {
      icon: <Mail className="w-6 h-6" />,
      title: "Email Support",
      description: "Get help from our support team",
      contact: "support@safezone.ai",
      availability: "24/7 Response"
    },
    {
      icon: <Phone className="w-6 h-6" />,
      title: "Phone Support",
      description: "Speak directly with our experts",
      contact: "+1 (555) 123-4567",
      availability: "Mon-Fri, 9AM-6PM EST"
    },
    {
      icon: <MessageCircle className="w-6 h-6" />,
      title: "Live Chat",
      description: "Chat with FraudGuard AI bot",
      contact: "Available on website",
      availability: "24/7 Available"
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: "Office Location",
      description: "Visit our headquarters",
      contact: "123 Innovation Drive, San Francisco, CA 94105",
      availability: "By Appointment"
    }
  ];

  const offices = [
    {
      city: "San Francisco",
      address: "123 Innovation Drive, Suite 400",
      phone: "+1 (555) 123-4567",
      type: "Headquarters"
    },
    {
      city: "New York",
      address: "456 Financial District, Floor 25",
      phone: "+1 (555) 987-6543",
      type: "Sales Office"
    },
    {
      city: "London",
      address: "789 Canary Wharf, Level 12",
      phone: "+44 20 7123 4567",
      type: "European Office"
    }
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-safezone-navy to-safezone-blue">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Contact Us
          </h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto mb-8">
            Get in touch with our team to learn how SafeZone can protect your financial institution and customers
          </p>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-safezone-navy mb-4">
              Get In Touch
            </h2>
            <p className="text-xl text-safezone-gray max-w-3xl mx-auto">
              Choose the best way to reach us for your specific needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {contactMethods.map((method, index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow text-center">
                <CardContent className="pt-8">
                  <div className="inline-flex p-4 bg-safezone-blue-light rounded-full text-safezone-blue mb-4">
                    {method.icon}
                  </div>
                  <h3 className="text-lg font-semibold text-safezone-navy mb-2">{method.title}</h3>
                  <p className="text-sm text-safezone-gray mb-3">{method.description}</p>
                  <p className="text-sm font-medium text-safezone-blue mb-2">{method.contact}</p>
                  <p className="text-xs text-gray-500">{method.availability}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-20 bg-safezone-gray-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Form */}
            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="text-2xl text-safezone-navy">Send us a message</CardTitle>
                <p className="text-safezone-gray">Fill out the form below and we'll get back to you within 24 hours</p>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="firstName">First Name</Label>
                    <Input id="firstName" placeholder="John" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="lastName">Last Name</Label>
                    <Input id="lastName" placeholder="Doe" />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" type="email" placeholder="john@company.com" />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="company">Company</Label>
                  <Input id="company" placeholder="Your Bank/Organization" />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="inquiryType">Inquiry Type</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select inquiry type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="partnership">Partnership Inquiry</SelectItem>
                      <SelectItem value="demo">Request Demo</SelectItem>
                      <SelectItem value="technical">Technical Support</SelectItem>
                      <SelectItem value="pricing">Pricing Information</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="message">Message</Label>
                  <Textarea 
                    id="message" 
                    placeholder="Tell us about your fraud detection needs and how we can help..."
                    rows={6}
                  />
                </div>
                
                <div className="flex items-center space-x-2">
                  <input type="checkbox" id="captcha" className="rounded" />
                  <Label htmlFor="captcha" className="text-sm text-safezone-gray">
                    I'm not a robot (CAPTCHA verification)
                  </Label>
                </div>
                
                <Button className="w-full bg-safezone-blue hover:bg-safezone-blue-dark text-white">
                  Send Message
                </Button>
                
                <p className="text-xs text-gray-500 text-center">
                  By submitting this form, you agree to our Privacy Policy and Terms of Service
                </p>
              </CardContent>
            </Card>

            {/* Contact Info & Map */}
            <div className="space-y-8">
              <Card className="border-0 shadow-lg">
                <CardHeader>
                  <CardTitle className="flex items-center text-safezone-navy">
                    <Globe className="w-6 h-6 mr-2 text-safezone-blue" />
                    Our Offices
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  {offices.map((office, index) => (
                    <div key={index} className="border-l-4 border-safezone-blue pl-4">
                      <div className="flex items-center justify-between mb-2">
                        <h4 className="font-semibold text-safezone-navy">{office.city}</h4>
                        <span className="text-xs bg-safezone-blue-light text-safezone-blue px-2 py-1 rounded">
                          {office.type}
                        </span>
                      </div>
                      <p className="text-sm text-safezone-gray mb-1">{office.address}</p>
                      <p className="text-sm text-safezone-gray">{office.phone}</p>
                    </div>
                  ))}
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg">
                <CardHeader>
                  <CardTitle className="flex items-center text-safezone-navy">
                    <Clock className="w-6 h-6 mr-2 text-safezone-orange" />
                    Business Hours
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-safezone-gray">Monday - Friday</span>
                      <span className="font-medium">9:00 AM - 6:00 PM EST</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-safezone-gray">Saturday</span>
                      <span className="font-medium">10:00 AM - 2:00 PM EST</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-safezone-gray">Sunday</span>
                      <span className="font-medium">Closed</span>
                    </div>
                    <div className="pt-4 border-t">
                      <div className="flex justify-between">
                        <span className="text-safezone-gray">Emergency Support</span>
                        <span className="font-medium text-safezone-orange">24/7 Available</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* FraudGuard AI Chat */}
              <Card className="border-0 shadow-lg bg-gradient-to-br from-safezone-blue to-safezone-navy text-white">
                <CardContent className="pt-6">
                  <div className="flex items-center mb-4">
                    <MessageCircle className="w-8 h-8 mr-3" />
                    <div>
                      <h3 className="text-lg font-semibold">Try FraudGuard AI</h3>
                      <p className="text-blue-100 text-sm">Get instant answers about fraud detection</p>
                    </div>
                  </div>
                  <div className="bg-white/10 rounded-lg p-4 mb-4">
                    <p className="text-sm text-blue-100 mb-2">Ask questions like:</p>
                    <ul className="text-xs text-blue-200 space-y-1">
                      <li>• "How does SafeZone detect stolen cards?"</li>
                      <li>• "What's your false positive rate?"</li>
                      <li>• "How fast is your fraud detection?"</li>
                    </ul>
                  </div>
                  <Button variant="outline" className="w-full border-white text-white hover:bg-white hover:text-safezone-blue">
                    Start Chat with FraudGuard AI
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Social Media */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h3 className="text-2xl font-bold text-safezone-navy mb-6">Follow Us</h3>
          <div className="flex justify-center space-x-6">
            <Button variant="outline" className="border-safezone-blue text-safezone-blue hover:bg-safezone-blue hover:text-white">
              LinkedIn
            </Button>
            <Button variant="outline" className="border-safezone-blue text-safezone-blue hover:bg-safezone-blue hover:text-white">
              Twitter
            </Button>
            <Button variant="outline" className="border-safezone-blue text-safezone-blue hover:bg-safezone-blue hover:text-white">
              GitHub
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;