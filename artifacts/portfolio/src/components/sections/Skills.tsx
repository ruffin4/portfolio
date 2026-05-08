import { motion } from 'framer-motion';
import { skills } from '@/data/portfolio';
import * as Icons from 'react-icons/si';

const SkillCard = ({ name, iconName }: { name: string; iconName: string }) => {
  // @ts-ignore
  const Icon = Icons[iconName] || Icons.SiReact;

  return (
    <motion.div
      whileHover={{ y: -5, scale: 1.05 }}
      className="glass-card flex flex-col items-center justify-center p-6 rounded-xl gap-4 group cursor-pointer"
    >
      <Icon className="text-4xl text-muted-foreground group-hover:text-primary transition-colors duration-300" />
      <span className="text-sm font-medium text-foreground">{name}</span>
    </motion.div>
  );
};

const SkillSection = ({ title, items, delay }: { title: string; items: any[]; delay: number }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-50px" }}
    transition={{ duration: 0.5, delay }}
    className="space-y-6"
  >
    <h3 className="text-2xl font-display font-semibold border-b border-border pb-2 inline-block">
      {title}
    </h3>
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
      {items.map((skill) => (
        <SkillCard key={skill.name} name={skill.name} iconName={skill.icon} />
      ))}
    </div>
  </motion.div>
);

export function Skills() {
  return (
    <section id="skills" className="py-24 md:py-32 relative bg-secondary/10">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">Technical Arsenal</h2>
          <div className="w-20 h-1 bg-primary rounded-full" />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div className="space-y-16">
            <SkillSection title="Frontend" items={skills.frontend} delay={0.1} />
            <SkillSection title="DevOps & Cloud" items={skills.devops} delay={0.3} />
          </div>
          <div className="space-y-16">
            <SkillSection title="Backend API" items={skills.backend} delay={0.2} />
            <SkillSection title="Databases" items={skills.database} delay={0.4} />
          </div>
        </div>
      </div>
    </section>
  );
}