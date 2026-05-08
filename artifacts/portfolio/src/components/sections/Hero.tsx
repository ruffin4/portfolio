import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { SiGithub, SiMaildotru } from 'react-icons/si';
import { Linkedin } from 'lucide-react';
import { profileData } from '@/data/portfolio';

export function Hero() {
  return (
    <section id="hero" className="relative min-h-[100dvh] flex items-center justify-center overflow-hidden pt-20">
      {/* Abstract Background */}
      <div className="absolute inset-0 z-0 bg-background">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-[120px] mix-blend-screen" />
        <div className="absolute bottom-1/4 right-1/4 w-[30rem] h-[30rem] bg-cyan-500/10 rounded-full blur-[120px] mix-blend-screen" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto flex flex-col items-center text-center">
          
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="mb-8 inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card border-primary/30"
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
            className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter mb-6 leading-tight"
          >
            <span className="block text-gradient">Fullstack JS/TS</span>
            <span className="block">& DevOps Engineer</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg md:text-xl text-muted-foreground mb-10 max-w-2xl"
          >
            {profileData.shortDesc}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-wrap justify-center gap-4 mb-12"
          >
            <Button size="lg" className="rounded-full px-8 h-12 text-base neon-glow">
              Contact Me
            </Button>
            <Button size="lg" variant="secondary" className="rounded-full px-8 h-12 text-base glass-card border-white/10 hover:border-primary/50">
              View Projects
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="flex items-center gap-6"
          >
            <a href={profileData.socials.github} target="_blank" rel="noreferrer" className="text-muted-foreground hover:text-primary transition-colors p-2">
              <SiGithub size={24} />
            </a>
            <a href={profileData.socials.linkedin} target="_blank" rel="noreferrer" className="text-muted-foreground hover:text-primary transition-colors p-2">
              <Linkedin size={24} />
            </a>
            <a href={`mailto:${profileData.socials.email}`} className="text-muted-foreground hover:text-primary transition-colors p-2">
              <SiMaildotru size={24} />
            </a>
          </motion.div>

        </div>
      </div>
    </section>
  );
}