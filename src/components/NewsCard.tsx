
import React from 'react';
import { ExternalLink, Calendar } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface NewsItem {
  id: string;
  title: string;
  description: string;
  image: string;
  date: string;
  source: string;
  readMoreUrl: string;
}

interface NewsCardProps {
  news: NewsItem;
}

const NewsCard: React.FC<NewsCardProps> = ({ news }) => {
  const handleReadMore = () => {
    // In a real implementation, this would include affiliate tracking
    window.open(news.readMoreUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <article className="news-card group">
      <div className="flex flex-col h-full">
        {/* Image */}
        <div className="relative overflow-hidden rounded-lg mb-4">
          <img 
            src={news.image} 
            alt={news.title}
            className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
            onError={(e) => {
              const target = e.target as HTMLImageElement;
              target.src = 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=400&h=300&fit=crop';
            }}
          />
        </div>

        {/* Content */}
        <div className="flex-1 flex flex-col">
          <div className="flex items-center text-sm text-muted-foreground mb-2">
            <Calendar className="w-4 h-4 mr-1" />
            <span>{news.date}</span>
            <span className="mx-2">•</span>
            <span className="text-primary font-medium">{news.source}</span>
          </div>

          <h3 className="text-lg font-semibold mb-3 line-clamp-2 group-hover:text-primary transition-colors">
            {news.title}
          </h3>

          <p className="text-muted-foreground mb-4 line-clamp-3 flex-1">
            {news.description}
          </p>

          <Button 
            onClick={handleReadMore}
            className="w-full group/btn"
            variant="outline"
          >
            Read More
            <ExternalLink className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform" />
          </Button>
        </div>
      </div>
    </article>
  );
};

export default NewsCard;
