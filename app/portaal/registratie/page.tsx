import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Registratie Aanvragen — NCDE Network",
  description:
    "Sluit u aan bij het NCDE netwerk als duurzame energie professional.",
};

export default function RegistratiePage() {
  return (
    <>
      {/* Hero Section */}
      <div className="relative h-64 w-full overflow-hidden bg-primary">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-40"
          style={{
            backgroundImage:
              "url('https://lh3.googleusercontent.com/aida-public/AB6AXuDZC2yOaPmBovmwiPdMtyn1kevXZNkQF9WrQ85_7-vHbEdfegywUoXQU9WNQJowrUXfrvSO5_ks631q2MHVpU7MpGvzmTadUaDy364tlNUKH5nzzh04U0FXIxNhDOsXsJA_ue8Pzfm696RU6oMF7a9YCfT4SkEYUB98gBx47k--_dW9vTjs37cyl2_nxemEV2tXPL7ATFSfiiOCo70llFPIqQ1hIzJAmR_lKRD3FwoHMIpotOM0h0lrbtoXI8d3wgUY7U7rj49EQ4P2')",
          }}
        ></div>
        <div className="relative mx-auto flex h-full max-w-5xl flex-col justify-end px-6 pb-8">
          <h1 className="text-4xl font-black leading-tight tracking-tight text-white md:text-5xl">
            Word Partner van NCDE
          </h1>
          <p className="mt-2 max-w-2xl text-lg font-medium text-sage">
            Sluit u aan bij het grootste netwerk van duurzame professionals in
            Nederland.
          </p>
        </div>
      </div>

      <div className="mx-auto grid max-w-5xl grid-cols-1 gap-12 px-6 py-12 lg:grid-cols-3">
        {/* Left: Registration Form */}
        <div className="space-y-8 lg:col-span-2">
          <section className="rounded-xl border border-primary/5 bg-white p-8 shadow-sm">
            <h2 className="mb-6 flex items-center gap-2 text-2xl font-bold text-primary">
              <span className="material-symbols-outlined">assignment</span>
              Bedrijfsgegevens
            </h2>
            <form className="space-y-6">
              <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                <div className="flex flex-col gap-2">
                  <label className="text-sm font-semibold text-slate-700">
                    Bedrijfsnaam
                  </label>
                  <input
                    className="h-12 rounded-lg border-primary/20 bg-background-light px-4 focus:border-primary focus:ring-primary"
                    placeholder="Bijv. Duurzaam BV"
                    type="text"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-sm font-semibold text-slate-700">
                    KvK Nummer
                  </label>
                  <input
                    className="h-12 rounded-lg border-primary/20 bg-background-light px-4 focus:border-primary focus:ring-primary"
                    placeholder="8-cijferig nummer"
                    type="text"
                  />
                </div>
              </div>

              <h2 className="flex items-center gap-2 border-t border-primary/5 pt-6 text-2xl font-bold text-primary">
                <span className="material-symbols-outlined">person</span>
                Contactpersoon
              </h2>
              <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                <div className="flex flex-col gap-2 md:col-span-2">
                  <label className="text-sm font-semibold text-slate-700">
                    Naam Contactpersoon
                  </label>
                  <input
                    className="h-12 rounded-lg border-primary/20 bg-background-light px-4 focus:border-primary focus:ring-primary"
                    placeholder="Volledige naam"
                    type="text"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-sm font-semibold text-slate-700">
                    E-mailadres
                  </label>
                  <input
                    className="h-12 rounded-lg border-primary/20 bg-background-light px-4 focus:border-primary focus:ring-primary"
                    placeholder="zakelijk@email.nl"
                    type="email"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-sm font-semibold text-slate-700">
                    Telefoonnummer
                  </label>
                  <input
                    className="h-12 rounded-lg border-primary/20 bg-background-light px-4 focus:border-primary focus:ring-primary"
                    placeholder="06 12345678"
                    type="tel"
                  />
                </div>
              </div>

              <h2 className="flex items-center gap-2 border-t border-primary/5 pt-6 text-2xl font-bold text-primary">
                <span className="material-symbols-outlined">engineering</span>
                Expertisegebied
              </h2>
              <div className="flex flex-col gap-4">
                <p className="text-sm text-slate-600">
                  Selecteer uw primaire vakgebieden (meerdere opties mogelijk):
                </p>
                <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                  <label className="flex cursor-pointer items-center gap-3 rounded-lg border border-primary/10 bg-sage/30 p-4 transition-colors hover:bg-sage/50">
                    <input
                      className="size-5 rounded text-primary focus:ring-primary"
                      type="checkbox"
                    />
                    <span className="font-medium">Zonnepanelen (PV)</span>
                  </label>
                  <label className="flex cursor-pointer items-center gap-3 rounded-lg border border-primary/10 bg-sage/30 p-4 transition-colors hover:bg-sage/50">
                    <input
                      className="size-5 rounded text-primary focus:ring-primary"
                      type="checkbox"
                    />
                    <span className="font-medium">Warmtepompen</span>
                  </label>
                  <label className="flex cursor-pointer items-center gap-3 rounded-lg border border-primary/10 bg-sage/30 p-4 transition-colors hover:bg-sage/50">
                    <input
                      className="size-5 rounded text-primary focus:ring-primary"
                      type="checkbox"
                    />
                    <span className="font-medium">Isolatie</span>
                  </label>
                  <label className="flex cursor-pointer items-center gap-3 rounded-lg border border-primary/10 bg-sage/30 p-4 transition-colors hover:bg-sage/50">
                    <input
                      className="size-5 rounded text-primary focus:ring-primary"
                      type="checkbox"
                    />
                    <span className="font-medium">Laadpalen</span>
                  </label>
                </div>
              </div>

              <div className="pt-8">
                <button
                  className="flex w-full items-center justify-center gap-2 rounded-lg bg-primary px-8 py-4 font-bold text-white shadow-lg transition-all hover:scale-[1.02] hover:shadow-xl active:scale-95 md:w-auto md:min-w-[240px]"
                  type="submit"
                >
                  <span>Registratie Aanvragen</span>
                  <span className="material-symbols-outlined">send</span>
                </button>
                <p className="mt-4 text-xs italic text-slate-500">
                  Na verzending nemen wij binnen 2 werkdagen contact met u op
                  voor de validatie van uw account.
                </p>
              </div>
            </form>
          </section>
        </div>

        {/* Right: Benefits Sidebar */}
        <div className="space-y-6">
          <div className="rounded-xl border border-primary/10 bg-sage p-6 shadow-sm">
            <h3 className="mb-4 flex items-center gap-2 text-xl font-bold text-primary">
              <span className="material-symbols-outlined">verified</span>
              Waarom NCDE?
            </h3>
            <ul className="space-y-4">
              <li className="flex gap-3">
                <span className="material-symbols-outlined font-bold text-primary">
                  check_circle
                </span>
                <div>
                  <p className="text-sm font-bold text-primary">
                    Centrale Documentatie
                  </p>
                  <p className="text-xs text-primary/80">
                    Direct toegang tot alle technische specificaties en
                    installatiehandleidingen.
                  </p>
                </div>
              </li>
              <li className="flex gap-3">
                <span className="material-symbols-outlined font-bold text-primary">
                  check_circle
                </span>
                <div>
                  <p className="text-sm font-bold text-primary">
                    Certificering Tracking
                  </p>
                  <p className="text-xs text-primary/80">
                    Houd al uw bedrijfs- en werknemer certificeringen
                    overzichtelijk op één plek.
                  </p>
                </div>
              </li>
              <li className="flex gap-3">
                <span className="material-symbols-outlined font-bold text-primary">
                  check_circle
                </span>
                <div>
                  <p className="text-sm font-bold text-primary">
                    Project Management
                  </p>
                  <p className="text-xs text-primary/80">
                    Efficiënte workflow voor het aanmelden en opleveren van
                    duurzame projecten.
                  </p>
                </div>
              </li>
              <li className="flex gap-3">
                <span className="material-symbols-outlined font-bold text-primary">
                  check_circle
                </span>
                <div>
                  <p className="text-sm font-bold text-primary">
                    Exclusieve Kennisbank
                  </p>
                  <p className="text-xs text-primary/80">
                    Regelmatige updates over wet- en regelgeving in de
                    verduurzamingssector.
                  </p>
                </div>
              </li>
            </ul>
          </div>

          <div className="rounded-xl bg-primary p-6 text-white">
            <h3 className="mb-2 text-lg font-bold">Hulp nodig?</h3>
            <p className="mb-4 text-sm text-sage">
              Heeft u vragen over het registratieproces? Ons support team staat
              voor u klaar.
            </p>
            <Link
              className="flex items-center gap-2 font-semibold transition-colors hover:text-sage"
              href="tel:+31201234567"
            >
              <span className="material-symbols-outlined">call</span>
              +31 (0)20 123 45 67
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
