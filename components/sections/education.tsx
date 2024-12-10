"use client";

import { motion } from 'framer-motion';
import { Card } from '@/components/ui/card';
import { GraduationCap, Calendar, MapPin } from 'lucide-react';

const education = [
  {
    degree: "Master of Science in Computer Science",
    school: "Stanford University",
    location: "Stanford, CA",
    period: "2018 - 2020",
    description: "Specialized in Artificial Intelligence and Machine Learning. Research focus on Deep Learning applications in Computer Vision.",
    achievements: [
      "Published 2 research papers in top-tier conferences",
      "Teaching Assistant for Advanced Algorithm Design",
      "4.0 GPA"
    ]
  },
  {
    degree: "Bachelor of Engineering in Software Engineering",
    school: "University of Technology",
    location: "Melbourne, Australia",
    period: "2014 - 2018",
    description: "First Class Honours. Focus on Software Architecture and Systems Design.",
    achievements: [
      "Graduated with Distinction",
      "Led the University Coding Club",
      "Won the Dean's Award for Academic Excellence"
    ]
  }
];

const EducationCard = ({ degree, school, location, period, description, achievements }: any) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
    viewport={{ once: true }}
  >
    <Card className="p-6 hover:shadow-lg transition-all duration-300 bg-card/50 backdrop-blur-sm">
      <div className="flex items-start gap-4">
        <div className="bg-primary/10 rounded-full p-3">
          <GraduationCap className="h-6 w-6 text-primary" />
        </div>
        <div className="flex-1">
          <h3 className="text-xl font-semibold mb-2">{degree}</h3>
          <div className="flex flex-wrap gap-4 text-sm text-muted-foreground mb-4">
            <div className="flex items-center gap-1">
              <MapPin className="h-4 w-4" />
              {school}, {location}
            </div>
            <div className="flex items-center gap-1">
              <Calendar className="h-4 w-4" />
              {period}
            </div>
          </div>
          <p className="text-muted-foreground mb-4">{description}</p>
          <ul className="space-y-2">
            {achievements.map((achievement, index) => (
              <li key={index} className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                <span className="text-sm">{achievement}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Card>
  </motion.div>
);

export default function Education() {
  return (
    <section className="py-20 bg-muted/50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-primary to-purple-600">
            Education
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Academic background and achievements
          </p>
        </motion.div>

        <div className="space-y-8">
          {education.map((edu, index) => (
            <EducationCard key={index} {...edu} />
          ))}
        </div>
      </div>
    </section>
  );
}