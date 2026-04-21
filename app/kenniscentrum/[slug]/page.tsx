import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { artikelen, getArtikel } from "@/lib/artikelen";

type Props = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return artikelen.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const artikel = getArtikel(slug);
  if (!artikel) return { title: "Artikel niet gevonden — NCDE" };
  return {
    title: `${artikel.title} — NCDE`,
    description: artikel.excerpt,
  };
}

export default async function ArtikelPage({ params }: Props) {
  const { slug } = await params;
  const artikel = getArtikel(slug);
  if (!artikel) notFound();

  return (
    <>
      {/* Hero */}
      <section className="relative flex min-h-[260px] items-center overflow-hidden bg-primary py-12">
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage:
              "radial-gradient(circle at 2px 2px, white 1px, transparent 0)",
            backgroundSize: "40px 40px",
          }}
        ></div>
        <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/60 to-transparent"></div>
        <div className="relative z-10 mx-auto w-full max-w-4xl px-4 sm:px-6 lg:px-8">
          <nav className="mb-5 flex items-center gap-2 text-xs text-white/60">
            <Link className="hover:text-white" href="/">
              Home
            </Link>
            <span className="material-symbols-outlined text-xs">
              chevron_right
            </span>
            <Link className="hover:text-white" href="/kenniscentrum">
              Kenniscentrum
            </Link>
            <span className="material-symbols-outlined text-xs">
              chevron_right
            </span>
            <span className="text-white">{artikel.category}</span>
          </nav>
          <span className="mb-3 inline-block rounded-full bg-white/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-white">
            {artikel.category}
          </span>
          <h1 className="mb-4 text-3xl font-bold leading-tight text-white md:text-5xl">
            {artikel.title}
          </h1>
          <div className="flex items-center gap-4 text-xs text-white/70">
            <span className="flex items-center gap-1">
              <span className="material-symbols-outlined text-sm">
                calendar_today
              </span>
              {artikel.date}
            </span>
            <span className="flex items-center gap-1">
              <span className="material-symbols-outlined text-sm">
                schedule
              </span>
              {artikel.readTime} lezen
            </span>
          </div>
        </div>
      </section>

      {/* Body */}
      <article className="mx-auto max-w-3xl px-4 py-12 sm:px-6 lg:px-8">
        <p className="mb-8 border-l-2 border-primary/40 pl-4 text-lg italic leading-relaxed text-slate-600">
          {artikel.excerpt}
        </p>
        <div className="space-y-8">
          {artikel.sections.map((section, i) => (
            <section key={i}>
              {section.heading && (
                <h2 className="mb-3 text-xl font-bold text-primary lg:text-2xl">
                  {section.heading}
                </h2>
              )}
              <div className="space-y-4">
                {section.paragraphs.map((p, j) => (
                  <p key={j} className="leading-relaxed text-slate-700">
                    {p}
                  </p>
                ))}
              </div>
            </section>
          ))}
        </div>

        {/* Back link */}
        <div className="mt-12 border-t border-slate-200 pt-8">
          <Link
            href="/kenniscentrum"
            className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:underline"
          >
            <span className="material-symbols-outlined text-sm">
              arrow_back
            </span>
            Terug naar kenniscentrum
          </Link>
        </div>
      </article>

      {/* CTA */}
      <section className="bg-background-light py-12">
        <div className="mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="mb-3 text-xl font-bold text-primary lg:text-2xl">
            Vraag over dit artikel?
          </h2>
          <p className="mx-auto mb-6 max-w-xl text-sm text-neutral-600">
            Heeft u aanvullende vragen of wilt u meer informatie over dit
            onderwerp? Neem gerust contact op.
          </p>
          <Link
            href="/contact"
            className="inline-block rounded-lg bg-primary px-6 py-2.5 text-sm font-semibold text-white transition-all hover:bg-primary/90"
          >
            Neem contact op
          </Link>
        </div>
      </section>
    </>
  );
}
