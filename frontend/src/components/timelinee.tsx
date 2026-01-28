"use client";
import {
  useScroll,
  useTransform,
  motion,
  useInView,
  useSpring,
  MotionValue,
} from "framer-motion";

import React, { useEffect, useRef, useState } from "react";

interface TimelineEntry {
  title: string;
  content: React.ReactNode;
}

// Individual timeline item with its own scroll-triggered animations
const TimelineItem = ({
  item,
  index,
  scrollYProgress,
}: {
  item: TimelineEntry;
  index: number;
  scrollYProgress: MotionValue<number>;
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: false, margin: "-100px" });
  const isEven = index % 2 === 0;

  // Calculate the progress for this specific item
  const itemProgress = useTransform(
    scrollYProgress,
    [index * 0.15, index * 0.15 + 0.2],
    [0, 1]
  );

  const smoothProgress = useSpring(itemProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <div
      ref={ref}
      className={`flex pt-10 md:pt-40 md:gap-10 ${
        isEven ? "md:flex-row flex-row" : "md:flex-row-reverse flex-row"
      }`}
    >
      {/* Content side */}
      <motion.div
        className={`relative w-full md:w-1/2 ${
          isEven ? "md:pr-20 md:text-right" : "md:pl-20 md:text-left"
        } pl-20 md:pl-0`}
        initial={{
          opacity: 0,
          x: isEven ? -100 : 100,
          filter: "blur(10px)",
          scale: 0.8,
        }}
        animate={
          isInView
            ? {
                opacity: 1,
                x: 0,
                filter: "blur(0px)",
                scale: 1,
              }
            : {
                opacity: 0,
                x: isEven ? -100 : 100,
                filter: "blur(10px)",
                scale: 0.8,
              }
        }
        transition={{
          duration: 0.8,
          ease: [0.25, 0.4, 0.25, 1],
          delay: 0.1,
        }}
      >
        {/* Title with character stagger animation */}
        <motion.h3
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {item.title}
        </motion.h3>

        <motion.h3
          className="hidden md:block text-xl md:text-6xl font-bold bg-gradient-to-r from-amber-500 via-orange-500 to-red-500 bg-clip-text text-transparent mb-6"
          initial={{ opacity: 0, y: 30, rotateX: -30 }}
          animate={
            isInView
              ? { opacity: 1, y: 0, rotateX: 0 }
              : { opacity: 0, y: 30, rotateX: -30 }
          }
          transition={{
            duration: 0.7,
            ease: [0.25, 0.4, 0.25, 1],
            delay: 0.15,
          }}
          style={{ perspective: "1000px" }}
        >
          {item.title}
        </motion.h3>

        {/* Content with staggered reveal */}
        <motion.div
          className={`${isEven ? "md:text-right" : "md:text-left"} relative`}
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{
            duration: 0.8,
            ease: [0.25, 0.4, 0.25, 1],
            delay: 0.3,
          }}
        >
          {/* Decorative gradient blur behind content */}
          <motion.div
            className="absolute inset-0 -z-10 rounded-3xl"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={
              isInView
                ? { opacity: 0.5, scale: 1 }
                : { opacity: 0, scale: 0.8 }
            }
            transition={{ duration: 1, delay: 0.4 }}
            style={{
              background: isEven
                ? "radial-gradient(ellipse at right, rgba(251, 191, 36, 0.1) 0%, transparent 70%)"
                : "radial-gradient(ellipse at left, rgba(251, 191, 36, 0.1) 0%, transparent 70%)",
            }}
          />
          {item.content}
        </motion.div>
      </motion.div>

      {/* Center marker - visible on desktop */}
      <div className="hidden md:flex flex-col items-center absolute left-1/2 -translate-x-1/2">
        <motion.div
          className="h-14 w-14 rounded-full bg-gradient-to-br from-slate-900 to-slate-800 flex items-center justify-center z-40 relative"
          initial={{ scale: 0, rotate: -180 }}
          animate={
            isInView ? { scale: 1, rotate: 0 } : { scale: 0, rotate: -180 }
          }
          transition={{
            type: "spring",
            stiffness: 200,
            damping: 15,
            delay: 0.05,
          }}
        >
          {/* Outer glow ring */}
          <motion.div
            className="absolute inset-0 rounded-full"
            animate={
              isInView
                ? {
                    boxShadow: [
                      "0 0 0 0 rgba(251, 191, 36, 0)",
                      "0 0 0 20px rgba(251, 191, 36, 0)",
                    ],
                  }
                : {}
            }
            transition={{
              duration: 1.5,
              repeat: Infinity,
              repeatDelay: 1,
            }}
          />

          {/* Pulsing glow */}
          <motion.div
            className="absolute inset-0 rounded-full bg-amber-500/30"
            animate={
              isInView
                ? {
                    scale: [1, 1.8, 1],
                    opacity: [0.5, 0, 0.5],
                  }
                : { scale: 1, opacity: 0 }
            }
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />

          {/* Inner dot */}
          <motion.div
            className="h-5 w-5 rounded-full bg-gradient-to-br from-amber-400 to-orange-500 relative z-10"
            animate={
              isInView
                ? {
                    boxShadow: [
                      "0 0 20px rgba(251, 191, 36, 0.8)",
                      "0 0 40px rgba(251, 191, 36, 1)",
                      "0 0 20px rgba(251, 191, 36, 0.8)",
                    ],
                  }
                : {}
            }
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        </motion.div>
      </div>

      {/* Mobile marker */}
      <div className="md:hidden absolute left-6">
        <motion.div
          className="h-12 w-12 rounded-full bg-slate-900 flex items-center justify-center z-40 relative"
          initial={{ scale: 0 }}
          animate={isInView ? { scale: 1 } : { scale: 0 }}
          transition={{
            type: "spring",
            stiffness: 200,
            damping: 15,
          }}
        >
          <motion.div
            className="absolute inset-0 rounded-full bg-amber-500/30"
            animate={
              isInView
                ? {
                    scale: [1, 1.5, 1],
                    opacity: [0.3, 0, 0.3],
                  }
                : {}
            }
            transition={{
              duration: 2,
              repeat: Infinity,
            }}
          />
          <motion.div
            className="h-4 w-4 rounded-full bg-gradient-to-br from-amber-400 to-orange-500"
            animate={
              isInView
                ? {
                    boxShadow: [
                      "0 0 15px rgba(251, 191, 36, 0.6)",
                      "0 0 25px rgba(251, 191, 36, 0.9)",
                      "0 0 15px rgba(251, 191, 36, 0.6)",
                    ],
                  }
                : {}
            }
            transition={{ duration: 2, repeat: Infinity }}
          />
        </motion.div>
      </div>

      {/* Empty space for the other side on desktop */}
      <div className="hidden md:block w-1/2" />
    </div>
  );
};

