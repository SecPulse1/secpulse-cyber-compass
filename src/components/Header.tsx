
import React, { useState, useEffect, useRef } from 'react';
import { Menu, X, Moon, Sun, Globe, Shield } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface HeaderProps {
  darkMode: boolean;
  setDarkMode: (dark: boolean) => void;
  language: string;
  setLanguage: (lang: string) => void;
  currentPage: string;
  setCurrentPage: (page: string) => void;
}

const Header: React.FC<HeaderProps> = ({ 
  darkMode, 
  setDarkMode, 
  language, 
  setLanguage, 
  currentPage, 
  setCurrentPage 
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [languageDropdownOpen, setLanguageDropdownOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const languages = [
    { code: 'en', name: 'English', flag: '🇺🇸' },
    { code: 'es', name: 'Español', flag: '🇪🇸' },
    { code: 'fr', name: 'Français', flag: '🇫🇷' },
    { code: 'ar', name: 'العربية', flag: '🇸🇦' },
    { code: 'de', name: 'Deutsch', flag: '🇩🇪' },
    { code: 'ja', name: '日本語', flag: '🇯🇵' }
  ];

  const navItems = [
    { id: 'home', label: 'Home', description: 'Latest cybersecurity news' },
    { id: 'tools', label: 'Tools', description: 'Security tools library' },
    { id: 'learning', label: 'Learning', description: 'Educational platforms' },
    { id: 'roadmap', label: 'Learning Path', description: 'Personalized roadmaps' },
    { id: 'about', label: 'About', description: 'About the creator' },
    { id: 'contact', label: 'Contact', description: 'Get in touch' }
  ];

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setLanguageDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <header className={`sticky top-0 z-50 transition-all duration-300 ${
      scrolled 
        ? 'bg-background/80 backdrop-blur-md border-b shadow-lg' 
        : 'bg-background/95 backdrop-blur-sm border-b'
    }`}>
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Enhanced Logo */}
          <div className="flex items-center space-x-3 group cursor-pointer" onClick={() => setCurrentPage('home')}>
            <div className="relative">
              <img 
                src="https://www.svgrepo.com/show/284852/worldwide-security-security.svg" 
                alt="SecPulse Logo" 
                className="w-10 h-10 transition-transform group-hover:scale-110 group-hover:rotate-12"
              />
              <div className="absolute inset-0 bg-primary/20 rounded-full blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
            <div>
              <h1 className="text-2xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                SecPulse
              </h1>
              <p className="text-xs text-muted-foreground hidden sm:block">Smart Cybersecurity Hub</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-1">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => setCurrentPage(item.id)}
                className={`nav-link px-4 py-2 rounded-lg transition-all duration-200 relative group ${
                  currentPage === item.id ? 'active bg-primary/10' : 'hover:bg-accent/10'
                }`}
                title={item.description}
              >
                {item.label}
                {currentPage === item.id && (
                  <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-primary rounded-full"></div>
                )}
              </button>
            ))}
          </nav>

          {/* Controls */}
          <div className="flex items-center space-x-3">
            {/* Language Selector */}
            <div className="relative" ref={dropdownRef}>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setLanguageDropdownOpen(!languageDropdownOpen)}
                className="hidden sm:flex items-center space-x-2 hover:bg-accent/10"
              >
                <Globe className="w-4 h-4" />
                <span className="text-sm">{languages.find(l => l.code === language)?.flag}</span>
                <span className="text-sm font-medium">{languages.find(l => l.code === language)?.name}</span>
              </Button>
              
              {languageDropdownOpen && (
                <div className="absolute right-0 top-full mt-2 bg-popover/95 backdrop-blur-md border rounded-xl shadow-xl py-2 min-w-[160px] z-50 animate-fade-in">
                  {languages.map((lang) => (
                    <button
                      key={lang.code}
                      onClick={() => {
                        setLanguage(lang.code);
                        setLanguageDropdownOpen(false);
                      }}
                      className={`w-full text-left px-4 py-3 text-sm hover:bg-accent/10 transition-colors flex items-center space-x-3 ${
                        language === lang.code ? 'text-primary font-medium bg-primary/5' : ''
                      }`}
                    >
                      <span className="text-lg">{lang.flag}</span>
                      <span>{lang.name}</span>
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Dark Mode Toggle */}
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setDarkMode(!darkMode)}
              className="p-2 hover:bg-accent/10 relative group"
              title={darkMode ? 'Switch to light mode' : 'Switch to dark mode'}
            >
              <div className="relative">
                {darkMode ? (
                  <Sun className="w-5 h-5 text-yellow-500 group-hover:rotate-180 transition-transform duration-300" />
                ) : (
                  <Moon className="w-5 h-5 text-blue-600 group-hover:-rotate-12 transition-transform duration-300" />
                )}
              </div>
            </Button>

            {/* Mobile Menu Button */}
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 hover:bg-accent/10"
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </Button>
          </div>
        </div>

        {/* Enhanced Mobile Navigation */}
        {mobileMenuOpen && (
          <nav className="lg:hidden mt-6 pb-6 border-t pt-6 animate-fade-in">
            <div className="grid grid-cols-1 gap-2">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => {
                    setCurrentPage(item.id);
                    setMobileMenuOpen(false);
                  }}
                  className={`nav-link text-left p-4 rounded-lg transition-all duration-200 group ${
                    currentPage === item.id ? 'active bg-primary/10 border-l-4 border-primary' : 'hover:bg-accent/10'
                  }`}
                >
                  <div className="font-medium">{item.label}</div>
                  <div className="text-sm text-muted-foreground mt-1">{item.description}</div>
                </button>
              ))}
            </div>

            {/* Mobile Language Selector */}
            <div className="mt-6 pt-4 border-t">
              <div className="flex flex-wrap gap-2">
                {languages.map((lang) => (
                  <button
                    key={lang.code}
                    onClick={() => setLanguage(lang.code)}
                    className={`flex items-center space-x-2 px-3 py-2 rounded-lg text-sm transition-colors ${
                      language === lang.code 
                        ? 'bg-primary/10 text-primary border border-primary/20' 
                        : 'bg-accent/10 hover:bg-accent/20'
                    }`}
                  >
                    <span>{lang.flag}</span>
                    <span>{lang.name}</span>
                  </button>
                ))}
              </div>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
