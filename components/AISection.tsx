"use client";

import React from "react";

interface Feature {
  title: string;
  tagline: string;
  description: string;
  details: string[];
  gradient: string;
}

const aiFeatures: Feature[] = [
  {
    title: "AI-Powered Automation",
    tagline: "LLM & Workflow Automation",
    description:
      "We integrate large language models and intelligent agents directly into your software workflows — automating repetitive processes, document parsing, and decision-making at scale.",
    details: [
      "OpenAI & Anthropic API integrations",
      "Custom LLM fine-tuning pipelines",
      "Intelligent document processing",
    ],
    gradient: "from-blue-500/10 to-indigo-500/10 border-blue-500/20",
  },
  {
    title: "Predictive Analytics",
    tagline: "ML-Driven Business Intelligence",
    description:
      "We build machine learning models that turn your raw data into actionable predictions — whether that's forecasting revenue, detecting fraud, or identifying churn before it happens.",
    details: [
      "Customer lifetime value models",
      "Revenue & demand forecasting",
      "Anomaly detection & alerting",
    ],
    gradient: "from-purple-500/10 to-pink-500/10 border-purple-500/20",
  },
  {
    title: "Intelligent Search & Discovery",
    tagline: "Semantic AI & Recommendations",
    description:
      "Move beyond keyword search. We embed semantic vector search and personalised recommendation engines into your applications so users find exactly what they need, faster.",
    details: [
      "Vector database integration (Pinecone, Weaviate)",
      "Personalised recommendation systems",
      "Conversational AI interfaces",
    ],
    gradient: "from-cyan-500/10 to-teal-500/10 border-cyan-500/20",
  },
];

export default function AISection() {
  return (
    <section id="ai" className="bg-[#030303] text-white py-24 md:py-36 border-b border-zinc-900 w-full relative overflow-hidden z-20">

      {/* Background glowing decorations */}
      <div className="absolute top-1/4 left-1/3 w-[500px] h-[500px] rounded-full bg-blue-500/5 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] rounded-full bg-purple-500/5 blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">

        {/* Section Header */}
        <div className="max-w-3xl mb-20">
          <span className="text-cyan-400 uppercase tracking-widest text-xs font-semibold block mb-4">
            AI &amp; Intelligent Engineering
          </span>
          <h2 className="text-4xl md:text-6xl font-bold tracking-tight mb-8">
            Future-Proofing Your <br />
            <em className="font-serif font-normal italic text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-300">
              Software Business.
            </em>
          </h2>
          <p className="text-zinc-400 text-base md:text-lg leading-relaxed font-light">
            We merge solid software engineering with modern artificial intelligence. By building AI-first architectures, we ensure your products stay fast, intelligent, and ahead of the competition across all emerging platforms.
          </p>
        </div>

        {/* Feature Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {aiFeatures.map((feat, idx) => (
            <div
              key={idx}
              className={`flex flex-col justify-between p-8 rounded-3xl border bg-gradient-to-b ${feat.gradient} transition-all duration-300 hover:scale-[1.02] hover:bg-zinc-900/40 group`}
            >
              <div>
                <span className="text-xs font-bold text-zinc-500 uppercase tracking-wider block mb-1">
                  {feat.tagline}
                </span>
                <h3 className="text-xl md:text-2xl font-bold tracking-tight text-white mb-4 group-hover:text-cyan-400 transition-colors duration-300">
                  {feat.title}
                </h3>
                <p className="text-zinc-400 text-sm md:text-base leading-relaxed font-light mb-8">
                  {feat.description}
                </p>
              </div>

              {/* Detail list */}
              <div className="border-t border-zinc-800/80 pt-6 mt-auto">
                <ul className="flex flex-col gap-3">
                  {feat.details.map((detail, dIdx) => (
                    <li key={dIdx} className="flex items-center gap-2.5 text-zinc-300 text-xs md:text-sm font-light">
                      <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10 3L4.5 8.5L2 6" stroke="#22d3ee" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                      {detail}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* Callout */}
        <div className="mt-16 bg-zinc-900/30 border border-zinc-800/60 rounded-3xl p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-8 backdrop-blur-sm">
          <div className="max-w-2xl">
            <h4 className="text-lg md:text-xl font-bold mb-2">
              Want a Free AI Readiness Assessment?
            </h4>
            <p className="text-zinc-400 text-sm font-light leading-relaxed">
              Find out where AI can add immediate value in your business — from automation opportunities to recommendation systems and predictive models.
            </p>
          </div>
          <a href="#contact" className="btn btn-primary btn-lg shrink-0">
            Get Free AI Assessment
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
              <path d="M1 6h10m0 0L7 2m4 4L7 10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </a>
        </div>

      </div>
    </section>
  );
}
