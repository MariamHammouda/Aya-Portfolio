"use client";

import Link from "next/link";
import Image from "next/image";

export default function ArticlesPage() {
  const articleCategories = [
    {
      id: 1,
      name: "Dr. Ahmed Abo Kresha",
      slug: "dr-ahmed-abo-kresha",
      description: "Medical and healthcare articles focusing on professional medical content, patient education, and healthcare industry insights.",
      imageUrl: "/images/seo/articles/ahmdabokresha.png",
      articleCount: "17 Articles",
      topics: ["Medical Content", "Healthcare SEO", "Patient Education", "Medical Marketing"]
    },
    {
      id: 2,
      name: "Shatabliy",
      slug: "shatabliy",
      description: "Business and entrepreneurship articles covering startup strategies, business development, and industry analysis.",
      imageUrl: "/images/seo/articles/shatabliy.png",
      articleCount: "9 Articles",
      topics: ["Business Strategy", "Entrepreneurship", "Market Analysis", "Growth Hacking"]
    },
    {
      id: 3,
      name: "Dot Design (chatbot)",
      slug: "dot-design",
      description: "Design and creative industry articles focusing on design trends, creative processes, and digital innovation.",
      imageUrl: "/images/seo/articles/dotdesign.png",
      articleCount: "5 Articles",
      topics: ["Design Trends", "Creative Process", "Digital Innovation", "Brand Identity"]
    },
    {
      id: 4,
      name: "Design Studio",
      slug: "design-studio",
      description: "Digital marketing articles covering social media strategies, content marketing, email marketing, and modern digital advertising techniques.",
      imageUrl: "/images/seo/articles/design.png",
      articleCount: "7 Articles",
      topics: ["Social Media Marketing", "Content Marketing", "Email Marketing", "Digital Advertising"]
    },
    {
      id: 5,
      name: "Fashion Models",
      slug: "fashion-models",
      description: "Fashion and modeling industry articles covering portfolio development, industry insights, brand collaborations, and professional modeling guidance.",
      imageUrl: "/images/seo/articles/models.png",
      articleCount: "6 Articles",
      topics: ["Portfolio Development", "Industry Insights", "Brand Collaborations", "Professional Modeling"]
    }
  ];

  return (
    <div className="w-full px-[12%] py-10 scroll-mt-20">
      <div className="flex items-center justify-between gap-4 mb-6">
        <h2 className="text-3xl sm:text-4xl font-Ovo">Articles & SEO Portfolio</h2>
        <Link
          href="/#services"
          className="px-4 py-2 border border-gray-300 rounded-full text-sm hover:bg-[var(--color-light-hover)] hover:border-[var(--color-light-hover)] duration-200"
        >
          Back to Services
        </Link>
      </div>
      
      <p className="text-gray-700 font-Ovo max-w-3xl mb-8">
        Explore my collection of SEO-optimized articles organized by client categories. Each section contains specialized content crafted to drive organic traffic and establish authority in specific industries.
      </p>

      {/* Article Categories Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
        {articleCategories.map((category) => (
          <Link
            key={category.id}
            href={`/articles/${category.slug}`}
            className="block border border-gray-300 rounded-lg overflow-hidden hover:shadow-lg hover:-translate-y-1 duration-500 hover:bg-[var(--color-light-hover)] hover:border-[var(--color-light-hover)] group"
          >
            {/* Category Image */}
            <div className="relative w-full h-64 bg-gradient-to-br from-purple-100 to-pink-100 overflow-hidden flex items-center justify-center">
              {/* Try regular img tag first, fallback to placeholder */}
              <img
                src={category.imageUrl}
                alt={category.name}
                className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-300"
                onError={(e) => {
                  console.error('Image failed to load:', category.imageUrl);
                  e.currentTarget.style.display = 'none';
                  e.currentTarget.nextElementSibling.style.display = 'flex';
                }}
                onLoad={(e) => {
                  console.log('Image loaded successfully:', category.imageUrl);
                }}
              />
              
              {/* Fallback content */}
              <div className="absolute inset-0 bg-gradient-to-br from-purple-100 to-pink-100 flex items-center justify-center" style={{display: 'none'}}>
                <div className="text-center">
                  <div className="w-20 h-20 bg-[#F2308D] rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                    </svg>
                  </div>
                  <p className="text-lg font-medium text-gray-800">{category.name}</p>
                  <p className="text-sm text-gray-600">Article Category</p>
                </div>
              </div>
              
              {/* Article Count Badge */}
              <div className="absolute top-4 right-4">
                <span className="px-3 py-1 rounded-full text-xs font-medium bg-[#F2308D] text-white shadow-lg">
                  {category.articleCount}
                </span>
              </div>
            </div>

            {/* Category Info */}
            <div className="p-6">
              <h3 className="text-xl font-semibold text-gray-800 mb-3 group-hover:text-gray-900">
                {category.name}
              </h3>
              <p className="text-sm text-gray-600 mb-4 group-hover:text-gray-700 leading-relaxed">
                {category.description}
              </p>
              
              {/* Topics */}
              <div className="mb-4">
                <h4 className="text-xs font-semibold text-gray-700 mb-2">Key Topics:</h4>
                <div className="flex flex-wrap gap-1">
                  {category.topics.map((topic, index) => (
                    <span
                      key={index}
                      className="px-2 py-1 rounded text-xs bg-blue-100 text-blue-700"
                    >
                      {topic}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex items-center justify-between">
                <span className="inline-flex items-center gap-2 text-[#F2308D] font-medium text-sm">
                  View Articles
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z"/>
                  </svg>
                </span>
              </div>
            </div>
          </Link>
        ))}
      </div>

      {/* Statistics Section */}
      <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg p-8 mb-12">
        <h3 className="text-2xl font-Ovo text-gray-800 mb-6 text-center">Portfolio Statistics</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="text-center">
            <div className="text-3xl font-bold text-[#F2308D] mb-2">51+</div>
            <div className="text-sm text-gray-600">Total Articles</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-[#F2308D] mb-2">5</div>
            <div className="text-sm text-gray-600">Industry Categories</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-[#F2308D] mb-2">100%</div>
            <div className="text-sm text-gray-600">SEO Optimized</div>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="text-center">
        <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-lg p-8">
          <h3 className="text-2xl font-Ovo text-gray-800 mb-4">
            Need SEO-Optimized Articles?
          </h3>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            Let's create high-quality, SEO-optimized articles that drive organic traffic and establish your authority in your industry. 
            Every article is researched, optimized, and crafted for maximum impact.
          </p>
          <Link
            href="/#contact"
            className="inline-flex items-center gap-2 px-6 py-3 bg-[#F2308D] text-white rounded-lg hover:bg-[#C1277A] transition-colors duration-200"
          >
            Get Custom Articles
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
            </svg>
          </Link>
        </div>
      </div>
    </div>
  );
}
