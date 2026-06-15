"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import {
  galleryLayer1,
  galleryLayer2,
  galleryLayer3,
  galleryVideoSrc,
} from "@/data/gallery";



export default function ScrollGallery() {
  const containerRef = useRef<HTMLDivElement>(null);
  const innerRef = useRef<HTMLDivElement>(null);
  const [isNativeSupported, setIsNativeSupported] = useState(true);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const supported = CSS.supports("animation-timeline", "scroll()");
      setIsNativeSupported(supported);

      if (!supported) {
        const handleScroll = () => {
          if (!containerRef.current || !innerRef.current) return;
          const rect = containerRef.current.getBoundingClientRect();
          const viewHeight = window.innerHeight;
          const totalScrollable = rect.height - viewHeight;
          if (totalScrollable <= 0) return;
          const scrolled = -rect.top;
          const progress = Math.max(0, Math.min(1, scrolled / totalScrollable));
          containerRef.current.style.setProperty("--scroll-progress", progress.toString());
        };
        window.addEventListener("scroll", handleScroll);
        handleScroll();
        return () => window.removeEventListener("scroll", handleScroll);
      }
    }
  }, []);

  return (
    <section
      ref={containerRef}
      id="gallery-section"
      className={`hero-gallery bg-black text-white relative w-full ${
        !isNativeSupported ? "js-scroll-fallback" : ""
      }`}
    >
      <div ref={innerRef} className="hero-gallery__inner">
        <div className="hero-gallery__grid">

          {/* Layer 1 */}
          <div className="hero-gallery__layer">
            {galleryLayer1.map((item, idx) => (
              <Link key={idx} href={`/gallery/${item.slug}`}className="hero-gallery__item group">
                <img src={item.image} alt={item.name} loading="lazy" />
                <div className="hero-gallery__item-hover">
                  <div className="hero-gallery__item-content">
                    <p>{item.name}</p>
                    <svg width="13" height="13" fill="none" viewBox="0 0 13 13" xmlns="http://www.w3.org/2000/svg">
                      <path d="M.012 6.5h12m0 0L6.512 1m5.5 5.5l-5.5 5.5" stroke="#fff" strokeWidth="1.5" />
                    </svg>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {/* Layer 2 */}
          <div className="hero-gallery__layer">
            {galleryLayer2.map((item, idx) => (
              <Link key={idx} href={`/gallery/${item.slug}`}className="hero-gallery__item group">
                <img src={item.image} alt={item.name} loading="lazy" />
                <div className="hero-gallery__item-hover">
                  <div className="hero-gallery__item-content">
                    <p>{item.name}</p>
                    <svg width="13" height="13" fill="none" viewBox="0 0 13 13" xmlns="http://www.w3.org/2000/svg">
                      <path d="M.012 6.5h12m0 0L6.512 1m5.5 5.5l-5.5 5.5" stroke="#fff" strokeWidth="1.5" />
                    </svg>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {/* Layer 3 */}
          <div className="hero-gallery__layer">
            {galleryLayer3.map((item, idx) => (
              <Link key={idx} href={`/gallery/${item.slug}`}className="hero-gallery__item group">
                <img src={item.image} alt={item.name} loading="lazy" />
                <div className="hero-gallery__item-hover">
                  <div className="hero-gallery__item-content">
                    <p>{item.name}</p>
                    <svg width="13" height="13" fill="none" viewBox="0 0 13 13" xmlns="http://www.w3.org/2000/svg">
                      <path d="M.012 6.5h12m0 0L6.512 1m5.5 5.5l-5.5 5.5" stroke="#fff" strokeWidth="1.5" />
                    </svg>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {/* Center Main Video */}
          <div className="hero-gallery__main-image">
            <video
              src={galleryVideoSrc}
              autoPlay
              muted
              loop
              playsInline
              className="w-full h-full object-cover"
            />
          </div>

        </div>
      </div>
    </section>
  );
}
