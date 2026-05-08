import { motion } from 'framer-motion';
import { blogPosts } from '@/data/portfolio';
import { ArrowRight } from 'lucide-react';

export function Blog() {
  return (
    <section id="blog" className="py-24 md:py-32 relative bg-secondary/10">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-16 flex justify-between items-end"
        >
          <div>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">Engineering Insights</h2>
            <div className="w-20 h-1 bg-primary rounded-full" />
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {blogPosts.slice(0, 6).map((post, index) => (
            <motion.article
              key={post.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass-card p-6 rounded-2xl flex flex-col group cursor-pointer"
            >
              <div className="flex justify-between items-center mb-4 text-sm text-muted-foreground">
                <span className="text-primary font-medium">{post.category}</span>
                <span>{post.readTime}</span>
              </div>
              <h3 className="text-xl font-display font-semibold mb-4 group-hover:text-primary transition-colors line-clamp-2">
                {post.title}
              </h3>
              <div className="mt-auto flex justify-between items-center pt-4 border-t border-border">
                <span className="text-sm text-muted-foreground">{post.date}</span>
                <ArrowRight className="w-5 h-5 text-muted-foreground group-hover:text-primary transform group-hover:translate-x-1 transition-all" />
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}