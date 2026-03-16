import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex min-h-[80vh] flex-col items-center justify-center px-6 text-center">
      <h1 className="mb-4 text-[120px] font-black leading-none text-primary lg:text-[180px]">
        404
      </h1>
      <p className="mb-8 text-2xl font-bold text-neutral-800 lg:text-3xl">
        Pagina niet gevonden
      </p>
      <p className="mb-12 max-w-md text-lg text-neutral-500">
        Deze pagina is niet gemaakt door Rose Vibes Studio.
      </p>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/images/makers logo/Group 1.png"
        alt="Rose Vibes Studio"
        className="mb-12 h-16 w-auto"
      />
      <Link
        href="/"
        className="inline-flex items-center gap-2 rounded-lg bg-primary px-10 py-5 text-xl font-bold text-white shadow-xl shadow-primary/20 transition-all hover:scale-105"
      >
        <span className="material-symbols-outlined">arrow_back</span>
        Terug naar Home
      </Link>
    </main>
  );
}
