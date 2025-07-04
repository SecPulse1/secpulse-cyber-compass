
// News data
const newsData = [
    {
        id: 1,
        title: 'North Korean Hackers Target Web3 with Nim Malware and Use ClickFix in BabyShark Campaign',
        description: 'Threat actors with ties to North Korea have been observed targeting Web3 and cryptocurrency-related businesses with malware written in the Nim programming language, underscoring a constant evolution of their tactics.',
        image: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjyYZAr54elU-Z76djgWJmGN3wQO1bGkHghXmAPGjRWXDXtVIb8LSOknNNKtrHIkFDS2mPL2BnUQcIhHS5blZdO8hSWnclRJ64hhCLuF6EIIztB6aXQQQjiLPrwRg8ve-6dUWyZzoIqRI7WhFihMlxyXONLULK6MiprFnfLvrsDxAjmqiwh67WcT6dA0TD4/s728-rw-e365/northkorean-hackers.jpg',
        date: '2025-07-02',
        source: 'The Hacker News',
        category: 'malware',
        readTime: '10 min read',
        priority: 'critical',
        url: 'https://thehackernews.com/2025/07/north-korean-hackers-target-web3-with.html'
    },
    {
        id: 2,
        title: 'Advanced Ransomware Campaign Targets Healthcare with AI-Powered Attacks',
        description: 'With nearly 80% of cyber threats now mimicking legitimate user behavior, how are top SOCs determining what is legitimate traffic and what is potentially dangerous?',
        image: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgYmXZg25AI9euid6yFoO777OuU3Np8qv-q8BeX6UsfJEi7-iFTNz12V1IXbq3sNE2aZrfLa8ULyfPu05wO5ro3gqltw6KUqhja7MsWg59afpI-LzhXvLxDdfqEEK7LUss2whbthQEGS9cQScJ0ZDJTCzSMIZ1v9OjLwV42ttK0xaj5PDnZqGiq7JWF7yo/s728-rw-e365/main.jpg',
        date: '2025-07-01',
        source: 'The Hacker News',
        category: 'vulnerabilities',
        readTime: '5 min read',
        priority: 'high',
        url: 'https://thehackernews.com/2025/07/that-network-traffic-looks-legit-but-it.html'
    },
    {
        id: 3,
        title: 'Hackers Using PDFs to Impersonate Microsoft, DocuSign, and More in Callback Phishing Campaigns',
        description: 'Cybersecurity researchers are calling attention to phishing campaigns that impersonate popular brands and trick targets into calling phone numbers operated by threat actors.',
        image: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiIGeJix-zrxEYdKOhweUP-djrCM9zwsnhtwTh8kBh7GRpqdQPAuyzRFhpuhm_-Pq3Kn-R_IVXXCcySH0QZlGQCjCJKbmWIkAjRYuP3qQZ3QGJv4yuZR3S9aqpD3ZAbrTirel8B5ADErAwhC7KDvmHEekYoF7xJL65LeokS-r1FR7P8BfpxV_6ZKYRnpkxL/s728-rw-e365/call-phishing.jpg',
        date: '2025-07-02',
        source: 'The Hacker News',
        category: 'vulnerabilities',
        readTime: '4 min read',
        priority: 'high',
        url: 'https://thehackernews.com/2025/07/hackers-using-pdfs-to-impersonate.html'
    },
    {
        id: 4,
        title: 'U.S. Sanctions Russian Bulletproof Hosting Provider for Supporting Cybercriminals Behind Ransomware',
        description: "The U.S. Department of the Treasury's Office of Foreign Assets Control (OFAC) has levied sanctions against Russia-based bulletproof hosting (BPH) service provider Aeza Group to assist threat actors in their malicious activities and targeting victims in the country and across the world.",
        image: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgoOw4eBme7AG11gBPRXKW65QmaZNpHUgo6nhwVMMXex_1Tv_Bs884S2mHGZYQWmaq7TiGMkNTp7DSEKl9Lqn9Rhmz-mcPemtLwuDsW9LHFdpNpc2Q94PjXk4z_ZuQz0W2C4f3r4d_4ftxfY4Shi9MxnhS7lTTpsj3JrjYCxqtI30sqMClFJVuyGdYYOY4D/s728-rw-e365/russian-ransomware-hosting.jpg',
        date: '2025-07-02',
        source: 'The Hacker News',
        category: 'infrastructure',
        readTime: '6 min read',
        priority: 'critical',
        url: '#'
    },
    {
        id: 5,
        title: "Vercel's v0 AI Tool Weaponized by Cybercriminals to Rapidly Create Fake Login Pages at Scale",
        description: 'Unknown threat actors have been observed weaponizing v0, a generative artificial intelligence (AI) tool from Vercel, to design fake sign-in pages that impersonate their legitimate counterparts.',
        image: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjX4nE-llQWlDtq24IA_KO1FtaQINmzb20JdnQPoz8D2NDKOiB-wtKFcYXx8GIJ7aHpapwRQMI2iAaFMi__jGcUxbN-GOkJrunjR2jL3RbXtuU4VjOtYLMGRMpo0EOcsOLZ5hgZv6Z8RKg-6O8VlfahoV_DYe88Jr-22FY-YD71xsKMQHH_Y7WC9KeSMHNF/s728-rw-e365/phishing-sites.jpg',
        date: '2025-07-02',
        source: 'The Hacker News',
        category: 'malware',
        readTime: '7 min read',
        priority: 'medium',
        url: 'https://thehackernews.com/2025/07/vercels-v0-ai-tool-weaponized-by.html'
    },
    {
        id: 6,
        title: 'Chrome Zero-Day CVE-2025-6554 Under Active Attack — Google Issues Security Update',
        description: 'Google has released security updates to address a vulnerability in its Chrome browser for which an exploit exists in the wild.',
        image: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEg9cjUIgsu7YJnLqfQXOmuJKaSC3r8Cjsgv76IxFAPIIP18SYUxY-e5EvTKWbps95jNM_s8VwtriNO6ouqJm1aOekCBcu9CdL6Df8JB9pfHOI7HNtatSVSBqN11MBuO_GRjwNSyssly0ZFH2Q7AYfRE_qqHJMdIURMxrfRNFRMas_GY0jYRFgWUNsRLrkFu/s728-rw-e365/chrome.jpg',
        date: '2025-07-01',
        source: 'The Hacker News',
        category: 'vulnerabilities',
        readTime: '10 min read',
        priority: 'high',
        url: 'https://thehackernews.com/2025/07/google-patches-critical-zero-day-flaw.html'
    }
];

