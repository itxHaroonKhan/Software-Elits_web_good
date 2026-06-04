"use client";

import { CircularTestimonials } from "@/components/ui/circular-testimonials";

const testimonials = [
  {
    quote:
      "Software Elites delivered our trading platform on time and beyond spec. The code quality is outstanding and team communication was flawless.",
    name: "Sarah Johnson",
    designation: "VP Engineering, Nexio",
    src: "https://images.unsplash.com/photo-1512316609839-ce289d3eba0a?q=80&w=400&h=400&fit=crop&auto=format",
  },
  {
    quote:
      "They built our HIPAA-compliant mobile app in record time. Truly elite engineers who understood our healthcare domain from day one.",
    name: "Michael Chen",
    designation: "CTO, FinanceFlow",
    src: "https://images.unsplash.com/photo-1628749528992-f5702133b686?q=80&w=400&h=400&fit=crop&auto=format",
  },
  {
    quote:
      "Our conversion rate jumped 55% after launch. The headless architecture they designed is fast, scalable, and easy to maintain.",
    name: "Emma Davis",
    designation: "Product Lead, ShopForce",
    src: "https://images.unsplash.com/photo-1524267213992-b76e8577d046?q=80&w=400&h=400&fit=crop&auto=format",
  },
  {
    quote:
      "The AI analytics platform they built generated £5M+ in ARR impact within the first year. Exceptional work from discovery to delivery.",
    name: "James Wilson",
    designation: "Founder, DataSphere",
    src: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=400&h=400&fit=crop&auto=format",
  },
  {
    quote:
      "Best software agency we have ever worked with. They don't just write code — they deeply understand your business goals first.",
    name: "Lisa Park",
    designation: "CEO, MediTrack",
    src: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=400&h=400&fit=crop&auto=format",
  },
];

export default function Testimonials() {
  return (
    <section className="w-full bg-black text-white relative z-20 overflow-hidden pt-28 md:pt-36 pb-24 md:pb-32">

      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-purple-600/5 blur-[120px] pointer-events-none" />

      <div className="relative z-10">
        <div className="max-w-7xl mx-auto px-6 md:px-12 mb-16 md:mb-20">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div className="flex flex-col gap-4">
              <span className="text-zinc-600 text-[11px] uppercase tracking-[0.25em] font-semibold">
                CLIENT REVIEWS
              </span>
              <h2
                className="font-bold tracking-tight leading-[1.0] text-white"
                style={{ fontSize: "clamp(2.5rem, 5.5vw, 4.5rem)" }}
              >
                What Our Clients Say.
              </h2>
            </div>
            <p className="text-zinc-500 text-sm md:text-base font-light leading-relaxed max-w-sm md:text-right md:pb-2">
              Trusted by startups and enterprises across the globe.
            </p>
          </div>
        </div>

        <div className="flex justify-center">
          <CircularTestimonials
            testimonials={testimonials}
            autoplay={true}
            colors={{
              name: "#f7f7ff",
              designation: "#a0a0b0",
              testimony: "#d4d4e0",
              arrowBackground: "#1e1e2a",
              arrowForeground: "#f1f1f7",
              arrowHoverBackground: "#7c6af7",
            }}
            fontSizes={{
              name: "28px",
              designation: "18px",
              quote: "18px",
            }}
          />
        </div>
      </div>

    </section>
  );
}
