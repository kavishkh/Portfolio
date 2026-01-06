import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const Navigation = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
    setMobileMenuOpen(false); // Close mobile menu after navigation
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-card/80 backdrop-blur-lg border-b border-primary/20" : ""
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 py-4">
        <div className="flex items-center justify-between">
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="text-xl sm:text-2xl font-bold text-gradient cursor-pointer z-50"
            onClick={() => scrollToSection("hero")}
          >
            KK
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex gap-6 lg:gap-8">
            {["about", "skills", "projects", "contact"].map((item) => (
              <motion.button
                key={item}
                whileHover={{ scale: 1.1, color: "hsl(180 100% 50%)" }}
                onClick={() => scrollToSection(item)}
                className="capitalize text-foreground hover:text-primary transition-colors font-medium"
              >
                {item}
              </motion.button>
            ))}
          </div>

          {/* Mobile Hamburger Button */}
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden z-50 text-foreground hover:text-primary transition-colors p-2"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </motion.button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ type: "tween", duration: 0.3 }}
            className="md:hidden fixed inset-0 bg-background/95 backdrop-blur-lg z-40 pt-20"
          >
            <div className="flex flex-col items-center justify-center h-full gap-8 px-6">
              {["about", "skills", "projects", "contact"].map((item, index) => (
                <motion.button
                  key={item}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ scale: 1.1, color: "hsl(180 100% 50%)" }}
                  onClick={() => scrollToSection(item)}
                  className="capitalize text-3xl font-bold text-foreground hover:text-primary transition-colors"
                >
                  {item}
                </motion.button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navigation;
