import { Link } from "react-router-dom";
import { 
  Mail, 
  Phone, 
  MapPin, 
  Linkedin, 
  Twitter, 
  Facebook,
  Instagram
} from "lucide-react";

const Footer = () => {
  return (
    <footer className="relative bg-gradient-to-br from-white via-gray-50 to-gray-100 pt-32 pb-12 overflow-hidden">
      {/* Background patterns */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-secondary/5 to-accent/5"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 max-w-7xl mx-auto">
          {/* Brand Section */}
          <div className="group">
            <div className="flex items-center mb-8">
              <div className="flex items-center space-x-3">
                <img
                  src="/lovable-uploads/f147307d-dc27-40b5-9b7b-86d111d56ef6.png"
                  alt="SARA Robotics & Automation Services"
                  className="h-12 w-auto group-hover:scale-105 transition-transform duration-300"
                />
              </div>
            </div>
            <p className="text-gray-600 leading-relaxed mb-8">
              Leading provider of robotics and automation services since 2018. 
              Specializing in CNC, VMC, welding fixtures, and advanced manufacturing solutions.
            </p>
            <div className="flex space-x-4">
              {[
                { icon: Facebook, href: "#" },
                { icon: Twitter, href: "#" },
                { icon: Linkedin, href: "#" },
                { icon: Instagram, href: "#" }
              ].map((social, idx) => (
                <a 
                  key={idx}
                  href={social.href} 
                  className="w-10 h-10 rounded-xl bg-white/90 border border-black/10 flex items-center justify-center text-gray-600 hover:bg-gradient-to-br hover:from-primary hover:to-secondary hover:text-white hover:border-transparent transition-all duration-300 shadow-sm hover:shadow-lg"
                >
                  <social.icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* Products Section */}
          <div>
            <h4 className="text-lg font-bold tracking-tight mb-6 bg-gradient-to-r from-black via-gray-800 to-gray-600 bg-clip-text text-transparent">Products</h4>
            <ul className="space-y-4">
              {[
                "Testing Equipment",
                "Welding Fixtures",
                "Welding Automation",
                "Tooling & Fixturing",
                "Material Handling"
              ].map((product, idx) => (
                <li key={idx}>
                  <Link to="/products" className="text-gray-600 hover:text-black transition-colors duration-300 flex items-center group">
                    <span className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-primary to-secondary mr-2 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                    {product}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Section */}
          <div>
            <h4 className="text-lg font-bold tracking-tight mb-6 bg-gradient-to-r from-black via-gray-800 to-gray-600 bg-clip-text text-transparent">Company</h4>
            <ul className="space-y-4">
              {[
                { name: "Home", path: "/" },
                { name: "About Us", path: "/about" },
                { name: "Products", path: "/products" },
                { name: "Services", path: "/services" },
                { name: "Contact", path: "/contact" }
              ].map((item, idx) => (
                <li key={idx}>
                  <Link to={item.path} className="text-gray-600 hover:text-black transition-colors duration-300 flex items-center group">
                    <span className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-primary to-secondary mr-2 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Section */}
          <div>
            <h4 className="text-lg font-bold tracking-tight mb-6 bg-gradient-to-r from-black via-gray-800 to-gray-600 bg-clip-text text-transparent">Contact</h4>
            <ul className="space-y-4">
              <li className="text-gray-600 flex items-start">
                <MapPin className="w-5 h-5 mr-2 mt-1 text-gray-400 flex-shrink-0" />
                <span className="text-sm">
                  Survey No. 38/1, Shade No. 3,<br />
                  Nanashri Warehouse,<br />
                  Khedekar Industry Estate,<br />
                  Narhegaon - 411041
                </span>
              </li>
              <li>
                <a href="tel:+919960222472" className="text-gray-600 hover:text-black transition-colors duration-300 flex items-center group">
                  <Phone className="w-5 h-5 mr-2 text-gray-400" />
                  +91-9960222472
                </a>
              </li>
              <li>
                <a href="mailto:rahulr@sararoboautomation.com" className="text-gray-600 hover:text-black transition-colors duration-300 flex items-center group">
                  <Mail className="w-5 h-5 mr-2 text-gray-400" />
                  <span className="text-sm break-all">rahulr@sararoboautomation.com</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-24 pt-8 border-t border-black/10 text-center">
          <p className="text-gray-500 text-sm font-medium">
            © {new Date().getFullYear()} SARA Robotics & Automation Services. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;