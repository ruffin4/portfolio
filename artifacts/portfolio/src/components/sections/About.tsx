import { motion } from 'framer-motion';
import { profileData } from '@/data/portfolio';
import { ArrowRight } from 'lucide-react';

export function About() {
  return (
    <section id="about" className="py-24 md:py-32 relative">
      <div className="container mx-auto px-6 max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-14"
        >
          <p className="text-xs font-semibold tracking-widest text-primary uppercase mb-4">
            01 &nbsp;·&nbsp; Qui je suis
          </p>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-5">À propos de moi</h2>
          <div className="w-12 h-[3px] bg-primary rounded-full" />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Left: text + button */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="space-y-6"
          >
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
              Développeur Web Fullstack basé à Madagascar, je conçois et réalise des plateformes digitales sur mesure depuis plus de 4 ans. Fort d'un socle technique solide (Node.js, NestJS, React, TypeScript et autres…), j'accompagne mes clients de l'idée initiale jusqu'à la mise en ligne d'outils performants.
            </p>
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
              Mon approche est centrée sur le résultat et l'expérience utilisateur. Qu'il s'agisse d'un site vitrine élégant, d'un e-commerce ou d'une application métier complexe, je mets au point des solutions fiables, rapides et parfaitement adaptées à vos besoins réels.
            </p>

            <motion.a
              href="#contact"
              whileHover={{ x: 4 }}
              className="inline-flex items-center gap-2 mt-4 px-6 py-3 rounded-lg border border-white/15 text-sm font-medium text-foreground hover:border-primary/50 hover:text-primary transition-colors duration-200"
            >
              En savoir plus sur mon parcours <ArrowRight size={16} />
            </motion.a>
          </motion.div>

          {/* Right: stats grid + CTA card */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >
            {/* 2x2 stats grid */}
            <div className="grid grid-cols-2 gap-4">
              {profileData.stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.2 + index * 0.08 }}
                  className="rounded-xl border border-white/8 bg-white/3 p-6 flex flex-col gap-1"
                >
                  <span className="text-3xl md:text-4xl font-bold text-primary">
                    {stat.value}
                  </span>
                  <span className="text-sm text-muted-foreground">
                    {stat.label}
                  </span>
                </motion.div>
              ))}
            </div>

            {/* CTA card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="rounded-xl border border-white/8 bg-white/3 p-6 space-y-3"
            >
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-primary shrink-0" />
                <p className="font-semibold text-foreground">Un projet en tête ?</p>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Je suis actuellement ouvert à de nouveaux projets stimulants, que ce soit en freelance pour construire l'architecture de votre app, ou pour une plateforme ou autres !
              </p>
              <a
                href="#contact"
                className="inline-flex items-center gap-1.5 text-xs font-bold tracking-widest text-primary uppercase hover:underline"
              >
                Lancer une discussion <ArrowRight size={12} />
              </a>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
