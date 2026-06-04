"use client";

import ThreeDImageCarousel from "@/components/lightswind/three-d-image-carousel";

const slides = [
  { id: 1, src: "https://www.charle.co.uk/articles/guide-to-ab-split-testing/images/thumb.jpg", href: "#" },
  { id: 2, src: "https://www.charle.co.uk/assets/images/home/grid/grid8.webp", href: "#" },
  { id: 3, src: "https://www.charle.co.uk/assets/images/home/grid/grid3.webp", href: "#" },
  { id: 4, src: "https://www.charle.co.uk/assets/images/home/grid/grid6.webp", href: "#" },
  { id: 5, src: "https://www.charle.co.uk/assets/images/home/grid/grid4.webp", href: "#" },
  { id: 6, src: "https://www.charle.co.uk/assets/images/home/grid/grid1.webp", href: "#" },
];

export default function Insights() {
  return (
    <>
      {/* Top Divider: Isse upar ka component is heading par overlap nahi karega */}
      <hr className="border-t border-zinc-800/60 w-full my-0 block" />

      {/* Main Section */}
      <section id="resources" className="w-full bg-black text-white relative block z-20 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 md:px-12 pt-28 md:pt-36 pb-4">

          {/* Header Block Row */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-20">
            <div className="flex flex-col gap-3">
              <span className="text-zinc-500 text-[11px] uppercase tracking-[0.25em] font-semibold block">
                INSIGHTS &amp; INTELLIGENCE
              </span>
              <h2
                className="font-bold tracking-tight leading-none text-white block"
                style={{ fontSize: "clamp(2.5rem, 5.5vw, 4.5rem)" }}
              >
                Resources.
              </h2>
            </div>
            <p className="text-zinc-500 text-sm md:text-base font-light leading-relaxed max-w-[320px] md:text-right md:pb-2 block">
              Guides, engineering articles, and whitepapers on software, cloud, and growth.
            </p>
          </div>

          {/* Carousel Slider Block Box: Strict deep bottom padding for push-down effect */}
          <div className="relative w-full pb-36 md:pb-44 block">
            <ThreeDImageCarousel
              slides={slides}
              autoplay={true}
              delay={4}
              pauseOnHover={true}
            />
          </div>

        </div>
      </section>

      {/* Bottom Divider: Isse niche wala form section images se perfect door rahega */}
      <hr className="border-t border-zinc-800/60 w-full my-0 block" />
    </>
  );
}