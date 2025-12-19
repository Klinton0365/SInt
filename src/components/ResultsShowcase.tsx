'use client';
import React, { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight, ArrowRight } from 'lucide-react';

interface CountUpProps {
  end: string;
  duration?: number;
  isVisible: boolean;
}

const CountUp: React.FC<CountUpProps> = ({ end, duration = 2000, isVisible }) => {
  const [count, setCount] = useState('0');
  const hasAnimated = useRef(false);

  useEffect(() => {
    if (!isVisible || hasAnimated.current) return;

    hasAnimated.current = true;

    // Extract number and suffix from end string
    const match = end.match(/^([\d,]+)(\+|%)?$/);
    if (!match) {
      setCount(end);
      return;
    }

    const [, numStr, suffix = ''] = match;
    const target = parseInt(numStr.replace(/,/g, ''));
    const startTime = Date.now();

    const animate = () => {
      const now = Date.now();
      const progress = Math.min((now - startTime) / duration, 1);

      // Easing function for smooth animation
      const easeOutQuart = 1 - Math.pow(1 - progress, 4);
      const current = Math.floor(easeOutQuart * target);

      // Format with commas
      const formatted = current.toLocaleString() + suffix;
      setCount(formatted);

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  }, [end, duration, isVisible]);

  return <span>{count}</span>;
};

interface Result {
  metric: string;
  description: string;
  company: string;
  industry: string;
  service: string;
  image: string;
  link: string;
  color: string;
  companyLogo?: string;
}

const ResultsShowcase: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [visibleCards, setVisibleCards] = useState<Set<number>>(new Set());
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const results: Result[] = [
    {
      metric: "120+",
      description: "Residential interiors designed and executed with end-to-end project management.",
      company: "Premium Home Interior Brand",
      industry: "Residential Interiors",
      service: "Turnkey Interior Design",
      image: "/image/results/fortune-500.png",
      link: "/case-studies/residential-interior-projects",
      color: "#A855F7"
    },
    {
      metric: "40+",
      description: "Luxury modular kitchen projects delivered with space-optimized layouts.",
      company: "Urban Kitchen Studio",
      companyLogo: "/images/clients/teamgo1.png",
      industry: "Modular Kitchens",
      service: "Kitchen Design & Installation",
      image: "/image/results/teamgo1.png",
      link: "/case-studies/modular-kitchen-design",
      color: "#F97316"
    },
    {
      metric: "95%",
      description: "Client satisfaction achieved through customized designs and quality finishes.",
      company: "Interior Design Consultancy",
      companyLogo: "/images/clients/teamgo1.png",
      industry: "Interior Consulting",
      service: "Design & Visualization",
      image: "/image/results/teamgo1.png",
      link: "/case-studies/client-satisfaction",
      color: "#22C55E"
    },
    {
      metric: "60+",
      description: "Commercial spaces transformed to enhance productivity and brand identity.",
      company: "Corporate Interior Solutions",
      industry: "Commercial Interiors",
      service: "Office & Retail Interiors",
      image: "/image/results/zingly.png",
      link: "/case-studies/commercial-interiors",
      color: "#0EA5E9"
    },
    {
      metric: "25+",
      description: "Bespoke furniture pieces crafted to match modern interior aesthetics.",
      company: "Custom Furniture Studio",
      industry: "Furniture & Decor",
      service: "Custom Furniture Design",
      image: "/image/results/pepperfry1.png",
      link: "/case-studies/custom-furniture",
      color: "#6366F1"
    },
    {
      metric: "10,000+",
      description: "Square feet of interior space executed with premium materials and finishes.",
      company: "Real Estate Interior Partner",
      industry: "Real Estate Interiors",
      service: "Interior Execution",
      image: "/image/results/teamgo1.png",
      link: "/case-studies/real-estate-interiors",
      color: "#EAB308"
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = parseInt((entry.target as HTMLElement).dataset.index || '0');
            setVisibleCards(prev => new Set(Array.from(prev).concat(index)));
          }
        });
      },
      { threshold: 0.2, rootMargin: '50px' }
    );

    const cards = containerRef.current?.querySelectorAll('[data-index]');
    cards?.forEach((card: Element) => observer.observe(card));

    return () => observer.disconnect();
  }, []);

  const cardWidth = 358;
  const gap = 16;
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
            ref={containerRef}
            className="flex gap-4 transition-transform duration-500 ease-out"
            style={{
              transform: `translateX(-${currentIndex * (cardWidth + gap)}px)`,
              width: 'fit-content'
            }}
          >
            {results.map((result, index) => (
              <div
                key={index}
                data-index={index}
                onMouseEnter={() => setHoveredCard(index)}
                onMouseLeave={() => setHoveredCard(null)}
                className="shrink-0 w-[358px] overflow-hidden min-h-[448px] bg-white rounded-3xl p-8 relative transition-all duration-300 border border-gray-200 hover:border-[#0199A3] cursor-pointer"
              >
                {/* Default Content */}
                <div className="relative z-10 pointer-events-none">
                  <h3 className="text-6xl md:text-7xl font-bold text-gray-900 mb-2 tracking-tight">
                    <CountUp
                      end={result.metric}
                      duration={2000}
                      isVisible={visibleCards.has(index)}
                    />
                  </h3>
                  <p className="text-gray-700 text-base font-medium leading-relaxed">
                    {result.description}
                  </p>
                </div>

                {/* Hover Content - Slides up from bottom */}
                <div
                  className="absolute left-0 w-full h-[550px] p-8 bg-white transition-all duration-500 ease-in-out rounded-3xl"
                  style={{
                    top: hoveredCard === index ? '-93px' : '262px',
                    backgroundColor: '#FFFFFF',
                    zIndex: 20
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
                    className="absolute w-56 h-40 rounded-full -bottom-32 -right-10 blur-3xl opacity-50 pointer-events-none"
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