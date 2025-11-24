"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const slides = [
  {
    title: "Lakefront Retreat",
    year: "Completed in 2023",
    location: "California, USA",
    price: "$1,895",
    theme: "Residential",
    architect: "Daren Fletcher",
    image: "/image/banner/pexels-fotoaibe-1571460.jpg",
  },
  {
    title: "Modern Hillside Villa",
    year: "Completed in 2024",
    location: "Nevada, USA",
    price: "$2,400",
    theme: "Luxury",
    architect: "Alex Johnson",
    image: "/image/banner/pexels-jvdm-1457842.jpg",
  },
];

export default function HeroSlider() {
  const [index, setIndex] = useState(0);

  const nextSlide = () => setIndex((prev) => (prev + 1) % slides.length);
  const prevSlide = () => setIndex((prev) => (prev - 1 + slides.length) % slides.length);

  const slide = slides[index];

  return (
    <section className="relative h-[90vh] w-full overflow-hidden">
      {/* Background Image with fade animation */}
      <AnimatePresence>
        <motion.img
          key={slide.image}
          src={slide.image}
          alt={slide.title}
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          transition={{ duration: 1.2, ease: "easeInOut" }}
          className="absolute inset-0 h-full w-full object-cover"
        />
      </AnimatePresence>

      {/* Content Card */}
      <div className="absolute bottom-0 left-0 right-0 bg-[#111]/90 text-white px-12 py-10 flex justify-between items-center">
        
        <div>
          <p className="text-gray-400">Latest Project</p>
          <h1 className="text-4xl font-bold mt-1">{slide.title}</h1>
          <p className="text-gray-400 mt-1">{slide.year}</p>
        </div>

        <div className="grid grid-cols-2 gap-x-10 gap-y-4">
          <div>
            <p className="text-gray-400">Location</p>
            <h4 className="font-semibold">{slide.location}</h4>
          </div>

          <div>
            <p className="text-gray-400">Theme & Style</p>
            <h4 className="font-semibold">{slide.theme}</h4>
          </div>

          <div>
            <p className="text-gray-400">Price</p>
            <h4 className="font-semibold">{slide.price}</h4>
          </div>

          <div>
            <p className="text-gray-400">Architect</p>
            <h4 className="font-semibold">{slide.architect}</h4>
          </div>
        </div>

        {/* Navigation Arrows */}
        <div className="flex flex-col gap-3 ml-10">
          <button
            onClick={nextSlide}
            className="w-12 h-12 rounded-full border border-white flex items-center justify-center hover:bg-white hover:text-black transition"
          >
            →
          </button>

          <button
            onClick={prevSlide}
            className="w-12 h-12 rounded-full border border-white flex items-center justify-center hover:bg-white hover:text-black transition"
          >
            ←
          </button>
        </div>
      </div>
    </section>
  );
}
