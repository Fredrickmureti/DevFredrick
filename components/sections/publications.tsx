"use client";

import { motion } from 'framer-motion';
import { Card } from '@/components/ui/card';
import { Book, Calendar, ExternalLink, FileText, Users } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

interface PublicationProps {
  title: string;
  journal?: string;
  conference?: string;
  date: string;
  citations: number;
  type: 'Journal' | 'Conference';
  abstract: string;
  doi: string;
  tags: string[];
}

const publications: PublicationProps[] = [
  {
    title: "Deep Learning Approaches in Mobile App Development",
    journal: "IEEE Software Engineering Journal",
    date: "2024",
    citations: 45,
    type: "Journal",
    abstract: "An in-depth analysis of implementing deep learning models in mobile applications, focusing on performance optimization and resource constraints.",
    doi: "10.1109/TSE.2024.1234567",
    tags: ["Deep Learning", "Mobile Development", "Performance Optimization"]
  },
  {
    title: "Scalable Microservices Architecture: A Case Study",
    conference: "International Conference on Software Architecture (ICSA)",
    date: "2023",
    citations: 32,
    type: "Conference",
    abstract: "A comprehensive case study on designing and implementing scalable microservices architecture for enterprise applications.",
    doi: "10.1145/3456789.0123456",
    tags: ["Microservices", "Software Architecture", "Case Study"]
  },
  {
    title: "Real-time Data Processing in React Native Applications",
    journal: "ACM Mobile Computing and Communications Review",
    date: "2023",
    citations: 28,
    type: "Journal",
    abstract: "Novel approaches to handling real-time data processing in React Native applications while maintaining optimal performance.",
    doi: "10.1145/9876543.2109876",
    tags: ["React Native", "Real-time Processing", "Mobile Computing"]
  }
];

const PublicationCard = ({ title, journal, conference, date, citations, type, abstract, doi, tags }: PublicationProps) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
    viewport={{ once: true }}
  >
    <Card className="p-6 hover:shadow-lg transition-all duration-300 bg-card/50 backdrop-blur-sm">
      <div className="flex items-start gap-4">
        <div className="bg-primary/10 rounded-full p-3">
          {type === "Journal" ? (
            <Book className="h-6 w-6 text-primary" />
          ) : (
            <FileText className="h-6 w-6 text-primary" />
          )}
        </div>
        <div className="flex-1">
          <div className="flex items-center gap-2 mb-2">
            <Badge variant="secondary">{type}</Badge>
            <div className="flex items-center text-sm text-muted-foreground">
              <Users className="h-4 w-4 mr-1" />
              {citations} citations
            </div>
          </div>
          <h3 className="text-xl font-semibold mb-2">{title}</h3>
          <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
            <Calendar className="h-4 w-4" />
            {date}
            <span className="text-xs">•</span>
            {journal || conference}
          </div>
          <p className="text-muted-foreground mb-4">{abstract}</p>
          <div className="flex flex-wrap gap-2 mb-4">
            {tags.map((tag, index) => (
              <Badge key={index} variant="outline">
                {tag}
              </Badge>
            ))}
          </div>
          <Button variant="outline" size="sm" className="w-full" asChild>
            <a 
              href={`https://doi.org/${doi}`} 
              target="_blank" 
              rel="noopener noreferrer"
            >
              <ExternalLink className="h-4 w-4 mr-2" />
              View Publication
            </a>
          </Button>
        </div>
      </div>
    </Card>
  </motion.div>
);

export default function Publications() {
  return (
    <section className="py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-primary to-purple-600">
            Publications
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Research papers and technical publications
          </p>
        </motion.div>

        <div className="space-y-8">
          {publications.map((publication, index) => (
            <PublicationCard key={index} {...publication} />
          ))}
        </div>
      </div>
    </section>
  );
}