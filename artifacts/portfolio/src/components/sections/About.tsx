import { motion } from 'framer-motion';
import { profileData } from '@/data/portfolio';
import profileAbout from '@assets/image4_1778226703318.png';

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

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Photo column */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7 }}
            className="flex justify-center lg:justify-start"
          >
            <div className="relative">
              {/* Glow */}
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-primary/30 via-cyan-500/15 to-violet-500/20 blur-2xl scale-105" />
              {/* Border gradient */}
              <div className="relative p-[2px] rounded-3xl bg-gradient-to-br from-primary/50 via-cyan-400/20 to-violet-500/40">
                <div className="relative overflow-hidden rounded-[22px] bg-background/50">
                  <img
                    src={profileAbout}
                    alt="Ruffin Rafanomezantsoa"
                    data-testid="img-profile-about"
                    className="w-full max-w-xs lg:max-w-sm h-auto object-cover object-top"
                    style={{ aspectRatio: '3/4', maxHeight: '440px', objectFit: 'cover' }}
                  />
                  <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-background/50 to-transparent" />
                </div>
              </div>
              {/* Location badge */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="absolute -bottom-4 left-1/2 -translate-x-1/2 glass-card border-white/10 px-5 py-2 rounded-full shadow-xl whitespace-nowrap"
              >
                <span className="text-sm font-medium text-muted-foreground">Madagascar &mdash; Remote Available</span>
              </motion.div>
            </div>
          </motion.div>

          {/* Text + stats column */}
          <div className="space-y-10">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-5 text-base md:text-lg text-muted-foreground"
            >
              <p>
                I am a Senior Fullstack Engineer obsessed with building highly scalable, performant, and resilient applications. I bridge the gap between elegant frontend interfaces and robust backend architectures.
              </p>
              <p>
                My expertise spans the entire software lifecycle — from conceptualizing database schemas and writing clean TypeScript code, to containerizing applications with Docker and establishing automated CI/CD pipelines.
              </p>
              <p>
                I don&apos;t just write code; I design systems. Whether it&apos;s optimizing a React application for Core Web Vitals, migrating a monolith to NestJS microservices, or configuring an Nginx reverse proxy on a Linux VPS, I ensure every layer of the stack is purposeful and efficient.
              </p>
            </motion.div>

            {/* Stats grid */}
            <div className="grid grid-cols-2 gap-4">
              {profileData.stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                  className="glass-card p-5 rounded-2xl border-white/5 flex flex-col items-center justify-center text-center"
                >
                  <div className="text-3xl md:text-4xl font-display font-bold text-gradient mb-1">
                    {stat.value}
                  </div>
                  <div className="text-xs font-medium text-muted-foreground uppercase tracking-wider">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
