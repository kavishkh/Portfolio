import { useEffect, useState } from "react";
import { motion } from "framer-motion";

interface Trail {
  id: number;
  x: number;
  y: number;
}

const CosmicCursor = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [trail, setTrail] = useState<Trail[]>([]);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const updateMousePosition = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
      setIsVisible(true);

      const newTrail: Trail = {
        id: Date.now(),
        x: e.clientX,
        y: e.clientY,
      };

      setTrail((prev) => [...prev.slice(-12), newTrail]);
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    window.addEventListener("mousemove", updateMousePosition);
    document.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      window.removeEventListener("mousemove", updateMousePosition);
      document.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  useEffect(() => {
    const cleanupInterval = setInterval(() => {
      setTrail((prev) => prev.slice(-12));
    }, 50);

    return () => clearInterval(cleanupInterval);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 pointer-events-none z-50 mix-blend-screen">
      {/* Main cursor - Realistic Star */}
      <motion.div
        animate={{
          x: mousePosition.x - 20,
          y: mousePosition.y - 20,
        }}
        transition={{
          type: "spring",
          stiffness: 1000,
          damping: 40,
          mass: 0.2,
        }}
        className="absolute w-10 h-10 flex items-center justify-center"
      >
        {/* Core Glow */}
        <div className="absolute w-2 h-2 bg-white rounded-full shadow-[0_0_15px_2px_rgba(100,200,255,0.8)]" />

        {/* Diffraction Spikes (Cross Flare) */}
        <div className="absolute w-[2px] h-8 bg-gradient-to-b from-transparent via-blue-200 to-transparent opacity-80" />
        <div className="absolute w-8 h-[2px] bg-gradient-to-r from-transparent via-blue-200 to-transparent opacity-80" />

        {/* Secondary Diffraction Spikes (Diagonal) */}
        <div className="absolute w-[1px] h-4 bg-gradient-to-b from-transparent via-cyan-100 to-transparent opacity-60 rotate-45" />
        <div className="absolute w-4 h-[1px] bg-gradient-to-r from-transparent via-cyan-100 to-transparent opacity-60 rotate-45" />
      </motion.div>

      {/* Trail particles - Stardust */}
      {trail.map((point, index) => (
        <motion.div
          key={point.id}
          initial={{
            x: point.x,
            y: point.y,
            opacity: 0.6,
            scale: 0.8,
          }}
          animate={{
            opacity: 0,
            scale: 0,
          }}
          transition={{
            duration: 0.6,
            ease: "easeOut",
          }}
          className="absolute w-1 h-1 bg-blue-200 rounded-full shadow-[0_0_4px_rgba(100,200,255,0.6)]"
          style={{
            marginLeft: -2,
            marginTop: -2,
          }}
        />
      ))}
    </div>
  );
};

export default CosmicCursor;
