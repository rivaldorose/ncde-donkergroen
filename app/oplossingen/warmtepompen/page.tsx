import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Warmtepompen — NCDE",
  description:
    "Alles over warmtepompen: hoe ze werken, welke types er zijn, en wat de voordelen zijn voor uw woning.",
};

export default function WarmtepompenPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-primary py-24 lg:py-36">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
          style={{
            backgroundImage:
              "url('/images/warmte pomp.jpg')",
          }}
        ></div>
        <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-12">
          <div className="max-w-3xl">
            <nav className="mb-6 flex items-center gap-2 text-sm text-white/60">
              <Link className="hover:underline" href="/">
                Home
              </Link>
              <span className="material-symbols-outlined text-xs">
                chevron_right
              </span>
              <Link className="hover:underline" href="/oplossingen">
                Oplossingen
              </Link>
              <span className="material-symbols-outlined text-xs">
                chevron_right
              </span>
              <span className="font-medium text-white">Warmtepompen</span>
            </nav>
            <h1 className="mb-6 text-4xl font-black leading-tight text-white lg:text-6xl">
              Warmtepompen
            </h1>
            <p className="max-w-2xl text-lg leading-relaxed text-white/80 lg:text-xl">
              De transitie naar gasvrij verwarmen. Ontdek hoe warmtepompen
              werken, welke types er zijn en wat dit betekent voor uw woning en
              energierekening.
            </p>
          </div>
        </div>
      </section>

      {/* Introductie */}
      <section className="bg-white py-24">
        <div className="mx-auto max-w-4xl px-6 lg:px-12">
          <h2 className="mb-8 text-3xl font-black text-primary">
            Wat is een warmtepomp?
          </h2>
          <p className="mb-6 text-lg leading-relaxed text-neutral-700">
            Een warmtepomp haalt warmte uit de buitenlucht, de bodem of het
            grondwater en gebruikt deze om uw woning te verwarmen. Het systeem
            werkt op elektriciteit en is daardoor aanzienlijk duurzamer dan een
            traditionele cv-ketel op aardgas. Voor elke kilowattuur
            elektriciteit die een warmtepomp verbruikt, levert deze gemiddeld
            drie tot vijf kilowattuur warmte op.
          </p>
          <p className="mb-6 text-lg leading-relaxed text-neutral-700">
            De Nederlandse overheid stimuleert de overstap naar warmtepompen als
            onderdeel van de bredere energietransitie. Via subsidies zoals de
            ISDE-regeling kunnen huiseigenaren een aanzienlijk deel van de
            aanschafkosten terugkrijgen.
          </p>
        </div>
      </section>

      {/* Types warmtepompen */}
      <section className="bg-background-light py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-12">
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-3xl font-black text-primary lg:text-4xl">
              Types warmtepompen
            </h2>
            <p className="mx-auto max-w-2xl text-lg text-neutral-600">
              Er zijn verschillende soorten warmtepompen, elk geschikt voor een
              ander type woning en isolatiegraad.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            <div className="rounded-xl border border-primary/5 bg-white p-8 transition-all hover:shadow-xl hover:shadow-primary/5">
              <span className="material-symbols-outlined mb-4 text-4xl text-primary">
                heat_pump
              </span>
              <h3 className="mb-3 text-xl font-bold">
                Lucht-water warmtepomp
              </h3>
              <p className="text-sm leading-relaxed text-neutral-600">
                Haalt warmte uit de buitenlucht en geeft deze af via
                radiatoren of vloerverwarming. De meest gekozen optie voor
                bestaande woningen met goede isolatie.
              </p>
            </div>
            <div className="rounded-xl border border-primary/5 bg-white p-8 transition-all hover:shadow-xl hover:shadow-primary/5">
              <span className="material-symbols-outlined mb-4 text-4xl text-primary">
                water_drop
              </span>
              <h3 className="mb-3 text-xl font-bold">
                Bodem-water warmtepomp
              </h3>
              <p className="text-sm leading-relaxed text-neutral-600">
                Gebruikt de constante temperatuur van de bodem via een
                bodemlus. Hoger rendement dan lucht-water, maar vereist meer
                installatiewerk en ruimte in de tuin.
              </p>
            </div>
            <div className="rounded-xl border border-primary/5 bg-white p-8 transition-all hover:shadow-xl hover:shadow-primary/5">
              <span className="material-symbols-outlined mb-4 text-4xl text-primary">
                mode_heat
              </span>
              <h3 className="mb-3 text-xl font-bold">Hybride warmtepomp</h3>
              <p className="text-sm leading-relaxed text-neutral-600">
                Combineert een warmtepomp met uw bestaande cv-ketel. Ideaal
                voor minder goed ge&iuml;soleerde woningen als tussenstap naar
                volledig gasvrij.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Voordelen */}
      <section className="bg-white py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-12">
          <div className="flex flex-col items-center gap-16 lg:flex-row">
            <div className="lg:w-1/2">
              <h2 className="mb-6 text-3xl font-black text-primary lg:text-4xl">
                Voordelen van een warmtepomp
              </h2>
              <ul className="space-y-6">
                <li className="flex items-start gap-4">
                  <span className="material-symbols-outlined mt-1 text-accent">
                    check_circle
                  </span>
                  <div>
                    <h4 className="font-bold">Lagere energiekosten</h4>
                    <p className="text-sm text-neutral-600">
                      Een warmtepomp verbruikt tot 75% minder energie dan een
                      traditionele cv-ketel, wat direct merkbaar is op uw
                      energierekening.
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <span className="material-symbols-outlined mt-1 text-accent">
                    check_circle
                  </span>
                  <div>
                    <h4 className="font-bold">Duurzaam &amp; toekomstbestendig</h4>
                    <p className="text-sm text-neutral-600">
                      Geen aardgasverbruik meer. In combinatie met
                      zonnepanelen kunt u vrijwel klimaatneutraal verwarmen.
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <span className="material-symbols-outlined mt-1 text-accent">
                    check_circle
                  </span>
                  <div>
                    <h4 className="font-bold">Verwarmen &eacute;n koelen</h4>
                    <p className="text-sm text-neutral-600">
                      Veel warmtepompen kunnen in de zomer ook koelen, zodat
                      u het hele jaar door een comfortabel binnenklimaat heeft.
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <span className="material-symbols-outlined mt-1 text-accent">
                    check_circle
                  </span>
                  <div>
                    <h4 className="font-bold">Hogere woningwaarde</h4>
                    <p className="text-sm text-neutral-600">
                      Een warmtepomp draagt bij aan een beter energielabel,
                      wat de marktwaarde van uw woning verhoogt.
                    </p>
                  </div>
                </li>
              </ul>
            </div>
            <div className="w-full lg:w-1/2">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/images/warmte pomp.jpg"
                alt="Warmtepomp naast een woning"
                className="h-full w-full rounded-2xl object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Subsidies */}
      <section className="bg-background-light py-24">
        <div className="mx-auto max-w-4xl px-6 lg:px-12">
          <h2 className="mb-8 text-3xl font-black text-primary">
            Subsidies &amp; regelingen
          </h2>
          <p className="mb-6 text-lg leading-relaxed text-neutral-700">
            De overheid biedt via de ISDE-regeling (Investeringssubsidie
            Duurzame Energie en Energiebesparing) subsidie voor de aanschaf van
            een warmtepomp. Afhankelijk van het type warmtepomp en de
            capaciteit kunt u tot enkele duizenden euro&apos;s subsidie
            ontvangen.
          </p>
          <p className="mb-6 text-lg leading-relaxed text-neutral-700">
            Daarnaast komen huiseigenaren met een lager inkomen mogelijk in
            aanmerking voor aanvullende gemeentelijke subsidies of de
            SEEH-regeling (Subsidie Energiebesparing Eigen Huis).
          </p>
          <Link
            href="/regelingen"
            className="inline-flex items-center gap-2 font-bold text-primary hover:underline"
          >
            Bekijk alle regelingen
            <span className="material-symbols-outlined text-sm">
              arrow_forward
            </span>
          </Link>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20">
        <div className="mx-auto max-w-5xl px-6 lg:px-12">
          <div className="rounded-3xl border border-primary/10 bg-accent-soft p-10 text-center lg:p-16">
            <h2 className="mb-6 text-3xl font-black text-primary lg:text-4xl">
              Benieuwd of een warmtepomp bij uw woning past?
            </h2>
            <p className="mx-auto mb-10 max-w-2xl text-lg text-primary/70">
              Neem contact op voor een vrijblijvend adviesgesprek. Onze experts
              bekijken samen met u de mogelijkheden voor uw specifieke situatie.
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
