"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

export default function DotDesignArticlesPage() {
  const [sortBy, setSortBy] = useState("newest");

  // Sample articles data for Dot Design
  const articles = [
    {
      id: 1,
      title: "Design Trends 2024: What's Shaping the Creative Industry",
      description: "Explore the latest design trends that are defining the creative landscape in 2024.",
      excerpt: "The design world is constantly evolving, with new trends emerging that reflect changing user preferences and technological advances...",
      publishDate: "2024-03-08",
      readTime: "10 min read",
      wordCount: "3,000",
      contentType: "Design Trends",
      targetAudience: "Designers and creative professionals",
      seoKeywords: ["design trends 2024", "graphic design", "creative industry", "design innovation"],
      tags: ["Design", "Trends", "Innovation"],
      metaDescription: "Discover the top design trends of 2024 that are shaping the creative industry and inspiring designers worldwide."
    },
    {
      id: 2,
      title: "The Psychology of Color in Brand Design",
      description: "Understanding how color psychology influences brand perception and consumer behavior.",
      excerpt: "Color is one of the most powerful tools in a designer's arsenal, capable of evoking emotions and influencing decisions...",
      publishDate: "2024-02-22",
      readTime: "8 min read",
      wordCount: "2,400",
      contentType: "Design Psychology",
      targetAudience: "Brand designers and marketers",
      seoKeywords: ["color psychology", "brand design", "visual identity", "design theory"],
      tags: ["Psychology", "Branding", "Color"],
      metaDescription: "Learn how color psychology impacts brand design and consumer behavior in this comprehensive guide."
    },
    {
      id: 3,
      title: "Minimalist Design: Less is More in Digital Interfaces",
      description: "The principles and benefits of minimalist design in creating effective digital experiences.",
      excerpt: "Minimalist design has become a dominant force in digital interface design, emphasizing clarity and functionality...",
      publishDate: "2024-01-18",
      readTime: "7 min read",
      wordCount: "2,100",
      contentType: "UI/UX Design",
      targetAudience: "UI/UX designers and developers",
      seoKeywords: ["minimalist design", "UI design", "user experience", "interface design"],
      tags: ["Minimalism", "UI/UX", "Digital"],
      metaDescription: "Explore the principles of minimalist design and how it creates better digital user experiences."
    },
    {
      id: 4,
      title: "Typography in Web Design: Choosing the Right Fonts",
      description: "A comprehensive guide to selecting and implementing typography for web design projects.",
      excerpt: "Typography plays a crucial role in web design, affecting readability, user experience, and brand perception...",
      publishDate: "2023-12-15",
      readTime: "12 min read",
      wordCount: "3,600",
      contentType: "Typography Guide",
      targetAudience: "Web designers and developers",
      seoKeywords: ["web typography", "font selection", "web design", "typography guide"],
      tags: ["Typography", "Web Design", "Fonts"],
      metaDescription: "Master web typography with this comprehensive guide to choosing and implementing fonts for better design."
    },
    {
      id: 5,
      title: "Sustainable Design: Creating Eco-Friendly Visual Solutions",
      description: "How designers can contribute to sustainability through environmentally conscious design practices.",
      excerpt: "As environmental awareness grows, designers have a responsibility to consider the ecological impact of their work...",
      publishDate: "2023-11-28",
      readTime: "9 min read",
      wordCount: "2,700",
      contentType: "Sustainable Design",
      targetAudience: "Designers and creative professionals",
      seoKeywords: ["sustainable design", "eco-friendly design", "green design", "environmental design"],
      tags: ["Sustainability", "Environment", "Ethics"],
      metaDescription: "Learn how to create sustainable, eco-friendly designs that minimize environmental impact while maximizing visual impact."
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
        <h2 className="text-3xl sm:text-4xl font-Ovo">Dot Design Articles</h2>
        <Link
          href="/articles"
          className="px-4 py-2 border border-gray-300 rounded-full text-sm hover:bg-[var(--color-light-hover)] hover:border-[var(--color-light-hover)] duration-200"
        >
          Back to Categories
        </Link>
      </div>

      {/* Category Header */}
      <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-lg p-6 mb-8">
        <div className="flex items-center gap-6">
          <div className="relative w-24 h-24 rounded-full overflow-hidden bg-white shadow-lg">
            <Image
              src="/images/seo/articles/dotdesign.png"
              alt="Dot Design"
              fill
              className="object-cover"
            />
          </div>
          <div>
            <h3 className="text-2xl font-semibold text-gray-800 mb-2">Dot Design</h3>
            <p className="text-gray-600 mb-3">
              Design and creative industry articles focusing on design trends, creative processes, and digital innovation.
            </p>
            <div className="flex flex-wrap gap-2">
              {["Design Trends", "Creative Process", "Digital Innovation", "Brand Identity"].map((topic, index) => (
                <span key={index} className="px-3 py-1 rounded-full text-xs font-medium bg-purple-100 text-purple-700">
                  {topic}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
      
      <p className="text-gray-700 font-Ovo max-w-3xl mb-8">
        Explore design and creative industry articles written for Dot Design. Each article provides insights into design trends, creative processes, and innovative approaches to visual communication.
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
                <span className="px-3 py-1 rounded-full text-xs font-medium bg-purple-100 text-purple-700">
                  Design Content
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
        <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-lg p-8">
          <h3 className="text-2xl font-Ovo text-gray-800 mb-4">
            Need Design Content Writing?
          </h3>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            Specialized in creating engaging design content that inspires creativity and establishes design authority. 
            Every article is crafted for design professionals and optimized for search visibility.
          </p>
          <Link
            href="/#contact"
            className="inline-flex items-center gap-2 px-6 py-3 bg-[#F2308D] text-white rounded-lg hover:bg-[#C1277A] transition-colors duration-200"
          >
            Get Design Articles
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
            </svg>
          </Link>
        </div>
      </div>
    </div>
  );
}
