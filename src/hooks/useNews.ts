
import { useState, useEffect } from 'react';
import { NewsService } from '@/services/newsService';

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

export const useNews = () => {
  const [news, setNews] = useState<NewsItem[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [lastUpdated, setLastUpdated] = useState<Date | null>(null);

  const fetchNews = async () => {
    try {
      setIsLoading(true);
      setError(null);
      
      console.log('Fetching latest cybersecurity news...');
      const latestNews = await NewsService.fetchAllNews();
      
      if (latestNews.length > 0) {
        setNews(latestNews);
        setLastUpdated(new Date());
        console.log(`Successfully fetched ${latestNews.length} news articles`);
      } else {
        // استخدام البيانات الاحتياطية
        console.log('No news fetched, using fallback data');
        setNews(NewsService.getFallbackNews());
        setLastUpdated(new Date());
      }
    } catch (err) {
      console.error('Error fetching news:', err);
      setError('Failed to fetch news');
      // استخدام البيانات الاحتياطية في حالة الخطأ
      setNews(NewsService.getFallbackNews());
      setLastUpdated(new Date());
    } finally {
      setIsLoading(false);
    }
  };

  // جلب الأخبار عند تحميل المكون
  useEffect(() => {
    fetchNews();
    
    // تحديث الأخبار كل 30 دقيقة
    const interval = setInterval(fetchNews, 30 * 60 * 1000);
    
    return () => clearInterval(interval);
  }, []);

  const refreshNews = () => {
    fetchNews();
  };

  return {
    news,
    isLoading,
    error,
    lastUpdated,
    refreshNews
  };
};
