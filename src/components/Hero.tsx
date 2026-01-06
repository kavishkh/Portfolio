import { motion } from "framer-motion";
import MoonScene from "./MoonScene";

const Hero = () => {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 sm:pt-24 md:pt-0">
      <div className="container mx-auto px-4 sm:px-6 z-10 relative">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.8 }}
            className="text-left space-y-4 sm:space-y-6"
          >
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false }}
              transition={{ delay: 0.2 }}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold"
            >
              <span className="text-light-grey">Kavish Khanna</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false }}
              transition={{ delay: 0.4 }}
              className="text-lg sm:text-xl md:text-2xl text-foreground"
            >
              Developer • Creator • Cosmic Explorer
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false }}
              transition={{ delay: 0.6 }}
              className="text-base sm:text-lg text-foreground max-w-xl"
            >
              Crafting digital experiences that transcend the ordinary.
              Exploring the intersection of code, creativity, and innovation.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false }}
              transition={{ delay: 0.8 }}
              className="flex flex-col sm:flex-row gap-4 pt-4"
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })}
                className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 bg-primary text-primary-foreground rounded-lg font-semibold glow-cyan hover:shadow-lg transition-all text-base sm:text-lg"
              >
                View Projects
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
                className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 border border-primary text-primary rounded-lg font-semibold hover:bg-primary/10 transition-all text-base sm:text-lg"
              >
                Get in Touch
              </motion.button>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="hidden lg:block h-[600px]"
          >
            <MoonScene />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
