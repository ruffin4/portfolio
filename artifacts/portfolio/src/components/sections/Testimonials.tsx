import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';
import { useLang } from '@/lib/i18n';

const starVariants = {
  hidden: { opacity: 0, scale: 0 },
  show: (i: number) => ({
    opacity: 1,
    scale: 1,
    transition: { delay: i * 0.08, type: 'spring', stiffness: 400 },
  }),
};

export function Testimonials() {
  const { t } = useLang();

  return (
    <section id="testimonials" className="py-24 md:py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-primary/5 pointer-events-none" />
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">{t.testimonials.title}</h2>
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="w-20 h-1 bg-primary rounded-full mx-auto"
          />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {t.testimonials.items.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 30, rotateX: 8 }}
              whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.6, delay: index * 0.12 }}
              whileHover={{ y: -8, scale: 1.02 }}
              className="glass-card p-8 rounded-2xl relative hover:shadow-[0_12px_40px_rgba(5,211,248,0.1)] hover:border-primary/20 transition-all duration-300 cursor-default"
            >
              <motion.div
                initial={{ opacity: 0.05 }}
                whileHover={{ opacity: 0.2, scale: 1.1 }}
                transition={{ duration: 0.3 }}
                className="absolute top-6 right-6"
              >
                <Quote className="w-12 h-12 text-primary" />
              </motion.div>

              <div className="mb-6 flex items-center gap-4">
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ type: 'spring', stiffness: 300 }}
                  className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center text-primary font-display font-bold text-xl shrink-0"
                >
                  {testimonial.name.charAt(0)}
                </motion.div>
                <div>
                  <h4 className="font-semibold text-foreground">{testimonial.name}</h4>
                  <p className="text-sm text-muted-foreground">{testimonial.company}</p>
                </div>
              </div>

              {/* Stars */}
              <motion.div
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                className="flex gap-1 mb-4"
              >
                {[0, 1, 2, 3, 4].map(i => (
                  <motion.span
                    key={i}
                    custom={i}
                    variants={starVariants}
                    className="text-primary text-sm"
                  >
                    ★
                  </motion.span>
                ))}
              </motion.div>

              <p className="text-muted-foreground leading-relaxed italic">"{testimonial.text}"</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
