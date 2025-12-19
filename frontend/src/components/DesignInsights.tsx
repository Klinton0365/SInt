'use client';
import React from 'react';

const DesignInsights = () => {
  const blogs = [
    {
      id: 1,
      title: "How to Design a Sustainable Home",
      category: "Architecture",
      author: "Jane Collins",
      date: "May 1, 2023",
      image: "/image/insights/blog-1.jpg",
      link: "/blog/1",
      delay: "200ms"
    },
    {
      id: 2,
      title: "The Importance of Lighting Design in Interior Spaces",
      category: "Interior Design",
      author: "Paul Roberts",
      date: "June 15, 2023",
      image: "/image/insights/blog-5.jpg",
      link: "/blog/2",
      delay: "400ms"
    },
    {
      id: 3,
      title: "Creating a Functional Home Office Space",
      category: "Architecture",
      author: "Sarah Gomez",
      date: "August 8, 2023",
      image: "/image/insights/blog-3.jpg",
      link: "/blog/3",
      delay: "600ms"
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 max-w-7xl">
        {/* Section Title */}
        <div className="mb-12">
          <h2 className="text-5xl md:text-[75px] font-medium md:leading-[80px] tracking-tight text-[#171717]">
            Design Insight
          </h2>
        </div>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 mt-16">
          {blogs.map((blog, index) => (
            <div
              key={blog.id}
              className="group animate-fadeInUp"
              style={{
                animationDelay: blog.delay,
                animationFillMode: 'both'
              }}
            >
              <article className="h-full flex flex-col">
                {/* Blog Image */}
                <div className="relative overflow-hidden mb-6 aspect-[4/3]">
                  <img
                    src={blog.image}
                    alt={blog.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>

                {/* Category */}
                <p className="text-gray-500 text-sm mb-4 uppercase tracking-wider">
                  {blog.category}
                </p>

                {/* Blog Title */}
                <h3 className="mb-6 flex-1">
                  <a
                    href={blog.link}
                    className="text-2xl md:text-3xl font-bold text-gray-900 hover:text-gray-600 transition-colors duration-300 leading-tight block"
                  >
                    {blog.title}
                  </a>
                </h3>

                {/* Blog Info */}
                <div className="flex items-center justify-between text-sm text-gray-500">
                  <p>by {blog.author}</p>
                  <p>{blog.date}</p>
                </div>
              </article>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fadeInUp {
          animation: fadeInUp 0.8s ease-out;
        }
      `}</style>
    </section>
  );
};

export default DesignInsights;