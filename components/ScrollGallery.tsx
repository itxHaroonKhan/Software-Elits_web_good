"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";

interface GalleryItem {
  name: string;
  image: string;
  link: string;
}

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

  const layer1: GalleryItem[] = [
    { name: "E-Commerce",    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?q=80&w=400&h=500&fit=crop", link: "#" },
    { name: "Web Design",    image: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?q=80&w=400&h=500&fit=crop", link: "#" },
    { name: "Branding",      image: "https://images.unsplash.com/photo-1634942537034-2531766767d1?q=80&w=400&h=500&fit=crop", link: "#" },
    { name: "Mobile App",    image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?q=80&w=400&h=500&fit=crop", link: "#" },
    { name: "SEO",           image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=400&h=500&fit=crop", link: "#" },
    { name: "Social Media",  image: "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?q=80&w=400&h=500&fit=crop", link: "#" },
  ];

  const layer2: GalleryItem[] = [
    { name: "UI/UX Design",  image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?q=80&w=400&h=500&fit=crop", link: "#" },
    { name: "Development",   image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=400&h=500&fit=crop", link: "#" },
    { name: "FinTech",       image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=400&h=500&fit=crop", link: "#" },
    { name: "Healthcare",    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=400&h=500&fit=crop", link: "#" },
    { name: "Real Estate",   image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=400&h=500&fit=crop", link: "#" },
    { name: "Education",     image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=400&h=500&fit=crop", link: "#" },
  ];

  const layer3: GalleryItem[] = [
    { name: "Animation",     image: "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?q=80&w=400&h=500&fit=crop", link: "#" },
    { name: "WordPress",     image: "https://images.unsplash.com/photo-1547658719-da2b51169166?q=80&w=400&h=500&fit=crop", link: "#" },
  ];

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
            {layer1.map((item, idx) => (
              <Link key={idx} href={item.link} className="hero-gallery__item group">
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
            {layer2.map((item, idx) => (
              <Link key={idx} href={item.link} className="hero-gallery__item group">
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
            {layer3.map((item, idx) => (
              <Link key={idx} href={item.link} className="hero-gallery__item group">
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
              src="https://www.charle.co.uk/assets/videos/hero-video.mp4"
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
