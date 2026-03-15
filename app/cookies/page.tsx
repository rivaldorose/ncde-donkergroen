import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Cookiebeleid — NCDE",
  description: "Het cookiebeleid van Stichting NCDE.",
};

export default function CookiesPage() {
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
            <span>Cookiebeleid</span>
          </nav>
          <h1 className="mb-4 text-4xl font-black leading-none tracking-tighter text-slate-900 md:text-5xl">
            Cookiebeleid
          </h1>
          <p className="text-lg leading-relaxed text-slate-600">
            Informatie over het gebruik van cookies en vergelijkbare technologieën
            op de website van NCDE.
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
              className="flex items-center justify-between rounded-xl bg-primary px-4 py-3 text-sm font-bold text-white shadow-md shadow-primary/20"
            >
              <span>Cookieverklaring</span>
              <span className="material-symbols-outlined text-[18px]">
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
                  1. Wat zijn cookies?
                </li>
                <li className="cursor-pointer pl-4 transition-colors hover:text-primary">
                  2. Welke cookies gebruiken wij?
                </li>
                <li className="cursor-pointer pl-4 transition-colors hover:text-primary">
                  3. Bewaartermijn
                </li>
                <li className="cursor-pointer pl-4 transition-colors hover:text-primary">
                  4. Cookies beheren of verwijderen
                </li>
                <li className="cursor-pointer pl-4 transition-colors hover:text-primary">
                  5. Wijzigingen
                </li>
              </ul>
            </div>
          </div>
        </aside>

        {/* Document Content */}
        <article className="flex-1 rounded-3xl border border-primary/5 bg-white p-8 shadow-sm md:p-12">
          <div className="max-w-none">
            <h2 className="mb-8 text-3xl font-black text-slate-900">
              Cookieverklaring NCDE
            </h2>
            <div className="space-y-10 leading-relaxed text-slate-700">
              <section>
                <h3 className="mb-4 flex items-center gap-3 text-xl font-bold text-primary">
                  <span className="flex size-8 items-center justify-center rounded-lg bg-primary/10 text-sm font-black text-primary">
                    1
                  </span>
                  Wat zijn cookies?
                </h3>
                <p>
                  Cookies zijn kleine tekstbestanden die bij het bezoek aan een
                  website op uw computer, tablet of smartphone worden geplaatst.
                  Met behulp van cookies kan informatie worden verzameld of
                  opgeslagen over uw websitebezoek. Deze informatie kan
                  betrekking hebben op u, uw voorkeuren of uw apparaat en wordt
                  voornamelijk gebruikt om de site naar uw verwachtingen te laten
                  werken.
                </p>
              </section>

              <section>
                <h3 className="mb-4 flex items-center gap-3 text-xl font-bold text-primary">
                  <span className="flex size-8 items-center justify-center rounded-lg bg-primary/10 text-sm font-black text-primary">
                    2
                  </span>
                  Welke cookies gebruiken wij?
                </h3>
                <p className="mb-4">
                  NCDE maakt gebruik van de volgende categorieën cookies:
                </p>
                <div className="space-y-4">
                  <div className="rounded-xl border border-slate-200 bg-slate-50 p-5">
                    <div className="mb-2 flex items-center gap-2">
                      <span className="material-symbols-outlined text-primary">
                        check_circle
                      </span>
                      <p className="font-bold">Noodzakelijke cookies</p>
                    </div>
                    <p className="text-sm text-slate-600">
                      Deze cookies zijn essentieel voor het functioneren van de
                      website. Zonder deze cookies kan de website niet goed
                      werken. Ze worden niet gebruikt voor marketingdoeleinden.
                    </p>
                  </div>
                  <div className="rounded-xl border border-slate-200 bg-slate-50 p-5">
                    <div className="mb-2 flex items-center gap-2">
                      <span className="material-symbols-outlined text-primary">
                        analytics
                      </span>
                      <p className="font-bold">Analytische cookies</p>
                    </div>
                    <p className="text-sm text-slate-600">
                      Met analytische cookies kunnen wij het gebruik van de
                      website analyseren en de gebruikerservaring verbeteren. Wij
                      gebruiken hiervoor een privacy-vriendelijke configuratie
                      van Google Analytics.
                    </p>
                  </div>
                  <div className="rounded-xl border border-slate-200 bg-slate-50 p-5">
                    <div className="mb-2 flex items-center gap-2">
                      <span className="material-symbols-outlined text-primary">
                        tune
                      </span>
                      <p className="font-bold">Functionele cookies</p>
                    </div>
                    <p className="text-sm text-slate-600">
                      Functionele cookies onthouden uw voorkeuren en instellingen
                      zodat u een betere ervaring heeft bij een volgend bezoek
                      aan onze website.
                    </p>
                  </div>
                </div>
              </section>

              <section>
                <h3 className="mb-4 flex items-center gap-3 text-xl font-bold text-primary">
                  <span className="flex size-8 items-center justify-center rounded-lg bg-primary/10 text-sm font-black text-primary">
                    3
                  </span>
                  Bewaartermijn
                </h3>
                <p>
                  De bewaartermijn van cookies verschilt per type. Sessiecookies
                  worden automatisch verwijderd zodra u uw browser sluit.
                  Permanente cookies hebben een maximale bewaartermijn van 12
                  maanden, tenzij u ze eerder verwijdert via uw
                  browserinstellingen.
                </p>
              </section>

              <section>
                <h3 className="mb-4 flex items-center gap-3 text-xl font-bold text-primary">
                  <span className="flex size-8 items-center justify-center rounded-lg bg-primary/10 text-sm font-black text-primary">
                    4
                  </span>
                  Cookies beheren of verwijderen
                </h3>
                <p className="mb-4">
                  U kunt uw cookievoorkeuren op elk moment wijzigen via uw
                  browserinstellingen. Houd er rekening mee dat het uitschakelen
                  van cookies de functionaliteit van onze website kan beïnvloeden.
                </p>
                <div className="rounded-2xl border-l-4 border-primary bg-primary/5 p-6 italic">
                  &quot;U heeft altijd het recht om cookies te weigeren. Raadpleeg
                  de helpfunctie van uw browser om te zien hoe u cookies kunt
                  beheren of verwijderen.&quot;
                </div>
              </section>

              <section>
                <h3 className="mb-4 flex items-center gap-3 text-xl font-bold text-primary">
                  <span className="flex size-8 items-center justify-center rounded-lg bg-primary/10 text-sm font-black text-primary">
                    5
                  </span>
                  Wijzigingen
                </h3>
                <p>
                  NCDE kan dit cookiebeleid van tijd tot tijd aanpassen. De meest
                  actuele versie van het cookiebeleid is altijd beschikbaar op
                  onze website. Wij raden u aan dit beleid regelmatig te
                  raadplegen zodat u op de hoogte bent van eventuele wijzigingen.
                </p>
              </section>
            </div>

            <div className="mt-16 flex flex-col items-center justify-between gap-6 border-t border-primary/10 pt-10 md:flex-row">
              <div className="flex items-center gap-4 text-slate-500">
                <span className="material-symbols-outlined text-primary">
                  verified_user
                </span>
                <p className="text-xs font-semibold">
                  Conform AVG / ePrivacy richtlijn
                </p>
              </div>
              <div className="flex gap-4">
                <p className="text-xs text-slate-400">
                  Vragen over cookies?
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
