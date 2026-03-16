import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Regelingen — NCDE",
  description:
    "Overzicht van beschikbare subsidies en regelingen voor duurzame energie in Nederland. ISDE, SDE++, salderingsregeling, SEEH, EIA en SCE.",
};

export default function RegelingenPage() {
  const subsidies = [
    {
      icon: "heat_pump",
      title: "ISDE",
      subtitle: "Investeringssubsidie Duurzame Energie",
      description:
        "Subsidie voor de aanschaf van warmtepompen, zonneboilers en isolatiemaatregelen in bestaande woningen. Particulieren en zakelijke gebruikers kunnen aanspraak maken op deze regeling.",
      status: "Actief",
      statusColor: "bg-accent text-white",
      href: "/regelingen",
    },
    {
      icon: "bolt",
      title: "SDE++",
      subtitle: "Stimulering Duurzame Energieproductie",
      description:
        "Exploitatiesubsidie voor grootschalige duurzame energieprojecten. Bestemd voor bedrijven en instellingen die hernieuwbare energie opwekken of CO\u2082 reduceren.",
      status: "Actief",
      statusColor: "bg-accent text-white",
      href: "/regelingen",
    },
    {
      icon: "solar_power",
      title: "Salderingsregeling",
      subtitle: "Teruglevering zonnepanelen",
      description:
        "De regeling waarmee huishoudens zelfopgewekte stroom kunnen verrekenen met hun energieleverancier. De voorwaarden worden de komende jaren stapsgewijs aangepast.",
      status: "Verlengd",
      statusColor: "bg-primary text-white",
      href: "/salderingsregeling",
    },
    {
      icon: "roofing",
      title: "SEEH",
      subtitle: "Subsidie Energiebesparing Eigen Huis",
      description:
        "Subsidie voor woningisolatie, zoals dak-, vloer- en gevelisolatie. Beschikbaar voor eigenaren van bestaande koopwoningen die minimaal twee isolatiemaatregelen combineren.",
      status: "Nieuw 2026",
      statusColor: "bg-primary text-white",
      href: "/regelingen/seeh",
    },
    {
      icon: "account_balance",
      title: "EIA",
      subtitle: "Energie-investeringsaftrek",
      description:
        "Fiscaal voordeel voor ondernemers die investeren in energiezuinige technieken en duurzame energie. Het investeringsbedrag is deels aftrekbaar van de fiscale winst.",
      status: "Actief",
      statusColor: "bg-accent text-white",
      href: "/regelingen",
    },
    {
      icon: "groups",
      title: "SCE",
      subtitle: "Subsidieregeling Co\u00f6peratieve Energieopwekking",
      description:
        "Subsidie voor energieco\u00f6peraties en Verenigingen van Eigenaren die gezamenlijk duurzame energie opwekken. Stimuleert lokale energieprojecten en burgerparticipatie.",
      status: "Actief",
      statusColor: "bg-accent text-white",
      href: "/regelingen",
    },
  ];

  const steps = [
    {
      icon: "search",
      number: "01",
      title: "Ori\u00ebnteer",
      description:
        "Breng uw situatie in kaart. Welke verduurzamingsmaatregelen zijn relevant voor uw woning of bedrijfspand? Welke subsidies sluiten aan bij uw plannen?",
    },
    {
      icon: "description",
      number: "02",
      title: "Aanvragen",
      description:
        "Dien uw subsidieaanvraag in via de offici\u00eble kanalen, zoals RVO.nl. Verzamel de benodigde documenten en offertes vooraf. Let op deadlines en budgetplafonds.",
    },
    {
      icon: "construction",
      number: "03",
      title: "Uitvoering",
      description:
        "Na goedkeuring laat u de werkzaamheden uitvoeren door een gecertificeerd installateur. Bewaar alle facturen en bewijsstukken voor de definitieve vaststelling.",
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="relative flex min-h-[400px] items-center overflow-hidden bg-primary py-20">
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
          {/* Breadcrumb */}
          <nav className="mb-8 flex items-center gap-2 text-sm text-white/60">
            <Link href="/" className="transition-colors hover:text-white">
              Home
            </Link>
            <span className="material-symbols-outlined text-xs">
              chevron_right
            </span>
            <span className="text-white">Regelingen</span>
          </nav>
          <div className="max-w-3xl">
            <h1 className="mb-6 text-4xl font-extrabold leading-tight text-white md:text-6xl">
              Regelingen
            </h1>
            <p className="max-w-2xl text-xl leading-relaxed text-white/85">
              Een overzicht van de beschikbare subsidies en regelingen voor
              duurzame energie in Nederland. Informeer u over de mogelijkheden
              voor uw woning of onderneming.
            </p>
          </div>
        </div>
      </section>

      {/* Subsidies Grid */}
      <section className="bg-background-light py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-3xl font-black text-primary lg:text-4xl">
              Subsidies &amp; Regelingen
            </h2>
            <p className="mx-auto max-w-2xl text-lg text-neutral-600">
              De Nederlandse overheid biedt diverse financi&euml;le regelingen om
              de energietransitie te versnellen. Hieronder vindt u de
              belangrijkste subsidies op een rij.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {subsidies.map((subsidy) => (
              <div
                key={subsidy.title}
                className="flex flex-col rounded-xl border border-primary/5 bg-white p-8 shadow-sm transition-all hover:shadow-xl hover:shadow-primary/5"
              >
                <div className="mb-5 flex items-start justify-between">
                  <span className="material-symbols-outlined text-4xl text-primary">
                    {subsidy.icon}
                  </span>
                  <span
                    className={`rounded-full px-3 py-1 text-xs font-bold ${subsidy.statusColor}`}
                  >
                    {subsidy.status}
                  </span>
                </div>
                <h3 className="mb-1 text-xl font-bold text-primary">
                  {subsidy.title}
                </h3>
                <p className="mb-3 text-sm font-medium text-neutral-500">
                  {subsidy.subtitle}
                </p>
                <p className="mb-6 flex-1 text-sm leading-relaxed text-neutral-600">
                  {subsidy.description}
                </p>
                <Link
                  href={subsidy.href}
                  className="mt-auto flex items-center gap-2 text-sm font-bold text-primary hover:underline"
                >
                  Meer informatie
                  <span className="material-symbols-outlined text-sm">
                    arrow_forward
                  </span>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Hoe werkt het? */}
      <section className="bg-white py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-3xl font-black text-primary lg:text-4xl">
              Hoe werkt het?
            </h2>
            <p className="mx-auto max-w-2xl text-lg text-neutral-600">
              Het aanvragen van een subsidie verloopt in drie stappen. Bereid u
              goed voor om uw aanvraag soepel te laten verlopen.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {steps.map((step) => (
              <div
                key={step.number}
                className="relative rounded-xl border border-primary/5 bg-background-light p-8"
              >
                <span className="mb-2 block text-5xl font-black text-primary/10">
                  {step.number}
                </span>
                <span className="material-symbols-outlined mb-4 text-3xl text-primary">
                  {step.icon}
                </span>
                <h3 className="mb-3 text-xl font-bold text-primary">
                  {step.title}
                </h3>
                <p className="text-sm leading-relaxed text-neutral-600">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-3xl border border-primary/10 bg-accent-soft p-10 text-center lg:p-16">
            <span className="material-symbols-outlined mb-6 text-5xl text-primary">
              support_agent
            </span>
            <h2 className="mb-6 text-3xl font-black text-primary lg:text-4xl">
              Hulp nodig bij uw aanvraag?
            </h2>
            <p className="mx-auto mb-10 max-w-2xl text-lg text-primary/70">
              Heeft u vragen over welke subsidie het beste bij uw situatie past?
              Neem contact met ons op voor onafhankelijk advies over de
              beschikbare regelingen.
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
    </>
  );
}
