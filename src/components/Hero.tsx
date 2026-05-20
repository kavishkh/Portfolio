import { motion } from "framer-motion";
import MoonScene from "./MoonScene";

const Hero = () => {
  return (
    <section id="hero" className="relative flex min-h-svh items-center justify-center overflow-hidden px-4 pb-16 pt-24 sm:px-6 lg:pb-0 lg:pt-20">
      <div className="container relative z-10 mx-auto px-0">
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-12">
          {/* Text content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left space-y-6"
          >
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false }}
              transition={{ delay: 0.2 }}
              className="text-4xl font-bold leading-tight sm:text-5xl md:text-6xl lg:text-7xl"
            >
              <span className="text-light-grey">Kavish Khanna</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false }}
              transition={{ delay: 0.4 }}
              className="text-lg text-foreground sm:text-xl md:text-2xl"
            >
              Developer • Creator • Cosmic Explorer
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false }}
              transition={{ delay: 0.6 }}
              className="mx-auto max-w-xl text-base text-foreground sm:text-lg lg:mx-0"
            >
              Crafting digital experiences that transcend the ordinary.
              Exploring the intersection of code, creativity, and innovation.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false }}
              transition={{ delay: 0.8 }}
              className="flex flex-col justify-center gap-4 sm:flex-row lg:justify-start"
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })}
                className="w-full rounded-lg bg-primary px-8 py-4 font-semibold text-primary-foreground glow-cyan transition-all hover:shadow-lg sm:w-auto"
              >
                View Projects
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
                className="w-full rounded-lg border border-primary px-8 py-4 font-semibold text-primary transition-all hover:bg-primary/10 sm:w-auto"
              >
                Get in Touch
              </motion.button>
            </motion.div>
          </motion.div>

          {/* Moon — visible on lg+, smaller on md */}
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="hidden h-[500px] lg:block xl:h-[600px]"
          >
            <MoonScene />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
