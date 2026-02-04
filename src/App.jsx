import React, { useState, useEffect } from 'react';
import {
  Layout,
  Cpu,
  Server,
  Github,
  Linkedin,
  Mail,
  Menu,
  X,
  Terminal,
  Palette,
  Rocket,
  ExternalLink
} from 'lucide-react';

const Portfolio = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMenuOpen]);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
      setActiveSection(id);
    }
  };

  const navLinks = [
    { name: 'Giriş', id: 'hero' },
    { name: 'Hakkımda', id: 'about' },
    { name: 'Yetkinlikler', id: 'skills' },
    { name: 'Projeler', id: 'projects' },
  ];

  return (
    <div className="min-h-screen bg-slate-950 text-slate-200 font-sans selection:bg-indigo-500 selection:text-white">

      {/* Navigation */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-slate-950/90 backdrop-blur-md border-b border-slate-800 py-3 sm:py-4' : 'bg-transparent py-4 sm:py-6'}`}>
        <div className="container mx-auto px-4 sm:px-6 flex justify-between items-center">
          <div className="text-xl sm:text-2xl font-bold tracking-tighter flex items-center gap-2 cursor-pointer" onClick={() => scrollToSection('hero')}>
            <span className="bg-indigo-600 text-white p-1 rounded-lg text-sm sm:text-base">TD</span>
            <span className="hidden sm:inline hover:text-indigo-400 transition-colors">Taha Dülger</span>
          </div>

          <div className="hidden md:flex gap-8 items-center">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollToSection(link.id)}
                className={`text-sm font-medium transition-colors hover:text-indigo-400 ${activeSection === link.id ? 'text-indigo-400' : 'text-slate-400'}`}
              >
                {link.name}
              </button>
            ))}
            <a href="#contact" className="px-5 py-2 text-sm font-medium text-white bg-indigo-600 rounded-full hover:bg-indigo-700 transition-all hover:shadow-lg hover:shadow-indigo-500/20">
              İletişime Geç
            </a>
          </div>

          <button className="md:hidden text-slate-200" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden absolute top-full left-0 w-full bg-slate-900/95 backdrop-blur-md border-b border-slate-800 p-6 flex flex-col gap-4 shadow-xl animate-in slide-in-from-top-2">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollToSection(link.id)}
                className="text-left text-lg font-medium text-slate-300 hover:text-indigo-400 py-2 transition-colors"
              >
                {link.name}
              </button>
            ))}
            <a
              href="#contact"
              onClick={() => setIsMenuOpen(false)}
              className="text-left text-lg font-medium text-white bg-indigo-600 rounded-lg px-4 py-2 hover:bg-indigo-700 transition-colors text-center"
            >
              İletişime Geç
            </a>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="hero" className="pt-24 sm:pt-32 pb-16 sm:pb-20 md:pt-48 md:pb-32 px-4 sm:px-6">
        <div className="container mx-auto grid md:grid-cols-2 gap-8 md:gap-12 items-center">
          <div className="space-y-4 sm:space-y-6 text-center md:text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-300 text-xs sm:text-sm font-medium">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-500"></span>
              </span>
              Open to Work
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
              Next.js & React <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-cyan-400">
                Odaklı Geliştirici
              </span>
            </h1>
            <p className="text-base sm:text-lg text-slate-400 max-w-xl mx-auto md:mx-0 leading-relaxed">
              Ondokuz Mayıs Üniversitesi Ön-yüz Yazılım Geliştirme öğrencisi.
              Tasarım gözü, kod disiplini ve veri analitiğini birleştirerek uçtan uca dijital ürünler inşa ediyorum.
            </p>
            <div className="flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4 pt-4 justify-center md:justify-start">
              <button onClick={() => scrollToSection('projects')} className="px-6 sm:px-8 py-3 sm:py-4 bg-indigo-600 rounded-lg font-medium text-white hover:bg-indigo-700 transition-all hover:scale-105 flex items-center justify-center gap-2 text-sm sm:text-base">
                Projelerimi Gör <Rocket size={18} />
              </button>
              <a href="https://github.com/tahadulger1" target="_blank" rel="noopener noreferrer" className="px-6 sm:px-8 py-3 sm:py-4 bg-slate-800 rounded-lg font-medium text-slate-200 hover:bg-slate-700 transition-all border border-slate-700 flex items-center justify-center gap-2 text-sm sm:text-base">
                <Github size={18} /> GitHub
              </a>
            </div>
          </div>

          <div className="relative hidden md:block">
            <div className="absolute top-0 right-0 -z-10 w-64 h-64 md:w-96 md:h-96 bg-indigo-500/20 rounded-full blur-3xl opacity-50 animate-pulse"></div>
            <div className="bg-slate-900 border border-slate-800 rounded-2xl p-4 md:p-6 shadow-2xl transform rotate-3 hover:rotate-0 transition-all duration-500">
              <div className="flex items-center gap-2 mb-3 md:mb-4 border-b border-slate-800 pb-3 md:pb-4">
                <div className="w-2 h-2 md:w-3 md:h-3 rounded-full bg-red-500"></div>
                <div className="w-2 h-2 md:w-3 md:h-3 rounded-full bg-yellow-500"></div>
                <div className="w-2 h-2 md:w-3 md:h-3 rounded-full bg-green-500"></div>
                <div className="text-xs text-slate-500 ml-auto font-mono">portfolio.config.js</div>
              </div>
              <div className="font-mono text-xs md:text-sm space-y-2 md:space-y-4">
                <div className="flex gap-2 flex-wrap">
                  <span className="text-purple-400">const</span>
                  <span className="text-blue-400">developer</span>
                  <span className="text-slate-400">=</span>
                  <span className="text-yellow-300">{`{`}</span>
                </div>
                <div className="pl-4 md:pl-6 space-y-1 md:space-y-2">
                  <div className="break-words">
                    <span className="text-slate-400">name:</span> <span className="text-green-400">'Taha Dülger'</span>,
                  </div>
                  <div className="break-words">
                    <span className="text-slate-400">stack:</span> <span className="text-yellow-300">['Next.js', 'React', 'Python']</span>,
                  </div>
                  <div className="break-words">
                    <span className="text-slate-400">focus:</span> <span className="text-green-400">'Performance & Clean Code'</span>,
                  </div>
                  <div className="break-words">
                    <span className="text-slate-400">status:</span> <span className="text-green-400">'Building Future'</span>
                  </div>
                </div>
                <div className="text-yellow-300">{`}`}</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 sm:py-20 px-4 sm:px-6 bg-slate-900/50">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row gap-8 sm:gap-12 md:gap-16">
            <div className="md:w-1/3">
              <h2 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6 flex items-center gap-3">
                <Terminal className="text-indigo-500 w-6 h-6 sm:w-7 sm:h-7" />
                Hakkımda
              </h2>
              <div className="h-1 w-20 bg-indigo-500 rounded mb-4 sm:mb-6"></div>
              <p className="text-sm sm:text-base text-slate-400 leading-relaxed mb-4 sm:mb-6">
                Yazılımı sadece kod yazmak olarak değil, veriye dayalı bir karar verme süreci olarak görüyorum.
              </p>
              <div className="bg-slate-800/50 p-4 sm:p-6 rounded-xl border border-slate-700">
                <h4 className="text-white font-medium mb-2 text-sm sm:text-base">Odak Noktam</h4>
                <p className="text-xs sm:text-sm text-slate-400">
                  Estetikten ziyade etkililiğe odaklanırım; önce problemi tanımlar, en yalın çözümü üretir ve ardından ölçeklendiririm.
                </p>
              </div>
            </div>
            <div className="md:w-2/3 space-y-4 sm:space-y-6 text-sm sm:text-base text-slate-300 leading-relaxed">
              <p>
                Yazılım yolculuğuna, kullanıcının doğrudan temas ettiği alan olan <strong className="text-white">Front-end</strong> ile başladım. Ancak bu yüzeyin altındaki sistemleri anlama merakım beni Python, veri analizi ve yapay zekâ dünyasına yöneltti.
              </p>
              <p>
                Modern web mimarilerine (Next.js, React) hakimiyetimin yanı sıra, karmaşık ve optimize edilmemiş eski (legacy) kod yapılarını modernize etme konusunda deneyim sahibiyim. <strong className="text-indigo-400">No-code/low-code</strong> araçlarını ve prompt mühendisliğini iş akışıma dahil ederek prototipleme süreçlerini hızlandırıyor; VPS, Nginx ve cloud yaklaşımlarıyla projelerimi canlıya taşıyorum.
              </p>
              <p>
                Bu analitik bakış açısını sadece kodda değil; spor bahisleri analizi ve finansal piyasalar gibi veri odaklı ilgi alanlarımda da uyguluyorum.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-16 sm:py-20 px-4 sm:px-6">
        <div className="container mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4">Teknik Yetkinlikler</h2>
            <p className="text-sm sm:text-base text-slate-400 max-w-2xl mx-auto px-4">
              Modern frontend teknolojilerinden veri analizine kadar uzanan geniş bir yelpazede araçlar kullanıyorum.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            <SkillCard
              icon={<Layout className="w-8 h-8 text-indigo-400" />}
              title="Frontend"
              skills={["React.js", "Next.js", "TypeScript", "JavaScript", "HTML5/CSS3", "Tailwind CSS"]}
            />
            <SkillCard
              icon={<Palette className="w-8 h-8 text-pink-400" />}
              title="Tasarım & UI"
              skills={["Figma", "Canva", "Mockup", "Kurumsal Kimlik", "Responsive Design"]}
            />
            <SkillCard
              icon={<Cpu className="w-8 h-8 text-cyan-400" />}
              title="AI & Otomasyon"
              skills={["Prompt Engineering", "Üretken AI", "No-code/Low-code", "Otomasyon"]}
            />
            <SkillCard
              icon={<Server className="w-8 h-8 text-emerald-400" />}
              title="Backend & Ops"
              skills={["Python (Analiz)", "VPS", "Nginx", "Git/GitHub", "Vercel", "Linux"]}
            />
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-16 sm:py-20 px-4 sm:px-6 bg-slate-900/50 border-y border-slate-800">
        <div className="container mx-auto">
          <div className="mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4">Öne Çıkan Projeler</h2>
            <div className="h-1 w-20 bg-indigo-500 rounded"></div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            <ProjectCard
              title="Optimi.gg"
              tag="Altyapı Modernizasyonu"
              description="Vue.js ile yazılmış karmaşık ve bakımı zorlaşan bir e-spor platformunun Next.js mimarisine taşınması. Temiz kod (Clean Code) prensipleriyle performans ve sürdürülebilirlik odaklı geliştirme."
              techs={["Next.js", "React", "Refactoring", "Performance"]}
              color="indigo"
              link="https://optimi.gg"
              image="/images/optimi.gg_ (7).png"
            />
            <ProjectCard
              title="Giresun Yumurta"
              tag="Kurumsal Web Platformu"
              description="Aile işletmesi için tasarlanan, toptan ticaret süreçlerini destekleyen web sitesi. Tasarımdan deployment sürecine (VPS/Nginx) kadar uçtan uca yönetim."
              techs={["Full Stack", "VPS", "Nginx", "Business Logic"]}
              color="yellow"
              link="https://giresunyumurta.com"
              image="/images/giresunyumurta.com_ (2).png"
            />
            <ProjectCard
              title="Athletic Sport Center"
              tag="Kullanıcı Arayüzü"
              description="Giresun Athletic spor merkezi için geliştirilen modern web arayüzü. Kullanıcı odaklı tasarım ve mobil uyumluluk ön planda tutularak geliştirildi."
              techs={["UI/UX", "Responsive", "Frontend", "Figma"]}
              color="emerald"
              link="https://athleticgiresun.netlify.app/"
              image="/images/athleticgiresun.netlify.app_.png"
            />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="py-10 sm:py-12 px-4 sm:px-6 border-t border-slate-800 bg-slate-950">
        <div className="container mx-auto text-center">
          <h2 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6">Birlikte Çalışalım</h2>
          <p className="text-sm sm:text-base text-slate-400 mb-6 sm:mb-8 max-w-xl mx-auto px-4">
            Projelerinizi modern teknolojilerle hayata geçirmek veya mevcut yapılarınızı optimize etmek için benimle iletişime geçin.
          </p>
          <div className="flex justify-center gap-4 sm:gap-6 mb-6 sm:mb-8 flex-wrap">
            <SocialLink href="https://github.com/tahadulger1" icon={<Github size={20} />} label="GitHub" />
            <SocialLink href="https://www.linkedin.com/in/taha-dulger-71a906309/" icon={<Linkedin size={20} />} label="LinkedIn" />
            <SocialLink href="mailto:tahadulger10@gmail.com" icon={<Mail size={20} />} label="Email" />
          </div>
          <p className="text-slate-600 text-xs sm:text-sm">
            © {new Date().getFullYear()} Taha Dülger. Tüm hakları saklıdır.
          </p>
        </div>
      </footer>
    </div>
  );
};

