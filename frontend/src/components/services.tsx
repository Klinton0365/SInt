'use client';
import React, { useState, useRef, useEffect } from 'react';
import { Building2, Sofa, Box, Building, FileText, Palette, ArrowUpRight } from 'lucide-react';

interface Service {
  icon: React.ElementType;
  title: string;
  description: string;
  link: string;
}

const ServicesSection: React.FC = () => {
  const [isHovering, setIsHovering] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);
  const [scrollPosition, setScrollPosition] = useState(0);

  const services: Service[] = [
    {
      icon: Building2,
      title: 'Architecture',
      description: 'Architectural designs that balance aesthetics, interior, function and innovative thinking.',
      link: '#'
    },
    {
      icon: Sofa,
      title: 'Interior design',
      description: 'We create elegant, functional interiors that reflect your lifestyle and personal taste.',
      link: '#'
    },
    {
      icon: Box,
      title: '3D modelling',
      description: 'High-quality 3D modelling solutions for architecture, interiors, exterior, design and products.',
      link: '#'
    },
    {
      icon: Building,
      title: 'Urban design',
      description: 'Sustainable urban design that enhances community life and environmental harmony.',
      link: '#'
    },
    {
      icon: FileText,
      title: 'Planning',
      description: 'Strategic planning that guides spaces toward functionality, innovation and lasting value.',
      link: '#'
    },
    {
      icon: Palette,
      title: 'Decor plan',
      description: 'Creative decor plans that balance style, comfort and functional harmony.',
      link: '#'
    },
  ];

  // Duplicate services for infinite scroll effect
  const duplicatedServices = [...services, ...services, ...services];

  useEffect(() => {
    if (isHovering) return;

    const scrollInterval = setInterval(() => {
      setScrollPosition((prev) => {
        const newPosition = prev + 1;
        // Reset when we've scrolled through one set of services
        if (scrollRef.current) {
          const cardWidth = 380; // card width + gap
          const resetPoint = services.length * cardWidth;
          if (newPosition >= resetPoint) {
            return 0;
          }
        }
        return newPosition;
      });
    }, 30);

    return () => clearInterval(scrollInterval);
  }, [isHovering, services.length]);

  const handlePrev = () => {
    setScrollPosition((prev) => Math.max(0, prev - 380));
  };

  const handleNext = () => {
    setScrollPosition((prev) => prev + 380);
  };

  return (
    <section className="relative py-24 overflow-hidden bg-gradient-to-b from-gray-900 to-black">
      {/* Fixed Background Image */}
      <div className="absolute inset-0">
        <img 
          src="https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=1920&q=80" 
          alt="Background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/70"></div>
      </div>

      <div className="max-w-[1400px] mx-auto px-5 relative z-10">
        {/* Section Header */}
        <div className="flex items-center justify-between mb-16 flex-wrap gap-6">
          <div className="flex items-center gap-8">
            <div className="w-32 h-[1px] bg-white/30"></div>
            <h6 className="text-5xl md:text-6xl lg:text-7xl font-medium text-white/90 tracking-tight">
              EXCLUSIVE SERVICES
            </h6>
          </div>
          
          <a href="/services" className="group">
            <div className="w-24 h-24 bg-[#d2b48c]/90 rounded-full flex items-center justify-center cursor-pointer transition-all duration-300 hover:bg-[#d2b48c] hover:scale-105">
              <ArrowUpRight className="w-6 h-6 text-black" />
            </div>
          </a>
        </div>

        {/* Services Carousel */}
        <div className="relative">
          <div 
            ref={scrollRef}
            className="overflow-hidden"
            onMouseEnter={() => setIsHovering(true)}
            onMouseLeave={() => setIsHovering(false)}
          >
            <div 
              className="flex gap-8 transition-transform duration-300 ease-linear"
              style={{ transform: `translateX(-${scrollPosition}px)` }}
            >
              {duplicatedServices.map((service, index) => {
                const IconComponent = service.icon;
                return (
                  <div
                    key={index}
                    className="flex-shrink-0 w-[350px] bg-gray-800/90 backdrop-blur-sm p-10 rounded-lg relative transition-all duration-300 hover:bg-gray-700/95 hover:-translate-y-2 group"
                  >
                    <a 
                      href={service.link}
                      className="absolute top-8 right-8 w-10 h-10 bg-white/10 rounded-full flex items-center justify-center transition-all duration-300 group-hover:bg-[#d2b48c]/90"
                    >
                      <ArrowUpRight className="w-4 h-4 text-white group-hover:text-black" />
                    </a>

                    <div className="mb-6 text-[#d2b48c]">
                      <IconComponent size={56} strokeWidth={1.5} />
                    </div>

                    <h5 className="text-2xl font-medium text-white mb-4">
                      {service.title}
                    </h5>

                    <p className="text-[15px] leading-relaxed text-white/70">
                      {service.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Navigation Arrows */}
          <div className="flex justify-center gap-5 mt-12">
            <button 
              onClick={handlePrev}
              className="w-14 h-14 bg-transparent border border-white/30 rounded-full flex items-center justify-center cursor-pointer transition-all duration-300 hover:bg-[#d2b48c]/90 hover:border-[#d2b48c]/90 text-white hover:text-black"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M15 18L9 12L15 6" stroke="currentColor" strokeWidth="2" />
              </svg>
            </button>
            <button 
              onClick={handleNext}
              className="w-14 h-14 bg-transparent border border-white/30 rounded-full flex items-center justify-center cursor-pointer transition-all duration-300 hover:bg-[#d2b48c]/90 hover:border-[#d2b48c]/90 text-white hover:text-black"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M9 18L15 12L9 6" stroke="currentColor" strokeWidth="2" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;