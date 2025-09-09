import { Link } from "react-router-dom";
import { Mail, Phone, MapPin, Linkedin, Twitter } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo & Description */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <img
                src="/lovable-uploads/f147307d-dc27-40b5-9b7b-86d111d56ef6.png"
                alt="SARA Robotics & Automation Services"
                className="h-10 w-auto filter brightness-0 invert"
              />
            </div>
            <p className="text-primary-foreground/80 mb-6 max-w-md">
              Leading provider of robotics and automation services since 2018. 
              Specializing in CNC, VMC, welding fixtures, and advanced manufacturing solutions.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary-foreground/80 hover:text-secondary transition-colors"
              >
                <Linkedin size={24} />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary-foreground/80 hover:text-secondary transition-colors"
              >
                <Twitter size={24} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {[
                { name: "Home", path: "/" },
                { name: "About", path: "/about" },
                { name: "Products", path: "/products" },
                { name: "Services", path: "/services" },
                { name: "Contact", path: "/contact" },
              ].map((item) => (
                <li key={item.name}>
                  <Link
                    to={item.path}
                    className="text-primary-foreground/80 hover:text-secondary transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <MapPin size={18} className="mt-1 text-secondary" />
                <div className="text-sm text-primary-foreground/80">
                  Survey No. 38/1, Shade No. 3,<br />
                  Nanashri Warehouse, Khedekar Industry Estate,<br />
                  Narhegaon - 411041
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Phone size={18} className="text-secondary" />
                <a
                  href="tel:+919960222472"
                  className="text-sm text-primary-foreground/80 hover:text-secondary"
                >
                  +91-9960222472
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Mail size={18} className="text-secondary" />
                <a
                  href="mailto:rahulr@sararoboautomation.com"
                  className="text-sm text-primary-foreground/80 hover:text-secondary"
                >
                  rahulr@sararoboautomation.com
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center">
          <p className="text-primary-foreground/80">
            © 2025 SARA Robotics & Automation Services. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;