
import React, { useState, useEffect } from 'react';
import { Search, Filter, TrendingUp, Clock, ExternalLink, Bookmark, RefreshCw } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';
import NewsCard from './NewsCard';
import { useNews } from '@/hooks/useNews';

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
  
  const { news, isLoading, error, lastUpdated, refreshNews } = useNews();
  const { toast } = useToast();

  // Load bookmarked news from localStorage
  useEffect(() => {
    const savedBookmarks = localStorage.getItem('secpulse-bookmarks');
    if (savedBookmarks) {
      setBookmarkedNews(JSON.parse(savedBookmarks));
    }
  }, []);

  const categories = [
    { id: 'all', name: 'All News', count: news.length },
    { id: 'vulnerabilities', name: 'Vulnerabilities', count: news.filter(n => n.category === 'vulnerabilities').length },
    { id: 'malware', name: 'Malware & Threats', count: news.filter(n => n.category === 'malware').length },
    { id: 'cloud', name: 'Cloud Security', count: news.filter(n => n.category === 'cloud').length },
    { id: 'mobile', name: 'Mobile Security', count: news.filter(n => n.category === 'mobile').length },
    { id: 'infrastructure', name: 'Infrastructure', count: news.filter(n => n.category === 'infrastructure').length },
    { id: 'ai-security', name: 'AI Security', count: news.filter(n => n.category === 'ai-security').length }
  ];

  const toggleBookmark = (newsId: string) => {
    const updatedBookmarks = bookmarkedNews.includes(newsId)
      ? bookmarkedNews.filter(id => id !== newsId)
      : [...bookmarkedNews, newsId];
    
    setBookmarkedNews(updatedBookmarks);
    localStorage.setItem('secpulse-bookmarks', JSON.stringify(updatedBookmarks));
  };

  const handleRefresh = () => {
    refreshNews();
    toast({
      title: "تحديث الأخبار",
      description: "جاري تحديث الأخبار من المصادر الموثوقة...",
      duration: 3000,
    });
  };

  const filteredNews = news.filter(newsItem => {
    const matchesSearch = newsItem.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         newsItem.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         newsItem.source.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || newsItem.category === selectedCategory;
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
              <div className={`w-2 h-2 rounded-full mr-2 ${isLoading ? 'bg-yellow-500 animate-pulse' : 'bg-green-500'}`}></div>
              {isLoading ? 'Updating...' : 'Live Updates'}
            </div>
            <div className="flex items-center">
              <Clock className="w-4 h-4 mr-1" />
              {lastUpdated ? `Updated ${lastUpdated.toLocaleTimeString()}` : 'Updated hourly'}
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
          
          {/* Sort Options and Refresh */}
          <div className="flex gap-3">
            <Button
              variant="outline"
              onClick={handleRefresh}
              disabled={isLoading}
              className="whitespace-nowrap"
            >
              <RefreshCw className={`w-4 h-4 mr-2 ${isLoading ? 'animate-spin' : ''}`} />
              Refresh
            </Button>
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
          {error && (
            <span className="text-yellow-600 ml-2">(Using cached data)</span>
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

      {/* Loading State */}
      {isLoading && news.length === 0 && (
        <div className="text-center py-16">
          <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4 animate-pulse">
            <RefreshCw className="w-8 h-8 text-primary animate-spin" />
          </div>
          <h3 className="text-xl font-semibold mb-2">Loading latest news...</h3>
          <p className="text-muted-foreground">
            Fetching the latest cybersecurity updates from trusted sources
          </p>
        </div>
      )}

      {/* Enhanced News Grid */}
      {!isLoading || news.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredNews.map((newsItem, index) => (
            <div key={newsItem.id} className="animate-fade-in" style={{ animationDelay: `${index * 100}ms` }}>
              <NewsCard 
                news={newsItem} 
                isBookmarked={bookmarkedNews.includes(newsItem.id)}
                onToggleBookmark={() => toggleBookmark(newsItem.id)}
              />
            </div>
          ))}
        </div>
      ) : null}

      {/* Empty State */}
      {filteredNews.length === 0 && !isLoading && (
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
          <Button size="lg" variant="outline" className="group" onClick={handleRefresh}>
            Load More Articles
            <ExternalLink className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      )}
    </div>
  );
};

export default HomePage;