const SkillCard = ({ icon, title, skills }) => (
  <div className="bg-slate-900 p-4 sm:p-6 rounded-2xl border border-slate-800 hover:border-indigo-500/50 transition-all hover:-translate-y-1 group">
    <div className="mb-3 sm:mb-4 bg-slate-800 w-12 h-12 sm:w-16 sm:h-16 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
      {icon}
    </div>
    <h3 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4 text-white">{title}</h3>
    <ul className="space-y-1.5 sm:space-y-2">
      {skills.map((skill, index) => (
        <li key={index} className="flex items-center gap-2 text-slate-400 text-xs sm:text-sm">
          <div className="w-1.5 h-1.5 rounded-full bg-indigo-500 shrink-0"></div>
          <span>{skill}</span>
        </li>
      ))}
    </ul>
  </div>
);

const ProjectCard = ({ title, tag, description, techs, color, link, image }) => {
  const [imageError, setImageError] = useState(false);
  const colorClasses = {
    indigo: "bg-indigo-500/10 text-indigo-400 border-indigo-500/20",
    yellow: "bg-yellow-500/10 text-yellow-400 border-yellow-500/20",
    emerald: "bg-emerald-500/10 text-emerald-400 border-emerald-500/20",
  };

  const cardContent = (
    <>
      <div className="h-48 sm:h-56 lg:h-64 bg-slate-800 relative overflow-hidden group-hover:opacity-90 transition-opacity">
        {image && !imageError ? (
          <>
            <img
              src={image}
              alt={`${title} ekran görüntüsü`}
              loading="lazy"
              className="w-full h-full object-cover object-top"
              onError={() => setImageError(true)}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent pointer-events-none"></div>
          </>
        ) : (
          <div className="absolute inset-0 bg-gradient-to-br from-slate-700 to-slate-900 opacity-20 flex items-center justify-center">
            <span className="text-4xl font-bold text-slate-700 group-hover:text-slate-600 transition-colors select-none">{title[0]}</span>
          </div>
        )}
        <div className={`absolute top-3 right-3 sm:top-4 sm:right-4 text-xs font-semibold px-2 sm:px-3 py-1 rounded-full border backdrop-blur-sm ${colorClasses[color] || colorClasses.indigo}`}>
          {tag}
        </div>
      </div>
      <div className="p-6 sm:p-8 flex-1 flex flex-col">
        <h3 className="text-xl sm:text-2xl font-bold mb-2 sm:mb-3 text-white group-hover:text-indigo-400 transition-colors flex items-center gap-2 flex-wrap">
          {title}
          {link && <ExternalLink size={16} className="text-slate-500 group-hover:text-indigo-400 shrink-0" />}
        </h3>
        <p className="text-slate-400 text-sm leading-relaxed mb-4 sm:mb-6 flex-1">
          {description}
        </p>
        <div className="flex flex-wrap gap-2 mt-auto items-center">
          {techs.map((tech, i) => (
            <span key={i} className="text-xs font-medium text-slate-500 bg-slate-800 px-2 py-1 rounded">
              #{tech}
            </span>
          ))}
          {link && (
            <a
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs font-medium text-indigo-400 hover:text-indigo-300 flex items-center gap-1 ml-auto"
              onClick={(e) => e.stopPropagation()}
            >
              Siteyi ziyaret et <ExternalLink size={12} />
            </a>
          )}
        </div>
      </div>
    </>
  );

  const className = "bg-slate-900 rounded-2xl overflow-hidden border border-slate-800 flex flex-col hover:shadow-2xl hover:shadow-indigo-500/10 transition-all group";
  if (link) {
    return (
      <a href={link} target="_blank" rel="noopener noreferrer" className={`${className} block`}>
        {cardContent}
      </a>
    );
  }
  return <div className={className}>{cardContent}</div>;
};

const SocialLink = ({ href, icon, label }) => (
  <a href={href} target="_blank" rel="noopener noreferrer" className="p-3 bg-slate-900 rounded-full text-slate-400 hover:text-white hover:bg-indigo-600 transition-all hover:-translate-y-1" aria-label={label}>
    {icon}
    <span className="sr-only">{label}</span>
  </a>
);

export default Portfolio;
