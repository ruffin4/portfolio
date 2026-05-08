import { motion } from 'framer-motion';
import { services } from '@/data/portfolio';
import { Globe, Layers, Database, Wrench, Zap, Shield, ArrowRight } from 'lucide-react';
import { useLang } from '@/lib/i18n';

const iconMap: Record<string, React.ElementType> = {
  Globe,
  Layers,
  Database,
  Wrench,
  Zap,
  Shield,
};

export function Services() {
  const { t } = useLang();

  return (
    <section id="services" className="py-24 md:py-32 relative">
      <div className="container mx-auto px-6 max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-14"
        >
          <p className="text-xs font-semibold tracking-widest text-primary uppercase mb-4">
            {t.services.tag}
          </p>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-5">{t.services.title}</h2>
          <div className="w-12 h-[3px] bg-primary rounded-full" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((service, index) => {
            const Icon = iconMap[service.icon] || Globe;

            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                className="group rounded-xl border border-white/8 bg-white/3 p-8 flex flex-col gap-4 hover:border-primary/25 transition-colors duration-300"
              >
                <div className="text-primary">
                  <Icon size={30} strokeWidth={1.5} />
                </div>
                <div className="space-y-2">
                  <h3 className="text-lg font-semibold text-foreground">{service.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {service.description}
                  </p>
                </div>
                <a
                  href="#contact"
                  className="inline-flex items-center gap-1.5 text-sm text-primary font-medium mt-auto group-hover:gap-2.5 transition-all duration-200"
                >
                  {t.services.learnMore} <ArrowRight size={14} />
                </a>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
