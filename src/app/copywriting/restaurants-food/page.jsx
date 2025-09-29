import Link from "next/link";
import Image from "next/image";
import { restaurantsFood } from "../../data/restaurantsFood";

export const metadata = {
  title: "Restaurants & Food | Copywriting | Aya Portfolio",
};

export default function RestaurantsFoodPage() {
  return (
    <div className="w-full px-[12%] py-10 scroll-mt-20">
      <div className="flex items-center justify-between gap-4 mb-6">
        <h2 className="text-3xl sm:text-4xl font-Ovo">Restaurants & Food</h2>
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
        Explore our restaurant and food industry clients. Click on any business card to visit their Facebook page and see examples of engaging food content, menu descriptions, and promotional posts that drive customer engagement.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
        {restaurantsFood.map((restaurant) => (
          <a
            key={restaurant.facebookUrl}
            href={restaurant.facebookUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group block border border-gray-300 rounded-lg overflow-hidden hover:shadow-lg hover:-translate-y-1 transition-all duration-300 hover:border-[#F2308D]"
          >
            <div className="aspect-square overflow-hidden">
              <Image
                src={restaurant.imageUrl}
                alt={restaurant.name}
                width={400}
                height={400}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="p-4">
              <h3 className="text-lg font-semibold text-gray-800 group-hover:text-[#F2308D] transition-colors">
                {restaurant.name}
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
