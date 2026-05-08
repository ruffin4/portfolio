import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { SiGithub, SiMaildotru } from 'react-icons/si';
import { Linkedin, Download, ArrowRight } from 'lucide-react';
import { profileData } from '@/data/portfolio';
import { useLang } from '@/lib/i18n';
import photo1 from '@assets/img1_nobg.png';
import photo2 from '@assets/img2_nobg.png';
import photo3 from '@assets/img3_nobg.png';
import photo4 from '@assets/img4_nobg.png';

const photos = [photo1, photo2, photo3, photo4];

const slideVariants = {
  enter: (dir: number) => ({
    x: dir > 0 ? 60 : -60,
    opacity: 0,
    scale: 0.96,
    filter: 'blur(4px)',
  }),
  center: {
    x: 0,
    opacity: 1,
    scale: 1,
    filter: 'blur(0px)',
  },
  exit: (dir: number) => ({
    x: dir > 0 ? -60 : 60,
    opacity: 0,
    scale: 0.96,
    filter: 'blur(4px)',
  }),
};

export function Hero() {
  const { t } = useLang();
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(1);

  const goTo = (idx: number) => {
    setDirection(idx > current ? 1 : -1);
    setCurrent(idx);
  };

  return (
    <section id="hero" className="relative min-h-[100dvh] flex items-center justify-center overflow-hidden pt-20">
      {/* Abstract Background */}
      <div className="absolute inset-0 z-0 bg-background">
        <div className="absolute top-1/4 left-1/3 w-[32rem] h-[32rem] bg-primary/15 rounded-full blur-[140px] mix-blend-screen" />
        <div className="absolute bottom-1/4 right-1/4 w-[28rem] h-[28rem] bg-cyan-500/10 rounded-full blur-[140px] mix-blend-screen" />
        <div className="absolute top-1/2 right-1/3 w-64 h-64 bg-violet-500/8 rounded-full blur-[100px] mix-blend-screen" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center max-w-6xl mx-auto">

          {/* LEFT — Text content */}
          <div className="flex flex-col items-center lg:items-start text-center lg:text-left order-2 lg:order-1">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tighter mb-4 leading-tight"
            >
              <span className="block text-gradient">Fullstack</span>
              <span className="block">& DevOps</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-base md:text-lg text-muted-foreground mb-8 max-w-lg"
            >
              {t.hero.desc}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-wrap justify-center lg:justify-start gap-3 mb-10"
            >
              <Button size="lg" className="rounded-lg px-7 h-12 text-sm font-semibold neon-glow gap-2">
                <Download size={16} />
                {t.hero.downloadCV}
              </Button>
              <Button
                size="lg"
                variant="secondary"
                className="rounded-lg px-7 h-12 text-sm font-semibold glass-card border-white/10 hover:border-primary/50 gap-2"
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              >
                {t.hero.contactMe}
                <ArrowRight size={16} />
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="flex items-center gap-5"
            >
              <a
                href={profileData.socials.github}
                target="_blank"
                rel="noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors p-2 glass-card rounded-xl border-white/5 hover:border-primary/30"
              >
                <SiGithub size={20} />
              </a>
              <a
                href={profileData.socials.linkedin}
                target="_blank"
                rel="noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors p-2 glass-card rounded-xl border-white/5 hover:border-primary/30"
              >
                <Linkedin size={20} />
              </a>
              <a
                href={`mailto:${profileData.socials.email}`}
                className="text-muted-foreground hover:text-primary transition-colors p-2 glass-card rounded-xl border-white/5 hover:border-primary/30"
              >
                <SiMaildotru size={20} />
              </a>
            </motion.div>
          </div>

          {/* RIGHT — Animated photo slideshow */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="flex flex-col items-center justify-center order-1 lg:order-2 gap-5"
          >
            <div className="relative w-full max-w-sm lg:max-w-md">
              {/* Glow behind photo */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/30 via-cyan-500/15 to-violet-500/20 blur-2xl scale-105 rounded-full" />

              {/* Photo carousel */}
              <div
                className="relative overflow-hidden"
                style={{ aspectRatio: '3/4', maxHeight: '520px' }}
              >
                <AnimatePresence initial={false} custom={direction} mode="wait">
                  <motion.img
                    key={current}
                    src={photos[current]}
                    custom={direction}
                    variants={slideVariants}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    transition={{ duration: 0.55, ease: [0.4, 0, 0.2, 1] }}
                    alt={`Ruffin Rafanomezantsoa — photo ${current + 1}`}
                    className="absolute inset-0 w-full h-full object-cover object-top drop-shadow-2xl"
                  />
                </AnimatePresence>
              </div>

              {/* Floating badge — experience */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.8 }}
                className="absolute -left-6 top-1/3 glass-card border-white/10 px-4 py-3 rounded-2xl shadow-xl z-10"
              >
                <div className="text-2xl font-display font-bold text-gradient">2+</div>
                <div className="text-xs text-muted-foreground font-medium leading-tight whitespace-pre-line">{t.hero.years}</div>
              </motion.div>

              {/* Floating badge — projects */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 1.0 }}
                className="absolute -right-6 bottom-1/3 glass-card border-white/10 px-4 py-3 rounded-2xl shadow-xl z-10"
              >
                <div className="text-2xl font-display font-bold text-gradient">15+</div>
                <div className="text-xs text-muted-foreground font-medium leading-tight whitespace-pre-line">{t.hero.projects}</div>
              </motion.div>
            </div>

            {/* Dot navigation */}
            <div className="flex items-center gap-2 z-10">
              {photos.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => goTo(idx)}
                  aria-label={`Photo ${idx + 1}`}
                  className="transition-all duration-300 rounded-full focus:outline-none"
                  style={{
                    width: idx === current ? 24 : 8,
                    height: 8,
                    background: idx === current ? '#05D3F8' : 'rgba(255,255,255,0.2)',
                  }}
                />
              ))}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
