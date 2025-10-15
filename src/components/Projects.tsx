import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { motion } from "motion/react";

const projects = [
  {
    title: "E-Commerce Platform",
    description:
      "A full-stack e-commerce solution with real-time inventory and payment processing",
    tags: ["React", "Node.js", "MongoDB", "Stripe"],
    gradient: "from-blue-500/20 to-cyan-500/20",
  },
  {
    title: "Portfolio Dashboard",
    description:
      "Analytics dashboard for tracking portfolio performance with beautiful visualizations",
    tags: ["Next.js", "TypeScript", "Chart.js", "Tailwind"],
    gradient: "from-purple-500/20 to-pink-500/20",
  },
  {
    title: "Social Media App",
    description:
      "Real-time social platform with messaging, feeds, and content sharing",
    tags: ["React", "Firebase", "WebSocket", "Redux"],
    gradient: "from-green-500/20 to-teal-500/20",
  },
  {
    title: "AI Content Generator",
    description:
      "Intelligent content creation tool powered by machine learning algorithms",
    tags: ["Python", "TensorFlow", "React", "FastAPI"],
    gradient: "from-orange-500/20 to-red-500/20",
  },
];

export const Projects = () => {
  return (
    <section id="projects" className="py-24 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="space-y-12 appear-effect">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="text-4xl md:text-5xl font-bold text-center "
          >
            Featured <span className="text-gradient">Projects</span>
          </motion.h2>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="grid md:grid-cols-2 gap-6"
          >
            {projects.map((project, index) => (
              <Card
                key={index}
                className="bg-card/50 backdrop-blur-sm border-border/50 hover:border-primary/50 transition-all duration-300 hover:scale-[1.02] card-glow group cursor-pointer animate-scale-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg`}
                ></div>

                <CardHeader className="relative z-10">
                  <CardTitle className="text-2xl group-hover:text-primary transition-colors">
                    {project.title}
                  </CardTitle>
                  <CardDescription className="text-base">
                    {project.description}
                  </CardDescription>
                </CardHeader>

                <CardContent className="relative z-10">
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, tagIndex) => (
                      <Badge
                        key={tagIndex}
                        variant="secondary"
                        className="bg-secondary/80 hover:bg-secondary border border-border/50"
                      >
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};
