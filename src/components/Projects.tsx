import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";

interface Project {
  name: string;
  description: string;
  tech: string[];
  color: "primary" | "secondary" | "accent";
  demo: string;
  github: string;
  demo2?: string;
  github2?: string;
}

const projects: Project[] = [
  {
    name: "Cartsy",
    description: "Full-stack e-commerce platform with a shopper app and a separate vendor dashboard for managing inventory, orders, and sales.",
    tech: ["React", "Node.js", "MongoDB"],
    color: "accent",
    demo: "https://cartsy-silk.vercel.app/",
    github: "https://github.com/kavishkh/CARTSY",
    demo2: "https://cartsy-vendor.vercel.app/",
    github2: "https://github.com/kavishkh/CARTSY-VENDOR",
  },
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
    description: "Frxsh is a student-driven platform empowering student entrepreneurs to build their brands and sell their products.",
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

const colorClasses = {
  primary: {
    border: "border-primary/20 hover:border-primary/50",
    icon: "text-primary",
    badge: "border-primary/30 bg-primary/10 text-primary",
  },
  secondary: {
    border: "border-secondary/20 hover:border-secondary/50",
    icon: "text-secondary",
    badge: "border-secondary/30 bg-secondary/10 text-secondary",
  },
  accent: {
    border: "border-accent/20 hover:border-accent/50",
    icon: "text-accent",
    badge: "border-accent/30 bg-accent/10 text-accent",
  },
};

const Projects = () => {
  return (
    <section id="projects" className="relative py-20 sm:py-28 lg:py-32">
      <div className="container mx-auto px-4 sm:px-6">
        <div>
          <h2 className="mb-10 text-center text-3xl font-bold text-light-grey sm:mb-16 sm:text-4xl lg:text-5xl">Floating Projects</h2>

          <div className="mx-auto grid max-w-7xl gap-6 md:grid-cols-2 xl:grid-cols-3 lg:gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.name}
                initial={{ opacity: 0, y: 50, rotateX: -15 }}
                whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
                viewport={{ once: false }}
                transition={{ delay: index * 0.15 }}
                whileHover={{ scale: 1.05, rotateY: 5, z: 50 }}
                className={`animate-float cursor-pointer rounded-lg border bg-card/50 p-5 backdrop-blur-sm transition-all sm:p-6 lg:p-8 ${colorClasses[project.color].border}`}
                style={{
                  animationDelay: `${index * 0.3}s`,
                  transformStyle: "preserve-3d",
                }}
              >
                {/* Header: title + links */}
                <div className="mb-4 flex items-start justify-between gap-4">
                  <h3 className="min-w-0 text-xl font-bold text-light-grey sm:text-2xl">{project.name}</h3>
                  <div className="flex shrink-0 flex-wrap justify-end gap-2">
                    {project.github && project.github !== "#" && (
                      <motion.a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.2, rotate: 15 }}
                        title="GitHub"
                      >
                        <Github className={`h-5 w-5 cursor-pointer ${colorClasses[project.color].icon}`} />
                      </motion.a>
                    )}
                    {project.demo && project.demo !== "#" && (
                      <motion.a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.2, rotate: -15 }}
                        title="Live Demo"
                      >
                        <ExternalLink className={`h-5 w-5 cursor-pointer ${colorClasses[project.color].icon}`} />
                      </motion.a>
                    )}
                  </div>
                </div>

                {/* Description */}
                <p className="mb-4 text-sm leading-relaxed text-foreground sm:text-base">{project.description}</p>

                {/* Vendor sub-links for Cartsy */}
                {project.demo2 && (
                  <div className={`mb-4 flex w-fit max-w-full items-center gap-2 rounded-lg border px-3 py-1.5 ${colorClasses[project.color].badge}`}>
                    <span className="text-xs font-medium">Vendor App</span>
                    {project.github2 && (
                      <motion.a
                        href={project.github2}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.2 }}
                        title="Vendor GitHub"
                      >
                        <Github className="h-3.5 w-3.5 cursor-pointer" />
                      </motion.a>
                    )}
                    <motion.a
                      href={project.demo2}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.2 }}
                      title="Vendor Demo"
                    >
                      <ExternalLink className="h-3.5 w-3.5 cursor-pointer" />
                    </motion.a>
                  </div>
                )}

                {/* Tech tags */}
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className={`rounded-full border px-3 py-1 text-xs sm:text-sm ${colorClasses[project.color].badge}`}
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
