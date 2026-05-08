import { motion } from 'framer-motion';
import { profileData } from '@/data/portfolio';

export function About() {
  return (
    <section id="about" className="py-24 md:py-32 relative">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">About Me</h2>
          <div className="w-20 h-1 bg-primary rounded-full" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6 text-lg text-muted-foreground"
          >
            <p>
              I am a Senior Fullstack Engineer obsessed with building highly scalable, performant, and resilient applications. I bridge the gap between elegant frontend interfaces and robust backend architectures.
            </p>
            <p>
              My expertise spans the entire software lifecycle — from conceptualizing database schemas and writing clean TypeScript code, to containerizing applications with Docker and establishing automated CI/CD pipelines.
            </p>
            <p>
              I don't just write code; I design systems. Whether it's optimizing a React application for Core Web Vitals, migrating a monolith to NestJS microservices, or configuring an Nginx reverse proxy on a Linux VPS, I ensure every layer of the stack is purposeful and efficient.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 gap-6">
            {profileData.stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                className="glass-card p-6 rounded-2xl border-white/5 flex flex-col items-center justify-center text-center"
              >
                <div className="text-4xl md:text-5xl font-display font-bold text-gradient mb-2">
                  {stat.value}
                </div>
                <div className="text-sm font-medium text-muted-foreground uppercase tracking-wider">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}