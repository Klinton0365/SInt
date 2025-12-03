'use client';
import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    text: "I hired Archipix to design and build my dream home, and I could be happier with the result. From the initial consultation to the final walk-through, the Archipix team was professional.",
    author: "Lisa Ray",
    location: "New York, USA",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop"
  },
  {
    id: 2,
    text: "I hired Archipix to design and build my dream home, and I could be happier with the result. From the initial consultation to the final walk-through, the Archipix team was professional.",
    author: "Paul Scholes",
    location: "Manchester, UK",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop"
  },
  {
    id: 3,
    text: "Working with Archipix was an absolute pleasure. Their attention to detail and commitment to excellence exceeded all my expectations. Highly recommended!",
    author: "Sarah Johnson",
    location: "Los Angeles, USA",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop"
  }
];

export default function TestimonialSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  const currentTestimonial = testimonials[currentIndex];

  return (
    <div className="min-h-screen bg-gray-50 py-16 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Section Title */}
        <div className="flex justify-end mb-8">
          <div className="text-right">
            <h2 className="text-5xl md:text-6xl font-bold text-black leading-tight">
              What Our Clients
              <br />
              <span className="inline-flex items-center gap-2">
                <svg 
                  className="w-8 h-8 text-gray-400" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth={2} 
                    d="M19 14l-7 7m0 0l-7-7m7 7V3" 
                  />
                </svg>
                Are Saying
              </span>
            </h2>
          </div>
        </div>

        <hr className="border-gray-300 mb-12" />

        {/* Testimonial Content */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Left Side - Testimonial Card */}
          <div className="lg:col-span-7">
            <div className="relative bg-white p-8 md:p-12 rounded-lg shadow-sm">
              {/* Quote Icon */}
              <div className="mb-6">
                <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center">
                  <Quote className="w-8 h-8 text-gray-400" />
                </div>
              </div>

              {/* Testimonial Text */}
              <div className="mb-8">
                <p className="text-gray-600 text-lg leading-relaxed">
                  {currentTestimonial.text}
                </p>
              </div>

              {/* Author Info */}
              <div className="flex items-center gap-4 mb-8">
                <img
                  src={currentTestimonial.image}
                  alt={currentTestimonial.author}
                  className="w-16 h-16 rounded-full object-cover"
                />
                <div>
                  <h6 className="text-black font-semibold text-lg">
                    {currentTestimonial.author}
                  </h6>
                  <span className="text-gray-500 text-sm">
                    {currentTestimonial.location}
                  </span>
                </div>
              </div>

              {/* Navigation Buttons */}
              <div className="flex gap-3">
                <button
                  onClick={handlePrev}
                  className="w-12 h-12 bg-gray-100 hover:bg-gray-200 rounded-full flex items-center justify-center transition-colors"
                  aria-label="Previous testimonial"
                >
                  <ChevronLeft className="w-5 h-5 text-gray-700" />
                </button>
                <button
                  onClick={handleNext}
                  className="w-12 h-12 bg-gray-100 hover:bg-gray-200 rounded-full flex items-center justify-center transition-colors"
                  aria-label="Next testimonial"
                >
                  <ChevronRight className="w-5 h-5 text-gray-700" />
                </button>
              </div>

              {/* Pagination Dots */}
              <div className="flex gap-2 mt-6">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentIndex(index)}
                    className={`h-2 rounded-full transition-all ${
                      index === currentIndex 
                        ? 'w-8 bg-black' 
                        : 'w-2 bg-gray-300'
                    }`}
                    aria-label={`Go to testimonial ${index + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Right Side - Image */}
          <div className="lg:col-span-5">
            <div className="h-full min-h-[400px] bg-gray-200 rounded-lg overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&h=800&fit=crop"
                alt="Architectural floor plan"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}