import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Contact — NCDE",
  description:
    "Neem contact op met NCDE of laat uw gegevens achter voor persoonlijk advies.",
};

export default function ContactPage() {
  return (
    <main className="flex-grow">
      <section className="bg-white border-b border-neutral-200">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 py-10 lg:py-14">
          <div className="max-w-3xl">
            <nav className="flex items-center gap-2 text-xs text-neutral-500 mb-4">
              <Link className="hover:underline" href="/">Home</Link>
              <span className="material-symbols-outlined text-xs">chevron_right</span>
              <span className="text-neutral-900 font-medium">Contact</span>
            </nav>
            <h1 className="text-3xl lg:text-4xl font-bold text-primary tracking-tight mb-3">Neem contact op</h1>
            <p className="text-base leading-relaxed text-neutral-600">
              Het Nederlands Collectief Duurzame Energie (NCDE) biedt ondersteuning en informatie voor particulieren, overheden en strategische partners. Gebruik onderstaande opties om contact op te nemen met onze gespecialiseerde afdelingen.
            </p>
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 lg:px-12 py-10 lg:py-16 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
        <div className="lg:col-span-7">
          <div className="bg-white p-6 lg:p-8 border border-neutral-200 shadow-sm rounded-lg">
            <h2 className="text-xl font-semibold text-neutral-900 mb-1">Stuur een bericht</h2>
            <p className="text-sm text-neutral-500 mb-6">Alle berichten worden geregistreerd en binnen 3 werkdagen verwerkt.</p>
            <form action="#" className="space-y-5">
              <div className="space-y-1.5">
                <span className="block text-xs font-semibold text-neutral-700 tracking-wide">Ik ben</span>
                <div className="flex gap-2">
                  <label className="flex-1 cursor-pointer">
                    <input type="radio" name="contact_type" value="particulier" defaultChecked className="peer sr-only" />
                    <span className="flex h-11 items-center justify-center rounded-md border border-neutral-200 text-sm text-neutral-700 transition-all peer-checked:border-primary peer-checked:bg-primary peer-checked:text-white">Particulier</span>
                  </label>
                  <label className="flex-1 cursor-pointer">
                    <input type="radio" name="contact_type" value="zakelijk" className="peer sr-only" />
                    <span className="flex h-11 items-center justify-center rounded-md border border-neutral-200 text-sm text-neutral-700 transition-all peer-checked:border-primary peer-checked:bg-primary peer-checked:text-white">Zakelijk</span>
                  </label>
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div className="space-y-1.5">
                  <label className="block text-xs font-semibold text-neutral-700 tracking-wide" htmlFor="full_name">Volledige naam</label>
                  <div className="relative">
                    <span className="material-symbols-outlined pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-lg text-neutral-400">person</span>
                    <input className="w-full h-11 bg-white border border-neutral-200 rounded-md pl-10 pr-3 text-sm text-neutral-900 focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all" id="full_name" placeholder="Bijv. Jan de Vries" type="text" />
                  </div>
                </div>
                <div className="space-y-1.5">
                  <label className="block text-xs font-semibold text-neutral-700 tracking-wide" htmlFor="email">E-mailadres</label>
                  <div className="relative">
                    <span className="material-symbols-outlined pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-lg text-neutral-400">mail</span>
                    <input className="w-full h-11 bg-white border border-neutral-200 rounded-md pl-10 pr-3 text-sm text-neutral-900 focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all" id="email" placeholder="naam@organisatie.nl" type="email" />
                  </div>
                </div>
              </div>
              <div className="space-y-1.5">
                <label className="block text-xs font-semibold text-neutral-700 tracking-wide" htmlFor="address">Adres</label>
                <div className="relative">
                  <span className="material-symbols-outlined pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-lg text-neutral-400">home</span>
                  <input className="w-full h-11 bg-white border border-neutral-200 rounded-md pl-10 pr-3 text-sm text-neutral-900 focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all" id="address" placeholder="Straat, huisnummer, postcode, plaats" type="text" />
                </div>
              </div>
              <div className="space-y-1.5">
                <label className="block text-xs font-semibold text-neutral-700 tracking-wide" htmlFor="organization">
                  Afdeling / Organisatie <span className="font-normal text-neutral-400">(optioneel)</span>
                </label>
                <div className="relative">
                  <span className="material-symbols-outlined pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-lg text-neutral-400">apartment</span>
                  <input className="w-full h-11 bg-white border border-neutral-200 rounded-md pl-10 pr-3 text-sm text-neutral-900 focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all" id="organization" placeholder="Bijv. Gemeente Amsterdam" type="text" />
                </div>
              </div>
              <div className="space-y-1.5">
                <label className="block text-xs font-semibold text-neutral-700 tracking-wide" htmlFor="subject">Onderwerp</label>
                <div className="relative">
                  <span className="material-symbols-outlined pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-lg text-neutral-400">label</span>
                  <select className="w-full h-11 bg-white border border-neutral-200 rounded-md pl-10 pr-3 text-sm text-neutral-900 focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all" id="subject">
                    <option>Informatie</option>
                    <option>Beleid</option>
                    <option>Rapportage</option>
                  </select>
                </div>
              </div>
              <div className="space-y-1.5">
                <label className="block text-xs font-semibold text-neutral-700 tracking-wide" htmlFor="message">Uw bericht</label>
                <div className="relative">
                  <span className="material-symbols-outlined pointer-events-none absolute left-3 top-3 text-lg text-neutral-400">chat</span>
                  <textarea className="w-full bg-white border border-neutral-200 rounded-md pl-10 pr-3 py-3 text-sm text-neutral-900 focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all resize-none" id="message" placeholder="Beschrijf uw vraag of verzoek zo gedetailleerd mogelijk..." rows={5}></textarea>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row items-center gap-4 pt-2">
                <button className="w-full sm:w-auto bg-primary text-white px-6 py-2.5 rounded-md font-semibold text-sm hover:bg-primary/90 transition-all active:scale-95" type="submit">
                  Bericht versturen
                </button>
                <p className="text-xs text-neutral-400 max-w-[240px]">
                  Uw gegevens worden beschermd conform ons privacybeleid.
                </p>
              </div>
            </form>
          </div>
        </div>

        <div className="lg:col-span-5 space-y-12">
          <div>
            <h3 className="text-sm font-bold text-primary uppercase tracking-widest mb-6 flex items-center gap-2">
              <span className="w-8 h-px bg-primary"></span>
              Direct contact
            </h3>
            <div className="space-y-8">
              <div className="flex gap-6">
                <div className="flex-shrink-0 w-12 h-12 bg-primary/5 flex items-center justify-center rounded">
                  <span className="material-symbols-outlined text-primary">phone_in_talk</span>
                </div>
                <div>
                  <h4 className="font-bold text-neutral-900">Telefonisch contact</h4>
                  <p className="text-neutral-600 mt-1 text-sm leading-relaxed">Ma - Vr, 09:00 - 17:00 uur</p>
                  <a href="tel:+31852224003" className="text-primary font-bold mt-2 text-lg hover:underline">085 222 4003</a>
                </div>
              </div>
              <div className="flex gap-6">
                <div className="flex-shrink-0 w-12 h-12 bg-primary/5 flex items-center justify-center rounded">
                  <span className="material-symbols-outlined text-primary">alternate_email</span>
                </div>
                <div>
                  <h4 className="font-bold text-neutral-900">E-mailadres</h4>
                  <p className="text-neutral-600 mt-1 text-sm leading-relaxed">Voor alle officiële correspondentie.</p>
                  <p className="text-primary font-bold mt-2 text-lg">info@ncde.nl</p>
                </div>
              </div>
              <div className="flex gap-6">
                <div className="flex-shrink-0 w-12 h-12 bg-primary/5 flex items-center justify-center rounded">
                  <span className="material-symbols-outlined text-primary">location_on</span>
                </div>
                <div>
                  <h4 className="font-bold text-neutral-900">Bezoekadres</h4>
                  <p className="text-neutral-600 mt-1 text-sm leading-relaxed">Bezoek uitsluitend op afspraak.</p>
                  <address className="not-italic text-neutral-900 font-medium mt-2 leading-relaxed">
                    NCDE Hoofdkantoor<br />
                    Keurmeesterstraat 53<br />
                    1187 ZX Amstelveen<br />
                    Nederland
                  </address>
                </div>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-sm font-bold text-primary uppercase tracking-widest mb-6 flex items-center gap-2">
              <span className="w-8 h-px bg-primary"></span>
              Locatie
            </h3>
            <div className="overflow-hidden rounded-lg border border-neutral-200 shadow-sm">
              <iframe
                src="https://www.google.com/maps?q=Keurmeesterstraat+53,+1187+ZX+Amstelveen&output=embed"
                width="100%"
                height="300"
                style={{ border: 0 }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="NCDE locatie - Keurmeesterstraat 53, Amstelveen"
              ></iframe>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
