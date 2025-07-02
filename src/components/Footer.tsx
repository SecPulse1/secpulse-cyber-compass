
import React from 'react';
import { Heart, Mail, Phone, MapPin, Shield } from 'lucide-react';

const Footer: React.FC = () => {
  const socialLinks = [
    {
      name: 'Facebook',
      url: 'https://www.facebook.com/profile.php?id=100070026216872',
      icon: 'https://www.svgrepo.com/show/452196/facebook-1.svg',
      color: 'hover:text-blue-600'
    },
    {
      name: 'Instagram',
      url: 'https://www.instagram.com/_bdl._.fateh_/',
      icon: 'https://www.svgrepo.com/show/452229/instagram-1.svg',
      color: 'hover:text-pink-600'
    },
    {
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/fateh-boudali-34a320371/',
      icon: 'https://www.svgrepo.com/show/448234/linkedin.svg',
      color: 'hover:text-blue-700'
    },
    {
      name: 'Fiverr',
      url: 'https://www.fiverr.com/s/ljyr1pb',
      icon: 'https://www.svgrepo.com/show/306054/fiverr.svg',
      color: 'hover:text-green-600'
    },
    {
      name: 'Freelancer',
      url: 'https://www.freelancer.com/u/SecPulse',
      icon: 'https://www.svgrepo.com/show/473616/freelancer.svg',
      color: 'hover:text-blue-500'
    },
    {
      name: 'Buy Me a Coffee',
      url: 'https://coff.ee/secpulse',
      icon: 'https://logowik.com/content/uploads/images/buy-me-a-coffee6984.jpg',
      color: 'hover:text-yellow-600'
    }
  ];

  const quickLinks = [
    { name: 'Privacy Policy', href: '#' },
    { name: 'Terms of Service', href: '#' },
    { name: 'Cookie Policy', href: '#' },
    { name: 'Disclaimer', href: '#' }
  ];

  const categories = [
    { name: 'Vulnerabilities', href: '#' },
    { name: 'Malware Analysis', href: '#' },
    { name: 'Cloud Security', href: '#' },
    { name: 'Mobile Security', href: '#' },
    { name: 'AI Security', href: '#' }
  ];

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-card/50 backdrop-blur-sm border-t mt-16">
      <div className="container mx-auto px-4 py-12">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <div className="relative">
                <img 
                  src="https://www.svgrepo.com/show/284852/worldwide-security-security.svg" 
                  alt="SecPulse Logo" 
                  className="w-8 h-8"
                />
                <div className="absolute inset-0 bg-primary/20 rounded-full blur-md opacity-50"></div>
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                SecPulse
              </span>
            </div>
            <p className="text-muted-foreground mb-6 max-w-md leading-relaxed">
              SecPulse is a smart cybersecurity hub that curates real-time security news, essential tools, 
              and custom learning maps—tailored for professionals, learners, and tech enthusiasts worldwide.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-2 text-sm text-muted-foreground">
              <div className="flex items-center">
                <Mail className="w-4 h-4 mr-3 text-primary" />
                <span>contact@secpulse.com</span>
              </div>
              <div className="flex items-center">
                <Shield className="w-4 h-4 mr-3 text-primary" />
                <span>Cybersecurity Intelligence Hub</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-4 text-lg">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a 
                    href={link.href}
                    className="text-muted-foreground hover:text-primary transition-colors duration-200 text-sm flex items-center group"
                  >
                    <span className="w-1 h-1 bg-primary rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h3 className="font-semibold mb-4 text-lg">Categories</h3>
            <ul className="space-y-3">
              {categories.map((category) => (
                <li key={category.name}>
                  <a 
                    href={category.href}
                    className="text-muted-foreground hover:text-primary transition-colors duration-200 text-sm flex items-center group"
                  >
                    <span className="w-1 h-1 bg-primary rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                    {category.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Social Links Section */}
        <div className="border-t pt-8 mb-8">
          <h3 className="font-semibold mb-6 text-center text-lg">Connect With Us</h3>
          <div className="flex justify-center items-center space-x-6">
            {socialLinks.map((social) => (
              <a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`group relative p-3 rounded-full bg-background/50 border transition-all duration-300 hover:border-primary/30 hover:shadow-lg hover:scale-110 ${social.color}`}
                title={social.name}
              >
                <img 
                  src={social.icon} 
                  alt={social.name}
                  className="w-6 h-6 transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 rounded-full bg-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </a>
            ))}
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="text-center md:text-left">
              <p className="text-sm text-muted-foreground">
                &copy; {currentYear} SecPulse. All rights reserved.
              </p>
              <p className="text-sm text-muted-foreground mt-1">
                Built with <Heart className="w-4 h-4 text-red-500 inline mx-1" /> by{' '}
                <span className="font-medium text-primary">Boudali Fateh</span> - Cybersecurity Specialist
              </p>
            </div>
            
            <div className="flex items-center space-x-4 text-xs text-muted-foreground">
              <div className="flex items-center">
                <div className="w-2 h-2 bg-green-500 rounded-full mr-2 animate-pulse"></div>
                <span>All systems operational</span>
              </div>
              <div className="hidden sm:block">•</div>
              <div className="hidden sm:flex items-center">
                <Shield className="w-3 h-3 mr-1" />
                <span>Secure & Verified</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
