import Link from "next/link";
import { ArrowLeft } from "lucide-react";

/**
 * 404: lost in space. Deep-night panel, ghost numeral, way home.
 */
export default function NotFound() {
  return (
    <div className="night relative flex min-h-screen flex-col overflow-hidden bg-void text-chalk">
      <div className="starfield absolute inset-0 opacity-80" aria-hidden="true" />
      <div className="glow-ember left-1/2 top-[30%] h-[380px] w-[560px] -translate-x-1/2" aria-hidden="true" />

      <div className="relative z-10 mx-auto flex w-full max-w-[1180px] flex-1 flex-col items-start justify-center px-5 py-32 sm:px-8 lg:px-12">
        <p
          aria-hidden="true"
          className="qa-display text-[clamp(6rem,22vw,16rem)] leading-[0.85]"
          style={{ color: "transparent", WebkitTextStroke: "1.5px rgba(244,242,237,0.16)" }}
        >
          404
        </p>
        <h1 className="qa-display mt-8 max-w-[16ch] text-[clamp(2rem,5vw,3.75rem)]">
          This signal is out of <span className="qa-serif font-normal">range.</span>
        </h1>
        <p className="mt-5 max-w-md text-lg leading-relaxed text-chalk-2">
          The page you requested does not exist, but the mission continues.
        </p>
        <Link
          href="/"
          className="mt-10 inline-flex items-center gap-2 rounded-full bg-chalk px-7 py-3 text-[0.9375rem] font-semibold text-[#0b0b0d] transition-colors duration-300 hover:bg-[#e7e4dc]"
        >
          <ArrowLeft className="h-4 w-4" aria-hidden="true" />
          Return to base
        </Link>
      </div>
    </div>
  );
}
