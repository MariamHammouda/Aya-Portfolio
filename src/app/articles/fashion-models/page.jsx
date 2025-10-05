"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

export default function FashionModelsArticlesPage() {
  const [sortBy, setSortBy] = useState("newest");

  // Fashion Models articles data
  const articles = [
    {
      id: 1,
      title: "Building a Professional Modeling Portfolio: Essential Tips",
      description: "Complete guide to creating a standout modeling portfolio that attracts agencies and clients.",
      excerpt: "A professional modeling portfolio is your most important marketing tool in the fashion industry. It showcases your versatility, professionalism, and unique style...",
      publishDate: "2024-04-18",
      readTime: "12 min read",
      wordCount: "3,200",
      contentType: "Portfolio Guide",
      targetAudience: "Aspiring and professional models",
      seoKeywords: ["modeling portfolio", "fashion photography", "model headshots", "portfolio development"],
      tags: ["Portfolio", "Photography", "Professional Development"],
      metaDescription: "Learn how to build a professional modeling portfolio that stands out. Essential tips for aspiring and established models to showcase their best work."
    },
    {
      id: 2,
      title: "Fashion Industry Insights: Trends and Opportunities in 2024",
      description: "Current trends and emerging opportunities in the fashion modeling industry for 2024.",
      excerpt: "The fashion industry continues to evolve with new trends, technologies, and opportunities for models. Understanding these changes is crucial for career success...",
      publishDate: "2024-04-15",
      readTime: "10 min read",
      wordCount: "2,800",
      contentType: "Industry Analysis",
      targetAudience: "Fashion models and industry professionals",
      seoKeywords: ["fashion trends 2024", "modeling opportunities", "fashion industry", "model career"],
      tags: ["Industry Trends", "Career Development", "Fashion"],
      metaDescription: "Discover the latest fashion industry trends and modeling opportunities for 2024. Stay ahead in your modeling career with expert insights."
    },
    {
      id: 3,
      title: "Brand Collaborations: A Model's Guide to Partnerships",
      description: "How to secure and maintain successful brand collaborations as a fashion model.",
      excerpt: "Brand collaborations are essential for building a successful modeling career. They provide exposure, income, and professional growth opportunities...",
      publishDate: "2024-04-12",
      readTime: "9 min read",
      wordCount: "2,600",
      contentType: "Business Strategy",
      targetAudience: "Professional models and influencers",
      seoKeywords: ["brand collaborations", "model partnerships", "fashion marketing", "influencer marketing"],
      tags: ["Brand Partnerships", "Marketing", "Business"],
      metaDescription: "Master the art of brand collaborations as a fashion model. Learn how to secure partnerships and build lasting relationships with brands."
    },
    {
      id: 4,
      title: "Professional Modeling: From Runway to Editorial",
      description: "Comprehensive guide to different types of professional modeling and how to excel in each.",
      excerpt: "Professional modeling encompasses various specializations, from runway and editorial to commercial and fitness modeling. Each requires specific skills and approaches...",
      publishDate: "2024-04-08",
      readTime: "11 min read",
      wordCount: "3,000",
      contentType: "Career Guide",
      targetAudience: "Professional models and agencies",
      seoKeywords: ["professional modeling", "runway modeling", "editorial modeling", "model types"],
      tags: ["Professional Modeling", "Runway", "Editorial"],
      metaDescription: "Explore different types of professional modeling from runway to editorial. Learn the skills needed to excel in each modeling specialization."
    },
    {
      id: 5,
      title: "Social Media for Models: Building Your Digital Presence",
      description: "Strategic approach to using social media platforms to build and maintain a strong modeling career.",
      excerpt: "Social media has become an essential tool for models to showcase their work, connect with clients, and build their personal brand...",
      publishDate: "2024-04-05",
      readTime: "8 min read",
      wordCount: "2,400",
      contentType: "Digital Marketing",
      targetAudience: "Models and content creators",
      seoKeywords: ["model social media", "Instagram for models", "digital presence", "model branding"],
      tags: ["Social Media", "Digital Marketing", "Personal Branding"],
      metaDescription: "Learn how to leverage social media to build your modeling career. Essential strategies for creating a strong digital presence as a model."
    },
    {
      id: 6,
      title: "Fashion Photography: Working with Photographers and Stylists",
      description: "Guide to collaborating effectively with fashion photographers and stylists for the best results.",
      excerpt: "Successful fashion shoots require seamless collaboration between models, photographers, and stylists. Understanding each role enhances the creative process...",
      publishDate: "2024-04-02",
      readTime: "10 min read",
      wordCount: "2,700",
      contentType: "Collaboration Guide",
      targetAudience: "Models, photographers, and stylists",
      seoKeywords: ["fashion photography", "model photographer collaboration", "fashion styling", "creative teamwork"],
      tags: ["Photography", "Collaboration", "Creative Process"],
      metaDescription: "Master the art of collaborating with fashion photographers and stylists. Essential tips for successful fashion shoots and creative partnerships."
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
        <h2 className="text-3xl sm:text-4xl font-Ovo">Fashion Models Articles</h2>
        <Link
          href="/articles"
          className="px-4 py-2 border border-gray-300 rounded-full text-sm hover:bg-[var(--color-light-hover)] hover:border-[var(--color-light-hover)] duration-200"
        >
          Back to Categories
        </Link>
      </div>

      {/* Category Header */}
      <div className="bg-gradient-to-r from-pink-50 to-rose-50 rounded-lg p-6 mb-8">
        <div className="flex items-center gap-6">
          <div className="relative w-24 h-24 rounded-full overflow-hidden bg-white shadow-lg">
            <Image
              src="/images/seo/articles/models.png"
              alt="Fashion Models"
              fill
              className="object-cover"
            />
          </div>
          <div>
            <h3 className="text-2xl font-semibold text-gray-800 mb-2">Fashion Models</h3>
            <p className="text-gray-600 mb-3">
              Fashion and modeling industry articles covering portfolio development, industry insights, brand collaborations, and professional modeling guidance.
            </p>
            <div className="flex flex-wrap gap-2">
              {["Portfolio Development", "Industry Insights", "Brand Collaborations", "Professional Modeling"].map((topic, index) => (
                <span key={index} className="px-3 py-1 rounded-full text-xs font-medium bg-pink-100 text-pink-700">
                  {topic}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
      
      <p className="text-gray-700 font-Ovo max-w-3xl mb-8">
        Explore fashion and modeling industry articles written for Fashion Models. Each article provides insights into portfolio development, industry trends, brand collaborations, and professional modeling techniques that help models build successful careers.
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
                <span className="px-3 py-1 rounded-full text-xs font-medium bg-pink-100 text-pink-700">
                  {article.contentType || "Fashion Content"}
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
        <div className="bg-gradient-to-r from-pink-50 to-rose-50 rounded-lg p-8">
          <h3 className="text-2xl font-Ovo text-gray-800 mb-4">
            Need Fashion & Modeling Content Writing?
          </h3>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            Specialized in creating engaging fashion and modeling content that inspires and educates industry professionals. 
            Every article is crafted for models, agencies, and fashion enthusiasts, optimized for search visibility.
          </p>
          <Link
            href="/#contact"
            className="inline-flex items-center gap-2 px-6 py-3 bg-[#F2308D] text-white rounded-lg hover:bg-[#C1277A] transition-colors duration-200"
          >
            Get Fashion Articles
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
            </svg>
          </Link>
        </div>
      </div>
    </div>
  );
}
