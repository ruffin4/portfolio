import { motion } from 'framer-motion';
import { projects } from '@/data/portfolio';
import { ExternalLink, Github } from 'lucide-react';
import { useLang } from '@/lib/i18n';

export function Projects() {
  const { t } = useLang();

  const mergedProjects = projects.map((p, i) => ({
    ...p,
    ...(t.projects.items[i] ?? {}),
  }));

  const featured = mergedProjects.find(p => p.featured);
  const grid = mergedProjects.filter(p => !p.featured);

  return (
    <section id="projects" className="py-24 md:py-32 relative bg-white/[0.015]">
      <div className="container mx-auto px-6 max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="mb-14"
        >
          <p className="text-xs font-semibold tracking-widest text-primary uppercase mb-4">
            {t.projects.tag}
          </p>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-5">{t.projects.title}</h2>
          <motion.div
            initial={{ scaleX: 0, originX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="w-12 h-[3px] bg-primary rounded-full"
          />
        </motion.div>

        {featured && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.7 }}
            whileHover={{ y: -6 }}
            className="relative rounded-xl border border-white/8 bg-white/3 overflow-hidden mb-8 hover:border-primary/30 hover:shadow-[0_0_40px_rgba(5,211,248,0.08)] transition-all duration-300"
          >
            <div className="absolute top-4 right-4 z-10">
              <span className="px-3 py-1 rounded text-xs font-bold tracking-widest bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 uppercase">
                {featured.status}
              </span>
            </div>
            <div className="relative w-full bg-black/40 overflow-hidden" style={{ minHeight: 340 }}>
              <img 
                src={featured.image} 
                alt={featured.title} 
                className="w-full h-full object-cover object-top"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/20" />
            </div>
            <div className="p-8 border-t border-white/8">
              <p className="text-xs font-bold tracking-widest text-primary uppercase mb-3">{featured.category}</p>
              <h3 className="text-2xl font-bold text-foreground mb-3">{featured.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed mb-5 max-w-3xl">{featured.description}</p>
              <div className="flex flex-wrap gap-2 items-center justify-between">
                <motion.div
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true }}
                  variants={{ hidden: {}, show: { transition: { staggerChildren: 0.05 } } }}
                  className="flex flex-wrap gap-2"
                >
                  {featured.tech.map(tech => (
                    <motion.span
                      key={tech}
                      variants={{ hidden: { opacity: 0, y: 8 }, show: { opacity: 1, y: 0 } }}
                      className="px-3 py-1 rounded text-xs font-medium border border-white/10 bg-white/3 text-muted-foreground uppercase tracking-wide"
                    >
                      {tech}
                    </motion.span>
                  ))}
                </motion.div>
                <div className="flex gap-3 text-muted-foreground">
                  <motion.a
                    href={featured.github}
                    whileHover={{ scale: 1.2, color: '#05D3F8' }}
                    className="hover:text-primary transition-colors"
                  >
                    <Github size={18} />
                  </motion.a>
                  <motion.a
                    href={featured.live}
                    whileHover={{ scale: 1.2, color: '#05D3F8' }}
                    className="hover:text-primary transition-colors"
                  >
                    <ExternalLink size={18} />
                  </motion.a>
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
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -8, scale: 1.01 }}
              className="group relative rounded-xl border border-white/8 bg-white/3 overflow-hidden hover:border-primary/30 hover:shadow-[0_8px_32px_rgba(5,211,248,0.08)] transition-all duration-300"
            >
              <div className="absolute top-3 right-3 z-10">
                <span className="px-2 py-0.5 rounded text-[10px] font-bold tracking-widest bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 uppercase">
                  {project.status}
                </span>
              </div>
              <div className="relative w-full aspect-video bg-black/40 flex items-center justify-center overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                />
                <motion.div
                  className="absolute inset-0 bg-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                />
              </div>
              <div className="p-5">
                <p className="text-[10px] font-bold tracking-widest text-primary uppercase mb-2">{project.category}</p>
                <h3 className="text-base font-bold text-foreground mb-2 group-hover:text-primary transition-colors duration-200">{project.title}</h3>
                <p className="text-xs text-muted-foreground leading-relaxed mb-4 line-clamp-2">{project.description}</p>
                <motion.div
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true }}
                  variants={{ hidden: {}, show: { transition: { staggerChildren: 0.04 } } }}
                  className="flex flex-wrap gap-1.5"
                >
                  {project.tech.map(tech => (
                    <motion.span
                      key={tech}
                      variants={{ hidden: { opacity: 0, scale: 0.8 }, show: { opacity: 1, scale: 1 } }}
                      className="px-2 py-0.5 rounded text-[10px] font-medium border border-white/10 bg-white/3 text-muted-foreground uppercase tracking-wide"
                    >
                      {tech}
                    </motion.span>
                  ))}
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
