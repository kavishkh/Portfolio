import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const Navigation = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Background Scroll Lock
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [mobileMenuOpen]);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80; // height of navbar
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
    setMobileMenuOpen(false);
  };

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className={`fixed top-0 left-0 right-0 z-[10001] transition-all duration-300 ${(scrolled && !mobileMenuOpen) ? "bg-black/80 backdrop-blur-lg border-b border-white/10" : "bg-transparent"
          }`}
      >
        <div className="max-w-7xl mx-auto px-6 py-5">
          <div className="flex items-center justify-between">
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="text-2xl font-bold text-gradient cursor-pointer relative z-[10002]"
              onClick={() => scrollToSection("hero")}
            >
              KK
            </motion.div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-10">
              {["about", "skills", "projects", "contact"].map((item) => (
                <motion.button
                  key={item}
                  whileHover={{ scale: 1.1, color: "hsl(180 100% 50%)" }}
                  onClick={() => scrollToSection(item)}
                  className="capitalize text-foreground/80 hover:text-primary transition-colors font-medium text-sm tracking-widest"
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
              className="md:hidden relative z-[10002] text-foreground hover:text-primary transition-all p-2"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X size={32} /> : <Menu size={32} />}
            </motion.button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 w-screen h-screen bg-black/60 backdrop-blur-2xl z-[10000] flex flex-col items-center justify-center px-6"
          >
            {/* Background Accent */}
            <div className="absolute inset-0 bg-radial-gradient from-primary/20 to-transparent pointer-events-none opacity-50" />

            <div className="flex flex-col items-center gap-8 relative z-10 w-full max-w-sm">
              {["about", "skills", "projects", "contact"].map((item, index) => (
                <motion.button
                  key={item}
                  initial={{ opacity: 0, scale: 0.9, y: 20 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.9, y: 20 }}
                  transition={{ delay: index * 0.05, duration: 0.3 }}
                  onClick={() => scrollToSection(item)}
                  className="capitalize text-4xl font-bold text-foreground hover:text-primary transition-all tracking-tight w-full py-2"
                >
                  {item}
                </motion.button>
              ))}

              <motion.button
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                transition={{ delay: 0.25, duration: 0.3 }}
                onClick={() => setMobileMenuOpen(false)}
                className="mt-4 flex items-center gap-2 text-foreground/60 hover:text-primary transition-all text-xl font-medium"
              >
                <motion.span
                  animate={{ x: [0, -5, 0] }}
                  transition={{ repeat: Infinity, duration: 1.5 }}
                >
                  ←
                </motion.span>
                Back
              </motion.button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navigation;
