'use client'

import Link from 'next/link'
import { Code2, Newspaper, Briefcase, ArrowRight, Github, Linkedin, Mail } from 'lucide-react'
import { InfiniteTypewriter } from '@/components/InfiniteTypewriter'
import { TechBackground } from '@/components/TechBackground'
import { useLanguage } from '@/contexts/LanguageContext'

export default function Home() {
  const { t } = useLanguage()
  return (
    <div className="animate-fade-in">
      {/* Hero Section */}
      <section className="container-custom py-20 md:py-32 relative overflow-hidden">
        {/* Tech Background Animation */}
        <TechBackground />
        
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h1 className="text-4xl md:text-6xl font-bold mb-8 text-gray-300 min-h-[80px] flex items-center justify-center">
            <InfiniteTypewriter />
          </h1>
          
          <p className="text-base md:text-lg text-gray-300 font-mono leading-relaxed max-w-3xl mx-auto mb-12 px-4 animate-fade-in-up" style={{fontFamily: 'var(--font-space-mono)', animationDelay: '0.3s'}}>
            {t.home.subtitle}
          </p>
          
          {/* Social Links */}
          <div className="flex justify-center gap-4 mb-12 animate-slide-up" style={{animationDelay: '0.3s'}}>
            <a 
              href="https://github.com/Canerdde" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-gray-900 p-4 rounded-full hover:bg-gray-800 transition-all transform hover:scale-110"
            >
              <Github className="w-6 h-6" />
            </a>
            <a 
              href="https://www.linkedin.com/in/caner-dedeo%C4%9Flu-b7228a307/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-gray-900 p-4 rounded-full hover:bg-gray-800 transition-all transform hover:scale-110"
            >
              <Linkedin className="w-6 h-6" />
            </a>
            <a 
              href="mailto:caneerdedeoglu@gmail.com"
              className="bg-gray-900 p-4 rounded-full hover:bg-gray-800 transition-all transform hover:scale-110"
            >
              <Mail className="w-6 h-6" />
            </a>
          </div>
          
          <div className="flex flex-wrap justify-center gap-4 animate-slide-up" style={{animationDelay: '0.4s'}}>
            <Link href="/blog" className="btn-primary">
              {t.home.blogButton}
            </Link>
            <Link href="/projects" className="btn-secondary">
              {t.home.projectsButton}
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-gray-900/50 py-20">
        <div className="container-custom">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
            {t.home.whatIDo}
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {/* Blog */}
            <Link href="/blog" className="card group">
              <div className="bg-gradient-to-br from-blue-600 to-blue-800 w-14 h-14 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <Newspaper className="w-7 h-7" />
              </div>
              <h3 className="text-2xl font-bold mb-3">{t.home.blogTitle}</h3>
              <p className="text-gray-400 mb-4">
                {t.home.blogDesc}
              </p>
              <div className="flex items-center text-blue-400 group-hover:translate-x-2 transition-transform">
                {t.home.blogCTA} <ArrowRight className="ml-2 w-4 h-4" />
              </div>
            </Link>

            {/* Projects */}
            <Link href="/projects" className="card group">
              <div className="bg-gradient-to-br from-purple-600 to-purple-800 w-14 h-14 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <Briefcase className="w-7 h-7" />
              </div>
              <h3 className="text-2xl font-bold mb-3">{t.home.projectsTitle}</h3>
              <p className="text-gray-400 mb-4">
                {t.home.projectsDesc}
              </p>
              <div className="flex items-center text-purple-400 group-hover:translate-x-2 transition-transform">
                {t.home.projectsCTA} <ArrowRight className="ml-2 w-4 h-4" />
              </div>
            </Link>

            {/* Code */}
            <Link href="/about" className="card group">
              <div className="bg-gradient-to-br from-pink-600 to-pink-800 w-14 h-14 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <Mail className="w-7 h-7" />
              </div>
              <h3 className="text-2xl font-bold mb-3">{t.home.contactTitle}</h3>
              <p className="text-gray-400 mb-4">
                {t.home.contactDesc}
              </p>
              <div className="flex items-center text-pink-400 group-hover:translate-x-2 transition-transform">
                {t.home.contactCTA} <ArrowRight className="ml-2 w-4 h-4" />
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Latest Posts Preview */}
      <section className="container-custom py-20">
        <div className="flex justify-between items-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold">{t.home.latestPosts}</h2>
          <Link href="/blog" className="text-blue-400 hover:text-blue-300 flex items-center">
            {t.home.viewAll} <ArrowRight className="ml-2 w-4 h-4" />
          </Link>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Sample Blog Posts */}
          {t.home.samplePosts.map((post, index) => (
            <Link key={index} href={`/blog/${post.slug}`} className="card group">
              <div className="flex items-center gap-2 text-sm text-gray-500 mb-3">
                <span>{post.date}</span>
                <span>•</span>
                <span>{post.readTime}</span>
              </div>
              <h3 className="text-xl font-bold mb-2 group-hover:text-blue-400 transition-colors">
                {post.title}
              </h3>
              <p className="text-gray-400 mb-4">{post.excerpt}</p>
              <div className="flex flex-wrap gap-2">
                {post.tags.map((tag, i) => (
                  <span key={i} className="text-xs bg-gray-800 text-gray-300 px-3 py-1 rounded-full">
                    {tag}
                  </span>
                ))}
              </div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  )
}

