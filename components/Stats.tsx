export default function Stats() {
  const statsData = [
    { value: "650+", label: "Projects\nDelivered"  },
    { value: "180+", label: "Active\nClients"      },
    { value: "3+",   label: "Years in\nBusiness"   },
    { value: "45+",  label: "Expert\nTeam"         },
  ];

  return (
    <section
      id="about"
      className="w-full bg-black text-white border-t border-white/[0.06] z-20 relative"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12">

        {/* ── Top copy block ── */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-20 py-20 sm:py-28 md:py-36
                        border-b border-white/[0.06]">
          <div className="flex flex-col gap-5">
            <span className="text-white/30 uppercase tracking-[0.18em] text-[11px] font-semibold">
              By The Numbers
            </span>
            <h2
              className="font-bold tracking-tight text-white leading-[1.12]"
              style={{ fontSize: "clamp(2rem, 4.5vw, 3.25rem)" }}
            >
              Every number represents a partnership{" "}
              <span className="text-white/40 font-light">built on trust.</span>
            </h2>
          </div>

          <div className="flex flex-col justify-between gap-6 lg:pt-1">
            <div>
              <div className="w-10 h-px bg-white/15 mb-6" />
              <p className="text-white/45 text-sm sm:text-base md:text-lg leading-relaxed max-w-md font-light">
                We partner with ambitious businesses worldwide to design, build, and scale
                high-performance digital solutions combining thoughtful strategy,
                creative design, and cutting-edge technology.
              </p>
            </div>
          </div>
        </div>

        {/* ── Stats row ── */}
        <div className="grid grid-cols-2 md:grid-cols-4">
          {statsData.map((stat, i) => (
            <div
              key={i}
              className={`
                flex flex-col gap-3 py-10 sm:py-12 px-4 sm:px-8
                ${i !== 0 ? "border-l border-white/[0.06]" : ""}
                ${i < 2 ? "border-b border-white/[0.06] md:border-b-0" : ""}
              `}
            >
              <span
                className="font-serif italic leading-none tracking-tight
                           bg-gradient-to-br from-white to-white/60 bg-clip-text text-transparent"
                style={{ fontSize: "clamp(2.4rem, 5vw, 4.5rem)" }}
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
