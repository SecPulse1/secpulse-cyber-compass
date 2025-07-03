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
      title: 'North Korean Hackers Target Web3 with Nim Malware and Use ClickFix in BabyShark Campaign',
      description: 'Threat actors with ties to North Korea have been observed targeting Web3 and cryptocurrency-related businesses with malware written in the Nim programming language, underscoring a constant evolution of their tactics.',
      image: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjyYZAr54elU-Z76djgWJmGN3wQO1bGkHghXmAPGjRWXDXtVIb8LSOknNNKtrHIkFDS2mPL2BnUQcIhHS5blZdO8hSWnclRJ64hhCLuF6EIIztB6aXQQQjiLPrwRg8ve-6dUWyZzoIqRI7WhFihMlxyXONLULK6MiprFnfLvrsDxAjmqiwh67WcT6dA0TD4/s728-rw-e365/northkorean-hackers.jpg',
      date: '02-07-2025',
      source: 'The Hacker News',
      category: 'Malware / Web3',
      readTime: '10 min read',
      priority: 'critical',
      readMoreUrl: 'https://thehackernews.com/2025/07/north-korean-hackers-target-web3-with.html'
    },
    {
      id: '2',
      title: 'Advanced Ransomware Campaign Targets Healthcare with AI-Powered Attacks',
      description: 'With nearly 80% of cyber threats now mimicking legitimate user behavior, how are top SOCs determining what is legitimate traffic and what is potentially dangerous?',
      image: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgYmXZg25AI9euid6yFoO777OuU3Np8qv-q8BeX6UsfJEi7-iFTNz12V1IXbq3sNE2aZrfLa8ULyfPu05wO5ro3gqltw6KUqhja7MsWg59afpI-LzhXvLxDdfqEEK7LUss2whbthQEGS9cQScJ0ZDJTCzSMIZ1v9OjLwV42ttK0xaj5PDnZqGiq7JWF7yo/s728-rw-e365/main.jpg',
      date: '2025-07-01',
      source: 'The Hacker News',
      category: 'Network Security / Threat Detection',
      readTime: '5 min read',
      priority: 'high',
      readMoreUrl: 'https://thehackernews.com/2025/07/that-network-traffic-looks-legit-but-it.html'
    },
    {
      id: '3',
      title: 'Hackers Using PDFs to Impersonate Microsoft, DocuSign, and More in Callback Phishing Campaigns',
      description: 'Cybersecurity researchers are calling attention to phishing campaigns that impersonate popular brands and trick targets into calling phone numbers operated by threat actors.',
      image: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiIGeJix-zrxEYdKOhweUP-djrCM9zwsnhtwTh8kBh7GRpqdQPAuyzRFhpuhm_-Pq3Kn-R_IVXXCcySH0QZlGQCjCJKbmWIkAjRYuP3qQZ3QGJv4yuZR3S9aqpD3ZAbrTirel8B5ADErAwhC7KDvmHEekYoF7xJL65LeokS-r1FR7P8BfpxV_6ZKYRnpkxL/s728-rw-e365/call-phishing.jpg',
      date: '2025-07-02',
      source: 'The Hacker News',
      category: 'Vulnerability / Cybercrime',
      readTime: '4 min read',
      priority: 'high',
      readMoreUrl: 'https://thehackernews.com/2025/07/hackers-using-pdfs-to-impersonate.html'
    },
    {
      id: '4',
      title: 'U.S. Sanctions Russian Bulletproof Hosting Provider for Supporting Cybercriminals Behind Ransomware',
      description: "The U.S. Department of the Treasury's Office of Foreign Assets Control (OFAC) has levied sanctions against Russia-based bulletproof hosting (BPH) service provider Aeza Group to assist threat actors in their malicious activities and targeting victims in the country and across the world.",
      image: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgoOw4eBme7AG11gBPRXKW65QmaZNpHUgo6nhwVMMXex_1Tv_Bs884S2mHGZYQWmaq7TiGMkNTp7DSEKl9Lqn9Rhmz-mcPemtLwuDsW9LHFdpNpc2Q94PjXk4z_ZuQz0W2C4f3r4d_4ftxfY4Shi9MxnhS7lTTpsj3JrjYCxqtI30sqMClFJVuyGdYYOY4D/s728-rw-e365/russian-ransomware-hosting.jpg',
      date: '2025-07-02',
      source: 'The Hacker News',
      category: 'infrastructure',
      readTime: '6 min read',
      priority: 'critical',
      readMoreUrl: 'https://example.com/news/4'
    },
    {
      id: '5',
      title: "Vercel's v0 AI Tool Weaponized by Cybercriminals to Rapidly Create Fake Login Pages at Scale",
      description: 'Unknown threat actors have been observed weaponizing v0, a generative artificial intelligence (AI) tool from Vercel, to design fake sign-in pages that impersonate their legitimate counterparts.',
      image: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjX4nE-llQWlDtq24IA_KO1FtaQINmzb20JdnQPoz8D2NDKOiB-wtKFcYXx8GIJ7aHpapwRQMI2iAaFMi__jGcUxbN-GOkJrunjR2jL3RbXtuU4VjOtYLMGRMpo0EOcsOLZ5hgZv6Z8RKg-6O8VlfahoV_DYe88Jr-22FY-YD71xsKMQHH_Y7WC9KeSMHNF/s728-rw-e365/phishing-sites.jpg',
      date: '2025-07-02',
      source: 'The Hacker News',
      category: 'AI Security / Phishing',
      readTime: '7 min read',
      priority: 'medium',
      readMoreUrl: 'https://thehackernews.com/2025/07/vercels-v0-ai-tool-weaponized-by.html'
    },
    {
      id: '6',
      title: 'Chrome Zero-Day CVE-2025-6554 Under Active Attack — Google Issues Security Update',
      description: 'Google has released security updates to address a vulnerability in its Chrome browser for which an exploit exists in the wild.',
      image: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEg9cjUIgsu7YJnLqfQXOmuJKaSC3r8Cjsgv76IxFAPIIP18SYUxY-e5EvTKWbps95jNM_s8VwtriNO6ouqJm1aOekCBcu9CdL6Df8JB9pfHOI7HNtatSVSBqN11MBuO_GRjwNSyssly0ZFH2Q7AYfRE_qqHJMdIURMxrfRNFRMas_GY0jYRFgWUNsRLrkFu/s728-rw-e365/chrome.jpg',
      date: '2025-07-01',
      source: 'The Hacker News',
      category: 'Vulnerability / Browser Security',
      readTime: '10 min read',
      priority: 'high',
      readMoreUrl: 'https://thehackernews.com/2025/07/google-patches-critical-zero-day-flaw.html'
    }
  ,
    {
  "id": "1007",
  "title": "Cybersecurity Event 7: Sample Realistic Threat Scenario",
  "description": "This is a real-world-inspired cybersecurity incident that simulates breach scenario number 7.",
  "image": "https://images.unsplash.com/photo-1605902711622-cfb43c4437f0?w=400&h=300&fit=crop",
  "date": "2025-06-08",
  "source": "The Hacker News",
  "category": "vulnerabilities",
  "readTime": "5 min read",
  "priority": "high",
  "readMoreUrl": "https://thehackernews.com/sample-news-7"
},
    {
  "id": "1008",
  "title": "Cybersecurity Event 8: Sample Realistic Threat Scenario",
  "description": "This is a real-world-inspired cybersecurity incident that simulates breach scenario number 8.",
  "image": "https://images.unsplash.com/photo-1605902711622-cfb43c4437f0?w=400&h=300&fit=crop",
  "date": "2025-06-09",
  "source": "The Hacker News",
  "category": "infrastructure",
  "readTime": "6 min read",
  "priority": "medium",
  "readMoreUrl": "https://thehackernews.com/sample-news-8"
},
    {
  "id": "1009",
  "title": "Cybersecurity Event 9: Sample Realistic Threat Scenario",
  "description": "This is a real-world-inspired cybersecurity incident that simulates breach scenario number 9.",
  "image": "https://images.unsplash.com/photo-1605902711622-cfb43c4437f0?w=400&h=300&fit=crop",
  "date": "2025-06-10",
  "source": "The Hacker News",
  "category": "malware",
  "readTime": "7 min read",
  "priority": "medium",
  "readMoreUrl": "https://thehackernews.com/sample-news-9"
},
    {
  "id": "1010",
  "title": "Cybersecurity Event 10: Sample Realistic Threat Scenario",
  "description": "This is a real-world-inspired cybersecurity incident that simulates breach scenario number 10.",
  "image": "https://images.unsplash.com/photo-1605902711622-cfb43c4437f0?w=400&h=300&fit=crop",
  "date": "2025-06-11",
  "source": "The Hacker News",
  "category": "vulnerabilities",
  "readTime": "3 min read",
  "priority": "critical",
  "readMoreUrl": "https://thehackernews.com/sample-news-10"
},
    {
  "id": "1011",
  "title": "Cybersecurity Event 11: Sample Realistic Threat Scenario",
  "description": "This is a real-world-inspired cybersecurity incident that simulates breach scenario number 11.",
  "image": "https://images.unsplash.com/photo-1605902711622-cfb43c4437f0?w=400&h=300&fit=crop",
  "date": "2025-06-12",
  "source": "The Hacker News",
  "category": "infrastructure",
  "readTime": "4 min read",
  "priority": "high",
  "readMoreUrl": "https://thehackernews.com/sample-news-11"
},
    {
  "id": "1012",
  "title": "Cybersecurity Event 12: Sample Realistic Threat Scenario",
  "description": "This is a real-world-inspired cybersecurity incident that simulates breach scenario number 12.",
  "image": "https://images.unsplash.com/photo-1605902711622-cfb43c4437f0?w=400&h=300&fit=crop",
  "date": "2025-06-13",
  "source": "The Hacker News",
  "category": "malware",
  "readTime": "5 min read",
  "priority": "high",
  "readMoreUrl": "https://thehackernews.com/sample-news-12"
},
    {
  "id": "1013",
  "title": "Cybersecurity Event 13: Sample Realistic Threat Scenario",
  "description": "This is a real-world-inspired cybersecurity incident that simulates breach scenario number 13.",
  "image": "https://images.unsplash.com/photo-1605902711622-cfb43c4437f0?w=400&h=300&fit=crop",
  "date": "2025-06-14",
  "source": "The Hacker News",
  "category": "vulnerabilities",
  "readTime": "6 min read",
  "priority": "medium",
  "readMoreUrl": "https://thehackernews.com/sample-news-13"
},
    {
  "id": "1014",
  "title": "Cybersecurity Event 14: Sample Realistic Threat Scenario",
  "description": "This is a real-world-inspired cybersecurity incident that simulates breach scenario number 14.",
  "image": "https://images.unsplash.com/photo-1605902711622-cfb43c4437f0?w=400&h=300&fit=crop",
  "date": "2025-06-15",
  "source": "The Hacker News",
  "category": "infrastructure",
  "readTime": "7 min read",
  "priority": "medium",
  "readMoreUrl": "https://thehackernews.com/sample-news-14"
},
    {
  "id": "1015",
  "title": "Cybersecurity Event 15: Sample Realistic Threat Scenario",
  "description": "This is a real-world-inspired cybersecurity incident that simulates breach scenario number 15.",
  "image": "https://images.unsplash.com/photo-1605902711622-cfb43c4437f0?w=400&h=300&fit=crop",
  "date": "2025-06-16",
  "source": "The Hacker News",
  "category": "malware",
  "readTime": "3 min read",
  "priority": "critical",
  "readMoreUrl": "https://thehackernews.com/sample-news-15"
},
    {
  "id": "1016",
  "title": "Cybersecurity Event 16: Sample Realistic Threat Scenario",
  "description": "This is a real-world-inspired cybersecurity incident that simulates breach scenario number 16.",
  "image": "https://images.unsplash.com/photo-1605902711622-cfb43c4437f0?w=400&h=300&fit=crop",
  "date": "2025-06-17",
  "source": "The Hacker News",
  "category": "vulnerabilities",
  "readTime": "4 min read",
  "priority": "high",
  "readMoreUrl": "https://thehackernews.com/sample-news-16"
},
    {
  "id": "1017",
  "title": "Cybersecurity Event 17: Sample Realistic Threat Scenario",
  "description": "This is a real-world-inspired cybersecurity incident that simulates breach scenario number 17.",
  "image": "https://images.unsplash.com/photo-1605902711622-cfb43c4437f0?w=400&h=300&fit=crop",
  "date": "2025-06-18",
  "source": "The Hacker News",
  "category": "infrastructure",
  "readTime": "5 min read",
  "priority": "high",
  "readMoreUrl": "https://thehackernews.com/sample-news-17"
},
    {
  "id": "1018",
  "title": "Cybersecurity Event 18: Sample Realistic Threat Scenario",
  "description": "This is a real-world-inspired cybersecurity incident that simulates breach scenario number 18.",
  "image": "https://images.unsplash.com/photo-1605902711622-cfb43c4437f0?w=400&h=300&fit=crop",
  "date": "2025-06-19",
  "source": "The Hacker News",
  "category": "malware",
  "readTime": "6 min read",
  "priority": "medium",
  "readMoreUrl": "https://thehackernews.com/sample-news-18"
},
    {
  "id": "1019",
  "title": "Cybersecurity Event 19: Sample Realistic Threat Scenario",
  "description": "This is a real-world-inspired cybersecurity incident that simulates breach scenario number 19.",
  "image": "https://images.unsplash.com/photo-1605902711622-cfb43c4437f0?w=400&h=300&fit=crop",
  "date": "2025-06-20",
  "source": "The Hacker News",
  "category": "vulnerabilities",
  "readTime": "7 min read",
  "priority": "medium",
  "readMoreUrl": "https://thehackernews.com/sample-news-19"
},
    {
  "id": "1020",
  "title": "Cybersecurity Event 20: Sample Realistic Threat Scenario",
  "description": "This is a real-world-inspired cybersecurity incident that simulates breach scenario number 20.",
  "image": "https://images.unsplash.com/photo-1605902711622-cfb43c4437f0?w=400&h=300&fit=crop",
  "date": "2025-06-21",
  "source": "The Hacker News",
  "category": "infrastructure",
  "readTime": "3 min read",
  "priority": "critical",
  "readMoreUrl": "https://thehackernews.com/sample-news-20"
},
    {
  "id": "1021",
  "title": "Cybersecurity Event 21: Sample Realistic Threat Scenario",
  "description": "This is a real-world-inspired cybersecurity incident that simulates breach scenario number 21.",
  "image": "https://images.unsplash.com/photo-1605902711622-cfb43c4437f0?w=400&h=300&fit=crop",
  "date": "2025-06-22",
  "source": "The Hacker News",
  "category": "malware",
  "readTime": "4 min read",
  "priority": "high",
  "readMoreUrl": "https://thehackernews.com/sample-news-21"
},
    {
  "id": "1022",
  "title": "Cybersecurity Event 22: Sample Realistic Threat Scenario",
  "description": "This is a real-world-inspired cybersecurity incident that simulates breach scenario number 22.",
  "image": "https://images.unsplash.com/photo-1605902711622-cfb43c4437f0?w=400&h=300&fit=crop",
  "date": "2025-06-23",
  "source": "The Hacker News",
  "category": "vulnerabilities",
  "readTime": "5 min read",
  "priority": "high",
  "readMoreUrl": "https://thehackernews.com/sample-news-22"
},
    {
  "id": "1023",
  "title": "Cybersecurity Event 23: Sample Realistic Threat Scenario",
  "description": "This is a real-world-inspired cybersecurity incident that simulates breach scenario number 23.",
  "image": "https://images.unsplash.com/photo-1605902711622-cfb43c4437f0?w=400&h=300&fit=crop",
  "date": "2025-06-24",
  "source": "The Hacker News",
  "category": "infrastructure",
  "readTime": "6 min read",
  "priority": "medium",
  "readMoreUrl": "https://thehackernews.com/sample-news-23"
},
    {
  "id": "1024",
  "title": "Cybersecurity Event 24: Sample Realistic Threat Scenario",
  "description": "This is a real-world-inspired cybersecurity incident that simulates breach scenario number 24.",
  "image": "https://images.unsplash.com/photo-1605902711622-cfb43c4437f0?w=400&h=300&fit=crop",
  "date": "2025-06-25",
  "source": "The Hacker News",
  "category": "malware",
  "readTime": "7 min read",
  "priority": "medium",
  "readMoreUrl": "https://thehackernews.com/sample-news-24"
},
    {
  "id": "1025",
  "title": "Cybersecurity Event 25: Sample Realistic Threat Scenario",
  "description": "This is a real-world-inspired cybersecurity incident that simulates breach scenario number 25.",
  "image": "https://images.unsplash.com/photo-1605902711622-cfb43c4437f0?w=400&h=300&fit=crop",
  "date": "2025-06-26",
  "source": "The Hacker News",
  "category": "vulnerabilities",
  "readTime": "3 min read",
  "priority": "critical",
  "readMoreUrl": "https://thehackernews.com/sample-news-25"
},
    {
  "id": "1026",
  "title": "Cybersecurity Event 26: Sample Realistic Threat Scenario",
  "description": "This is a real-world-inspired cybersecurity incident that simulates breach scenario number 26.",
  "image": "https://images.unsplash.com/photo-1605902711622-cfb43c4437f0?w=400&h=300&fit=crop",
  "date": "2025-06-27",
  "source": "The Hacker News",
  "category": "infrastructure",
  "readTime": "4 min read",
  "priority": "high",
  "readMoreUrl": "https://thehackernews.com/sample-news-26"
},
    {
  "id": "1027",
  "title": "Cybersecurity Event 27: Sample Realistic Threat Scenario",
  "description": "This is a real-world-inspired cybersecurity incident that simulates breach scenario number 27.",
  "image": "https://images.unsplash.com/photo-1605902711622-cfb43c4437f0?w=400&h=300&fit=crop",
  "date": "2025-06-28",
  "source": "The Hacker News",
  "category": "malware",
  "readTime": "5 min read",
  "priority": "high",
  "readMoreUrl": "https://thehackernews.com/sample-news-27"
},
    {
  "id": "1028",
  "title": "Cybersecurity Event 28: Sample Realistic Threat Scenario",
  "description": "This is a real-world-inspired cybersecurity incident that simulates breach scenario number 28.",
  "image": "https://images.unsplash.com/photo-1605902711622-cfb43c4437f0?w=400&h=300&fit=crop",
  "date": "2025-06-01",
  "source": "The Hacker News",
  "category": "vulnerabilities",
  "readTime": "6 min read",
  "priority": "medium",
  "readMoreUrl": "https://thehackernews.com/sample-news-28"
},
    {
  "id": "1029",
  "title": "Cybersecurity Event 29: Sample Realistic Threat Scenario",
  "description": "This is a real-world-inspired cybersecurity incident that simulates breach scenario number 29.",
  "image": "https://images.unsplash.com/photo-1605902711622-cfb43c4437f0?w=400&h=300&fit=crop",
  "date": "2025-06-02",
  "source": "The Hacker News",
  "category": "infrastructure",
  "readTime": "7 min read",
  "priority": "medium",
  "readMoreUrl": "https://thehackernews.com/sample-news-29"
},
    {
  "id": "1030",
  "title": "Cybersecurity Event 30: Sample Realistic Threat Scenario",
  "description": "This is a real-world-inspired cybersecurity incident that simulates breach scenario number 30.",
  "image": "https://images.unsplash.com/photo-1605902711622-cfb43c4437f0?w=400&h=300&fit=crop",
  "date": "2025-06-03",
  "source": "The Hacker News",
  "category": "malware",
  "readTime": "3 min read",
  "priority": "critical",
  "readMoreUrl": "https://thehackernews.com/sample-news-30"
},
    {
  "id": "1031",
  "title": "Cybersecurity Event 31: Sample Realistic Threat Scenario",
  "description": "This is a real-world-inspired cybersecurity incident that simulates breach scenario number 31.",
  "image": "https://images.unsplash.com/photo-1605902711622-cfb43c4437f0?w=400&h=300&fit=crop",
  "date": "2025-06-04",
  "source": "The Hacker News",
  "category": "vulnerabilities",
  "readTime": "4 min read",
  "priority": "high",
  "readMoreUrl": "https://thehackernews.com/sample-news-31"
},
    {
  "id": "1032",
  "title": "Cybersecurity Event 32: Sample Realistic Threat Scenario",
  "description": "This is a real-world-inspired cybersecurity incident that simulates breach scenario number 32.",
  "image": "https://images.unsplash.com/photo-1605902711622-cfb43c4437f0?w=400&h=300&fit=crop",
  "date": "2025-06-05",
  "source": "The Hacker News",
  "category": "infrastructure",
  "readTime": "5 min read",
  "priority": "high",
  "readMoreUrl": "https://thehackernews.com/sample-news-32"
},
    {
  "id": "1033",
  "title": "Cybersecurity Event 33: Sample Realistic Threat Scenario",
  "description": "This is a real-world-inspired cybersecurity incident that simulates breach scenario number 33.",
  "image": "https://images.unsplash.com/photo-1605902711622-cfb43c4437f0?w=400&h=300&fit=crop",
  "date": "2025-06-06",
  "source": "The Hacker News",
  "category": "malware",
  "readTime": "6 min read",
  "priority": "medium",
  "readMoreUrl": "https://thehackernews.com/sample-news-33"
},
    {
  "id": "1034",
  "title": "Cybersecurity Event 34: Sample Realistic Threat Scenario",
  "description": "This is a real-world-inspired cybersecurity incident that simulates breach scenario number 34.",
  "image": "https://images.unsplash.com/photo-1605902711622-cfb43c4437f0?w=400&h=300&fit=crop",
  "date": "2025-06-07",
  "source": "The Hacker News",
  "category": "vulnerabilities",
  "readTime": "7 min read",
  "priority": "medium",
  "readMoreUrl": "https://thehackernews.com/sample-news-34"
},
    {
  "id": "1035",
  "title": "Cybersecurity Event 35: Sample Realistic Threat Scenario",
  "description": "This is a real-world-inspired cybersecurity incident that simulates breach scenario number 35.",
  "image": "https://images.unsplash.com/photo-1605902711622-cfb43c4437f0?w=400&h=300&fit=crop",
  "date": "2025-06-08",
  "source": "The Hacker News",
  "category": "infrastructure",
  "readTime": "3 min read",
  "priority": "critical",
  "readMoreUrl": "https://thehackernews.com/sample-news-35"
},
    {
  "id": "1036",
  "title": "Cybersecurity Event 36: Sample Realistic Threat Scenario",
  "description": "This is a real-world-inspired cybersecurity incident that simulates breach scenario number 36.",
  "image": "https://images.unsplash.com/photo-1605902711622-cfb43c4437f0?w=400&h=300&fit=crop",
  "date": "2025-06-09",
  "source": "The Hacker News",
  "category": "malware",
  "readTime": "4 min read",
  "priority": "high",
  "readMoreUrl": "https://thehackernews.com/sample-news-36"
},
    {
  "id": "1037",
  "title": "Cybersecurity Event 37: Sample Realistic Threat Scenario",
  "description": "This is a real-world-inspired cybersecurity incident that simulates breach scenario number 37.",
  "image": "https://images.unsplash.com/photo-1605902711622-cfb43c4437f0?w=400&h=300&fit=crop",
  "date": "2025-06-10",
  "source": "The Hacker News",
  "category": "vulnerabilities",
  "readTime": "5 min read",
  "priority": "high",
  "readMoreUrl": "https://thehackernews.com/sample-news-37"
},
    {
  "id": "1038",
  "title": "Cybersecurity Event 38: Sample Realistic Threat Scenario",
  "description": "This is a real-world-inspired cybersecurity incident that simulates breach scenario number 38.",
  "image": "https://images.unsplash.com/photo-1605902711622-cfb43c4437f0?w=400&h=300&fit=crop",
  "date": "2025-06-11",
  "source": "The Hacker News",
  "category": "infrastructure",
  "readTime": "6 min read",
  "priority": "medium",
  "readMoreUrl": "https://thehackernews.com/sample-news-38"
},
    {
  "id": "1039",
  "title": "Cybersecurity Event 39: Sample Realistic Threat Scenario",
  "description": "This is a real-world-inspired cybersecurity incident that simulates breach scenario number 39.",
  "image": "https://images.unsplash.com/photo-1605902711622-cfb43c4437f0?w=400&h=300&fit=crop",
  "date": "2025-06-12",
  "source": "The Hacker News",
  "category": "malware",
  "readTime": "7 min read",
  "priority": "medium",
  "readMoreUrl": "https://thehackernews.com/sample-news-39"
},
    {
  "id": "1040",
  "title": "Cybersecurity Event 40: Sample Realistic Threat Scenario",
  "description": "This is a real-world-inspired cybersecurity incident that simulates breach scenario number 40.",
  "image": "https://images.unsplash.com/photo-1605902711622-cfb43c4437f0?w=400&h=300&fit=crop",
  "date": "2025-06-13",
  "source": "The Hacker News",
  "category": "vulnerabilities",
  "readTime": "3 min read",
  "priority": "critical",
  "readMoreUrl": "https://thehackernews.com/sample-news-40"
},
    {
  "id": "1041",
  "title": "Cybersecurity Event 41: Sample Realistic Threat Scenario",
  "description": "This is a real-world-inspired cybersecurity incident that simulates breach scenario number 41.",
  "image": "https://images.unsplash.com/photo-1605902711622-cfb43c4437f0?w=400&h=300&fit=crop",
  "date": "2025-06-14",
  "source": "The Hacker News",
  "category": "infrastructure",
  "readTime": "4 min read",
  "priority": "high",
  "readMoreUrl": "https://thehackernews.com/sample-news-41"
},
    {
  "id": "1042",
  "title": "Cybersecurity Event 42: Sample Realistic Threat Scenario",
  "description": "This is a real-world-inspired cybersecurity incident that simulates breach scenario number 42.",
  "image": "https://images.unsplash.com/photo-1605902711622-cfb43c4437f0?w=400&h=300&fit=crop",
  "date": "2025-06-15",
  "source": "The Hacker News",
  "category": "malware",
  "readTime": "5 min read",
  "priority": "high",
  "readMoreUrl": "https://thehackernews.com/sample-news-42"
},
    {
  "id": "1043",
  "title": "Cybersecurity Event 43: Sample Realistic Threat Scenario",
  "description": "This is a real-world-inspired cybersecurity incident that simulates breach scenario number 43.",
  "image": "https://images.unsplash.com/photo-1605902711622-cfb43c4437f0?w=400&h=300&fit=crop",
  "date": "2025-06-16",
  "source": "The Hacker News",
  "category": "vulnerabilities",
  "readTime": "6 min read",
  "priority": "medium",
  "readMoreUrl": "https://thehackernews.com/sample-news-43"
},
    {
  "id": "1044",
  "title": "Cybersecurity Event 44: Sample Realistic Threat Scenario",
  "description": "This is a real-world-inspired cybersecurity incident that simulates breach scenario number 44.",
  "image": "https://images.unsplash.com/photo-1605902711622-cfb43c4437f0?w=400&h=300&fit=crop",
  "date": "2025-06-17",
  "source": "The Hacker News",
  "category": "infrastructure",
  "readTime": "7 min read",
  "priority": "medium",
  "readMoreUrl": "https://thehackernews.com/sample-news-44"
},
    {
  "id": "1045",
  "title": "Cybersecurity Event 45: Sample Realistic Threat Scenario",
  "description": "This is a real-world-inspired cybersecurity incident that simulates breach scenario number 45.",
  "image": "https://images.unsplash.com/photo-1605902711622-cfb43c4437f0?w=400&h=300&fit=crop",
  "date": "2025-06-18",
  "source": "The Hacker News",
  "category": "malware",
  "readTime": "3 min read",
  "priority": "critical",
  "readMoreUrl": "https://thehackernews.com/sample-news-45"
},
    {
  "id": "1046",
  "title": "Cybersecurity Event 46: Sample Realistic Threat Scenario",
  "description": "This is a real-world-inspired cybersecurity incident that simulates breach scenario number 46.",
  "image": "https://images.unsplash.com/photo-1605902711622-cfb43c4437f0?w=400&h=300&fit=crop",
  "date": "2025-06-19",
  "source": "The Hacker News",
  "category": "vulnerabilities",
  "readTime": "4 min read",
  "priority": "high",
  "readMoreUrl": "https://thehackernews.com/sample-news-46"
},
    {
  "id": "1047",
  "title": "Cybersecurity Event 47: Sample Realistic Threat Scenario",
  "description": "This is a real-world-inspired cybersecurity incident that simulates breach scenario number 47.",
  "image": "https://images.unsplash.com/photo-1605902711622-cfb43c4437f0?w=400&h=300&fit=crop",
  "date": "2025-06-20",
  "source": "The Hacker News",
  "category": "infrastructure",
  "readTime": "5 min read",
  "priority": "high",
  "readMoreUrl": "https://thehackernews.com/sample-news-47"
},
    {
  "id": "1048",
  "title": "Cybersecurity Event 48: Sample Realistic Threat Scenario",
  "description": "This is a real-world-inspired cybersecurity incident that simulates breach scenario number 48.",
  "image": "https://images.unsplash.com/photo-1605902711622-cfb43c4437f0?w=400&h=300&fit=crop",
  "date": "2025-06-21",
  "source": "The Hacker News",
  "category": "malware",
  "readTime": "6 min read",
  "priority": "medium",
  "readMoreUrl": "https://thehackernews.com/sample-news-48"
},
    {
  "id": "1049",
  "title": "Cybersecurity Event 49: Sample Realistic Threat Scenario",
  "description": "This is a real-world-inspired cybersecurity incident that simulates breach scenario number 49.",
  "image": "https://images.unsplash.com/photo-1605902711622-cfb43c4437f0?w=400&h=300&fit=crop",
  "date": "2025-06-22",
  "source": "The Hacker News",
  "category": "vulnerabilities",
  "readTime": "7 min read",
  "priority": "medium",
  "readMoreUrl": "https://thehackernews.com/sample-news-49"
},
    {
  "id": "1050",
  "title": "Cybersecurity Event 50: Sample Realistic Threat Scenario",
  "description": "This is a real-world-inspired cybersecurity incident that simulates breach scenario number 50.",
  "image": "https://images.unsplash.com/photo-1605902711622-cfb43c4437f0?w=400&h=300&fit=crop",
  "date": "2025-06-23",
  "source": "The Hacker News",
  "category": "infrastructure",
  "readTime": "3 min read",
  "priority": "critical",
  "readMoreUrl": "https://thehackernews.com/sample-news-50"
}];

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
