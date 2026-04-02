import React, { useEffect, useState } from 'react';
import {
  ArrowRight,
  BarChart3,
  Cpu,
  ExternalLink,
  Github,
  Layers,
  Layout,
  Linkedin,
  Mail,
  Menu,
  Palette,
  Server,
  Terminal,
  X
} from 'lucide-react';

const navLinks = [
  { name: 'Giriş', id: 'hero' },
  { name: 'Projeler', id: 'projects' },
  { name: 'Yetkinlikler', id: 'skills' },
  { name: 'Hakkımda', id: 'about' },
  { name: 'İletişim', id: 'contact' }
];

const impactStats = [
  { value: '3+', label: 'Canlı Proje' },
  { value: 'Next.js', label: 'Ana Geliştirme Stack’i' },
  { value: 'Uçtan Uca', label: 'Tasarım + Geliştirme + Deploy' }
];

const projects = [
  {
    title: 'Optimi.gg',
    tag: 'Altyapı Modernizasyonu',
    result: 'Bakımı zor Vue yapısından daha sürdürülebilir Next.js mimarisine geçiş.',
    description:
      'Kod okunabilirliğini artıran, performansı iyileştiren ve yeni özellik geliştirme hızını yükselten bir dönüşüm süreci.',
    techs: ['Next.js', 'React', 'Refactoring', 'Performance'],
    color: 'indigo',
    link: 'https://optimi.gg',
    image: '/images/optimi.gg_ (7).png'
  },
  {
    title: 'Giresun Yumurta',
    tag: 'Kurumsal Web Platformu',
    result: 'İş hedeflerine odaklı, satış sürecini destekleyen kurumsal vitrin.',
    description:
      'Bilgi mimarisinden sunucu kurulumuna kadar tek elde yönetilen; hızlı, güvenilir ve sürdürülebilir bir proje teslimi.',
    techs: ['Full Stack', 'VPS', 'Nginx', 'Business Logic'],
    color: 'amber',
    link: 'https://giresunyumurta.com',
    image: '/images/giresunyumurta.com_ (2).png'
  },
  {
    title: 'Giresun Yumurta ERP',
    tag: 'ERP Platformu',
    result: 'Muhasebe ve satış takibini tek panelde birleştiren ERP arayüzü.',
    description:
      'Giresun Yumurta için %100 dijital, bulut yedekleme entegreli ve çoklu cihaz destekli ERP altyapısını temsil eden; muhasebe, satış ve operasyon takibini tek merkezde toplayan çözüm.',
    techs: ['ERP', 'Bulut Yedekleme', 'Çoklu Cihaz', 'İş Kuralları'],
    color: 'amber',
    image: '/images/Giresunyumurta-ERP.png',
    visualNote: '*Görsel temsilidir.'
  },
  {
    title: 'Athletic Sport Center',
    tag: 'Kullanıcı Arayüzü',
    result: 'Mobil öncelikli deneyimle daha net hizmet sunumu.',
    description:
      'Spor merkezi için hazırlanan modern arayüz; hızlı gezinme, güçlü görsel hiyerarşi ve dönüşüm odaklı içerik yapısı.',
    techs: ['UI/UX', 'Responsive', 'Frontend', 'Figma'],
    color: 'emerald',
    link: 'https://athleticgiresun.netlify.app/',
    image: '/images/athleticgiresun.netlify.app_.png'
  }
];

const skillGroups = [
  {
    icon: <Layout className="h-7 w-7 text-indigo-300" />,
    title: 'Frontend',
    skills: ['React.js', 'Next.js', 'TypeScript', 'JavaScript', 'Tailwind CSS']
  },
  {
    icon: <Palette className="h-7 w-7 text-pink-300" />,
    title: 'UI/UX',
    skills: ['Figma', 'Responsive Design', 'Bileşen Sistemleri', 'Kurumsal Kimlik']
  },
  {
    icon: <Cpu className="h-7 w-7 text-cyan-300" />,
    title: 'AI & Otomasyon',
    skills: ['Prompt Engineering', 'No-code/Low-code', 'İş Akışı Otomasyonu']
  },
  {
    icon: <Server className="h-7 w-7 text-emerald-300" />,
    title: 'Backend & Ops',
    skills: ['Python (Analiz)', 'VPS', 'Nginx', 'Linux', 'Git/GitHub']
  }
];

