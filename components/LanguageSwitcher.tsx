'use client';

import { useLocale } from 'next-intl';
import { usePathname, useRouter } from '@/i18n/routing';

export default function LanguageSwitcher() {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  const toggleLocale = () => {
    const nextLocale = locale === 'en' ? 'tr' : 'en';
    router.replace(pathname, { locale: nextLocale });
  };

  return (
    <button
      onClick={toggleLocale}
      className="flex items-center gap-2 rounded-lg border border-slate-700 bg-slate-800 px-3 py-1.5 text-sm font-medium text-slate-200 transition-colors hover:bg-slate-700"
      aria-label="Toggle language"
    >
      <span className={locale === 'en' ? 'font-bold text-white' : 'text-slate-400'}>EN</span>
      <span className="text-slate-500">|</span>
      <span className={locale === 'tr' ? 'font-bold text-white' : 'text-slate-400'}>TR</span>
    </button>
  );
}