// Floating particles component
const FloatingParticles = () => {
  const particles = Array.from({ length: 20 }, (_, i) => ({
    id: i,
    size: Math.random() * 4 + 2,
    x: Math.random() * 100,
    duration: Math.random() * 20 + 15,
    delay: Math.random() * 10,
  }));

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute rounded-full bg-amber-400/20"
          style={{
            width: particle.size,
            height: particle.size,
            left: `${particle.x}%`,
            top: "100%",
          }}
          animate={{
            y: [0, -2000],
            opacity: [0, 1, 1, 0],
            scale: [0, 1, 1, 0],
          }}
          transition={{
            duration: particle.duration,
            repeat: Infinity,
            delay: particle.delay,
            ease: "linear",
          }}
        />
      ))}
    </div>
  );
};

export const Timeline = ({ data }: { data: TimelineEntry[] }) => {
  const ref = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState(0);
  const headerRef = useRef<HTMLDivElement>(null);
  const headerInView = useInView(headerRef, { once: true });

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

  // Smooth spring animation for the line
  const smoothHeight = useSpring(heightTransform, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <div
      className="w-full bg-white font-sans md:px-10 relative overflow-hidden"
      ref={containerRef}
    >
      {/* Animated background gradient */}
      <motion.div
        className="absolute inset-0 opacity-30"
        animate={{
          background: [
            "radial-gradient(ellipse at 20% 20%, rgba(251, 191, 36, 0.15) 0%, transparent 50%)",
            "radial-gradient(ellipse at 80% 80%, rgba(251, 191, 36, 0.15) 0%, transparent 50%)",
            "radial-gradient(ellipse at 20% 80%, rgba(251, 191, 36, 0.15) 0%, transparent 50%)",
            "radial-gradient(ellipse at 80% 20%, rgba(251, 191, 36, 0.15) 0%, transparent 50%)",
            "radial-gradient(ellipse at 20% 20%, rgba(251, 191, 36, 0.15) 0%, transparent 50%)",
          ],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear",
        }}
      />

      {/* Floating particles */}
      <FloatingParticles />

      {/* Grid pattern overlay */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(rgba(251, 191, 36, 0.5) 1px, transparent 1px), 
                           linear-gradient(90deg, rgba(251, 191, 36, 0.5) 1px, transparent 1px)`,
          backgroundSize: "50px 50px",
        }}
      />

      {/* Header section with reveal animation */}
      <div
        ref={headerRef}
        className="max-w-7xl mx-auto py-20 px-4 md:px-8 lg:px-10 relative z-10"
      >
        <motion.p
          className="text-sm uppercase tracking-[0.3em] text-amber-500/80 mb-6 font-medium"
          initial={{ opacity: 0, y: 20, letterSpacing: "0.1em" }}
          animate={
            headerInView
              ? { opacity: 1, y: 0, letterSpacing: "0.3em" }
              : { opacity: 0, y: 20 }
          }
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Our Milestones
        </motion.p>

        <motion.h2
          className="text-4xl md:text-7xl mb-6 text-blue max-w-4xl font-bold leading-tight"
          initial={{ opacity: 0, y: 40, filter: "blur(10px)" }}
          animate={
            headerInView
              ? { opacity: 1, y: 0, filter: "blur(0px)" }
              : { opacity: 0, y: 40, filter: "blur(10px)" }
          }
          transition={{ duration: 1, delay: 0.4, ease: [0.25, 0.4, 0.25, 1] }}
        >
          The Journey
          <motion.span
            className="block bg-gradient-to-r from-amber-400 via-orange-500 to-red-500 bg-clip-text text-transparent"
            initial={{ opacity: 0, x: -50 }}
            animate={
              headerInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }
            }
            transition={{ duration: 0.8, delay: 0.7 }}
          >
            So Far
          </motion.span>
        </motion.h2>

        <motion.p
          className="text-slate-400 text-lg md:text-xl max-w-lg leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          animate={headerInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8, delay: 0.9 }}
        >
          A timeline of our growth and achievements over the years.
        </motion.p>

        {/* Decorative line */}
        <motion.div
          className="mt-10 h-px bg-gradient-to-r from-amber-500/50 via-orange-500/30 to-transparent max-w-md"
          initial={{ scaleX: 0, opacity: 0 }}
          animate={
            headerInView ? { scaleX: 1, opacity: 1 } : { scaleX: 0, opacity: 0 }
          }
          transition={{ duration: 1.2, delay: 1.1 }}
          style={{ transformOrigin: "left" }}
        />
      </div>

      <div ref={ref} className="relative max-w-7xl mx-auto pb-20">
        {data.map((item, index) => (
          <TimelineItem
            key={index}
            item={item}
            index={index}
            scrollYProgress={scrollYProgress}
          />
        ))}

        {/* Timeline vertical line with enhanced effects */}
        <div
          style={{
            height: height + "px",
          }}
          className="absolute left-6 md:left-1/2 md:-translate-x-1/2 top-0 overflow-hidden w-[3px] bg-slate-800 rounded-full"
        >
          {/* Animated gradient fill */}
          <motion.div
            style={{
              height: smoothHeight,
              opacity: opacityTransform,
            }}
            className="absolute inset-x-0 top-0 w-[3px] rounded-full relative overflow-hidden"
          >
            {/* Main gradient line */}
            <div className="absolute inset-0 bg-gradient-to-b from-amber-400 via-orange-500 to-red-500" />

            {/* Animated shimmer effect */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-b from-transparent via-white/50 to-transparent"
              animate={{
                y: ["-100%", "200%"],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "linear",
              }}
            />

            {/* Glow effect at the bottom */}
            <motion.div
              className="absolute bottom-0 left-1/2 -translate-x-1/2 w-6 h-20 bg-gradient-to-t from-amber-400/80 to-transparent blur-lg"
              animate={{
                opacity: [0.5, 1, 0.5],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          </motion.div>

          {/* Static glow behind the line */}
          <div className="absolute inset-0 w-[3px] bg-amber-500/20 blur-sm" />
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-slate-950 to-transparent pointer-events-none" />
    </div>
  );
};