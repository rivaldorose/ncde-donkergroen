import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-primary text-white">
      <div className="mx-auto max-w-7xl px-6 py-12">
        <div className="grid gap-8 md:grid-cols-3">
          {/* Kolom 1: Over */}
          <div>
            <h3 className="mb-3 text-lg font-bold">NCDE</h3>
            <p className="text-sm leading-relaxed text-sage/80">
              Nederlands Collectief Duurzame Energie — Stichting voor
              onafhankelijke voorlichting over duurzame energieoplossingen voor
              Nederlandse huishoudens.
            </p>
          </div>

          {/* Kolom 2: Navigatie */}
          <div>
            <h3 className="mb-3 text-lg font-bold">Navigatie</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/salderingsregeling" className="hover:text-sage">
                  Wat verandert er
                </Link>
              </li>
              <li>
                <Link href="/noodpakket" className="hover:text-sage">
                  Noodpakket
                </Link>
              </li>
              <li>
                <Link href="/oplossingen" className="hover:text-sage">
                  Oplossingen
                </Link>
              </li>
              <li>
                <Link href="/partners" className="hover:text-sage">
                  Partners
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-sage">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="hover:text-sage">
                  Privacybeleid
                </Link>
              </li>
            </ul>
          </div>

          {/* Kolom 3: Contact */}
          <div>
            <h3 className="mb-3 text-lg font-bold">Contact</h3>
            <ul className="space-y-2 text-sm">
              <li>Telefoon: 088-XXXXXXX</li>
              <li>
                E-mail:{" "}
                <a href="mailto:info@ncde.nl" className="hover:text-sage">
                  info@ncde.nl
                </a>
              </li>
              <li>
                Web:{" "}
                <a
                  href="https://www.ncde.nl"
                  className="hover:text-sage"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  www.ncde.nl
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Disclaimer */}
        <div className="mt-10 border-t border-accent/30 pt-6 text-center text-xs text-sage/60">
          <p>
            Alterion, gecertificeerd installatiepartner, neemt contact met u op
            voor persoonlijk advies.
          </p>
          <p className="mt-2">
            &copy; {new Date().getFullYear()} NCDE — Nederlands Collectief
            Duurzame Energie. Alle rechten voorbehouden.
          </p>
        </div>
      </div>
    </footer>
  );
}
