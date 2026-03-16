import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-primary pt-20 pb-10 text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-16 grid grid-cols-1 gap-12 border-b border-white/10 pb-16 md:grid-cols-2 lg:grid-cols-4">
          {/* Kolom 1: Over */}
          <div className="space-y-6">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/logo/wit.png"
              alt="NCDE Logo"
              className="h-12 w-auto"
            />
            <p className="text-sm leading-relaxed text-white/70">
              Stichting Nederlands Collectief Duurzame Energie is een
              onafhankelijk orgaan gericht op het informeren van burgers over de
              energietransitie.
            </p>
          </div>

          {/* Kolom 2: Contact */}
          <div>
            <h4 className="mb-6 font-bold">Contact</h4>
            <ul className="space-y-4 text-sm text-white/70">
              <li className="flex items-center gap-3">
                <span className="material-symbols-outlined text-sm">
                  phone
                </span>
                088-XXXXXXX
              </li>
              <li className="flex items-center gap-3">
                <span className="material-symbols-outlined text-sm">mail</span>
                <a
                  href="mailto:info@ncde.nl"
                  className="transition-colors hover:text-white"
                >
                  info@ncde.nl
                </a>
              </li>
              <li className="flex items-center gap-3">
                <span className="material-symbols-outlined text-sm">
                  location_on
                </span>
                Den Haag, Nederland
              </li>
            </ul>
          </div>

          {/* Kolom 3: Snelkoppelingen */}
          <div>
            <h4 className="mb-6 font-bold">Snelkoppelingen</h4>
            <ul className="space-y-4 text-sm text-white/70">
              <li>
                <Link
                  href="/over"
                  className="transition-colors hover:text-white"
                >
                  Over NCDE
                </Link>
              </li>
              <li>
                <Link
                  href="/salderingsregeling"
                  className="transition-colors hover:text-white"
                >
                  Salderingsregeling
                </Link>
              </li>
              <li>
                <Link
                  href="/noodpakket"
                  className="transition-colors hover:text-white"
                >
                  Noodvoorzieningen
                </Link>
              </li>
              <li>
                <Link
                  href="/oplossingen"
                  className="transition-colors hover:text-white"
                >
                  Oplossingen
                </Link>
              </li>
              <li>
                <Link
                  href="/regelingen"
                  className="transition-colors hover:text-white"
                >
                  Regelingen
                </Link>
              </li>
              <li>
                <Link
                  href="/werkwijze"
                  className="transition-colors hover:text-white"
                >
                  Onze Werkwijze
                </Link>
              </li>
              <li>
                <Link
                  href="/partners"
                  className="transition-colors hover:text-white"
                >
                  Partners
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="transition-colors hover:text-white"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Kolom 4: Juridisch */}
          <div>
            <h4 className="mb-6 font-bold">Juridisch</h4>
            <ul className="space-y-4 text-sm text-white/70">
              <li>
                <Link
                  href="/privacy"
                  className="transition-colors hover:text-white"
                >
                  Privacybeleid
                </Link>
              </li>
              <li>
                <Link href="/juridisch" className="transition-colors hover:text-white">
                  Algemene Voorwaarden
                </Link>
              </li>
              <li>
                <Link href="/cookies" className="transition-colors hover:text-white">
                  Cookiebeleid
                </Link>
              </li>
              <li>
                <Link href="/disclaimer" className="transition-colors hover:text-white">
                  Disclaimer
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col items-center justify-between gap-4 text-xs text-white/40 md:flex-row">
          <p>
            &copy; {new Date().getFullYear()} Nederlands Collectief Duurzame
            Energie (NCDE). Alle rechten voorbehouden.
          </p>
          <div className="flex items-center gap-3 text-white/50">
            <span>Gemaakt door</span>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/makers logo/Group 1.png"
              alt="Rose Vibes Studio"
              className="h-10 w-auto brightness-0 invert opacity-70"
            />
          </div>
        </div>
      </div>
    </footer>
  );
}
