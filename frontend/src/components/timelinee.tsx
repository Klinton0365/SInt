"use client";
import {
  useScroll,
  useTransform,
  motion,
} from "framer-motion";
import React, { useEffect, useRef, useState } from "react";

interface TimelineEntry {
  title: string;
  content: React.ReactNode;
}

export const Timeline = ({ data }: { data: TimelineEntry[] }) => {
  const ref = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (ref.current) {
      const rect = ref.current.getBoundingClientRect();
      setHeight(rect.height);
    }
  }, [ref]);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 10%", "end 50%"],
  });

  const heightTransform = useTransform(scrollYProgress, [0, 1], [0, height]);
  const opacityTransform = useTransform(scrollYProgress, [0, 0.1], [0, 1]);

  return (
    <div
      className="w-full bg-white font-sans md:px-10"
      ref={containerRef}
    >
      <div className="max-w-7xl mx-auto py-20 px-4 md:px-8 lg:px-10">
        <p className="text-sm uppercase tracking-wider text-muted-foreground mb-4">Our Milestones</p>
        <h2 className="text-lg md:text-4xl mb-4 text-foreground max-w-4xl font-bold">
          The Journey So Far
        </h2>
        <p className="text-muted-foreground text-sm md:text-base max-w-sm">
          A timeline of our growth and achievements over the years.
        </p>
      </div>

      <div ref={ref} className="relative max-w-7xl mx-auto pb-20">
        {data.map((item, index) => {
          const isEven = index % 2 === 0;
          return (
            <div
              key={index}
              className={`flex pt-10 md:pt-40 md:gap-10 ${
                isEven ? 'md:flex-row flex-row' : 'md:flex-row-reverse flex-row'
              }`}
            >
              {/* Content side */}
              <div className={`relative w-full md:w-1/2 ${isEven ? 'md:pr-16 md:text-right' : 'md:pl-16 md:text-left'} pl-20 md:pl-0`}>
                <h3 className="md:hidden block text-2xl mb-4 text-left font-bold text-timeline-year">
                  {item.title}
                </h3>
                <h3 className={`hidden md:block text-xl md:text-5xl font-bold text-timeline-year mb-4`}>
                  {item.title}
                </h3>
                <div className={isEven ? 'md:text-right' : 'md:text-left'}>
                  {item.content}
                </div>
              </div>

              {/* Center marker - visible on desktop */}
              <div className="hidden md:flex flex-col items-center absolute left-1/2 -translate-x-1/2">
                <div className="h-10 w-10 rounded-full bg-background flex items-center justify-center z-40">
                  <div className="h-4 w-4 rounded-full bg-timeline-dot border border-timeline-border" />
                </div>
              </div>

              {/* Mobile marker */}
              <div className="md:hidden absolute left-8 h-10 w-10 rounded-full bg-background flex items-center justify-center z-40">
                <div className="h-4 w-4 rounded-full bg-timeline-dot border border-timeline-border" />
              </div>

              {/* Empty space for the other side on desktop */}
              <div className="hidden md:block w-1/2" />
            </div>
          );
        })}
        <div
          style={{
            height: height + "px",
          }}
          className="absolute left-8 md:left-1/2 md:-translate-x-1/2 top-0 overflow-hidden w-[2px] bg-[linear-gradient(to_bottom,var(--tw-gradient-stops))] from-transparent from-[0%] via-timeline-line to-transparent to-[99%] [mask-image:linear-gradient(to_bottom,transparent_0%,black_10%,black_90%,transparent_100%)]"
        >
          <motion.div
            style={{
              height: heightTransform,
              opacity: opacityTransform,
            }}
            className="absolute inset-x-0 top-0 w-[2px] bg-gradient-to-t from-timeline-accent via-timeline-accent-secondary to-transparent from-[0%] via-[10%] rounded-full"
          />
        </div>
      </div>
    </div>
  );
};
