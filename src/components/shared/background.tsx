/**
 * Fixed, decorative page backdrop: layered spotlight, blueprint grid with
 * softly lit cells, slow-drifting gradient blobs, and a film-grain overlay.
 * Pure CSS, no JS — sits behind all content and ignores pointer events.
 */
export default function Background() {
  return (
    <div
      aria-hidden
      className="pointer-events-none fixed inset-0 z-0 overflow-hidden"
    >
      {/* Top spotlight wash */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(120% 80% at 50% -10%, rgba(52,211,153,0.14), transparent 60%)",
        }}
      />

      {/* Lit grid cells, brightest toward the upper-left */}
      <div className="absolute inset-0 bg-grid-cells [mask-[radial-gradient(80%_60%_at_18%_0%,#000_10%,transparent_70%)]" />

      {/* Blueprint grid, faded toward the edges */}
      <div className="absolute inset-0 bg-grid mask-[radial-gradient(100%_70%_at_50%_0%,#000_30%,transparent_75%)]" />

      {/* Drifting gradient blobs */}
      <div className="absolute -top-32 -left-24 h-136 w-136 rounded-full bg-brand/18 blur-[120px] animate-blob" />
      <div className="absolute top-1/3 -right-32 h-128 w-lg rounded-full bg-brand-2/14 blur-[130px] animate-blob-slow" />
      <div className="absolute bottom-0 left-1/4 h-112 w-md rounded-full bg-brand-3/8 blur-[140px] animate-blob" />

      {/* Film grain */}
      <div className="absolute inset-0 bg-noise opacity-[0.035] mix-blend-soft-light" />

      {/* Bottom fade into pure black */}
      <div className="absolute inset-x-0 bottom-0 h-64 bg-linear-to-b from-transparent to-ink" />
    </div>
  );
}
