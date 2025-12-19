"use client";
import React, { useState, useEffect } from 'react';
import { Calendar, TrendingUp, Award, Globe } from 'lucide-react';

import { Navbar } from "@/components";
import Footer from "@/components/footer1";

export default function TimelinePage() {
    const [scrollY, setScrollY] = useState(0);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const handleScroll = () => setScrollY(window.scrollY);
        window.addEventListener('scroll', handleScroll);

        setTimeout(() => setIsVisible(true), 300);

        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const milestones = [
        {
            year: "2010",
            title: "Founded",
            description: "Started with a vision to transform spaces",
            details: "Subhash Interior was born from a passion for creating beautiful, functional spaces. Our founder, Subhash Kumar, opened our first studio with a small but dedicated team.",
            icon: Calendar,
            image: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=600&q=80"
        },
        {
            year: "2012",
            title: "First Major Project",
            description: "Completed our first commercial development",
            details: "We designed a 50,000 sq ft corporate office that set new standards for workplace design in the region. This project established our reputation for excellence.",
            icon: TrendingUp,
            image: "https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=600&q=80"
        },
        {
            year: "2015",
            title: "100+ Projects",
            description: "Reached our first century of completed projects",
            details: "A milestone that marked our growth from a boutique studio to a full-service design firm. Our portfolio expanded across residential, commercial, and hospitality sectors.",
            icon: Award,
            image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=600&q=80"
        },
        {
            year: "2017",
            title: "Industry Recognition",
            description: "Won 'Best Interior Design Firm' award",
            details: "Our innovative approach to sustainable design earned us national recognition. We were featured in leading architecture and design publications.",
            icon: Award,
            image: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=600&q=80"
        },
        {
            year: "2020",
            title: "Award Winning",
            description: "Recognized as India's top interior design firm",
            details: "Despite global challenges, we adapted and thrived. Our commitment to excellence earned us the prestigious 'Design Firm of the Year' award.",
            icon: Award,
            image: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?w=600&q=80"
        },
        {
            year: "2022",
            title: "Sustainability Initiative",
            description: "Launched our eco-friendly design program",
            details: "We pioneered sustainable interior design practices, incorporating recycled materials and energy-efficient solutions in all our projects.",
            icon: Globe,
            image: "https://images.unsplash.com/photo-1600607686527-6fb886090705?w=600&q=80"
        },
        {
            year: "2025",
            title: "Global Expansion",
            description: "Opening studios across major cities worldwide",
            details: "With new offices in Dubai, Singapore, and London, we're bringing our design philosophy to international markets while maintaining our commitment to personalized service.",
            icon: Globe,
            image: "https://images.unsplash.com/photo-1600607686558-cda42df199d2?w=600&q=80"
        }
    ];

    return (
        <>
            {/* <Navbar /> */}

            <div className="timeline-page">
                {/* Hero Section */}
                <section className="hero-section">
                    <div className="hero-background" style={{ transform: `translateY(${scrollY * 0.5}px)` }}>
                        <div className="hero-overlay"></div>
                    </div>

                    <div className={`hero-content ${isVisible ? 'visible' : ''}`}>
                        <div className="hero-badge">Our Journey</div>
                        <h1 className="hero-title">
                            <span className="title-line">The Story of</span>
                            <span className="title-line title-accent">Subhash Interior</span>
                        </h1>
                        <p className="hero-subtitle">
                            15 years of transforming visions into beautiful realities
                        </p>
                    </div>

                    <div className="scroll-indicator">
                        <div className="scroll-line"></div>
                        <span>Explore Our Milestones</span>
                    </div>
                </section>

                {/* Timeline Section */}
                <section className="timeline-section">
                    <div className="timeline-container">
                        <div className="section-intro">
                            <div className="section-label">Our Milestones</div>
                            <h2 className="section-title">A Legacy in the Making</h2>
                            <p className="section-description">
                                From a small studio to a leading design firm, every milestone represents 
                                our commitment to excellence and innovation in interior design.
                            </p>
                        </div>

                        <div className="timeline">
                            {milestones.map((milestone, index) => (
                                <div key={index} className="timeline-item">
                                    <div className="timeline-marker">
                                        <div className="timeline-dot">
                                            <milestone.icon size={16} />
                                        </div>
                                        <div className="timeline-line"></div>
                                    </div>

                                    <div className="timeline-card">
                                        <div className="card-image">
                                            <img src={milestone.image} alt={milestone.title} />
                                            <div className="card-year">{milestone.year}</div>
                                        </div>

                                        <div className="card-content">
                                            <h3 className="card-title">{milestone.title}</h3>
                                            <p className="card-description">{milestone.description}</p>
                                            <p className="card-details">{milestone.details}</p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* CTA Section */}
                        <div className="timeline-cta">
                            <h3 className="cta-title">Want to Be Part of Our Next Chapter?</h3>
                            <p className="cta-description">
                                Let's create something extraordinary together
                            </p>
                            <button className="cta-button">
                                <span>Start Your Project</span>
                                <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                                    <path d="M7.5 15L12.5 10L7.5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                </svg>
                            </button>
                        </div>
                    </div>
                </section>

                <style jsx>{`
        .timeline-page {
          width: 100%;
          overflow-x: hidden;
        }

        /* Hero Section */
        .hero-section {
          position: relative;
          height: 70vh;
          min-height: 500px;
          display: flex;
          align-items: center;
          justify-content: center;
          overflow: hidden;
        }

        .hero-background {
          position: absolute;
          inset: 0;
          background-image: url('https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=1600&q=80');
          background-size: cover;
          background-position: center;
        }

        .hero-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(135deg, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0.5) 100%);
        }

        .hero-content {
          position: relative;
          z-index: 10;
          text-align: center;
          max-width: 900px;
          padding: 0 20px;
          opacity: 0;
          transform: translateY(30px);
          transition: all 1s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .hero-content.visible {
          opacity: 1;
          transform: translateY(0);
        }

        .hero-badge {
          display: inline-block;
          padding: 8px 20px;
          background: rgba(210, 180, 140, 0.2);
          border: 1px solid rgba(210, 180, 140, 0.5);
          color: rgba(210, 180, 140, 0.9);
          font-size: 14px;
          letter-spacing: 2px;
          text-transform: uppercase;
          margin-bottom: 30px;
          backdrop-filter: blur(10px);
        }

        .hero-title {
          font-size: clamp(2.5rem, 6vw, 5rem);
          font-weight: 700;
          line-height: 1.1;
          margin: 0 0 30px 0;
          color: white;
        }

        .title-line {
          display: block;
        }

        .title-accent {
          background: linear-gradient(135deg, #d2b48c 0%, #f4e4c1 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .hero-subtitle {
          font-size: clamp(1rem, 2vw, 1.3rem);
          color: rgba(255, 255, 255, 0.8);
          margin: 0;
          font-weight: 300;
          letter-spacing: 1px;
        }

        .scroll-indicator {
          position: absolute;
          bottom: 40px;
          left: 50%;
          transform: translateX(-50%);
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 15px;
          color: rgba(255, 255, 255, 0.6);
          font-size: 12px;
          letter-spacing: 2px;
          text-transform: uppercase;
        }

        .scroll-line {
          width: 1px;
          height: 60px;
          background: linear-gradient(to bottom, rgba(210, 180, 140, 0.8), transparent);
          animation: scrollPulse 2s ease-in-out infinite;
        }

        @keyframes scrollPulse {
          0%, 100% { transform: translateY(0); opacity: 0.4; }
          50% { transform: translateY(20px); opacity: 1; }
        }

        /* Timeline Section */
        .timeline-section {
          padding: 120px 20px;
          background: linear-gradient(to bottom, #ffffff 0%, #f9f9f9 100%);
        }

        .timeline-container {
          max-width: 1200px;
          margin: 0 auto;
        }

        .section-intro {
          text-align: center;
          margin-bottom: 100px;
        }

        .section-label {
          font-size: 14px;
          letter-spacing: 3px;
          text-transform: uppercase;
          color: rgba(210, 180, 140, 0.8);
          font-weight: 600;
          margin-bottom: 20px;
        }

        .section-title {
          font-size: clamp(2.5rem, 5vw, 4rem);
          font-weight: 700;
          color: #1a1a1a;
          margin: 0 0 20px 0;
        }

        .section-description {
          font-size: 1.2rem;
          color: #666;
          max-width: 700px;
          margin: 0 auto;
          line-height: 1.7;
        }

        .timeline {
          position: relative;
          padding: 40px 0;
        }

        .timeline-item {
          position: relative;
          display: grid;
          grid-template-columns: 80px 1fr;
          gap: 40px;
          margin-bottom: 80px;
        }

        .timeline-item:last-child {
          margin-bottom: 0;
        }

        .timeline-item:last-child .timeline-line {
          display: none;
        }

        .timeline-marker {
          position: relative;
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        .timeline-dot {
          width: 60px;
          height: 60px;
          background: rgba(210, 180, 140, 0.9);
          border: 4px solid white;
          border-radius: 50%;
          box-shadow: 0 4px 20px rgba(210, 180, 140, 0.3);
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
          transition: all 0.4s ease;
          position: relative;
          z-index: 2;
        }

        .timeline-item:hover .timeline-dot {
          transform: scale(1.2);
          box-shadow: 0 6px 30px rgba(210, 180, 140, 0.5);
        }

        .timeline-line {
          position: absolute;
          top: 60px;
          left: 50%;
          transform: translateX(-50%);
          width: 2px;
          height: calc(100% + 80px);
          background: linear-gradient(to bottom, rgba(210, 180, 140, 0.3), rgba(210, 180, 140, 0.1));
        }

        .timeline-card {
          background: white;
          border-radius: 12px;
          overflow: hidden;
          box-shadow: 0 4px 30px rgba(0, 0, 0, 0.08);
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
          display: grid;
          grid-template-columns: 350px 1fr;
        }

        .timeline-item:hover .timeline-card {
          transform: translateY(-8px);
          box-shadow: 0 12px 50px rgba(0, 0, 0, 0.15);
        }

        .card-image {
          position: relative;
          height: 100%;
          min-height: 300px;
          overflow: hidden;
        }

        .card-image img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.6s ease;
        }

        .timeline-item:hover .card-image img {
          transform: scale(1.1);
        }

        .card-year {
          position: absolute;
          top: 20px;
          left: 20px;
          background: rgba(210, 180, 140, 0.95);
          color: white;
          padding: 10px 20px;
          font-size: 1.5rem;
          font-weight: 700;
          border-radius: 6px;
          backdrop-filter: blur(10px);
        }

        .card-content {
          padding: 40px;
          display: flex;
          flex-direction: column;
          justify-content: center;
        }

        .card-title {
          font-size: 2rem;
          font-weight: 700;
          color: #1a1a1a;
          margin: 0 0 15px 0;
        }

        .card-description {
          font-size: 1.2rem;
          color: rgba(210, 180, 140, 0.9);
          font-weight: 600;
          margin: 0 0 20px 0;
        }

        .card-details {
          font-size: 1.05rem;
          line-height: 1.8;
          color: #666;
          margin: 0;
        }

        /* CTA Section */
        .timeline-cta {
          margin-top: 120px;
          text-align: center;
          padding: 80px 40px;
          background: linear-gradient(135deg, #1a1a1a 0%, #2a2a2a 100%);
          border-radius: 16px;
          position: relative;
          overflow: hidden;
        }

        .timeline-cta::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 4px;
          background: linear-gradient(90deg, rgba(210, 180, 140, 0.8), rgba(210, 180, 140, 0.2));
        }

        .cta-title {
          font-size: clamp(1.8rem, 4vw, 2.5rem);
          font-weight: 700;
          color: white;
          margin: 0 0 15px 0;
        }

        .cta-description {
          font-size: 1.2rem;
          color: rgba(255, 255, 255, 0.7);
          margin: 0 0 40px 0;
        }

        .cta-button {
          display: inline-flex;
          align-items: center;
          gap: 12px;
          padding: 18px 40px;
          background: rgba(210, 180, 140, 0.9);
          color: white;
          border: none;
          border-radius: 8px;
          font-size: 1.1rem;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s ease;
          text-transform: uppercase;
          letter-spacing: 1px;
        }

        .cta-button:hover {
          background: rgba(210, 180, 140, 1);
          transform: translateY(-2px);
          gap: 16px;
          box-shadow: 0 8px 30px rgba(210, 180, 140, 0.4);
        }

        /* Responsive */
        @media (max-width: 1024px) {
          .timeline-card {
            grid-template-columns: 1fr;
          }

          .card-image {
            min-height: 250px;
          }

          .card-content {
            padding: 30px;
          }
        }

        @media (max-width: 768px) {
          .hero-section {
            height: 60vh;
            min-height: 400px;
          }

          .timeline-section {
            padding: 80px 20px;
          }

          .section-intro {
            margin-bottom: 60px;
          }

          .timeline-item {
            grid-template-columns: 60px 1fr;
            gap: 20px;
            margin-bottom: 60px;
          }

          .timeline-dot {
            width: 50px;
            height: 50px;
          }

          .timeline-line {
            top: 50px;
            height: calc(100% + 60px);
          }

          .card-image {
            min-height: 200px;
          }

          .card-content {
            padding: 25px;
          }

          .card-title {
            font-size: 1.5rem;
          }

          .card-description {
            font-size: 1rem;
          }

          .card-details {
            font-size: 0.95rem;
          }

          .timeline-cta {
            margin-top: 80px;
            padding: 60px 30px;
          }
        }
      `}</style>
            </div>

            {/* <Footer /> */}
        </>
    );
}