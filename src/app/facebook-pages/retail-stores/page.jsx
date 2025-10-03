import Link from "next/link";
import Image from "next/image";
import { facebookPagesData } from "../../data/facebookPagesData";

export const metadata = {
  title: "Retail & Stores Facebook Pages | Content Creation | Aya Portfolio",
};

export default function RetailStoresFacebookPagesPage() {
  const retailStoresPages = facebookPagesData["Retail & Stores"];

  return (
    <div className="w-full px-[12%] py-10 scroll-mt-20">
      <div className="flex items-center justify-between gap-4 mb-6">
        <h2 className="text-3xl sm:text-4xl font-Ovo">Retail & Stores</h2>
        <Link
          href="/facebook-pages"
          className="px-4 py-2 border border-gray-300 rounded-full text-sm hover:bg-[var(--color-light-hover)] hover:border-[var(--color-light-hover)] duration-200"
        >
          Back to Categories
        </Link>
      </div>
      <p className="text-gray-700 font-Ovo max-w-2xl">
        Explore retail and store Facebook pages. Click a card to open the page in a new tab and discover content creation opportunities.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
        {retailStoresPages.map((page, index) => (
          <a
            key={`retail-${index}`}
            href={page.facebookUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="block border border-gray-300 rounded-lg overflow-hidden hover:shadow-black hover:-translate-y-1 duration-500 hover:bg-[var(--color-light-hover)] hover:border-[var(--color-light-hover)] group"
          >
            <div className="relative w-full h-56 bg-gray-100">
              <img
                src={page.imageUrl}
                alt={page.name}
                className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-300"
                loading="lazy"
              />
              
              {/* Facebook Icon Overlay */}
              <div className="absolute top-3 right-3 w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
                <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </div>
            </div>
            
            <div className="p-5">
              <h3 className="text-lg font-semibold text-gray-800 mb-2">{page.name}</h3>
              <p className="text-sm text-gray-600 mb-3 line-clamp-2">{page.description}</p>
              <span className="inline-flex items-center gap-2 text-[#F2308D] mt-3">
                View Facebook Page
                <Image
                  src="/images/icons/right-arrow.png"
                  alt="Arrow"
                  width={16}
                  height={16}
                  className="w-4 h-4"
                />
              </span>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}
