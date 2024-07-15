import { Button } from "@/components/ui/button";
import About from "../components/About";
import Skills from "../components/Skills";
import Projects from "../components/Projects";
import Contact from "../components/Contact";
import Meet from "../components/Meet";
import Hero from "../components/Hero";

const Index = () => {
  return (
    <div className="container mx-auto px-4">
      <Hero />
      <nav className="mb-8 mt-8">
        <ul className="flex justify-center space-x-4">
          {["About", "Skills", "Projects", "Contact", "Meet"].map((item) => (
            <li key={item}>
              <Button variant="ghost" asChild>
                <a href={`#${item.toLowerCase()}`}>{item}</a>
              </Button>
            </li>
          ))}
        </ul>
      </nav>

      <About />
      <Skills />
      <Projects />
      <Contact />
      <Meet />
    </div>
  );
};

export default Index;