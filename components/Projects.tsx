'use client';

import { useState } from 'react';
import { BarChart3, ExternalLink } from 'lucide-react';
import { useTranslations } from 'next-intl';

export default function Projects() {
  const t = useTranslations('Projects');

  const projectKeys = ['optimi', 'giresun', 'giresunErp', 'athletic'] as const;

  const projectTechs: Record<string, string[]> = {
    optimi: ['Next.js', 'React', 'Refactoring', 'Performance'],
    giresun: ['Full Stack', 'VPS', 'Nginx', 'Business Logic'],
    giresunErp: ['ERP', 'Bulut Yedekleme', 'Çoklu Cihaz', 'İş Kuralları'],
    athletic: ['UI/UX', 'Responsive', 'Frontend', 'Figma']
  };

  const projectLinks: Record<string, string> = {
    optimi: 'https://optimi.gg',
    giresun: 'https://giresunyumurta.com',
    athletic: 'https://athleticgiresun.netlify.app/'
  };

  const projectImages: Record<string, string> = {
    optimi: '/images/optimi.gg_ (7).png',
    giresun: '/images/giresunyumurta.com_ (2).png',
    giresunErp: '/images/Giresunyumurta-ERP.png',
    athletic: '/images/athleticgiresun.netlify.app_.png'
  };

  const projectColors: Record<string, string> = {
    optimi: 'indigo',
    giresun: 'amber',
    giresunErp: 'amber',
    athletic: 'emerald'
  };

  return (
    <section id="projects" className="mx-auto max-w-6xl py-14 sm:py-16">
      <div className="mb-8 flex items-end justify-between gap-4">
        <div>
          <h2 className="text-3xl font-bold text-white sm:text-4xl">{t('title')}</h2>
          <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-400 sm:text-base">
            {t('subtitle')}
          </p>
        </div>
        <BarChart3 className="hidden h-6 w-6 text-indigo-300 sm:block" />
      </div>

      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {projectKeys.map((key) => (
          <ProjectCard
            key={key}
            title={t(`items.${key}.title`)}
            tag={t(`items.${key}.tag`)}
            result={t(`items.${key}.result`)}
            description={t(`items.${key}.description`)}
            visualNote={t.has(`items.${key}.visualNote`) ? t(`items.${key}.visualNote`) : undefined}
            techs={projectTechs[key]}
            link={projectLinks[key]}
            image={projectImages[key]}
            color={projectColors[key] as 'indigo' | 'amber' | 'emerald'}
          />
        ))}
      </div>
    </section>
  );
}

function ProjectCard({
  title, tag, result, description, visualNote, techs, link, image, color
}: {
  title: string; tag: string; result: string; description: string; visualNote?: string;
  techs: string[]; link?: string; image: string; color: 'indigo' | 'amber' | 'emerald';
}) {
  const [imageError, setImageError] = useState(false);
  const isClickable = Boolean(link);

  const colorClasses = {
    indigo: 'border-indigo-500/30 bg-indigo-500/10 text-indigo-200',
    amber: 'border-amber-500/30 bg-amber-500/10 text-amber-200',
    emerald: 'border-emerald-500/30 bg-emerald-500/10 text-emerald-200'
  };

  const cardClassName = `group overflow-hidden rounded-2xl border border-slate-800 bg-slate-900/70 transition-all ${
    isClickable
      ? 'cursor-pointer hover:-translate-y-1 hover:border-indigo-500/40 hover:shadow-2xl hover:shadow-indigo-900/20'
      : ''
  }`;

  return (
    <article className={cardClassName}>
      <div className="relative h-52 overflow-hidden bg-slate-800">
        {!imageError ? (
          <img
            src={image}
            alt={`${title} screenshot`}
            className={`h-full w-full object-cover object-top transition-transform duration-300 ${
              isClickable ? 'group-hover:scale-[1.03]' : ''
            }`}
            loading="lazy"
            onError={() => setImageError(true)}
          />
        ) : (
          <div className="flex h-full items-center justify-center text-3xl font-bold text-slate-600">{title[0]}</div>
        )}
        <span
          className={`absolute left-3 top-3 rounded-full border px-2.5 py-1 text-xs font-medium backdrop-blur ${colorClasses[color]}`}
        >
          {tag}
        </span>
      </div>

      <div className="space-y-3 p-5">
        <h3 className="flex items-center gap-2 text-xl font-semibold text-white">
          {title}
          {isClickable && (
            <a href={link} target="_blank" rel="noopener noreferrer" aria-label={`${title} link`}>
              <ExternalLink size={15} className="text-slate-500 transition-colors group-hover:text-indigo-300" />
            </a>
          )}
        </h3>
        <p className="text-sm font-medium text-indigo-200">{result}</p>
        <p className="text-sm leading-6 text-slate-300">{description}</p>
        {visualNote && <p className="text-xs italic text-slate-400">{visualNote}</p>}
        <div className="flex flex-wrap gap-2 pt-1">
          {techs.map((tech) => (
            <span key={tech} className="rounded-md border border-slate-700 bg-slate-800 px-2 py-1 text-xs text-slate-300">
              {tech}
            </span>
          ))}
        </div>
      </div>
    </article>
  );
}
