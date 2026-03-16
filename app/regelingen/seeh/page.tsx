import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "SEEH — Subsidie Energiebesparing Eigen Huis — NCDE",
  description:
    "Alles over de SEEH-subsidie: voorwaarden, subsidiebedragen en aanvraagprocedure voor woningisolatie. Bespaar op uw energierekening met overheidssubsidie.",
};

export default function SEEHPage() {
  const keyInfo = [
    {
      icon: "payments",
      label: "Maximaal subsidiebedrag",
      value: "Tot \u20AC5.400",
    },
    {
      icon: "event",
      label: "Geldig tot",
      value: "31 december 2026",
    },
    {
      icon: "person",
      label: "Aanvrager",
      value: "Particuliere woningeigenaren",
    },
    {
      icon: "checklist",
      label: "Combinatie vereist",
      value: "Minimaal 2 maatregelen",
    },
  ];

  const maatregelen = [
    {
      icon: "roofing",
      title: "Dakisolatie",
      description:
        "Isolatie van het dak of de zoldervloer vermindert warmteverlies via het dak aanzienlijk. Dit is vaak de maatregel met het grootste effect op uw energieverbruik.",
      bedrag: "Ca. \u20AC1.300 \u2013 \u20AC2.100",
    },
    {
      icon: "foundation",
      title: "Vloerisolatie",
      description:
        "Door de begane grondvloer te isoleren voorkomt u warmteverlies naar de kruipruimte. Dit verhoogt het comfort en verlaagt de stookkosten.",
      bedrag: "Ca. \u20AC700 \u2013 \u20AC1.200",
    },
    {
      icon: "wall_art",
      title: "Gevelisolatie",
      description:
        "Buitengevel- of binnengevelisolatie vermindert warmteverlies via de muren. Geschikt voor woningen zonder spouwmuur of met een te smalle spouw.",
      bedrag: "Ca. \u20AC1.500 \u2013 \u20AC2.700",
    },
    {
      icon: "layers",
      title: "Spouwmuurisolatie",
      description:
        "Bij woningen met een spouwmuur kan de spouw worden gevuld met isolatiemateriaal. Een relatief snelle en kosteneffici\u00ebnte ingreep.",
      bedrag: "Ca. \u20AC600 \u2013 \u20AC1.000",
    },
  ];

  const voorwaarden = [
    "Uw woning is gebouwd v\u00f3\u00f3r 2024",
    "U bent eigenaar-bewoner van de woning",
    "U combineert minimaal twee isolatiemaatregelen tegelijk",
    "De isolatie wordt uitgevoerd door een gecertificeerd bedrijf",
    "De woning staat in Nederland",
  ];

  const stappen = [
    {
      icon: "checklist",
      number: "01",
      title: "Kies maatregelen",
      description:
        "Selecteer minimaal twee isolatiemaatregelen die u wilt laten uitvoeren. Bekijk welke combinaties voor uw woning het meest effectief zijn.",
    },
    {
      icon: "request_quote",
      number: "02",
      title: "Vraag offertes aan",
      description:
        "Vraag offertes aan bij gecertificeerde installateurs. Let erop dat het bedrijf voldoet aan de eisen die de overheid stelt aan uitvoerende partijen.",
    },
    {
      icon: "upload_file",
      number: "03",
      title: "Dien de aanvraag in",
      description:
        "Dien uw subsidieaanvraag in via RVO.nl v\u00f3\u00f3r de uitvoering van de werkzaamheden. Zorg dat u alle benodigde documenten en offertes bij de hand heeft.",
    },
    {
      icon: "construction",
      number: "04",
      title: "Uitvoering & ontvangst",
      description:
        "Laat de werkzaamheden uitvoeren door het gecertificeerde bedrijf. Na afronding en controle ontvangt u de subsidie op uw rekening.",
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
            <Link
              href="/regelingen"
              className="transition-colors hover:text-white"
            >
              Regelingen
            </Link>
            <span className="material-symbols-outlined text-xs">
              chevron_right
            </span>
            <span className="text-white">SEEH</span>
          </nav>
          <div className="max-w-3xl">
            <span className="mb-4 inline-block rounded-full bg-white/20 px-4 py-1.5 text-xs font-bold text-white">
              Nieuw 2026
            </span>
            <h1 className="mb-4 text-4xl font-extrabold leading-tight text-white md:text-6xl">
              SEEH
            </h1>
            <p className="max-w-2xl text-xl leading-relaxed text-white/85">
              Subsidie Energiebesparing Eigen Huis — Bespaar op uw
              energierekening door uw woning te isoleren met overheidssubsidie.
            </p>
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="bg-background-light py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
            {/* Key Info Cards */}
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              {keyInfo.map((item) => (
                <div
                  key={item.label}
                  className="rounded-xl border border-primary/5 bg-white p-6 shadow-sm"
                >
                  <span className="material-symbols-outlined mb-3 text-3xl text-primary">
                    {item.icon}
                  </span>
                  <p className="mb-1 text-sm text-neutral-500">{item.label}</p>
                  <p className="text-lg font-bold text-primary">{item.value}</p>
                </div>
              ))}
            </div>

            {/* Intro Text */}
            <div className="flex flex-col justify-center">
              <h2 className="mb-4 text-3xl font-black text-primary lg:text-4xl">
                Wat is de SEEH?
              </h2>
              <p className="mb-4 leading-relaxed text-neutral-600">
                De Subsidie Energiebesparing Eigen Huis (SEEH) is een
                overheidsregeling die particuliere woningeigenaren financieel
                ondersteunt bij het isoleren van hun woning. De regeling richt
                zich op bestaande koopwoningen en heeft als doel het
                energieverbruik in de gebouwde omgeving te verlagen.
              </p>
              <p className="leading-relaxed text-neutral-600">
                Om in aanmerking te komen, dient u minimaal twee
                isolatiemaatregelen tegelijk uit te laten voeren. Denk aan een
                combinatie van dak-, vloer-, gevel- of spouwmuurisolatie. De
                subsidie wordt na afronding van de werkzaamheden uitbetaald.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Maatregelen Section */}
      <section className="bg-white py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-3xl font-black text-primary lg:text-4xl">
              Welke maatregelen?
            </h2>
            <p className="mx-auto max-w-2xl text-lg text-neutral-600">
              De SEEH-subsidie is beschikbaar voor de volgende
              isolatiemaatregelen. Combineer er minimaal twee om in aanmerking te
              komen.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            {maatregelen.map((maatregel) => (
              <div
                key={maatregel.title}
                className="rounded-xl border border-primary/5 bg-background-light p-8 shadow-sm transition-all hover:shadow-xl hover:shadow-primary/5"
              >
                <div className="mb-4 flex items-center gap-4">
                  <span className="material-symbols-outlined text-4xl text-primary">
                    {maatregel.icon}
                  </span>
                  <h3 className="text-xl font-bold text-primary">
                    {maatregel.title}
                  </h3>
                </div>
                <p className="mb-4 text-sm leading-relaxed text-neutral-600">
                  {maatregel.description}
                </p>
                <div className="flex items-center gap-2 rounded-lg bg-primary/5 px-4 py-2">
                  <span className="material-symbols-outlined text-sm text-primary">
                    payments
                  </span>
                  <span className="text-sm font-semibold text-primary">
                    Indicatief subsidiebedrag: {maatregel.bedrag}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Voorwaarden Section */}
      <section className="bg-background-light py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl">
            <div className="mb-12 text-center">
              <h2 className="mb-4 text-3xl font-black text-primary lg:text-4xl">
                Voorwaarden
              </h2>
              <p className="text-lg text-neutral-600">
                Om in aanmerking te komen voor de SEEH-subsidie dient u aan de
                volgende voorwaarden te voldoen.
              </p>
            </div>
            <div className="space-y-4">
              {voorwaarden.map((voorwaarde, index) => (
                <div
                  key={index}
                  className="flex items-start gap-4 rounded-xl border border-primary/5 bg-white p-5 shadow-sm"
                >
                  <span className="material-symbols-outlined mt-0.5 text-primary">
                    check_circle
                  </span>
                  <p className="font-medium text-neutral-700">{voorwaarde}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Hoe aanvragen? Section */}
      <section className="bg-white py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-3xl font-black text-primary lg:text-4xl">
              Hoe aanvragen?
            </h2>
            <p className="mx-auto max-w-2xl text-lg text-neutral-600">
              Het aanvragen van de SEEH-subsidie verloopt in vier stappen.
              Dien uw aanvraag altijd in v&oacute;&oacute;r aanvang van de
              werkzaamheden.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
            {stappen.map((stap) => (
              <div
                key={stap.number}
                className="relative rounded-xl border border-primary/5 bg-background-light p-8"
              >
                <span className="mb-2 block text-5xl font-black text-primary/10">
                  {stap.number}
                </span>
                <span className="material-symbols-outlined mb-4 text-3xl text-primary">
                  {stap.icon}
                </span>
                <h3 className="mb-3 text-xl font-bold text-primary">
                  {stap.title}
                </h3>
                <p className="text-sm leading-relaxed text-neutral-600">
                  {stap.description}
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
              Hulp nodig?
            </h2>
            <p className="mx-auto mb-10 max-w-2xl text-lg text-primary/70">
              Heeft u vragen over de SEEH-subsidie of wilt u weten of uw woning
              in aanmerking komt? Neem contact met ons op voor onafhankelijk
              advies.
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
