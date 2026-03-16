import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Partners & Samenwerkingen — NCDE",
  description:
    "Het Nederlands Collectief Duurzame Energie werkt samen met regionale netbeheerders en gecertificeerde installateurs.",
};

export default function PartnersPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-white px-6 py-12 md:px-20 md:py-20 lg:px-40">
        <div className="flex flex-col items-center gap-8 md:flex-row">
          <div className="flex w-full flex-col gap-6 md:w-1/2">
            <div className="inline-flex w-fit items-center gap-2 rounded-full bg-primary/10 px-3 py-1 text-xs font-bold uppercase tracking-wider text-primary">
              <span className="material-symbols-outlined text-sm">
                verified
              </span>{" "}
              Samenwerking
            </div>
            <h1 className="text-4xl font-black leading-tight tracking-tight text-slate-900 md:text-5xl lg:text-6xl">
              Onze Partners &amp; Samenwerkingen
            </h1>
            <p className="max-w-xl text-lg leading-relaxed text-slate-600">
              Het Nederlands Collectief Duurzame Energie werkt nauw samen met
              regionale netbeheerders en strikt gecertificeerde installateurs om
              een veilige en betrouwbare energietransitie voor heel Nederland te
              waarborgen.
            </p>
            <div className="flex gap-4">
              <Link
                href="/portaal/registratie"
                className="rounded-lg bg-primary px-8 py-3 font-bold text-white transition-all hover:shadow-lg"
              >
                Word Partner
              </Link>
              <Link
                href="/werkwijze"
                className="rounded-lg border border-slate-200 px-8 py-3 font-bold transition-all hover:bg-slate-50"
              >
                Onze Werkwijze
              </Link>
            </div>
          </div>
          <div className="w-full md:w-1/2">
            <div
              className="relative aspect-video overflow-hidden rounded-2xl bg-cover bg-center shadow-2xl"
              style={{
                backgroundImage:
                  "url('https://lh3.googleusercontent.com/aida-public/AB6AXuBsS7QSWegwzDiithhivHziZ4YDiKVwuvvklZCjfvc7pmGMKcUlJ2z8McyvoFLr61dJkI3cuG3NMEE-ZHlltE_-hFL5nwlLaav1ELenVp875nSjYx8IyRBw7bmnqQ_1iszFAwXeJY0q576uJGNj6s3eNq66GaqWwx6fxwoGNcrhDk_Vz3DX1hpfPFju7aErZp5Sw5xZCZtwCld_eSyiKBXvemVS42xqKRf3df0ZUX8eIazdM3E71n_36UfrZk7nuhphXdrgoGJiH8fr')",
              }}
            >
              <div className="absolute inset-0 bg-primary/10 mix-blend-multiply"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Grid Operators Section */}
      <section className="px-6 py-20 md:px-20 lg:px-40">
        <div className="mb-12">
          <h2 className="mb-4 text-3xl font-bold text-primary">
            Netbeheerders
          </h2>
          <div className="h-1 w-20 rounded-full bg-primary"></div>
          <p className="mt-4 max-w-2xl text-slate-600">
            NCDE coördineert aansluitingen en netcapaciteit met de belangrijkste
            beheerders van het Nederlandse energienetwerk.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          <div className="group flex flex-col items-center rounded-xl border border-slate-100 bg-white p-8 text-center transition-all hover:shadow-xl">
            <div className="mb-6 flex h-20 w-full items-center justify-center">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/images/partners/liander.png"
                alt="Liander logo"
                className="h-12 object-contain grayscale transition-all group-hover:grayscale-0"
              />
            </div>
            <h3 className="mb-2 text-lg font-bold">Liander</h3>
            <p className="text-sm text-slate-500">
              Verantwoordelijk voor het elektriciteits- en gasnet in een groot
              deel van Nederland.
            </p>
          </div>
          <div className="group flex flex-col items-center rounded-xl border border-slate-100 bg-white p-8 text-center transition-all hover:shadow-xl">
            <div className="mb-6 flex h-20 w-full items-center justify-center">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/images/partners/stedin.png"
                alt="Stedin logo"
                className="h-12 object-contain grayscale transition-all group-hover:grayscale-0"
              />
            </div>
            <h3 className="mb-2 text-lg font-bold">Stedin</h3>
            <p className="text-sm text-slate-500">
              Beheerder van het energienetwerk in de Randstad en omliggende
              regio&apos;s.
            </p>
          </div>
          <div className="group flex flex-col items-center rounded-xl border border-slate-100 bg-white p-8 text-center transition-all hover:shadow-xl">
            <div className="mb-6 flex h-20 w-full items-center justify-center">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/images/partners/alliander.png"
                alt="Alliander logo"
                className="h-12 object-contain grayscale transition-all group-hover:grayscale-0"
              />
            </div>
            <h3 className="mb-2 text-lg font-bold">Alliander</h3>
            <p className="text-sm text-slate-500">
              Netwerkbedrijf dat de energie-infrastructuur in diverse
              regio&apos;s ontwikkelt.
            </p>
          </div>
          <div className="group flex flex-col items-center rounded-xl border border-slate-100 bg-white p-8 text-center transition-all hover:shadow-xl">
            <div className="mb-6 flex h-20 w-full items-center justify-center">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/images/partners/tennet.png"
                alt="TenneT logo"
                className="h-12 object-contain grayscale transition-all group-hover:grayscale-0"
              />
            </div>
            <h3 className="mb-2 text-lg font-bold">TenneT</h3>
            <p className="text-sm text-slate-500">
              Landelijk beheerder van het hoogspanningsnet in Nederland en
              Duitsland.
            </p>
          </div>
        </div>
      </section>

      {/* Certified Installers Section */}
      <section className="bg-sage/30 px-6 py-20 md:px-20 lg:px-40">
        <div className="flex flex-col items-start gap-12 lg:flex-row">
          <div className="lg:w-1/3">
            <h2 className="mb-6 text-3xl font-bold text-primary">
              Gecertificeerde Installateurs
            </h2>
            <p className="mb-6 leading-relaxed text-slate-700">
              Veiligheid en kwaliteit staan centraal. Elke partner die zich bij
              het collectief voegt, ondergaat een streng verificatieproces. Wij
              werken uitsluitend met installateurs die voldoen aan de hoogste
              landelijke normen.
            </p>
            <div className="flex flex-col gap-4">
              <div className="flex items-start gap-3">
                <span className="material-symbols-outlined mt-1 text-primary">
                  check_circle
                </span>
                <div>
                  <p className="text-sm font-bold">Strenge Selectie</p>
                  <p className="text-xs text-slate-500">
                    Alleen de top 5% van installatiebedrijven.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="material-symbols-outlined mt-1 text-primary">
                  check_circle
                </span>
                <div>
                  <p className="text-sm font-bold">Continu Toezicht</p>
                  <p className="text-xs text-slate-500">
                    Regelmatige kwaliteitscontroles op locatie.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="grid w-full grid-cols-2 gap-4 sm:grid-cols-3 lg:w-2/3">
            {/* Primary Partner: Alterion */}
            <div className="col-span-2 flex flex-col justify-between rounded-xl border-2 border-primary/20 bg-white p-6 shadow-sm">
              <div className="mb-8 flex items-start justify-between">
                <div className="flex items-center gap-2 text-2xl font-black text-primary">
                  <span className="material-symbols-outlined text-3xl">
                    bolt
                  </span>
                  ALTERION
                </div>
                <span className="rounded bg-primary px-2 py-1 text-[10px] font-bold uppercase text-white">
                  Hoofdpartner
                </span>
              </div>
              <div>
                <h4 className="font-bold">Alterion Duurzaam</h4>
                <p className="text-sm text-slate-500">
                  Expert in grootschalige zonne-energiesystemen en opslag.
                </p>
              </div>
            </div>
            {/* Sub Partners */}
            <div className="flex flex-col items-center justify-center gap-3 rounded-xl border border-slate-200 bg-white/60 p-6 opacity-70">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-slate-100">
                <span className="material-symbols-outlined text-slate-400">
                  business
                </span>
              </div>
              <div className="font-bold text-slate-400">PARTNER B</div>
            </div>
            <div className="flex flex-col items-center justify-center gap-3 rounded-xl border border-slate-200 bg-white/60 p-6 opacity-70">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-slate-100">
                <span className="material-symbols-outlined text-slate-400">
                  business
                </span>
              </div>
              <div className="font-bold text-slate-400">PARTNER C</div>
            </div>
            <div className="flex flex-col items-center justify-center gap-3 rounded-xl border border-slate-200 bg-white/60 p-6 opacity-70">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-slate-100">
                <span className="material-symbols-outlined text-slate-400">
                  business
                </span>
              </div>
              <div className="font-bold text-slate-400">PARTNER D</div>
            </div>
            <div className="flex flex-col items-center justify-center gap-3 rounded-xl border border-slate-200 bg-white/60 p-6 opacity-70">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-slate-100">
                <span className="material-symbols-outlined text-slate-400">
                  business
                </span>
              </div>
              <div className="font-bold text-slate-400">PARTNER E</div>
            </div>
          </div>
        </div>
      </section>

      {/* Transparency & Quality Section */}
      <section className="px-6 py-20 md:px-20 lg:px-40">
        <div className="relative overflow-hidden rounded-3xl bg-primary p-8 text-white md:p-16">
          <div className="absolute -mr-32 -mt-32 right-0 top-0 h-64 w-64 rounded-full bg-white/5"></div>
          <div className="flex flex-col items-center gap-12 md:flex-row">
            <div className="relative z-10 md:w-1/2">
              <h2 className="mb-6 text-3xl font-bold">
                Transparantie &amp; Kwaliteit
              </h2>
              <p className="mb-8 text-lg text-sage/80">
                Onze certificeringseisen zijn niet onderhandelbaar. Wij hanteren
                strikte landelijke protocollen om de veiligheid van elk project
                te garanderen.
              </p>
              <div className="grid grid-cols-1 gap-4">
                <div className="flex items-center gap-4 rounded-lg border border-white/20 bg-white/10 p-4">
                  <span className="text-xl font-bold">Scope 12</span>
                  <span className="text-sm opacity-80">
                    Verplichte inspectie voor zonnestroominstallaties.
                  </span>
                </div>
                <div className="flex items-center gap-4 rounded-lg border border-white/20 bg-white/10 p-4">
                  <span className="text-xl font-bold">NEN-1010</span>
                  <span className="text-sm opacity-80">
                    Veiligheidsbepalingen voor laagspanningsinstallaties.
                  </span>
                </div>
                <div className="flex items-center gap-4 rounded-lg border border-white/20 bg-white/10 p-4">
                  <span className="text-xl font-bold">VCA**</span>
                  <span className="text-sm opacity-80">
                    Veiligheid, Gezondheid en Milieu Checklist Aannemers.
                  </span>
                </div>
              </div>
            </div>
            <div className="relative z-10 flex justify-center md:w-1/2">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/images/instalateru.jpg"
                alt="Gecertificeerde installateur aan het werk"
                className="aspect-square w-full max-w-sm rounded-2xl object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-6 py-20 text-center md:px-20 lg:px-40">
        <div className="mx-auto flex max-w-3xl flex-col items-center gap-8">
          <h2 className="text-4xl font-bold">Wilt u ook partner worden?</h2>
          <p className="text-lg text-slate-600">
            Wij zijn altijd op zoek naar kwalitatieve installatiebedrijven en
            innovatieve partners die willen bijdragen aan een duurzaam
            Nederland.
          </p>
          <Link
            href="/portaal/registratie"
            className="rounded-xl bg-primary px-10 py-4 text-lg font-bold text-white shadow-lg shadow-primary/20 transition-transform hover:scale-105"
          >
            Aanmelden als Partner
          </Link>
          <p className="text-sm text-slate-400">
            Of neem contact op voor meer informatie over het toelatingsproces.
          </p>
        </div>
      </section>
    </>
  );
}
