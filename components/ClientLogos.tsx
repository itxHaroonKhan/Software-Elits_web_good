"use client";

import React from "react";

const clientLogos = [
  { name: "Google",    logo: "GOOGLE"    },
  { name: "Stripe",    logo: "STRIPE"    },
  { name: "Notion",    logo: "NOTION"    },
  { name: "Figma",     logo: "FIGMA"     },
  { name: "HubSpot",   logo: "HUBSPOT"   },
  { name: "Vercel",    logo: "VERCEL"    },
  { name: "Twilio",    logo: "TWILIO"    },
  { name: "Shopify",   logo: "SHOPIFY"   },
  { name: "Slack",     logo: "SLACK"     },
  { name: "Intercom",  logo: "INTERCOM"  },
];

export default function ClientLogos() {
  return (
    <section className="bg-black py-20 md:py-28 overflow-hidden border-b border-white/[0.06] w-full relative z-20">
      <p className="text-zinc-600 uppercase tracking-[0.22em] text-[10px] font-semibold text-center mb-12">
        Trusted by some of the world&apos;s fastest-growing technology companies
      </p>

      {/* Infinite marquee */}
      <div className="relative overflow-hidden w-full marquee-mask py-3">
        <div className="animate-marquee flex items-center gap-20 w-max">
          {[...clientLogos, ...clientLogos, ...clientLogos, ...clientLogos].map((client, idx) => (
            <span
              key={idx}
              className="text-white/[0.18] text-lg md:text-2xl font-black tracking-[0.18em]
                         font-sans select-none uppercase cursor-default
                         hover:text-white/60 transition-colors duration-300"
            >
              {client.logo}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
