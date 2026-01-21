import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, Facebook, Instagram } from "lucide-react";
import logo from "@/assets/logo.png";

const WHATSAPP_NUMBER = "94779293411";

const quickLinks = [
  { name: "Home", path: "/" },
  { name: "Tours", path: "/tours" },
  { name: "Destinations", path: "/destinations" },
  { name: "Services", path: "/services" },
  { name: "Gallery", path: "/gallery" },
  { name: "About", path: "/about" },
  { name: "Contact", path: "/contact" },
];

const tourPackages = [
  { name: "08 Days Adventure", path: "/tours" },
  { name: "08 Days Premium", path: "/tours" },
  { name: "05 Days Explorer", path: "/tours" },
  { name: "Airport Transfers", path: "/services" },
];

export function Footer() {
  return (
    <footer className="bg-foreground text-background">
      <div className="container-custom section-padding">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About Section */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <img 
                src={logo} 
                alt="Sri Ceylon Tours" 
                className="h-14 w-auto object-contain bg-white rounded-lg p-1"
              />
            </div>
            <p className="text-background/80 text-sm leading-relaxed mb-4">
              Experience the heart of paradise with Sri Ceylon Tours. We offer premium guided tours 
              across Sri Lanka's most breathtaking destinations with professional service and 
              unforgettable memories.
            </p>
            <div className="flex gap-3">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-background/10 hover:bg-primary rounded-full flex items-center justify-center transition-colors"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-background/10 hover:bg-primary rounded-full flex items-center justify-center transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="https://tripadvisor.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-background/10 hover:bg-primary rounded-full flex items-center justify-center transition-colors"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-background/80 hover:text-primary transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Tour Packages */}
          <div>
            <h4 className="font-bold text-lg mb-4">Our Tours</h4>
            <ul className="space-y-2">
              {tourPackages.map((tour, index) => (
                <li key={index}>
                  <Link
                    to={tour.path}
                    className="text-background/80 hover:text-primary transition-colors text-sm"
                  >
                    {tour.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-bold text-lg mb-4">Contact Us</h4>
            <ul className="space-y-3">
              <li>
                <a
                  href={`https://wa.me/${WHATSAPP_NUMBER}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-background/80 hover:text-primary transition-colors text-sm"
                >
                  <Phone className="w-5 h-5 text-primary" />
                  +94 77 929 3411
                </a>
              </li>
              <li>
                <a
                  href="mailto:info@sriceylontours.com"
                  className="flex items-center gap-3 text-background/80 hover:text-primary transition-colors text-sm"
                >
                  <Mail className="w-5 h-5 text-primary" />
                  info@sriceylontours.com
                </a>
              </li>
              <li className="flex items-start gap-3 text-background/80 text-sm">
                <MapPin className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <span>Colombo, Sri Lanka</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-background/10">
        <div className="container-custom py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-background/60">
            <p>© {new Date().getFullYear()} Sri Ceylon Tours. All rights reserved.</p>
            <p>Experience the Heart of Paradise</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
