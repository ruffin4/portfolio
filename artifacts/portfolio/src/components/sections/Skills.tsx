import { motion } from 'framer-motion';
import { skillCategories, skillTags } from '@/data/portfolio';
import * as Icons from 'react-icons/si';

const SkillCard = ({ name, icon, color }: { name: string; icon: string; color: string }) => {
  // @ts-ignore
  const Icon = Icons[icon] || Icons.SiReact;

  return (
    <div className="flex items-center gap-2.5 rounded-lg border border-white/8 bg-white/3 px-3 py-2.5 hover:border-primary/30 transition-colors duration-200">
      <div className="shrink-0 w-7 h-7 flex items-center justify-center">
        <Icon style={{ color, fontSize: 20 }} />
      </div>
      <span className="text-xs sm:text-sm font-medium text-foreground leading-tight">{name}</span>
    </div>
  );
};

export function Skills() {
  const left = skillCategories.slice(0, 2);
  const right = skillCategories.slice(2, 4);

  return (
    <section id="skills" className="py-20 md:py-32 relative bg-white/[0.015]">
      <div className="container mx-auto px-5 sm:px-8 max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-12 md:mb-14"
        >
          <p className="text-xs font-semibold tracking-widest text-primary uppercase mb-3">
            02 &nbsp;·&nbsp; Technologies &amp; outils maîtrisés
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight mb-4">Compétences</h2>
          <div className="w-12 h-[3px] bg-primary rounded-full" />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-12">
          {/* Left column */}
          <div className="space-y-8">
            {left.map((cat, ci) => (
              <motion.div
                key={cat.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: ci * 0.1 }}
                className="space-y-3"
              >
                <h3 className="text-base font-semibold text-foreground">{cat.title}</h3>
                <div className="grid grid-cols-1 min-[380px]:grid-cols-2 gap-2.5">
                  {cat.items.map(skill => (
                    <SkillCard key={skill.name} {...skill} />
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Right column */}
          <div className="space-y-8">
            {right.map((cat, ci) => (
              <motion.div
                key={cat.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: 0.15 + ci * 0.1 }}
                className="space-y-3"
              >
                <h3 className="text-base font-semibold text-foreground">{cat.title}</h3>
                <div className="grid grid-cols-1 min-[380px]:grid-cols-2 gap-2.5">
                  {cat.items.map(skill => (
                    <SkillCard key={skill.name} {...skill} />
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Tag cloud */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-12 md:mt-16 flex flex-wrap gap-2"
        >
          {skillTags.map(tag => (
            <span
              key={tag}
              className="px-3 py-1 rounded-full text-xs font-medium border border-white/10 bg-white/3 text-muted-foreground tracking-wide"
            >
              {tag}
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
