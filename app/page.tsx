import Link from "next/link";

export default function HomePage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative overflow-hidden py-24 lg:py-36">
        {/* Background image */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url('/images/hero-home.jpg')" }}
        ></div>
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-primary/50"></div>
        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-white/15 px-3 py-1 text-xs font-bold uppercase tracking-wider text-white">
              <span className="material-symbols-outlined text-sm">
                verified_user
              </span>{" "}
              Offici&euml;le Informatie
            </div>
            <h1 className="mb-6 text-4xl font-black leading-tight text-white lg:text-6xl">
              Uw gids voor duurzame energie in Nederland
            </h1>
            <p className="mb-10 text-lg leading-relaxed text-white/85 lg:text-xl">
              Informatie over de salderingsregeling en wat de veranderingen
              betekenen voor u als huiseigenaar. Onafhankelijk, betrouwbaar en
              gebaseerd op de laatste overheidsrichtlijnen.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="/salderingsregeling"
                className="rounded-lg bg-white px-8 py-4 text-lg font-bold text-primary shadow-lg transition-all hover:-translate-y-0.5"
              >
                Meer informatie
              </Link>
              <Link
                href="/oplossingen"
                className="rounded-lg border border-white/30 bg-white/10 px-8 py-4 text-lg font-bold text-white backdrop-blur-sm transition-all hover:bg-white/20"
              >
                Bekijk regelingen
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Bar */}
      <section className="border-b border-primary/5 bg-white py-12 overflow-hidden">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="mb-8 text-center text-xs font-bold uppercase tracking-[0.2em] text-slate-400">
            Samenwerkende Netbeheerders &amp; Instanties
          </p>
        </div>
        <div className="relative">
          <div className="absolute left-0 top-0 z-10 h-full w-24 bg-gradient-to-r from-white to-transparent"></div>
          <div className="absolute right-0 top-0 z-10 h-full w-24 bg-gradient-to-l from-white to-transparent"></div>
          <div className="animate-scroll-left flex w-max items-center gap-20">
            {[...Array(2)].map((_, setIndex) => (
              <div key={setIndex} className="flex items-center gap-20">
                {[
                  { name: "Stedin", logo: "/images/partners/stedin.png" },
                  { name: "Liander", logo: "/images/partners/liander.png" },
                  { name: "Alliander", logo: "/images/partners/alliander.png" },
                  { name: "TenneT", logo: "/images/partners/tennet.png" },
                  { name: "Enexis", logo: "/images/partners/enexis.png" },
                  { name: "Rijksoverheid", logo: "/images/partners/rijksoverheid.png" },
                ].map((partner) => (
                  <div
                    key={partner.name}
                    className="flex items-center gap-3 opacity-50 transition-opacity hover:opacity-100"
                  >
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={partner.logo}
                      alt={`${partner.name} logo`}
                      className="h-10 w-10 object-contain"
                    />
                    <span className="text-base font-bold tracking-tight text-slate-700 whitespace-nowrap">
                      {partner.name}
                    </span>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Wat verandert er? */}
      <section className="bg-white py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-3xl font-black text-primary lg:text-4xl">
              Wat verandert er?
            </h2>
            <p className="mx-auto max-w-2xl text-lg text-slate-600">
              De overheid past de regels voor zelfopgewekte energie aan.
              Hieronder vindt u de feitelijke kernpunten van de nieuwe
              salderingsregeling.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
            <div className="rounded-xl border border-primary/5 bg-background-light p-8 transition-all hover:shadow-xl hover:shadow-primary/5">
              <span className="material-symbols-outlined mb-4 text-4xl text-primary">
                wb_sunny
              </span>
              <h3 className="mb-3 text-xl font-bold">Zonne-energie</h3>
              <p className="text-sm leading-relaxed text-slate-600">
                De vergoeding voor teruggeleverde stroom wordt stapsgewijs
                afgebouwd conform het wetsvoorstel.
              </p>
            </div>
            <div className="rounded-xl border border-primary/5 bg-background-light p-8 transition-all hover:shadow-xl hover:shadow-primary/5">
              <span className="material-symbols-outlined mb-4 text-4xl text-primary">
                battery_charging_full
              </span>
              <h3 className="mb-3 text-xl font-bold">Opslag</h3>
              <p className="text-sm leading-relaxed text-slate-600">
                Het belang van eigen verbruik en lokale opslag via
                thuisbatterijen neemt toe door de nieuwe regels.
              </p>
            </div>
            <div className="rounded-xl border border-primary/5 bg-background-light p-8 transition-all hover:shadow-xl hover:shadow-primary/5">
              <span className="material-symbols-outlined mb-4 text-4xl text-primary">
                euro_symbol
              </span>
              <h3 className="mb-3 text-xl font-bold">Financieel</h3>
              <p className="text-sm leading-relaxed text-slate-600">
                Berekeningen tonen aan dat investeringen in verduurzaming
                rendabel blijven, maar de terugverdientijd wijzigt.
              </p>
            </div>
            <div className="rounded-xl border border-primary/5 bg-background-light p-8 transition-all hover:shadow-xl hover:shadow-primary/5">
              <span className="material-symbols-outlined mb-4 text-4xl text-primary">
                home
              </span>
              <h3 className="mb-3 text-xl font-bold">Woningwaarde</h3>
              <p className="text-sm leading-relaxed text-slate-600">
                Verduurzaming draagt direct bij aan een gunstiger energielabel en
                de marktwaarde van uw vastgoed.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Noodpakket */}
      <section className="bg-primary py-24 text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center gap-16 lg:flex-row">
            <div className="lg:w-1/2">
              <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-xs font-bold uppercase tracking-wider text-white">
                <span className="material-symbols-outlined text-sm">
                  warning
                </span>{" "}
                Overheidsrichtlijnen
              </div>
              <h2 className="mb-6 text-3xl font-black leading-tight lg:text-5xl">
                Voorbereiding op energieonzekerheid
              </h2>
              <p className="mb-8 text-lg leading-relaxed text-white/80">
                In het kader van nationale veiligheid en energiezekerheid
                adviseert de NCDE burgers om voorbereid te zijn op incidentele
                stroomuitval. Wij bieden richtlijnen voor noodpakketten en
                back-up systemen conform landelijke standaarden.
              </p>
              <ul className="mb-10 space-y-4">
                <li className="flex items-center gap-3">
                  <span className="material-symbols-outlined text-accent-soft">
                    check_circle
                  </span>
                  <span>Essenti&euml;le noodvoorzieningen voor 72 uur</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="material-symbols-outlined text-accent-soft">
                    check_circle
                  </span>
                  <span>Protocollen bij regionale stroomuitval</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="material-symbols-outlined text-accent-soft">
                    check_circle
                  </span>
                  <span>
                    Off-grid mogelijkheden voor kritieke apparatuur
                  </span>
                </li>
              </ul>
              <Link
                href="/noodpakket"
                className="rounded-lg bg-white px-8 py-4 text-lg font-bold text-primary transition-all hover:bg-slate-100"
              >
                Bekijk noodplan
              </Link>
            </div>
            <div className="relative flex aspect-square w-full items-center justify-center overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-12 lg:w-1/2">
              <div className="grid-pattern absolute inset-0 opacity-10"></div>
              <span className="material-symbols-outlined text-[160px] text-white/20">
                safety_check
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Oplossingen */}
      <section className="bg-background-light py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-16 flex items-end justify-between">
            <div className="max-w-2xl">
              <h2 className="mb-4 text-3xl font-black text-primary lg:text-4xl">
                Duurzame Oplossingen
              </h2>
              <p className="text-lg text-slate-600">
                Gecertificeerde technologie&euml;n voor een toekomstbestendige
                woning.
              </p>
            </div>
            <Link
              href="/oplossingen"
              className="group hidden items-center gap-2 font-bold text-primary md:flex"
            >
              Alle oplossingen{" "}
              <span className="material-symbols-outlined transition-transform group-hover:translate-x-1">
                arrow_forward
              </span>
            </Link>
          </div>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            <div className="flex flex-col overflow-hidden rounded-xl border border-primary/5 bg-white shadow-sm">
              <div
                className="h-48 bg-slate-200"
                data-alt="High tech solar panels on modern roof"
              ></div>
              <div className="flex flex-1 flex-col p-8">
                <h3 className="mb-3 text-xl font-bold">Zonnepanelen</h3>
                <p className="mb-6 text-sm leading-relaxed text-slate-600">
                  Hoogwaardige PV-systemen met maximaal rendement, zelfs bij
                  diffuus licht. Volledig ge&iuml;nstalleerd volgens Scope 12
                  normen.
                </p>
                <Link
                  href="/oplossingen"
                  className="mt-auto flex items-center gap-2 text-sm font-bold text-primary hover:underline"
                >
                  Meer informatie{" "}
                  <span className="material-symbols-outlined text-sm">
                    open_in_new
                  </span>
                </Link>
              </div>
            </div>
            <div className="flex flex-col overflow-hidden rounded-xl border border-primary/5 bg-white shadow-sm">
              <div
                className="h-48 bg-slate-200"
                data-alt="Residential home battery energy storage system"
              ></div>
              <div className="flex flex-1 flex-col p-8">
                <h3 className="mb-3 text-xl font-bold">Thuisbatterijen</h3>
                <p className="mb-6 text-sm leading-relaxed text-slate-600">
                  Optimaliseer uw eigen verbruik en word minder afhankelijk van
                  het energienet. Slimme sturing op basis van dynamische
                  tarieven.
                </p>
                <Link
                  href="/oplossingen/thuisbatterijen"
                  className="mt-auto flex items-center gap-2 text-sm font-bold text-primary hover:underline"
                >
                  Meer informatie{" "}
                  <span className="material-symbols-outlined text-sm">
                    open_in_new
                  </span>
                </Link>
              </div>
            </div>
            <div className="flex flex-col overflow-hidden rounded-xl border border-primary/5 bg-white shadow-sm">
              <div
                className="h-48 bg-slate-200"
                data-alt="Modern heat pump unit outside residential building"
              ></div>
              <div className="flex flex-1 flex-col p-8">
                <h3 className="mb-3 text-xl font-bold">Warmtepompen</h3>
                <p className="mb-6 text-sm leading-relaxed text-slate-600">
                  De transitie naar gasvrij verwarmen. Hybride of volledig
                  elektrische systemen voor elk type woning en isolatiegraad.
                </p>
                <Link
                  href="/oplossingen"
                  className="mt-auto flex items-center gap-2 text-sm font-bold text-primary hover:underline"
                >
                  Meer informatie{" "}
                  <span className="material-symbols-outlined text-sm">
                    open_in_new
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Onze Partners */}
      <section className="bg-white py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-3xl font-black text-primary">
              Onze Partners
            </h2>
            <p className="mx-auto max-w-2xl text-slate-600">
              Wij werken uitsluitend samen met gecertificeerde
              installatiepartners die voldoen aan de strengste kwaliteitseisen.
            </p>
            <p className="mt-4 font-semibold text-primary">
              Onze hoofdpartner:{" "}
              <Link
                href="/partners"
                className="underline decoration-primary/30 transition-all hover:decoration-primary"
              >
                Alterion
              </Link>
            </p>
          </div>
          <div className="grid grid-cols-2 gap-8 md:grid-cols-4 lg:grid-cols-6">
            <div
              className="flex aspect-[3/2] items-center justify-center rounded bg-slate-100 p-6"
              data-alt="Partner logo 1"
            ></div>
            <div
              className="flex aspect-[3/2] items-center justify-center rounded bg-slate-100 p-6"
              data-alt="Partner logo 2"
            ></div>
            <div
              className="flex aspect-[3/2] items-center justify-center rounded bg-slate-100 p-6"
              data-alt="Partner logo 3"
            ></div>
            <div
              className="flex aspect-[3/2] items-center justify-center rounded bg-slate-100 p-6"
              data-alt="Partner logo 4"
            ></div>
            <div
              className="flex aspect-[3/2] items-center justify-center rounded bg-slate-100 p-6"
              data-alt="Partner logo 5"
            ></div>
            <div
              className="flex aspect-[3/2] items-center justify-center rounded bg-slate-100 p-6"
              data-alt="Partner logo 6"
            ></div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-3xl border border-primary/10 bg-accent-soft p-10 text-center lg:p-16">
            <h2 className="mb-6 text-3xl font-black text-primary lg:text-4xl">
              Wilt u weten wat dit voor u betekent?
            </h2>
            <p className="mx-auto mb-10 max-w-2xl text-lg text-primary/70">
              Plan een vrijblijvend adviesgesprek in met een van onze experts om
              uw specifieke situatie door te rekenen.
            </p>
            <Link
              href="/contact"
              className="mb-6 inline-block rounded-lg bg-primary px-10 py-5 text-xl font-bold text-white shadow-xl shadow-primary/20 transition-all hover:scale-105"
            >
              Plan een gesprek
            </Link>
            <p className="mt-6 text-xs italic text-primary/50">
              * Alterion, gecertificeerd installatiepartner, neemt contact met u
              op voor de technische uitwerking.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
