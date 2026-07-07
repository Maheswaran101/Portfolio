import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import HeroCanvas from "./HeroCanvas";

export default function LivingBackground({ image, id }: { image: string; id: string }) {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const updateMousePosition = (ev: MouseEvent) => {
      setMousePosition({ x: ev.clientX, y: ev.clientY });
    };
    window.addEventListener("mousemove", updateMousePosition);
    return () => window.removeEventListener("mousemove", updateMousePosition);
  }, []);

  return (
    <div style={{ position: "fixed", inset: 0, zIndex: 0, overflow: "hidden", backgroundColor: "#020817" }}>
      <AnimatePresence mode="popLayout">
        <motion.div
          key={image}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
          style={{ position: "absolute", top: -50, left: -50, width: "calc(100% + 100px)", height: "calc(100% + 100px)", zIndex: 0 }}
        >
          <img
            src={image}
            className="living-bg-image"
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
          />
        </motion.div>
      </AnimatePresence>
      
      {/* Aceternity Grid Fade Overlay */}
      <div className="bg-grid-pattern" />

      {/* Particles Overlay */}
      <div style={{ position: "absolute", inset: 0, zIndex: 2 }}>
        <HeroCanvas id={id} />
      </div>
      
      {/* Cinematic Vignette Overlay */}
      <div style={{ position: "absolute", inset: 0, background: "radial-gradient(circle at center, rgba(2,8,23,0.45) 0%, rgba(2,8,23,0.9) 100%)", zIndex: 3, pointerEvents: "none" }} />
      
      {/* Aceternity Mouse Spotlight */}
      <div 
        style={{ 
          position: "fixed", 
          inset: 0, 
          zIndex: 4, 
          pointerEvents: "none", 
          background: `radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(168, 85, 247, 0.15), transparent 40%)`,
          transition: "background 0.1s ease"
        }} 
      />
    </div>
  );
}
