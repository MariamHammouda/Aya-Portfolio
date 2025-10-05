"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

export default function DesignStudioArticlesPage() {
  const [sortBy, setSortBy] = useState("newest");

  // Design Studio articles data
  const articles = [
    {
      id: 1,
      title: "طرق استخدام الفيسبوك في التسويق الالكتروني",
      description: "دليل شامل لاستخدام منصة الفيسبوك في استراتيجيات التسويق الرقمي وبناء العلامة التجارية.",
      excerpt: "الفيسبوك يعتبر من أهم منصات التواصل الاجتماعي للتسويق الإلكتروني، حيث يوفر أدوات متنوعة للوصول للجمهور المستهدف...",
      publishDate: "2024-04-20",
      readTime: "10 min read",
      wordCount: "2,800",
      contentType: "Social Media Marketing",
      targetAudience: "Digital marketers and business owners",
      seoKeywords: ["التسويق عبر الفيسبوك", "التسويق الإلكتروني", "وسائل التواصل الاجتماعي", "الإعلانات المدفوعة"],
      tags: ["Facebook Marketing", "Digital Marketing", "Social Media"],
      metaDescription: "تعلم كيفية استخدام الفيسبوك بفعالية في التسويق الإلكتروني وبناء استراتيجيات تسويقية ناجحة.",
      articleUrl: "https://dotdesign.me/%d8%b7%d8%b1%d9%82-%d8%a7%d8%b3%d8%aa%d8%ae%d8%af%d8%a7%d9%85-%d8%a7%d9%84%d9%81%d9%8a%d8%b3%d8%a8%d9%88%d9%83-%d9%81%d9%8a-%d8%a7%d9%84%d8%aa%d8%b3%d9%88%d9%8a%d9%82-%d8%a7%d9%84%d8%a7%d9%84%d9%83/"
    },
    {
      id: 2,
      title: "إستراتيجية التسويق عبر لينكد ان",
      description: "كيفية بناء استراتيجية تسويقية فعالة على منصة لينكد إن للوصول للجمهور المهني.",
      excerpt: "لينكد إن هو المنصة الأمثل للتسويق B2B وبناء العلاقات المهنية، ويتطلب استراتيجية مختلفة عن باقي المنصات...",
      publishDate: "2024-04-18",
      readTime: "12 min read",
      wordCount: "3,200",
      contentType: "Professional Marketing",
      targetAudience: "B2B marketers and professionals",
      seoKeywords: ["التسويق عبر لينكد إن", "التسويق المهني", "B2B marketing", "الشبكات المهنية"],
      tags: ["LinkedIn Marketing", "B2B", "Professional Networking"],
      metaDescription: "اكتشف كيفية بناء استراتيجية تسويقية ناجحة على لينكد إن للوصول للجمهور المهني المستهدف.",
      articleUrl: "https://dotdesign.me/%d8%a5%d8%b3%d8%aa%d8%b1%d8%a7%d8%aa%d9%8a%d8%ac%d9%8a%d8%a9-%d8%a7%d9%84%d8%aa%d8%b3%d9%88%d9%8a%d9%82-%d8%b9%d8%a8%d8%b1-%d9%84%d9%8a%d9%86%d9%83%d8%af-%d8%a7%d9%86/"
    },
    {
      id: 3,
      title: "أهمية التسويق على واتس اب",
      description: "استكشاف أهمية واتس اب كأداة تسويقية قوية للتواصل المباشر مع العملاء.",
      excerpt: "واتس اب أصبح أداة تسويقية مهمة للتواصل المباشر مع العملاء وبناء علاقات قوية معهم...",
      publishDate: "2024-04-15",
      readTime: "8 min read",
      wordCount: "2,400",
      contentType: "Messaging Marketing",
      targetAudience: "Small business owners and marketers",
      seoKeywords: ["التسويق عبر واتس اب", "التسويق المباشر", "خدمة العملاء", "التواصل الفوري"],
      tags: ["WhatsApp Marketing", "Direct Marketing", "Customer Service"],
      metaDescription: "تعرف على أهمية التسويق عبر واتس اب وكيفية استخدامه لبناء علاقات قوية مع العملاء.",
      articleUrl: "https://dotdesign.me/%d8%a3%d9%87%d9%85%d9%8a%d8%a9-%d8%a7%d9%84%d8%aa%d8%b3%d9%88%d9%8a%d9%82-%d8%b9%d9%84%d9%89-%d9%88%d8%a7%d8%aa%d8%b3-%d8%a7%d8%a8/"
    },
    {
      id: 4,
      title: "التسويق الداخلي والتسويق بالمحتوى",
      description: "فهم الفرق بين التسويق الداخلي والتسويق بالمحتوى وكيفية تطبيق كل منهما بفعالية.",
      excerpt: "التسويق الداخلي والتسويق بالمحتوى استراتيجيتان مترابطتان تهدفان لجذب العملاء من خلال تقديم قيمة حقيقية...",
      publishDate: "2024-04-12",
      readTime: "11 min read",
      wordCount: "3,000",
      contentType: "Content Strategy",
      targetAudience: "Content marketers and strategists",
      seoKeywords: ["التسويق الداخلي", "التسويق بالمحتوى", "استراتيجية المحتوى", "جذب العملاء"],
      tags: ["Inbound Marketing", "Content Marketing", "Strategy"],
      metaDescription: "اكتشف الفرق بين التسويق الداخلي والتسويق بالمحتوى وكيفية تطبيقهما لجذب العملاء.",
      articleUrl: "https://dotdesign.me/%d8%a7%d9%84%d8%aa%d8%b3%d9%88%d9%8a%d9%82-%d8%a7%d9%84%d8%af%d8%a7%d8%ae%d9%84%d9%8a-%d9%88%d8%a7%d9%84%d8%aa%d8%b3%d9%88%d9%8a%d9%82-%d8%a8%d8%a7%d9%84%d9%85%d8%ad%d8%aa%d9%88%d9%89/"
    },
    {
      id: 5,
      title: "ما هو التسويق عبر البريد الالكتروني؟",
      description: "دليل شامل للتسويق عبر البريد الإلكتروني وكيفية بناء حملات بريدية فعالة.",
      excerpt: "التسويق عبر البريد الإلكتروني لا يزال من أكثر قنوات التسويق الرقمي فعالية في تحقيق عائد استثمار مرتفع...",
      publishDate: "2024-04-08",
      readTime: "9 min read",
      wordCount: "2,600",
      contentType: "Email Marketing",
      targetAudience: "Digital marketers and business owners",
      seoKeywords: ["التسويق عبر البريد الإلكتروني", "الحملات البريدية", "Email marketing", "التسويق المباشر"],
      tags: ["Email Marketing", "Direct Marketing", "Automation"],
      metaDescription: "تعلم أساسيات التسويق عبر البريد الإلكتروني وكيفية بناء حملات بريدية ناجحة وفعالة.",
      articleUrl: "https://dotdesign.me/%d9%85%d8%a7-%d9%87%d9%88-%d8%a7%d9%84%d8%aa%d8%b3%d9%88%d9%8a%d9%82-%d8%b9%d8%a8%d8%b1-%d8%a7%d9%84%d8%a8%d8%b1%d9%8a%d8%af-%d8%a7%d9%84%d8%a7%d9%84%d9%83%d8%aa%d8%b1%d9%88%d9%86%d9%8a%d8%9f/"
    },
    {
      id: 6,
      title: "أنواع التسويق بالمحتوى",
      description: "استكشاف الأنواع المختلفة للتسويق بالمحتوى وكيفية اختيار النوع المناسب لعملك.",
      excerpt: "التسويق بالمحتوى يتضمن أنواعاً متعددة من المحتوى، كل نوع له خصائصه واستخداماته المختلفة...",
      publishDate: "2024-04-05",
      readTime: "10 min read",
      wordCount: "2,700",
      contentType: "Content Types",
      targetAudience: "Content creators and marketers",
      seoKeywords: ["أنواع المحتوى", "التسويق بالمحتوى", "استراتيجية المحتوى", "إنتاج المحتوى"],
      tags: ["Content Types", "Content Marketing", "Strategy"],
      metaDescription: "اكتشف الأنواع المختلفة للتسويق بالمحتوى وكيفية اختيار النوع الأنسب لاستراتيجيتك التسويقية.",
      articleUrl: "https://dotdesign.me/%d8%a3%d9%86%d9%88%d8%a7%d8%b9-%d8%a7%d9%84%d8%aa%d8%b3%d9%88%d9%8a%d9%82-%d8%a8%d8%a7%d9%84%d9%85%d8%ad%d8%aa%d9%88%d9%89/"
    },
    {
      id: 7,
      title: "طرق التسويق الإلكتروني عبر سناب شات",
      description: "كيفية استخدام سناب شات كمنصة تسويقية فعالة للوصول للجمهور الشاب.",
      excerpt: "سناب شات يوفر فرصاً تسويقية فريدة للوصول للجمهور الشاب من خلال المحتوى المرئي التفاعلي...",
      publishDate: "2024-04-02",
      readTime: "8 min read",
      wordCount: "2,300",
      contentType: "Social Media Marketing",
      targetAudience: "Social media marketers and youth-focused brands",
      seoKeywords: ["التسويق عبر سناب شات", "سناب شات للأعمال", "التسويق للشباب", "المحتوى المرئي"],
      tags: ["Snapchat Marketing", "Visual Content", "Youth Marketing"],
      metaDescription: "تعلم كيفية استخدام سناب شات في التسويق الإلكتروني للوصول للجمهور الشاب بطرق إبداعية.",
      articleUrl: "https://dotdesign.me/%d8%b7%d8%b1%d9%82-%d8%a7%d9%84%d8%aa%d8%b3%d9%88%d9%8a%d9%82-%d8%a7%d9%84%d8%a5%d9%84%d9%83%d8%aa%d8%b1%d9%88%d9%86%d9%8a-%d8%b9%d8%a8%d8%b1-%d8%b3%d9%86%d8%a7%d8%a8-%d8%b4%d8%a7%d8%aa/"
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
        <h2 className="text-3xl sm:text-4xl font-Ovo">Design Studio Articles</h2>
        <Link
          href="/articles"
          className="px-4 py-2 border border-gray-300 rounded-full text-sm hover:bg-[var(--color-light-hover)] hover:border-[var(--color-light-hover)] duration-200"
        >
          Back to Categories
        </Link>
      </div>

      {/* Category Header */}
      <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg p-6 mb-8">
        <div className="flex items-center gap-6">
          <div className="relative w-24 h-24 rounded-full overflow-hidden bg-white shadow-lg">
            <Image
              src="/images/seo/articles/design.png"
              alt="Design Studio"
              fill
              className="object-cover"
            />
          </div>
          <div>
            <h3 className="text-2xl font-semibold text-gray-800 mb-2">Design Studio</h3>
            <p className="text-gray-600 mb-3">
              Digital marketing articles covering social media strategies, content marketing, email marketing, and modern digital advertising techniques.
            </p>
            <div className="flex flex-wrap gap-2">
              {["Social Media Marketing", "Content Marketing", "Email Marketing", "Digital Advertising"].map((topic, index) => (
                <span key={index} className="px-3 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-700">
                  {topic}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
      
      <p className="text-gray-700 font-Ovo max-w-3xl mb-8">
        Explore digital marketing articles written for Design Studio. Each article provides insights into social media marketing, content strategies, and modern digital advertising techniques that help businesses grow their online presence.
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
                <span className="px-3 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-700">
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
        <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg p-8">
          <h3 className="text-2xl font-Ovo text-gray-800 mb-4">
            Need Digital Marketing Content Writing?
          </h3>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            Specialized in creating engaging digital marketing content that drives traffic and establishes industry authority. 
            Every article is crafted for marketing professionals and optimized for search visibility.
          </p>
          <Link
            href="/#contact"
            className="inline-flex items-center gap-2 px-6 py-3 bg-[#F2308D] text-white rounded-lg hover:bg-[#C1277A] transition-colors duration-200"
          >
            Get Marketing Articles
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
            </svg>
          </Link>
        </div>
      </div>
    </div>
  );
}
