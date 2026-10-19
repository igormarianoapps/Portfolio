import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { LanguageProvider } from './context/LanguageContext';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { ContactPage } from './pages/ContactPage';
import { CaseStudyPage } from './pages/CaseStudyPage';
import { NotFoundPage } from './pages/NotFoundPage';

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

export default function App() {
  return (
    <LanguageProvider>
      <BrowserRouter>
        <ScrollToTop />
        <div className="min-h-screen flex flex-col bg-[#0B0C0E] text-[#EDEDED]">
          <Navbar />
          <main className="flex-1">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/sobre" element={<AboutPage />} />
              <Route path="/contato" element={<ContactPage />} />
              <Route path="/projetos/:slug" element={<CaseStudyPage />} />
              <Route path="*" element={<NotFoundPage />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </BrowserRouter>
    </LanguageProvider>
  );
}
