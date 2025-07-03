
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

interface RSSItem {
  title: string;
  description: string;
  link: string;
  pubDate: string;
  source: string;
}

export class NewsService {
  private static RSS_FEEDS = [
    {
      url: 'https://feeds.feedburner.com/eset/blog',
      source: 'ESET Security Blog',
      category: 'malware'
    },
    {
      url: 'https://www.darkreading.com/rss.xml',
      source: 'Dark Reading',
      category: 'vulnerabilities'
    },
    {
      url: 'https://threatpost.com/feed/',
      source: 'Threatpost',
      category: 'malware'
    },
    {
      url: 'https://www.bleepingcomputer.com/feed/',
      source: 'BleepingComputer',
      category: 'vulnerabilities'
    }
  ];

  private static determineCategory(title: string, description: string): string {
    const content = (title + ' ' + description).toLowerCase();
    
    if (content.includes('vulnerability') || content.includes('exploit') || content.includes('cve')) {
      return 'vulnerabilities';
    } else if (content.includes('malware') || content.includes('ransomware') || content.includes('virus')) {
      return 'malware';
    } else if (content.includes('cloud') || content.includes('aws') || content.includes('azure')) {
      return 'cloud';
    } else if (content.includes('mobile') || content.includes('android') || content.includes('ios')) {
      return 'mobile';
    } else if (content.includes('infrastructure') || content.includes('power grid') || content.includes('critical')) {
      return 'infrastructure';
    } else if (content.includes('ai') || content.includes('artificial intelligence') || content.includes('machine learning')) {
      return 'ai-security';
    }
    
    return 'vulnerabilities';
  }

  private static determinePriority(title: string, description: string): 'critical' | 'high' | 'medium' {
    const content = (title + ' ' + description).toLowerCase();
    
    if (content.includes('critical') || content.includes('zero-day') || content.includes('emergency')) {
      return 'critical';
    } else if (content.includes('high') || content.includes('severe') || content.includes('urgent')) {
      return 'high';
    }
    
    return 'medium';
  }

  private static estimateReadTime(description: string): string {
    const words = description.split(' ').length;
    const minutes = Math.ceil(words / 200); // Average reading speed
    return `${minutes} min read`;
  }

  private static getDefaultImage(category: string): string {
    const images = {
      vulnerabilities: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=400&h=300&fit=crop',
      malware: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=400&h=300&fit=crop',
      'ai-security': 'https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?w=400&h=300&fit=crop',
      infrastructure: 'https://images.unsplash.com/photo-1605810230434-7631ac76ec81?w=400&h=300&fit=crop',
      cloud: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=400&h=300&fit=crop',
      mobile: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=400&h=300&fit=crop'
    };
    
    return images[category as keyof typeof images] || images.vulnerabilities;
  }

  static async fetchRSSFeed(feedUrl: string): Promise<RSSItem[]> {
    try {
      // استخدام RSS2JSON API كبديل مجاني
      const proxyUrl = `https://api.rss2json.com/v1/api.json?rss_url=${encodeURIComponent(feedUrl)}&api_key=your_api_key&count=10`;
      
      const response = await fetch(proxyUrl);
      const data = await response.json();
      
      if (data.status === 'ok' && data.items) {
        return data.items.map((item: any) => ({
          title: item.title,
          description: item.description || item.content,
          link: item.link,
          pubDate: item.pubDate,
          source: data.feed?.title || 'Security News'
        }));
      }
    } catch (error) {
      console.error('Error fetching RSS feed:', error);
    }
    
    return [];
  }

  static async fetchAllNews(): Promise<NewsItem[]> {
    const allNews: NewsItem[] = [];
    
    for (const feed of this.RSS_FEEDS) {
      try {
        const rssItems = await this.fetchRSSFeed(feed.url);
        
        const newsItems = rssItems.map((item, index) => {
          const category = this.determineCategory(item.title, item.description);
          const priority = this.determinePriority(item.title, item.description);
          
          return {
            id: `rss-${Date.now()}-${index}`,
            title: item.title,
            description: item.description.replace(/<[^>]*>/g, '').substring(0, 200) + '...',
            image: this.getDefaultImage(category),
            date: new Date(item.pubDate).toISOString().split('T')[0],
            source: item.source,
            category,
            readTime: this.estimateReadTime(item.description),
            priority,
            readMoreUrl: item.link
          };
        });
        
        allNews.push(...newsItems);
      } catch (error) {
        console.error(`Error processing feed ${feed.url}:`, error);
      }
    }
    
    // ترتيب الأخبار حسب التاريخ والأولوية
    return allNews.sort((a, b) => {
      const dateCompare = new Date(b.date).getTime() - new Date(a.date).getTime();
      if (dateCompare !== 0) return dateCompare;
      
      const priorityOrder = { critical: 3, high: 2, medium: 1 };
      return priorityOrder[b.priority] - priorityOrder[a.priority];
    });
  }

  // بيانات احتياطية في حالة فشل جلب الأخبار
  static getFallbackNews(): NewsItem[] {
    return [
      {
        id: 'fallback-1',
        title: 'Critical Zero-Day Vulnerability in Popular Web Framework Exposes Millions',
        description: 'Security researchers have identified a critical vulnerability that affects millions of web applications worldwide. The flaw allows remote code execution and has been assigned a CVSS score of 9.8.',
        image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=400&h=300&fit=crop',
        date: new Date().toISOString().split('T')[0],
        source: 'CyberSecurity News',
        category: 'vulnerabilities',
        readTime: '3 min read',
        priority: 'critical',
        readMoreUrl: 'https://example.com/news/1'
      },
      {
        id: 'fallback-2',
        title: 'Advanced Ransomware Campaign Targets Healthcare with AI-Powered Attacks',
        description: 'A sophisticated ransomware group has been targeting healthcare institutions using machine learning to bypass traditional security measures.',
        image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=400&h=300&fit=crop',
        date: new Date().toISOString().split('T')[0],
        source: 'Healthcare Security',
        category: 'malware',
        readTime: '5 min read',
        priority: 'high',
        readMoreUrl: 'https://example.com/news/2'
      }
    ];
  }
}
