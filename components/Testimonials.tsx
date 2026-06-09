"use client";

import { CircularTestimonials } from "@/components/ui/circular-testimonials";

const testimonials = [
  {
    quote:
      "They redesigned our entire platform and the results were immediate. Traffic doubled in the first month and our conversion rate went through the roof.",
    name: "Sarah Johnson",
    designation: "CEO, TechStart Inc. · Web Design",
    src: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=400&h=400&fit=crop&auto=format",
  },
  {
    quote:
      "I've worked with a dozen agencies over my career. This team is different — they actually listen, challenge your thinking, and deliver work that exceeds expectations every single time.",
    name: "Michael Davis",
    designation: "Marketing Director · Branding",
    src: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=400&h=400&fit=crop&auto=format",
  },
  {
    quote:
      "From the first consultation to the final launch, everything was seamless. Our e-commerce store went live ahead of schedule and has been generating revenue since day one.",
    name: "Jennifer Williams",
    designation: "Business Owner · E-Commerce",
    src: "https://images.unsplash.com/photo-1524267213992-b76e8577d046?q=80&w=400&h=400&fit=crop&auto=format",
  },
];

const trustStats = [
  { value: "300%", label: "Avg. Traffic Growth" },
  { value: "98%",  label: "Client Satisfaction"  },
  { value: "180+", label: "Clients Served"        },
];

export default function Testimonials() {
  return (
    <section className="w-full bg-black text-white relative z-20 overflow-hidden pt-28 md:pt-36 pb-24 md:pb-32">

      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-purple-600/5 blur-[120px] pointer-events-none" />

      <div className="relative z-10">
        <div className="max-w-7xl mx-auto px-6 md:px-12 mb-16 md:mb-20">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
            <div className="flex flex-col gap-4">
              <span className="text-zinc-600 text-[11px] uppercase tracking-[0.25em] font-semibold">
                Client Reviews
              </span>
              <h2
                className="font-bold tracking-tight leading-[1.0] text-white"
                style={{ fontSize: "clamp(2.5rem, 5.5vw, 4.5rem)" }}
              >
                What Our{" "}
                <span className="bg-gradient-to-r from-[#7c6af7] to-[#5a78f0] bg-clip-text text-transparent">
                  CLIENTS
                </span>{" "}
                Say
              </h2>
            </div>

            {/* Trust stats */}
            <div className="flex items-center gap-8 md:pb-2">
              {trustStats.map((s, i) => (
                <div key={i} className="flex flex-col gap-1 text-right">
                  <span className="text-white font-extrabold text-2xl md:text-3xl tracking-tight leading-none">
                    {s.value}
                  </span>
                  <span className="text-zinc-600 text-[10px] uppercase tracking-wider font-semibold">
                    {s.label}
                  </span>
                </div>
              ))}
            </div>
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

        <p className="text-center text-zinc-700 text-xs mt-10 tracking-wider">
          Every review is from a real client — authenticity is our policy &nbsp;·&nbsp; ★★★★★ &nbsp;5.0 Average Rating
        </p>
      </div>

    </section>
  );
}