// Generate additional news for demonstration
for (let i = 7; i <= 50; i++) {
    const categories = ['vulnerabilities', 'malware', 'infrastructure', 'cloud', 'mobile'];
    const priorities = ['critical', 'high', 'medium'];
    const sources = ['The Hacker News', 'Bleeping Computer', 'Dark Reading', 'ESET', 'Threatpost'];
    
    newsData.push({
        id: i,
        title: `Cybersecurity Event ${i}: Sample Realistic Threat Scenario`,
        description: `This is a real-world-inspired cybersecurity incident that simulates breach scenario number ${i}.`,
        image: 'https://images.unsplash.com/photo-1605902711622-cfb43c4437f0?w=400&h=300&fit=crop',
        date: `2025-06-${String(Math.floor(Math.random() * 28) + 1).padStart(2, '0')}`,
        source: sources[Math.floor(Math.random() * sources.length)],
        category: categories[Math.floor(Math.random() * categories.length)],
        readTime: `${Math.floor(Math.random() * 5) + 3} min read`,
        priority: priorities[Math.floor(Math.random() * priorities.length)],
        url: `https://thehackernews.com/sample-news-${i}`
    });
}

// State management
let currentNews = [...newsData];
let filteredNews = [...newsData];
let searchTerm = '';
let selectedCategory = 'all';
let sortBy = 'date';
let bookmarkedNews = JSON.parse(localStorage.getItem('secpulse-bookmarks') || '[]');
let isDarkMode = localStorage.getItem('darkMode') === 'true';
let currentLanguage = localStorage.getItem('language') || 'en';

