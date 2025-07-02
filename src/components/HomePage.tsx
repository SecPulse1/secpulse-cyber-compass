
import React, { useState, useEffect } from 'react';
import { Search, Filter, TrendingUp, Clock, ExternalLink, Bookmark } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import NewsCard from './NewsCard';

interface NewsItem {
  id: string;
  title: string;
  description: string;
  image: string;
  date: string;
  source: string;
  category: string;
  readTime: string;
  priority: 'critical' | 'high' | 'medium';
  readMoreUrl: string;
}

const HomePage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [sortBy, setSortBy] = useState('date');
  const [bookmarkedNews, setBookmarkedNews] = useState<string[]>([]);

  // Load bookmarked news from localStorage
  useEffect(() => {
    const savedBookmarks = localStorage.getItem('secpulse-bookmarks');
    if (savedBookmarks) {
      setBookmarkedNews(JSON.parse(savedBookmarks));
    }
  }, []);

  // Enhanced mock news data
  const mockNews: NewsItem[] = [
    {
      id: '1',
      title: 'Critical Zero-Day Vulnerability in Popular Web Framework Exposes Millions',
      description: 'Security researchers have identified a critical vulnerability that affects millions of web applications worldwide. The flaw allows remote code execution and has been assigned a CVSS score of 9.8. Immediate patching is recommended for all affected systems.',
      image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=400&h=300&fit=crop',
      date: '2024-07-02',
      source: 'CyberSecurity News',
      category: 'vulnerabilities',
      readTime: '3 min read',
      priority: 'critical',
      readMoreUrl: 'https://example.com/news/1'
    },
    {
      id: '2',
      title: 'Advanced Ransomware Campaign Targets Healthcare with AI-Powered Attacks',
      description: 'A sophisticated ransomware group has been targeting healthcare institutions using machine learning to bypass traditional security measures. The attack vector includes social engineering and advanced encryption techniques.',
      image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=400&h=300&fit=crop',
      date: '2024-07-01',
      source: 'Healthcare Security',
      category: 'malware',
      readTime: '5 min read',
      priority: 'high',
      readMoreUrl: 'https://example.com/news/2'
    },
    {
      id: '3',
      title: 'Revolutionary AI Security Tools Achieve 95% Threat Detection Accuracy',
      description: 'Machine learning algorithms are revolutionizing cybersecurity defense mechanisms, with new tools showing unprecedented accuracy in detecting previously unknown threats and zero-day exploits.',
      image: 'https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?w=400&h=300&fit=crop',
      date: '2024-06-30',
      source: 'AI Security Weekly',
      category: 'ai-security',
      readTime: '4 min read',
      priority: 'medium',
      readMoreUrl: 'https://example.com/news/3'
    },
    {
      id: '4',
      title: 'Nation-State Actors Target Critical Infrastructure in Coordinated Campaign',
      description: 'Recent coordinated attacks on power grids, water systems, and transportation networks highlight the increasing vulnerability of critical infrastructure to state-sponsored cyber warfare.',
      image: 'https://images.unsplash.com/photo-1605810230434-7631ac76ec81?w=400&h=300&fit=crop',
      date: '2024-06-29',
      source: 'Infrastructure Security',
      category: 'infrastructure',
      readTime: '6 min read',
      priority: 'critical',
      readMoreUrl: 'https://example.com/news/4'
    },
    {
      id: '5',
      title: 'Cloud Security Framework 2024: Essential Best Practices and Guidelines',
      description: 'As organizations accelerate cloud migration, new security frameworks emerge to address evolving threats. Comprehensive guide to securing multi-cloud environments and protecting sensitive data.',
      image: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=400&h=300&fit=crop',
      date: '2024-06-28',
      source: 'Cloud Security Today',
      category: 'cloud',
      readTime: '7 min read',
      priority: 'medium',
      readMoreUrl: 'https://example.com/news/5'
    },
    {
      id: '6',
      title: 'Mobile Banking Security Flaw Affects 50+ Million Users Worldwide',
      description: 'Security researchers demonstrate critical authentication bypass in popular mobile banking applications, potentially exposing financial data of millions of users across multiple platforms.',
      image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=400&h=300&fit=crop',
      date: '2024-06-27',
      source: 'Mobile Security Report',
      category: 'mobile',
      readTime: '4 min read',
      priority: 'high',
      readMoreUrl: 'https://example.com/news/6'
    }
  ];

  const categories = [
    { id: 'all', name: 'All News', count: mockNews.length },
    { id: 'vulnerabilities', name: 'Vulnerabilities', count: mockNews.filter(n => n.category === 'vulnerabilities').length },
    { id: 'malware', name: 'Malware & Threats', count: mockNews.filter(n => n.category === 'malware').length },
    { id: 'cloud', name: 'Cloud Security', count: mockNews.filter(n => n.category === 'cloud').length },
    { id: 'mobile', name: 'Mobile Security', count: mockNews.filter(n => n.category === 'mobile').length },
    { id: 'infrastructure', name: 'Infrastructure', count: mockNews.filter(n => n.category === 'infrastructure').length },
    { id: 'ai-security', name: 'AI Security', count: mockNews.filter(n => n.category === 'ai-security').length }
  ];

  const toggleBookmark = (newsId: string) => {
    const updatedBookmarks = bookmarkedNews.includes(newsId)
      ? bookmarkedNews.filter(id => id !== newsId)
      : [...bookmarkedNews, newsId];
    
    setBookmarkedNews(updatedBookmarks);
    localStorage.setItem('secpulse-bookmarks', JSON.stringify(updatedBookmarks));
  };

  const filteredNews = mockNews.filter(news => {
    const matchesSearch = news.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         news.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         news.source.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || news.category === selectedCategory;
    return matchesSearch && matchesCategory;
  }).sort((a, b) => {
    if (sortBy === 'date') {
      return new Date(b.date).getTime() - new Date(a.date).getTime();
    } else if (sortBy === 'priority') {
      const priorityOrder = { critical: 3, high: 2, medium: 1 };
      return priorityOrder[b.priority as keyof typeof priorityOrder] - priorityOrder[a.priority as keyof typeof priorityOrder];
    }
    return 0;
  });

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Enhanced Hero Section */}
      <div className="text-center mb-12 relative">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-accent/5 rounded-3xl -z-10"></div>
        <div className="py-16 px-8">
          <div className="flex items-center justify-center mb-6">
            <div className="p-3 bg-primary/10 rounded-full mr-4">
              <TrendingUp className="w-10 h-10 text-primary" />
            </div>
            <h1 className="text-5xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Latest Cybersecurity News
            </h1>
          </div>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Stay ahead of cyber threats with real-time security intelligence curated from trusted sources worldwide. 
            Get instant access to critical vulnerabilities, threat analysis, and security insights.
          </p>
          <div className="flex items-center justify-center mt-6 space-x-6 text-sm text-muted-foreground">
            <div className="flex items-center">
              <div className="w-2 h-2 bg-green-500 rounded-full mr-2 animate-pulse"></div>
              Live Updates
            </div>
            <div className="flex items-center">
              <Clock className="w-4 h-4 mr-1" />
              Updated hourly
            </div>
            <div className="flex items-center">
              <ExternalLink className="w-4 h-4 mr-1" />
              Verified sources
            </div>
          </div>
        </div>
      </div>

      {/* Enhanced Search and Filters */}
      <div className="bg-card/50 backdrop-blur-sm border rounded-2xl p-6 mb-8 shadow-lg">
        <div className="flex flex-col lg:flex-row gap-6">
          {/* Search Bar */}
          <div className="flex-1 relative">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-muted-foreground w-5 h-5" />
            <Input 
              placeholder="Search cybersecurity news, sources, or keywords..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-12 h-12 text-lg border-0 bg-background/50"
            />
          </div>
          
          {/* Sort Options */}
          <div className="flex gap-3">
            <Button
              variant={sortBy === 'date' ? "default" : "outline"}
              onClick={() => setSortBy('date')}
              className="whitespace-nowrap"
            >
              <Clock className="w-4 h-4 mr-2" />
              Latest
            </Button>
            <Button
              variant={sortBy === 'priority' ? "default" : "outline"}
              onClick={() => setSortBy('priority')}
              className="whitespace-nowrap"
            >
              <Filter className="w-4 h-4 mr-2" />
              Priority
            </Button>
          </div>
        </div>

        {/* Category Pills */}
        <div className="flex gap-2 flex-wrap mt-6">
          {categories.map((category) => (
            <Button
              key={category.id}
              variant={selectedCategory === category.id ? "default" : "outline"}
              size="sm"
              onClick={() => setSelectedCategory(category.id)}
              className="whitespace-nowrap group relative"
            >
              {category.name}
              <span className="ml-2 text-xs bg-primary/20 text-primary px-2 py-0.5 rounded-full">
                {category.count}
              </span>
            </Button>
          ))}
        </div>
      </div>

      {/* Results Summary */}
      <div className="flex items-center justify-between mb-6">
        <p className="text-muted-foreground">
          Showing <span className="font-semibold text-foreground">{filteredNews.length}</span> articles
          {searchTerm && (
            <span> for "<span className="font-semibold text-primary">{searchTerm}</span>"</span>
          )}
        </p>
        {bookmarkedNews.length > 0 && (
          <Button
            variant="ghost"
            size="sm"
            onClick={() => setSelectedCategory('bookmarked')}
            className="text-muted-foreground hover:text-primary"
          >
            <Bookmark className="w-4 h-4 mr-2" />
            {bookmarkedNews.length} Bookmarked
          </Button>
        )}
      </div>

      {/* Enhanced News Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredNews.map((news, index) => (
          <div key={news.id} className="animate-fade-in" style={{ animationDelay: `${index * 100}ms` }}>
            <NewsCard 
              news={news} 
              isBookmarked={bookmarkedNews.includes(news.id)}
              onToggleBookmark={() => toggleBookmark(news.id)}
            />
          </div>
        ))}
      </div>

      {/* Empty State */}
      {filteredNews.length === 0 && (
        <div className="text-center py-16">
          <div className="w-16 h-16 bg-muted rounded-full flex items-center justify-center mx-auto mb-4">
            <Search className="w-8 h-8 text-muted-foreground" />
          </div>
          <h3 className="text-xl font-semibold mb-2">No articles found</h3>
          <p className="text-muted-foreground mb-4">
            Try adjusting your search terms or filter criteria
          </p>
          <Button variant="outline" onClick={() => {
            setSearchTerm('');
            setSelectedCategory('all');
          }}>
            Clear filters
          </Button>
        </div>
      )}

      {/* Load More Button */}
      {filteredNews.length > 0 && (
        <div className="text-center mt-12">
          <Button size="lg" variant="outline" className="group">
            Load More Articles
            <ExternalLink className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      )}
    </div>
  );
};

export default HomePage;
