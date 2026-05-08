import { motion } from 'framer-motion';
import { useState } from 'react';
import { Mail, Phone, MapPin, Clock, Globe, Github, Linkedin, ArrowRight } from 'lucide-react';
import { profileData } from '@/data/portfolio';

const subjects = [
  "Développement d'une application web",
  "Création d'un site vitrine",
  "Mise en place d'une API",
  "DevOps & Infrastructure",
  "Maintenance & Support",
  "Autre demande",
];

export function Contact() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });
  const [sent, setSent] = useState(false);

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSent(true);
    setForm({ name: '', email: '', subject: '', message: '' });
    setTimeout(() => setSent(false), 5000);
  }

  return (
    <section id="contact" className="py-24 md:py-32 relative">
      <div className="container mx-auto px-6 max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-14"
        >
          <p className="text-xs font-semibold tracking-widest text-primary uppercase mb-4">
            06 &nbsp;·&nbsp; Travaillons ensemble
          </p>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-5">Contact</h2>
          <div className="w-12 h-[3px] bg-primary rounded-full" />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
          {/* Left: contact info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-2 space-y-8"
          >
            <h3 className="text-xl font-semibold text-foreground">Informations de contact</h3>

            <div className="space-y-5">
              <div className="flex items-start gap-4">
                <div className="w-9 h-9 rounded-full bg-primary/10 flex items-center justify-center text-primary shrink-0 mt-0.5">
                  <Mail size={16} />
                </div>
                <div>
                  <p className="text-[10px] font-bold tracking-widest text-muted-foreground uppercase mb-0.5">Email</p>
                  <p className="text-sm text-foreground">{profileData.socials.email}</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-9 h-9 rounded-full bg-primary/10 flex items-center justify-center text-primary shrink-0 mt-0.5">
                  <Phone size={16} />
                </div>
                <div>
                  <p className="text-[10px] font-bold tracking-widest text-muted-foreground uppercase mb-0.5">Téléphone</p>
                  <p className="text-sm text-foreground">{profileData.socials.phone}</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-9 h-9 rounded-full bg-primary/10 flex items-center justify-center text-primary shrink-0 mt-0.5">
                  <MapPin size={16} />
                </div>
                <div>
                  <p className="text-[10px] font-bold tracking-widest text-muted-foreground uppercase mb-0.5">Localisation</p>
                  <p className="text-sm text-foreground">{profileData.location}</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-9 h-9 rounded-full bg-primary/10 flex items-center justify-center text-primary shrink-0">
                  <Clock size={16} />
                </div>
                <p className="text-sm text-foreground">Réponse sous 24h</p>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-9 h-9 rounded-full bg-primary/10 flex items-center justify-center text-primary shrink-0">
                  <Globe size={16} />
                </div>
                <p className="text-sm text-foreground">Disponible en remote</p>
              </div>
            </div>

            {/* Social buttons */}
            <div className="flex gap-3 pt-2">
              <a
                href={profileData.socials.github}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded border border-white/15 text-sm font-medium text-foreground hover:border-primary/50 hover:text-primary transition-colors"
              >
                <Github size={15} /> Github
              </a>
              <a
                href={profileData.socials.linkedin}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded border border-white/15 text-sm font-medium text-foreground hover:border-primary/50 hover:text-primary transition-colors"
              >
                <Linkedin size={15} /> LinkedIn
              </a>
            </div>
          </motion.div>

          {/* Right: form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-3"
          >
            <div className="rounded-xl border border-white/8 bg-white/3 p-8">
              {sent ? (
                <div className="flex flex-col items-center justify-center py-12 gap-4 text-center">
                  <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center text-primary">
                    <ArrowRight size={20} />
                  </div>
                  <p className="text-lg font-semibold text-foreground">Message envoyé !</p>
                  <p className="text-sm text-muted-foreground">Je vous répondrai dans les plus brefs délais.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div className="space-y-1.5">
                      <label className="text-[10px] font-bold tracking-widest text-muted-foreground uppercase">
                        Nom complet
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={form.name}
                        onChange={handleChange}
                        required
                        className="w-full rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/40 focus:outline-none focus:border-primary/50 transition-colors"
                      />
                    </div>
                    <div className="space-y-1.5">
                      <label className="text-[10px] font-bold tracking-widest text-muted-foreground uppercase">
                        Adresse email
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={form.email}
                        onChange={handleChange}
                        required
                        className="w-full rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/40 focus:outline-none focus:border-primary/50 transition-colors"
                      />
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-[10px] font-bold tracking-widest text-muted-foreground uppercase">
                      Sujet
                    </label>
                    <select
                      name="subject"
                      value={form.subject}
                      onChange={handleChange}
                      required
                      className="w-full rounded-lg border border-white/10 bg-[#13151c] px-4 py-3 text-sm text-foreground focus:outline-none focus:border-primary/50 transition-colors appearance-none cursor-pointer"
                    >
                      <option value="" disabled>Choisir un sujet</option>
                      {subjects.map(s => (
                        <option key={s} value={s}>{s}</option>
                      ))}
                    </select>
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-[10px] font-bold tracking-widest text-muted-foreground uppercase">
                      Message
                    </label>
                    <textarea
                      name="message"
                      value={form.message}
                      onChange={handleChange}
                      required
                      rows={6}
                      placeholder="Décrivez votre projet ou votre demande..."
                      className="w-full rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/40 focus:outline-none focus:border-primary/50 transition-colors resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full rounded-lg bg-primary text-background font-semibold py-3 text-sm hover:opacity-90 transition-opacity"
                  >
                    Envoyer le message
                  </button>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
