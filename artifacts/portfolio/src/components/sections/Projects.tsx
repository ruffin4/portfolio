import { motion } from 'framer-motion';
import { projects } from '@/data/portfolio';
import { Button } from '@/components/ui/button';
import { ExternalLink, Github } from 'lucide-react';
import { Badge } from '@/components/ui/badge';

export function Projects() {
  return (
    <section id="projects" className="py-24 md:py-32 relative">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-16 flex justify-between items-end"
        >
          <div>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">Featured Work</h2>
            <div className="w-20 h-1 bg-primary rounded-full" />
          </div>
          <Button variant="outline" className="hidden md:flex">View All Projects</Button>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`group relative overflow-hidden rounded-2xl glass-card border-white/10 flex flex-col ${
                index === 0 ? 'md:col-span-2 md:flex-row' : ''
              }`}
            >
              <div className={`relative overflow-hidden ${index === 0 ? 'md:w-1/2' : 'aspect-video'}`}>
                <div className="absolute inset-0 bg-primary/20 mix-blend-overlay group-hover:opacity-0 transition-opacity duration-500 z-10" />
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 ease-out"
                  loading="lazy"
                />
              </div>
              
              <div className={`p-8 flex flex-col flex-1 ${index === 0 ? 'md:w-1/2 justify-center' : ''}`}>
                <div className="flex justify-between items-start mb-4">
                  <Badge variant="secondary" className="bg-primary/20 text-primary border-primary/30">
                    {project.status}
                  </Badge>
                  <div className="flex gap-3 text-muted-foreground">
                    <a href={project.github} className="hover:text-primary transition-colors"><Github size={20} /></a>
                    <a href={project.live} className="hover:text-primary transition-colors"><ExternalLink size={20} /></a>
                  </div>
                </div>
                
                <h3 className="text-2xl font-display font-bold mb-3 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-muted-foreground mb-6 line-clamp-3">
                  {project.description}
                </p>
                
                <div className="mt-auto flex flex-wrap gap-2">
                  {project.tech.map(tech => (
                    <span key={tech} className="text-xs font-mono px-2 py-1 rounded-md bg-secondary/50 border border-border text-secondary-foreground">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}