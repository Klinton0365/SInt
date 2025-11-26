'use client';
import React, { useState, useRef } from 'react';
import Link from 'next/link';

interface Service {
  icon: string;
  title: string;
  description: string;
  link: string;
}

const ServicesSection: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const sliderRef = useRef<HTMLDivElement>(null);

  const services: Service[] = [
    {
      icon: '🏛️',
      title: 'Architecture',
      description: 'Architectural designs that balance aesthetics, interior, function and innovative thinking.',
      link: '#'
    },
    {
      icon: '🛋️',
      title: 'Interior design',
      description: 'We create elegant, functional interiors that reflect your lifestyle and personal taste.',
      link: '#'
    },
    {
      icon: '📐',
      title: '3D modelling',
      description: 'High-quality 3D modelling solutions for architecture, interiors, exterior, design and products.',
      link: '#'
    },
    {
      icon: '🏙️',
      title: 'Urban design',
      description: 'Sustainable urban design that enhances community life and environmental harmony.',
      link: '#'
    },
    {
      icon: '📋',
      title: 'Planning',
      description: 'Strategic planning that guides spaces toward functionality, innovation and lasting value.',
      link: '#'
    },
    {
      icon: '🎨',
      title: 'Decor plan',
      description: 'Creative decor plans that balance style, comfort and functional harmony.',
      link: '#'
    },
    {
      icon: '🍳',
      title: 'Kitchen design',
      description: 'Transforming everyday cooking with elegant modern and functional kitchen design.',
      link: '#'
    },
    {
      icon: '🛁',
      title: 'Bathroom design',
      description: 'Elevating daily routines with timeless, modern and elegant bathroom design.',
      link: '#'
    }
  ];

  const itemsPerView = 3;
  const maxSlide = Math.max(0, services.length - itemsPerView);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev >= maxSlide ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev <= 0 ? maxSlide : prev - 1));
  };

  return (
    <section className="services-section">
      {/* Fixed Background Image */}
      <div className="fixed-background"></div>

      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-linetitle">
            <div className="letter-circle">
              <h4>S</h4>
            </div>
            <div className="line"></div>
          </div>
          <div className="title-wrapper">
            <h6 className="sub-title">SERVICES.</h6>
          </div>
          <div className="corner-arrow">
            <Link href="/services">
              <div className="arrow-circle">
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M13.922 4.5V11.8125C13.922 11.9244 13.8776 12.0317 13.7985 12.1108C13.7193 12.1899 13.612 12.2344 13.5002 12.2344C13.3883 12.2344 13.281 12.1899 13.2018 12.1108C13.1227 12.0317 13.0783 11.9244 13.0783 11.8125V5.51953L4.79547 13.7953C4.71715 13.8736 4.61092 13.9176 4.50015 13.9176C4.38939 13.9176 4.28316 13.8736 4.20484 13.7953C4.12652 13.717 4.08252 13.6108 4.08252 13.5C4.08252 13.3892 4.12652 13.283 4.20484 13.2047L12.4806 4.92188H6.18765C6.07577 4.92188 5.96846 4.87743 5.88934 4.79831C5.81023 4.71919 5.76578 4.61189 5.76578 4.5C5.76578 4.38811 5.81023 4.28081 5.88934 4.20169C5.96846 4.12257 6.07577 4.07813 6.18765 4.07812H13.5002C13.612 4.07813 13.7193 4.12257 13.7985 4.20169C13.8776 4.28081 13.922 4.38811 13.922 4.5Z" fill="currentColor"/>
                </svg>
              </div>
            </Link>
          </div>
        </div>

        {/* Services Slider */}
        <div className="services-slider-wrapper">
          <div className="services-slider" ref={sliderRef}>
            <div 
              className="slider-track"
              style={{
                transform: `translateX(-${currentSlide * (100 / itemsPerView)}%)`
              }}
            >
              {services.map((service, index) => (
                <div key={index} className="service-item">
                  <Link href={service.link}>
                    <span className="item-arrow">
                      <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                        <path d="M13.922 4.5V11.8125C13.922 11.9244 13.8776 12.0317 13.7985 12.1108C13.7193 12.1899 13.612 12.2344 13.5002 12.2344C13.3883 12.2344 13.281 12.1899 13.2018 12.1108C13.1227 12.0317 13.0783 11.9244 13.0783 11.8125V5.51953L4.79547 13.7953C4.71715 13.8736 4.61092 13.9176 4.50015 13.9176C4.38939 13.9176 4.28316 13.8736 4.20484 13.7953C4.12652 13.717 4.08252 13.6108 4.08252 13.5C4.08252 13.3892 4.12652 13.283 4.20484 13.2047L12.4806 4.92188H6.18765C6.07577 4.92188 5.96846 4.87743 5.88934 4.79831C5.81023 4.71919 5.76578 4.61189 5.76578 4.5C5.76578 4.38811 5.81023 4.28081 5.88934 4.20169C5.96846 4.12257 6.07577 4.07813 6.18765 4.07812H13.5002C13.612 4.07813 13.7193 4.12257 13.7985 4.20169C13.8776 4.28081 13.922 4.38811 13.922 4.5Z" fill="currentColor"/>
                      </svg>
                    </span>
                  </Link>
                  <div className="icon">{service.icon}</div>
                  <h5>{service.title}</h5>
                  <p>{service.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Arrows */}
          <div className="slider-navigation">
            <button onClick={prevSlide} className="nav-arrow prev-arrow">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M15 18L9 12L15 6" stroke="currentColor" strokeWidth="2"/>
              </svg>
            </button>
            <button onClick={nextSlide} className="nav-arrow next-arrow">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M9 18L15 12L9 6" stroke="currentColor" strokeWidth="2"/>
              </svg>
            </button>
          </div>
        </div>
      </div>

      <style jsx global>{`
        .services-section {
          position: relative;
          padding: 100px 0;
          overflow: hidden;
        }

        .fixed-background {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background-image: url('/image/pexels-jvdm-1457842.jpg');
          background-size: cover;
          background-position: center;
          background-attachment: fixed;
          z-index: -1;
        }

        .fixed-background::after {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: rgba(0, 0, 0, 0.7);
        }

        .container {
          max-width: 1400px;
          margin: 0 auto;
          padding: 0 20px;
          position: relative;
          z-index: 1;
        }

        .section-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 60px;
          gap: 30px;
        }

        .section-linetitle {
          display: flex;
          align-items: center;
          gap: 20px;
        }

        .letter-circle {
          width: 80px;
          height: 80px;
          border: 2px solid rgba(255, 255, 255, 0.3);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }

        .letter-circle h4 {
          margin: 0;
          font-size: 32px;
          font-weight: 400;
          color: #fff;
        }

        .line {
          width: 150px;
          height: 1px;
          background: rgba(255, 255, 255, 0.3);
        }

        .title-wrapper {
          flex: 1;
        }

        .sub-title {
          margin: 0;
          font-size: 16px;
          font-weight: 400;
          color: rgba(255, 255, 255, 0.8);
          letter-spacing: 2px;
        }

        .corner-arrow {
          flex-shrink: 0;
        }

        .arrow-circle {
          width: 100px;
          height: 100px;
          background: rgba(210, 180, 140, 0.9);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .arrow-circle:hover {
          background: rgba(210, 180, 140, 1);
          transform: scale(1.05);
        }

        .arrow-circle svg {
          width: 24px;
          height: 24px;
          color: #000;
        }

        .services-slider-wrapper {
          position: relative;
        }

        .services-slider {
          overflow: hidden;
        }

        .slider-track {
          display: flex;
          transition: transform 0.5s cubic-bezier(0.4, 0, 0.2, 1);
          gap: 30px;
        }

        .service-item {
          flex: 0 0 calc(33.333% - 20px);
          background: rgba(40, 40, 40, 0.9);
          padding: 40px 30px;
          border-radius: 8px;
          position: relative;
          transition: all 0.3s ease;
        }

        .service-item:hover {
          background: rgba(50, 50, 50, 0.95);
          transform: translateY(-5px);
        }

        .service-item a {
          position: absolute;
          top: 30px;
          right: 30px;
        }

        .item-arrow {
          width: 40px;
          height: 40px;
          background: rgba(255, 255, 255, 0.1);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.3s ease;
        }

        .service-item:hover .item-arrow {
          background: rgba(210, 180, 140, 0.9);
        }

        .item-arrow svg {
          width: 16px;
          height: 16px;
          color: #fff;
        }

        .service-item:hover .item-arrow svg {
          color: #000;
        }

        .icon {
          font-size: 60px;
          margin-bottom: 20px;
        }

        .service-item h5 {
          font-size: 24px;
          font-weight: 500;
          color: #fff;
          margin: 0 0 15px 0;
        }

        .service-item p {
          font-size: 15px;
          line-height: 1.6;
          color: rgba(255, 255, 255, 0.7);
          margin: 0;
        }

        .slider-navigation {
          display: flex;
          justify-content: center;
          gap: 20px;
          margin-top: 50px;
        }

        .nav-arrow {
          width: 60px;
          height: 60px;
          background: transparent;
          border: 1px solid rgba(255, 255, 255, 0.3);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: all 0.3s ease;
          color: #fff;
        }

        .nav-arrow:hover {
          background: rgba(210, 180, 140, 0.9);
          border-color: rgba(210, 180, 140, 0.9);
          color: #000;
        }

        @media (max-width: 1024px) {
          .service-item {
            flex: 0 0 calc(50% - 15px);
          }

          .line {
            width: 100px;
          }

          .section-header {
            flex-wrap: wrap;
          }
        }

        @media (max-width: 768px) {
          .service-item {
            flex: 0 0 100%;
          }

          .section-header {
            flex-direction: column;
            align-items: flex-start;
          }

          .line {
            width: 80px;
          }

          .letter-circle {
            width: 60px;
            height: 60px;
          }

          .letter-circle h4 {
            font-size: 24px;
          }

          .arrow-circle {
            width: 70px;
            height: 70px;
          }

          .services-section {
            padding: 60px 0;
          }
        }
      `}</style>
    </section>
  );
};

export default ServicesSection;