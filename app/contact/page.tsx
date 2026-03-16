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
        <div className="max-w-7xl mx-auto px-6 lg:px-12 py-16 lg:py-24">
          <div className="max-w-3xl">
            <nav className="flex items-center gap-2 text-sm text-neutral-500 mb-6">
              <Link className="hover:underline" href="/">Home</Link>
              <span className="material-symbols-outlined text-xs">chevron_right</span>
              <span className="text-neutral-900 font-medium">Contact</span>
            </nav>
            <h1 className="text-5xl lg:text-6xl font-extrabold text-primary tracking-tight mb-8">Neem contact op</h1>
            <p className="text-xl leading-relaxed text-neutral-600">
              Het Nederlands Collectief Duurzame Energie (NCDE) biedt ondersteuning en informatie voor particulieren, overheden en strategische partners. Gebruik onderstaande opties om contact op te nemen met onze gespecialiseerde afdelingen.
            </p>
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 lg:px-12 py-16 lg:py-24 grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24">
        <div className="lg:col-span-7">
          <div className="bg-white p-8 lg:p-12 border border-neutral-200 shadow-sm rounded-lg">
            <h2 className="text-2xl font-bold text-neutral-900 mb-2">Stuur een bericht</h2>
            <p className="text-neutral-500 mb-10">Alle berichten worden geregistreerd en binnen 3 werkdagen verwerkt.</p>
            <form action="#" className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-2">
                  <label className="block text-sm font-bold text-neutral-900 uppercase tracking-wider" htmlFor="full_name">Volledige naam</label>
                  <input className="w-full h-14 bg-white border-2 border-neutral-200 rounded-lg px-4 text-neutral-900 focus:ring-2 focus:ring-primary focus:border-primary transition-all" id="full_name" placeholder="Bijv. Jan de Vries" type="text" />
                </div>
                <div className="space-y-2">
                  <label className="block text-sm font-bold text-neutral-900 uppercase tracking-wider" htmlFor="email">E-mailadres</label>
                  <input className="w-full h-14 bg-white border-2 border-neutral-200 rounded-lg px-4 text-neutral-900 focus:ring-2 focus:ring-primary focus:border-primary transition-all" id="email" placeholder="naam@organisatie.nl" type="email" />
                </div>
              </div>
              <div className="space-y-2">
                <label className="block text-sm font-bold text-neutral-900 uppercase tracking-wider" htmlFor="organization">Afdeling / Organisatie</label>
                <input className="w-full h-14 bg-white border-2 border-neutral-200 rounded-lg px-4 text-neutral-900 focus:ring-2 focus:ring-primary focus:border-primary transition-all" id="organization" placeholder="Bijv. Gemeente Amsterdam" type="text" />
              </div>
              <div className="space-y-2">
                <label className="block text-sm font-bold text-neutral-900 uppercase tracking-wider" htmlFor="subject">Onderwerp</label>
                <select className="w-full h-14 bg-white border-2 border-neutral-200 rounded-lg px-4 text-neutral-900 focus:ring-2 focus:ring-primary focus:border-primary transition-all" id="subject">
                  <option>Algemene informatie</option>
                  <option>Technische ondersteuning</option>
                  <option>Beleid &amp; Regelgeving</option>
                  <option>Samenwerking</option>
                  <option>Pers &amp; Media</option>
                </select>
              </div>
              <div className="space-y-2">
                <label className="block text-sm font-bold text-neutral-900 uppercase tracking-wider" htmlFor="message">Uw bericht</label>
                <textarea className="w-full bg-white border-2 border-neutral-200 rounded-lg p-4 text-neutral-900 focus:ring-2 focus:ring-primary focus:border-primary transition-all resize-none" id="message" placeholder="Beschrijf uw vraag of verzoek zo gedetailleerd mogelijk..." rows={6}></textarea>
              </div>
              <div className="flex flex-col sm:flex-row items-center gap-6 pt-4">
                <button className="w-full sm:w-auto bg-primary text-white px-10 py-4 rounded-lg font-bold text-base hover:bg-primary/90 transition-all shadow-md active:scale-95" type="submit">
                  Bericht versturen
                </button>
                <p className="text-xs text-neutral-400 max-w-[200px]">
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
                  <p className="text-primary font-bold mt-2 text-lg">+31 (0) 20 555 0123</p>
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
                    Wilhelminaplein 1, Gebouw C<br />
                    2595 AS Den Haag<br />
                    Nederland
                  </address>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>
    </main>
  );
}
