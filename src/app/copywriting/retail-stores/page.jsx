import Link from "next/link";
import Image from "next/image";
import { retailStores } from "../../data/retailStores";

export const metadata = {
  title: "Retail & Stores | Copywriting | Aya Portfolio",
};

export default function RetailStoresPage() {
  return (
    <div className="w-full px-[12%] py-10 scroll-mt-20">
      <div className="flex items-center justify-between gap-4 mb-6">
        <h2 className="text-3xl sm:text-4xl font-Ovo">Retail & Stores</h2>
        <Link
          href="/copywriting"
          className="flex items-center gap-2 text-[#F2308D] hover:text-[#bd266e] transition-colors"
        >
          <Image
            src="/images/icons/left-arrow.png"
            alt="Back"
            width={16}
            height={16}
            className="w-4 h-4"
          />
          Back to Copywriting
        </Link>
      </div>

      <p className="text-gray-600 mb-8 text-lg leading-relaxed">
        Discover our retail and store clients across various industries. Click on any business card to visit their Facebook page and explore product descriptions, promotional campaigns, and customer engagement strategies.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
        {retailStores.map((store) => (
          <a
            key={store.facebookUrl}
            href={store.facebookUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group block border border-gray-300 rounded-lg overflow-hidden hover:shadow-lg hover:-translate-y-1 transition-all duration-300 hover:border-[#F2308D]"
          >
            <div className="aspect-square overflow-hidden">
              <Image
                src={store.imageUrl}
                alt={store.name}
                width={400}
                height={400}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="p-4">
              <h3 className="text-lg font-semibold text-gray-800 group-hover:text-[#F2308D] transition-colors">
                {store.name}
              </h3>
              <p className="text-sm text-gray-600 mt-1">
                Click to view Facebook page
              </p>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}
