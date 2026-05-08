import { motion, useMotionValue, useTransform, animate } from 'framer-motion';
import { useEffect, useRef } from 'react';
import { useInView } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { useLang } from '@/lib/i18n';

function AnimatedNumber({ value }: { value: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true });
  const motionVal = useMotionValue(0);

  const numMatch = value.match(/\d+/);
  const num = numMatch ? parseInt(numMatch[0]) : 0;
  const suffix = value.replace(/\d+/, '');

  useEffect(() => {
    if (isInView && num > 0) {
      const controls = animate(motionVal, num, {
        duration: 1.6,
        ease: 'easeOut',
        onUpdate(v) {
          if (ref.current) {
            ref.current.textContent = Math.round(v) + suffix;
          }
        },
      });
      return controls.stop;
    }
    return;
  }, [isInView, num, suffix, motionVal]);

  return (
    <span ref={ref}>
      {isInView ? '0' + suffix : '0' + suffix}
    </span>
  );
}

export function About() {
  const { t } = useLang();

  return (
    <section id="about" className="py-24 md:py-32 relative">
      <div className="container mx-auto px-6 max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="mb-14"
        >
          <p className="text-xs font-semibold tracking-widest text-primary uppercase mb-4">
            {t.about.tag}
          </p>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-5">{t.about.title}</h2>
          <motion.div
            initial={{ scaleX: 0, originX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="w-12 h-[3px] bg-primary rounded-full"
          />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="space-y-6"
          >
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed">{t.about.p1}</p>
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed">{t.about.p2}</p>
            <motion.a
              href="#contact"
              whileHover={{ x: 6 }}
              transition={{ type: 'spring' as const, stiffness: 400 }}
              className="inline-flex items-center gap-2 mt-4 px-6 py-3 rounded-lg border border-white/15 text-sm font-medium text-foreground hover:border-primary/50 hover:text-primary transition-colors duration-200"
            >
              {t.about.cta} <ArrowRight size={16} />
            </motion.a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >
            <div className="grid grid-cols-2 gap-4">
              {t.about.stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20, scale: 0.95 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                  whileHover={{ scale: 1.04, borderColor: 'rgba(5,211,248,0.3)' }}
                  className="rounded-xl border border-white/8 bg-white/3 p-6 flex flex-col gap-1 transition-colors duration-200 cursor-default"
                >
                  <span className="text-3xl md:text-4xl font-bold text-primary">
                    <AnimatedNumber value={stat.value} />
                  </span>
                  <span className="text-sm text-muted-foreground">{stat.label}</span>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.5 }}
              whileHover={{ scale: 1.02 }}
              className="rounded-xl border border-white/8 bg-white/3 p-6 space-y-3 hover:border-primary/25 transition-colors duration-200"
            >
              <div className="flex items-center gap-2">
                <motion.span
                  animate={{ scale: [1, 1.4, 1] }}
                  transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }}
                  className="w-2 h-2 rounded-full bg-primary shrink-0"
                />
                <p className="font-semibold text-foreground">{t.about.ctaCard}</p>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed">{t.about.ctaCardDesc}</p>
              <motion.a
                href="#contact"
                whileHover={{ x: 4 }}
                className="inline-flex items-center gap-1.5 text-xs font-bold tracking-widest text-primary uppercase hover:underline"
              >
                {t.about.ctaCardLink} <ArrowRight size={12} />
              </motion.a>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
