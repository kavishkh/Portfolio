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

      setTrail((prev) => [...prev.slice(-8), newTrail]);
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
      setTrail((prev) => prev.slice(-8));
    }, 50);

    return () => clearInterval(cleanupInterval);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 pointer-events-none z-50">
      {/* Main cursor glow */}
      <motion.div
        animate={{
          x: mousePosition.x - 20,
          y: mousePosition.y - 20,
        }}
        transition={{
          type: "spring",
          stiffness: 500,
          damping: 28,
          mass: 0.5,
        }}
        className="absolute w-10 h-10 rounded-full border-2 border-primary/50 glow-cyan"
        style={{
          background: "radial-gradient(circle, hsl(180 100% 50% / 0.2), transparent 70%)",
        }}
      />

      {/* Trail particles */}
      {trail.map((point, index) => (
        <motion.div
          key={point.id}
          initial={{
            x: point.x - 3,
            y: point.y - 3,
            opacity: 1,
            scale: 1,
          }}
          animate={{
            opacity: 0,
            scale: 0,
          }}
          transition={{
            duration: 0.6,
            ease: "easeOut",
          }}
          className="absolute w-2 h-2 rounded-full"
          style={{
            background:
              index % 3 === 0
                ? "hsl(180 100% 50%)"
                : index % 3 === 1
                ? "hsl(270 100% 60%)"
                : "hsl(320 100% 60%)",
            boxShadow:
              index % 3 === 0
                ? "0 0 10px hsl(180 100% 50%)"
                : index % 3 === 1
                ? "0 0 10px hsl(270 100% 60%)"
                : "0 0 10px hsl(320 100% 60%)",
          }}
        />
      ))}

      {/* Center dot */}
      <motion.div
        animate={{
          x: mousePosition.x - 2,
          y: mousePosition.y - 2,
        }}
        transition={{
          type: "spring",
          stiffness: 1000,
          damping: 35,
        }}
        className="absolute w-1 h-1 rounded-full bg-white"
        style={{
          boxShadow: "0 0 8px hsl(180 100% 50%), 0 0 16px hsl(180 100% 50% / 0.5)",
        }}
      />
    </div>
  );
};

export default CosmicCursor;
