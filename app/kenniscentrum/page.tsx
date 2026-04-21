import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Kenniscentrum — NCDE",
  description:
    "Nieuws, analyses en achtergrondartikelen over de Nederlandse energietransitie. Blijf op de hoogte via het kenniscentrum van het Nederlands Collectief Duurzame Energie (NCDE).",
};

const artikelen = [
  {
    slug: "salderingsregeling-2027",
    category: "Salderingsregeling",
    title: "Salderingsregeling: wat verandert er vanaf 2027?",
    excerpt:
      "De geleidelijke afbouw van de salderingsregeling start in 2027. Wij leggen uit wat dit betekent voor huiseigenaren met zonnepanelen en hoe u zich kunt voorbereiden.",
    date: "15 april 2026",
    readTime: "5 min",
    icon: "wb_sunny",
  },
  {
    slug: "m340-certificering",
    category: "Certificering",
    title: "M340-certificering: waarom dit belangrijk is",
    excerpt:
      "Een overzicht van de M340-standaard voor installateurs. Hoe waarborgt deze certificering kwaliteit en veiligheid bij duurzame installaties?",
    date: "8 april 2026",
    readTime: "4 min",
    icon: "verified",
  },
  {
    slug: "stroomuitval-voorbereiding",
    category: "Noodvoorziening",
    title: "Voorbereid zijn op stroomuitval: de essentie",
    excerpt:
      "Door toenemende druk op het energienet wordt noodvoorziening steeds belangrijker. Een praktische gids voor uw huishouden.",
    date: "1 april 2026",
    readTime: "6 min",
    icon: "bolt",
  },
];

export default function KenniscentrumPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative flex min-h-[280px] items-center overflow-hidden bg-primary py-14">
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage:
              "radial-gradient(circle at 2px 2px, white 1px, transparent 0)",
            backgroundSize: "40px 40px",
          }}
        ></div>
        <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/60 to-transparent"></div>
        <div className="relative z-10 mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
          <nav className="mb-5 flex items-center gap-2 text-xs text-white/60">
            <Link className="hover:text-white" href="/">
              Home
            </Link>
            <span className="material-symbols-outlined text-xs">
              chevron_right
            </span>
            <span className="text-white">Kenniscentrum</span>
          </nav>
          <div className="max-w-3xl">
            <h1 className="mb-3 text-3xl font-bold leading-tight text-white md:text-5xl">
              Kenniscentrum
            </h1>
            <p className="max-w-2xl text-base leading-relaxed text-white/85">
              Nieuws, analyses en achtergrondartikelen over de Nederlandse
              energietransitie. Onafhankelijke informatie van het Nederlands
              Collectief Duurzame Energie (NCDE).
            </p>
          </div>
        </div>
      </section>

      {/* Artikelen grid */}
      <section className="bg-background-light py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-10 text-center">
            <h2 className="mb-3 text-2xl font-bold text-primary lg:text-3xl">
              Recente artikelen
            </h2>
            <p className="mx-auto max-w-2xl text-base text-neutral-600">
              Blijf op de hoogte van de laatste ontwikkelingen in duurzame
              energie en regelgeving.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {artikelen.map((artikel) => (
              <article
                key={artikel.slug}
                className="flex flex-col rounded-xl border border-primary/5 bg-white p-6 shadow-sm transition-all hover:shadow-xl hover:shadow-primary/5"
              >
                <div className="mb-4 flex items-start justify-between">
                  <span className="material-symbols-outlined text-3xl text-primary">
                    {artikel.icon}
                  </span>
                  <span className="rounded-full bg-primary/5 px-3 py-1 text-xs font-semibold text-primary">
                    {artikel.category}
                  </span>
                </div>
                <h3 className="mb-3 text-lg font-bold text-primary">
                  {artikel.title}
                </h3>
                <p className="mb-5 flex-1 text-sm leading-relaxed text-neutral-600">
                  {artikel.excerpt}
                </p>
                <div className="mb-4 flex items-center gap-3 text-xs text-neutral-400">
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
                    {artikel.readTime}
                  </span>
                </div>
                <span className="mt-auto flex items-center gap-2 text-sm font-semibold text-primary/60">
                  Lees meer
                  <span className="material-symbols-outlined text-sm">
                    arrow_forward
                  </span>
                </span>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-3xl border border-primary/10 bg-accent-soft p-10 text-center lg:p-14">
            <span className="material-symbols-outlined mb-4 text-4xl text-primary">
              mail
            </span>
            <h2 className="mb-3 text-2xl font-bold text-primary lg:text-3xl">
              Vraag over een artikel?
            </h2>
            <p className="mx-auto mb-6 max-w-2xl text-base text-primary/70">
              Heeft u specifieke vragen over onze publicaties of wilt u meer
              informatie? Neem gerust contact met ons op.
            </p>
            <Link
              href="/contact"
              className="inline-block rounded-lg bg-primary px-8 py-3 text-base font-semibold text-white transition-all hover:bg-primary/90"
            >
              Neem contact op
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
