export default function CopywritingPage() {
  return (
    <div className="w-full px-[12%] py-16">
      <h1 className="text-3xl sm:text-4xl font-Ovo text-center">Copywriting</h1>
      <p className="text-center max-w-2xl mx-auto mt-4">
        Choose a category to explore examples and services.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6 mt-10">
        <div className="border border-gray-300 rounded-lg p-6 hover:shadow-md hover:-translate-y-1 duration-300 cursor-pointer">
          Medical & Healthcare
        </div>
        <div className="border border-gray-300 rounded-lg p-6 hover:shadow-md hover:-translate-y-1 duration-300 cursor-pointer">
          Restaurants & Food
        </div>
        <div className="border border-gray-300 rounded-lg p-6 hover:shadow-md hover:-translate-y-1 duration-300 cursor-pointer">
          Retail & Storesl 🏢
        </div>
        <div className="border border-gray-300 rounded-lg p-6 hover:shadow-md hover:-translate-y-1 duration-300 cursor-pointer">
          International Clients
        </div>
      </div>
    </div>
  );
}

