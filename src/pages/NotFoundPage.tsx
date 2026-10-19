import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import { ArrowLeft, Home } from 'lucide-react';
import { SEOHead } from '../components/SEOHead';

export const NotFoundPage: React.FC = () => {
  const { t } = useLanguage();

  return (
    <div className="w-full min-h-[75vh] flex items-center justify-center px-6 bg-[#0B0C0E] text-white">
      <SEOHead
        title={t('Página Não Encontrada', 'Page Not Found')}
        description={t('A página solicitada não existe.', 'The page requested does not exist.')}
      />
      <div className="max-w-md w-full text-center space-y-6">
        <span className="text-6xl font-extrabold text-zinc-600 font-mono tracking-tighter">
          404
        </span>
        <h1 className="text-2xl sm:text-3xl font-bold tracking-tight">
          {t('Página não encontrada', 'Page not found')}
        </h1>
        <p className="text-sm text-zinc-400 leading-relaxed">
          {t(
            'O link que você seguiu pode estar incorreto ou o conteúdo foi reorganizado.',
            'The link you followed may be outdated or the page has been moved.'
          )}
        </p>

        <div className="pt-4 flex items-center justify-center gap-4">
          <Link
            to="/"
            className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-white text-black font-semibold text-xs hover:bg-zinc-200 transition-colors"
          >
            <Home className="w-4 h-4" />
            <span>{t('Voltar para a Home', 'Return to Home')}</span>
          </Link>
          <Link
            to="/#projetos"
            className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-zinc-900 border border-white/[0.1] text-zinc-300 font-medium text-xs hover:bg-zinc-800 hover:text-white transition-colors"
          >
            <span>{t('Ver Projetos', 'View Projects')}</span>
          </Link>
        </div>
      </div>
    </div>
  );
};
