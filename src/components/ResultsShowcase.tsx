'use client';
import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, ArrowRight } from 'lucide-react';

const ResultsShowcase = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const results = [
    {
      metric: "5,000+",
      description: "Hours saved in creation of an iframe Widget with multimedia features.",
      company: "SaaS Industry Leader",
      industry: "Customer Experience",
      service: "Website Widget and Application",
      image: "/image/results/zingly.png",
      link: "/case-studies/building-a-custom-app-suite-for-a-saas-company",
      color: "#0199A3"
    },
    {
      metric: "300+",
      description: "Savings in design hours through a new design system.",
      company: "Pepperfry",
      companyLogo: "/images/clients/pepperfry.png",
      industry: "E-Commerce",
      service: "Design System",
      image: "/image/results/pepperfry1.png",
      link: "/case-studies/building-design-system-for-pepperfry",
      color: "#ED7A00"
    },
    {
      metric: "80%",
      description: "Boost in operation security through an innovative authentication flow.",
      company: "American Restaurant Chain",
      industry: "Food and Beverages Operations",
      service: "Web and Mobile Development",
      image: "/image/results/teamgo1.png",
      link: "/case-studies/msal-integration-for-web-and-mobile",
      color: "#0199A3"
    },
    {
      metric: "3,000+",
      description: "Widgets in one dashboard to boost operational efficiency.",
      company: "Fortune 500 Company",
      industry: "Electrification and Automation",
      service: "Backend Development",
      image: "/image/results/fortune-500.png",
      link: "#",
      color: "#00B162"
    },
    {
      metric: "15+",
      description: "Features engineered for web app with revamped UI and operational stability.",
      company: "Sustainability Leader",
      industry: "Construction and Manufacturing",
      service: "Web App Revamp",
      image: "/image/results/reduzer1.png",
      link: "#",
      color: "#344BFD"
    },
    {
      metric: "5,000+",
      description: "Channel partners empowered through a comprehensive app.",
      company: "MetroGhar",
      companyLogo: "/images/clients/metroghar-2.png",
      industry: "Real Estate",
      service: "Property Management Apps",
      image: "/image/results/metroghar1.png",
      link: "#",
      color: "#FBBF24"
    }
  ];

  const cardWidth = 358; // w-89.5 in pixels
  const gap = 16; // gap-4 in pixels
  const cardsToShow = 4;

  const nextSlide = () => {
    if (currentIndex < results.length - cardsToShow) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const prevSlide = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  return (
    <section className="py-12 md:py-24 bg-white">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="flex justify-between items-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
            Results We Made Possible
          </h2>
        </div>

        <div className="overflow-hidden">
          <div 
            className="flex gap-4 transition-transform duration-500 ease-out"
            style={{ 
              transform: `translateX(-${currentIndex * (cardWidth + gap)}px)`,
              width: 'fit-content'
            }}
          >
            {results.map((result, index) => (
              <div
                key={index}
                className="shrink-0 w-[358px] group overflow-hidden min-h-[448px] bg-white rounded-3xl p-8 relative transition-all duration-300 border border-gray-200 hover:border-[#0199A3]"
              >
                {/* Default Content */}
                <div className="relative z-10">
                  <h3 className="text-6xl md:text-7xl font-bold text-gray-900 mb-2 tracking-tight">
                    {result.metric}
                  </h3>
                  <p className="text-gray-700 text-base font-medium leading-relaxed">
                    {result.description}
                  </p>
                </div>

                {/* Hover Content - Slides up from bottom */}
                {/* Hover Content - Slides up from bottom */}
                <div 
                  className="absolute left-0 w-full h-[550px] p-8 bg-white transition-all duration-500 ease-in-out rounded-3xl"
                  style={{
                    top: '262px',
                    backgroundColor: '#FFFFFF',
                    zIndex: 20
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.top = '-93px';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.top = '262px';
                  }}
                >
                  {/* Company Header */}
                  <div className="pb-5 mb-5 border-b border-gray-200">
                    <div className="relative w-full h-7">
                      {result.companyLogo ? (
                        <img 
                          src={result.companyLogo} 
                          alt={result.company}
                          className="h-full object-contain object-left"
                        />
                      ) : (
                        <p className="text-[#0199A3] text-sm font-semibold leading-6 tracking-wide uppercase">
                          {result.company}
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Details */}
                  <div className="flex flex-col gap-8">
                    <div className="flex flex-col gap-1">
                      <p className="text-sm text-gray-600 tracking-wide">
                        {result.industry}
                      </p>
                      <p className="text-sm text-gray-600 tracking-wide">
                        {result.service}
                      </p>
                    </div>

                    {/* Image */}
                    <div className="relative h-64 z-10">
                      <img 
                        src={result.image} 
                        alt={result.metric}
                        className="w-full h-full object-contain"
                      />
                    </div>

                    <a 
                      href={result.link}
                      className="inline-flex items-center text-[#0199A3] underline underline-offset-8 font-medium text-sm relative z-10 group/btn w-fit hover:underline-offset-4 transition-all"
                    >
                      <span className="relative inline-block">
                        Know More
                        <span className="inline-block ml-1 opacity-0 group-hover/btn:opacity-100 group-hover/btn:ml-2 transition-all duration-300">
                          <ArrowRight className="w-4 h-4 inline" />
                        </span>
                      </span>
                    </a>
                  </div>

                  {/* Colored Blur Effect */}
                  <div 
                    className="absolute w-56 h-40 rounded-full -bottom-32 -right-10 blur-3xl opacity-50"
                    style={{ background: result.color }}
                  />
                </div>
              </div>
            ))}
          </div>

          {/* Navigation */}
          <div className="flex justify-center md:justify-end gap-6 mt-12 md:mt-16">
            <button
              onClick={prevSlide}
              disabled={currentIndex === 0}
              className="transition-colors duration-300 disabled:opacity-30"
              aria-label="Previous"
            >
              <ChevronLeft 
                className={`w-8 h-8 ${currentIndex === 0 ? 'text-gray-400' : 'text-gray-900 hover:text-gray-600'}`}
              />
            </button>
            <button
              onClick={nextSlide}
              disabled={currentIndex >= results.length - cardsToShow}
              className="transition-colors duration-300 disabled:opacity-30"
              aria-label="Next"
            >
              <ChevronRight 
                className={`w-8 h-8 ${currentIndex >= results.length - cardsToShow ? 'text-gray-400' : 'text-gray-900 hover:text-gray-600'}`}
              />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ResultsShowcase;