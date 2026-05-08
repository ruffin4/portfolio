import { profileData } from '@/data/portfolio';
import { SiGithub, SiMaildotru } from 'react-icons/si';
import { Linkedin } from 'lucide-react';
import { useLang } from '@/lib/i18n';

export function Footer() {
  const { t } = useLang();

  return (
    <footer className="border-t border-border bg-background py-12">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-6">

        <div className="text-2xl font-display font-bold tracking-tighter">
          Ruffin<span className="text-primary">.</span>
        </div>

        <p className="text-muted-foreground text-sm text-center md:text-left">
          &copy; {new Date().getFullYear()} {profileData.name}. {t.footer.rights}
        </p>

        <div className="flex items-center gap-4">
          <a href={profileData.socials.github} target="_blank" rel="noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
            <SiGithub size={20} />
          </a>
          <a href={profileData.socials.linkedin} target="_blank" rel="noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
            <Linkedin size={20} />
          </a>
          <a href={`mailto:${profileData.socials.email}`} className="text-muted-foreground hover:text-primary transition-colors">
            <SiMaildotru size={20} />
          </a>
        </div>

      </div>
    </footer>
  );
}
