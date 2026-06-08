import { ArrowRight, Mail, Terminal } from 'lucide-react';
import { useTranslations } from 'next-intl';

export default function Hero() {
  const t = useTranslations('Hero');
  const tImpact = useTranslations('Impact');

  return (
    <>
      <section id="hero" className="mx-auto grid max-w-6xl gap-10 py-8 md:grid-cols-[1.1fr_0.9fr] md:py-16">
        <div className="space-y-6">
          <span className="inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3 py-1 text-xs font-medium text-emerald-200">
            <span className="h-2 w-2 rounded-full bg-emerald-400" />
            {t('badge')}
          </span>

          <h1 className="max-w-3xl text-4xl font-bold leading-tight text-white sm:text-5xl lg:text-6xl">
            {t('title1')}
          </h1>

          <p className="max-w-2xl text-base leading-7 text-slate-300 sm:text-lg">
            {t('description')}
          </p>

          <div className="flex flex-wrap gap-3">
            <a
              href="#projects"
              className="inline-flex min-h-11 cursor-pointer items-center gap-2 rounded-xl bg-indigo-600 px-5 py-3 text-sm font-medium text-white transition-colors hover:bg-indigo-500"
            >
              {t('viewProjects')} <ArrowRight size={16} />
            </a>
            <a
              href="mailto:tahadulger10@gmail.com"
              className="inline-flex min-h-11 cursor-pointer items-center gap-2 rounded-xl border border-slate-700 bg-slate-900 px-5 py-3 text-sm font-medium text-slate-100 transition-colors hover:bg-slate-800"
            >
              {t('quickContact')} <Mail size={16} />
            </a>
          </div>
        </div>

        <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-5 shadow-2xl shadow-slate-950/40">
          <div className="mb-4 flex items-center justify-between border-b border-slate-800 pb-4">
            <p className="text-sm font-medium text-slate-200">{t('summaryTitle')}</p>
            <Terminal className="h-4 w-4 text-indigo-300" />
          </div>
          <ul className="space-y-3 text-sm text-slate-300">
            <li className="rounded-lg border border-slate-800 bg-slate-900 p-3">{t('summary1')}</li>
            <li className="rounded-lg border border-slate-800 bg-slate-900 p-3">{t('summary2')}</li>
            <li className="rounded-lg border border-slate-800 bg-slate-900 p-3">{t('summary3')}</li>
            <li className="rounded-lg border border-slate-800 bg-slate-900 p-3">{t('summary4')}</li>
            <li className="rounded-lg border border-slate-800 bg-slate-900 p-3">{t('summary5')}</li>
          </ul>
        </div>
      </section>

      <section className="mx-auto max-w-6xl py-4">
        <div className="grid gap-3 sm:grid-cols-3">
          <article className="rounded-xl border border-slate-800 bg-slate-900/70 p-4">
            <p className="text-2xl font-bold text-white">3+</p>
            <p className="mt-1 text-sm text-slate-400">{tImpact('liveProjects')}</p>
          </article>
          <article className="rounded-xl border border-slate-800 bg-slate-900/70 p-4">
            <p className="text-2xl font-bold text-white">Next.js</p>
            <p className="mt-1 text-sm text-slate-400">{tImpact('mainStack')}</p>
          </article>
          <article className="rounded-xl border border-slate-800 bg-slate-900/70 p-4">
            <p className="text-2xl font-bold text-white">E2E</p>
            <p className="mt-1 text-sm text-slate-400">{tImpact('endToEnd')}</p>
          </article>
        </div>
      </section>
    </>
  );
}
