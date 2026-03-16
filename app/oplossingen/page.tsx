import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Kenniscentrum & Nieuws — NCDE",
  description:
    "Blijf op de hoogte van de laatste ontwikkelingen, wetenschappelijke inzichten en beleidswijzigingen binnen het Nederlands Collectief Duurzame Energie.",
};

export default function OplossingenPage() {
  const articles = [
    {
      category: "Nieuws",
      date: "14 Maart 2024",
      title: "Nieuwe subsidies voor warmtepompen in 2024",
      description:
        "Ontdek hoe de nieuwe subsidieregelingen uw projecten kunnen versnellen en welke impact dit heeft op de woningmarkt in Nederland.",
      image:
        "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=600&h=400&fit=crop",
      imageAlt: "Windturbines in een groen Nederlands landschap",
    },
    {
      category: "Kennis",
      date: "10 Maart 2024",
      title: "De rol van waterstof in de gebouwde omgeving",
      description:
        "Een diepe duik in de technische en economische haalbaarheid van waterstof als alternatieve warmtebron voor woonwijken.",
      image:
        "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=600&h=400&fit=crop",
      imageAlt: "Technicus werkt aan innovatief waterstofpaneel",
    },
    {
      category: "Update",
      date: "05 Maart 2024",
      title: "Verslag jaarlijkse NCDE conferentie",
      description:
        "Terugblik op een inspirerende dag vol kennisdeling, netwerken en de lancering van onze nieuwe strategie voor 2030.",
      image:
        "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=600&h=400&fit=crop",
      imageAlt: "Mensen netwerken tijdens een duurzame energie conferentie",
    },
    {
      category: "Kennis",
      date: "28 Februari 2024",
      title: "Innovaties in zonne-energie opslag",
      description:
        "Nieuwe batterijtechnologie\u00ebn maken lokale opslag rendabeler dan ooit voor mkb-bedrijven in de energiesector.",
      image:
        "https://images.unsplash.com/photo-1509391366360-2e959784a276?w=600&h=400&fit=crop",
      imageAlt: "Zonnepanelen op een dak van een moderne woning",
    },
    {
      category: "Nieuws",
      date: "20 Februari 2024",
      title: "Samenwerking met lokale overheden",
      description:
        "Hoe gezamenlijke inkoop de transitie op lokaal niveau versnelt en drempels wegneemt voor kleinschalige initiatieven.",
      image:
        "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=600&h=400&fit=crop",
      imageAlt: "Samenwerkingsoverleg tussen overheid en bedrijfsleven",
    },
    {
      category: "Update",
      date: "12 Februari 2024",
      title: "Toekomst van collectieve warmtenetten",
      description:
        "De juridische kaders voor warmtebedrijven veranderen. Wat u moet weten over de Wet collectieve warmtevoorziening.",
      image:
        "https://images.unsplash.com/photo-1466611653911-95081537e5b7?w=600&h=400&fit=crop",
      imageAlt: "Luchtfoto van een groot warmtenetwerk project",
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="border-b border-primary/5 bg-sage/30 py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-12">
          <div className="max-w-3xl">
            <nav className="mb-6 flex items-center gap-2 text-xs font-medium uppercase tracking-widest text-primary/60">
              <Link className="hover:text-primary" href="/">
                Home
              </Link>
              <span className="material-symbols-outlined text-[10px]">
                chevron_right
              </span>
              <span className="text-primary">Kenniscentrum &amp; Nieuws</span>
            </nav>
            <h1 className="mb-6 text-4xl font-black leading-tight text-primary md:text-6xl">
              Kenniscentrum &amp; Nieuws
            </h1>
            <p className="text-lg leading-relaxed text-neutral-700 md:text-xl">
              Blijf op de hoogte van de laatste ontwikkelingen, wetenschappelijke
              inzichten en beleidswijzigingen binnen het Nederlands Collectief
              Duurzame Energie.
            </p>
          </div>
        </div>
      </section>

      {/* Filters */}
      <section className="mx-auto max-w-7xl px-6 py-8 lg:px-12">
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-center">
          <div className="flex gap-2 overflow-x-auto pb-2 md:pb-0">
            <button className="whitespace-nowrap rounded-full bg-primary px-5 py-2 text-sm font-bold text-white">
              Alles
            </button>
            <button className="whitespace-nowrap rounded-full border border-primary/10 bg-white px-5 py-2 text-sm font-semibold text-primary transition-colors hover:bg-sage/50">
              Nieuws
            </button>
            <button className="whitespace-nowrap rounded-full border border-primary/10 bg-white px-5 py-2 text-sm font-semibold text-primary transition-colors hover:bg-sage/50">
              Kennis
            </button>
            <button className="whitespace-nowrap rounded-full border border-primary/10 bg-white px-5 py-2 text-sm font-semibold text-primary transition-colors hover:bg-sage/50">
              Update
            </button>
            <button className="whitespace-nowrap rounded-full border border-primary/10 bg-white px-5 py-2 text-sm font-semibold text-primary transition-colors hover:bg-sage/50">
              Rapportages
            </button>
          </div>
          <div className="relative w-full md:w-72">
            <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-xl text-primary/40">
              search
            </span>
            <input
              className="w-full rounded-lg border border-primary/10 bg-white py-2 pl-10 pr-4 text-sm focus:border-primary focus:ring-primary"
              placeholder="Zoek artikelen..."
              type="text"
            />
          </div>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="mx-auto max-w-7xl px-6 pb-20 lg:px-12">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {articles.map((article) => (
            <article
              key={article.title}
              className="group flex flex-col overflow-hidden rounded-xl border border-primary/5 bg-white shadow-sm transition-shadow hover:shadow-md"
            >
              <div className="relative h-56 w-full overflow-hidden">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  src={article.image}
                  alt={article.imageAlt}
                />
                <span className="absolute left-4 top-4 rounded bg-primary px-2 py-1 text-[10px] font-bold uppercase tracking-wider text-white">
                  {article.category}
                </span>
              </div>
              <div className="flex flex-1 flex-col p-6">
                <time className="mb-3 text-xs font-medium text-neutral-500">
                  {article.date}
                </time>
                <h3 className="mb-3 text-xl font-bold leading-snug text-primary transition-colors group-hover:text-primary/80">
                  {article.title}
                </h3>
                <p className="mb-6 flex-1 text-sm leading-relaxed text-neutral-600">
                  {article.description}
                </p>
                <Link
                  className="inline-flex items-center text-sm font-bold text-primary"
                  href="/oplossingen"
                >
                  Lees meer
                  <span className="material-symbols-outlined ml-1 text-base transition-transform group-hover:translate-x-1">
                    arrow_forward
                  </span>
                </Link>
              </div>
            </article>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-20">
          <div className="rounded-3xl border border-primary/10 bg-accent-soft p-10 text-center lg:p-16">
            <h2 className="mb-6 text-3xl font-black text-primary lg:text-4xl">
              Wilt u op de hoogte blijven?
            </h2>
            <p className="mx-auto mb-10 max-w-2xl text-lg text-primary/70">
              Neem contact met ons op voor meer informatie over de laatste
              ontwikkelingen in duurzame energie.
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
