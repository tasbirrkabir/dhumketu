import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-night px-5 text-center text-chalk">
      <p className="qa-eyebrow">Error 404</p>
      <h1 className="qa-display mt-6 text-5xl sm:text-6xl">Off course</h1>
      <p className="mt-5 max-w-md text-base leading-relaxed text-chalk-2">
        This page has drifted out of the tracking window — much like a sounding
        rocket past apogee.
      </p>
      <Link
        href="/"
        className="qa-link mt-10 inline-flex items-center gap-2 text-[0.9375rem] font-medium text-chalk"
      >
        <ArrowLeft className="h-4 w-4" aria-hidden="true" />
        Back to DhumketuX
      </Link>
    </div>
  );
}
