import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Juridische Informatie — NCDE",
  description:
    "Algemene voorwaarden, privacybeleid en cookieverklaring van Stichting NCDE.",
};

export default function JuridischPage() {
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
            <span>Juridisch</span>
          </nav>
          <h1 className="mb-4 text-4xl font-black leading-none tracking-tighter text-slate-900 md:text-5xl">
            Juridische Informatie
          </h1>
          <p className="text-lg leading-relaxed text-slate-600">
            Onze inzet voor transparantie, veiligheid en wederzijds vertrouwen.
            Bekijk onze voorwaarden en hoe we met uw gegevens omgaan.
          </p>
        </div>
        <div className="flex flex-col items-start gap-3 md:items-end">
          <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-500">
            Laatst bijgewerkt: 15 maart 2026
          </span>
          <div className="flex gap-3">
            <button className="flex items-center gap-2 rounded-lg bg-primary/10 px-4 py-2 text-sm font-bold text-primary transition-all hover:bg-primary/20">
              <span className="material-symbols-outlined text-[20px]">
                print
              </span>
              Printen
            </button>
            <button className="flex items-center gap-2 rounded-lg bg-primary px-4 py-2 text-sm font-bold text-white transition-all hover:shadow-lg">
              <span className="material-symbols-outlined text-[20px]">
                download
              </span>
              Download PDF
            </button>
          </div>
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
              className="flex items-center justify-between rounded-xl bg-primary px-4 py-3 font-bold text-sm text-white shadow-md shadow-primary/20"
            >
              <span>Algemene Voorwaarden</span>
              <span className="material-symbols-outlined text-[18px]">
                description
              </span>
            </Link>
            <Link
              href="/privacy"
              className="group flex items-center justify-between rounded-xl bg-white px-4 py-3 text-sm font-bold text-slate-700 transition-all hover:bg-primary/5"
            >
              <span>Privacybeleid</span>
              <span className="material-symbols-outlined text-[18px] opacity-40 group-hover:opacity-100">
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
                  1. Definities
                </li>
                <li className="cursor-pointer pl-4 transition-colors hover:text-primary">
                  2. Toepasselijkheid
                </li>
                <li className="cursor-pointer pl-4 transition-colors hover:text-primary">
                  3. Het Aanbod
                </li>
                <li className="cursor-pointer pl-4 transition-colors hover:text-primary">
                  4. De Overeenkomst
                </li>
                <li className="cursor-pointer pl-4 transition-colors hover:text-primary">
                  5. Tarieven en Betaling
                </li>
                <li className="cursor-pointer pl-4 transition-colors hover:text-primary">
                  6. Aansprakelijkheid
                </li>
              </ul>
            </div>
          </div>
        </aside>

        {/* Document Content */}
        <article className="flex-1 rounded-3xl border border-primary/5 bg-white p-8 shadow-sm md:p-12">
          <div className="max-w-none">
            <h2 className="mb-8 text-3xl font-black text-slate-900">
              Algemene Voorwaarden NCDE
            </h2>
            <div className="space-y-10 leading-relaxed text-slate-700">
              <section>
                <h3 className="mb-4 flex items-center gap-3 text-xl font-bold text-primary">
                  <span className="flex size-8 items-center justify-center rounded-lg bg-primary/10 text-sm font-black text-primary">
                    1
                  </span>
                  Definities
                </h3>
                <p className="mb-4">
                  In deze algemene voorwaarden worden de volgende termen in de
                  navolgende betekenis gebruikt, tenzij uitdrukkelijk anders is
                  aangegeven:
                </p>
                <ul className="list-disc space-y-2 pl-5 marker:text-primary">
                  <li>
                    <strong>NCDE:</strong> De gebruiker van deze algemene
                    voorwaarden, gevestigd te Amsterdam.
                  </li>
                  <li>
                    <strong>Opdrachtgever:</strong> De natuurlijke persoon of
                    rechtspersoon die met NCDE een overeenkomst aangaat.
                  </li>
                  <li>
                    <strong>Overeenkomst:</strong> De tussen NCDE en
                    Opdrachtgever gesloten overeenkomst met betrekking tot de
                    levering van diensten.
                  </li>
                </ul>
              </section>

              <section>
                <h3 className="mb-4 flex items-center gap-3 text-xl font-bold text-primary">
                  <span className="flex size-8 items-center justify-center rounded-lg bg-primary/10 text-sm font-black text-primary">
                    2
                  </span>
                  Toepasselijkheid
                </h3>
                <p className="mb-4">
                  Deze voorwaarden zijn van toepassing op alle aanbiedingen,
                  offertes, werkzaamheden, bestellingen, overeenkomsten en
                  leveringen van diensten of producten door of namens NCDE.
                  Afwijkingen van deze voorwaarden zijn slechts geldig indien
                  deze uitdrukkelijk schriftelijk zijn overeengekomen.
                </p>
                <p>
                  De toepasselijkheid van eventuele inkoop- of andere voorwaarden
                  van de Opdrachtgever wordt uitdrukkelijk van de hand gewezen,
                  tenzij schriftelijk anders is overeengekomen.
                </p>
              </section>

              <section>
                <h3 className="mb-4 flex items-center gap-3 text-xl font-bold text-primary">
                  <span className="flex size-8 items-center justify-center rounded-lg bg-primary/10 text-sm font-black text-primary">
                    3
                  </span>
                  Het Aanbod
                </h3>
                <p className="mb-4">
                  Indien een aanbod een beperkte geldigheidsduur heeft of onder
                  voorwaarden geschiedt, wordt dit nadrukkelijk in het aanbod
                  vermeld. Het aanbod bevat een volledige en nauwkeurige
                  omschrijving van de aangeboden diensten.
                </p>
                <div className="rounded-2xl border-l-4 border-primary bg-primary/5 p-6 italic">
                  &quot;NCDE is niet gebonden aan kennelijke vergissingen of
                  fouten in het aanbod. Elk aanbod is vrijblijvend, tenzij
                  uitdrukkelijk anders vermeld.&quot;
                </div>
              </section>

              <section>
                <h3 className="mb-4 flex items-center gap-3 text-xl font-bold text-primary">
                  <span className="flex size-8 items-center justify-center rounded-lg bg-primary/10 text-sm font-black text-primary">
                    4
                  </span>
                  De Overeenkomst
                </h3>
                <p>
                  De overeenkomst komt tot stand op het moment van aanvaarding
                  door de Opdrachtgever van het aanbod en het voldoen aan de
                  daarbij gestelde voorwaarden. NCDE bevestigt onverwijld langs
                  elektronische weg de ontvangst van de aanvaarding van het
                  aanbod.
                </p>
              </section>

              <section>
                <h3 className="mb-4 flex items-center gap-3 text-xl font-bold text-primary">
                  <span className="flex size-8 items-center justify-center rounded-lg bg-primary/10 text-sm font-black text-primary">
                    5
                  </span>
                  Tarieven en Betaling
                </h3>
                <p className="mb-4">
                  Alle genoemde prijzen zijn exclusief BTW en andere heffingen
                  van overheidswege, tenzij anders aangegeven. Betaling dient te
                  geschieden binnen 14 dagen na factuurdatum, op een door NCDE
                  aan te geven wijze in de valuta waarin is gefactureerd.
                </p>
              </section>
            </div>

            <div className="mt-16 flex flex-col items-center justify-between gap-6 border-t border-primary/10 pt-10 md:flex-row">
              <div className="flex items-center gap-4 text-slate-500">
                <span className="material-symbols-outlined text-primary">
                  verified_user
                </span>
                <p className="text-xs font-semibold">
                  Gecertificeerd conform EU-wetgeving 2024
                </p>
              </div>
              <div className="flex gap-4">
                <p className="text-xs text-slate-400">
                  Vragen over onze voorwaarden?
                </p>
                <Link
                  href="/contact"
                  className="text-xs font-bold text-primary underline underline-offset-4"
                >
                  Contacteer Legal Team
                </Link>
              </div>
            </div>
          </div>
        </article>
      </div>
    </main>
  );
}
