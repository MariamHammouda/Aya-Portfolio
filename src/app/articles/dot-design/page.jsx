"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

export default function DotDesignArticlesPage() {
  const [sortBy, setSortBy] = useState("newest");

  // Dot Design (chatbot) articles data
  const articles = [
    {
      id: 1,
      title: "ثورة التواصل في التجارة الإلكترونية",
      description: "كيف تحدث تقنيات التواصل الحديثة ثورة في مجال التجارة الإلكترونية وتحسن تجربة العملاء.",
      excerpt: "التجارة الإلكترونية تشهد تطوراً مستمراً في طرق التواصل مع العملاء، من الشات بوت إلى الذكاء الاصطناعي...",
      publishDate: "2024-04-15",
      readTime: "8 min read",
      wordCount: "2,800",
      contentType: "E-commerce Technology",
      targetAudience: "E-commerce business owners and developers",
      seoKeywords: ["التجارة الإلكترونية", "تقنيات التواصل", "خدمة العملاء", "الشات بوت"],
      tags: ["E-commerce", "Communication", "Technology"],
      metaDescription: "اكتشف كيف تحدث تقنيات التواصل الحديثة ثورة في التجارة الإلكترونية وتحسن تجربة العملاء.",
      articleUrl: "https://bot.dotdesign.me/%d8%ab%d9%88%d8%b1%d8%a9-%d8%a7%d9%84%d8%aa%d9%88%d8%a7%d8%b5%d9%84-%d9%81%d9%8a-%d8%a7%d9%84%d8%aa%d8%ac%d8%a7%d8%b1%d8%a9-%d8%a7%d9%84%d8%a5%d9%84%d9%83%d8%aa%d8%b1%d9%88%d9%86%d9%8a%d8%a9/"
    },
    {
      id: 2,
      title: "التقنيات والأدوات الشائعة المستخدمة",
      description: "دليل شامل للتقنيات والأدوات الحديثة المستخدمة في تطوير الحلول الرقمية والشات بوت.",
      excerpt: "في عالم التكنولوجيا المتطور، تتنوع الأدوات والتقنيات المستخدمة في تطوير الحلول الذكية...",
      publishDate: "2024-04-10",
      readTime: "12 min read",
      wordCount: "3,200",
      contentType: "Technology Guide",
      targetAudience: "Developers and tech professionals",
      seoKeywords: ["تقنيات البرمجة", "أدوات التطوير", "الشات بوت", "التكنولوجيا"],
      tags: ["Technology", "Development", "Tools"],
      metaDescription: "تعرف على أحدث التقنيات والأدوات المستخدمة في تطوير الحلول الرقمية والشات بوت.",
      articleUrl: "https://bot.dotdesign.me/%d8%a7%d9%84%d8%aa%d9%82%d9%86%d9%8a%d8%a7%d8%aa-%d9%88%d8%a7%d9%84%d8%a3%d8%af%d9%88%d8%a7%d8%aa-%d8%a7%d9%84%d8%b4%d8%a7%d8%a6%d8%b9%d8%a9-%d8%a7%d9%84%d9%85%d8%b3%d8%aa%d8%ae%d8%af%d9%85%d8%a9/"
    },
    {
      id: 3,
      title: "الشات بوت والمبيعات الذكية",
      description: "كيف يمكن للشات بوت أن يحدث نقلة نوعية في استراتيجيات المبيعات والتسويق الرقمي.",
      excerpt: "الشات بوت أصبح أداة أساسية في عالم المبيعات الحديثة، حيث يوفر تفاعلاً فورياً مع العملاء...",
      publishDate: "2024-04-05",
      readTime: "10 min read",
      wordCount: "2,900",
      contentType: "Sales Technology",
      targetAudience: "Sales professionals and marketers",
      seoKeywords: ["الشات بوت", "المبيعات الذكية", "التسويق الرقمي", "خدمة العملاء"],
      tags: ["Chatbot", "Sales", "Marketing"],
      metaDescription: "اكتشف كيف يمكن للشات بوت أن يحسن استراتيجيات المبيعات ويزيد من كفاءة التسويق الرقمي.",
      articleUrl: "https://bot.dotdesign.me/%d8%a7%d9%84%d8%b4%d8%a7%d8%aa-%d8%a8%d9%88%d8%aa-%d9%88%d8%a7%d9%84%d9%85%d8%a8%d9%8a%d8%b9%d8%a7%d8%aa-%d8%a7%d9%84%d8%b0%d9%83%d9%8a%d8%a9/"
    },
    {
      id: 4,
      title: "تجربة العملاء في التجارة إلى الأمام",
      description: "استراتيجيات متقدمة لتحسين تجربة العملاء وزيادة رضاهم في البيئة التجارية الرقمية.",
      excerpt: "تجربة العملاء هي محور نجاح أي عمل تجاري في العصر الرقمي، وتتطلب استراتيجيات مبتكرة...",
      publishDate: "2024-03-28",
      readTime: "9 min read",
      wordCount: "2,600",
      contentType: "Customer Experience",
      targetAudience: "Business owners and customer service managers",
      seoKeywords: ["تجربة العملاء", "رضا العملاء", "التجارة الرقمية", "خدمة العملاء"],
      tags: ["Customer Experience", "Business", "Digital"],
      metaDescription: "تعلم كيفية تحسين تجربة العملاء وزيادة رضاهم من خلال استراتيجيات مبتكرة في التجارة الرقمية.",
      articleUrl: "https://bot.dotdesign.me/%d8%aa%d8%ac%d8%b1%d8%a8%d8%a9-%d8%a7%d9%84%d8%b9%d9%85%d9%84%d8%a7%d8%a1-%d9%81%d9%8a-%d8%a7%d9%84%d8%aa%d8%ac%d8%a7%d8%b1%d8%a9-%d8%a5%d9%84%d9%89-%d8%a7%d9%84%d8%a3%d9%85%d8%a7%d9%85/"
    },
    {
      id: 5,
      title: "تحسين خدماتك الأعمالية",
      description: "دليل شامل لتطوير وتحسين الخدمات التجارية باستخدام التقنيات الحديثة والحلول الذكية.",
      excerpt: "تحسين الخدمات التجارية يتطلب فهماً عميقاً لاحتياجات العملاء واستخدام التقنيات المناسبة...",
      publishDate: "2024-03-20",
      readTime: "11 min read",
      wordCount: "3,100",
      contentType: "Business Improvement",
      targetAudience: "Business owners and service providers",
      seoKeywords: ["تحسين الخدمات", "الأعمال التجارية", "التطوير", "الحلول الذكية"],
      tags: ["Business", "Services", "Improvement"],
      metaDescription: "اكتشف كيفية تطوير وتحسين خدماتك التجارية باستخدام أحدث التقنيات والحلول الذكية.",
      articleUrl: "https://bot.dotdesign.me/%d8%aa%d8%ad%d8%b3%d9%8a%d9%86-%d8%ae%d8%af%d9%85%d8%a7%d8%aa%d9%83-%d8%a7%d9%84%d8%a3%d8%b9%d9%85%d8%a7%d9%84%d9%8a%d8%a9/"
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
        <h2 className="text-3xl sm:text-4xl font-Ovo">Dot Design (chatbot) Articles</h2>
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
            <h3 className="text-2xl font-semibold text-gray-800 mb-2">Dot Design (chatbot)</h3>
            <p className="text-gray-600 mb-3">
              Chatbot and digital innovation articles focusing on e-commerce technology, customer experience, and smart business solutions.
            </p>
            <div className="flex flex-wrap gap-2">
              {["Chatbot Technology", "E-commerce", "Customer Experience", "Digital Innovation", "Smart Solutions"].map((topic, index) => (
                <span key={index} className="px-3 py-1 rounded-full text-xs font-medium bg-purple-100 text-purple-700">
                  {topic}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
      
      <p className="text-gray-700 font-Ovo max-w-3xl mb-8">
        Explore chatbot and digital innovation articles written for Dot Design. Each article provides insights into e-commerce technology, customer experience optimization, and smart business solutions using chatbot technology.
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
            className="border border-gray-300 rounded-lg overflow-hidden hover:shadow-lg hover:-translate-y-1 duration-500 hover:bg-[var(--color-light-hover)] hover:border-[var(--color-light-hover)] group cursor-pointer"
            onClick={() => article.articleUrl && window.open(article.articleUrl, '_blank', 'noopener,noreferrer')}
          >
            {/* Article Header */}
            <div className="p-6 border-b border-gray-100">
              <div className="flex items-center justify-between mb-3">
                <span className="px-3 py-1 rounded-full text-xs font-medium bg-purple-100 text-purple-700">
                  {article.contentType || "Design Content"}
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
                  {article.articleUrl ? "Read on Dot Design" : "Read Full Article"}
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    {article.articleUrl ? (
                      <path d="M14 3v2h3.59l-9.83 9.83 1.41 1.41L19 6.41V10h2V3m-2 16H5V5h7V3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7h-2v7z"/>
                    ) : (
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                    )}
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
            Need Chatbot & E-commerce Content Writing?
          </h3>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            Specialized in creating engaging chatbot and e-commerce content that drives customer engagement and business growth. 
            Every article is crafted for technology professionals and optimized for search visibility.
          </p>
          <Link
            href="/#contact"
            className="inline-flex items-center gap-2 px-6 py-3 bg-[#F2308D] text-white rounded-lg hover:bg-[#C1277A] transition-colors duration-200"
          >
            Get Chatbot Articles
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
            </svg>
          </Link>
        </div>
      </div>
    </div>
  );
}
