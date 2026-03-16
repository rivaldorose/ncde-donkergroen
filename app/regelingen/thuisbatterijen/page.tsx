import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Thuisbatterijen — NCDE",
  description:
    "Alles over thuisbatterijen: slimme opslag voor eigen verbruik. Waarom een thuisbatterij, capaciteit, financieel aspect en geschiktheid van uw woning.",
};

export default function ThuisbatterijenPage() {
  return (
    <>
      {/* Breadcrumb */}
      <div className="bg-white px-4 py-6 md:px-10 lg:px-0">
        <div className="mx-auto flex max-w-[1200px] flex-wrap items-center gap-2">
          <Link
            href="/"
            className="flex items-center gap-1 text-sm font-medium text-primary"
          >
            <span className="material-symbols-outlined text-sm">home</span>{" "}
            Home
          </Link>
          <span className="text-sm text-slate-400">/</span>
          <span className="text-sm font-medium text-slate-600">
            Thuisbatterijen
          </span>
        </div>
      </div>

      {/* Hero */}
      <section className="px-4 py-8 md:px-10 lg:px-0">
        <div className="mx-auto grid max-w-[1200px] grid-cols-1 items-center gap-10 lg:grid-cols-2">
          <div className="flex flex-col gap-6">
            <h1 className="text-4xl font-black leading-tight tracking-tight text-slate-900 lg:text-6xl">
              Thuisbatterijen: Slimme opslag voor eigen verbruik
            </h1>
            <p className="text-lg leading-relaxed text-slate-600">
              Nu de salderingsregeling stap voor stap wordt afgebouwd, is het
              slim om uw eigen opgewekte zonne-energie vast te houden. Met een
              thuisbatterij verhoogt u uw directe verbruik van 30% naar wel 70%,
              waardoor u minder afhankelijk bent van schommelende
              energieprijzen.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="/contact"
                className="rounded-lg bg-primary px-8 py-4 font-bold text-white transition-all hover:shadow-lg"
              >
                Bereken uw voordeel
              </Link>
              <Link
                href="/regelingen"
                className="rounded-lg border border-slate-200 bg-white px-8 py-4 font-bold transition-all hover:bg-slate-50"
              >
                Bekijk modellen
              </Link>
            </div>
          </div>
          <div className="overflow-hidden rounded-2xl shadow-2xl">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/6a2fe05d-3e79-487b-857b-02a335bf404d.jpg"
              alt="Thuisbatterij systeem"
              className="aspect-[4/3] w-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* Waarom een thuisbatterij? */}
      <section className="px-4 py-16 md:px-10 lg:px-0">
        <div className="mx-auto max-w-[1200px]">
          <div className="rounded-3xl bg-sage/20 p-8 md:p-12">
            <h2 className="mb-8 text-3xl font-bold text-primary">
              Waarom een thuisbatterij?
            </h2>
            <div className="grid gap-12 md:grid-cols-2">
              <div className="space-y-4">
                <p className="leading-relaxed text-slate-700">
                  Een thuisbatterij is een cruciale schakel in de
                  energietransitie. Het stelt u in staat om de energie die uw
                  zonnepanelen overdag opwekken op te slaan voor gebruik in de
                  avond en nacht, wanneer de zon niet schijnt maar uw verbruik
                  vaak het hoogst is.
                </p>
                <ul className="space-y-4">
                  <li className="flex gap-3">
                    <span className="material-symbols-outlined font-bold text-primary">
                      check_circle
                    </span>
                    <span className="font-medium">
                      Maximaliseer eigen verbruik: Minder stroom terugleveren
                      tegen lage tarieven.
                    </span>
                  </li>
                  <li className="flex gap-3">
                    <span className="material-symbols-outlined font-bold text-primary">
                      check_circle
                    </span>
                    <span className="font-medium">
                      Noodstroomvoorziening: Sommige systemen bieden backup bij
                      stroomuitval.
                    </span>
                  </li>
                  <li className="flex gap-3">
                    <span className="material-symbols-outlined font-bold text-primary">
                      check_circle
                    </span>
                    <span className="font-medium">
                      Netontlasting: Help mee aan een stabieler
                      elektriciteitsnet in Nederland.
                    </span>
                  </li>
                </ul>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="rounded-xl border border-sage bg-white p-6 shadow-sm">
                  <div className="mb-1 text-3xl font-black text-primary">
                    70%
                  </div>
                  <div className="text-xs font-bold uppercase tracking-wider text-slate-500">
                    Eigen verbruik
                  </div>
                </div>
                <div className="rounded-xl border border-sage bg-white p-6 shadow-sm">
                  <div className="mb-1 text-3xl font-black text-primary">
                    10jr
                  </div>
                  <div className="text-xs font-bold uppercase tracking-wider text-slate-500">
                    Gem. Garantie
                  </div>
                </div>
                <div className="rounded-xl border border-sage bg-white p-6 shadow-sm">
                  <div className="mb-1 text-3xl font-black text-primary">
                    0%
                  </div>
                  <div className="text-xs font-bold uppercase tracking-wider text-slate-500">
                    BTW tarief
                  </div>
                </div>
                <div className="rounded-xl border border-sage bg-white p-6 shadow-sm">
                  <div className="mb-1 text-3xl font-black text-primary">
                    CO2
                  </div>
                  <div className="text-xs font-bold uppercase tracking-wider text-slate-500">
                    Lager footprint
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Capaciteit en Rendement */}
      <section className="px-4 py-16 md:px-10 lg:px-0">
        <div className="mx-auto max-w-[1200px]">
          <h2 className="mb-4 text-3xl font-bold text-slate-900">
            Capaciteit en Rendement
          </h2>
          <p className="mb-8 max-w-2xl text-slate-600">
            De juiste grootte van uw thuisbatterij hangt af van uw jaarlijkse
            energieverbruik en de grootte van uw zonnestroomsysteem.
          </p>
          <div className="overflow-hidden rounded-xl border border-slate-200 shadow-lg">
            <table className="w-full border-collapse text-left">
              <thead>
                <tr className="bg-slate-50">
                  <th className="border-b border-slate-200 p-5 font-bold">
                    Capaciteit
                  </th>
                  <th className="border-b border-slate-200 p-5 font-bold">
                    Geschikt voor
                  </th>
                  <th className="border-b border-slate-200 p-5 font-bold">
                    Typisch gebruik
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                <tr className="hover:bg-slate-50">
                  <td className="p-5 font-bold text-primary">5 kWh</td>
                  <td className="p-5">Kleine huishoudens (1-2 pers)</td>
                  <td className="p-5">
                    Basisverlichting, koelkast, laptop, TV gedurende de nacht.
                  </td>
                </tr>
                <tr className="hover:bg-slate-50">
                  <td className="p-5 font-bold text-primary">10 kWh</td>
                  <td className="p-5">Gemiddeld gezin (3-4 pers)</td>
                  <td className="p-5">
                    Volledige avonddekking inclusief koken en wassen op
                    zonne-energie.
                  </td>
                </tr>
                <tr className="hover:bg-slate-50">
                  <td className="p-5 font-bold text-primary">15 kWh +</td>
                  <td className="p-5">Grote woningen / Warmtepompen</td>
                  <td className="p-5">
                    Hoge energiebehoefte of wens voor maximale autonomie.
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Financieel + Geschiktheid */}
      <section className="border-t border-slate-200 px-4 py-16 md:px-10 lg:px-0">
        <div className="mx-auto grid max-w-[1200px] gap-12 md:grid-cols-2">
          <div className="space-y-6">
            <h2 className="text-3xl font-bold">Financieel aspect</h2>
            <div className="space-y-4 text-slate-700">
              <p>
                Op dit moment is er in Nederland geen landelijke
                aanschafsubsidie voor thuisbatterijen. Wel zijn er gunstige
                fiscale regelingen waardoor de investering steeds interessanter
                wordt.
              </p>
              <div className="rounded-xl border-l-4 border-primary bg-white p-6">
                <h4 className="mb-2 font-bold text-primary">BTW-teruggave</h4>
                <p className="text-sm">
                  Sinds 2024 kunt u onder bepaalde voorwaarden de 21% BTW op de
                  aanschaf en installatie van een thuisbatterij terugvragen via
                  de Belastingdienst, mits u een dynamisch energiecontract heeft
                  en handelt op de energiemarkt.
                </p>
              </div>
              <p className="text-sm italic">
                Let op: De regelgeving rondom energie verandert regelmatig. Laat
                u altijd adviseren door een financieel expert of de NCDE
                adviseurs.
              </p>
            </div>
          </div>
          <div className="space-y-6">
            <h2 className="text-3xl font-bold">Is uw woning geschikt?</h2>
            <p className="text-slate-700">
              Controleer deze technische vereisten voor installatie:
            </p>
            <div className="space-y-3">
              <div className="flex items-center gap-4 rounded-lg bg-slate-50 p-4">
                <span className="material-symbols-outlined text-primary">
                  bolt
                </span>
                <div>
                  <p className="font-bold">Hybride Omvormer</p>
                  <p className="text-xs text-slate-500">
                    Uw huidige omvormer moet geschikt zijn voor accu-opslag of
                    worden vervangen.
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-4 rounded-lg bg-slate-50 p-4">
                <span className="material-symbols-outlined text-primary">
                  square_foot
                </span>
                <div>
                  <p className="font-bold">Ruimte &amp; Montage</p>
                  <p className="text-xs text-slate-500">
                    Een vrije wand of vloerruimte in een vorstvrije, geventileerde
                    ruimte.
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-4 rounded-lg bg-slate-50 p-4">
                <span className="material-symbols-outlined text-primary">
                  router
                </span>
                <div>
                  <p className="font-bold">Internetverbinding</p>
                  <p className="text-xs text-slate-500">
                    Stabiele WiFi of bekabeld internet voor monitoring en software
                    updates.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-4 py-20 md:px-10 lg:px-0">
        <div className="mx-auto max-w-[1200px]">
          <div className="relative overflow-hidden rounded-3xl bg-primary p-10 text-center text-white md:p-20">
            <div className="relative z-10">
              <h2 className="mb-6 text-4xl font-black">Advies nodig?</h2>
              <p className="mx-auto mb-10 max-w-xl text-lg text-sage opacity-90">
                Onze adviseurs helpen u graag bij het berekenen van de optimale
                batterijcapaciteit voor uw persoonlijke situatie. Geheel
                vrijblijvend.
              </p>
              <Link
                href="/contact"
                className="inline-block rounded-xl bg-white px-10 py-5 text-lg font-black text-primary transition-all hover:bg-sage"
              >
                Plan een adviesgesprek
              </Link>
            </div>
            <div className="absolute right-0 top-0 p-10 opacity-10">
              <span className="material-symbols-outlined text-[150px]">
                energy_savings_leaf
              </span>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
