import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Salderingsregeling — NCDE",
  description:
    "Informatie over de salderingsregeling, het huidige systeem en de voorgenomen wijzigingen voor Nederlandse huishoudens.",
};

export default function SalderingsregelingPage() {
  return (
    <>
      {/* Breadcrumb */}
      <div className="bg-white px-6 py-4 md:px-20 lg:px-40">
        <nav className="flex items-center gap-2 text-sm font-medium text-slate-500">
          <Link href="/" className="hover:text-primary">
            Home
          </Link>
          <span className="material-symbols-outlined text-xs">
            chevron_right
          </span>
          <span className="font-semibold text-primary">
            Salderingsregeling
          </span>
        </nav>
      </div>

      {/* Hero */}
      <section className="border-y border-primary/5 bg-sage/30 px-6 py-16 md:px-20 lg:px-40">
        <div className="mx-auto max-w-[960px]">
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12">
            <div className="flex flex-col gap-6 lg:col-span-7">
              <span className="w-fit rounded bg-primary/10 px-3 py-1 text-xs font-bold uppercase tracking-widest text-primary">
                Informatie Dossier
              </span>
              <h1 className="text-4xl font-black leading-[1.1] tracking-tight text-slate-900 md:text-5xl lg:text-6xl">
                Salderingsregeling: Alles wat u moet weten
              </h1>
              <p className="max-w-2xl text-lg leading-relaxed text-slate-600 md:text-xl">
                Informatie over het huidige systeem voor het wegstrepen van zelf
                opgewekte elektriciteit tegen uw verbruik. Betrouwbare feiten
                voor uw energiehuishouding.
              </p>
            </div>
            <div className="hidden lg:col-span-5 lg:block">
              <div className="rotate-1 rounded-xl bg-white p-2 shadow-xl">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuAP0ZXvakbCAeMwIqubsBPgJMNP4wDSpCNxtmR4d_Er7DHnQ-HU_7rQ9vgsCwpYTTgfgS8-E6-YVpjLoraasTA2nmERtugDpQdXfEkh635O24zXYp1Nb5sHVddYgJApw7LnKuBhCBRXUJXq46r5xy4wiRTubF5EzJ74LCH3gVEkuYmRth1t5QC6Z6dkpo7X6yqpD064e7IWwuMbH1kyV3-ZQcpTRYlUPjLHgue05JgIYoWjyIOi8IdT0k-rwqcJ6FikVmrHDDECSoAX"
                  alt="Solar panels on a residential roof"
                  className="aspect-square w-full rounded-lg object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Content */}
      <div className="px-6 py-16 md:px-20 lg:px-40">
        <div className="mx-auto grid max-w-[960px] grid-cols-1 gap-12 lg:grid-cols-3">
          {/* Main content */}
          <div className="flex flex-col gap-12 lg:col-span-2">
            {/* Hoe het nu werkt */}
            <article className="flex flex-col gap-4">
              <h2 className="flex items-center gap-3 text-2xl font-bold text-slate-900">
                <span className="h-1 w-8 rounded-full bg-primary"></span>
                Hoe het nu werkt
              </h2>
              <div className="max-w-none leading-relaxed text-slate-700">
                <p className="mb-4">
                  De salderingsregeling is in 2004 ingevoerd om het gebruik van
                  zonnepanelen te stimuleren. Het principe is eenvoudig: de
                  stroom die u overdag opwekt maar niet direct verbruikt, levert
                  u terug aan het openbare elektriciteitsnet.
                </p>
                <p className="mb-4">
                  Aan het eind van het jaar wordt de hoeveelheid teruggeleverde
                  stroom afgetrokken van de hoeveelheid stroom die u van het net
                  heeft afgenomen. Dit &apos;wegstrepen&apos; noemen we
                  salderen. U betaalt dus alleen voor het netto-verbruik.
                </p>
                <div className="my-6 rounded-lg border-l-4 border-primary bg-background-light p-6">
                  <h4 className="mb-2 font-bold text-primary">Wist u dat?</h4>
                  <p className="text-sm">
                    Bij salderen krijgt u voor uw teruggeleverde stroom exact
                    hetzelfde tarief als u betaalt voor de afgenomen stroom,
                    inclusief energiebelasting en btw.
                  </p>
                </div>
              </div>
            </article>

            {/* Voorgenomen wijzigingen */}
            <article className="flex flex-col gap-4">
              <h2 className="flex items-center gap-3 text-2xl font-bold text-slate-900">
                <span className="h-1 w-8 rounded-full bg-primary"></span>
                De voorgenomen wijzigingen
              </h2>
              <p className="text-slate-700">
                De overheid is van plan de salderingsregeling stapsgewijs af te
                bouwen. Hoewel politieke besluitvorming nog gaande is, ziet het
                voorlopige afbouwpad er als volgt uit:
              </p>
              <div className="mt-4 space-y-4">
                <div className="flex items-start gap-4 rounded-lg border border-primary/5 bg-sage/20 p-4">
                  <span className="min-w-[60px] text-xl font-bold text-primary">
                    2024
                  </span>
                  <p className="text-sm md:text-base">
                    100% salderen mogelijk. Geen wijzigingen ten opzichte van
                    voorgaande jaren.
                  </p>
                </div>
                <div className="flex items-start gap-4 rounded-lg border border-primary/5 bg-sage/10 p-4">
                  <span className="min-w-[60px] text-xl font-bold text-slate-500">
                    2027
                  </span>
                  <p className="text-sm md:text-base">
                    Start van de geleidelijke afbouw. Het percentage dat u mag
                    salderen neemt jaarlijks af.
                  </p>
                </div>
                <div className="flex items-start gap-4 rounded-lg border border-primary/5 bg-slate-100 p-4 opacity-70">
                  <span className="min-w-[60px] text-xl font-bold text-slate-400">
                    2031
                  </span>
                  <p className="text-sm md:text-base">
                    Einde van de salderingsregeling. U ontvangt enkel een
                    redelijke terugleververgoeding van uw energieleverancier.
                  </p>
                </div>
              </div>
            </article>

            {/* Wat betekent dit voor u? */}
            <article className="flex flex-col gap-4">
              <h2 className="flex items-center gap-3 text-2xl font-bold text-slate-900">
                <span className="h-1 w-8 rounded-full bg-primary"></span>
                Wat betekent dit voor u?
              </h2>
              <p className="text-slate-700">
                Zonnepanelen blijven ook zonder salderingsregeling een rendabele
                investering. Het zwaartepunt verschuift echter naar direct
                verbruik:
              </p>
              <ul className="mt-2 grid grid-cols-1 gap-4 md:grid-cols-2">
                <li className="flex gap-3 rounded-lg border border-slate-100 bg-white p-4 shadow-sm">
                  <span className="material-symbols-outlined text-primary">
                    analytics
                  </span>
                  <span className="text-sm">
                    Terugverdientijd blijft gemiddeld tussen 7 en 9 jaar.
                  </span>
                </li>
                <li className="flex gap-3 rounded-lg border border-slate-100 bg-white p-4 shadow-sm">
                  <span className="material-symbols-outlined text-primary">
                    battery_charging_full
                  </span>
                  <span className="text-sm">
                    Direct verbruik (overdag apparaten aan) wordt belangrijker.
                  </span>
                </li>
                <li className="flex gap-3 rounded-lg border border-slate-100 bg-white p-4 shadow-sm">
                  <span className="material-symbols-outlined text-primary">
                    home_max
                  </span>
                  <span className="text-sm">
                    Interesse in thuisbatterijen voor opslag neemt toe.
                  </span>
                </li>
                <li className="flex gap-3 rounded-lg border border-slate-100 bg-white p-4 shadow-sm">
                  <span className="material-symbols-outlined text-primary">
                    euro
                  </span>
                  <span className="text-sm">
                    U ontvangt altijd een vergoeding voor teruglevering.
                  </span>
                </li>
              </ul>
            </article>
          </div>

          {/* Sidebar */}
          <aside className="flex flex-col gap-8">
            <div className="sticky top-24 flex flex-col gap-6 rounded-xl bg-primary p-8 text-white">
              <div>
                <h3 className="mb-4 flex items-center gap-2 text-xl font-bold">
                  <span className="material-symbols-outlined">
                    calendar_today
                  </span>
                  Belangrijke data
                </h3>
                <ul className="space-y-3 text-sm">
                  <li className="border-b border-white/20 pb-2">
                    <span className="block font-bold">1 januari 2024</span>
                    Huidige regeling blijft ongewijzigd.
                  </li>
                  <li className="border-b border-white/20 pb-2">
                    <span className="block font-bold">Mid-2024</span>
                    Behandeling wetsvoorstel Eerste Kamer.
                  </li>
                </ul>
              </div>
              <div className="border-t border-white/20 pt-4">
                <h3 className="mb-4 flex items-center gap-2 text-xl font-bold">
                  <span className="material-symbols-outlined">help</span>
                  Veelgestelde vragen
                </h3>
                <ul className="space-y-4 text-sm">
                  <li>
                    <Link
                      href="#"
                      className="flex items-center justify-between hover:underline"
                    >
                      Geldt de afbouw voor iedereen?
                      <span className="material-symbols-outlined text-xs">
                        arrow_forward
                      </span>
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="#"
                      className="flex items-center justify-between hover:underline"
                    >
                      Wat is een terugleververgoeding?
                      <span className="material-symbols-outlined text-xs">
                        arrow_forward
                      </span>
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/oplossingen/thuisbatterijen"
                      className="flex items-center justify-between hover:underline"
                    >
                      Is een thuisbatterij nu zinvol?
                      <span className="material-symbols-outlined text-xs">
                        arrow_forward
                      </span>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </aside>
        </div>
      </div>

      {/* CTA */}
      <section className="border-t border-primary/10 bg-primary/5 px-6 py-20 md:px-20 lg:px-40">
        <div className="mx-auto flex max-w-[700px] flex-col items-center gap-8 text-center">
          <span className="material-symbols-outlined text-6xl text-primary">
            support_agent
          </span>
          <div className="flex flex-col gap-3">
            <h2 className="text-3xl font-bold text-slate-900">
              Hulp nodig bij uw keuze?
            </h2>
            <p className="text-lg text-slate-600">
              Onze adviseurs staan klaar om uw persoonlijke situatie door te
              rekenen en u te voorzien van onafhankelijk advies over de
              salderingsregeling.
            </p>
          </div>
          <div className="flex w-full flex-col justify-center gap-4 sm:flex-row">
            <Link
              href="/contact"
              className="flex items-center justify-center gap-2 rounded-lg bg-primary px-8 py-4 font-bold text-white shadow-lg transition-all hover:bg-primary/90"
            >
              Contacteer een adviseur
              <span className="material-symbols-outlined">mail</span>
            </Link>
            <button className="flex items-center justify-center gap-2 rounded-lg border border-primary/20 bg-white px-8 py-4 font-bold text-primary transition-all hover:bg-slate-50">
              Bel ons direct
              <span className="material-symbols-outlined">call</span>
            </button>
          </div>
        </div>
      </section>
    </>
  );
}
