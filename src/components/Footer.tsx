
import React from 'react';

const Footer: React.FC = () => {
  const socialLinks = [
    {
      name: 'Facebook',
      url: 'https://www.facebook.com/profile.php?id=100070026216872',
      icon: 'https://www.svgrepo.com/show/452196/facebook-1.svg'
    },
    {
      name: 'Instagram',
      url: 'https://www.instagram.com/_bdl._.fateh_/',
      icon: 'https://www.svgrepo.com/show/452229/instagram-1.svg'
    },
    {
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/fateh-boudali-34a320371/',
      icon: 'https://www.svgrepo.com/show/448234/linkedin.svg'
    },
    {
      name: 'Fiverr',
      url: 'https://www.fiverr.com/s/ljyr1pb',
      icon: 'https://www.svgrepo.com/show/306054/fiverr.svg'
    },
    {
      name: 'Freelancer',
      url: 'https://www.freelancer.com/u/SecPulse',
      icon: 'https://www.svgrepo.com/show/473616/freelancer.svg'
    },
    {
      name: 'Buy Me a Coffee',
      url: 'https://coff.ee/secpulse',
      icon: 'https://logowik.com/content/uploads/images/buy-me-a-coffee6984.jpg'
    }
  ];

  return (
    <footer className="bg-card border-t mt-16">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col items-center space-y-6">
          {/* Logo and Brand */}
          <div className="flex items-center space-x-3">
            <img 
              src="https://www.svgrepo.com/show/284852/worldwide-security-security.svg" 
              alt="SecPulse Logo" 
              className="w-6 h-6"
            />
            <span className="text-xl font-bold text-primary">SecPulse</span>
          </div>

          {/* Social Links */}
          <div className="flex items-center space-x-6">
            {socialLinks.map((social) => (
              <a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group"
                title={social.name}
              >
                <img 
                  src={social.icon} 
                  alt={social.name}
                  className="social-icon opacity-70 group-hover:opacity-100"
                />
              </a>
            ))}
          </div>

          {/* Copyright */}
          <div className="text-center text-sm text-muted-foreground">
            <p>&copy; 2024 SecPulse. All rights reserved.</p>
            <p className="mt-1">Built by Boudali Fateh - Cybersecurity Specialist</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
