import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Noodpakket — NCDE",
  description:
    "Noodvoorziening en stroomuitval informatie. Hoe beschermt u uw huishouden bij een langdurige stroomstoring.",
};

export default function NoodpakketPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative flex h-[400px] items-center justify-center overflow-hidden bg-primary">
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage:
              "radial-gradient(circle at 2px 2px, white 1px, transparent 0)",
            backgroundSize: "40px 40px",
          }}
        ></div>
        <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/60 to-transparent"></div>
        <div className="relative z-10 max-w-4xl px-6 text-center">
<h1 className="mb-6 text-4xl font-extrabold leading-tight text-white md:text-6xl">
            Voorbereiding op energieonzekerheid
          </h1>
          <p className="mx-auto max-w-2xl text-xl text-slate-100/90">
            Wees voorbereid op mogelijke stroomuitval en netinstabiliteit. Een
            goed noodplan helpt u rustig en veilig te blijven tijdens onvoorziene
            situaties.
          </p>
        </div>
      </section>

      {/* Checklist Section */}
      <section className="mx-auto max-w-5xl px-6 py-16">
        <div className="grid gap-12 md:grid-cols-12">
          <div className="md:col-span-7">
            <h2 className="mb-8 flex items-center gap-3 text-3xl font-bold text-slate-900">
              <span className="material-symbols-outlined text-4xl text-primary">
                checklist
              </span>
              Wat te doen bij een stroomuitval?
            </h2>
            <div className="space-y-4">
              <div className="flex items-start gap-4 rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
                <span className="material-symbols-outlined mt-0.5 text-primary">
                  electric_meter
                </span>
                <div>
                  <p className="font-semibold text-slate-800">
                    Controleer uw zekeringkast
                  </p>
                  <p className="text-sm text-slate-500">
                    Sluit eerst interne storingen in uw eigen woning uit.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4 rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
                <span className="material-symbols-outlined mt-0.5 text-primary">
                  kitchen
                </span>
                <div>
                  <p className="font-semibold text-slate-800">
                    Houd koeling gesloten
                  </p>
                  <p className="text-sm text-slate-500">
                    Open de koelkast en vriezer zo min mogelijk om bederf te
                    voorkomen.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4 rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
                <span className="material-symbols-outlined mt-0.5 text-primary">
                  power_off
                </span>
                <div>
                  <p className="font-semibold text-slate-800">
                    Schakel elektronica uit
                  </p>
                  <p className="text-sm text-slate-500">
                    Bescherm gevoelige apparatuur tegen piekspanning bij herstel.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4 rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
                <span className="material-symbols-outlined mt-0.5 text-primary">
                  flashlight_on
                </span>
                <div>
                  <p className="font-semibold text-slate-800">
                    Veilige verlichting
                  </p>
                  <p className="text-sm text-slate-500">
                    Gebruik LED-zaklampen in plaats van kaarsen om brandgevaar te
                    minimaliseren.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4 rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
                <span className="material-symbols-outlined mt-0.5 text-primary">
                  radio
                </span>
                <div>
                  <p className="font-semibold text-slate-800">
                    Blijf geïnformeerd
                  </p>
                  <p className="text-sm text-slate-500">
                    Luister naar de regionale calamiteitenzender via een
                    batterijradio.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="md:col-span-5">
            <div className="sticky top-24 rounded-2xl border border-primary/20 bg-primary/5 p-8">
              <h3 className="mb-4 text-xl font-bold text-primary">
                Noodnummer 112
              </h3>
              <p className="mb-6 text-slate-600">
                Bel alleen 112 bij direct levensgevaar. Voor algemene storingen
                raadpleegt u de website van uw netbeheerder.
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-3 text-slate-700">
                  <span className="material-symbols-outlined text-primary">
                    phone_in_talk
                  </span>
                  <span className="font-medium">Gaslek: 0800-9009</span>
                </div>
                <div className="flex items-center gap-3 text-slate-700">
                  <span className="material-symbols-outlined text-primary">
                    language
                  </span>
                  <span className="font-medium">stroomstoring.nl</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Noodpakket Section */}
      <section className="bg-slate-100 px-6 py-16">
        <div className="mx-auto max-w-5xl">
          <h2 className="mb-4 text-center text-3xl font-bold text-slate-900">
            Het Noodpakket
          </h2>
          <p className="mx-auto mb-12 max-w-2xl text-center text-slate-600">
            Zorg dat u deze essentiële benodigdheden op een vaste, makkelijk
            bereikbare plek in huis bewaart.
          </p>
          <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
            <div className="rounded-xl border border-slate-200 bg-white p-6 text-center shadow-sm">
              <span className="material-symbols-outlined mb-4 text-4xl text-primary">
                water_drop
              </span>
              <p className="font-bold">Water</p>
              <p className="text-xs text-slate-500">
                3 liter per persoon per dag
              </p>
            </div>
            <div className="rounded-xl border border-slate-200 bg-white p-6 text-center shadow-sm">
              <span className="material-symbols-outlined mb-4 text-4xl text-primary">
                radio
              </span>
              <p className="font-bold">Radio</p>
              <p className="text-xs text-slate-500">
                Op batterijen of opwindbaar
              </p>
            </div>
            <div className="rounded-xl border border-slate-200 bg-white p-6 text-center shadow-sm">
              <span className="material-symbols-outlined mb-4 text-4xl text-primary">
                flashlight_on
              </span>
              <p className="font-bold">Zaklamp</p>
              <p className="text-xs text-slate-500">
                Inclusief reservebatterijen
              </p>
            </div>
            <div className="rounded-xl border border-slate-200 bg-white p-6 text-center shadow-sm">
              <span className="material-symbols-outlined mb-4 text-4xl text-primary">
                medical_services
              </span>
              <p className="font-bold">EHBO-kit</p>
              <p className="text-xs text-slate-500">Met basismedicijnen</p>
            </div>
            <div className="rounded-xl border border-slate-200 bg-white p-6 text-center shadow-sm">
              <span className="material-symbols-outlined mb-4 text-4xl text-primary">
                blanket
              </span>
              <p className="font-bold">Dekens</p>
              <p className="text-xs text-slate-500">
                Isolatie- of warme dekens
              </p>
            </div>
            <div className="rounded-xl border border-slate-200 bg-white p-6 text-center shadow-sm">
              <span className="material-symbols-outlined mb-4 text-4xl text-primary">
                nutrition
              </span>
              <p className="font-bold">Houdbaar eten</p>
              <p className="text-xs text-slate-500">Minimaal voor 3 dagen</p>
            </div>
            <div className="rounded-xl border border-slate-200 bg-white p-6 text-center shadow-sm">
              <span className="material-symbols-outlined mb-4 text-4xl text-primary">
                battery_charging_full
              </span>
              <p className="font-bold">Powerbank</p>
              <p className="text-xs text-slate-500">
                Altijd volledig opgeladen
              </p>
            </div>
            <div className="rounded-xl border border-slate-200 bg-white p-6 text-center shadow-sm">
              <span className="material-symbols-outlined mb-4 text-4xl text-primary">
                payments
              </span>
              <p className="font-bold">Contant geld</p>
              <p className="text-xs text-slate-500">
                Voor als PIN niet werkt
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Rol van de Overheid & Netbeheerders */}
      <section className="mx-auto max-w-5xl px-6 py-20">
        <div className="flex flex-col items-center gap-12 md:flex-row">
          <div className="flex-1">
            <h2 className="mb-6 text-3xl font-bold text-slate-900">
              Rol van de Overheid &amp; Netbeheerders
            </h2>
            <div>
              <p className="mb-4 leading-relaxed text-slate-600">
                Bij grootschalige stroomuitval treden nationale
                veiligheidsprotocollen in werking. De overheid coördineert via de
                Veiligheidsregio&apos;s de hulpverlening en
                informatievoorziening.
              </p>
              <p className="mb-4 leading-relaxed text-slate-600">
                Netbeheerders zoals TenneT en regionale partijen werken direct
                aan het herstel van de balans op het stroomnet. In extreme
                gevallen kan er sprake zijn van &apos;afschakelplannen&apos; om
                een totale blackout te voorkomen.
              </p>
              <ul className="mt-6 space-y-4">
                <li className="flex gap-3">
                  <span className="material-symbols-outlined text-primary">
                    account_balance
                  </span>
                  <span className="text-slate-700">
                    <strong>Crisis Management:</strong> Centrale regie door het
                    Ministerie van Justitie en Veiligheid.
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="material-symbols-outlined text-primary">
                    broadcast_on_home
                  </span>
                  <span className="text-slate-700">
                    <strong>Communicatie:</strong> NL-Alert en regionale zenders
                    zijn de primaire informatiekanalen.
                  </span>
                </li>
              </ul>
            </div>
          </div>
          <div className="w-full flex-1">
            <div className="relative aspect-video overflow-hidden rounded-2xl shadow-2xl">
              <div className="absolute inset-0 flex items-center justify-center bg-primary/20">
                <span className="material-symbols-outlined text-6xl text-white">
                  hub
                </span>
              </div>
              <div className="absolute inset-0 flex items-end bg-gradient-to-t from-black/60 to-transparent p-6">
                <p className="text-sm font-medium italic text-white">
                  Visualisatie van het landelijke hoogspanningsnetwerk en
                  herstelpunten.
                </p>
              </div>
              <div className="h-full w-full bg-slate-200"></div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
