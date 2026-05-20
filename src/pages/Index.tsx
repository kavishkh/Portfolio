import StarField from "@/components/StarField";
import ShootingStars from "@/components/ShootingStars";
import CosmicCursor from "@/components/CosmicCursor";
import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";

import Projects from "@/components/Projects";
import Contact from "@/components/Contact";

const Index = () => {
  return (
    <main className="relative min-h-screen">
      <StarField />
      <ShootingStars />
      <CosmicCursor />
      <Navigation />
      <Hero />
      <About />
      <Skills />

      <Projects />
      <Contact />

      <footer className="relative border-t border-primary/20 bg-card/50 py-8 backdrop-blur-sm">
        <div className="container mx-auto px-4 text-center sm:px-6">
          <p className="text-sm text-muted-foreground sm:text-base">
            &copy; 2025 Kavish Khanna. Crafted with cosmic energy across the digital universe.
          </p>
        </div>
      </footer>
    </main>
  );
};

export default Index;
