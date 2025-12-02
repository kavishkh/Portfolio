import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const skills = [
  { name: "React", level: 95, color: "primary" },
  { name: "TypeScript", level: 90, color: "secondary" },
  { name: "Node.js", level: 85, color: "accent" },
  { name: "Three.js", level: 80, color: "primary" },
  { name: "Python", level: 85, color: "secondary" },
  { name: "GSAP", level: 75, color: "accent" },
  { name: "Tailwind CSS", level: 95, color: "primary" },
  { name: "Next.js", level: 90, color: "secondary" },
];

const Skills = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="skills" className="relative py-32">
      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
        >
          <h2 className="text-5xl font-bold text-gradient mb-16 text-center">Skills & Technologies</h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {skills.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.05, y: -5 }}
                className={`bg-card/50 backdrop-blur-sm border border-${skill.color}/20 rounded-xl p-6 hover:border-${skill.color}/50 transition-all animate-float`}
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <h3 className={`text-xl font-semibold text-${skill.color} mb-4`}>{skill.name}</h3>
                <div className="relative w-full h-2 bg-muted rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={isInView ? { width: `${skill.level}%` } : {}}
                    transition={{ delay: index * 0.1 + 0.3, duration: 1 }}
                    className={`absolute h-full bg-${skill.color} rounded-full`}
                    style={{
                      boxShadow: `0 0 10px hsl(var(--${skill.color}) / 0.6)`,
                    }}
                  />
                </div>
                <p className="text-right text-sm text-muted-foreground mt-2">{skill.level}%</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
