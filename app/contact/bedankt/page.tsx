import Link from "next/link";

export default function BedanktPage() {
  return (
    <>
      <main className="flex-1 flex flex-col items-center justify-center px-6 py-12 md:py-24">
        <div className="max-w-2xl w-full text-center flex flex-col items-center">
          {/* Success Icon */}
          <div className="mb-10 relative">
            <div className="absolute inset-0 bg-primary/10 rounded-full scale-150 blur-2xl opacity-50"></div>
            <div className="relative bg-primary text-white size-24 md:size-32 rounded-full flex items-center justify-center shadow-xl shadow-primary/20">
              <span className="material-symbols-outlined text-5xl md:text-6xl font-bold">check_circle</span>
            </div>
          </div>
          {/* Messaging */}
          <h1 className="text-slate-900 dark:text-slate-100 text-3xl md:text-5xl font-bold tracking-tight mb-6">
            Bedankt voor uw aanvraag
          </h1>
          <div className="space-y-4 max-w-lg">
            <p className="text-slate-600 dark:text-slate-400 text-lg leading-relaxed">
              Wij hebben uw bericht in goede orde ontvangen.
            </p>
            <p className="text-slate-600 dark:text-slate-400 text-lg leading-relaxed">
              Een van onze adviseurs neemt <span className="text-primary font-semibold">binnen twee werkdagen</span> contact met u op om uw situatie te bespreken.
            </p>
          </div>
          {/* Divider */}
          <div className="w-16 h-1 bg-primary/20 rounded-full my-12"></div>
          {/* Next Steps */}
          <div className="w-full">
            <h3 className="text-slate-900 dark:text-slate-100 text-xl font-bold mb-8">Wat wilt u nu doen?</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Link className="group flex items-start gap-4 p-5 bg-white dark:bg-background-dark/50 border border-slate-200 dark:border-primary/20 rounded-xl hover:border-primary hover:shadow-lg transition-all text-left" href="/noodpakket">
                <div className="bg-primary/10 group-hover:bg-primary group-hover:text-white text-primary p-3 rounded-lg transition-colors">
                  <span className="material-symbols-outlined">menu_book</span>
                </div>
                <div>
                  <span className="block font-bold text-slate-900 dark:text-slate-100">Kennisbank</span>
                  <span className="text-sm text-slate-500 dark:text-slate-400">Ontdek artikelen over duurzame energieoplossingen.</span>
                </div>
              </Link>
              <Link className="group flex items-start gap-4 p-5 bg-white dark:bg-background-dark/50 border border-slate-200 dark:border-primary/20 rounded-xl hover:border-primary hover:shadow-lg transition-all text-left" href="/">
                <div className="bg-primary/10 group-hover:bg-primary group-hover:text-white text-primary p-3 rounded-lg transition-colors">
                  <span className="material-symbols-outlined">home</span>
                </div>
                <div>
                  <span className="block font-bold text-slate-900 dark:text-slate-100">Terug naar Home</span>
                  <span className="text-sm text-slate-500 dark:text-slate-400">Keer terug naar de hoofdpagina van NCDE.</span>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </main>
      {/* Background decoration */}
      <div className="fixed bottom-0 left-0 w-full h-1/4 pointer-events-none opacity-50 z-[-1] overflow-hidden">
        <div className="absolute -bottom-20 -left-20 size-80 bg-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-20 -right-20 size-96 bg-sage/20 rounded-full blur-3xl"></div>
      </div>
    </>
  );
}
