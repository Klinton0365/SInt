'use client'; 
import React from 'react';

const ClientCarousel = () => {
  const clients = [
    { name: 'WeWork', logo: '/image/clients/wework.png' },
    { name: 'SKF', logo: '/image/clients/skf.png' },
    { name: 'Darden', logo: '/image/clients/darden.png' },
    { name: 'Olive Garden', logo: '/image/clients/olive-garden-2.png' },
    { name: 'Goosehead Insurance', logo: '/image/clients/goosehead-insurance.png' },
    { name: 'Thyrocare', logo: '/image/clients/thyrocare.png' },
    { name: 'MetroGhar', logo: '/image/clients/metroghar.png' },
    { name: 'Kingsley Gate', logo: '/image/clients/kingsley-gate.png' },
    { name: 'ICICI Securities', logo: '/image/clients/icici-securities.png' },
    { name: '@sign', logo: '/image/clients/atsign.png' },
    { name: 'Blissclub', logo: '/image/clients/blissclub.png' },
    { name: 'Chant', logo: '/image/clients/chant.png' },
    { name: 'Soccorverse', logo: '/image/clients/soccorverse.png' },
    { name: 'Coin Up', logo: '/image/clients/coinup.png' }
  ];

  // Duplicate the array for seamless infinite scroll
  const duplicatedClients = [...clients, ...clients];

  return (
    <section className="py-12 md:py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-3">
            Trusted By Industry Leaders
          </h2>
          <p className="text-gray-600 text-lg">
            Partnering with the world's most innovative companies
          </p>
        </div>

        <div className="relative overflow-hidden">
          {/* Gradient overlays for fade effect */}
          <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-gray-50 to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-gray-50 to-transparent z-10 pointer-events-none" />

          <div className="flex gap-12 animate-scroll hover:pause-scroll">
            {duplicatedClients.map((client, index) => (
              <div
                key={`${client.name}-${index}`}
                className="flex-shrink-0 w-40 md:w-56 h-20 md:h-28 flex items-center justify-center group cursor-pointer transition-transform duration-300 hover:scale-110"
              >
                <img
                  src={client.logo}
                  alt={client.name}
                  className="max-w-full max-h-full object-contain filter grayscale group-hover:grayscale-0 transition-all duration-500 opacity-60 group-hover:opacity-100"
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        .animate-scroll {
          animation: scroll 40s linear infinite;
          display: flex;
          width: fit-content;
        }

        .hover\\:pause-scroll:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
};

export default ClientCarousel;