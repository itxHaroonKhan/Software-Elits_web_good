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

  // Check support for CSS scroll-driven animations
  useEffect(() => {
    if (typeof window !== "undefined") {
      const supported = CSS.supports("animation-timeline", "scroll()");
      setIsNativeSupported(supported);

      if (!supported) {
        const handleScroll = () => {
          if (!containerRef.current || !innerRef.current) return;
          const rect = containerRef.current.getBoundingClientRect();
          const viewHeight = window.innerHeight;
          
          // Total distance the container scrolls through
          const totalScrollable = rect.height - viewHeight;
          if (totalScrollable <= 0) return;

          // How far we have scrolled inside the container
          const scrolled = -rect.top;
          const progress = Math.max(0, Math.min(1, scrolled / totalScrollable));

          containerRef.current.style.setProperty("--scroll-progress", progress.toString());
        };

        window.addEventListener("scroll", handleScroll);
        // Run once initially
        handleScroll();

        return () => window.removeEventListener("scroll", handleScroll);
      }
    }
  }, []);

  const layer1: GalleryItem[] = [
    { name: "Billionaire Boys Club", image: "https://www.charle.co.uk/assets/images/home/grid/grid1.webp", link: "#" },
    { name: "Gray Nicolls", image: "https://www.charle.co.uk/assets/images/home/grid/grid5.webp", link: "#" },
    { name: "CleanCo", image: "https://www.charle.co.uk/assets/images/home/grid/grid6.webp", link: "#" },
    { name: "RNLI", image: "https://www.charle.co.uk/assets/images/home/grid/grid9.webp", link: "#" },
    { name: "Sunnamusk", image: "https://www.charle.co.uk/assets/images/home/grid/grid10.webp", link: "#" },
    { name: "Case Furniture", image: "https://www.charle.co.uk/assets/images/home/grid/grid14.webp", link: "#" },
  ];

  const layer2: GalleryItem[] = [
    { name: "Cambridge Satchel", image: "https://www.charle.co.uk/assets/images/home/grid/grid2.webp", link: "#" },
    { name: "Candy Kittens", image: "https://www.charle.co.uk/assets/images/home/grid/grid4.webp", link: "#" },
    { name: "Gilbert Rugby", image: "https://www.charle.co.uk/assets/images/home/grid/grid7.webp", link: "#" },
    { name: "Unndr", image: "https://www.charle.co.uk/assets/images/home/grid/grid8.webp", link: "#" },
    { name: "Bio&Me", image: "https://www.charle.co.uk/assets/images/home/grid/grid13.webp", link: "#" },
    { name: "Vollebak", image: "https://www.charle.co.uk/assets/images/home/grid/grid11.webp", link: "#" },
  ];

  const layer3: GalleryItem[] = [
    { name: "111Skin", image: "https://www.charle.co.uk/assets/images/home/grid/grid3.webp", link: "#" },
    { name: "Muc-Off", image: "https://www.charle.co.uk/assets/images/home/grid/grid12.webp", link: "#" },
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
