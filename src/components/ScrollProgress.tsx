"use client";
import { useEffect, useState } from "react";

const ScrollProgress = () => {
  const [progress, setProgress] = useState(0);

  const calculateScrollProgress = () => {
    const scrollTop = window.scrollY;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const scrolled = (scrollTop / docHeight) * 100;
    setProgress(scrolled);
  };

  useEffect(() => {
    window.addEventListener("scroll", calculateScrollProgress);
    return () => window.removeEventListener("scroll", calculateScrollProgress);
  }, []);

  const radius = 25;
  const circumference = 2 * Math.PI * radius;

  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      style={{
        position: "fixed",
        bottom: "30px",
        right: "30px",
        zIndex: 9999,
        width: "60px",
        height: "60px",
        borderRadius: "50%",
        background: "transparent",
        border: "none",
        cursor: "pointer",
      }}
    >
      <svg width="60" height="60" style={{ transform: "rotate(-90deg)" }}>
        <circle
          cx="30"
          cy="30"
          r={radius}
          stroke="#e4daff"
          strokeWidth="6"
          fill="none"
        />
        <circle
          cx="30"
          cy="30"
          r={radius}
          stroke="#7b61ff"
          strokeWidth="6"
          fill="none"
          strokeDasharray={circumference}
          strokeDashoffset={circumference - (progress / 100) * circumference}
          strokeLinecap="round"
          style={{
            transition: "stroke-dashoffset 0.2s",
          }}
        />
      </svg>

      <span
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%) rotate(0deg)", // correct direction
          fontSize: "18px",
          fontWeight: 600,
          color: "#7b61ff",
        }}
      >
        ↑
      </span>
    </button>
  );
};

export default ScrollProgress;
