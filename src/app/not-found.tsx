import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <div className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-night px-5 text-center text-chalk">
      <span aria-hidden="true" className="qa-ghost left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-[16rem] sm:text-[22rem]">
        404
      </span>
      <p className="qa-data relative text-sm text-chalk-2">Error 404</p>
      <h1 className="qa-display relative mt-6 text-5xl sm:text-6xl">
        Off <span className="qa-serif font-normal text-chalk-2">course</span>
      </h1>
      <p className="relative mt-5 max-w-md text-base leading-relaxed text-chalk-2">
        This page has drifted out of the tracking window — much like a sounding
        rocket past apogee.
      </p>
      <Link
        href="/"
        className="qa-link relative mt-10 inline-flex items-center gap-2 text-[0.9375rem] font-medium text-chalk"
      >
        <ArrowLeft className="h-4 w-4" aria-hidden="true" />
        Back to DhumketuX
      </Link>
    </div>
  );
}
