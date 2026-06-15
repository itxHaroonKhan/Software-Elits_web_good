export interface GalleryItem {
  name: string;
  image: string;
  slug: string;
}

export const galleryLayer1: GalleryItem[] = [
  { name: "E-Commerce",   image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?q=80&w=400&h=500&fit=crop", slug: "e-commerce" },
  { name: "Web Design",   image: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?q=80&w=400&h=500&fit=crop", slug: "web-design" },
  { name: "Branding",     image: "https://images.unsplash.com/photo-1634942537034-2531766767d1?q=80&w=400&h=500&fit=crop", slug: "branding" },
  { name: "Mobile App",   image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?q=80&w=400&h=500&fit=crop", slug: "mobile-app" },
  { name: "SEO",          image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=400&h=500&fit=crop", slug: "seo" },
  { name: "Social Media", image: "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?q=80&w=400&h=500&fit=crop", slug: "social-media" },
];

export const galleryLayer2: GalleryItem[] = [
  { name: "UI/UX Design", image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?q=80&w=400&h=500&fit=crop", slug: "ui-ux-design" },
  { name: "Development",  image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=400&h=500&fit=crop", slug: "development" },
  { name: "FinTech",      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=400&h=500&fit=crop", slug: "fintech" },
  { name: "Healthcare",   image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=400&h=500&fit=crop", slug: "healthcare" },
  { name: "Real Estate",  image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=400&h=500&fit=crop", slug: "real-estate" },
  { name: "Education",    image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=400&h=500&fit=crop", slug: "education" },
];

export const galleryLayer3: GalleryItem[] = [
  { name: "Animation",    image: "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?q=80&w=400&h=500&fit=crop", slug: "animation" },
  { name: "WordPress",    image: "https://images.unsplash.com/photo-1547658719-da2b51169166?q=80&w=400&h=500&fit=crop", slug: "wordpress" },
];

export const allGalleryItems = [...galleryLayer1, ...galleryLayer2, ...galleryLayer3];

export const galleryVideoSrc =
  "https://www.charle.co.uk/assets/videos/hero-video.mp4";
