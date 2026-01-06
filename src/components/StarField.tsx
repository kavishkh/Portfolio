import { useEffect, useRef } from "react";

const StarField = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    canvas.width = window.innerWidth;
    canvas.height = document.body.scrollHeight;

    const stars: { x: number; y: number; size: number; opacity: number }[] = [];
    const numStars = 200;

    for (let i = 0; i < numStars; i++) {
      stars.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * 2,
        opacity: Math.random(),
      });
    }

    const drawStars = (scrollY: number) => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      stars.forEach((star) => {
        ctx.beginPath();
        ctx.arc(star.x, star.y - scrollY * 0.5, star.size, 0, Math.PI * 2);
        
        // Random color for variety
        const colors = [
          `rgba(255, 255, 255, ${star.opacity})`,
          `rgba(100, 255, 255, ${star.opacity})`,
          `rgba(200, 150, 255, ${star.opacity})`,
          `rgba(255, 100, 200, ${star.opacity})`,
        ];
        const colorIndex = Math.floor((star.x + star.y) % colors.length);
        ctx.fillStyle = colors[colorIndex];
        
        // Add glow effect
        ctx.shadowBlur = star.size * 3;
        ctx.shadowColor = colors[colorIndex];
        ctx.fill();
        ctx.shadowBlur = 0;
      });
    };

    const handleScroll = () => {
      drawStars(window.scrollY);
    };

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = document.body.scrollHeight;
      drawStars(window.scrollY);
    };

    drawStars(0);
    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0"
      style={{ opacity: 0.8 }}
    />
  );
};

export default StarField;
