import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    name: "PowerLite",
    description: "Powerlite is a professional site for Powerlite Electricals showcasing premium electrical solutions and industrial transformer products.",
    tech: ["React", "Node.js", "MongoDB"],
    color: "primary",
    demo: "https://powerlite-heyr.vercel.app/",
    github: "#",
  },
  {
    name: "FRXSH",
    description: "Frxsh is a student-driven platform empowering student entrepreneurs to build their brands and sell their products",
    tech: ["Next.js", "PostgreSQL", "Stripe"],
    color: "secondary",
    demo: "https://frxsh.vercel.app/",
    github: "#",
  },
  {
    name: "Reflect Recovery Journey",
    description: "Mental health tracking app helping users document and analyze their recovery progress.",
    tech: ["React Native", "Firebase", "ML"],
    color: "accent",
    demo: "#",
    github: "#",
  },
  {
    name: "SplitSmart",
    description: "Intelligent expense splitting app for groups with smart categorization and settlement.",
    tech: ["React", "Express", "Redis"],
    color: "primary",
    demo: "https://split-smart-ten.vercel.app/",
    github: "#",
  },
  {
    name: "HerFlow",
    description: "Comprehensive period tracking and health management platform for women's wellness.",
    tech: ["Flutter", "Python", "TensorFlow"],
    color: "secondary",
    demo: "#",
    github: "#",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="relative py-32">
      <div className="container mx-auto px-6">
        <div>
          <h2 className="text-5xl font-bold text-light-grey mb-16 text-center">Floating Projects</h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {projects.map((project, index) => (
              <motion.div
                key={project.name}
                initial={{ opacity: 0, y: 50, rotateX: -15 }}
                whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
                viewport={{ once: false }}
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
                  <h3 className="text-2xl font-bold text-light-grey">{project.name}</h3>
                  <div className="flex gap-2">
                    {project.github && project.github !== "#" && (
                      <motion.a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.2, rotate: 15 }}
                      >
                        <Github className={`w-5 h-5 text-${project.color} cursor-pointer`} />
                      </motion.a>
                    )}
                    {project.demo && project.demo !== "#" && (
                      <motion.a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.2, rotate: -15 }}
                      >
                        <ExternalLink className={`w-5 h-5 text-${project.color} cursor-pointer`} />
                      </motion.a>
                    )}
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
        </div>
      </div>
    </section>
  );
};

export default Projects;
