import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Disclaimer — NCDE",
  description: "Disclaimer van Stichting NCDE.",
};

export default function DisclaimerPage() {
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
            <span>Disclaimer</span>
          </nav>
          <h1 className="mb-4 text-4xl font-black leading-none tracking-tighter text-slate-900 md:text-5xl">
            Disclaimer
          </h1>
          <p className="text-lg leading-relaxed text-slate-600">
            Belangrijke juridische informatie over het gebruik van de NCDE
            website en de daarop aangeboden informatie.
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
              className="flex items-center justify-between rounded-xl bg-primary px-4 py-3 text-sm font-bold text-white shadow-md shadow-primary/20"
            >
              <span>Disclaimer</span>
              <span className="material-symbols-outlined text-[18px]">
                gavel
              </span>
            </Link>
            <div className="px-4 pt-8">
              <p className="mb-4 text-[10px] font-bold uppercase tracking-widest text-slate-400">
                Inhoudsopgave
              </p>
              <ul className="space-y-3 border-l-2 border-slate-200 text-xs font-semibold text-slate-500">
                <li className="-ml-[2px] border-l-2 border-primary pl-4 text-primary">
                  1. Algemeen
                </li>
                <li className="cursor-pointer pl-4 transition-colors hover:text-primary">
                  2. Geen professioneel advies
                </li>
                <li className="cursor-pointer pl-4 transition-colors hover:text-primary">
                  3. Aansprakelijkheid
                </li>
                <li className="cursor-pointer pl-4 transition-colors hover:text-primary">
                  4. Links naar derden
                </li>
                <li className="cursor-pointer pl-4 transition-colors hover:text-primary">
                  5. Intellectueel eigendom
                </li>
                <li className="cursor-pointer pl-4 transition-colors hover:text-primary">
                  6. Toepasselijk recht
                </li>
              </ul>
            </div>
          </div>
        </aside>

        {/* Document Content */}
        <article className="flex-1 rounded-3xl border border-primary/5 bg-white p-8 shadow-sm md:p-12">
          <div className="max-w-none">
            <h2 className="mb-8 text-3xl font-black text-slate-900">
              Disclaimer NCDE
            </h2>
            <div className="space-y-10 leading-relaxed text-slate-700">
              <section>
                <h3 className="mb-4 flex items-center gap-3 text-xl font-bold text-primary">
                  <span className="flex size-8 items-center justify-center rounded-lg bg-primary/10 text-sm font-black text-primary">
                    1
                  </span>
                  Algemeen
                </h3>
                <p>
                  De informatie op de website van Stichting Nederlands Collectief
                  Duurzame Energie (NCDE) is bedoeld als algemene informatie over
                  de energietransitie, regelgeving en duurzame
                  energieoplossingen. Hoewel NCDE grote zorgvuldigheid betracht
                  bij het samenstellen van de inhoud van deze website, kan NCDE
                  niet garanderen dat de informatie altijd volledig, juist of
                  actueel is.
                </p>
              </section>

              <section>
                <h3 className="mb-4 flex items-center gap-3 text-xl font-bold text-primary">
                  <span className="flex size-8 items-center justify-center rounded-lg bg-primary/10 text-sm font-black text-primary">
                    2
                  </span>
                  Geen professioneel advies
                </h3>
                <p className="mb-4">
                  De informatie op deze website is uitsluitend bedoeld als
                  algemene informatie en vormt geen professioneel advies. Voor
                  specifieke vragen of situaties raden wij u aan contact op te
                  nemen met een gekwalificeerde adviseur.
                </p>
                <div className="rounded-2xl border-l-4 border-primary bg-primary/5 p-6 italic">
                  &quot;NCDE aanvaardt geen aansprakelijkheid voor schade die
                  voortvloeit uit het gebruik van informatie op deze website
                  zonder voorafgaand deskundig advies.&quot;
                </div>
              </section>

              <section>
                <h3 className="mb-4 flex items-center gap-3 text-xl font-bold text-primary">
                  <span className="flex size-8 items-center justify-center rounded-lg bg-primary/10 text-sm font-black text-primary">
                    3
                  </span>
                  Aansprakelijkheid
                </h3>
                <p>
                  NCDE sluit alle aansprakelijkheid uit voor enigerlei directe of
                  indirecte schade, van welke aard dan ook, die voortvloeit uit
                  of in enig opzicht verband houdt met het gebruik van de website,
                  de (on)bereikbaarheid van de website, of informatie die op of
                  via de website wordt aangeboden. Dit geldt ook voor schade
                  veroorzaakt door virussen of onjuistheden of onvolledigheden in
                  de informatie.
                </p>
              </section>

              <section>
                <h3 className="mb-4 flex items-center gap-3 text-xl font-bold text-primary">
                  <span className="flex size-8 items-center justify-center rounded-lg bg-primary/10 text-sm font-black text-primary">
                    4
                  </span>
                  Links naar derden
                </h3>
                <p>
                  De website van NCDE kan links bevatten naar websites van
                  derden. NCDE heeft geen invloed op de inhoud van deze websites
                  en is niet verantwoordelijk voor de inhoud, het privacybeleid
                  of de werkwijze van deze websites. Het plaatsen van links naar
                  externe websites houdt geen aanbeveling van de inhoud van die
                  websites in.
                </p>
              </section>

              <section>
                <h3 className="mb-4 flex items-center gap-3 text-xl font-bold text-primary">
                  <span className="flex size-8 items-center justify-center rounded-lg bg-primary/10 text-sm font-black text-primary">
                    5
                  </span>
                  Intellectueel eigendom
                </h3>
                <p>
                  Alle rechten van intellectueel eigendom met betrekking tot de
                  inhoud van deze website — waaronder teksten, afbeeldingen,
                  logo&apos;s, illustraties en vormgeving — berusten bij NCDE of
                  haar licentiegevers. Het is niet toegestaan om zonder
                  voorafgaande schriftelijke toestemming van NCDE informatie van
                  de website te kopiëren, te verspreiden of op een andere wijze
                  te gebruiken voor commerciële doeleinden.
                </p>
              </section>

              <section>
                <h3 className="mb-4 flex items-center gap-3 text-xl font-bold text-primary">
                  <span className="flex size-8 items-center justify-center rounded-lg bg-primary/10 text-sm font-black text-primary">
                    6
                  </span>
                  Toepasselijk recht
                </h3>
                <p>
                  Op deze disclaimer en het gebruik van de website is uitsluitend
                  Nederlands recht van toepassing. Alle geschillen die
                  voortvloeien uit of verband houden met deze disclaimer zullen
                  worden voorgelegd aan de bevoegde rechter te Den Haag.
                </p>
              </section>
            </div>

            <div className="mt-16 flex flex-col items-center justify-between gap-6 border-t border-primary/10 pt-10 md:flex-row">
              <div className="flex items-center gap-4 text-slate-500">
                <span className="material-symbols-outlined text-primary">
                  verified_user
                </span>
                <p className="text-xs font-semibold">
                  Nederlands recht van toepassing
                </p>
              </div>
              <div className="flex gap-4">
                <p className="text-xs text-slate-400">
                  Vragen over deze disclaimer?
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