// DOM elements
const searchInput = document.getElementById('searchInput');
const newsGrid = document.getElementById('newsGrid');
const themeToggle = document.getElementById('themeToggle');
const languageSelect = document.getElementById('languageSelect');
const mobileMenuBtn = document.getElementById('mobileMenuBtn');

// Initialize the application
function init() {
    // Set initial theme
    if (isDarkMode) {
        document.body.classList.add('dark');
        themeToggle.textContent = '☀️';
    }
    
    // Set initial language
    languageSelect.value = currentLanguage;
    
    // Event listeners
    searchInput.addEventListener('input', handleSearch);
    themeToggle.addEventListener('click', toggleTheme);
    languageSelect.addEventListener('change', handleLanguageChange);
    
    // Sort buttons
    document.querySelectorAll('.sort-btn').forEach(btn => {
        btn.addEventListener('click', (e) => handleSort(e.target.dataset.sort));
    });
    
    // Category pills
    document.querySelectorAll('.category-pill').forEach(pill => {
        pill.addEventListener('click', (e) => handleCategoryChange(e.target.dataset.category));
    });
    
    // Mobile menu
    mobileMenuBtn.addEventListener('click', toggleMobileMenu);
    
    // Initial render
    filterAndRenderNews();
}

// Search functionality
function handleSearch(e) {
    searchTerm = e.target.value.toLowerCase();
    filterAndRenderNews();
}

// Sort functionality
function handleSort(newSortBy) {
    sortBy = newSortBy;
    
    // Update active sort button
    document.querySelectorAll('.sort-btn').forEach(btn => {
        btn.classList.toggle('active', btn.dataset.sort === sortBy);
    });
    
    filterAndRenderNews();
}

// Category filtering
function handleCategoryChange(category) {
    selectedCategory = category;
    
    // Update active category pill
    document.querySelectorAll('.category-pill').forEach(pill => {
        pill.classList.toggle('active', pill.dataset.category === category);
    });
    
    filterAndRenderNews();
}

// Theme toggle
function toggleTheme() {
    isDarkMode = !isDarkMode;
    document.body.classList.toggle('dark', isDarkMode);
    themeToggle.textContent = isDarkMode ? '☀️' : '🌙';
    localStorage.setItem('darkMode', isDarkMode);
}

// Language change
function handleLanguageChange(e) {
    currentLanguage = e.target.value;
    localStorage.setItem('language', currentLanguage);
    
    // In a real implementation, this would update all text content
    console.log('Language changed to:', currentLanguage);
}

// Mobile menu toggle
function toggleMobileMenu() {
    const nav = document.querySelector('.nav');
    nav.classList.toggle('active');
}

// Filter and render news
function filterAndRenderNews() {
    // Filter news
    filteredNews = currentNews.filter(news => {
        const matchesSearch = !searchTerm || 
            news.title.toLowerCase().includes(searchTerm) ||
            news.description.toLowerCase().includes(searchTerm) ||
            news.source.toLowerCase().includes(searchTerm);
        
        const matchesCategory = selectedCategory === 'all' || news.category === selectedCategory;
        
        return matchesSearch && matchesCategory;
    });
    
    // Sort news
    filteredNews.sort((a, b) => {
        if (sortBy === 'date') {
            return new Date(b.date) - new Date(a.date);
        } else if (sortBy === 'priority') {
            const priorityOrder = { critical: 3, high: 2, medium: 1 };
            return priorityOrder[b.priority] - priorityOrder[a.priority];
        }
        return 0;
    });
    
    // Update results count
    const countElement = document.querySelector('.count-highlight');
    if (countElement) {
        countElement.textContent = filteredNews.length;
    }
    
    // Render news cards
    renderNewsCards();
}

