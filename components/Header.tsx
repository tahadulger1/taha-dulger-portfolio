'use client';

import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { useTranslations } from 'next-intl';
import LanguageSwitcher from './LanguageSwitcher';

const navIds = ['hero', 'projects', 'skills', 'about', 'contact'];

export default function Header() {
  const t = useTranslations('Navigation');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 32);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [isMenuOpen]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveSection(entry.target.id);
        });
      },
      { threshold: 0.35, rootMargin: '-15% 0px -35% 0px' }
    );

    navIds.forEach((id) => {
      const section = document.getElementById(id);
      if (section) observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <header
      className={`fixed left-1/2 top-4 z-50 w-[min(92vw,860px)] -translate-x-1/2 transition-all duration-300 ${
        scrolled
          ? 'rounded-2xl border border-slate-700/60 bg-transparent shadow-2xl shadow-slate-950/40 backdrop-blur-md'
          : 'rounded-2xl border border-slate-800/60 bg-transparent backdrop-blur'
      }`}
    >
      <div className="flex w-full items-center justify-between px-3 py-2 sm:px-4">
        <a
          href="#hero"
          className="flex cursor-pointer items-center gap-2 text-left"
          aria-label={t('hero')}
        >
          <span className="rounded-lg bg-indigo-600 px-2 py-1 text-xs font-semibold text-white">TD</span>
          <span className="hidden text-sm font-semibold text-slate-100 sm:inline">Taha Dülger</span>
        </a>

        <nav className="hidden items-center gap-1 md:ml-auto md:mr-4 md:flex">
          {navIds.map((id) => (
            <a
              key={id}
              href={`#${id}`}
              className={`cursor-pointer rounded-lg px-3 py-2 text-sm transition-colors ${
                activeSection === id
                  ? 'bg-indigo-500/20 text-indigo-200'
                  : 'text-slate-300 hover:bg-slate-800 hover:text-white'
              }`}
            >
              {t(id)}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <LanguageSwitcher />
          
          <button
            onClick={() => setIsMenuOpen((prev) => !prev)}
            className="cursor-pointer rounded-lg p-2 text-slate-100 transition-colors hover:bg-slate-800 md:hidden"
            aria-label="Menu toggle"
          >
            {isMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <div className="border-t border-slate-800 px-4 pb-4 pt-2 md:hidden">
          <div className="flex flex-col gap-2">
            {navIds.map((id) => (
              <a
                key={id}
                href={`#${id}`}
                onClick={() => setIsMenuOpen(false)}
                className="cursor-pointer rounded-lg px-3 py-2 text-left text-sm text-slate-200 transition-colors hover:bg-slate-800"
              >
                {t(id)}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
