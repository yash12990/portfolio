import { experiences } from "@/lib/constants";

export default function ExperienceSection() {
  return (
    <section id="experience" className="py-24">
      <h2 className="text-6xl font-bold tracking-tight leading-tight">
        Experience
      </h2>

      <div className="mt-16 space-y-6">
        {experiences.map((exp, i) => (
          <div
            key={i}
            className="border border-white/8 rounded-xl p-8 flex gap-x-14"
          >
            <div className="min-w-44 space-y-6 shrink-0">
              <div>
                <p className="text-[0.625rem] font-bold tracking-[0.18em] text-violet-400 uppercase mb-1.5">
                  Duration
                </p>

                <p className="text-sm font-bold text-white">{exp.period}</p>
              </div>

              <div>
                <p className="text-[0.625rem] font-bold tracking-[0.18em] text-violet-400 uppercase mb-1.5">
                  Location
                </p>
                <p className="text-sm font-bold text-white">{exp.location}</p>
              </div>
            </div>

            <div className="flex-1">
              <h3 className="text-xl font-bold uppercase text-white tracking-wide">
                {exp.company}
              </h3>

              <p className="text-violet-400 text-xs font-semibold tracking-[0.15em] uppercase mt-1.5">
                {exp.role}
              </p>

              <ul className="mt-6 space-y-3">
                {exp.points.map((point, j) => (
                  <li
                    key={j}
                    className="flex items-start gap-x-3 text-sm text-white/75 leading-relaxed"
                  >
                    <span className="text-white/60 mt-0.5">•</span>
                    {point}
                  </li>
                ))}
              </ul>

              {exp.tools?.length > 0 && (
                <p className="mt-7 text-xs tracking-widest text-white/70 flex items-center">
                  <span className="font-bold text-violet-400">
                    TOOLS&nbsp;:&nbsp;&nbsp;
                  </span>

                  {exp.tools.slice(0, 6).join(", ")}
                  {exp.tools.length > 6 && `, +${exp.tools.length - 6} more`}
                </p>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

/*
// ── Previous UI (tab-based single entry) ───────────────────────────────────

import { Check } from "lucide-react";
import { experiences } from "@/lib/constants";

export default function ExperienceSection() {
  const exp = experiences[0];

  return (
    <section className="py-24">
      <h2 className="text-5xl font-bold text-white tracking-tight">
        Experience<span className="text-violet-500">.</span>
      </h2>

      <div className="mt-14 flex gap-x-16">
        <div className="border-l-2 border-violet-500 pl-6 min-w-40 py-1">
          <p className="text-violet-400 text-sm font-semibold leading-snug">
            {exp.company}
          </p>
        </div>

        <div className="flex-1">
          <h3 className="text-xl font-bold text-white">
            {exp.role}{" "}
            <span className="text-violet-400">@ {exp.company}</span>
          </h3>

          <p className="text-white/40 text-sm mt-1.5 font-medium">
            {exp.period}
          </p>

          <ul className="mt-8 space-y-4">
            {exp.points.map((point, i) => (
              <li key={i} className="flex items-start gap-x-3">
                <Check size={16} className="text-violet-500 mt-0.5 shrink-0" />
                <span className="text-white/60 text-sm leading-relaxed">
                  {point}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
*/
