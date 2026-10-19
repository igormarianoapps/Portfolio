import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import { siteConfig } from '../data/site';
import { Menu, X, ArrowUpRight } from 'lucide-react';

export const Navbar: React.FC = () => {
  const { language, setLanguage } = useLanguage();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const isCurrent = (path: string) => {
    if (path === '/' && location.pathname === '/' && !location.search.includes('section=projetos')) return true;
    if (path !== '/' && location.pathname.startsWith(path)) return true;
    return false;
  };

  const handleProjectsClick = (e: React.MouseEvent) => {
    e.preventDefault();
    setMobileMenuOpen(false);

    if (location.pathname === '/') {
      const el = document.getElementById('projetos');
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      navigate('/?section=projetos');
    }
  };

  return (
    <header className="sticky top-0 z-50 w-full bg-[#0D0F12]/90 backdrop-blur-md border-b border-white/[0.07] transition-colors">
      <div className="max-w-7xl mx-auto px-6 h-16 sm:h-18 flex items-center justify-between gap-8">
        {/* Zone 1: Brand Title Wordmark */}
        <Link
          to="/"
          className="text-base sm:text-lg font-bold tracking-tight text-white hover:text-white/90 transition-colors whitespace-nowrap shrink-0 tracking-tight"
          aria-label="Igor Mariano — Home"
        >
          {siteConfig.name}
        </Link>

        {/* Zone 2: Navigation Links */}
        <nav
          className="hidden md:flex items-center gap-7 text-sm font-medium text-zinc-400"
          aria-label="Navegação principal"
        >
          <Link
            to="/"
            className={`whitespace-nowrap shrink-0 transition-colors py-1 relative hover:text-white ${
              isCurrent('/') ? 'text-white font-semibold' : ''
            }`}
          >
            {siteConfig.nav.home[language]}
            {isCurrent('/') && (
              <span
                className="absolute bottom-0 left-0 right-0 h-0.5 rounded-full"
                style={{ backgroundColor: 'var(--color-accent)' }}
              />
            )}
          </Link>

          <a
            href="#projetos"
            onClick={handleProjectsClick}
            className="whitespace-nowrap shrink-0 transition-colors py-1 hover:text-white cursor-pointer"
          >
            {siteConfig.nav.projects[language]}
          </a>

          <Link
            to="/sobre"
            className={`whitespace-nowrap shrink-0 transition-colors py-1 relative hover:text-white ${
              isCurrent('/sobre') ? 'text-white font-semibold' : ''
            }`}
          >
            {siteConfig.nav.about[language]}
            {isCurrent('/sobre') && (
              <span
                className="absolute bottom-0 left-0 right-0 h-0.5 rounded-full"
                style={{ backgroundColor: 'var(--color-accent)' }}
              />
            )}
          </Link>

          <Link
            to="/contato"
            className={`whitespace-nowrap shrink-0 transition-colors py-1 relative hover:text-white ${
              isCurrent('/contato') ? 'text-white font-semibold' : ''
            }`}
          >
            {siteConfig.nav.contact[language]}
            {isCurrent('/contato') && (
              <span
                className="absolute bottom-0 left-0 right-0 h-0.5 rounded-full"
                style={{ backgroundColor: 'var(--color-accent)' }}
              />
            )}
          </Link>
        </nav>

        {/* Zone 3: Language Switcher & Quick Contact Action */}
        <div className="hidden md:flex items-center gap-3.5 shrink-0">
          {/* Functional PT/EN Language Toggle */}
          <div
            className="flex items-center p-0.5 rounded-lg bg-[#14171C] border border-white/[0.08] text-xs font-medium"
            role="group"
            aria-label="Alternar idioma"
          >
            <button
              onClick={() => setLanguage('pt')}
              className={`px-2.5 py-1 rounded-md transition-all whitespace-nowrap cursor-pointer ${
                language === 'pt'
                  ? 'bg-zinc-800 text-white font-semibold shadow-xs'
                  : 'text-zinc-400 hover:text-zinc-200'
              }`}
              aria-pressed={language === 'pt'}
            >
              PT
            </button>
            <button
              onClick={() => setLanguage('en')}
              className={`px-2.5 py-1 rounded-md transition-all whitespace-nowrap cursor-pointer ${
                language === 'en'
                  ? 'bg-zinc-800 text-white font-semibold shadow-xs'
                  : 'text-zinc-400 hover:text-zinc-200'
              }`}
              aria-pressed={language === 'en'}
            >
              EN
            </button>
          </div>

          {/* Quick Direct Message Action */}
          <a
            href={siteConfig.contacts.whatsapp.url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-3.5 py-2 text-xs font-semibold text-white rounded-lg transition-all whitespace-nowrap border border-white/[0.1] hover:border-white/[0.2] bg-[#171A20] hover:bg-[#1E222A]"
          >
            <span>{siteConfig.heroCtas.talk[language]}</span>
            <ArrowUpRight className="w-3.5 h-3.5 text-zinc-400" />
          </a>
        </div>

        {/* Mobile Controls */}
        <div className="flex md:hidden items-center gap-2">
          {/* Mobile PT/EN */}
          <div
            className="flex items-center p-0.5 rounded-lg bg-[#14171C] border border-white/[0.08] text-xs font-medium"
            role="group"
            aria-label="Alternar idioma"
          >
            <button
              onClick={() => setLanguage('pt')}
              className={`px-2 py-1 rounded-md transition-colors ${
                language === 'pt' ? 'bg-zinc-800 text-white font-semibold' : 'text-zinc-400'
              }`}
            >
              PT
            </button>
            <button
              onClick={() => setLanguage('en')}
              className={`px-2 py-1 rounded-md transition-colors ${
                language === 'en' ? 'bg-zinc-800 text-white font-semibold' : 'text-zinc-400'
              }`}
            >
              EN
            </button>
          </div>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-zinc-400 hover:text-white rounded-lg focus-visible:outline-2 focus-visible:outline-white"
            aria-label={mobileMenuOpen ? 'Fechar menu' : 'Abrir menu'}
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Accessible Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-white/[0.08] bg-[#0E1014] px-6 py-5 space-y-4">
          <nav className="flex flex-col space-y-3 text-base font-medium">
            <Link
              to="/"
              onClick={() => setMobileMenuOpen(false)}
              className={`py-1 transition-colors ${
                isCurrent('/') ? 'text-white font-semibold' : 'text-zinc-400 hover:text-white'
              }`}
            >
              {siteConfig.nav.home[language]}
            </Link>
            <a
              href="#projetos"
              onClick={handleProjectsClick}
              className="py-1 text-zinc-400 hover:text-white transition-colors"
            >
              {siteConfig.nav.projects[language]}
            </a>
            <Link
              to="/sobre"
              onClick={() => setMobileMenuOpen(false)}
              className={`py-1 transition-colors ${
                isCurrent('/sobre') ? 'text-white font-semibold' : 'text-zinc-400 hover:text-white'
              }`}
            >
              {siteConfig.nav.about[language]}
            </Link>
            <Link
              to="/contato"
              onClick={() => setMobileMenuOpen(false)}
              className={`py-1 transition-colors ${
                isCurrent('/contato') ? 'text-white font-semibold' : 'text-zinc-400 hover:text-white'
              }`}
            >
              {siteConfig.nav.contact[language]}
            </Link>
          </nav>

          <div className="pt-3 border-t border-white/[0.08]">
            <a
              href={siteConfig.contacts.whatsapp.url}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center justify-center gap-2 w-full py-2.5 px-4 text-xs font-semibold text-white rounded-lg transition-colors"
              style={{ backgroundColor: 'var(--color-accent)' }}
            >
              <span>{siteConfig.heroCtas.talk[language]}</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
