import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { siteConfig } from '../data/site';
import { SEOHead } from '../components/SEOHead';
import { Linkedin, MessageSquare, Mail, ArrowUpRight, Copy, Check, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

export const ContactPage: React.FC = () => {
  const { language, t } = useLanguage();
  const [copied, setCopied] = useState(false);
  const contact = siteConfig.contactPage;

  const copyEmail = () => {
    navigator.clipboard.writeText(siteConfig.contacts.email.address);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="w-full bg-[#0D0F12] text-[#EDEDED] min-h-[80vh] flex flex-col justify-center">
      <SEOHead
        title={contact.title[language]}
        description={contact.subtitle[language]}
      />

      <div className="max-w-4xl mx-auto px-6 py-16 lg:py-20 w-full">
        {/* Back Link */}
        <div className="mb-6">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-xs font-semibold text-zinc-400 hover:text-white transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>{t('Voltar para o início', 'Back to home')}</span>
          </Link>
        </div>

        {/* Page Header */}
        <div className="max-w-2xl mb-12">
          <span
            className="text-xs font-mono font-semibold tracking-wider uppercase mb-2 block"
            style={{ color: 'var(--color-accent)' }}
          >
            {t('Contato Direto', 'Direct Contact')}
          </span>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight mb-3 text-balance">
            {contact.title[language]}
          </h1>
          <p className="text-sm sm:text-base text-zinc-400 leading-relaxed">
            {contact.subtitle[language]}
          </p>
        </div>

        {/* 3 Focused Options */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {/* Option 1: LinkedIn (Highest Prominence) */}
          <div className="rounded-xl p-6 bg-[#14171E] border border-white/[0.1] hover:border-white/[0.22] transition-all flex flex-col justify-between group shadow-sm">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span
                  className="text-xs font-mono font-semibold tracking-wider uppercase"
                  style={{ color: 'var(--color-accent)' }}
                >
                  {t('Principal', 'Primary')}
                </span>
                <div className="p-2 rounded-lg bg-white/[0.06] text-white">
                  <Linkedin className="w-4 h-4" />
                </div>
              </div>
              <h2 className="text-lg font-bold text-white mb-2">
                LinkedIn
              </h2>
              <p className="text-xs text-zinc-400 leading-relaxed mb-6">
                {contact.linkedinIntro[language]}
              </p>
            </div>

            <a
              href={siteConfig.contacts.linkedin.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-between w-full px-4 py-2.5 rounded-lg text-white font-semibold text-xs transition-colors shadow-sm focus-ring-accent"
              style={{ backgroundColor: 'var(--color-accent)' }}
              onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = 'var(--color-accent-hover)')}
              onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = 'var(--color-accent)')}
            >
              <span>{t('Acessar perfil', 'Open profile')}</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>

          {/* Option 2: WhatsApp (Direct message) */}
          <div className="rounded-xl p-6 bg-[#13161C] border border-white/[0.08] hover:border-white/[0.2] transition-all flex flex-col justify-between group shadow-sm">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-mono font-semibold tracking-wider uppercase text-zinc-400">
                  {t('Mensagem', 'Message')}
                </span>
                <div className="p-2 rounded-lg bg-white/[0.06] text-white">
                  <MessageSquare className="w-4 h-4" />
                </div>
              </div>
              <h2 className="text-lg font-bold text-white mb-2">
                WhatsApp
              </h2>
              <p className="text-xs text-zinc-400 leading-relaxed mb-6">
                {contact.whatsappIntro[language]}
              </p>
            </div>

            <div>
              <a
                href={siteConfig.contacts.whatsapp.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-between w-full px-4 py-2.5 rounded-lg bg-zinc-800 text-white border border-white/[0.08] hover:bg-zinc-700 font-semibold text-xs transition-colors focus-ring-accent"
              >
                <span>{t('Enviar mensagem direta', 'Send direct message')}</span>
                <ArrowUpRight className="w-4 h-4 text-zinc-400" />
              </a>
              {siteConfig.contacts.whatsapp.isPlaceholder && (
                <p className="text-[10px] text-zinc-400 mt-2 text-center">
                  * {t('URL configurável em src/data/site.ts', 'Configurable in src/data/site.ts')}
                </p>
              )}
            </div>
          </div>

          {/* Option 3: E-mail (Alternative formal channel) */}
          <div className="rounded-xl p-6 bg-[#13161C] border border-white/[0.08] hover:border-white/[0.2] transition-all flex flex-col justify-between group shadow-sm">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-mono font-semibold tracking-wider uppercase text-zinc-400">
                  {t('E-mail', 'Email')}
                </span>
                <div className="p-2 rounded-lg bg-white/[0.06] text-white">
                  <Mail className="w-4 h-4" />
                </div>
              </div>
              <h2 className="text-lg font-bold text-white mb-2">
                E-mail
              </h2>
              <p className="text-xs text-zinc-400 leading-relaxed mb-6">
                {contact.emailIntro[language]}
              </p>
            </div>

            <div className="space-y-2">
              <a
                href={`mailto:${siteConfig.contacts.email.address}`}
                className="inline-flex items-center justify-between w-full px-4 py-2.5 rounded-lg bg-zinc-800 text-white border border-white/[0.08] hover:bg-zinc-700 font-semibold text-xs transition-colors focus-ring-accent"
              >
                <span className="truncate">{siteConfig.contacts.email.address}</span>
                <ArrowUpRight className="w-4 h-4 shrink-0 text-zinc-400 ml-1" />
              </a>

              <button
                onClick={copyEmail}
                className="w-full flex items-center justify-center gap-1.5 py-1.5 text-xs text-zinc-400 hover:text-white transition-colors cursor-pointer"
              >
                {copied ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-zinc-200" />
                    <span>{t('Copiado!', 'Copied!')}</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5" />
                    <span>{t('Copiar e-mail', 'Copy email')}</span>
                  </>
                )}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