function Portfolio() {
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
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMenuOpen]);

  useEffect(() => {
    const sectionIds = navLinks.map((link) => link.id);
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveSection(entry.target.id);
        });
      },
      { threshold: 0.35, rootMargin: '-15% 0px -35% 0px' }
    );

    sectionIds.forEach((id) => {
      const section = document.getElementById(id);
      if (section) observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 selection:bg-indigo-500 selection:text-white">
      <header
        className={`fixed left-1/2 top-4 z-50 w-[min(92vw,860px)] -translate-x-1/2 transition-all duration-300 ${
          scrolled
            ? 'rounded-2xl border border-slate-700/60 bg-transparent shadow-2xl shadow-slate-950/40 backdrop-blur-md'
            : 'rounded-2xl border border-slate-800/60 bg-transparent backdrop-blur'
        }`}
      >
        <div className="flex w-full items-center justify-between px-3 py-2 sm:px-4">
          <button
            onClick={() => scrollToSection('hero')}
            className="flex cursor-pointer items-center gap-2 text-left"
            aria-label="Ana bölüme git"
          >
            <span className="rounded-lg bg-indigo-600 px-2 py-1 text-xs font-semibold text-white">TD</span>
            <span className="hidden text-sm font-semibold text-slate-100 sm:inline">Taha Dülger</span>
          </button>

          <nav className="hidden items-center gap-1 md:ml-auto md:flex">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollToSection(link.id)}
                className={`cursor-pointer rounded-lg px-3 py-2 text-sm transition-colors ${
                  activeSection === link.id
                    ? 'bg-indigo-500/20 text-indigo-200'
                    : 'text-slate-300 hover:bg-slate-800 hover:text-white'
                }`}
              >
                {link.name}
              </button>
            ))}
          </nav>

          <button
            onClick={() => setIsMenuOpen((prev) => !prev)}
            className="cursor-pointer rounded-lg p-2 text-slate-100 transition-colors hover:bg-slate-800 md:hidden"
            aria-label="Menüyü aç veya kapat"
          >
            {isMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>

        {isMenuOpen && (
          <div className="border-t border-slate-800 px-4 pb-4 pt-2 md:hidden">
            <div className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => scrollToSection(link.id)}
                  className="cursor-pointer rounded-lg px-3 py-2 text-left text-sm text-slate-200 transition-colors hover:bg-slate-800"
                >
                  {link.name}
                </button>
              ))}
            </div>
          </div>
        )}
      </header>

      <main className="px-4 pb-14 pt-28 sm:px-6 sm:pt-32">
        <section id="hero" className="mx-auto grid max-w-6xl gap-10 py-8 md:grid-cols-[1.1fr_0.9fr] md:py-16">
          <div className="space-y-6">
            <span className="inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3 py-1 text-xs font-medium text-emerald-200">
              <span className="h-2 w-2 rounded-full bg-emerald-400" />
              Yeni projelere açığım
            </span>

            <h1 className="max-w-3xl text-4xl font-bold leading-tight text-white sm:text-5xl lg:text-6xl">
              React ve Next.js ile
              <span className="block bg-gradient-to-r from-indigo-300 via-cyan-300 to-indigo-300 bg-clip-text text-transparent">
                hızlı, ölçülebilir ürünler geliştiriyorum.
              </span>
            </h1>

            <p className="max-w-2xl text-base leading-7 text-slate-300 sm:text-lg">
              Frontend geliştirme, ürün düşüncesi ve teknik optimizasyonu tek çizgide buluşturuyorum.
              Amacım sadece güzel arayüz değil, net iş sonucu üreten dijital deneyimler inşa etmek.
            </p>

            <div className="flex flex-wrap gap-3">
              <button
                onClick={() => scrollToSection('projects')}
                className="inline-flex min-h-11 cursor-pointer items-center gap-2 rounded-xl bg-indigo-600 px-5 py-3 text-sm font-medium text-white transition-colors hover:bg-indigo-500"
              >
                Projeleri İncele <ArrowRight size={16} />
              </button>
              <a
                href="mailto:tahadulger10@gmail.com"
                className="inline-flex min-h-11 cursor-pointer items-center gap-2 rounded-xl border border-slate-700 bg-slate-900 px-5 py-3 text-sm font-medium text-slate-100 transition-colors hover:bg-slate-800"
              >
                Hızlı İletişim <Mail size={16} />
              </a>
            </div>
          </div>

          <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-5 shadow-2xl shadow-slate-950/40">
            <div className="mb-4 flex items-center justify-between border-b border-slate-800 pb-4">
              <p className="text-sm font-medium text-slate-200">30 Saniye Özeti</p>
              <Terminal className="h-4 w-4 text-indigo-300" />
            </div>
            <ul className="space-y-3 text-sm text-slate-300">
              <li className="rounded-lg border border-slate-800 bg-slate-900 p-3">Kimim: Taha Dülger, frontend odaklı geliştirici</li>
              <li className="rounded-lg border border-slate-800 bg-slate-900 p-3">Ne yaparım: Performans ve ürün etkisi odaklı web geliştirme</li>
              <li className="rounded-lg border border-slate-800 bg-slate-900 p-3">Nasıl çalışırım: Tasarım + kod + deploy tek akış</li>
              <li className="rounded-lg border border-slate-800 bg-slate-900 p-3">Nasıl teslim ederim: Ölçülebilir, bakımı kolay ve ölçeklenebilir yapı</li>
              <li className="rounded-lg border border-slate-800 bg-slate-900 p-3">Sonraki adım: Projeleri inceleyip iletişime geç</li>
            </ul>
          </div>
        </section>

        <section className="mx-auto max-w-6xl py-4">
          <div className="grid gap-3 sm:grid-cols-3">
            {impactStats.map((item) => (
              <article key={item.label} className="rounded-xl border border-slate-800 bg-slate-900/70 p-4">
                <p className="text-2xl font-bold text-white">{item.value}</p>
                <p className="mt-1 text-sm text-slate-400">{item.label}</p>
              </article>
            ))}
          </div>
        </section>

        <section id="projects" className="mx-auto max-w-6xl py-14 sm:py-16">
          <div className="mb-8 flex items-end justify-between gap-4">
            <div>
              <h2 className="text-3xl font-bold text-white sm:text-4xl">Öne Çıkan Projeler</h2>
              <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-400 sm:text-base">
                Her proje kartı; problem, yaklaşım ve sonuç odağıyla hazırlandı.
              </p>
            </div>
            <BarChart3 className="hidden h-6 w-6 text-indigo-300 sm:block" />
          </div>

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {projects.map((project) => (
              <ProjectCard key={project.title} project={project} />
            ))}
          </div>
        </section>

        <section id="skills" className="mx-auto max-w-6xl py-14 sm:py-16">
          <div className="mb-8">
            <h2 className="text-3xl font-bold text-white sm:text-4xl">Teknik Yetkinlikler</h2>
            <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-400 sm:text-base">
              Ürün geliştirme sürecinde aktif kullandığım araçlar ve teknik alanlar.
            </p>
          </div>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {skillGroups.map((group) => (
              <SkillCard key={group.title} {...group} />
            ))}
          </div>
        </section>

        <section id="about" className="mx-auto grid max-w-6xl gap-8 py-14 sm:grid-cols-[0.95fr_1.05fr] sm:py-16">
          <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
            <div className="mb-4 flex items-center gap-2">
              <Layers className="h-5 w-5 text-indigo-300" />
              <h3 className="text-lg font-semibold text-white">Çalışma Yaklaşımım</h3>
            </div>
            <p className="text-sm leading-6 text-slate-300">
              Önce problemi netleştirir, sonra minimum karmaşıklıkta çözüm üretirim. Kod kalitesi,
              performans ve sürdürülebilirlik kararlarını birlikte ele alırım.
            </p>
          </div>

          <div className="space-y-4 rounded-2xl border border-slate-800 bg-slate-900/60 p-6 text-sm leading-7 text-slate-300 sm:text-base">
            <h2 className="text-3xl font-bold text-white sm:text-4xl">Hakkımda</h2>
            <p>
              Yazılım yolculuğuna frontend ile başladım; zamanla veri analizi, otomasyon ve deployment
              tarafını da sürece dahil ederek daha bütünsel bir üretim yaklaşımı geliştirdim.
            </p>
            <p>
              Özellikle modern web mimarilerine geçiş, eski kod tabanlarını sadeleştirme ve ürün
              performansını artırma konularında çalışıyorum. Hedefim; yalnızca çalışan değil, bakımı kolay
              ve büyümeye hazır sistemler kurmak.
            </p>
          </div>
        </section>

        <section id="contact" className="mx-auto max-w-6xl py-8">
          <div className="rounded-2xl border border-indigo-500/30 bg-gradient-to-r from-indigo-500/10 to-cyan-500/10 p-6 sm:p-8">
            <h2 className="text-2xl font-bold text-white sm:text-3xl">Birlikte proje geliştirelim</h2>
            <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-200 sm:text-base">
              Yeni ürün geliştirme, mevcut projeyi hızlandırma veya teknik modernizasyon ihtiyaçlarınız için
              iletişime geçebilirsiniz.
            </p>
            <div className="mt-5 flex flex-wrap gap-3">
              <a
                href="mailto:tahadulger10@gmail.com"
                className="inline-flex min-h-11 cursor-pointer items-center gap-2 rounded-xl bg-white px-5 py-3 text-sm font-semibold text-slate-900 transition-colors hover:bg-slate-200"
              >
                E-posta Gönder <Mail size={16} />
              </a>
              <a
                href="https://www.linkedin.com/in/taha-dulger-71a906309/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-11 cursor-pointer items-center gap-2 rounded-xl border border-white/30 px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-white/10"
              >
                LinkedIn’den Bağlan <ExternalLink size={16} />
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-slate-800 px-4 py-8 sm:px-6">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 sm:flex-row">
          <p className="text-sm text-slate-500">© {new Date().getFullYear()} Taha Dülger</p>
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
    </div>
  );
}

