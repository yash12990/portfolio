import { education } from "@/lib/constants";

export default function EducationSection() {
  return (
    <section id="education" className="py-24">
      <h2 className="text-6xl font-bold tracking-tight leading-tight">
        Education
      </h2>

      <div className="mt-16 space-y-6">
        {education.map((edu, i) => (
          <div
            key={i}
            className="border border-white/8 rounded-xl p-8 flex gap-x-14"
          >
            <div className="min-w-44 space-y-6 shrink-0">
              <div>
                <p className="text-[0.625rem] font-bold tracking-[0.18em] text-violet-400 uppercase mb-1.5">
                  Duration
                </p>
                <p className="text-sm font-bold text-white">{edu.period}</p>
              </div>

              <div>
                <p className="text-[0.625rem] font-bold tracking-[0.18em] text-violet-400 uppercase mb-1.5">
                  Location
                </p>
                <p className="text-sm font-bold text-white">{edu.location}</p>
              </div>
            </div>

            <div className="flex-1">
              <h3 className="text-xl font-bold uppercase text-white tracking-wide">
                {edu.institution}
              </h3>

              <p className="text-violet-400 text-xs font-semibold tracking-[0.15em] uppercase mt-1.5">
                {edu.degree}
              </p>

              <ul className="mt-6 space-y-3">
                {edu.points.map((point, j) => (
                  <li
                    key={j}
                    className="flex items-start gap-x-3 text-sm text-white/75 leading-relaxed"
                  >
                    <span className="text-white/60 mt-0.5">•</span>
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
