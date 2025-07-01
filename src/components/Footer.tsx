import React from 'react';
import { Mail, Phone, MapPin, Star, Heart, Facebook, Instagram, Twitter, Youtube } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="relative bg-mystic-900/80 backdrop-blur-sm border-t border-white/10 py-12 mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-6 gap-8">
          {/* Brand */}
          <div className="md:col-span-2">
            <Link to="/" className="flex items-center space-x-2 mb-4">
              <Star className="h-8 w-8 text-accent-400" />
              <span className="text-white text-xl font-bold">Mystic Numbers</span>
            </Link>
            <p className="text-white/70 text-sm leading-relaxed mb-4">
              Guiding souls through the sacred wisdom of numbers. Discover your cosmic blueprint 
              and align with your highest purpose.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-white/60 hover:text-accent-400 transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-white/60 hover:text-accent-400 transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-white/60 hover:text-accent-400 transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-white/60 hover:text-accent-400 transition-colors">
                <Youtube className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* empty div */}
          <div className="md:col-span-1"></div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/about" className="text-white/70 hover:text-accent-400 transition-colors text-sm">
                  About Me
                </Link>
              </li>
              <li>
                <Link to="/booking" className="text-white/70 hover:text-accent-400 transition-colors text-sm">
                  Book a Session
                </Link>
              </li>
              <li>
                <Link to="/achievements" className="text-white/70 hover:text-accent-400 transition-colors text-sm">
                  Testimonials
                </Link>
              </li>
              <li>
                <Link to="/blog" className="text-white/70 hover:text-accent-400 transition-colors text-sm">
                  Blog & Insights
                </Link>
              </li>
              <li>
                <Link to="/dashboard" className="text-white/70 hover:text-accent-400 transition-colors text-sm">
                  Client Portal
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              <li className="text-white/70 text-sm">Life Path Readings</li>
              <li className="text-white/70 text-sm">Relationship Compatibility</li>
              <li className="text-white/70 text-sm">Career Guidance</li>
              <li className="text-white/70 text-sm">Personal Year Forecasts</li>
              <li className="text-white/70 text-sm">Complete Chart Analysis</li>
            </ul>
          </div>

          {/* Contact */}
          {/* <div>
            <h3 className="text-white font-semibold mb-4">Contact</h3>
            <div className="space-y-3">
              <div className="flex items-center text-white/70 text-sm">
                <Mail className="h-4 w-4 mr-3 text-accent-400" />
                hello@mysticnumbers.com
              </div>
              <div className="flex items-center text-white/70 text-sm">
                <Phone className="h-4 w-4 mr-3 text-accent-400" />
                
              </div>
              <div className="flex items-center text-white/70 text-sm">
                <MapPin className="h-4 w-4 mr-3 text-accent-400" />
                Los Angeles, CA
              </div>
            </div>
          </div> */}
        </div>

        <div className="border-t border-white/10 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-white/60 text-sm">
            © 2025 Mystic Numbers. All rights reserved.
          </p>
          <div className="flex items-center mt-4 md:mt-0">
            <span className="text-white/60 text-sm mr-2">Made with</span>
            <Heart className="h-4 w-4 text-pink-400 mr-2" />
            <span className="text-white/60 text-sm">for spiritual seekers</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;