import { Navbar } from "@/components";
import Footer from "@/components/footer1";
import ContactSection from "@/components/contact-us";

export default function ContactPage() {
  return (
    <>
      <Navbar />
      
      {/* Page Header */}
      <section className="relative h-[60vh] flex items-center justify-center bg-gray-900">
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="relative z-10 text-center text-white">
          <h1 className="text-5xl font-bold mb-4">Contact Us</h1>
          <p className="text-xl">Let's Bring Your Vision to Life</p>
        </div>
      </section>

      {/* Contact Content */}
      <ContactSection />

      <Footer />
    </>
  );
}