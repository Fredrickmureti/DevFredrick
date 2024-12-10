"use client";

import { motion } from 'framer-motion';
import { Card } from '@/components/ui/card';
import { Award, Code, Users, Star } from 'lucide-react';

const achievements = [
  {
    icon: Code,
    value: '500+',
    label: 'Projects Completed',
    gradient: 'from-blue-500 to-cyan-500'
  },
  {
    icon: Users,
    value: '100+',
    label: 'Satisfied Clients',
    gradient: 'from-purple-500 to-pink-500'
  },
  {
    icon: Star,
    value: '50+',
    label: 'Open Source Contributions',
    gradient: 'from-orange-500 to-red-500'
  },
  {
    icon: Award,
    value: '15+',
    label: 'Industry Awards',
    gradient: 'from-green-500 to-emerald-500'
  }
];

const AchievementCard = ({ icon: Icon, value, label, gradient }) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.9 }}
    whileInView={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.5 }}
    viewport={{ once: true }}
  >
    <Card className="p-6 text-center bg-card/50 backdrop-blur-sm hover:shadow-lg transition-all duration-300">
      <div className={`rounded-full p-3 w-14 h-14 mx-auto mb-4 bg-gradient-to-r ${gradient}`}>
        <Icon className="h-8 w-8 text-white" />
      </div>
      <h3 className="text-3xl font-bold mb-2">{value}</h3>
      <p className="text-muted-foreground">{label}</p>
    </Card>
  </motion.div>
);

export default function Achievements() {
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
            Achievements
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Milestones and accomplishments throughout my career
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {achievements.map((achievement, index) => (
            <AchievementCard key={index} {...achievement} />
          ))}
        </div>
      </div>
    </section>
  );
}