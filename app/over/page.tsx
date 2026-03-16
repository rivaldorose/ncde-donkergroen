import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Over NCDE — Nederlands Collectief Duurzame Energie",
  description:
    "Leer meer over het NCDE: onze missie, visie, het bestuur en onze partners in de energietransitie.",
};

export default function OverPage() {
  return (
    <main className="flex-grow">
      {/* Hero */}
      <section className="relative overflow-hidden bg-primary py-24 lg:py-36">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1497440001374-f26997328c1b?w=1600&h=900&fit=crop')",
          }}
        ></div>
        <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-12">
          <div className="max-w-3xl">
            <nav className="mb-6 flex items-center gap-2 text-sm text-white/60">
              <Link className="hover:underline" href="/">
                Home
              </Link>
              <span className="material-symbols-outlined text-xs">
                chevron_right
              </span>
              <span className="font-medium text-white">Over NCDE</span>
            </nav>
            <h1 className="mb-6 text-4xl font-black leading-tight text-white lg:text-6xl">
              Wie zijn wij
            </h1>
            <p className="max-w-2xl text-lg leading-relaxed text-white/80 lg:text-xl">
              Het Nederlands Collectief Duurzame Energie zet zich in voor een
              eerlijke, transparante en toegankelijke energietransitie voor
              iedere Nederlander.
            </p>
          </div>
        </div>
      </section>

      {/* Missie & Visie */}
      <section className="bg-white py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-12">
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-3xl font-black text-primary lg:text-4xl">
              Onze missie &amp; visie
            </h2>
            <p className="mx-auto max-w-2xl text-lg text-neutral-600">
              Wij geloven dat duurzame energie een recht is, geen luxe. Onze
              organisatie brengt kennis, beleid en praktijk samen.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            <div className="rounded-xl border border-primary/5 bg-background-light p-10">
              <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-lg bg-primary/10">
                <span className="material-symbols-outlined text-3xl text-primary">
                  flag
                </span>
              </div>
              <h3 className="mb-4 text-2xl font-bold text-primary">Missie</h3>
              <p className="leading-relaxed text-neutral-600">
                Het Nederlands Collectief Duurzame Energie informeert burgers,
                gemeenten en bedrijven over de mogelijkheden en regelgeving
                rondom duurzame energie. Wij bieden onafhankelijke, betrouwbare
                informatie zodat iedereen weloverwogen keuzes kan maken in de
                energietransitie.
              </p>
            </div>
            <div className="rounded-xl border border-primary/5 bg-background-light p-10">
              <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-lg bg-accent/10">
                <span className="material-symbols-outlined text-3xl text-accent">
                  visibility
                </span>
              </div>
              <h3 className="mb-4 text-2xl font-bold text-primary">Visie</h3>
              <p className="leading-relaxed text-neutral-600">
                Een Nederland waarin elke huiseigenaar toegang heeft tot
                betaalbare, duurzame energieoplossingen. Waarbij de overgang van
                fossiele naar hernieuwbare energie eerlijk, transparant en
                inclusief verloopt &mdash; zonder dat iemand achterblijft.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Kernwaarden */}
      <section className="bg-background-light py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-12">
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-3xl font-black text-primary lg:text-4xl">
              Onze kernwaarden
            </h2>
          </div>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            <div className="rounded-xl border border-primary/5 bg-white p-8 text-center transition-all hover:shadow-xl hover:shadow-primary/5">
              <span className="material-symbols-outlined mb-4 text-4xl text-primary">
                verified_user
              </span>
              <h3 className="mb-3 text-xl font-bold">Betrouwbaarheid</h3>
              <p className="text-sm leading-relaxed text-neutral-600">
                Alle informatie die wij delen is gebaseerd op offici&euml;le
                overheidsrichtlijnen en onafhankelijk geverifieerd.
              </p>
            </div>
            <div className="rounded-xl border border-primary/5 bg-white p-8 text-center transition-all hover:shadow-xl hover:shadow-primary/5">
              <span className="material-symbols-outlined mb-4 text-4xl text-primary">
                handshake
              </span>
              <h3 className="mb-3 text-xl font-bold">Onafhankelijkheid</h3>
              <p className="text-sm leading-relaxed text-neutral-600">
                Wij zijn geen commerci&euml;le partij. Onze adviezen zijn
                objectief en in het belang van de burger.
              </p>
            </div>
            <div className="rounded-xl border border-primary/5 bg-white p-8 text-center transition-all hover:shadow-xl hover:shadow-primary/5">
              <span className="material-symbols-outlined mb-4 text-4xl text-primary">
                groups
              </span>
              <h3 className="mb-3 text-xl font-bold">Toegankelijkheid</h3>
              <p className="text-sm leading-relaxed text-neutral-600">
                Duurzame energie moet voor iedereen bereikbaar zijn, ongeacht
                inkomen, achtergrond of technische kennis.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Bestuur */}
      <section className="bg-white py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-12">
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-3xl font-black text-primary lg:text-4xl">
              Het bestuur
            </h2>
            <p className="mx-auto max-w-2xl text-lg text-neutral-600">
              Ons bestuur bestaat uit professionals met ruime ervaring in
              energie, beleid en technologie.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {[
              {
                name: "Ir. Willem de Groot",
                role: "Voorzitter",
                description:
                  "25+ jaar ervaring in energiebeleid bij de Rijksoverheid en diverse brancheorganisaties.",
                photo:
                  "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=200&h=200&fit=crop&crop=face",
              },
              {
                name: "Dr. Sarah Bakker",
                role: "Secretaris",
                description:
                  "Gepromoveerd op hernieuwbare energiesystemen. Voormalig adviseur bij het Planbureau voor de Leefomgeving.",
                photo:
                  "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=200&h=200&fit=crop&crop=face",
              },
              {
                name: "Ing. Marco Visser",
                role: "Penningmeester",
                description:
                  "Financieel specialist met achtergrond in duurzame investeringen en energiecoöperaties.",
                photo:
                  "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&h=200&fit=crop&crop=face",
              },
            ].map((member) => (
              <div
                key={member.name}
                className="rounded-xl border border-primary/5 bg-background-light p-8 text-center"
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={member.photo}
                  alt={member.name}
                  className="mx-auto mb-6 h-20 w-20 rounded-full object-cover"
                />
                <h3 className="text-xl font-bold text-primary">
                  {member.name}
                </h3>
                <p className="mb-4 text-sm font-semibold uppercase tracking-wider text-accent">
                  {member.role}
                </p>
                <p className="text-sm leading-relaxed text-neutral-600">
                  {member.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partners */}
      <section className="bg-background-light py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-12">
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-3xl font-black text-primary lg:text-4xl">
              Onze partners
            </h2>
            <p className="mx-auto max-w-2xl text-lg text-neutral-600">
              Wij werken samen met netbeheerders, overheden en gecertificeerde
              installateurs om de energietransitie te versnellen.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-6 md:grid-cols-3 lg:grid-cols-6">
            {[
              { name: "Stedin", logo: "/images/partners/stedin.png" },
              { name: "Liander", logo: "/images/partners/liander.png" },
              { name: "Alliander", logo: "/images/partners/alliander.png" },
              { name: "TenneT", logo: "/images/partners/tennet.png" },
              { name: "Enexis", logo: "/images/partners/enexis.png" },
              {
                name: "Rijksoverheid",
                logo: "/images/partners/rijksoverheid.png",
              },
            ].map((partner) => (
              <div
                key={partner.name}
                className="flex flex-col items-center justify-center gap-3 rounded-xl border border-primary/5 bg-white p-6"
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={partner.logo}
                  alt={`${partner.name} logo`}
                  className="h-12 w-12 object-contain"
                />
                <span className="text-sm font-bold text-neutral-700">
                  {partner.name}
                </span>
              </div>
            ))}
          </div>
          <div className="mt-10 text-center">
            <Link
              href="/partners"
              className="inline-flex items-center gap-2 font-bold text-primary hover:underline"
            >
              Bekijk alle partners
              <span className="material-symbols-outlined text-sm">
                arrow_forward
              </span>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20">
        <div className="mx-auto max-w-5xl px-6 lg:px-12">
          <div className="rounded-3xl border border-primary/10 bg-accent-soft p-10 text-center lg:p-16">
            <h2 className="mb-6 text-3xl font-black text-primary lg:text-4xl">
              Samen bouwen aan een duurzaam Nederland
            </h2>
            <p className="mx-auto mb-10 max-w-2xl text-lg text-primary/70">
              Heeft u vragen over onze organisatie of wilt u samenwerken? Neem
              gerust contact met ons op.
            </p>
            <Link
              href="/contact"
              className="inline-block rounded-lg bg-primary px-10 py-5 text-xl font-bold text-white shadow-xl shadow-primary/20 transition-all hover:scale-105"
            >
              Neem contact op
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
