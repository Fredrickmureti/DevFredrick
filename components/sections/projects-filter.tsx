"use client";

import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';

const categories = [
  'All',
  'Web',
  'Mobile',
  'Backend',
  'AI/ML',
  'DevOps'
];

export default function ProjectsFilter({ 
  activeCategory, 
  setActiveCategory 
}: { 
  activeCategory: string;
  setActiveCategory: (category: string) => void;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="flex flex-wrap gap-2 justify-center mb-8"
    >
      {categories.map((category) => (
        <Button
          key={category}
          variant={activeCategory === category ? "default" : "outline"}
          size="sm"
          onClick={() => setActiveCategory(category)}
          className={`
            ${activeCategory === category ? 'bg-gradient-to-r from-primary to-purple-600' : ''}
            transition-all duration-300
          `}
        >
          {category}
        </Button>
      ))}
    </motion.div>
  );
}