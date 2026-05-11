import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

export function Preloader() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCount((prev) => (prev < 100 ? prev + 1 : 100));
    }, 20);
    return () => clearInterval(interval);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ 
        opacity: 0,
        transition: { duration: 0.8, ease: [0.43, 0.13, 0.23, 0.96] }
      }}
      className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-background"
    >
      {/* Background Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[120px]" />
      </div>

      <div className="relative z-10 flex flex-col items-center">
        {/* Animated Logo/Initials */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="relative mb-16 w-24 h-24 flex items-center justify-center"
        >
          {/* Abstract Glowing Center */}
          <motion.div 
            animate={{ scale: [1, 1.2, 1], opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="w-4 h-4 bg-primary rounded-full shadow-[0_0_20px_rgba(5,211,248,0.8)]"
          />
          
          <motion.div 
            animate={{ 
              rotate: 360,
              scale: [1, 1.1, 1]
            }}
            transition={{ 
              rotate: { duration: 4, repeat: Infinity, ease: "linear" },
              scale: { duration: 2, repeat: Infinity, ease: "easeInOut" }
            }}
            className="absolute inset-0 border border-primary/20 rounded-full" 
          />
          <motion.div 
            animate={{ 
              rotate: -360,
              scale: [1, 1.05, 1]
            }}
            transition={{ 
              rotate: { duration: 6, repeat: Infinity, ease: "linear" },
              scale: { duration: 3, repeat: Infinity, ease: "easeInOut" }
            }}
            className="absolute -inset-4 border border-cyan-500/10 rounded-full" 
          />
        </motion.div>

        {/* Progress Info */}
        <div className="flex flex-col items-center gap-4">
          <div className="flex items-center gap-3">
            <span className="text-xs font-medium tracking-[0.3em] text-muted-foreground uppercase">
              Loading Experience
            </span>
            <span className="text-sm font-mono text-primary w-8">
              {count}%
            </span>
          </div>
          
          {/* Progress Bar Container */}
          <div className="w-48 h-[2px] bg-white/5 rounded-full overflow-hidden relative">
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: `${count}%` }}
              className="absolute inset-y-0 left-0 bg-gradient-to-r from-primary to-cyan-500 shadow-[0_0_10px_rgba(5,211,248,0.5)]"
            />
          </div>
        </div>
      </div>

      {/* Floating Elements */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="absolute bottom-12 text-[10px] tracking-[0.4em] text-muted-foreground/50 uppercase"
      >
        © 2026 Ruffin Rafanomezantsoa
      </motion.div>
    </motion.div>
  );
}
