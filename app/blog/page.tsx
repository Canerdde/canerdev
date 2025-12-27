'use client'

import Link from 'next/link'
import { useState } from 'react'
import { Calendar, Clock, Tag, TrendingUp, Sparkles } from 'lucide-react'
import Image from 'next/image'
import { useLanguage } from '@/contexts/LanguageContext'

export default function BlogPage() {
  const { t } = useLanguage()
  const blogPosts = t.blog.posts
  const categories = Array.from(new Set(blogPosts.map(post => post.category)))
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null)
  
  // Filter posts based on selected category
  const filteredPosts = selectedCategory 
    ? blogPosts.filter(post => post.category === selectedCategory)
    : blogPosts
  
  const featuredPosts = filteredPosts.filter(post => (post as any).featured)
  const trendingPosts = filteredPosts.filter(post => (post as any).trending)
  
  const translateCategory = (category: string) => {
    return t.blog.categories[category as keyof typeof t.blog.categories] || category
  }
  
  const handleCategoryClick = (category: string | null) => {
    setSelectedCategory(category)
    // Scroll to filtered posts section
    setTimeout(() => {
      const element = document.getElementById('all-posts')
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' })
      }
    }, 100)
  }

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-blue-600/10 via-purple-600/10 to-pink-600/10 border-b border-gray-800">
        <div className="container-custom py-16 md:py-24">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-blue-600/20 border border-blue-500/30 px-4 py-2 rounded-full mb-6 animate-slide-up">
              <Sparkles className="w-4 h-4 text-blue-400" />
              <span className="text-sm text-blue-300">{t.blog.trendingLabel}</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 animate-slide-up" style={{animationDelay: '0.1s'}}>
              <span className="gradient-text">{t.blog.title}</span>
            </h1>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto animate-slide-up" style={{animationDelay: '0.2s'}}>
              {t.blog.subtitle}
            </p>
          </div>
        </div>
      </div>

      <div className="container-custom py-12">
        {/* Trending Posts */}
        {trendingPosts.length > 0 && (
          <div className="mb-16">
            <div className="flex items-center gap-3 mb-8">
              <TrendingUp className="w-6 h-6 text-orange-500" />
              <h2 className="text-3xl font-bold">{t.blog.trendingPosts}</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              {trendingPosts.slice(0, 2).map((post, index) => (
                <Link 
                  key={post.slug} 
                  href={`/blog/${post.slug}`}
                  className="group relative overflow-hidden rounded-2xl bg-gray-900 border border-gray-800 hover:border-orange-500/50 transition-all duration-300"
                >
                  <div className="relative h-64 overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/50 to-transparent z-10" />
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute top-4 left-4 z-20">
                      <span className="inline-flex items-center gap-1 bg-orange-600 text-white text-xs font-semibold px-3 py-1 rounded-full">
                        <TrendingUp className="w-3 h-3" />
                        Trend
                      </span>
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-3 text-sm text-gray-500 mb-3">
                      <span className="bg-gradient-to-r from-blue-600 to-purple-600 text-white text-xs font-semibold px-3 py-1 rounded-full">
                        {translateCategory(post.category)}
                      </span>
                      <span>{post.date}</span>
                      <span>•</span>
                      <span>{post.readTime}</span>
                    </div>
                    <h3 className="text-2xl font-bold mb-3 group-hover:text-orange-400 transition-colors">
                      {post.title}
                    </h3>
                    <p className="text-gray-400 mb-4">{post.excerpt}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}

        {/* Featured Posts */}
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-8">
            <Sparkles className="w-6 h-6 text-blue-500" />
            <h2 className="text-3xl font-bold">{t.blog.featuredPosts}</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {featuredPosts.map((post, index) => (
              <Link 
                key={post.slug} 
                href={`/blog/${post.slug}`}
                className="group card overflow-hidden p-0 hover:scale-105 transition-all duration-300"
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent" />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-2 text-sm text-gray-500 mb-3">
                    <span className="text-xs bg-gray-800 text-blue-400 px-3 py-1 rounded-full font-semibold">
                      {translateCategory(post.category)}
                    </span>
                    <span>{post.readTime}</span>
                  </div>
                  <h3 className="text-lg font-bold mb-2 group-hover:text-blue-400 transition-colors line-clamp-2">
                    {post.title}
                  </h3>
                  <p className="text-gray-400 text-sm line-clamp-2">{post.excerpt}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* Categories Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12" id="all-posts">
          <button 
            onClick={() => handleCategoryClick(null)}
            className={`px-6 py-2.5 rounded-full transition-all transform hover:scale-105 font-semibold ${
              selectedCategory === null
                ? 'bg-blue-600 hover:bg-blue-700 text-white'
                : 'bg-gray-800 hover:bg-gray-700 text-gray-300'
            }`}
          >
            {t.blog.all}
          </button>
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => handleCategoryClick(category)}
              className={`px-6 py-2.5 rounded-full transition-all transform hover:scale-105 ${
                selectedCategory === category
                  ? 'bg-blue-600 hover:bg-blue-700 text-white font-semibold'
                  : 'bg-gray-800 hover:bg-gray-700 text-gray-300'
              }`}
            >
              {translateCategory(category)}
            </button>
          ))}
        </div>

        {/* All Blog Posts Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPosts.length > 0 ? (
            filteredPosts.map((post, index) => (
            <Link 
              key={post.slug} 
              href={`/blog/${post.slug}`}
              className="group card overflow-hidden p-0 hover:-translate-y-2 transition-all duration-300"
            >
              {/* Image */}
              <div className="relative h-48 overflow-hidden bg-gray-800">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                {(post as any).trending && (
                  <div className="absolute top-3 right-3">
                    <span className="inline-flex items-center gap-1 bg-orange-600 text-white text-xs font-semibold px-2 py-1 rounded-full">
                      <TrendingUp className="w-3 h-3" />
                      Trend
                    </span>
                  </div>
                )}
              </div>

              <div className="p-6">
                {/* Category Badge */}
                <div className="mb-3">
                  <span className="inline-block bg-gradient-to-r from-blue-600 to-purple-600 text-white text-xs font-semibold px-3 py-1 rounded-full">
                    {translateCategory(post.category)}
                  </span>
                </div>

                {/* Title */}
                <h2 className="text-xl font-bold mb-3 group-hover:text-blue-400 transition-colors line-clamp-2">
                  {post.title}
                </h2>

                {/* Excerpt */}
                <p className="text-gray-400 mb-4 line-clamp-2 text-sm">
                  {post.excerpt}
                </p>

                {/* Meta Info */}
                <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
                  <span className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    {post.date}
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    {post.readTime}
                  </span>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {post.tags.slice(0, 3).map((tag) => (
                    <span
                      key={tag}
                      className="text-xs bg-gray-800 text-gray-300 px-3 py-1 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </Link>
          ))
          ) : (
            <div className="col-span-full text-center py-12">
              <p className="text-gray-400 text-lg">
                {selectedCategory 
                  ? t.blog.noPostsFound
                  : t.blog.noPostsFoundGeneral}
              </p>
            </div>
          )}
      </div>

        {/* Newsletter Section */}
        <div className="mt-20 relative">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 via-purple-600/20 to-pink-600/20 rounded-2xl blur-xl" />
          <div className="relative card text-center max-w-2xl mx-auto border-2 border-blue-500/30">
            <Sparkles className="w-12 h-12 mx-auto mb-4 text-blue-400" />
            <h3 className="text-3xl font-bold mb-4">{t.blog.newsletterTitle}</h3>
            <p className="text-gray-400 mb-6">
              {t.blog.newsletterDesc}
            </p>
            <form className="flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                placeholder={t.blog.newsletterPlaceholder}
                className="flex-1 bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 focus:outline-none focus:border-blue-500 transition-colors"
              />
              <button type="submit" className="btn-primary whitespace-nowrap">
                {t.blog.subscribeButton}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

