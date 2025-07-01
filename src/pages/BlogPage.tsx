import React, { useState } from 'react';
import { Search, Calendar, User, Tag, BookOpen, Star, TrendingUp, MessageCircle } from 'lucide-react';
import SacredGeometry from '../components/SacredGeometry';

const BlogPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { value: 'all', label: 'All Posts' },
    { value: 'basics', label: 'Numerology Basics' },
    { value: 'forecasts', label: 'Monthly Forecasts' },
    { value: 'meanings', label: 'Number Meanings' },
    { value: 'relationships', label: 'Relationships' },
    { value: 'career', label: 'Career & Purpose' },
    { value: 'spiritual', label: 'Spiritual Growth' }
  ];

  const blogPosts = [
    {
      id: 1,
      title: 'Understanding Your Life Path Number: A Complete Guide',
      excerpt: 'Discover how your birth date reveals your soul\'s journey and purpose in this lifetime. Learn to calculate and interpret your most important numerological number.',
      content: 'Your Life Path number is the most significant number in your numerology chart, representing the path you\'re meant to walk in this lifetime...',
      author: 'Mystic Numbers',
      date: '2024-01-15',
      category: 'basics',
      tags: ['life path', 'beginners', 'calculation'],
      readTime: '8 min read',
      image: 'https://images.pexels.com/photos/6348124/pexels-photo-6348124.jpeg?auto=compress&cs=tinysrgb&w=800',
      featured: true
    },
    {
      id: 2,
      title: 'The Mystical Power of Master Numbers 11, 22, and 33',
      excerpt: 'Explore the heightened spiritual significance of these powerful double-digit numbers and what they mean for your spiritual evolution.',
      content: 'Master numbers carry special spiritual significance and represent heightened potential for growth and service...',
      author: 'Mystic Numbers',
      date: '2024-01-12',
      category: 'spiritual',
      tags: ['master numbers', 'spirituality', 'advanced'],
      readTime: '6 min read',
      image: 'https://images.pexels.com/photos/3831645/pexels-photo-3831645.jpeg?auto=compress&cs=tinysrgb&w=800',
      featured: false
    },
    {
      id: 3,
      title: 'February 2024 Numerological Forecast: A Month of New Beginnings',
      excerpt: 'What the numbers reveal about February\'s energy and how to align with the cosmic vibrations for maximum growth and manifestation.',
      content: 'February 2024 brings the energy of the number 2, emphasizing cooperation, partnerships, and emotional sensitivity...',
      author: 'Mystic Numbers',
      date: '2024-01-30',
      category: 'forecasts',
      tags: ['monthly forecast', '2024', 'predictions'],
      readTime: '5 min read',
      image: 'https://images.pexels.com/photos/7176026/pexels-photo-7176026.jpeg?auto=compress&cs=tinysrgb&w=800',
      featured: true
    },
    {
      id: 4,
      title: 'Numerology and Career: Finding Your Professional Purpose',
      excerpt: 'Learn how your personal numbers can guide you toward your ideal career path and help you make aligned professional decisions.',
      content: 'Your numerological profile contains powerful insights about your natural talents, work style, and career purpose...',
      author: 'Mystic Numbers',
      date: '2024-01-25',
      category: 'career',
      tags: ['career', 'purpose', 'guidance'],
      readTime: '7 min read',
      image: 'https://images.pexels.com/photos/6962024/pexels-photo-6962024.jpeg?auto=compress&cs=tinysrgb&w=800',
      featured: false
    },
    {
      id: 5,
      title: 'Seeing 111, 222, 333? Decoding Angel Numbers',
      excerpt: 'Understand the spiritual messages behind repeating number sequences and how they guide you on your path.',
      content: 'Repeating numbers are often called "angel numbers" and are believed to be messages from the universe...',
      author: 'Mystic Numbers',
      date: '2024-01-20',
      category: 'spiritual',
      tags: ['angel numbers', 'synchronicity', 'messages'],
      readTime: '6 min read',
      image: 'https://images.pexels.com/photos/3785927/pexels-photo-3785927.jpeg?auto=compress&cs=tinysrgb&w=800',
      featured: false
    },
    {
      id: 6,
      title: 'Compatibility by the Numbers: Relationship Numerology',
      excerpt: 'Discover how numerology can reveal the strengths and challenges in your relationships and guide you to deeper connections.',
      content: 'Relationship numerology examines how different number combinations interact and influence partnerships...',
      author: 'Mystic Numbers',
      date: '2024-01-18',
      category: 'relationships',
      tags: ['relationships', 'compatibility', 'love'],
      readTime: '9 min read',
      image: 'https://images.pexels.com/photos/1024993/pexels-photo-1024993.jpeg?auto=compress&cs=tinysrgb&w=800',
      featured: true
    }
  ];

  const filteredPosts = blogPosts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    const matchesCategory = selectedCategory === 'all' || post.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const featuredPosts = blogPosts.filter(post => post.featured);

  return (
    <div className="min-h-screen py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Numerology
            <span className="bg-gradient-to-r from-accent-400 to-primary-400 bg-clip-text text-transparent block">
              Wisdom & Insights
            </span>
          </h1>
          <p className="text-xl text-white/80 max-w-3xl mx-auto">
            Explore the mystical world of numbers through articles, forecasts, and practical guidance 
            for your spiritual journey.
          </p>
        </div>

        {/* Search and Filter */}
        <div className="mb-12">
          <div className="flex flex-col md:flex-row gap-6 items-center justify-between bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20">
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-white/50" />
              <input
                type="text"
                placeholder="Search articles, topics, or tags..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-accent-400 focus:border-transparent backdrop-blur-sm"
              />
            </div>
            
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category.value}
                  onClick={() => setSelectedCategory(category.value)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                    selectedCategory === category.value
                      ? 'bg-accent-500 text-white'
                      : 'bg-white/10 text-white/80 hover:bg-white/20'
                  }`}
                >
                  {category.label}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Featured Posts */}
        {selectedCategory === 'all' && (
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-white mb-8 flex items-center">
              <TrendingUp className="mr-3 h-8 w-8 text-accent-400" />
              Featured Articles
            </h2>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {featuredPosts.map((post, index) => (
                <article
                  key={post.id}
                  className="bg-white/10 backdrop-blur-md rounded-2xl overflow-hidden border border-white/20 hover:bg-white/15 transition-all duration-300 transform hover:scale-105 animate-scale-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="relative">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-48 object-cover"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="bg-accent-500 text-white px-3 py-1 rounded-full text-xs font-semibold">
                        Featured
                      </span>
                    </div>
                    <SacredGeometry className="absolute top-4 right-4 text-white/30" size="sm" />
                  </div>
                  
                  <div className="p-6">
                    <div className="flex items-center mb-3 text-sm text-white/60">
                      <Calendar className="h-4 w-4 mr-2" />
                      {post.date}
                      <span className="mx-2">•</span>
                      <BookOpen className="h-4 w-4 mr-2" />
                      {post.readTime}
                    </div>
                    
                    <h3 className="text-xl font-bold text-white mb-3 line-clamp-2">
                      {post.title}
                    </h3>
                    
                    <p className="text-white/80 mb-4 line-clamp-3">
                      {post.excerpt}
                    </p>
                    
                    <div className="flex flex-wrap gap-2 mb-4">
                      {post.tags.slice(0, 3).map((tag) => (
                        <span
                          key={tag}
                          className="bg-primary-500/30 text-primary-200 px-2 py-1 rounded text-xs"
                        >
                          #{tag}
                        </span>
                      ))}
                    </div>
                    
                    <button className="text-accent-400 hover:text-accent-300 font-medium transition-colors flex items-center">
                      Read Full Article
                      <BookOpen className="ml-2 h-4 w-4" />
                    </button>
                  </div>
                </article>
              ))}
            </div>
          </section>
        )}

        {/* All Posts */}
        <section>
          <h2 className="text-3xl font-bold text-white mb-8 flex items-center">
            <BookOpen className="mr-3 h-8 w-8 text-primary-400" />
            {selectedCategory === 'all' ? 'All Articles' : `${categories.find(c => c.value === selectedCategory)?.label} Articles`}
            <span className="ml-3 text-lg text-white/60">({filteredPosts.length})</span>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {filteredPosts.map((post, index) => (
              <article
                key={post.id}
                className="bg-white/10 backdrop-blur-md rounded-2xl overflow-hidden border border-white/20 hover:bg-white/15 transition-all duration-300 animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="md:flex">
                  <div className="md:w-1/3">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-48 md:h-full object-cover"
                    />
                  </div>
                  
                  <div className="p-6 md:w-2/3">
                    <div className="flex items-center mb-3 text-sm text-white/60">
                      <User className="h-4 w-4 mr-2" />
                      {post.author}
                      <span className="mx-2">•</span>
                      <Calendar className="h-4 w-4 mr-2" />
                      {post.date}
                      <span className="mx-2">•</span>
                      <BookOpen className="h-4 w-4 mr-2" />
                      {post.readTime}
                    </div>
                    
                    <h3 className="text-xl font-bold text-white mb-3">
                      {post.title}
                    </h3>
                    
                    <p className="text-white/80 mb-4 line-clamp-2">
                      {post.excerpt}
                    </p>
                    
                    <div className="flex flex-wrap gap-2 mb-4">
                      {post.tags.slice(0, 2).map((tag) => (
                        <span
                          key={tag}
                          className="bg-accent-500/30 text-accent-200 px-2 py-1 rounded text-xs"
                        >
                          <Tag className="inline h-3 w-3 mr-1" />
                          {tag}
                        </span>
                      ))}
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <button className="text-accent-400 hover:text-accent-300 font-medium transition-colors">
                        Read More →
                      </button>
                      <div className="flex items-center text-white/60 text-sm">
                        <MessageCircle className="h-4 w-4 mr-1" />
                        <span>12 comments</span>
                      </div>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* Newsletter Signup */}
        <section className="mt-20">
          <div className="bg-gradient-to-r from-accent-500/20 to-primary-500/20 backdrop-blur-md rounded-3xl p-8 border border-white/20 text-center relative overflow-hidden">
            <SacredGeometry className="absolute -top-8 -left-8 text-accent-400" size="lg" />
            <SacredGeometry className="absolute -bottom-8 -right-8 text-primary-400" size="lg" />
            
            <div className="relative z-10">
              <Star className="h-12 w-12 text-accent-400 mx-auto mb-4" />
              <h3 className="text-3xl font-bold text-white mb-4">
                Stay Connected to Cosmic Wisdom
              </h3>
              <p className="text-white/80 mb-6 max-w-2xl mx-auto">
                Receive monthly numerology insights, personalized forecasts, and exclusive content 
                directly in your inbox. Join our spiritual community of seekers.
              </p>
              
              <div className="max-w-md mx-auto">
                <div className="flex gap-4">
                  <input
                    type="email"
                    placeholder="Enter your email address"
                    className="flex-1 px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-accent-400 focus:border-transparent backdrop-blur-sm"
                  />
                  <button className="bg-gradient-to-r from-accent-500 to-accent-600 hover:from-accent-600 hover:to-accent-700 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 whitespace-nowrap">
                    Subscribe
                  </button>
                </div>
                <p className="text-white/60 text-sm mt-3">
                  No spam, unsubscribe anytime. Your cosmic journey is sacred to us.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default BlogPage;