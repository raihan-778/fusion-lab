"use client";

import { ReactNode, useRef } from "react";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useInView } from "react-intersection-observer";

interface SectionBackgroundProps {
  children: ReactNode;
}

export default function SectionBackground({
  children,
}: SectionBackgroundProps) {
  const sectionRef = useRef<HTMLElement>(null);
  const [inViewRef, inView] = useInView({ threshold: 0.2, triggerOnce: false });

  // Mouse coordinates relative to this section
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const smoothX = useSpring(mouseX, { stiffness: 200, damping: 30 });
  const smoothY = useSpring(mouseY, { stiffness: 200, damping: 30 });

  const handleMouseMove = (e: React.MouseEvent<HTMLElement>) => {\
    if (!sectionRef.current) return;
    const { left, top, width, height } =
      sectionRef.current.getBoundingClientRect();
    mouseX.set((e.clientX - left) / width);
    mouseY.set((e.clientY - top) / height);
  };

  // Parallax multipliers
  const blobX1 = useTransform(smoothX, [0, 1], ["-20%", "20%"]);
  const blobY1 = useTransform(smoothY, [0, 1], ["-20%", "20%"]);
  const blobX2 = useTransform(smoothX, [0, 1], ["20%", "-20%"]);
  const blobY2 = useTransform(smoothY, [0, 1], ["20%", "-20%"]);

  return (
    <section
      ref={(node) => {
        sectionRef.current = node;
        inViewRef(node);
      }}
      className="relative isolate min-h-screen bg-black text-slate-100 overflow-hidden"
      onMouseMove={handleMouseMove}
    >
      {/* 1️⃣  SVG noise texture (section-scoped) */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.1'/%3E%3C/svg%3E")`,
        }}
      />

      {/* 2️⃣  Moving aurora blobs (only animate when in view) */}
      {inView && (
        <>
          <motion.div
            style={{ x: blobX1, y: blobY1 }}
            className="absolute -top-1/4 -left-1/4 w-1/2 h-1/2 bg-gradient-radial from-cyan-500/25 to-transparent rounded-full blur-3xl"
          />
          <motion.div
            style={{ x: blobX2, y: blobY2 }}
            className="absolute -bottom-1/4 -right-1/4 w-1/2 h-1/2 bg-gradient-radial from-purple-600/25 to-transparent rounded-full blur-3xl"
          />
        </>
      )}

      {/* 3️⃣  Custom cursor (only inside this section) */}
      <motion.div
        className="absolute w-5 h-5 rounded-full pointer-events-none mix-blend-difference z-50 bg-white"
        style={{
          x: useTransform(smoothX, [0, 1], ["0%", "100%"]),
          y: useTransform(smoothY, [0, 1], ["0%", "100%"]),
          translateX: "-50%",
          translateY: "-50%",
        }}
      />

      {/* 4️⃣  Children (your booking cards etc.) */}
      <div className="relative z-10">{children}</div>
    </section>
  );
}
