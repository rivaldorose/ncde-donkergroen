import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Aanvraag Succesvol — NCDE",
  description:
    "Uw registratieaanvraag voor het NCDE-netwerk is succesvol verzonden.",
};

export default function SuccesPage() {
  return (
    <main className="flex flex-grow items-center justify-center px-4 py-16">
      <div className="w-full max-w-3xl">
        <div className="overflow-hidden rounded-xl border border-primary/10 bg-white shadow-xl shadow-primary/5">
          {/* Success Icon Section */}
          <div className="flex flex-col items-center justify-center bg-sage/40 py-12 text-center">
            <div className="mb-6 flex h-24 w-24 items-center justify-center rounded-full bg-accent/10">
              <span className="material-symbols-outlined text-6xl font-bold text-accent">
                check_circle
              </span>
            </div>
            <h1 className="px-6 text-3xl font-black text-primary md:text-4xl">
              Aanvraag succesvol verzonden
            </h1>
            <p className="mt-3 px-6 text-lg font-medium text-accent">
              Bedankt voor uw interesse in het NCDE-netwerk.
            </p>
          </div>

          {/* Info Section */}
          <div className="space-y-8 p-8 md:p-12">
            <div className="space-y-4">
              <p className="text-lg leading-relaxed text-primary/80">
                Uw aanvraag voor registratie is in goede orde ontvangen. Onze
                specialisten controleren momenteel uw gegevens en de opgegeven
                certificeringen.
              </p>
              <p className="border-l-4 border-accent bg-sage/10 py-2 pl-6 text-lg font-medium leading-relaxed text-primary/80">
                Wij streven ernaar om binnen 2 werkdagen contact met u op te
                nemen voor de verdere validatie van uw account.
              </p>
            </div>

            <hr className="border-primary/5" />

            {/* Contact Info */}
            <div className="flex flex-col items-center justify-between gap-6 rounded-lg border border-primary/5 bg-background-light p-6 md:flex-row">
              <div className="flex flex-col gap-1 text-center md:text-left">
                <h3 className="font-bold text-primary">
                  Heeft u in de tussentijd vragen?
                </h3>
                <p className="text-sm text-primary/70">
                  U kunt ons bereiken via{" "}
                  <a
                    className="font-bold hover:underline"
                    href="tel:0881234567"
                  >
                    088-123 45 67
                  </a>{" "}
                  of{" "}
                  <a
                    className="font-bold hover:underline"
                    href="mailto:info@ncde.nl"
                  >
                    info@ncde.nl
                  </a>
                  .
                </p>
              </div>
              <Link
                className="group flex items-center gap-2 text-sm font-bold text-primary"
                href="/contact"
              >
                Contact opnemen
                <span className="material-symbols-outlined transition-transform group-hover:translate-x-1">
                  arrow_forward
                </span>
              </Link>
            </div>

            {/* CTA */}
            <div className="flex justify-center pt-4">
              <Link
                className="inline-flex min-w-[240px] items-center justify-center rounded-lg bg-primary px-8 py-4 text-lg font-bold text-white shadow-md shadow-primary/20 transition-all hover:bg-primary/90"
                href="/"
              >
                Terug naar Homepage
              </Link>
            </div>
          </div>
        </div>

        {/* Image/Banner Decoration */}
        <div className="relative mt-8 h-48 overflow-hidden rounded-xl border border-primary/10">
          <div className="absolute inset-0 z-10 bg-gradient-to-r from-primary/80 to-transparent"></div>
          <div className="absolute bottom-6 left-8 z-20">
            <p className="text-sm font-medium uppercase tracking-widest text-white/70">
              Samen naar een duurzame toekomst
            </p>
            <p className="text-xl font-bold text-white">
              Nederlands Collectief Duurzame Energie
            </p>
          </div>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            alt="Windmolens en zonnepanelen in landschap"
            className="h-full w-full object-cover"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuB5kHsqNSUbZpSr-vlNztfFOGsWW9iGqkT9RSOOUxSnnTe9ANCo1yaZD191dHx4U-bFJmldYQIDchhVn8BeRpTSfjcSnvCFKk0EQ_TOnpNlg5zTXnhlETyziKyxKTg3wM5IUO8oSFtgzP2iFw15U-1dzxTQ57L0V11ikDzI0rd5WWbRhBZnZf2Bv7_RBzwjyonmPQSJbB2Ub95FIwDf_-_zv7RNSBFXrs3C3RDyspEgkwMHGvvF-GQrRAY9BV5rYU0NkTQTPutqh_jU"
          />
        </div>
      </div>
    </main>
  );
}
