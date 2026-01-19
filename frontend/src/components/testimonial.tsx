'use client';
import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import { Timeline } from '@/components/timelinee';

const testimonials = [
  {
    id: 1,
    text: "I hired Subhash Interior to design and build my dream home, and I could be happier with the result. From the initial consultation to the final walk-through, the Archipix team was professional.",
    author: "Lisa Ray",
    location: "New York, USA",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop"
  },
  {
    id: 2,
    text: "I hired Subhash Interior to design and build my dream home, and I could be happier with the result. From the initial consultation to the final walk-through, the Archipix team was professional.",
    author: "Paul Scholes",
    location: "Manchester, UK",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop"
  },
  {
    id: 3,
    text: "Working with Subhash Interior was an absolute pleasure. Their attention to detail and commitment to excellence exceeded all my expectations. Highly recommended!",
    author: "Sarah Johnson",
    location: "Los Angeles, USA",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop"
  }
];

const timelineData = [
  {
    title: "2010",
    content: (
      <div>
        <h3 className="text-xl font-bold text-foreground mb-2">Founded</h3>
        <p className="text-muted-foreground text-sm md:text-base mb-4">
          Started with a vision to transform spaces and create beautiful interiors that inspire.
        </p>
        <div className="bg-secondary/50 rounded-lg p-4 border border-border">
          <p className="text-sm text-muted-foreground">
            Our journey began with a small team of passionate designers dedicated to excellence.
          </p>
        </div>
      </div>
    ),
  },
  {
    title: "2015",
    content: (
      <div>
        <h3 className="text-xl font-bold text-foreground mb-2">100+ Projects</h3>
        <p className="text-muted-foreground text-sm md:text-base mb-4">
          Reached our first century of completed projects, establishing ourselves as industry leaders.
        </p>
        <div className="grid grid-cols-2 gap-4">
          <div className="bg-secondary/50 rounded-lg p-4 border border-border">
            <p className="text-2xl font-bold text-timeline-accent">100+</p>
            <p className="text-xs text-muted-foreground">Projects Completed</p>
          </div>
          <div className="bg-secondary/50 rounded-lg p-4 border border-border">
            <p className="text-2xl font-bold text-timeline-accent">50+</p>
            <p className="text-xs text-muted-foreground">Happy Clients</p>
          </div>
        </div>
      </div>
    ),
  },
  {
    title: "2020",
    content: (
      <div>
        <h3 className="text-xl font-bold text-foreground mb-2">Award Winning</h3>
        <p className="text-muted-foreground text-sm md:text-base mb-4">
          Recognized as India's top interior design firm with multiple prestigious awards.
        </p>
        <div className="space-y-2">
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <span className="text-timeline-accent">✓</span> Best Interior Design Firm 2020
          </div>
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <span className="text-timeline-accent">✓</span> Excellence in Residential Design
          </div>
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <span className="text-timeline-accent">✓</span> Innovation Award
          </div>
        </div>
      </div>
    ),
  },
  {
    title: "2025",
    content: (
      <div>
        <h3 className="text-xl font-bold text-foreground mb-2">Global Expansion</h3>
        <p className="text-muted-foreground text-sm md:text-base mb-4">
          Opening studios across major cities worldwide, bringing our design expertise globally.
        </p>
        <div className="bg-gradient-to-r from-timeline-accent/10 to-timeline-accent-secondary/10 rounded-lg p-4 border border-timeline-accent/20">
          <p className="text-sm text-foreground font-medium">
            Now serving clients in New York, London, Dubai, and Singapore.
          </p>
        </div>
      </div>
    ),
  },
];

export default function TestimonialSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  const currentTestimonial = testimonials[currentIndex];

  return (
    <>
      <div className="min-h-screen bg-white py-16 px-4">
        <div className="max-w-7xl mx-auto">
          {/* Section Title */}
          <div className="flex justify-end mb-8">
            <div className="text-right">
              <h2 className="text-4xl md:text-6xl lg:text-7xl font-medium leading-tight tracking-tight text-foreground">
                What Our Clients
                <br />
                <span className="inline-flex items-center gap-2">
                  <svg
                    className="w-10 h-10 md:w-12 md:h-12 text-muted-foreground"
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

          <hr className="border-border mb-12" />

          {/* Testimonial Content */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            {/* Left Side - Testimonial Card */}
            <div className="lg:col-span-7">
              <div className="relative bg-card p-8 md:p-12 rounded-lg shadow-sm border border-border">
                {/* Quote Icon */}
                <div className="mb-6">
                  <div className="w-16 h-16 bg-secondary rounded-full flex items-center justify-center">
                    <Quote className="w-8 h-8 text-muted-foreground" />
                  </div>
                </div>

                {/* Testimonial Text */}
                <div className="mb-8">
                  <p className="text-muted-foreground text-lg leading-relaxed">
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
                    <h6 className="text-foreground font-semibold text-lg">
                      {currentTestimonial.author}
                    </h6>
                    <span className="text-muted-foreground text-sm">
                      {currentTestimonial.location}
                    </span>
                  </div>
                </div>

                {/* Navigation Buttons */}
                <div className="flex gap-3">
                  <button
                    onClick={handlePrev}
                    className="w-12 h-12 bg-secondary hover:bg-secondary/80 rounded-full flex items-center justify-center transition-colors"
                    aria-label="Previous testimonial"
                  >
                    <ChevronLeft className="w-5 h-5 text-foreground" />
                  </button>
                  <button
                    onClick={handleNext}
                    className="w-12 h-12 bg-secondary hover:bg-secondary/80 rounded-full flex items-center justify-center transition-colors"
                    aria-label="Next testimonial"
                  >
                    <ChevronRight className="w-5 h-5 text-foreground" />
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
                          ? 'w-8 bg-foreground'
                          : 'w-2 bg-muted-foreground/30'
                      }`}
                      aria-label={`Go to testimonial ${index + 1}`}
                    />
                  ))}
                </div>
              </div>
            </div>

            {/* Right Side - Image */}
            <div className="lg:col-span-5">
              <div className="h-full min-h-[400px] bg-muted rounded-lg overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=800&h=800&fit=crop"
                  alt="Architectural floor plan"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Animated Timeline Section */}
      <div className="relative w-full overflow-clip">
        <Timeline data={timelineData} />
      </div>
    </>
  );
}
