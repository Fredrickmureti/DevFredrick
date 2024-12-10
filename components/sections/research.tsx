"use client";

import { motion } from 'framer-motion';
import { Card } from '@/components/ui/card';
import { Microscope, Calendar, ArrowRight, Github } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import { Badge } from '@/components/ui/badge';

const researchProjects = [
  {
    title: "AI-Powered Code Generation",
    period: "2023 - Present",
    image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?auto=format&fit=crop&q=80&w=800",
    description: "Developing advanced machine learning models for automated code generation and optimization.",
    status: "Ongoing",
    technologies: ["Python", "TensorFlow", "NLP", "Transformers"],
    achievements: [
      "Developed novel architecture for code understanding",
      "Achieved 85% accuracy in code completion tasks",
      "Published findings in top ML conferences"
    ],
    githubUrl: "#"
  },
  {
    title: "Quantum Computing Applications",
    period: "2022 - 2023",
    image: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?auto=format&fit=crop&q=80&w=800",
    description: "Exploring practical applications of quantum computing in cryptography and optimization problems.",
    status: "Completed",
    technologies: ["Qiskit", "Python", "Quantum Algorithms", "Linear Algebra"],
    achievements: [
      "Implemented novel quantum encryption protocol",
      "Reduced computation time by 60%",
      "Filed patent for quantum optimization algorithm"
    ],
    githubUrl: "#"
  }
];

const ResearchCard = ({ title, period, image, description, status, technologies, achievements, githubUrl }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
    viewport={{ once: true }}
  >
    <Card className="overflow-hidden hover:shadow-lg transition-all duration-300 bg-card/50 backdrop-blur-sm">
      <div className="relative h-48">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
        <Badge 
          className={`absolute top-4 right-4 ${
            status === "Ongoing" ? "bg-green-500" : "bg-blue-500"
          }`}
        >
          {status}
        </Badge>
      </div>
      <div className="p-6">
        <div className="flex items-center gap-2 text-sm text-primary mb-2">
          <Microscope className="h-4 w-4" />
          Research Project
          <span className="text-xs">•</span>
          <Calendar className="h-4 w-4" />
          {period}
        </div>
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-muted-foreground mb-4">{description}</p>
        
        <div className="mb-4">
          <h4 className="font-medium mb-2">Technologies</h4>
          <div className="flex flex-wrap gap-2">
            {technologies.map((tech, index) => (
              <Badge key={index} variant="outline">
                {tech}
              </Badge>
            ))}
          </div>
        </div>

        <div className="mb-6">
          <h4 className="font-medium mb-2">Key Achievements</h4>
          <ul className="space-y-2">
            {achievements.map((achievement, index) => (
              <li key={index} className="flex items-center gap-2 text-sm text-muted-foreground">
                <ArrowRight className="h-4 w-4 text-primary" />
                {achievement}
              </li>
            ))}
          </ul>
        </div>

        <Button variant="outline" size="sm" className="w-full" asChild>
          <a href={githubUrl} target="_blank" rel="noopener noreferrer">
            <Github className="h-4 w-4 mr-2" />
            View Research Code
          </a>
        </Button>
      </div>
    </Card>
  </motion.div>
);

export default function Research() {
  return (
    <section className="py-20 bg-muted/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-primary to-purple-600">
            Research Projects
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Exploring cutting-edge technologies and innovations
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {researchProjects.map((project, index) => (
            <ResearchCard key={index} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
}