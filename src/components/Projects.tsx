import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    name: "PowerLite",
    description: "A lightweight power management solution optimizing energy consumption with real-time analytics.",
    tech: ["React", "Node.js", "MongoDB"],
    color: "primary",
  },
  {
    name: "FRXSH",
    description: "Fresh food delivery platform connecting local farmers with consumers for sustainable living.",
    tech: ["Next.js", "PostgreSQL", "Stripe"],
    color: "secondary",
  },
  {
    name: "Reflect Recovery Journey",
    description: "Mental health tracking app helping users document and analyze their recovery progress.",
    tech: ["React Native", "Firebase", "ML"],
    color: "accent",
  },
  {
    name: "SplitSmart",
    description: "Intelligent expense splitting app for groups with smart categorization and settlement.",
    tech: ["React", "Express", "Redis"],
    color: "primary",
  },
  {
    name: "HerFlow",
    description: "Comprehensive period tracking and health management platform for women's wellness.",
    tech: ["Flutter", "Python", "TensorFlow"],
    color: "secondary",
  },
];

const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="projects" className="relative py-32">
      <div className="container mx-auto px-6">
        <motion.div ref={ref}>
          <h2 className="text-5xl font-bold text-gradient mb-16 text-center">Floating Projects</h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {projects.map((project, index) => (
              <motion.div
                key={project.name}
                initial={{ opacity: 0, y: 50, rotateX: -15 }}
                animate={isInView ? { opacity: 1, y: 0, rotateX: 0 } : {}}
                transition={{ delay: index * 0.15 }}
                whileHover={{ 
                  scale: 1.05, 
                  rotateY: 5,
                  z: 50,
                }}
                className={`bg-card/50 backdrop-blur-sm border border-${project.color}/20 rounded-xl p-8 hover:border-${project.color}/50 transition-all animate-float cursor-pointer`}
                style={{ 
                  animationDelay: `${index * 0.3}s`,
                  transformStyle: "preserve-3d",
                }}
              >
                <div className="flex justify-between items-start mb-4">
                  <h3 className={`text-2xl font-bold text-${project.color}`}>{project.name}</h3>
                  <div className="flex gap-2">
                    <motion.div whileHover={{ scale: 1.2, rotate: 15 }}>
                      <Github className={`w-5 h-5 text-${project.color} cursor-pointer`} />
                    </motion.div>
                    <motion.div whileHover={{ scale: 1.2, rotate: -15 }}>
                      <ExternalLink className={`w-5 h-5 text-${project.color} cursor-pointer`} />
                    </motion.div>
                  </div>
                </div>

                <p className="text-foreground mb-4 leading-relaxed">{project.description}</p>

                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className={`px-3 py-1 bg-${project.color}/10 text-${project.color} text-sm rounded-full border border-${project.color}/30`}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
