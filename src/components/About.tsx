import { motion } from "framer-motion";

const About = () => {
  return (
    <section id="about" className="relative py-16 sm:py-24 md:py-32 overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-light-grey mb-8 sm:mb-12 text-center">About Me</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false }}
              transition={{ delay: 0.2 }}
              className="bg-card/50 backdrop-blur-sm border border-primary/20 rounded-xl p-6 sm:p-8 hover:border-primary/50 transition-all glow-cyan"
            >
              <h3 className="text-xl sm:text-2xl font-semibold text-light-grey mb-3 sm:mb-4">Who I Am</h3>
              <p className="text-sm sm:text-base text-foreground leading-relaxed">
                A passionate developer who believes in the power of technology to create meaningful change.
                I combine technical expertise with creative vision to build solutions that matter.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false }}
              transition={{ delay: 0.4 }}
              className="bg-card/50 backdrop-blur-sm border border-secondary/20 rounded-xl p-6 sm:p-8 hover:border-secondary/50 transition-all glow-purple"
            >
              <h3 className="text-xl sm:text-2xl font-semibold text-light-grey mb-3 sm:mb-4">What I Do</h3>
              <p className="text-sm sm:text-base text-foreground leading-relaxed">
                From full-stack web applications to innovative mobile solutions, I specialize in turning
                complex problems into elegant, user-friendly experiences.
              </p>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ delay: 0.6 }}
            className="mt-6 sm:mt-8 bg-card/50 backdrop-blur-sm border border-accent/20 rounded-xl p-6 sm:p-8 hover:border-accent/50 transition-all glow-magenta"
          >
            <h3 className="text-xl sm:text-2xl font-semibold text-light-grey mb-3 sm:mb-4">My Mission</h3>
            <p className="text-sm sm:text-base text-foreground leading-relaxed">
              To push the boundaries of what's possible in digital creation, continuously learning and evolving
              to craft experiences that inspire, engage, and make a lasting impact.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
