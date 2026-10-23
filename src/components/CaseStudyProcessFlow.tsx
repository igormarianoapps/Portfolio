import React from 'react';
import { CaseStudyProcessFlow as ICaseStudyProcessFlow } from '../types/portfolio';
import { FileText, Users, RefreshCw, ArrowRight, Check, Sparkles, Layers, Box } from 'lucide-react';

interface CaseStudyProcessFlowProps {
  flow: ICaseStudyProcessFlow;
}

export const CaseStudyProcessFlow: React.FC<CaseStudyProcessFlowProps> = ({ flow }) => {
  const getStepIcon = (index: number) => {
    switch (index) {
      case 0:
        return <FileText className="w-4 h-4" style={{ color: 'var(--color-accent, #E05A47)' }} />;
      case 1:
        return <Layers className="w-4 h-4" style={{ color: 'var(--color-accent, #E05A47)' }} />;
      case 2:
        return <Box className="w-4 h-4" style={{ color: 'var(--color-accent, #E05A47)' }} />;
      case 3:
      default:
        return <RefreshCw className="w-4 h-4" style={{ color: 'var(--color-accent, #E05A47)' }} />;
    }
  };

  return (
    <div className="my-8 rounded-2xl border border-zinc-200/90 bg-gradient-to-b from-white to-zinc-50/70 p-5 sm:p-7 shadow-xs">
      {/* Header bar */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2.5 pb-5 border-b border-zinc-200/70 mb-6">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <span
              className="font-mono text-[11px] font-bold tracking-wider uppercase px-2 py-0.5 rounded bg-zinc-100 border border-zinc-200/60"
              style={{ color: 'var(--color-accent, #E05A47)' }}
            >
              {flow.badge || 'Fluxo de Handoff'}
            </span>
            <span className="text-xs text-zinc-600 font-medium hidden sm:inline">
              Miro · Design & Engenharia
            </span>
          </div>
          <h4 className="text-sm sm:text-base font-bold text-zinc-900 tracking-tight">
            {flow.title || 'Processo Contínuo de Handoff'}
          </h4>
        </div>

        {/* Live status badge */}
        <div className="inline-flex items-center gap-1.5 self-start sm:self-auto px-2.5 py-1 rounded-full bg-emerald-50 border border-emerald-200/80 text-[11px] font-medium text-emerald-800">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
          <span>Documentação Viva</span>
        </div>
      </div>

      {/* Pipeline Flow */}
      <div
        className={`grid grid-cols-1 ${
          flow.steps.length === 4
            ? 'sm:grid-cols-2 lg:grid-cols-4'
            : flow.steps.length === 2
            ? 'sm:grid-cols-2'
            : 'md:grid-cols-3'
        } gap-4 relative`}
      >
        {flow.steps.map((step, idx) => (
          <div key={idx} className="relative group">
            <div className="h-full p-4 sm:p-5 rounded-xl bg-white border border-zinc-200/80 shadow-2xs hover:border-zinc-300 hover:shadow-xs transition-all flex flex-col justify-between">
              <div>
                {/* Step Header */}
                <div className="flex items-center justify-between gap-2 mb-3">
                  <div className="flex items-center gap-2">
                    <div className="w-7 h-7 rounded-lg bg-zinc-100 border border-zinc-200/80 flex items-center justify-center shrink-0">
                      {getStepIcon(idx)}
                    </div>
                    <div>
                      <span
                        className="font-mono text-[10px] font-bold tracking-wider block leading-none"
                        style={{ color: 'var(--color-accent, #E05A47)' }}
                      >
                        ETAPA {step.number}
                      </span>
                    </div>
                  </div>

                  {/* Desktop arrow indicator to next step */}
                  {idx < flow.steps.length - 1 && (
                    <div className="hidden md:flex items-center text-zinc-600 pl-1" aria-hidden="true">
                      <ArrowRight className="w-4 h-4 stroke-[2]" />
                    </div>
                  )}
                </div>

                {/* Step Title */}
                <h5 className="text-sm sm:text-[15px] font-bold text-zinc-900 mb-1 tracking-tight">
                  {step.title}
                </h5>

                {step.subtitle && (
                  <p className="text-xs text-zinc-600 mb-3 leading-snug">
                    {step.subtitle}
                  </p>
                )}

                {/* Step Bullets / Activities */}
                <ul className="space-y-2 pt-2 border-t border-zinc-100">
                  {step.items.map((item, itemIdx) => (
                    <li key={itemIdx} className="flex items-start gap-2 text-xs text-zinc-700 leading-relaxed">
                      <Check
                        className="w-3.5 h-3.5 shrink-0 mt-0.5"
                        style={{ color: 'var(--color-accent, #E05A47)' }}
                      />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Mobile arrow indicator between stacked steps */}
            {idx < flow.steps.length - 1 && (
              <div className="md:hidden flex justify-center py-1 text-zinc-600" aria-hidden="true">
                <span className="font-mono text-xs text-zinc-600">↓</span>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Footer loop / continuous refinement note */}
      {flow.summary && (
        <div className="mt-5 pt-4 border-t border-zinc-200/60 flex items-start sm:items-center gap-2.5 text-xs text-zinc-600">
          <Sparkles className="w-4 h-4 shrink-0 text-zinc-600 mt-0.5 sm:mt-0" />
          <p className="leading-relaxed">
            {flow.summary}
          </p>
        </div>
      )}
    </div>
  );
};
