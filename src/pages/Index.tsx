
import React, { useState, useEffect } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import HomePage from '@/components/HomePage';
import PlaceholderPage from '@/components/PlaceholderPage';

const Index = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [language, setLanguage] = useState('en');
  const [currentPage, setCurrentPage] = useState('home');

  // Apply dark mode class to document
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  // Load saved preferences
  useEffect(() => {
    const savedDarkMode = localStorage.getItem('darkMode');
    const savedLanguage = localStorage.getItem('language');
    
    if (savedDarkMode !== null) {
      setDarkMode(JSON.parse(savedDarkMode));
    }
    if (savedLanguage) {
      setLanguage(savedLanguage);
    }
  }, []);

  // Save preferences
  useEffect(() => {
    localStorage.setItem('darkMode', JSON.stringify(darkMode));
  }, [darkMode]);

  useEffect(() => {
    localStorage.setItem('language', language);
  }, [language]);

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <HomePage />;
      case 'tools':
        return (
          <PlaceholderPage
            title="Cybersecurity Tools Library"
            description="Coming soon! A comprehensive collection of cybersecurity tools with filters for cost, difficulty, and category. Each tool will include descriptions, links, and tutorials."
            onBack={() => setCurrentPage('home')}
          />
        );
      case 'learning':
        return (
          <PlaceholderPage
            title="Learning Platforms"
            description="Coming soon! Curated cybersecurity learning platforms with filters for difficulty, cost, language, and content type."
            onBack={() => setCurrentPage('home')}
          />
        );
      case 'roadmap':
        return (
          <PlaceholderPage
            title="Learning Path Generator"
            description="Coming soon! Generate personalized cybersecurity learning roadmaps based on your time, budget, and current knowledge level."
            onBack={() => setCurrentPage('home')}
          />
        );
      case 'about':
        return (
          <PlaceholderPage
            title="About Boudali Fateh"
            description="Coming soon! Learn more about the cybersecurity specialist behind SecPulse, with expertise in web security, penetration testing, AI agents, and automation."
            onBack={() => setCurrentPage('home')}
          />
        );
      case 'contact':
        return (
          <PlaceholderPage
            title="Contact Us"
            description="Coming soon! Get in touch with questions, suggestions, or collaboration opportunities."
            onBack={() => setCurrentPage('home')}
          />
        );
      default:
        return <HomePage />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header
        darkMode={darkMode}
        setDarkMode={setDarkMode}
        language={language}
        setLanguage={setLanguage}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />
      
      <main className="flex-1">
        {renderPage()}
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
