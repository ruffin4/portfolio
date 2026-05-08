import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { SiGithub, SiMaildotru } from 'react-icons/si';
import { Linkedin, Download, ArrowRight } from 'lucide-react';
import { profileData } from '@/data/portfolio';
import profileMain from '../../assets/profile_hero_nobg.png';

export function Hero() {
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
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="mb-6 inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card border-primary/30"
            >
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
              </span>
              <span className="text-sm font-medium">{profileData.availability}</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tighter mb-4 leading-tight"
            >
              <span className="block text-gradient">Fullstack JS/TS</span>
              <span className="block">& DevOps</span>
              <span className="block">Engineer</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-base md:text-lg text-muted-foreground mb-8 max-w-lg"
            >
              {profileData.shortDesc}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-wrap justify-center lg:justify-start gap-3 mb-10"
            >
              <Button size="lg" className="rounded-full px-7 h-12 text-sm font-semibold neon-glow gap-2">
                <Download size={16} />
                Download CV
              </Button>
              <Button
                size="lg"
                variant="secondary"
                className="rounded-full px-7 h-12 text-sm font-semibold glass-card border-white/10 hover:border-primary/50 gap-2"
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Contact Me
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
                data-testid="link-github"
                className="text-muted-foreground hover:text-primary transition-colors p-2 glass-card rounded-xl border-white/5 hover:border-primary/30"
              >
                <SiGithub size={20} />
              </a>
              <a
                href={profileData.socials.linkedin}
                target="_blank"
                rel="noreferrer"
                data-testid="link-linkedin"
                className="text-muted-foreground hover:text-primary transition-colors p-2 glass-card rounded-xl border-white/5 hover:border-primary/30"
              >
                <Linkedin size={20} />
              </a>
              <a
                href={`mailto:${profileData.socials.email}`}
                data-testid="link-email"
                className="text-muted-foreground hover:text-primary transition-colors p-2 glass-card rounded-xl border-white/5 hover:border-primary/30"
              >
                <SiMaildotru size={20} />
              </a>
            </motion.div>
          </div>

          {/* RIGHT — Profile photo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="flex items-center justify-center order-1 lg:order-2"
          >
            <div className="relative">
              {/* Outer glow ring */}
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-primary/40 via-cyan-500/20 to-violet-500/30 blur-2xl scale-105" />
              {/* No border frame — let the transparent PNG float freely */}
              <div className="relative">
                  <img
                    src={profileMain}
                    alt="Ruffin Rafanomezantsoa — Senior Fullstack & DevOps Engineer"
                    data-testid="img-profile-hero"
                    className="w-full max-w-sm lg:max-w-md h-auto object-contain drop-shadow-2xl"
                    style={{ maxHeight: '520px' }}
                  />
              </div>
              {/* Floating badge — experience */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.8 }}
                className="absolute -left-6 top-1/3 glass-card border-white/10 px-4 py-3 rounded-2xl shadow-xl"
              >
                <div className="text-2xl font-display font-bold text-gradient">4+</div>
                <div className="text-xs text-muted-foreground font-medium leading-tight">Years<br/>Experience</div>
              </motion.div>
              {/* Floating badge — projects */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 1.0 }}
                className="absolute -right-6 bottom-1/3 glass-card border-white/10 px-4 py-3 rounded-2xl shadow-xl"
              >
                <div className="text-2xl font-display font-bold text-gradient">50+</div>
                <div className="text-xs text-muted-foreground font-medium leading-tight">Projects<br/>Delivered</div>
              </motion.div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