// Render news cards
function renderNewsCards() {
    if (!newsGrid) return;
    
    newsGrid.innerHTML = filteredNews.map((news, index) => `
        <article class="news-card fade-in" style="animation-delay: ${index * 100}ms">
            <div class="news-card-header">
                ${news.priority !== 'medium' ? `
                    <div class="priority-badge priority-${news.priority}">
                        ${getPriorityIcon(news.priority)}
                        ${news.priority.toUpperCase()}
                    </div>
                ` : '<div></div>'}
                <button class="bookmark-btn ${bookmarkedNews.includes(news.id) ? 'bookmarked' : ''}" 
                        onclick="toggleBookmark(${news.id})">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <path d="M19 21l-7-5-7 5V5a2 2 0 012-2h10a2 2 0 012 2z"/>
                    </svg>
                </button>
            </div>
            
            <img src="${news.image}" alt="${news.title}" class="news-image" 
                 onerror="this.src='https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=400&h=300&fit=crop'">
            
            <div class="news-meta">
                <div class="news-meta-item">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/>
                        <line x1="16" y1="2" x2="16" y2="6"/>
                        <line x1="8" y1="2" x2="8" y2="6"/>
                        <line x1="3" y1="10" x2="21" y2="10"/>
                    </svg>
                    ${formatDate(news.date)}
                </div>
                <div class="news-meta-item">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <circle cx="12" cy="12" r="10"/>
                        <polyline points="12,6 12,12 16,14"/>
                    </svg>
                    ${news.readTime}
                </div>
            </div>
            
            <div class="news-source">${news.source}</div>
            
            <h3 class="news-title">${news.title}</h3>
            
            <p class="news-description">${news.description}</p>
            
            <button class="read-more-btn" onclick="readMore('${news.url}')">
                Read Full Article
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6"/>
                    <polyline points="15,3 21,3 21,9"/>
                    <line x1="10" y1="14" x2="21" y2="3"/>
                </svg>
            </button>
        </article>
    `).join('');
}

// Helper functions
function getPriorityIcon(priority) {
    switch (priority) {
        case 'critical':
            return '<svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z"/><line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg>';
        case 'high':
            return '<svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 3h18l-1 13H4z"/><path d="M16 16l1.5 2 3-3"/></svg>';
        default:
            return '';
    }
}

function formatDate(dateString) {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
        year: 'numeric', 
        month: 'short', 
        day: 'numeric' 
    });
}

function toggleBookmark(newsId) {
    const index = bookmarkedNews.indexOf(newsId);
    if (index > -1) {
        bookmarkedNews.splice(index, 1);
    } else {
        bookmarkedNews.push(newsId);
    }
    
    localStorage.setItem('secpulse-bookmarks', JSON.stringify(bookmarkedNews));
    
    // Update bookmark button
    const bookmarkBtn = event.target.closest('.bookmark-btn');
    bookmarkBtn.classList.toggle('bookmarked', bookmarkedNews.includes(newsId));
    
    // Update bookmarks count
    const bookmarksBtn = document.querySelector('.bookmarks-btn');
    if (bookmarksBtn) {
        bookmarksBtn.innerHTML = `
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M19 21l-7-5-7 5V5a2 2 0 012-2h10a2 2 0 012 2z"/>
            </svg>
            ${bookmarkedNews.length} Bookmarked
        `;
    }
}

function readMore(url) {
    if (url && url !== '#') {
        window.open(url, '_blank', 'noopener,noreferrer');
    }
}

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Intersection Observer for animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('fade-in');
        }
    });
}, observerOptions);

// Observe elements when they're added to the DOM
function observeNewsCards() {
    document.querySelectorAll('.news-card').forEach(card => {
        observer.observe(card);
    });
}

// Error handling for images
function handleImageError(img) {
    img.src = 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=400&h=300&fit=crop';
}

// Add loading states
function showLoading() {
    if (newsGrid) {
        newsGrid.innerHTML = Array(6).fill(0).map(() => `
            <div class="news-card skeleton">
                <div style="height: 200px; background-color: var(--muted); margin-bottom: 1rem; border-radius: var(--radius);"></div>
                <div style="height: 1rem; background-color: var(--muted); margin-bottom: 0.5rem; border-radius: var(--radius);"></div>
                <div style="height: 1rem; background-color: var(--muted); width: 70%; margin-bottom: 1rem; border-radius: var(--radius);"></div>
                <div style="height: 3rem; background-color: var(--muted); border-radius: var(--radius);"></div>
            </div>
        `).join('');
    }
}

// Initialize when DOM is loaded
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
} else {
    init();
}

// Export functions for global access
window.toggleBookmark = toggleBookmark;
window.readMore = readMore;
window.handleImageError = handleImageError;
