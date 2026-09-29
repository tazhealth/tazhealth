import React from 'react';

type SideIntroProps = {
  index: string;
  id: string;
  title: string;
  text: string;
  children?: React.ReactNode;
};

export function SideIntro({ index, id, title, text, children }: SideIntroProps) {
  return (
    <div className="lg:sticky lg:top-28 lg:self-start">
      <p className="font-mono text-xs text-ink/40">{index}</p>
      <h2 id={id} className="mt-3 text-3xl font-medium tracking-[-0.025em] text-ink sm:text-4xl">
        {title}
      </h2>
      <p className="mt-4 max-w-sm text-[16px] leading-relaxed text-ink/60">{text}</p>
      {children}
    </div>);

}

export function NextSteps({ steps }: {steps: string[];}) {
  return (
    <div className="mt-10">
      <p className="text-sm text-ink/45">What happens next</p>
      <ol className="mt-3 border-t border-ink/10">
        {steps.map((s, i) =>
        <li key={s} className="flex gap-4 border-b border-ink/10 py-3.5 text-[15px] text-ink/75">
            <span className="font-mono text-xs leading-6 text-ink/40">0{i + 1}</span>
            {s}
          </li>
        )}
      </ol>
    </div>);

}
