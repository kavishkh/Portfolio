import { motion } from "framer-motion";

const About = () => {
  return (
    <section id="about" className="relative overflow-hidden py-20 sm:py-28 lg:py-32">
      <div className="container mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="mb-10 text-center text-3xl font-bold text-light-grey sm:mb-12 sm:text-4xl lg:text-5xl">About Me</h2>

          <div className="grid gap-6 md:grid-cols-2 lg:gap-8">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false }}
              transition={{ delay: 0.2 }}
              className="rounded-lg border border-primary/20 bg-card/50 p-5 backdrop-blur-sm glow-cyan transition-all hover:border-primary/50 sm:p-8"
            >
              <h3 className="text-2xl font-semibold text-light-grey mb-4">Who I Am</h3>
              <p className="text-foreground leading-relaxed">
                A passionate developer who believes in the power of technology to create meaningful change.
                I combine technical expertise with creative vision to build solutions that matter.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false }}
              transition={{ delay: 0.4 }}
              className="rounded-lg border border-secondary/20 bg-card/50 p-5 backdrop-blur-sm glow-purple transition-all hover:border-secondary/50 sm:p-8"
            >
              <h3 className="text-2xl font-semibold text-light-grey mb-4">What I Do</h3>
              <p className="text-foreground leading-relaxed">
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
            className="mt-6 rounded-lg border border-accent/20 bg-card/50 p-5 backdrop-blur-sm glow-magenta transition-all hover:border-accent/50 sm:mt-8 sm:p-8"
          >
            <h3 className="text-2xl font-semibold text-light-grey mb-4">My Mission</h3>
            <p className="text-foreground leading-relaxed">
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
