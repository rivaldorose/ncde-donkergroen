import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Beveiligd Inloggen — NCDE Portaal",
  description:
    "Log in op het NCDE Portaal voor duurzame energie professionals.",
};

export default function PortaalPage() {
  return (
    <div className="flex min-h-[calc(100vh-73px)] flex-col">
      <main className="flex flex-grow items-center justify-center p-4 sm:p-6 lg:p-8">
        <div className="w-full max-w-[480px] space-y-8">
          <div className="space-y-2 text-center">
            <h1 className="text-3xl font-bold tracking-tight text-slate-900">
              Beveiligd Inloggen
            </h1>
            <p className="font-medium text-primary/70">
              Nederlands Collectief Duurzame Energie
            </p>
          </div>

          <div className="rounded-xl border border-primary/10 bg-white p-8 shadow-xl shadow-primary/5">
            <form className="space-y-6">
              <div className="space-y-2">
                <label
                  className="block text-sm font-semibold text-slate-700"
                  htmlFor="username"
                >
                  Gebruikersnaam of e-mailadres
                </label>
                <div className="relative">
                  <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-primary/40">
                    <span className="material-symbols-outlined text-xl">
                      person
                    </span>
                  </span>
                  <input
                    className="block w-full rounded-lg border border-primary/20 bg-background-light/30 py-3 pl-10 pr-3 transition-all placeholder:text-slate-400 focus:border-transparent focus:ring-2 focus:ring-primary"
                    id="username"
                    name="username"
                    placeholder="naam@organisatie.nl"
                    type="text"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <label
                    className="block text-sm font-semibold text-slate-700"
                    htmlFor="password"
                  >
                    Wachtwoord
                  </label>
                  <span className="cursor-pointer text-sm font-medium text-primary hover:underline">
                    Wachtwoord vergeten?
                  </span>
                </div>
                <div className="relative flex items-stretch">
                  <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-primary/40">
                    <span className="material-symbols-outlined text-xl">
                      lock
                    </span>
                  </span>
                  <input
                    className="block w-full rounded-lg border border-primary/20 bg-background-light/30 py-3 pl-10 pr-12 transition-all placeholder:text-slate-400 focus:border-transparent focus:ring-2 focus:ring-primary"
                    id="password"
                    name="password"
                    placeholder="Voer uw wachtwoord in"
                    type="password"
                  />
                  <button
                    className="absolute inset-y-0 right-0 flex items-center pr-3 text-primary/40 transition-colors hover:text-primary"
                    type="button"
                  >
                    <span className="material-symbols-outlined text-xl">
                      visibility
                    </span>
                  </button>
                </div>
              </div>

              <div className="flex items-center gap-3 rounded-lg border border-primary/10 bg-primary/5 p-4">
                <span className="material-symbols-outlined text-2xl text-primary">
                  verified_user
                </span>
                <div className="text-xs leading-relaxed text-slate-600">
                  <span className="mb-0.5 block font-bold text-primary">
                    Extra Beveiliging
                  </span>
                  Na het inloggen kan u gevraagd worden om een verificatiecode
                  via uw gekoppelde mobiele apparaat (2FA).
                </div>
              </div>

              <button
                className="flex w-full transform items-center justify-center gap-2 rounded-lg bg-primary py-4 font-bold text-white shadow-lg shadow-primary/20 transition-all hover:bg-primary/90 active:scale-[0.98]"
                type="submit"
              >
                <span className="material-symbols-outlined">login</span>
                Beveiligd Inloggen
              </button>
            </form>

            <div className="mt-8 border-t border-primary/10 pt-6 text-center">
              <p className="text-sm text-slate-500">
                Heeft u nog geen toegang? <br />
                <Link
                  className="font-semibold text-primary hover:underline"
                  href="/portaal/registratie"
                >
                  Vraag een account aan
                </Link>
              </p>
            </div>
          </div>

          <div className="flex justify-center gap-6 text-[11px] font-medium uppercase tracking-widest text-slate-400">
            <Link
              className="transition-colors hover:text-primary"
              href="/privacy"
            >
              Privacybeleid
            </Link>
            <Link
              className="transition-colors hover:text-primary"
              href="/juridisch"
            >
              Gebruiksvoorwaarden
            </Link>
            <Link
              className="transition-colors hover:text-primary"
              href="/contact"
            >
              Contact
            </Link>
          </div>
        </div>
      </main>

      <footer className="border-t border-primary/10 py-8">
        <div className="mx-auto max-w-7xl px-4 text-center">
          <div className="mb-4 flex justify-center">
            <div className="h-1 w-24 overflow-hidden rounded-full bg-primary/10">
              <div className="h-full w-1/3 bg-primary"></div>
            </div>
          </div>
          <p className="text-xs font-medium text-slate-500">
            © 2026 Nederlands Collectief Duurzame Energie (NCDE).{" "}
            <br className="sm:hidden" />
            Alle rechten voorbehouden.
          </p>
        </div>
      </footer>

      <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden opacity-20">
        <div className="absolute left-[-10%] top-[-10%] h-[40%] w-[40%] rounded-full bg-primary blur-[120px]"></div>
        <div className="absolute bottom-[-10%] right-[-10%] h-[40%] w-[40%] rounded-full bg-primary blur-[120px]"></div>
      </div>
    </div>
  );
}
