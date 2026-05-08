import { motion } from 'framer-motion';
import { services } from '@/data/portfolio';
import { Globe, Layers, Database, Wrench, Zap, Shield, ArrowRight } from 'lucide-react';

const iconMap: Record<string, React.ElementType> = {
  Globe,
  Layers,
  Database,
  Wrench,
  Zap,
  Shield,
};

export function Services() {
  return (
    <section id="services" className="py-20 md:py-32 relative">
      <div className="container mx-auto px-5 sm:px-8 max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-12 md:mb-14"
        >
          <p className="text-xs font-semibold tracking-widest text-primary uppercase mb-3">
            03 &nbsp;·&nbsp; Ce que je propose
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight mb-4">Services</h2>
          <div className="w-12 h-[3px] bg-primary rounded-full" />
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
          {services.map((service, index) => {
            const Icon = iconMap[service.icon] || Globe;

            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.07 }}
                className="group rounded-xl border border-white/8 bg-white/3 p-5 sm:p-6 md:p-7 flex flex-col gap-4 hover:border-primary/25 transition-colors duration-300"
              >
                <div className="text-primary">
                  <Icon size={26} strokeWidth={1.5} />
                </div>
                <div className="space-y-1.5">
                  <h3 className="text-base font-semibold text-foreground">{service.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {service.description}
                  </p>
                </div>
                <a
                  href="#contact"
                  className="inline-flex items-center gap-1.5 text-sm text-primary font-medium mt-auto group-hover:gap-2.5 transition-all duration-200"
                >
                  En savoir plus <ArrowRight size={13} />
                </a>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
