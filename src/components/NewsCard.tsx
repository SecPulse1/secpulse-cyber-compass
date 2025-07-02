
import React from 'react';
import { ExternalLink, Calendar, Clock, Bookmark, AlertTriangle, TrendingUp } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

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

interface NewsCardProps {
  news: NewsItem;
  isBookmarked?: boolean;
  onToggleBookmark?: () => void;
}

const NewsCard: React.FC<NewsCardProps> = ({ news, isBookmarked = false, onToggleBookmark }) => {
  const handleReadMore = () => {
    // In a real implementation, this would include affiliate tracking
    window.open(news.readMoreUrl, '_blank', 'noopener,noreferrer');
  };

  const getPriorityIcon = (priority: string) => {
    switch (priority) {
      case 'critical':
        return <AlertTriangle className="w-4 h-4" />;
      case 'high':
        return <TrendingUp className="w-4 h-4" />;
      default:
        return null;
    }
  };

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'critical':
        return 'destructive';
      case 'high':
        return 'secondary';
      default:
        return 'outline';
    }
  };

  return (
    <article className="news-card group relative overflow-hidden">
      <div className="flex flex-col h-full">
        {/* Priority Indicator */}
        {news.priority !== 'medium' && (
          <div className="absolute top-4 left-4 z-10">
            <Badge variant={getPriorityColor(news.priority)} className="flex items-center gap-1">
              {getPriorityIcon(news.priority)}
              {news.priority.toUpperCase()}
            </Badge>
          </div>
        )}

        {/* Bookmark Button */}
        {onToggleBookmark && (
          <Button
            variant="ghost"
            size="sm"
            onClick={onToggleBookmark}
            className="absolute top-4 right-4 z-10 bg-background/80 backdrop-blur-sm hover:bg-background/90"
          >
            <Bookmark className={`w-4 h-4 ${isBookmarked ? 'fill-primary text-primary' : ''}`} />
          </Button>
        )}

        {/* Image */}
        <div className="relative overflow-hidden rounded-lg mb-4">
          <img 
            src={news.image} 
            alt={news.title}
            className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500"
            onError={(e) => {
              const target = e.target as HTMLImageElement;
              target.src = 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=400&h=300&fit=crop';
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        </div>

        {/* Content */}
        <div className="flex-1 flex flex-col">
          {/* Meta Information */}
          <div className="flex items-center justify-between text-sm text-muted-foreground mb-3">
            <div className="flex items-center">
              <Calendar className="w-4 h-4 mr-1" />
              <span>{new Date(news.date).toLocaleDateString()}</span>
            </div>
            <div className="flex items-center">
              <Clock className="w-4 h-4 mr-1" />
              <span>{news.readTime}</span>
            </div>
          </div>

          {/* Source Badge */}
          <div className="mb-3">
            <Badge variant="outline" className="text-primary border-primary/30">
              {news.source}
            </Badge>
          </div>

          {/* Title */}
          <h3 className="text-lg font-semibold mb-3 line-clamp-2 group-hover:text-primary transition-colors leading-tight">
            {news.title}
          </h3>

          {/* Description */}
          <p className="text-muted-foreground mb-6 line-clamp-3 flex-1 text-sm leading-relaxed">
            {news.description}
          </p>

          {/* Action Button */}
          <Button 
            onClick={handleReadMore}
            className="w-full group/btn relative overflow-hidden"
            size="lg"
          >
            <span className="relative z-10 flex items-center">
              Read Full Article
              <ExternalLink className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform" />
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-primary to-accent opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300"></div>
          </Button>
        </div>
      </div>
    </article>
  );
};

export default NewsCard;
