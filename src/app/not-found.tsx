import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-bg-0 px-5 dx-grid-bg text-center">
      <p className="dx-label text-signal">Error 404 · Signal Lost</p>
      <h1 className="dx-display mt-6 text-5xl font-semibold text-ink md:text-7xl">
        OFF COURSE
      </h1>
      <p className="mt-6 max-w-md text-base leading-relaxed text-ink-1">
        This page has drifted out of the tracking window — much like a
        sounding rocket past apogee.
      </p>
      <Link
        href="/"
        className="mt-10 inline-flex items-center gap-2 border border-line-strong px-6 py-3.5 dx-label text-ink transition-colors hover:border-signal hover:text-signal"
      >
        <ArrowLeft className="h-4 w-4" aria-hidden="true" />
        Return to mission
      </Link>
    </div>
  );
}
