import { motion } from 'framer-motion';
import { projects } from '@/data/portfolio';
import { ExternalLink, Github } from 'lucide-react';

export function Projects() {
  const featured = projects.find(p => p.featured);
  const grid = projects.filter(p => !p.featured);

  return (
    <section id="projects" className="py-20 md:py-32 relative bg-white/[0.015]">
      <div className="container mx-auto px-5 sm:px-8 max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-12 md:mb-14"
        >
          <p className="text-xs font-semibold tracking-widest text-primary uppercase mb-3">
            04 &nbsp;·&nbsp; Ce que j'ai construit
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight mb-4">Projets</h2>
          <div className="w-12 h-[3px] bg-primary rounded-full" />
        </motion.div>

        {/* Featured project */}
        {featured && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.7 }}
            className="relative rounded-xl border border-white/8 bg-white/3 overflow-hidden mb-6"
          >
            {/* Status badge */}
            <div className="absolute top-3 right-3 z-10">
              <span className="px-2.5 py-1 rounded text-xs font-bold tracking-widest bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 uppercase">
                {featured.status}
              </span>
            </div>

            {/* Screenshot placeholder */}
            <div className="relative w-full bg-black/40" style={{ minHeight: 220 }}>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-[75%] h-[75%] rounded-lg bg-white/5 border border-white/10 flex items-center justify-center">
                  <span className="text-muted-foreground/30 text-xs sm:text-sm text-center px-4">Capture d'écran du projet</span>
                </div>
              </div>
            </div>

            {/* Info bar */}
            <div className="p-5 sm:p-6 md:p-8 border-t border-white/8">
              <p className="text-xs font-bold tracking-widest text-primary uppercase mb-2">
                {featured.category}
              </p>
              <h3 className="text-xl sm:text-2xl font-bold text-foreground mb-3">{featured.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed mb-5 max-w-3xl">
                {featured.description}
              </p>
              <div className="flex flex-col sm:flex-row gap-4 sm:items-center sm:justify-between">
                <div className="flex flex-wrap gap-2">
                  {featured.tech.map(t => (
                    <span
                      key={t}
                      className="px-2.5 py-1 rounded text-xs font-medium border border-white/10 bg-white/3 text-muted-foreground uppercase tracking-wide"
                    >
                      {t}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4 text-muted-foreground shrink-0">
                  <a href={featured.github} aria-label="GitHub" className="hover:text-primary transition-colors flex items-center gap-1.5 text-sm">
                    <Github size={16} /> Code
                  </a>
                  <a href={featured.live} aria-label="Demo" className="hover:text-primary transition-colors flex items-center gap-1.5 text-sm">
                    <ExternalLink size={16} /> Demo
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        )}

        {/* Grid of other projects */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
          {grid.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className="group relative rounded-xl border border-white/8 bg-white/3 overflow-hidden hover:border-primary/25 transition-colors duration-300"
            >
              {/* Status badge */}
              <div className="absolute top-3 right-3 z-10">
                <span className="px-2 py-0.5 rounded text-[10px] font-bold tracking-widest bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 uppercase">
                  {project.status}
                </span>
              </div>

              {/* Screenshot placeholder */}
              <div className="relative w-full aspect-video bg-black/40 flex items-center justify-center">
                <span className="text-muted-foreground/20 text-xs">Aperçu du projet</span>
              </div>

              {/* Info */}
              <div className="p-4 sm:p-5">
                <p className="text-[10px] font-bold tracking-widest text-primary uppercase mb-2">
                  {project.category}
                </p>
                <h3 className="text-sm sm:text-base font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-xs text-muted-foreground leading-relaxed mb-4 line-clamp-2">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {project.tech.map(t => (
                    <span
                      key={t}
                      className="px-2 py-0.5 rounded text-[10px] font-medium border border-white/10 bg-white/3 text-muted-foreground uppercase tracking-wide"
                    >
                      {t}
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
