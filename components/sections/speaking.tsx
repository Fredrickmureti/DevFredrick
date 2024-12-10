"use client";

import { motion } from 'framer-motion';
import { Card } from '@/components/ui/card';
import { Mic, Calendar, MapPin, Users, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Image from 'next/image';

interface EventProps {
  title: string;
  event: string;
  location: string;
  date: string;
  image: string;
  audience: string;
  description: string;
  videoUrl: string;
  slidesUrl: string;
}

const events: EventProps[] = [
  {
    title: "Modern Web Development with Next.js",
    event: "TechConf 2024",
    location: "San Francisco, CA",
    date: "March 15, 2024",
    image: "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?auto=format&fit=crop&q=80&w=800",
    audience: "500+ attendees",
    description: "Keynote speech on building scalable web applications with Next.js and modern web technologies.",
    videoUrl: "#",
    slidesUrl: "#"
  },
  {
    title: "The Future of Mobile Development",
    event: "MobileWorld Congress",
    location: "Barcelona, Spain",
    date: "February 28, 2024",
    image: "https://images.unsplash.com/photo-1587825140708-dfaf72ae4b04?auto=format&fit=crop&q=80&w=800",
    audience: "1000+ attendees",
    description: "Panel discussion on emerging trends in mobile development and cross-platform solutions.",
    videoUrl: "#",
    slidesUrl: "#"
  },
  {
    title: "AI in Modern Applications",
    event: "AI Summit 2024",
    location: "London, UK",
    date: "January 20, 2024",
    image: "https://images.unsplash.com/photo-1591453089816-0fbb971b454c?auto=format&fit=crop&q=80&w=800",
    audience: "750+ attendees",
    description: "Technical workshop on integrating AI capabilities into web and mobile applications.",
    videoUrl: "#",
    slidesUrl: "#"
  }
];

const EventCard = ({ title, event, location, date, image, audience, description, videoUrl, slidesUrl }: EventProps) => (
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
      </div>
      <div className="p-6">
        <div className="flex items-center gap-2 text-sm text-primary mb-2">
          <Mic className="h-4 w-4" />
          {event}
        </div>
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <div className="flex flex-wrap gap-4 text-sm text-muted-foreground mb-4">
          <div className="flex items-center gap-1">
            <MapPin className="h-4 w-4" />
            {location}
          </div>
          <div className="flex items-center gap-1">
            <Calendar className="h-4 w-4" />
            {date}
          </div>
          <div className="flex items-center gap-1">
            <Users className="h-4 w-4" />
            {audience}
          </div>
        </div>
        <p className="text-muted-foreground mb-6">{description}</p>
        <div className="flex gap-4">
          <Button variant="default" size="sm" className="w-full bg-gradient-to-r from-primary to-purple-600" asChild>
            <a href={videoUrl} target="_blank" rel="noopener noreferrer">
              Watch Talk
            </a>
          </Button>
          <Button variant="outline" size="sm" className="w-full" asChild>
            <a href={slidesUrl} target="_blank" rel="noopener noreferrer">
              <ExternalLink className="h-4 w-4 mr-2" />
              View Slides
            </a>
          </Button>
        </div>
      </div>
    </Card>
  </motion.div>
);

export default function Speaking() {
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
            Speaking & Events
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Conference talks, workshops, and speaking engagements
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {events.map((event, index) => (
            <EventCard key={index} {...event} />
          ))}
        </div>
      </div>
    </section>
  );
}