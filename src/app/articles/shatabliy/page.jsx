"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

export default function ShatabliyArticlesPage() {
  const [sortBy, setSortBy] = useState("newest");

  // Real articles data for Shatabliy
  const articles = [
    {
      id: 1,
      title: "الفرق بين أرضيات الباركيه والسيراميك",
      titleEn: "The Difference Between Parquet and Ceramic Flooring",
      description: "مقارنة شاملة بين أرضيات الباركيه والسيراميك لمساعدتك في اختيار الأنسب لمنزلك.",
      excerpt: "عند تجديد المنزل أو بناء منزل جديد، يواجه الكثيرون حيرة في اختيار نوع الأرضيات المناسبة...",
      publishDate: "2024-03-15",
      readTime: "8 min read",
      wordCount: "2,400",
      contentType: "Home Improvement Guide",
      targetAudience: "أصحاب المنازل والمهتمين بالديكور",
      seoKeywords: ["أرضيات الباركيه", "أرضيات السيراميك", "مقارنة الأرضيات", "ديكور المنزل"],
      tags: ["Flooring", "Home Decor", "Interior Design"],
      metaDescription: "دليل شامل للمقارنة بين أرضيات الباركيه والسيراميك ومساعدتك في الاختيار الأمثل.",
      articleUrl: "https://shatabliy.com/%d8%a7%d9%84%d9%81%d8%b1%d9%82-%d8%a8%d9%8a%d9%86-%d8%a7%d8%b1%d8%b6%d9%8a%d8%a7%d8%aa-%d8%a7%d9%84%d8%a8%d8%a7%d8%b1%d9%83%d9%8a%d9%87-%d9%88-%d8%a7%d9%84%d8%b3%d9%8a%d8%b1%d8%a7%d9%85%d9%8a%d9%83/"
    },
    {
      id: 2,
      title: "مزايا أرضيات الباركيه",
      titleEn: "Advantages of Parquet Flooring",
      description: "تعرف على المزايا المتعددة لأرضيات الباركيه وسبب كونها خياراً مفضلاً للكثيرين.",
      excerpt: "أرضيات الباركيه تعتبر من أكثر أنواع الأرضيات أناقة وجمالاً، وتتميز بالعديد من المزايا...",
      publishDate: "2024-03-12",
      readTime: "6 min read",
      wordCount: "1,800",
      contentType: "Flooring Guide",
      targetAudience: "المهتمين بأرضيات الباركيه وأصحاب المنازل",
      seoKeywords: ["مزايا الباركيه", "أرضيات خشبية", "ديكور منزلي", "أرضيات فاخرة"],
      tags: ["Parquet", "Wood Flooring", "Home Design"],
      metaDescription: "اكتشف مزايا أرضيات الباركيه المتعددة وسبب كونها الخيار الأمثل للمنازل العصرية.",
      articleUrl: "https://shatabliy.com/%d9%85%d8%b2%d8%a7%d9%8a%d8%a7-%d8%a3%d8%b1%d8%b6%d9%8a%d8%a7%d8%aa-%d8%a7%d9%84%d8%a8%d8%a7%d8%b1%d9%83%d9%8a%d9%87/"
    },
    {
      id: 3,
      title: "أفضل أرضيات المطابخ",
      titleEn: "Best Kitchen Flooring Options",
      description: "دليل شامل لاختيار أفضل أنواع الأرضيات للمطابخ مع مراعاة المتانة والعملية.",
      excerpt: "المطبخ من أكثر الأماكن استخداماً في المنزل، لذلك يحتاج إلى أرضيات متينة وعملية...",
      publishDate: "2024-03-08",
      readTime: "7 min read",
      wordCount: "2,100",
      contentType: "Kitchen Design",
      targetAudience: "أصحاب المنازل ومصممي المطابخ",
      seoKeywords: ["أرضيات المطابخ", "ديكور المطبخ", "أرضيات مقاومة للماء", "تصميم المطابخ"],
      tags: ["Kitchen", "Flooring", "Interior Design"],
      metaDescription: "اختر أفضل أرضيات للمطبخ مع دليلنا الشامل للأنواع المتينة والعملية.",
      articleUrl: "https://shatabliy.com/%d8%a3%d9%81%d8%b6%d9%84-%d8%a3%d8%b1%d8%b6%d9%8a%d8%a7%d8%aa-%d8%a7%d9%84%d9%85%d8%b7%d8%a7%d8%a8%d8%ae/"
    },
    {
      id: 4,
      title: "أفضل أنواع الأرضيات للمنزل",
      titleEn: "Best Types of Home Flooring",
      description: "دليل شامل لأفضل أنواع الأرضيات المنزلية مع مقارنة المزايا والعيوب لكل نوع.",
      excerpt: "اختيار الأرضيات المناسبة للمنزل قرار مهم يؤثر على الجمالية والوظائف العملية...",
      publishDate: "2024-03-05",
      readTime: "10 min read",
      wordCount: "3,000",
      contentType: "Home Design Guide",
      targetAudience: "أصحاب المنازل والمقاولين",
      seoKeywords: ["أفضل أرضيات منزلية", "أنواع الأرضيات", "ديكور المنزل", "تجديد المنزل"],
      tags: ["Home Flooring", "Interior Design", "Home Renovation"],
      metaDescription: "دليل شامل لأفضل أنواع الأرضيات المنزلية مع مقارنة تفصيلية لمساعدتك في الاختيار.",
      articleUrl: "https://shatabliy.com/%d8%a3%d9%81%d8%b6%d9%84-%d8%a3%d9%86%d9%88%d8%a7%d8%b9-%d8%a7%d9%84%d8%a3%d8%b1%d8%b6%d9%8a%d8%a7%d8%aa-%d9%84%d9%84%d9%85%d9%86%d8%b2%d9%84/"
    },
    {
      id: 5,
      title: "كيف تختار مقاول التشطيبات؟",
      titleEn: "How to Choose a Finishing Contractor?",
      description: "نصائح مهمة لاختيار مقاول التشطيبات المناسب لضمان جودة العمل وإنجازه في الوقت المحدد.",
      excerpt: "اختيار مقاول التشطيبات المناسب خطوة حاسمة في نجاح مشروع تجديد أو بناء المنزل...",
      publishDate: "2024-03-02",
      readTime: "9 min read",
      wordCount: "2,700",
      contentType: "Construction Guide",
      targetAudience: "أصحاب المنازل والمقاولين",
      seoKeywords: ["مقاول تشطيبات", "اختيار المقاول", "تشطيبات المنازل", "مقاولات البناء"],
      tags: ["Construction", "Contractors", "Home Renovation"],
      metaDescription: "تعلم كيفية اختيار مقاول التشطيبات المناسب مع نصائح عملية لضمان جودة العمل.",
      articleUrl: "https://shatabliy.com/%d9%83%d9%8a%d9%81-%d8%aa%d8%ae%d8%aa%d8%a7%d8%b1-%d9%85%d9%82%d8%a7%d9%88%d9%84-%d8%a7%d9%84%d8%aa%d8%b4%d8%b7%d9%8a%d8%a8%d8%a7%d8%aa%d8%9f/"
    },
    {
      id: 6,
      title: "أرخص أنواع الأرضيات",
      titleEn: "Cheapest Types of Flooring",
      description: "دليل للأرضيات الاقتصادية التي تجمع بين الجودة والسعر المناسب لميزانيتك.",
      excerpt: "ليس من الضروري أن تكون الأرضيات الجيدة باهظة الثمن، هناك خيارات اقتصادية ممتازة...",
      publishDate: "2024-02-28",
      readTime: "6 min read",
      wordCount: "1,900",
      contentType: "Budget Guide",
      targetAudience: "أصحاب الميزانيات المحدودة",
      seoKeywords: ["أرضيات رخيصة", "أرضيات اقتصادية", "ميزانية محدودة", "أرضيات بأسعار مناسبة"],
      tags: ["Budget Flooring", "Affordable Options", "Cost-Effective"],
      metaDescription: "اكتشف أرخص أنواع الأرضيات عالية الجودة التي تناسب ميزانيتك المحدودة.",
      articleUrl: "https://shatabliy.com/%d8%a3%d8%b1%d8%ae%d8%b5-%d8%a3%d9%86%d9%88%d8%a7%d8%b9-%d8%a7%d9%84%d8%a3%d8%b1%d8%b6%d9%8a%d8%a7%d8%aa/"
    },
    {
      id: 7,
      title: "أفضل أنواع رخام الأرضيات",
      titleEn: "Best Types of Marble Flooring",
      description: "دليل شامل لأفضل أنواع رخام الأرضيات مع مقارنة الأسعار والجودة والمتانة.",
      excerpt: "الرخام من أفخر أنواع الأرضيات وأكثرها جمالاً، ولكن اختيار النوع المناسب يتطلب معرفة...",
      publishDate: "2024-02-25",
      readTime: "8 min read",
      wordCount: "2,500",
      contentType: "Luxury Flooring",
      targetAudience: "المهتمين بالأرضيات الفاخرة",
      seoKeywords: ["رخام الأرضيات", "أنواع الرخام", "أرضيات فاخرة", "رخام طبيعي"],
      tags: ["Marble", "Luxury Flooring", "Natural Stone"],
      metaDescription: "تعرف على أفضل أنواع رخام الأرضيات واختر الأنسب لمنزلك من حيث الجودة والسعر.",
      articleUrl: "https://shatabliy.com/%d8%a3%d9%81%d8%b6%d9%84-%d8%a3%d9%86%d9%88%d8%a7%d8%b9-%d8%b1%d8%ae%d8%a7%d9%85-%d8%a7%d9%84%d8%a3%d8%b1%d8%b6%d9%8a%d8%a7%d8%aa/"
    },
    {
      id: 8,
      title: "أفضل أنواع سيراميك الأرضيات",
      titleEn: "Best Types of Ceramic Flooring",
      description: "دليل تفصيلي لأفضل أنواع سيراميك الأرضيات مع نصائح الاختيار والتركيب.",
      excerpt: "السيراميك من أكثر أنواع الأرضيات شيوعاً واستخداماً لمزاياه المتعددة وسهولة صيانته...",
      publishDate: "2024-02-22",
      readTime: "7 min read",
      wordCount: "2,200",
      contentType: "Ceramic Guide",
      targetAudience: "أصحاب المنازل والمقاولين",
      seoKeywords: ["سيراميك الأرضيات", "أنواع السيراميك", "بلاط السيراميك", "أرضيات سيراميك"],
      tags: ["Ceramic", "Tiles", "Flooring Options"],
      metaDescription: "اختر أفضل أنواع سيراميك الأرضيات مع دليلنا الشامل للأنواع والمزايا.",
      articleUrl: "https://shatabliy.com/%d8%a3%d9%81%d8%b6%d9%84-%d8%a3%d9%86%d9%88%d8%a7%d8%b9-%d8%b3%d9%8a%d8%b1%d8%a7%d9%85%d9%8a%d9%83-%d8%a7%d9%84%d8%a3%d8%b1%d8%b6%d9%8a%d8%a7%d8%aa/"
    },
    {
      id: 9,
      title: "فن المقاول في التشطيبات",
      titleEn: "The Art of Contracting in Finishing",
      description: "نظرة عميقة على فن وحرفية المقاولين في التشطيبات وأسرار الجودة العالية.",
      excerpt: "التشطيبات ليست مجرد عمل تقني، بل فن يتطلب خبرة ومهارة وذوق رفيع...",
      publishDate: "2024-02-18",
      readTime: "10 min read",
      wordCount: "3,100",
      contentType: "Professional Insight",
      targetAudience: "المقاولين والمهتمين بالتشطيبات",
      seoKeywords: ["فن التشطيبات", "حرفية المقاولين", "جودة التشطيبات", "مهارات البناء"],
      tags: ["Craftsmanship", "Professional Skills", "Quality Work"],
      metaDescription: "تعرف على فن المقاول في التشطيبات وأسرار تحقيق الجودة العالية في العمل.",
      articleUrl: "https://shatabliy.com/%d9%81%d9%86-%d8%a7%d9%84%d9%85%d9%82%d8%a7%d9%88%d9%84-%d9%81%d9%8a-%d8%a7%d9%84%d8%aa%d8%b4%d8%b7%d9%8a%d8%a8%d8%a7%d8%aa/"
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
          <a
            key={article.id}
            href={article.articleUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="block border border-gray-300 rounded-lg overflow-hidden hover:shadow-lg hover:-translate-y-1 duration-500 hover:bg-[var(--color-light-hover)] hover:border-[var(--color-light-hover)] group"
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
          </a>
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
