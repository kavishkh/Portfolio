import { motion } from "framer-motion";

type SkillColor = "primary" | "secondary" | "accent";

const skills: { name: string; level: number; color: SkillColor }[] = [
  { name: "React", level: 95, color: "primary" },
  { name: "TypeScript", level: 90, color: "secondary" },
  { name: "Node.js", level: 85, color: "accent" },
  { name: "Three.js", level: 80, color: "primary" },
  { name: "Python", level: 85, color: "secondary" },
  { name: "GSAP", level: 75, color: "accent" },
  { name: "Tailwind CSS", level: 95, color: "primary" },
  { name: "Next.js", level: 90, color: "secondary" },
];

const colorClasses = {
  primary: {
    border: "border-primary/20 hover:border-primary/50",
    bar: "bg-primary",
  },
  secondary: {
    border: "border-secondary/20 hover:border-secondary/50",
    bar: "bg-secondary",
  },
  accent: {
    border: "border-accent/20 hover:border-accent/50",
    bar: "bg-accent",
  },
};

const Skills = () => {
  return (
    <section id="skills" className="relative py-20 sm:py-28 lg:py-32">
      <div className="container mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: false, margin: "-100px" }}
        >
          <h2 className="mb-10 text-center text-3xl font-bold text-light-grey sm:mb-16 sm:text-4xl lg:text-5xl">Skills & Technologies</h2>

          <div className="mx-auto grid max-w-6xl gap-5 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
            {skills.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.05, y: -5 }}
                className={`animate-float rounded-lg border bg-card/50 p-5 backdrop-blur-sm transition-all sm:p-6 ${colorClasses[skill.color].border}`}
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <h3 className="mb-4 text-lg font-semibold text-light-grey sm:text-xl">{skill.name}</h3>
                <div className="relative w-full h-2 bg-muted rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    viewport={{ once: false }}
                    transition={{ delay: index * 0.1 + 0.3, duration: 1 }}
                    className={`absolute h-full rounded-full ${colorClasses[skill.color].bar}`}
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
