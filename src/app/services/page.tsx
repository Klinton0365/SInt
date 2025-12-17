import { Navbar } from "@/components";
import Footer from "@/components/footer1";
import ServicesSection from "@/components/services";

export default function ServicesPage() {
  return (
    <>
      <Navbar />
      
      {/* Page Header */}
      <section className="relative h-[60vh] flex items-center justify-center bg-gray-900">
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="relative z-10 text-center text-white">
          <h1 className="text-5xl font-bold mb-4">Our Services</h1>
          <p className="text-xl">Comprehensive Interior Design Solutions</p>
        </div>
      </section>

      {/* Services Content */}
      <ServicesSection />
      
      {/* Additional services info */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center">Why Choose Us</h2>
          {/* Add more content */}
        </div>
      </section>

      <Footer />
    </>
  );
}