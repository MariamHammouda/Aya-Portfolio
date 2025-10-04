"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

export default function ShatabliyArticlesPage() {
  const [sortBy, setSortBy] = useState("newest");

  // Sample articles data for Shatabliy
  const articles = [
    {
      id: 1,
      title: "Startup Growth Strategies: From Idea to Scale",
      description: "Essential strategies for scaling your startup from initial concept to market leadership.",
      excerpt: "Building a successful startup requires more than just a great idea. It demands strategic planning, market understanding, and execution excellence...",
      publishDate: "2024-03-10",
      readTime: "12 min read",
      wordCount: "3,500",
      contentType: "Business Strategy",
      targetAudience: "Entrepreneurs and startup founders",
      seoKeywords: ["startup growth", "business scaling", "entrepreneurship", "startup strategy"],
      tags: ["Startup", "Growth", "Strategy"],
      metaDescription: "Learn proven strategies for scaling your startup from idea to market leadership with actionable insights."
    },
    {
      id: 2,
      title: "Digital Marketing for Small Businesses: A Complete Guide",
      description: "Comprehensive guide to digital marketing strategies that work for small businesses on any budget.",
      excerpt: "Small businesses face unique challenges in the digital marketing landscape. Limited budgets and resources require smart, targeted approaches...",
      publishDate: "2024-02-25",
      readTime: "15 min read",
      wordCount: "4,200",
      contentType: "Marketing Guide",
      targetAudience: "Small business owners and marketers",
      seoKeywords: ["digital marketing", "small business marketing", "online marketing", "marketing strategy"],
      tags: ["Marketing", "Small Business", "Digital"],
      metaDescription: "Complete guide to digital marketing for small businesses with budget-friendly strategies and tactics."
    },
    {
      id: 3,
      title: "E-commerce Trends 2024: What Businesses Need to Know",
      description: "Latest e-commerce trends and technologies shaping the future of online retail.",
      excerpt: "The e-commerce landscape continues to evolve rapidly, with new technologies and consumer behaviors driving significant changes...",
      publishDate: "2024-01-15",
      readTime: "9 min read",
      wordCount: "2,800",
      contentType: "Industry Analysis",
      targetAudience: "E-commerce professionals and business owners",
      seoKeywords: ["e-commerce trends", "online retail", "digital commerce", "retail technology"],
      tags: ["E-commerce", "Trends", "Technology"],
      metaDescription: "Discover the latest e-commerce trends and technologies that will shape online retail in 2024."
    },
    {
      id: 4,
      title: "Building a Strong Brand Identity in the Digital Age",
      description: "How to create and maintain a compelling brand identity that resonates with modern consumers.",
      excerpt: "In today's digital-first world, brand identity extends far beyond logos and color schemes. It encompasses every touchpoint...",
      publishDate: "2023-12-20",
      readTime: "11 min read",
      wordCount: "3,100",
      contentType: "Branding Guide",
      targetAudience: "Marketing professionals and business owners",
      seoKeywords: ["brand identity", "digital branding", "brand strategy", "brand building"],
      tags: ["Branding", "Identity", "Strategy"],
      metaDescription: "Learn how to build a strong brand identity that connects with modern consumers in the digital age."
    }
  ];

  // Sort articles
  const sortedArticles = [...articles].sort((a, b) => {
    if (sortBy === "newest") {
      return new Date(b.publishDate) - new Date(a.publishDate);
    } else if (sortBy === "oldest") {
      return new Date(a.publishDate) - new Date(b.publishDate);
    } else if (sortBy === "readTime") {
      return parseInt(a.readTime) - parseInt(b.readTime);
    }
    return 0;
  });

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <div className="w-full px-[12%] py-10 scroll-mt-20">
      <div className="flex items-center justify-between gap-4 mb-6">
        <h2 className="text-3xl sm:text-4xl font-Ovo">Shatabliy Articles</h2>
        <Link
          href="/articles"
          className="px-4 py-2 border border-gray-300 rounded-full text-sm hover:bg-[var(--color-light-hover)] hover:border-[var(--color-light-hover)] duration-200"
        >
          Back to Categories
        </Link>
      </div>

      {/* Category Header */}
      <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-lg p-6 mb-8">
        <div className="flex items-center gap-6">
          <div className="relative w-24 h-24 rounded-full overflow-hidden bg-white shadow-lg">
            <Image
              src="/images/seo/articles/shatabliy.png"
              alt="Shatabliy"
              fill
              className="object-cover"
            />
          </div>
          <div>
            <h3 className="text-2xl font-semibold text-gray-800 mb-2">Shatabliy</h3>
            <p className="text-gray-600 mb-3">
              Business and entrepreneurship articles covering startup strategies, business development, and industry analysis.
            </p>
            <div className="flex flex-wrap gap-2">
              {["Business Strategy", "Entrepreneurship", "Market Analysis", "Growth Hacking"].map((topic, index) => (
                <span key={index} className="px-3 py-1 rounded-full text-xs font-medium bg-green-100 text-green-700">
                  {topic}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
      
      <p className="text-gray-700 font-Ovo max-w-3xl mb-8">
        Explore business and entrepreneurship articles written for Shatabliy. Each article provides actionable insights for business growth, startup strategies, and market success.
      </p>

      {/* Sort Filter */}
      <div className="flex items-center gap-2 mb-8">
        <span className="text-sm font-medium text-gray-700">Sort by:</span>
        <select
          value={sortBy}
          onChange={(e) => setSortBy(e.target.value)}
          className="px-3 py-1 border border-gray-300 rounded text-sm focus:outline-none focus:border-[#F2308D]"
        >
          <option value="newest">Newest First</option>
          <option value="oldest">Oldest First</option>
          <option value="readTime">Read Time</option>
        </select>
      </div>

      {/* Articles Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {sortedArticles.map((article) => (
          <article
            key={article.id}
            className="border border-gray-300 rounded-lg overflow-hidden hover:shadow-lg hover:-translate-y-1 duration-500 hover:bg-[var(--color-light-hover)] hover:border-[var(--color-light-hover)] group"
          >
            {/* Article Header */}
            <div className="p-6 border-b border-gray-100">
              <div className="flex items-center justify-between mb-3">
                <span className="px-3 py-1 rounded-full text-xs font-medium bg-green-100 text-green-700">
                  Business Content
                </span>
                <div className="flex items-center gap-3 text-xs text-gray-500">
                  <span>{formatDate(article.publishDate)}</span>
                  <span>•</span>
                  <span>{article.readTime}</span>
                </div>
              </div>
              
              <h3 className="text-xl font-semibold text-gray-800 mb-3 group-hover:text-gray-900 leading-tight">
                {article.title}
              </h3>
              
              <p className="text-sm text-gray-600 group-hover:text-gray-700 leading-relaxed">
                {article.description}
              </p>
            </div>

            {/* Article Content Preview */}
            <div className="p-6">
              <div className="mb-4">
                <h4 className="text-sm font-semibold text-gray-700 mb-2">Article Excerpt:</h4>
                <p className="text-sm text-gray-600 leading-relaxed italic">
                  "{article.excerpt}"
                </p>
              </div>

              {/* SEO Information */}
              <div className="mb-4">
                <h4 className="text-sm font-semibold text-gray-700 mb-2">SEO Details:</h4>
                <div className="grid grid-cols-2 gap-4 text-xs text-gray-600">
                  <div>
                    <span className="font-medium">Word Count:</span> {article.wordCount}
                  </div>
                  <div>
                    <span className="font-medium">Content Type:</span> {article.contentType}
                  </div>
                </div>
                <div className="mt-2">
                  <span className="text-xs font-medium text-gray-700">Target Audience:</span>
                  <p className="text-xs text-gray-600">{article.targetAudience}</p>
                </div>
              </div>

              {/* SEO Keywords */}
              <div className="mb-4">
                <h4 className="text-sm font-semibold text-gray-700 mb-2">SEO Keywords:</h4>
                <div className="flex flex-wrap gap-1">
                  {article.seoKeywords.map((keyword, index) => (
                    <span
                      key={index}
                      className="px-2 py-1 rounded text-xs bg-green-100 text-green-700"
                    >
                      {keyword}
                    </span>
                  ))}
                </div>
              </div>

              {/* Tags */}
              <div className="mb-4">
                <div className="flex flex-wrap gap-1">
                  {article.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="px-2 py-1 rounded text-xs bg-gray-100 text-gray-600"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Meta Description */}
              <div className="mb-4 p-3 bg-gray-50 rounded">
                <h4 className="text-xs font-semibold text-gray-700 mb-1">Meta Description:</h4>
                <p className="text-xs text-gray-600 italic">
                  "{article.metaDescription}"
                </p>
              </div>

              <div className="flex items-center justify-between">
                <span className="inline-flex items-center gap-2 text-[#F2308D] font-medium text-sm">
                  Read Full Article
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                  </svg>
                </span>
              </div>
            </div>
          </article>
        ))}
      </div>

      {/* Call to Action */}
      <div className="mt-12 text-center">
        <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-lg p-8">
          <h3 className="text-2xl font-Ovo text-gray-800 mb-4">
            Need Business Content Writing?
          </h3>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            Specialized in creating compelling business content that drives growth and establishes industry authority. 
            Every article is strategically crafted for business success and SEO optimization.
          </p>
          <Link
            href="/#contact"
            className="inline-flex items-center gap-2 px-6 py-3 bg-[#F2308D] text-white rounded-lg hover:bg-[#C1277A] transition-colors duration-200"
          >
            Get Business Articles
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
            </svg>
          </Link>
        </div>
      </div>
    </div>
  );
}
