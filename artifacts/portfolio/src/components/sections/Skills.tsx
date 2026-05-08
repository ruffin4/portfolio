import { motion } from 'framer-motion';
import { skillCategories, skillTags } from '@/data/portfolio';
import * as Icons from 'react-icons/si';
import { useLang } from '@/lib/i18n';

const SkillCard = ({ name, icon, color }: { name: string; icon: string; color: string }) => {
  // @ts-ignore
  const Icon = Icons[icon] || Icons.SiReact;

  return (
    <div className="flex items-center gap-3 rounded-lg border border-white/8 bg-white/3 px-4 py-3 hover:border-primary/30 transition-colors duration-200">
      <div className="shrink-0 w-8 h-8 flex items-center justify-center">
        <Icon style={{ color, fontSize: 24 }} />
      </div>
      <span className="text-sm font-medium text-foreground">{name}</span>
    </div>
  );
};

export function Skills() {
  const { t } = useLang();
  const left = skillCategories.slice(0, 2);
  const right = skillCategories.slice(2, 4);

  return (
    <section id="skills" className="py-24 md:py-32 relative bg-white/[0.015]">
      <div className="container mx-auto px-6 max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-14"
        >
          <p className="text-xs font-semibold tracking-widest text-primary uppercase mb-4">
            {t.skills.tag}
          </p>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-5">{t.skills.title}</h2>
          <div className="w-12 h-[3px] bg-primary rounded-full" />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="space-y-10">
            {left.map((cat, ci) => (
              <motion.div
                key={cat.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: ci * 0.1 }}
                className="space-y-4"
              >
                <h3 className="text-lg font-semibold text-foreground">{cat.title}</h3>
                <div className="grid grid-cols-2 gap-3">
                  {cat.items.map(skill => (
                    <SkillCard key={skill.name} {...skill} />
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          <div className="space-y-10">
            {right.map((cat, ci) => (
              <motion.div
                key={cat.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: 0.2 + ci * 0.1 }}
                className="space-y-4"
              >
                <h3 className="text-lg font-semibold text-foreground">{cat.title}</h3>
                <div className="grid grid-cols-2 gap-3">
                  {cat.items.map(skill => (
                    <SkillCard key={skill.name} {...skill} />
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-16 flex flex-wrap gap-2"
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