function SkillCard({ icon, title, skills }) {
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

function ProjectCard({ project }) {
  const [imageError, setImageError] = useState(false);
  const isClickable = Boolean(project.link);

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
            src={project.image}
            alt={`${project.title} proje ekran görüntüsü`}
            className={`h-full w-full object-cover object-top transition-transform duration-300 ${
              isClickable ? 'group-hover:scale-[1.03]' : ''
            }`}
            loading="lazy"
            onError={() => setImageError(true)}
          />
        ) : (
          <div className="flex h-full items-center justify-center text-3xl font-bold text-slate-600">{project.title[0]}</div>
        )}
        <span
          className={`absolute left-3 top-3 rounded-full border px-2.5 py-1 text-xs font-medium backdrop-blur ${colorClasses[project.color]}`}
        >
          {project.tag}
        </span>
      </div>

      <div className="space-y-3 p-5">
        <h3 className="flex items-center gap-2 text-xl font-semibold text-white">
          {project.title}
          {isClickable && (
            <a href={project.link} target="_blank" rel="noopener noreferrer" aria-label={`${project.title} bağlantısı`}>
              <ExternalLink size={15} className="text-slate-500 transition-colors group-hover:text-indigo-300" />
            </a>
          )}
        </h3>
        <p className="text-sm font-medium text-indigo-200">{project.result}</p>
        <p className="text-sm leading-6 text-slate-300">{project.description}</p>
        {project.visualNote && <p className="text-xs italic text-slate-400">{project.visualNote}</p>}
        <div className="flex flex-wrap gap-2 pt-1">
          {project.techs.map((tech) => (
            <span key={tech} className="rounded-md border border-slate-700 bg-slate-800 px-2 py-1 text-xs text-slate-300">
              {tech}
            </span>
          ))}
        </div>
      </div>
    </article>
  );
}

function SocialLink({ href, icon, label }) {
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

export default Portfolio;
