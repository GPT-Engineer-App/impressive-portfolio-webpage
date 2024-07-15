import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";

const skills = [
  { name: "React", level: 90 },
  { name: "Node.js", level: 85 },
  { name: "JavaScript", level: 95 },
  { name: "TypeScript", level: 80 },
  { name: "HTML/CSS", level: 90 },
  { name: "SQL", level: 75 },
];

const Skills = () => {
  return (
    <section id="skills" className="mb-16">
      <Card>
        <CardHeader>
          <CardTitle className="text-3xl font-bold">Skills</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4">
            {skills.map((skill) => (
              <div key={skill.name}>
                <div className="flex justify-between mb-1">
                  <span className="text-sm font-medium">{skill.name}</span>
                  <span className="text-sm font-medium">{skill.level}%</span>
                </div>
                <Progress value={skill.level} className="w-full" />
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </section>
  );
};

export default Skills;