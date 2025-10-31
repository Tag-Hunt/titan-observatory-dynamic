"use client";

import { Timeline } from "@/components/ui/timeline";
import { useMemo } from "react";

export type Phase = {
  title: string;
  status: string;
  details: string[];
};

type PhaseTimelineProps = {
  phases: Phase[];
};

export default function PhaseTimeline({ phases }: PhaseTimelineProps) {
  const timelineData = useMemo(
    () =>
      phases.map((phase, index) => ({
        title: phase.title,
        content: (
          <div className="space-y-4">
            <span className="inline-flex items-center rounded-full border border-[#7f8cff]/50 bg-[#7f8cff]/15 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-[#ccd1ff]">
              Phase {index + 1} · {phase.status}
            </span>
            <ul className="space-y-2 text-sm leading-relaxed text-titan-text-primary/90">
              {phase.details.map((detail, detailIndex) => (
                <li key={`${phase.title}-${detailIndex}`} className="flex gap-3">
                  <span className="mt-1 h-1 w-1 shrink-0 rounded-full bg-[#7f8cff]" />
                  {detail}
                </li>
              ))}
            </ul>
          </div>
        ),
      })),
    [phases],
  );

  return <Timeline data={timelineData} />;
}
