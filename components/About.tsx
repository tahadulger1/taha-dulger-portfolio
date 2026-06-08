import { Layers } from 'lucide-react';
import { useTranslations } from 'next-intl';

export default function About() {
  const t = useTranslations('About');

  return (
    <section id="about" className="mx-auto grid max-w-6xl gap-8 py-14 sm:grid-cols-[0.95fr_1.05fr] sm:py-16">
      <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
        <div className="mb-4 flex items-center gap-2">
          <Layers className="h-5 w-5 text-indigo-300" />
          <h3 className="text-lg font-semibold text-white">{t('approachTitle')}</h3>
        </div>
        <p className="text-sm leading-6 text-slate-300">
          {t('approachDesc')}
        </p>
      </div>

      <div className="space-y-4 rounded-2xl border border-slate-800 bg-slate-900/60 p-6 text-sm leading-7 text-slate-300 sm:text-base">
        <h2 className="text-3xl font-bold text-white sm:text-4xl">{t('title')}</h2>
        <p>{t('p1')}</p>
        <p>{t('p2')}</p>
      </div>
    </section>
  );
}
