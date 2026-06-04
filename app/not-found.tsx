import Link from "next/link";

export default function NotFound() {
  return (
    <main className="bg-[#05050a] text-white min-h-screen pt-16 flex items-center justify-center">
      <div className="text-center flex flex-col items-center gap-8 px-6">
        <div className="relative">
          <span className="text-[10rem] md:text-[16rem] font-extrabold tracking-tighter leading-none
                           text-white/[0.04] select-none pointer-events-none">
            404
          </span>
          <div className="absolute inset-0 flex flex-col items-center justify-center gap-4">
            <span className="section-label">Page Not Found</span>
            <h1 className="text-3xl md:text-5xl font-bold tracking-tight text-white">
              This page doesn&apos;t exist.
            </h1>
          </div>
        </div>
        <p className="text-zinc-500 text-base font-light max-w-sm">
          The page you&apos;re looking for may have moved or been removed.
        </p>
        <div className="flex flex-wrap gap-3 justify-center">
          <Link href="/" className="btn btn-accent btn-lg">Back to Home</Link>
          <Link href="/contact" className="btn btn-outline btn-lg">Contact Us</Link>
        </div>
      </div>
    </main>
  );
}
