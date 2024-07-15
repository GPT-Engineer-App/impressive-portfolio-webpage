import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const Hero = () => {
  const scrollToProjects = () => {
    const projectsSection = document.getElementById("projects");
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="relative h-screen flex items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center z-0"
        style={{
          backgroundImage: "url('/hero-background.jpg')",
          filter: "brightness(0.7)",
        }}
      ></div>
      <div className="relative z-10 text-center text-white">
        <h1 className="text-5xl font-bold mb-4">John Doe</h1>
        <p className="text-xl mb-8">Full Stack Developer & UI/UX Enthusiast</p>
        <p className="text-lg mb-8 max-w-2xl mx-auto">
          Crafting digital experiences that blend creativity with cutting-edge technology.
          Let's build something amazing together!
        </p>
        <Button size="lg" className="bg-primary text-primary-foreground" onClick={scrollToProjects}>
          Explore My Work <ArrowRight className="ml-2 h-4 w-4" />
        </Button>
      </div>
    </div>
  );
};

export default Hero;