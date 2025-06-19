import { Shield, Mail, Phone, MapPin } from "lucide-react";
const Footer = () => {
  const footerLinks = {
    solution: {
      title: "Solution",
      links: [{
        name: "For Banks",
        href: "#banks"
      }, {
        name: "For Users",
        href: "#users"
      }, {
        name: "API Integration",
        href: "#api"
      }, {
        name: "Pricing",
        href: "#pricing"
      }]
    },
    resources: {
      title: "Resources",
      links: [{
        name: "Documentation",
        href: "#docs"
      }, {
        name: "API Reference",
        href: "#api-docs"
      }, {
        name: "White Papers",
        href: "#whitepapers"
      }, {
        name: "Case Studies",
        href: "#cases"
      }]
    },
    company: {
      title: "Company",
      links: [{
        name: "About Us",
        href: "#about"
      }, {
        name: "Careers",
        href: "#careers"
      }, {
        name: "News",
        href: "#news"
      }, {
        name: "Contact",
        href: "#contact"
      }]
    },
    legal: {
      title: "Legal",
      links: [{
        name: "Privacy Policy",
        href: "#privacy"
      }, {
        name: "Terms of Service",
        href: "#terms"
      }, {
        name: "Security",
        href: "#security"
      }, {
        name: "Compliance",
        href: "#compliance"
      }]
    }
  };
  return <footer className="bg-safezone-navy text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="bg-safezone-blue p-2 rounded-lg">
                <Shield className="h-6 w-6 text-white" />
              </div>
              <span className="text-xl font-bold">SafeZone</span>
            </div>
            <p className="text-gray-300 mb-6 leading-relaxed">
              AI-powered fraud detection that protects financial institutions and their customers 
              with real-time analysis and instant alerts.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-safezone-orange" />
                <span className="text-gray-300">support@safezone.ai</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-safezone-orange" />
                <span className="text-gray-300">+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="w-5 h-5 text-safezone-orange" />
                <span className="text-gray-300">San Francisco, CA</span>
              </div>
            </div>
          </div>

          {/* Links Sections */}
          {Object.entries(footerLinks).map(([key, section]) => <div key={key}>
              <h3 className="font-semibold text-white mb-4">{section.title}</h3>
              <ul className="space-y-3">
                {section.links.map((link, index) => <li key={index}>
                    <a href={link.href} className="text-gray-300 hover:text-safezone-orange transition-colors">
                      {link.name}
                    </a>
                  </li>)}
              </ul>
            </div>)}
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-700 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-300 mb-4 md:mb-0">© 2025 SafeZone. All rights reserved.</div>
            
            {/* Social Links */}
            <div className="flex space-x-6">
              <a href="#" className="text-gray-300 hover:text-safezone-orange transition-colors">
                LinkedIn
              </a>
              <a href="#" className="text-gray-300 hover:text-safezone-orange transition-colors">
                Twitter
              </a>
              <a href="#" className="text-gray-300 hover:text-safezone-orange transition-colors">
                GitHub
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>;
};
export default Footer;