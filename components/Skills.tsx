import { Cpu, Layout, Palette, Server } from 'lucide-react';
import { useTranslations } from 'next-intl';

export default function Skills() {
  const t = useTranslations('Skills');

  const groups = [
    {
      id: 'frontend',
      icon: <Layout className="h-7 w-7 text-indigo-300" />
    },
    {
      id: 'uiux',
      icon: <Palette className="h-7 w-7 text-pink-300" />
    },
    {
      id: 'ai',
      icon: <Cpu className="h-7 w-7 text-cyan-300" />
    },
    {
      id: 'backend',
      icon: <Server className="h-7 w-7 text-emerald-300" />
    }
  ] as const;

  return (
    <section id="skills" className="mx-auto max-w-6xl py-14 sm:py-16">
      <div className="mb-8">
        <h2 className="text-3xl font-bold text-white sm:text-4xl">{t('title')}</h2>
        <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-400 sm:text-base">
          {t('subtitle')}
        </p>
      </div>

      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {groups.map((group) => (
          <SkillCard
            key={group.id}
            icon={group.icon}
            title={t(`groups.${group.id}`)}
            skills={t.raw(`items.${group.id}`) as string[]}
          />
        ))}
      </div>
    </section>
  );
}

function SkillCard({ icon, title, skills }: { icon: React.ReactNode; title: string; skills: string[] }) {
  return (
    <article className="rounded-2xl border border-slate-800 bg-slate-900/70 p-5 transition-all hover:border-indigo-500/50 hover:shadow-lg hover:shadow-indigo-900/20">
      <div className="mb-4 inline-flex rounded-xl border border-slate-700 bg-slate-800 p-3">{icon}</div>
      <h3 className="text-lg font-semibold text-white">{title}</h3>
      <ul className="mt-3 space-y-2">
        {skills.map((skill) => (
          <li key={skill} className="flex items-center gap-2 text-sm text-slate-300">
            <span className="h-1.5 w-1.5 rounded-full bg-indigo-400" />
            {skill}
          </li>
        ))}
      </ul>
    </article>
  );
}
