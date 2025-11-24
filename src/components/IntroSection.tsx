'use client';

import React, { useState } from 'react';

const HeroSection = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const [isHovering, setIsHovering] = useState(false);
  
  const images = [
    'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=400&h=200&fit=crop',
    'https://images.unsplash.com/photo-1600210492493-0946911123ea?w=400&h=200&fit=crop',
    'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=400&h=200&fit=crop'
  ];

  React.useEffect(() => {
    let interval: NodeJS.Timeout;
    if (isHovering) {
      interval = setInterval(() => {
        setCurrentImage(prev => (prev + 1) % images.length);
      }, 1500);
    }
    return () => clearInterval(interval);
  }, [isHovering, images.length]);

  return (
    <section className="w-full bg-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto text-center">
        {/* Main Heading */}
        <h1 className="font-medium mb-8" style={{ fontSize: '90px', lineHeight: '100px', letterSpacing: '-2px' }}>
          <span className="text-gray-900">Transform{' '}</span>
          <span 
            className="inline-flex items-center justify-center relative cursor-pointer group"
            onMouseEnter={() => setIsHovering(true)}
            onMouseLeave={() => {
              setIsHovering(false);
              setCurrentImage(0);
            }}
          >
            <span 
              className="relative overflow-hidden transition-all duration-500 ease-in-out"
              style={{
                width: '180px',
                height: '80px',
                borderRadius: '50px',
                display: 'inline-block',
                verticalAlign: 'middle',
                margin: '0 15px'
              }}
            >
              {images.map((img, index) => (
                <img
                  key={index}
                  src={img}
                  alt="Interior Design"
                  className="absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ease-in-out"
                  style={{
                    borderRadius: '50px',
                    opacity: currentImage === index ? 1 : 0,
                  }}
                />
              ))}
              <div 
                className="absolute inset-0 bg-gradient-to-r from-blue-400/20 to-blue-600/20 group-hover:from-blue-500/30 group-hover:to-blue-700/30 transition-all duration-500"
                style={{ borderRadius: '50px' }}
              />
            </span>
          </span>
          <span className="text-gray-900">{' '}Spaces</span>
          <br />
          <span className="bg-gradient-to-r from-orange-500 via-orange-600 to-red-600 bg-clip-text text-transparent">
            into Works of Art
          </span>
        </h1>
        
        {/* Subheading */}
        <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed font-light">
          Our team of expert designers works closely with clients to create unique, functional and beautiful spaces that are tailored to their specific needs and preferences.
        </p>
      </div>
    </section>
  );
};

export default HeroSection;