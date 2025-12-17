import { Navbar } from "@/components";
import Footer from "@/components/footer1";

export default function PortfolioPage() {
  return (
    <>
      <Navbar />
      
      {/* Page Header */}
      <section className="relative h-[60vh] flex items-center justify-center bg-gray-900">
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="relative z-10 text-center text-white">
          <h1 className="text-5xl font-bold mb-4">Our Portfolio</h1>
          <p className="text-xl">Explore Our Recent Projects</p>
        </div>
      </section>

      {/* Portfolio Grid */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Add portfolio items */}
            <div className="aspect-square bg-gray-200 rounded-lg overflow-hidden">
              <img src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6" alt="Project 1" className="w-full h-full object-cover" />
            </div>
            {/* Repeat for more projects */}
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}