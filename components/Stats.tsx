export default function Stats() {
  const statsData = [
    { value: "250+",  label: "Software projects\ndelivered"     },
    { value: "£80m+", label: "Revenue impact\nfor clients"      },
    { value: "98%",   label: "Client satisfaction\nrate"        },
    { value: "4.9★",  label: "Average client\nrating"          },
  ];

  return (
    <section
      id="about"
      className="w-full bg-black text-white border-t border-white/[0.06] z-20 relative"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12">

        {/* ── Top copy block ── */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-20 py-28 md:py-36
                        border-b border-white/[0.06]">
          <div className="flex flex-col gap-5">
            <span className="text-white/30 uppercase tracking-[0.18em] text-[11px] font-semibold">
              Trusted Software Development Partner
            </span>
            <h2 className="text-4xl md:text-5xl lg:text-[3.25rem] font-bold tracking-tight
                           text-white leading-[1.12] max-w-xl">
              Software Elites is an award-winning development team with offices based in London, UK.
            </h2>
          </div>

          <div className="flex flex-col justify-between gap-8 lg:pt-1">
            <div>
              <div className="w-10 h-px bg-white/15 mb-6" />
              <p className="text-white/45 text-base md:text-lg leading-relaxed max-w-md font-light">
                We partner with ambitious businesses worldwide to design, build, and scale
                high-performance software combining thoughtful engineering, modern architecture,
                and data-driven strategy.
              </p>
            </div>
          </div>
        </div>

        {/* ── Stats row — 4 columns with thin borders ── */}
        <div className="grid grid-cols-2 md:grid-cols-4">
          {statsData.map((stat, i) => (
            <div
              key={i}
              className={`
                flex flex-col gap-3 py-12 px-8
                ${i !== 0 ? "border-l border-white/[0.06]" : ""}
                ${i < 2 ? "border-b border-white/[0.06] md:border-b-0" : ""}
              `}
            >
              <span
                className="font-serif italic leading-none tracking-tight
                           bg-gradient-to-br from-white to-white/60 bg-clip-text text-transparent"
                style={{ fontSize: "clamp(2.8rem, 5vw, 4.5rem)" }}
              >
                {stat.value}
              </span>
              <span className="text-white/30 text-xs md:text-sm font-medium leading-snug whitespace-pre-line">
                {stat.label}
              </span>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
