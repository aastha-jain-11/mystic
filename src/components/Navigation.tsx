import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Star, Moon } from 'lucide-react';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'About Me', path: '/about' },
    { name: 'Book Session', path: '/booking' },
    { name: 'Achievements', path: '/achievements' },
    { name: 'Blog', path: '/blog' },
    { name: 'Dashboard', path: '/dashboard' },
  ];

  return (
    <nav className="relative z-50 bg-white/10 backdrop-blur-md border-b border-white/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2 group">
            <div className="relative">
              <Star className="h-8 w-8 text-accent-400 animate-twinkle" />
              <Moon className="h-4 w-4 text-accent-300 absolute -top-1 -right-1 animate-float" />
            </div>
            <span className="text-white text-xl font-bold bg-gradient-to-r from-accent-400 to-primary-400 bg-clip-text text-transparent">
              Mystic Numbers
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={`text-white/90 hover:text-accent-300 transition-all duration-300 relative group ${
                  location.pathname === item.path ? 'text-accent-400' : ''
                }`}
              >
                {item.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-accent-400 group-hover:w-full transition-all duration-300"></span>
              </Link>
            ))}
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-white p-2"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-mystic-900/95 backdrop-blur-md border-b border-white/20">
            <div className="px-4 py-4 space-y-3">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  onClick={() => setIsOpen(false)}
                  className={`block text-white/90 hover:text-accent-300 transition-colors py-2 ${
                    location.pathname === item.path ? 'text-accent-400' : ''
                  }`}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;