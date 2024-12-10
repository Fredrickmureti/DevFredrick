import Hero from '@/components/sections/hero';
import Services from '@/components/sections/services';
import Skills from '@/components/sections/skills';
import Projects from '@/components/sections/projects';
import Achievements from '@/components/sections/achievements';
import Timeline from '@/components/sections/timeline';
import Education from '@/components/sections/education';
import Certifications from '@/components/sections/certifications';
import Speaking from '@/components/sections/speaking';
import Publications from '@/components/sections/publications';
import Research from '@/components/sections/research';
import Testimonials from '@/components/sections/testimonials';
import Blog from '@/components/sections/blog';
import Contact from '@/components/sections/contact';

export default function Home() {
  return (
    <div className="flex flex-col">
      <Hero />
      <Services />
      <Skills />
      <Projects />
      <Achievements />
      <Timeline />
      <Education />
      <Certifications />
      <Speaking />
      <Publications />
      <Research />
      <Testimonials />
      <Blog />
      <Contact />
    </div>
  );
}