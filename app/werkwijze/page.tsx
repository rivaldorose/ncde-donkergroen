import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Onze Werkwijze — NCDE",
  description:
    "NCDE waarborgt kwaliteit en betrouwbaarheid in de energietransitie door middel van onafhankelijk toezicht en specialistische expertise.",
};

export default function WerkwijzePage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-primary py-20 lg:py-32">
        <div className="absolute inset-0 bg-gradient-to-br from-primary via-emerald-900 to-black opacity-20"></div>
        <div className="relative mx-auto max-w-5xl px-6 text-center">
          <h1 className="mb-6 text-4xl font-black leading-tight tracking-tight text-white lg:text-6xl">
            Onze Werkwijze
          </h1>
          <p className="mx-auto max-w-2xl text-lg font-normal leading-relaxed text-sage lg:text-xl">
            NCDE waarborgt kwaliteit en betrouwbaarheid in de energietransitie
            door middel van onafhankelijk toezicht en specialistische expertise.
          </p>
        </div>
      </section>

      {/* Stappenplan */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-5xl px-6">
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-3xl font-bold text-primary">
              Stappenplan Energietransitie
            </h2>
            <div className="mx-auto h-1 w-20 rounded-full bg-primary"></div>
          </div>
          <div className="relative grid grid-cols-1 gap-8 md:grid-cols-4">
            {[
              {
                icon: "info",
                title: "1. Informatie & Advies",
                text: "Eerste oriëntatie en onafhankelijk advies over duurzame oplossingen specifiek voor uw situatie.",
              },
              {
                icon: "handshake",
                title: "2. Selectie van Partners",
                text: "Zorgvuldige screening van installateurs en leveranciers op basis van onze strenge criteria.",
              },
              {
                icon: "verified_user",
                title: "3. Uitvoering & Controle",
                text: "Begeleiding tijdens de installatie met focus op veiligheid, normen en hoogwaardige afwerking.",
              },
              {
                icon: "monitoring",
                title: "4. Nazorg & Monitoring",
                text: "Continue bewaking van de prestaties en professionele ondersteuning na de oplevering.",
              },
            ].map((step) => (
              <div
                key={step.title}
                className="group flex flex-col items-center text-center"
              >
                <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-sage text-primary transition-transform group-hover:scale-110">
                  <span className="material-symbols-outlined text-3xl">
                    {step.icon}
                  </span>
                </div>
                <h3 className="mb-2 text-lg font-bold">{step.title}</h3>
                <p className="text-sm leading-relaxed text-neutral-600">
                  {step.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Strenge Selectiecriteria */}
      <section className="bg-background-light py-20">
        <div className="mx-auto max-w-5xl px-6">
          <div className="mb-12">
            <h2 className="mb-4 text-3xl font-bold text-primary">
              Strenge Selectiecriteria
            </h2>
            <p className="max-w-2xl text-neutral-600">
              Niet elke partij kan zich aansluiten bij het collectief. Wij
              hanteren een intensief vettingsproces om de hoogste marktstandaard
              te garanderen.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {[
              {
                icon: "workspace_premium",
                title: "Certificeringen",
                text: "Partners moeten beschikken over alle relevante ISO en VCA certificaten, specifiek voor duurzame techniek.",
              },
              {
                icon: "history_edu",
                title: "Bewezen Ervaring",
                text: "Een minimum van 5 jaar aantoonbare ervaring in grootschalige energietransitie projecten is vereist.",
              },
              {
                icon: "fact_check",
                title: "Kwaliteitsaudits",
                text: "Wij voeren onverwachte steekproeven uit op lopende projecten om de kwaliteit continu te borgen.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="rounded-xl border border-neutral-100 bg-white p-8 shadow-sm"
              >
                <span className="material-symbols-outlined mb-4 text-4xl text-primary">
                  {item.icon}
                </span>
                <h4 className="mb-3 text-xl font-bold">{item.title}</h4>
                <p className="text-sm leading-relaxed text-neutral-600">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Onafhankelijk Toezicht */}
      <section className="bg-white py-24">
        <div className="mx-auto flex max-w-5xl flex-col items-center gap-12 px-6 md:flex-row">
          <div className="flex-1">
            <div className="mb-4 inline-block rounded-full bg-sage px-3 py-1 text-xs font-bold uppercase tracking-wider text-primary">
              Neutraliteit
            </div>
            <h2 className="mb-6 text-3xl font-bold text-primary">
              Onafhankelijk Toezicht
            </h2>
            <p className="mb-6 leading-relaxed text-neutral-600">
              Als collectief opereert NCDE volledig onafhankelijk van
              energieleveranciers of fabrikanten. Onze enige focus is het
              realiseren van een kwalitatieve en veilige energietransitie voor de
              eindgebruiker.
            </p>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <span className="material-symbols-outlined mt-1 text-primary">
                  check_circle
                </span>
                <span className="text-neutral-700">
                  Geen commerci&euml;le belangen in specifieke merken
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="material-symbols-outlined mt-1 text-primary">
                  check_circle
                </span>
                <span className="text-neutral-700">
                  Nauwgezet afgestemd op overheidsbeleid (Rijksoverheid)
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="material-symbols-outlined mt-1 text-primary">
                  check_circle
                </span>
                <span className="text-neutral-700">
                  Transparante rapportages en benchmarks
                </span>
              </li>
            </ul>
          </div>
          <div className="w-full flex-1">
            <div className="relative aspect-video overflow-hidden rounded-xl bg-sage">
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/40 to-transparent"></div>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                alt="Consultatie over duurzame energie"
                className="h-full w-full object-cover"
                src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=800&h=500&fit=crop"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="mx-auto max-w-5xl px-6 lg:px-12">
          <div className="rounded-3xl border border-primary/10 bg-accent-soft p-10 text-center lg:p-16">
            <h2 className="mb-6 text-3xl font-black text-primary lg:text-4xl">
              Wilt u meer weten over onze aanpak?
            </h2>
            <p className="mx-auto mb-10 max-w-2xl text-lg text-primary/70">
              Neem contact met ons op voor een vrijblijvend gesprek over hoe wij
              uw energietransitie project kunnen begeleiden.
            </p>
            <Link
              href="/contact"
              className="inline-block rounded-lg bg-primary px-10 py-5 text-xl font-bold text-white shadow-xl shadow-primary/20 transition-all hover:scale-105"
            >
              Neem Contact Op
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
