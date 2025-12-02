import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const experiences = [
  {
    title: "Senior Full Stack Developer",
    company: "Tech Innovators Inc.",
    period: "2022 - Present",
    description: "Leading development of cutting-edge web applications using React, Node.js, and cloud technologies.",
    color: "primary",
  },
  {
    title: "Frontend Developer",
    company: "Digital Creatives",
    period: "2020 - 2022",
    description: "Crafted responsive and interactive user interfaces with modern frameworks and best practices.",
    color: "secondary",
  },
  {
    title: "Web Developer Intern",
    company: "StartUp Labs",
    period: "2019 - 2020",
    description: "Contributed to multiple projects while learning full-stack development fundamentals.",
    color: "accent",
  },
];

const Experience = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="experience" className="relative py-32">
      <div className="container mx-auto px-6">
        <motion.div ref={ref}>
          <h2 className="text-5xl font-bold text-gradient mb-16 text-center">Experience Timeline</h2>

          <div className="max-w-4xl mx-auto relative">
            {/* Orbit line */}
            <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-secondary to-accent transform -translate-x-1/2" />

            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: index * 0.2 }}
                className={`relative flex items-center mb-16 ${
                  index % 2 === 0 ? "flex-row" : "flex-row-reverse"
                }`}
              >
                <div className={`w-5/12 ${index % 2 === 0 ? "text-right pr-8" : "text-left pl-8"}`}>
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    className={`bg-card/50 backdrop-blur-sm border border-${exp.color}/20 rounded-xl p-6 hover:border-${exp.color}/50 transition-all`}
                  >
                    <h3 className={`text-2xl font-semibold text-${exp.color} mb-2`}>{exp.title}</h3>
                    <p className="text-lg text-foreground/80 mb-2">{exp.company}</p>
                    <p className="text-sm text-muted-foreground mb-4">{exp.period}</p>
                    <p className="text-foreground/70">{exp.description}</p>
                  </motion.div>
                </div>

                <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 rounded-full bg-card border-2 border-primary animate-pulse-glow" />

                <div className="w-5/12" />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;
