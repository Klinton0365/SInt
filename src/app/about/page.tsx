"use client";
import React, { useState, useEffect } from 'react';
import { Award, Users, Lightbulb, Target, ArrowRight, CheckCircle } from 'lucide-react';

import { Navbar } from "@/components";
import Footer from "@/components/footer1";

export default function AboutPage() {
    const [scrollY, setScrollY] = useState(0);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const handleScroll = () => setScrollY(window.scrollY);
        window.addEventListener('scroll', handleScroll);

        setTimeout(() => setIsVisible(true), 300);

        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const values = [
        {
            icon: Award,
            title: "Excellence",
            description: "We pursue perfection in every detail, from concept to completion."
        },
        {
            icon: Lightbulb,
            title: "Innovation",
            description: "Pushing boundaries with cutting-edge design solutions."
        },
        {
            icon: Users,
            title: "Collaboration",
            description: "Your vision combined with our expertise creates magic."
        },
        {
            icon: Target,
            title: "Precision",
            description: "Meticulous attention to detail ensures flawless execution."
        }
    ];

    const milestones = [
        { year: "2010", title: "Founded", description: "Started with a vision to transform spaces" },
        { year: "2015", title: "100+ Projects", description: "Reached our first century of completed projects" },
        { year: "2020", title: "Award Winning", description: "Recognized as India's top interior design firm" },
        { year: "2025", title: "Global Expansion", description: "Opening studios across major cities worldwide" }
    ];

    return (
        <>
            <Navbar />

            <div className="about-page">
                {/* Hero Section - Parallax with Split Design */}
                <section className="hero-section">
                    <div className="hero-background" style={{ transform: `translateY(${scrollY * 0.5}px)` }}>
                        <div className="hero-image-left"></div>
                        <div className="hero-image-right"></div>
                    </div>

                    <div className="hero-overlay"></div>

                    <div className={`hero-content ${isVisible ? 'visible' : ''}`}>
                        <div className="hero-badge">Est. 2010</div>
                        <h1 className="hero-title">
                            <span className="title-line">Crafting</span>
                            <span className="title-line title-accent">Beautiful Spaces</span>
                        </h1>
                        <p className="hero-subtitle">Where timeless design meets modern innovation</p>

                        <div className="hero-stats">
                            <div className="stat-item">
                                <div className="stat-number">500+</div>
                                <div className="stat-label">Projects</div>
                            </div>
                            <div className="stat-divider"></div>
                            <div className="stat-item">
                                <div className="stat-number">15</div>
                                <div className="stat-label">Years</div>
                            </div>
                            <div className="stat-divider"></div>
                            <div className="stat-item">
                                <div className="stat-number">98%</div>
                                <div className="stat-label">Satisfaction</div>
                            </div>
                        </div>
                    </div>

                    <div className="scroll-indicator">
                        <div className="scroll-line"></div>
                        <span>Scroll to explore</span>
                    </div>
                </section>

                {/* Our Story Section - Asymmetric Layout */}
                <section className="story-section">
                    <div className="story-container">
                        <div className="story-image-wrapper">
                            <div className="story-image"></div>
                            <div className="story-accent-box"></div>
                        </div>

                        <div className="story-content">
                            <div className="section-label">Our Journey</div>
                            <h2 className="story-title">
                                A Legacy Built on <span className="highlight">Passion</span> and <span className="highlight">Precision</span>
                            </h2>

                            <div className="story-text">
                                <p>
                                    What began in 2010 as a small studio with a bold vision has evolved into one of India's most celebrated interior design firms. Subhash Interior was founded on the belief that great design isn't just about aesthetics—it's about creating spaces that elevate the human experience.
                                </p>

                                <p>
                                    Our founder, Subhash Kumar, started with a simple philosophy: "Every space tells a story. Our job is to help you tell yours beautifully." This principle continues to guide every project we undertake, from intimate residential spaces to grand commercial developments.
                                </p>

                                <p>
                                    Over the years, we've had the privilege of working with hundreds of clients, transforming their visions into stunning realities. Each project has taught us something new, refined our craft, and deepened our commitment to excellence.
                                </p>
                            </div>

                            <div className="story-highlights">
                                <div className="highlight-item">
                                    <CheckCircle className="highlight-icon" />
                                    <span>Award-winning design team</span>
                                </div>
                                <div className="highlight-item">
                                    <CheckCircle className="highlight-icon" />
                                    <span>Sustainable & eco-friendly practices</span>
                                </div>
                                <div className="highlight-item">
                                    <CheckCircle className="highlight-icon" />
                                    <span>End-to-end project management</span>
                                </div>
                            </div>

                            <button className="story-cta">
                                <span>View Our Portfolio</span>
                                <ArrowRight size={20} />
                            </button>
                        </div>
                    </div>
                </section>

                {/* Values Section - Grid with Hover Effects */}
                <section className="values-section">
                    <div className="values-container">
                        <div className="values-header">
                            <div className="section-label">Core Values</div>
                            <h2 className="values-title">What Drives Us Forward</h2>
                            <p className="values-subtitle">
                                Our principles guide every decision, every design, and every client interaction.
                            </p>
                        </div>

                        <div className="values-grid">
                            {values.map((value, index) => (
                                <div key={index} className="value-card">
                                    <div className="value-icon-wrapper">
                                        <value.icon className="value-icon" size={32} />
                                    </div>
                                    <h3 className="value-title">{value.title}</h3>
                                    <p className="value-description">{value.description}</p>
                                    <div className="value-number">0{index + 1}</div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Timeline Section */}
                <section className="timeline-section">
                    <div className="timeline-container">
                        <div className="section-label">Our Milestones</div>
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
                </section>

                <style jsx>{`
        .about-page {
          width: 100%;
          overflow-x: hidden;
        }

        /* Hero Section */
        .hero-section {
          position: relative;
          height: 100vh;
          min-height: 700px;
          display: flex;
          align-items: center;
          justify-content: center;
          overflow: hidden;
        }

        .hero-background {
          position: absolute;
          inset: 0;
          display: flex;
        }

        .hero-image-left,
        .hero-image-right {
          flex: 1;
          background-size: cover;
          background-position: center;
        }

        .hero-image-left {
          background-image: url('https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=1200&q=80');
          clip-path: polygon(0 0, 100% 0, 85% 100%, 0 100%);
        }

        .hero-image-right {
          background-image: url('https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1200&q=80');
          clip-path: polygon(15% 0, 100% 0, 100% 100%, 0 100%);
        }

        .hero-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(135deg, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.4) 100%);
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
          font-size: clamp(3rem, 8vw, 6rem);
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
          font-size: clamp(1.1rem, 2vw, 1.5rem);
          color: rgba(255, 255, 255, 0.8);
          margin: 0 0 50px 0;
          font-weight: 300;
          letter-spacing: 1px;
        }

        .hero-stats {
          display: flex;
          justify-content: center;
          align-items: center;
          gap: 40px;
          margin-top: 60px;
        }

        .stat-item {
          text-align: center;
        }

        .stat-number {
          font-size: 3rem;
          font-weight: 700;
          color: rgba(210, 180, 140, 0.9);
          line-height: 1;
          margin-bottom: 10px;
        }

        .stat-label {
          font-size: 0.9rem;
          color: rgba(255, 255, 255, 0.7);
          text-transform: uppercase;
          letter-spacing: 2px;
        }

        .stat-divider {
          width: 1px;
          height: 60px;
          background: rgba(255, 255, 255, 0.2);
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

        /* Story Section */
        .story-section {
          padding: 120px 20px;
          background: linear-gradient(to bottom, #ffffff 0%, #f9f9f9 100%);
        }

        .story-container {
          max-width: 1400px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 80px;
          align-items: center;
        }

        .story-image-wrapper {
          position: relative;
          height: 600px;
        }

        .story-image {
          width: 100%;
          height: 100%;
          background-image: url('https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?w=800&q=80');
          background-size: cover;
          background-position: center;
          border-radius: 8px;
          position: relative;
          z-index: 2;
        }

        .story-accent-box {
          position: absolute;
          width: 300px;
          height: 300px;
          border: 2px solid rgba(210, 180, 140, 0.6);
          top: -30px;
          right: -30px;
          z-index: 1;
        }

        .section-label {
          font-size: 14px;
          letter-spacing: 3px;
          text-transform: uppercase;
          color: rgba(210, 180, 140, 0.8);
          font-weight: 600;
          margin-bottom: 20px;
        }

        .story-title {
          font-size: clamp(2rem, 4vw, 3rem);
          font-weight: 700;
          line-height: 1.2;
          margin: 0 0 30px 0;
          color: #1a1a1a;
        }

        .highlight {
          color: rgba(210, 180, 140, 0.9);
          position: relative;
        }

        .story-text {
          display: flex;
          flex-direction: column;
          gap: 20px;
          margin-bottom: 40px;
        }

        .story-text p {
          font-size: 1.05rem;
          line-height: 1.8;
          color: #4a4a4a;
          margin: 0;
        }

        .story-highlights {
          display: flex;
          flex-direction: column;
          gap: 15px;
          margin-bottom: 40px;
        }

        .highlight-item {
          display: flex;
          align-items: center;
          gap: 12px;
          font-size: 1rem;
          color: #2a2a2a;
        }

        .highlight-icon {
          color: rgba(210, 180, 140, 0.9);
          flex-shrink: 0;
        }

        .story-cta {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          padding: 18px 36px;
          background: rgba(210, 180, 140, 0.9);
          color: white;
          border: none;
          font-size: 1rem;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s ease;
          text-transform: uppercase;
          letter-spacing: 1px;
        }

        .story-cta:hover {
          background: rgba(210, 180, 140, 1);
          transform: translateX(5px);
          gap: 15px;
        }

        /* Values Section */
        .values-section {
          padding: 120px 20px;
          background: #1a1a1a;
        }

        .values-container {
          max-width: 1400px;
          margin: 0 auto;
        }

        .values-header {
          text-align: center;
          margin-bottom: 80px;
        }

        .values-title {
          font-size: clamp(2.5rem, 5vw, 4rem);
          font-weight: 700;
          color: white;
          margin: 0 0 20px 0;
        }

        .values-subtitle {
          font-size: 1.2rem;
          color: rgba(255, 255, 255, 0.6);
          max-width: 600px;
          margin: 0 auto;
        }

        .values-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 30px;
        }

        .value-card {
          position: relative;
          padding: 50px 35px;
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid rgba(255, 255, 255, 0.1);
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
          overflow: hidden;
        }

        .value-card::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 4px;
          background: linear-gradient(90deg, rgba(210, 180, 140, 0.8), rgba(210, 180, 140, 0.2));
          transform: scaleX(0);
          transform-origin: left;
          transition: transform 0.5s ease;
        }

        .value-card:hover {
          background: rgba(255, 255, 255, 0.05);
          border-color: rgba(210, 180, 140, 0.3);
          transform: translateY(-10px);
        }

        .value-card:hover::before {
          transform: scaleX(1);
        }

        .value-icon-wrapper {
          width: 80px;
          height: 80px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: rgba(210, 180, 140, 0.1);
          border: 1px solid rgba(210, 180, 140, 0.3);
          margin-bottom: 25px;
          transition: all 0.4s ease;
        }

        .value-card:hover .value-icon-wrapper {
          background: rgba(210, 180, 140, 0.2);
          transform: scale(1.1);
        }

        .value-icon {
          color: rgba(210, 180, 140, 0.9);
        }

        .value-title {
          font-size: 1.5rem;
          font-weight: 700;
          color: white;
          margin: 0 0 15px 0;
        }

        .value-description {
          font-size: 1rem;
          line-height: 1.7;
          color: rgba(255, 255, 255, 0.6);
          margin: 0;
        }

        .value-number {
          position: absolute;
          bottom: 20px;
          right: 30px;
          font-size: 5rem;
          font-weight: 700;
          color: rgba(255, 255, 255, 0.03);
          line-height: 1;
        }

        /* Timeline Section */
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

        /* Responsive */
        @media (max-width: 1024px) {
          .story-container {
            grid-template-columns: 1fr;
            gap: 60px;
          }

          .hero-stats {
            gap: 30px;
          }

          .stat-number {
            font-size: 2.5rem;
          }
        }

        @media (max-width: 768px) {
          .hero-image-left {
            clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%);
          }

          .hero-image-right {
            display: none;
          }

          .hero-stats {
            flex-wrap: wrap;
            gap: 20px;
          }

          .stat-divider {
            display: none;
          }

          .story-section,
          .values-section,
          .timeline-section {
            padding: 80px 20px;
          }

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
        }
      `}</style>
            </div>

            <Footer />
        </>
    );
}