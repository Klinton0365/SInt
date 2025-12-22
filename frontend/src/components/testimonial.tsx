'use client';
import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';

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

const milestones = [
  { year: "2010", title: "Founded", description: "Started with a vision to transform spaces" },
  { year: "2015", title: "100+ Projects", description: "Reached our first century of completed projects" },
  { year: "2020", title: "Award Winning", description: "Recognized as India's top interior design firm" },
  { year: "2025", title: "Global Expansion", description: "Opening studios across major cities worldwide" }
];

export default function TestimonialSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000); // 3 seconds

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
      <div className="min-h-screen bg-gray-50 py-16 px-4">
        <div className="max-w-7xl mx-auto">
          {/* Section Title */}
          <div className="flex justify-end mb-8">
            <div className="text-right section-title">
              <h2 style={{
                fontSize: '75px',
                fontWeight: 500,
                lineHeight: '80px',
                letterSpacing: '-1px',
                color: '#171717'
              }}>
                What Our Clients
                <br />
                <span className="inline-flex items-center gap-2">
                  <svg
                    className="w-12 h-12 text-gray-400"
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
                      className={`h-2 rounded-full transition-all ${index === currentIndex
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
                  src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=800&h=800&fit=crop"
                  alt="Architectural floor plan"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Timeline Section */}
      <section className="timeline-section">
        <div className="timeline-container">
          <div className="section-label text-sm uppercase tracking-wider text-gray-500 mb-4">Our Milestones</div>
          <h2 className="timeline-title">The Journey So Far</h2>

          <div className="timeline">
            {milestones.map((milestone, index) => (
              <div key={index} className="timeline-item">
                <div className="timeline-marker">
                  <div className="timeline-dot"></div>
                </div>
                <div className="timeline-content">
                  <div className="timeline-year">{milestone.year}</div>
                  <h3 className="timeline-event-title">{milestone.title}</h3>
                  <p className="timeline-description">{milestone.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <style>{`
          .timeline-section {
            padding: 120px 20px;
            background: white;
          }

          .timeline-container {
            max-width: 900px;
            margin: 0 auto;
            text-align: center;
          }

          .timeline-title {
            font-size: clamp(2.5rem, 5vw, 4rem);
            font-weight: 700;
            color: #1a1a1a;
            margin: 0 0 80px 0;
          }

          .timeline {
            position: relative;
            padding: 40px 0;
          }

          .timeline::before {
            content: '';
            position: absolute;
            left: 50%;
            top: 0;
            bottom: 0;
            width: 2px;
            background: linear-gradient(to bottom, rgba(210, 180, 140, 0.2), rgba(210, 180, 140, 0.8), rgba(210, 180, 140, 0.2));
          }

          .timeline-item {
            position: relative;
            display: grid;
            grid-template-columns: 1fr auto 1fr;
            gap: 40px;
            margin-bottom: 80px;
            align-items: center;
          }

          .timeline-item:nth-child(even) .timeline-content {
            grid-column: 1;
            text-align: right;
          }

          .timeline-item:nth-child(odd) .timeline-content {
            grid-column: 3;
            text-align: left;
          }

          .timeline-marker {
            grid-column: 2;
            position: relative;
            z-index: 2;
          }

          .timeline-dot {
            width: 20px;
            height: 20px;
            background: rgba(210, 180, 140, 0.9);
            border: 4px solid white;
            border-radius: 50%;
            box-shadow: 0 0 0 4px rgba(210, 180, 140, 0.2);
            transition: all 0.3s ease;
          }

          .timeline-item:hover .timeline-dot {
            transform: scale(1.3);
            box-shadow: 0 0 0 8px rgba(210, 180, 140, 0.3);
          }

          .timeline-content {
            padding: 30px;
            background: #f9f9f9;
            border-left: 3px solid rgba(210, 180, 140, 0.6);
            transition: all 0.3s ease;
          }

          .timeline-item:hover .timeline-content {
            background: rgba(210, 180, 140, 0.05);
            transform: translateY(-5px);
          }

          .timeline-year {
            font-size: 2.5rem;
            font-weight: 700;
            color: rgba(210, 180, 140, 0.9);
            margin-bottom: 10px;
          }

          .timeline-event-title {
            font-size: 1.5rem;
            font-weight: 700;
            color: #1a1a1a;
            margin: 0 0 10px 0;
          }

          .timeline-description {
            font-size: 1rem;
            color: #666;
            margin: 0;
            line-height: 1.6;
          }

          @media (max-width: 768px) {
            .timeline::before {
              left: 20px;
            }

            .timeline-item {
              grid-template-columns: auto 1fr;
              gap: 20px;
            }

            .timeline-marker {
              grid-column: 1;
            }

            .timeline-item:nth-child(even) .timeline-content,
            .timeline-item:nth-child(odd) .timeline-content {
              grid-column: 2;
              text-align: left;
            }

            .timeline-content {
              padding: 20px;
            }

            .timeline-year {
              font-size: 2rem;
            }

            .timeline-section {
              padding: 80px 20px;
            }
          }
        `}</style>
      </section>
    </>
  );
}