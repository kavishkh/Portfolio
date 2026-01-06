import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface Star {
  id: number;
  startX: number;
  startY: number;
  duration: number;
  delay: number;
}

const ShootingStars = () => {
  const [stars, setStars] = useState<Star[]>([]);

  useEffect(() => {
    const generateStar = () => {
      const newStar: Star = {
        id: Date.now() + Math.random(),
        startX: Math.random() * 100,
        startY: Math.random() * 50,
        duration: 1 + Math.random() * 1.5,
        delay: 0,
      };

      setStars((prev) => [...prev, newStar]);

      setTimeout(() => {
        setStars((prev) => prev.filter((star) => star.id !== newStar.id));
      }, (newStar.duration + newStar.delay) * 1000);
    };

    const interval = setInterval(() => {
      if (Math.random() > 0.7) {
        generateStar();
      }
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-40 overflow-hidden">
      <AnimatePresence>
        {stars.map((star) => (
          <motion.div
            key={star.id}
            initial={{
              x: `${star.startX}vw`,
              y: `${star.startY}vh`,
              opacity: 0,
              scale: 0,
            }}
            animate={{
              x: `${star.startX + 30}vw`,
              y: `${star.startY + 30}vh`,
              opacity: [0, 1, 1, 0],
              scale: [0, 1, 1, 0],
            }}
            exit={{ opacity: 0 }}
            transition={{
              duration: star.duration,
              delay: star.delay,
              ease: "easeOut",
            }}
            className="absolute"
          >
            <div className="relative">
              <div className="w-1 h-1 bg-white rounded-full glow-cyan" />
              <motion.div
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: star.duration * 0.6 }}
                className="absolute top-0 left-0 w-20 h-px bg-gradient-to-r from-primary via-white to-transparent origin-left"
                style={{ transform: "rotate(-45deg) translateY(-50%)" }}
              />
            </div>
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
};

export default ShootingStars;
