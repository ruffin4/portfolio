import { motion } from 'framer-motion';
import { blogPosts } from '@/data/portfolio';
import { ArrowRight } from 'lucide-react';

export function Blog() {
  return (
    <section id="blog" className="py-20 md:py-32 relative bg-secondary/10">
      <div className="container mx-auto px-5 sm:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-12 md:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight mb-4">Engineering Insights</h2>
          <div className="w-16 h-1 bg-primary rounded-full" />
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {blogPosts.slice(0, 6).map((post, index) => (
            <motion.article
              key={post.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className="glass-card p-5 md:p-6 rounded-2xl flex flex-col group cursor-pointer"
            >
              <div className="flex justify-between items-center mb-3 text-xs text-muted-foreground">
                <span className="text-primary font-medium text-xs">{post.category}</span>
                <span>{post.readTime}</span>
              </div>
              <h3 className="text-base md:text-lg font-display font-semibold mb-4 group-hover:text-primary transition-colors line-clamp-2 leading-snug">
                {post.title}
              </h3>
              <div className="mt-auto flex justify-between items-center pt-3 md:pt-4 border-t border-border">
                <span className="text-xs text-muted-foreground">{post.date}</span>
                <ArrowRight className="w-4 h-4 text-muted-foreground group-hover:text-primary transform group-hover:translate-x-1 transition-all" />
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
