import { motion } from 'framer-motion';

export function DevOps() {
  return (
    <section id="devops" className="py-20 md:py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-primary/5 pointer-events-none" />
      <div className="container mx-auto px-5 sm:px-8 relative z-10">

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight mb-4 text-gradient">DevOps Excellence</h2>
            <p className="text-sm sm:text-base md:text-lg text-muted-foreground mb-8">
              Building code is only half the battle. Delivering it securely, reliably, and efficiently is where true engineering shines.
            </p>

            <div className="space-y-5 md:space-y-6">
              {[
                { title: 'Containerization', desc: 'Docker & Docker Compose for isolated, consistent environments.' },
                { title: 'CI/CD Automation', desc: 'GitHub Actions for testing, building, and deploying.' },
                { title: 'Infrastructure', desc: 'Linux VPS provisioning, Nginx reverse proxy, and SSL configuration.' }
              ].map((item, i) => (
                <div key={i} className="flex gap-4 border-l-2 border-primary/30 pl-4 relative">
                  <div className="absolute w-2 h-2 rounded-full bg-primary -left-[5px] top-2" />
                  <div>
                    <h4 className="font-semibold text-base md:text-lg">{item.title}</h4>
                    <p className="text-muted-foreground text-sm mt-0.5">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="rounded-xl overflow-hidden glass-panel border-white/10 shadow-2xl"
          >
            <div className="bg-black/80 flex items-center px-4 py-3 border-b border-white/10 gap-2">
              <div className="flex gap-1.5">
                <div className="w-2.5 h-2.5 rounded-full bg-red-500" />
                <div className="w-2.5 h-2.5 rounded-full bg-yellow-500" />
                <div className="w-2.5 h-2.5 rounded-full bg-green-500" />
              </div>
              <div className="text-xs text-muted-foreground font-mono mx-auto">deploy.yml — bash</div>
            </div>
            <div className="p-4 sm:p-6 bg-black/60 font-mono text-xs sm:text-sm text-gray-300 leading-relaxed overflow-x-auto">
              <div className="text-blue-400">name: <span className="text-green-400">Production Deploy</span></div>
              <div className="text-blue-400 mt-2">on:</div>
              <div className="pl-4 text-blue-400">push:</div>
              <div className="pl-8 text-blue-400">branches: <span className="text-yellow-300">[main]</span></div>

              <div className="text-blue-400 mt-4">jobs:</div>
              <div className="pl-4 text-blue-400">deploy:</div>
              <div className="pl-8 text-blue-400">runs-on: <span className="text-yellow-300">ubuntu-latest</span></div>
              <div className="pl-8 text-blue-400 mt-2">steps:</div>
              <div className="pl-8 text-gray-400"># 1. Checkout code</div>
              <div className="pl-12 text-blue-400">- uses: <span className="text-yellow-300">actions/checkout@v3</span></div>
              <div className="pl-8 mt-2 text-gray-400"># 2. Build & Push Docker image</div>
              <div className="pl-12 text-blue-400">- run: <span className="text-green-400">|</span></div>
              <div className="pl-16 text-green-300">docker build -t app:latest .</div>
              <div className="pl-16 text-green-300">docker push registry/app:latest</div>
              <div className="pl-8 mt-2 text-gray-400"># 3. SSH & Restart</div>
              <div className="pl-12 text-blue-400 break-all">- run: <span className="text-green-400">ssh deploy@prod "docker-compose up -d"</span></div>
              <div className="mt-4 text-primary animate-pulse">_</div>
            </div>
          </motion.div>
        </div>

      </div>
    </section>
  );
}
