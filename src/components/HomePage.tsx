
import React, { useState, useEffect } from 'react';
import { Search, Filter, TrendingUp } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import NewsCard from './NewsCard';

const HomePage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  // Mock news data - in real implementation, this would come from an API
  const mockNews = [
    {
      id: '1',
      title: 'Major Zero-Day Vulnerability Discovered in Popular Web Framework',
      description: 'Security researchers have identified a critical vulnerability that affects millions of web applications worldwide. The flaw allows remote code execution and has been assigned a CVSS score of 9.8.',
      image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=400&h=300&fit=crop',
      date: '2024-07-02',
      source: 'CyberSecurity News',
      readMoreUrl: 'https://example.com/news/1'
    },
    {
      id: '2',
      title: 'New Ransomware Campaign Targets Healthcare Organizations',
      description: 'A sophisticated ransomware group has been targeting healthcare institutions with advanced encryption techniques. Security experts recommend immediate patching of vulnerable systems.',
      image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=400&h=300&fit=crop',
      date: '2024-07-01',
      source: 'Healthcare Security',
      readMoreUrl: 'https://example.com/news/2'
    },
    {
      id: '3',
      title: 'AI-Powered Security Tools Show Promise in Threat Detection',
      description: 'Machine learning algorithms are revolutionizing cybersecurity defense mechanisms, with new tools showing 95% accuracy in detecting previously unknown threats.',
      image: 'https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?w=400&h=300&fit=crop',
      date: '2024-06-30',
      source: 'AI Security Weekly',
      readMoreUrl: 'https://example.com/news/3'
    },
    {
      id: '4',
      title: 'Critical Infrastructure Under Cyber Attack: What You Need to Know',
      description: 'Recent attacks on power grids and water systems highlight the vulnerability of critical infrastructure. Government agencies issue new security guidelines.',
      image: 'https://images.unsplash.com/photo-1605810230434-7631ac76ec81?w=400&h=300&fit=crop',
      date: '2024-06-29',
      source: 'Infrastructure Security',
      readMoreUrl: 'https://example.com/news/4'
    },
    {
      id: '5',
      title: 'Cloud Security Best Practices for 2024',
      description: 'As organizations continue migrating to cloud environments, new security challenges emerge. Expert recommendations for securing cloud infrastructure and data.',
      image: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=400&h=300&fit=crop',
      date: '2024-06-28',
      source: 'Cloud Security Today',
      readMoreUrl: 'https://example.com/news/5'
    },
    {
      id: '6',
      title: 'Mobile Banking Apps Vulnerable to New Attack Vector',
      description: 'Security researchers demonstrate how attackers can bypass authentication in popular mobile banking applications, affecting millions of users worldwide.',
      image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=400&h=300&fit=crop',
      date: '2024-06-27',
      source: 'Mobile Security Report',
      readMoreUrl: 'https://example.com/news/6'
    }
  ];

  const categories = [
    { id: 'all', name: 'All News' },
    { id: 'vulnerabilities', name: 'Vulnerabilities' },
    { id: 'malware', name: 'Malware & Threats' },
    { id: 'data-breach', name: 'Data Breaches' },
    { id: 'cloud', name: 'Cloud Security' },
    { id: 'mobile', name: 'Mobile Security' }
  ];

  const filteredNews = mockNews.filter(news => {
    const matchesSearch = news.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         news.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesSearch;
  });

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Hero Section */}
      <div className="text-center mb-12">
        <div className="flex items-center justify-center mb-4">
          <TrendingUp className="w-8 h-8 text-primary mr-3" />
          <h1 className="text-4xl font-bold">Latest Cybersecurity News</h1>
        </div>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          Stay updated with the latest cybersecurity threats, vulnerabilities, and industry insights 
          curated from trusted sources worldwide.
        </p>
      </div>

      {/* Search and Filters */}
      <div className="flex flex-col lg:flex-row gap-4 mb-8">
        <div className="flex-1 relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
          <Input 
            placeholder="Search cybersecurity news..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-10"
          />
        </div>
        
        <div className="flex gap-2 flex-wrap">
          {categories.map((category) => (
            <Button
              key={category.id}
              variant={selectedCategory === category.id ? "default" : "outline"}
              size="sm"
              onClick={() => setSelectedCategory(category.id)}
              className="whitespace-nowrap"
            >
              {category.name}
            </Button>
          ))}
        </div>
      </div>

      {/* News Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredNews.map((news) => (
          <NewsCard key={news.id} news={news} />
        ))}
      </div>

      {/* Load More */}
      <div className="text-center mt-12">
        <Button size="lg" variant="outline">
          Load More Articles
        </Button>
      </div>
    </div>
  );
};

export default HomePage;
