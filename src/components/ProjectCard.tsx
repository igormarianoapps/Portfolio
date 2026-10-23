import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ProjectCardData } from '../types/portfolio';
import { useLanguage } from '../context/LanguageContext';
import { ArrowUpRight } from 'lucide-react';

interface ProjectCardProps {
  project: ProjectCardData;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  const { t } = useLanguage();
  const [imageError, setImageError] = useState(false);

  return (
    <article className="group relative rounded-xl bg-[#13161C] border border-white/[0.08] hover:border-white/[0.22] transition-all flex flex-col justify-between overflow-hidden shadow-sm hover:shadow-md">
      <div>
        {/* Compact Image Container with Consistent Aspect Ratio */}
        <Link
          to={`/projetos/${project.slug}`}
          className="block relative aspect-16/9 w-full overflow-hidden bg-zinc-950 focus-ring-accent"
          tabIndex={-1}
          aria-hidden="true"
        >
          {!imageError ? (
            <img
              src={`/optimized/${project.slug === 'corrida-perfeita' ? 'corrida' : project.slug === 'taskcheck-design-system' ? 'taskcheck' : 'candidattus'}-card.webp`}
              alt={project.title}
              referrerPolicy="no-referrer"
              onError={(e) => { if (!e.currentTarget.dataset.fallback) { e.currentTarget.dataset.fallback = 'true'; e.currentTarget.src = project.coverImage; } else { setImageError(true); } }}
              className="w-full h-full object-cover object-center group-hover:scale-[1.03] transition-transform duration-300"
              loading="lazy"
              decoding="async"
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center bg-zinc-900 text-zinc-400 text-xs">
              <span>{project.title}</span>
            </div>
          )}

          {/* Subtle gradient scrim */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#13161C] via-transparent to-transparent opacity-60" />

          {/* Context pill overlay */}
          <div className="absolute top-3 left-3 text-[11px] font-medium text-zinc-300 bg-black/60 backdrop-blur-xs px-2.5 py-1 rounded-md border border-white/[0.08]">
            {project.category}
          </div>
        </Link>

        {/* Card Body */}
        <div className="p-5 sm:p-6">
          {/* Title */}
          <h3 className="text-lg sm:text-xl font-bold text-white tracking-tight mb-2 group-hover:text-zinc-100 transition-colors">
            <Link
              to={`/projetos/${project.slug}`}
              className="focus-ring-accent rounded-sm inline-block"
            >
              {project.title}
            </Link>
          </h3>

          {/* Concise 1-2 line summary */}
          <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed mb-4 line-clamp-2">
            {project.summary}
          </p>

          {/* Documented Outcome / Metric Strip (When available) */}
          {project.validatedMetric && (
            <div className="mb-4 p-3 rounded-lg bg-[#0E1014] border border-white/[0.06] flex items-center justify-between gap-3">
              <div className="flex items-baseline gap-2">
                <span
                  className="text-base sm:text-lg font-bold font-mono tabular-nums"
                  style={{ color: 'var(--color-accent)' }}
                >
                  {project.validatedMetric.value}
                </span>
                <span className="text-xs font-medium text-zinc-200">
                  {project.validatedMetric.label}
                </span>
              </div>
              {project.isPlaceholder && (
                <span className="text-[10px] text-zinc-300 uppercase tracking-wider shrink-0">
                  [Demo]
                </span>
              )}
            </div>
          )}
        </div>
      </div>

      {/* Card Footer: Tags & Highlighted Action Button */}
      <div className="px-5 pb-5 sm:px-6 sm:pb-6 pt-3 border-t border-white/[0.06] flex items-center justify-between gap-4">
        {/* Essential Tags (Unboxed with · separator) */}
        <div className="flex flex-wrap items-center gap-1.5 text-[11px] text-zinc-400">
          {project.tags.slice(0, 3).map((tag, idx) => (
            <React.Fragment key={tag}>
              <span>{tag}</span>
              {idx < Math.min(project.tags.length - 1, 2) && <span aria-hidden="true">·</span>}
            </React.Fragment>
          ))}
        </div>

        {/* Highlighted CTA Button with Terracotta Hover & Defined Focus */}
        <Link
          to={`/projetos/${project.slug}`}
          className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold text-white transition-all shrink-0 focus-ring-accent border border-white/[0.12] hover:border-transparent group/btn"
          style={{
            backgroundColor: 'transparent',
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.backgroundColor = 'var(--color-accent)';
            e.currentTarget.style.borderColor = 'var(--color-accent)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = 'transparent';
            e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.12)';
          }}
        >
          <span>{t('Ver projeto', 'View project')}</span>
          <ArrowUpRight className="w-3.5 h-3.5 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
        </Link>
      </div>
    </article>
  );
};
