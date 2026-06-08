import { Github, Linkedin, Mail } from 'lucide-react';
import { useTranslations } from 'next-intl';

export default function Footer() {
  const t = useTranslations('Footer');

  return (
    <footer className="border-t border-slate-800 px-4 py-8 sm:px-6">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 sm:flex-row">
        <p className="text-sm text-slate-500">© {new Date().getFullYear()} {t('copyright')}</p>
        <div className="flex items-center gap-2">
          <SocialLink href="https://github.com/tahadulger1" icon={<Github size={18} />} label="GitHub" />
          <SocialLink
            href="https://www.linkedin.com/in/taha-dulger-71a906309/"
            icon={<Linkedin size={18} />}
            label="LinkedIn"
          />
          <SocialLink href="mailto:tahadulger10@gmail.com" icon={<Mail size={18} />} label="Email" />
        </div>
      </div>
    </footer>
  );
}

function SocialLink({ href, icon, label }: { href: string; icon: React.ReactNode; label: string }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className="inline-flex h-10 w-10 cursor-pointer items-center justify-center rounded-full border border-slate-700 bg-slate-900 text-slate-300 transition-colors hover:bg-slate-800 hover:text-white"
    >
      {icon}
    </a>
  );
}
