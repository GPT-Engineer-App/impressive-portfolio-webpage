import { Button } from "@/components/ui/button";
import About from "../components/About";
import Skills from "../components/Skills";
import Projects from "../components/Projects";
import Contact from "../components/Contact";
import Meet from "../components/Meet";
import Hero from "../components/Hero";

const Index = () => {
  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="container mx-auto">
      <Hero />
      <nav className="sticky top-0 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 z-50 py-4">
        <ul className="flex justify-center space-x-4">
          {["About", "Skills", "Projects", "Contact", "Meet"].map((item) => (
            <li key={item}>
              <Button
                variant="ghost"
                onClick={() => scrollToSection(item.toLowerCase())}
              >
                {item}
              </Button>
            </li>
          ))}
        </ul>
      </nav>

      <div className="px-4 space-y-24 py-16">
        <About />
        <Skills />
        <Projects />
        <Contact />
        <Meet />
      </div>
    </div>
  );
};

export default Index;