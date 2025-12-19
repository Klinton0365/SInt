"use client";

import { useEffect, useRef } from "react";

export default function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const cursorBorderRef = useRef<HTMLDivElement>(null);
  const cursorPos = useRef({ x: 0, y: 0 });
  const cursorBorderPos = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const cursor = cursorRef.current;
    const cursorBorder = cursorBorderRef.current;
    
    if (!cursor || !cursorBorder) return;

    // Mouse move handler
    const handleMouseMove = (e: MouseEvent) => {
      cursorPos.current.x = e.clientX;
      cursorPos.current.y = e.clientY;
      cursor.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
    };

    // Animation loop for smooth border following
    let animationFrameId: number;
    const loop = () => {
      const easting = 8;
      cursorBorderPos.current.x += (cursorPos.current.x - cursorBorderPos.current.x) / easting;
      cursorBorderPos.current.y += (cursorPos.current.y - cursorBorderPos.current.y) / easting;
      cursorBorder.style.transform = `translate(${cursorBorderPos.current.x}px, ${cursorBorderPos.current.y}px)`;
      animationFrameId = requestAnimationFrame(loop);
    };

    // Handle hover effects for ALL interactive elements
    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      
      // Check for specific data-cursor attribute first
      const cursorType = target.getAttribute("data-cursor");
      
      if (cursorType === "pointer") {
        cursorBorder.style.backgroundColor = "rgba(0, 0, 0, .6)";
        cursorBorder.style.setProperty("--size", "30px");
      } else if (cursorType === "pointer2") {
        cursorBorder.style.backgroundColor = "black";
        cursorBorder.style.mixBlendMode = "difference";
        cursorBorder.style.setProperty("--size", "80px");
      }
      // Default hover effect for all clickable elements (buttons, links, etc)
      else if (
        target.tagName === "BUTTON" ||
        target.tagName === "A" ||
        target.tagName === "INPUT" ||
        target.tagName === "TEXTAREA" ||
        target.tagName === "SELECT" ||
        target.classList.contains("cursor-pointer") ||
        target.role === "button" ||
        target.onclick !== null
      ) {
        // Get the background color of the element
        const bgColor = window.getComputedStyle(target).backgroundColor;
        const isDark = isColorDark(bgColor);
        
        if (isDark) {
          // Use white/light cursor on dark backgrounds with difference blend mode
          cursor.style.backgroundColor = "white";
          cursorBorder.style.backgroundColor = "rgba(255, 255, 255, .8)";
          cursorBorder.style.mixBlendMode = "difference";
        } else {
          // Use black cursor on light backgrounds
          cursor.style.backgroundColor = "black";
          cursorBorder.style.backgroundColor = "rgba(0, 0, 0, .6)";
          cursorBorder.style.mixBlendMode = "normal";
        }
        cursorBorder.style.setProperty("--size", "30px");
      }
    };
    
    // Helper function to determine if a color is dark
    const isColorDark = (color: string): boolean => {
      // Parse rgb/rgba color
      const rgb = color.match(/\d+/g);
      if (!rgb || rgb.length < 3) return false;
      
      const r = parseInt(rgb[0]);
      const g = parseInt(rgb[1]);
      const b = parseInt(rgb[2]);
      
      // Calculate relative luminance
      const luminance = (0.299 * r + 0.587 * g + 0.114 * b) / 255;
      
      return luminance < 0.5;
    };

    const handleMouseOut = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      
      // Reset on mouseout from any interactive element
      if (
        target.hasAttribute("data-cursor") ||
        target.tagName === "BUTTON" ||
        target.tagName === "A" ||
        target.tagName === "INPUT" ||
        target.tagName === "TEXTAREA" ||
        target.tagName === "SELECT" ||
        target.classList.contains("cursor-pointer") ||
        target.role === "button" ||
        target.onclick !== null
      ) {
        cursor.style.backgroundColor = "black";
        cursorBorder.style.backgroundColor = "unset";
        cursorBorder.style.mixBlendMode = "unset";
        cursorBorder.style.setProperty("--size", "50px");
      }
    };

    // Add event listeners
    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseover", handleMouseOver);
    document.addEventListener("mouseout", handleMouseOut);
    
    // Start animation loop
    animationFrameId = requestAnimationFrame(loop);

    // Cleanup
    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseover", handleMouseOver);
      document.removeEventListener("mouseout", handleMouseOut);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <>
      <div
        ref={cursorRef}
        className="fixed top-[-5px] left-[-5px] w-[10px] h-[10px] bg-black rounded-full pointer-events-none z-[999]"
      />
      <div
        ref={cursorBorderRef}
        className="fixed rounded-full pointer-events-none z-[999] transition-all duration-150 ease-out"
        style={{
          "--size": "50px",
          top: "calc(var(--size) / -2)",
          left: "calc(var(--size) / -2)",
          width: "var(--size)",
          height: "var(--size)",
          boxShadow: "0 0 0 1px black",
        } as React.CSSProperties}
      />
    </>
  );
}