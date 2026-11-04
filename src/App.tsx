import React, { lazy, Suspense, useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation, Navigate } from 'react-router-dom';
import { LanguageProvider, useLanguage } from './context/LanguageContext';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { HomePage } from './pages/HomePage';
const AboutPage = lazy(() => import('./pages/AboutPage').then(m => ({default:m.AboutPage})));
const ContactPage = lazy(() => import('./pages/ContactPage').then(m => ({default:m.ContactPage})));
const CaseStudyPage = lazy(() => import('./pages/CaseStudyPage').then(m => ({default:m.CaseStudyPage})));
const NotFoundPage = lazy(() => import('./pages/NotFoundPage').then(m => ({default:m.NotFoundPage})));

// Scroll to top upon location pathname change
function ScrollToTop() {
  const { pathname, search } = useLocation();

  useEffect(() => {
    // If not anchor scrolling or section scrolling
    if (!search.includes('section=') && !window.location.hash) {
      window.scrollTo(0, 0);
    }
  }, [pathname, search]);

  return null;
}

function LocalizedRoutes() {
  const { language } = useLanguage();
  return <Routes>
    <Route path="/" element={<Navigate to={`/${language}`} replace />} />
    <Route path="/sobre" element={<Navigate to={`/${language}/sobre`} replace />} />
    <Route path="/contato" element={<Navigate to={`/${language}/contato`} replace />} />
    <Route path="/projetos/:slug" element={<LegacyCaseRedirect />} />
    <Route path="/:locale" element={<HomePage />} />
    <Route path="/:locale/sobre" element={<AboutPage />} />
    <Route path="/:locale/contato" element={<ContactPage />} />
    <Route path="/:locale/projetos/:slug" element={<CaseStudyPage />} />
    <Route path="*" element={<NotFoundPage />} />
  </Routes>;
}
function LegacyCaseRedirect() {
  const { pathname } = useLocation();
  const { language } = useLanguage();
  return <Navigate to={`/${language}${pathname}`} replace />;
}
export default function App() {
  return (
    <LanguageProvider>
      <BrowserRouter>
        <ScrollToTop />
        <div className="min-h-screen flex flex-col bg-[#0B0C0E] text-[#EDEDED]">
          <Navbar />
          <main className="flex-1">
            <Suspense fallback={<div className="min-h-[50vh]" aria-busy="true" />}>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/sobre" element={<AboutPage />} />
              <Route path="/contato" element={<ContactPage />} />
              <Route path="/projetos/:slug" element={<CaseStudyPage />} />
              <Route path="*" element={<NotFoundPage />} />
            </Routes>
            </Suspense>
          </main>
          <Footer />
        </div>
      </BrowserRouter>
    </LanguageProvider>
  );
}
