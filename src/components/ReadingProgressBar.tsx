import React, { useEffect, useState } from 'react';

export const ReadingProgressBar: React.FC = () => {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (totalHeight > 0) {
        const currentProgress = (window.scrollY / totalHeight) * 100;
        setScrollProgress(Math.min(100, Math.max(0, currentProgress)));
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div
      className="fixed top-0 left-0 right-0 h-1 z-50 bg-transparent pointer-events-none"
      aria-hidden="true"
    >
      <div
        className="h-full transition-[width] duration-75 ease-out shadow-xs"
        style={{
          width: `${scrollProgress}%`,
          backgroundColor: 'var(--color-accent)',
        }}
      />
    </div>
  );
};
