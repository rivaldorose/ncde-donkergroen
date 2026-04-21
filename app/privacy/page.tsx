import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacybeleid — NCDE",
  description: "Het privacybeleid van Stichting NCDE.",
};

export default function PrivacyPage() {
  return (
    <main className="mx-auto max-w-[1200px] px-6 py-12 md:px-10">
      {/* Hero Section */}
      <div className="sticky top-[73px] z-40 mb-12 flex flex-col items-start justify-between gap-6 border-b border-primary/10 bg-background-light pb-10 pt-12 md:flex-row md:items-end">
        <div className="max-w-2xl">
          <nav className="mb-4 flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-primary/60">
            <Link href="/" className="hover:text-primary">
              Home
            </Link>
            <span className="material-symbols-outlined text-[10px]">
              chevron_right
            </span>
            <span>Privacybeleid</span>
          </nav>
          <h1 className="mb-4 text-4xl font-bold leading-none tracking-tighter text-slate-900 md:text-5xl">
            Privacybeleid
          </h1>
          <p className="text-lg leading-relaxed text-slate-600">
            Hoe wij omgaan met uw persoonsgegevens en wat uw rechten zijn onder
            de AVG (Algemene Verordening Gegevensbescherming).
          </p>
        </div>
        <div className="flex flex-col items-start gap-3 md:items-end">
          <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-500">
            Laatst bijgewerkt: 15 maart 2026
          </span>
        </div>
      </div>

      <div className="flex flex-col gap-12 lg:flex-row">
        {/* Sidebar Navigation */}
        <aside className="w-full shrink-0 lg:w-72">
          <div className="sticky top-[340px] space-y-2">
            <p className="mb-4 px-4 text-[10px] font-bold uppercase tracking-widest text-slate-400">
              Documenten
            </p>
            <Link
              href="/juridisch"
              className="group flex items-center justify-between rounded-xl bg-white px-4 py-3 text-sm font-bold text-slate-700 transition-all hover:bg-primary/5"
            >
              <span>Algemene Voorwaarden</span>
              <span className="material-symbols-outlined text-[18px] opacity-40 group-hover:opacity-100">
                description
              </span>
            </Link>
            <Link
              href="/privacy"
              className="flex items-center justify-between rounded-xl bg-primary px-4 py-3 text-sm font-bold text-white shadow-md shadow-primary/20"
            >
              <span>Privacybeleid</span>
              <span className="material-symbols-outlined text-[18px]">
                shield
              </span>
            </Link>
            <Link
              href="/cookies"
              className="group flex items-center justify-between rounded-xl bg-white px-4 py-3 text-sm font-bold text-slate-700 transition-all hover:bg-primary/5"
            >
              <span>Cookieverklaring</span>
              <span className="material-symbols-outlined text-[18px] opacity-40 group-hover:opacity-100">
                cookie
              </span>
            </Link>
            <Link
              href="/disclaimer"
              className="group flex items-center justify-between rounded-xl bg-white px-4 py-3 text-sm font-bold text-slate-700 transition-all hover:bg-primary/5"
            >
              <span>Disclaimer</span>
              <span className="material-symbols-outlined text-[18px] opacity-40 group-hover:opacity-100">
                gavel
              </span>
            </Link>
            <div className="px-4 pt-8">
              <p className="mb-4 text-[10px] font-bold uppercase tracking-widest text-slate-400">
                Inhoudsopgave
              </p>
              <ul className="space-y-3 border-l-2 border-slate-200 text-xs font-semibold text-slate-500">
                <li className="-ml-[2px] border-l-2 border-primary pl-4 text-primary">
                  1. Verwerkingsverantwoordelijke
                </li>
                <li className="cursor-pointer pl-4 transition-colors hover:text-primary">
                  2. Welke gegevens verzamelen wij?
                </li>
                <li className="cursor-pointer pl-4 transition-colors hover:text-primary">
                  3. Doeleinden van verwerking
                </li>
                <li className="cursor-pointer pl-4 transition-colors hover:text-primary">
                  4. Bewaartermijn
                </li>
                <li className="cursor-pointer pl-4 transition-colors hover:text-primary">
                  5. Delen met derden
                </li>
                <li className="cursor-pointer pl-4 transition-colors hover:text-primary">
                  6. Uw rechten
                </li>
                <li className="cursor-pointer pl-4 transition-colors hover:text-primary">
                  7. Beveiliging
                </li>
              </ul>
            </div>
          </div>
        </aside>

        {/* Document Content */}
        <article className="flex-1 rounded-3xl border border-primary/5 bg-white p-8 shadow-sm md:p-12">
          <div className="max-w-none">
            <h2 className="mb-8 text-3xl font-bold text-slate-900">
              Privacybeleid NCDE
            </h2>
            <div className="space-y-10 leading-relaxed text-slate-700">
              <section>
                <h3 className="mb-4 flex items-center gap-3 text-xl font-bold text-primary">
                  <span className="flex size-8 items-center justify-center rounded-lg bg-primary/10 text-sm font-black text-primary">
                    1
                  </span>
                  Verwerkingsverantwoordelijke
                </h3>
                <p className="mb-4">
                  Stichting Nederlands Collectief Duurzame Energie (NCDE) is
                  verantwoordelijk voor de verwerking van persoonsgegevens zoals
                  weergegeven in dit privacybeleid. Onze contactgegevens zijn:
                </p>
                <ul className="list-disc space-y-2 pl-5 marker:text-primary">
                  <li>
                    <strong>Organisatie:</strong> Stichting NCDE
                  </li>
                  <li>
                    <strong>Adres:</strong> Den Haag, Nederland
                  </li>
                  <li>
                    <strong>E-mail:</strong> info@ncde.nl
                  </li>
                </ul>
              </section>

              <section>
                <h3 className="mb-4 flex items-center gap-3 text-xl font-bold text-primary">
                  <span className="flex size-8 items-center justify-center rounded-lg bg-primary/10 text-sm font-black text-primary">
                    2
                  </span>
                  Welke gegevens verzamelen wij?
                </h3>
                <p className="mb-4">
                  NCDE verwerkt uw persoonsgegevens doordat u gebruik maakt van
                  onze diensten en/of omdat u deze zelf aan ons verstrekt.
                  Hieronder vindt u een overzicht:
                </p>
                <ul className="list-disc space-y-2 pl-5 marker:text-primary">
                  <li>Voor- en achternaam</li>
                  <li>E-mailadres</li>
                  <li>Telefoonnummer</li>
                  <li>Adresgegevens</li>
                  <li>IP-adres en browsergegevens</li>
                  <li>
                    Overige persoonsgegevens die u actief verstrekt, bijvoorbeeld
                    via correspondentie of het contactformulier
                  </li>
                </ul>
              </section>

              <section>
                <h3 className="mb-4 flex items-center gap-3 text-xl font-bold text-primary">
                  <span className="flex size-8 items-center justify-center rounded-lg bg-primary/10 text-sm font-black text-primary">
                    3
                  </span>
                  Doeleinden van verwerking
                </h3>
                <p className="mb-4">
                  NCDE verwerkt uw persoonsgegevens voor de volgende doelen:
                </p>
                <ul className="list-disc space-y-2 pl-5 marker:text-primary">
                  <li>
                    Het afhandelen van uw aanvraag of contactverzoek
                  </li>
                  <li>
                    U te informeren over wijzigingen in onze diensten en
                    informatievoorziening
                  </li>
                  <li>
                    Het verzenden van nieuwsbrieven en updates over de
                    energietransitie
                  </li>
                  <li>
                    Het verbeteren van onze website en dienstverlening
                  </li>
                  <li>
                    Om te voldoen aan wettelijke verplichtingen
                  </li>
                </ul>
              </section>

              <section>
                <h3 className="mb-4 flex items-center gap-3 text-xl font-bold text-primary">
                  <span className="flex size-8 items-center justify-center rounded-lg bg-primary/10 text-sm font-black text-primary">
                    4
                  </span>
                  Bewaartermijn
                </h3>
                <p>
                  NCDE bewaart uw persoonsgegevens niet langer dan strikt nodig
                  is om de doelen te realiseren waarvoor uw gegevens worden
                  verzameld. Wij hanteren een bewaartermijn van maximaal 24
                  maanden voor contactgegevens, tenzij wettelijke verplichtingen
                  een langere bewaartermijn vereisen.
                </p>
              </section>

              <section>
                <h3 className="mb-4 flex items-center gap-3 text-xl font-bold text-primary">
                  <span className="flex size-8 items-center justify-center rounded-lg bg-primary/10 text-sm font-black text-primary">
                    5
                  </span>
                  Delen met derden
                </h3>
                <p>
                  NCDE deelt uw persoonsgegevens alleen met derden als dit nodig
                  is voor de uitvoering van onze overeenkomst met u, of om te
                  voldoen aan een wettelijke verplichting. Met bedrijven die uw
                  gegevens verwerken in onze opdracht sluiten wij een
                  verwerkersovereenkomst om te zorgen voor eenzelfde niveau van
                  beveiliging en vertrouwelijkheid.
                </p>
              </section>

              <section>
                <h3 className="mb-4 flex items-center gap-3 text-xl font-bold text-primary">
                  <span className="flex size-8 items-center justify-center rounded-lg bg-primary/10 text-sm font-black text-primary">
                    6
                  </span>
                  Uw rechten
                </h3>
                <p className="mb-4">
                  U heeft het recht om uw persoonsgegevens in te zien, te
                  corrigeren of te verwijderen. Daarnaast heeft u het recht om
                  bezwaar te maken tegen de verwerking en het recht op
                  gegevensoverdraagbaarheid.
                </p>
                <div className="rounded-2xl border-l-4 border-primary bg-primary/5 p-6 italic">
                  &quot;U kunt een verzoek tot inzage, correctie, verwijdering of
                  overdracht van uw persoonsgegevens sturen naar info@ncde.nl.
                  Wij reageren zo snel mogelijk, maar uiterlijk binnen vier
                  weken.&quot;
                </div>
              </section>

              <section>
                <h3 className="mb-4 flex items-center gap-3 text-xl font-bold text-primary">
                  <span className="flex size-8 items-center justify-center rounded-lg bg-primary/10 text-sm font-black text-primary">
                    7
                  </span>
                  Beveiliging
                </h3>
                <p>
                  NCDE neemt de bescherming van uw gegevens serieus en neemt
                  passende maatregelen om misbruik, verlies, onbevoegde toegang,
                  ongewenste openbaarmaking en ongeoorloofde wijziging tegen te
                  gaan. Als u de indruk heeft dat uw gegevens niet goed beveiligd
                  zijn of er aanwijzingen zijn van misbruik, neem dan contact met
                  ons op via info@ncde.nl.
                </p>
              </section>
            </div>

            <div className="mt-16 flex flex-col items-center justify-between gap-6 border-t border-primary/10 pt-10 md:flex-row">
              <div className="flex items-center gap-4 text-slate-500">
                <span className="material-symbols-outlined text-primary">
                  verified_user
                </span>
                <p className="text-xs font-semibold">
                  Conform AVG / GDPR wetgeving
                </p>
              </div>
              <div className="flex gap-4">
                <p className="text-xs text-slate-400">
                  Vragen over uw privacy?
                </p>
                <Link
                  href="/contact"
                  className="text-xs font-bold text-primary underline underline-offset-4"
                >
                  Neem contact op
                </Link>
              </div>
            </div>
          </div>
        </article>
      </div>
    </main>
  );
}
