import { motion } from 'framer-motion';
import { projects } from '@/data/portfolio';
import { ExternalLink, Github } from 'lucide-react';
import { useLang } from '@/lib/i18n';

export function Projects() {
  const { t } = useLang();
  const featured = projects.find(p => p.featured);
  const grid = projects.filter(p => !p.featured);

  return (
    <section id="projects" className="py-24 md:py-32 relative bg-white/[0.015]">
      <div className="container mx-auto px-6 max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-14"
        >
          <p className="text-xs font-semibold tracking-widest text-primary uppercase mb-4">
            {t.projects.tag}
          </p>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-5">{t.projects.title}</h2>
          <div className="w-12 h-[3px] bg-primary rounded-full" />
        </motion.div>

        {featured && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.7 }}
            className="relative rounded-xl border border-white/8 bg-white/3 overflow-hidden mb-8"
          >
            <div className="absolute top-4 right-4 z-10">
              <span className="px-3 py-1 rounded text-xs font-bold tracking-widest bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 uppercase">
                {featured.status}
              </span>
            </div>

            <div className="relative w-full bg-black/40" style={{ minHeight: 340 }}>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-[75%] h-[85%] rounded-lg bg-white/5 border border-white/10 flex items-center justify-center">
                  <span className="text-muted-foreground/30 text-sm">{t.projects.screenshot}</span>
                </div>
              </div>
            </div>

            <div className="p-8 border-t border-white/8">
              <p className="text-xs font-bold tracking-widest text-primary uppercase mb-3">
                {featured.category}
              </p>
              <h3 className="text-2xl font-bold text-foreground mb-3">{featured.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed mb-5 max-w-3xl">
                {featured.description}
              </p>
              <div className="flex flex-wrap gap-2 items-center justify-between">
                <div className="flex flex-wrap gap-2">
                  {featured.tech.map(t => (
                    <span
                      key={t}
                      className="px-3 py-1 rounded text-xs font-medium border border-white/10 bg-white/3 text-muted-foreground uppercase tracking-wide"
                    >
                      {t}
                    </span>
                  ))}
                </div>
                <div className="flex gap-3 text-muted-foreground">
                  <a href={featured.github} className="hover:text-primary transition-colors"><Github size={18} /></a>
                  <a href={featured.live} className="hover:text-primary transition-colors"><ExternalLink size={18} /></a>
                </div>
              </div>
            </div>
          </motion.div>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {grid.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative rounded-xl border border-white/8 bg-white/3 overflow-hidden hover:border-primary/25 transition-colors duration-300"
            >
              <div className="absolute top-3 right-3 z-10">
                <span className="px-2 py-0.5 rounded text-[10px] font-bold tracking-widest bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 uppercase">
                  {project.status}
                </span>
              </div>

              <div className="relative w-full aspect-video bg-black/40 flex items-center justify-center">
                <span className="text-muted-foreground/20 text-xs">{t.projects.preview}</span>
              </div>

              <div className="p-5">
                <p className="text-[10px] font-bold tracking-widest text-primary uppercase mb-2">
                  {project.category}
                </p>
                <h3 className="text-base font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-xs text-muted-foreground leading-relaxed mb-4 line-clamp-2">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {project.tech.map(tech => (
                    <span
                      key={tech}
                      className="px-2 py-0.5 rounded text-[10px] font-medium border border-white/10 bg-white/3 text-muted-foreground uppercase tracking-wide"
                    >
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
