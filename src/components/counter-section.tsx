'use client';
import React, { useState, useEffect, useRef } from 'react';

interface CounterItemProps {
  end: string;
  label: string;
  duration?: number;
}

const CounterItem: React.FC<CounterItemProps> = ({ end, label, duration = 2000 }) => {
  const [count, setCount] = useState('0');
  const [isVisible, setIsVisible] = useState(false);
  const counterRef = useRef<HTMLDivElement>(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimated.current) {
            setIsVisible(true);
            hasAnimated.current = true;
          }
        });
      },
      { threshold: 0.3 }
    );

    if (counterRef.current) {
      observer.observe(counterRef.current);
    }

    return () => {
      if (counterRef.current) {
        observer.unobserve(counterRef.current);
      }
    };
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    // Extract number and suffix (like %, +)
    const match = end.match(/^(\d+(?:,\d+)?)(.*)$/);
    if (!match) {
      setCount(end);
      return;
    }

    const numericPart = match[1].replace(/,/g, '');
    const suffix = match[2];
    const target = parseInt(numericPart, 10);

    let startTime: number | null = null;
    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / duration, 1);

      // Easing function for smooth animation
      const easeOutQuart = 1 - Math.pow(1 - progress, 4);
      const current = Math.floor(easeOutQuart * target);

      // Format with comma for thousands
      const formatted = current.toLocaleString();
      setCount(formatted + suffix);

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  }, [isVisible, end, duration]);

  return (
    <div ref={counterRef} className="single-counter-box">
      <p className={`counter-number ${isVisible ? 'animate' : ''}`}>
        <span>{count}</span>
      </p>
      <h6 className={isVisible ? 'animate' : ''}>{label}</h6>
    </div>
  );
};

const CounterSection: React.FC = () => {
  const counters = [
    { end: '1,037', label: 'Project Completed' },
    { end: '156', label: 'Qualified Team' },
    { end: '90%', label: 'Client Satisfaction' },
    { end: '30+', label: 'Years of Experience' }
  ];

  return (
    <div className="counter-section">
      <div className="container">
        <div className="row">
          {counters.map((counter, index) => (
            <div key={index} className="col">
              <CounterItem end={counter.end} label={counter.label} />
            </div>
          ))}
        </div>
      </div>

      <style jsx global>{`
        .counter-section {
          padding: 50px 0;
          background: #fff;
        }

        .container {
          max-width: 1400px;
          margin: 0 auto;
          padding: 0 20px;
        }

        .row {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 40px;
        }

        .single-counter-box {
          text-align: center;
          padding: 20px;
          position: relative;
        }

        .single-counter-box::after {
          content: '';
          position: absolute;
          right: 0;
          top: 50%;
          transform: translateY(-50%);
          width: 1px;
          height: 60%;
          background: rgba(23, 23, 23, 0.1);
        }

        .col:last-child .single-counter-box::after {
          display: none;
        }

        .counter-number {
          margin: 0 0 15px 0;
          font-size: 60px;
          font-weight: 600;
          line-height: 1;
          color: rgb(23, 23, 23);
          opacity: 0;
          transform: translateY(30px);
          transition: all 0.8s cubic-bezier(0.34, 1.56, 0.64, 1);
        }

        .counter-number.animate {
          opacity: 1;
          transform: translateY(0);
        }

        .counter-number span {
          display: inline-block;
        }

        .single-counter-box h6 {
          margin: 0;
          font-size: 16px;
          font-weight: 400;
          color: rgb(99, 99, 99);
          line-height: 1.4;
          opacity: 0;
          transform: translateY(20px);
          transition: all 0.8s cubic-bezier(0.34, 1.56, 0.64, 1) 0.2s;
        }

        .single-counter-box h6.animate {
          opacity: 1;
          transform: translateY(0);
        }

        /* Hover Effect */
        .single-counter-box {
          transition: transform 0.3s ease;
        }

        .single-counter-box:hover {
          transform: translateY(-5px);
        }

        .single-counter-box:hover .counter-number {
          color: rgb(50, 50, 50);
        }

        /* Responsive Design */
        @media (max-width: 1024px) {
          .row {
            grid-template-columns: repeat(2, 1fr);
            gap: 30px;
          }

          .counter-number {
            font-size: 50px;
          }

          .single-counter-box::after {
            display: none;
          }
        }

        @media (max-width: 768px) {
          .row {
            grid-template-columns: 1fr;
            gap: 40px;
          }

          .counter-number {
            font-size: 48px;
          }

          .single-counter-box h6 {
            font-size: 15px;
          }

          .counter-section {
            padding: 40px 0;
          }
        }
      `}</style>
    </div>
  );
};

export default CounterSection;