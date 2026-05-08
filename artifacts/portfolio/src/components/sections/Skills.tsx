import { motion } from 'framer-motion';
import { skillCategories, skillTags } from '@/data/portfolio';
import * as Icons from 'react-icons/si';
import { useLang } from '@/lib/i18n';

const SkillCard = ({ name, icon, color }: { name: string; icon: string; color: string }) => {
  // @ts-ignore
  const Icon = Icons[icon] || Icons.SiReact;
  return (
    <motion.div
      whileHover={{ scale: 1.04, x: 5 }}
      transition={{ type: 'spring' as const, stiffness: 400, damping: 20 }}
      className="flex items-center gap-3 rounded-lg border border-white/8 bg-white/3 px-4 py-3 hover:border-primary/40 hover:bg-primary/5 transition-colors duration-200 cursor-default"
    >
      <motion.div
        whileHover={{ rotate: 12, scale: 1.2 }}
        transition={{ type: 'spring' as const, stiffness: 300 }}
        className="shrink-0 w-8 h-8 flex items-center justify-center"
      >
        <Icon style={{ color, fontSize: 24 }} />
      </motion.div>
      <span className="text-sm font-medium text-foreground">{name}</span>
    </motion.div>
  );
};

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.07 } },
};

const itemAnim = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { duration: 0.4 } },
};

export function Skills() {
  const { t } = useLang();

  const categoriesWithTranslatedTitles = skillCategories.map((cat, i) => ({
    ...cat,
    title: t.skills.categories[i] ?? cat.title,
  }));

  const left = categoriesWithTranslatedTitles.slice(0, 2);
  const right = categoriesWithTranslatedTitles.slice(2, 4);

  return (
    <section id="skills" className="py-24 md:py-32 relative bg-white/[0.015]">
      <div className="container mx-auto px-6 max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="mb-14"
        >
          <p className="text-xs font-semibold tracking-widest text-primary uppercase mb-4">
            {t.skills.tag}
          </p>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-5">{t.skills.title}</h2>
          <motion.div
            initial={{ scaleX: 0, originX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="w-12 h-[3px] bg-primary rounded-full"
          />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="space-y-10">
            {left.map((cat, ci) => (
              <motion.div
                key={cat.title}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, margin: '-50px' }}
                variants={container}
                transition={{ delay: ci * 0.1 }}
                className="space-y-4"
              >
                <motion.h3
                  variants={itemAnim}
                  className="text-lg font-semibold text-foreground"
                >
                  {cat.title}
                </motion.h3>
                <div className="grid grid-cols-2 gap-3">
                  {cat.items.map(skill => (
                    <motion.div key={skill.name} variants={itemAnim}>
                      <SkillCard {...skill} />
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          <div className="space-y-10">
            {right.map((cat, ci) => (
              <motion.div
                key={cat.title}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, margin: '-50px' }}
                variants={container}
                transition={{ delay: 0.15 + ci * 0.1 }}
                className="space-y-4"
              >
                <motion.h3
                  variants={itemAnim}
                  className="text-lg font-semibold text-foreground"
                >
                  {cat.title}
                </motion.h3>
                <div className="grid grid-cols-2 gap-3">
                  {cat.items.map(skill => (
                    <motion.div key={skill.name} variants={itemAnim}>
                      <SkillCard {...skill} />
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Tags with stagger */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={{ hidden: {}, show: { transition: { staggerChildren: 0.04, delayChildren: 0.2 } } }}
          className="mt-16 flex flex-wrap gap-2"
        >
          {skillTags.map(tag => (
            <motion.span
              key={tag}
              variants={{ hidden: { opacity: 0, scale: 0.8 }, show: { opacity: 1, scale: 1 } }}
              whileHover={{ scale: 1.08, borderColor: '#05D3F8' }}
              className="px-3 py-1 rounded-full text-xs font-medium border border-white/10 bg-white/3 text-muted-foreground tracking-wide cursor-default transition-colors"
            >
              {tag}
            </motion.span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
