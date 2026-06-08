import { ExternalLink, Mail } from 'lucide-react';
import { useTranslations } from 'next-intl';

export default function Contact() {
  const t = useTranslations('Contact');

  return (
    <section id="contact" className="mx-auto max-w-6xl py-8">
      <div className="rounded-2xl border border-indigo-500/30 bg-gradient-to-r from-indigo-500/10 to-cyan-500/10 p-6 sm:p-8">
        <h2 className="text-2xl font-bold text-white sm:text-3xl">{t('title')}</h2>
        <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-200 sm:text-base">
          {t('subtitle')}
        </p>
        <div className="mt-5 flex flex-wrap gap-3">
          <a
            href="mailto:tahadulger10@gmail.com"
            className="inline-flex min-h-11 cursor-pointer items-center gap-2 rounded-xl bg-white px-5 py-3 text-sm font-semibold text-slate-900 transition-colors hover:bg-slate-200"
          >
            {t('email')} <Mail size={16} />
          </a>
          <a
            href="https://www.linkedin.com/in/taha-dulger-71a906309/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex min-h-11 cursor-pointer items-center gap-2 rounded-xl border border-white/30 px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-white/10"
          >
            {t('linkedin')} <ExternalLink size={16} />
          </a>
        </div>
      </div>
    </section>
  );
}
