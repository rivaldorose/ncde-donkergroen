# NCDE — Ticketsysteem

**Repo:** `rivaldorose/ncde-donkergroen`
**Base branch:** `development` (afgetakt van `main`)
**Workflow:** per ticket → `feat/NCDE-XX-slug` vanaf `development` → localhost test → merge naar `development` → (op verzoek) merge `development` → `main`.

Status-legenda:
- 🟢 **DONE** — al in de code aanwezig
- 🟡 **PARTIAL** — bestaat maar voldoet niet aan de TODO
- 🔴 **OPEN** — nog niet geïmplementeerd
- ⚪ **BLOCKED** — wacht op input van Jamal

---

## 🚨 P0 — Must fix

### NCDE-01 — Zoho CRM koppeling contactformulier 🔴 OPEN
- Geen `app/api/` folder aanwezig, geen Zoho routes, form `action="#"` in [app/contact/page.tsx:34](app/contact/page.tsx#L34).
- Pattern volgen van Alterion Solar Warm (`/api/zoho/callback`, refresh token als env var).
- Leads landen in `Deals` (niet `Leads`).
- Env vars: `ZOHO_CLIENT_ID`, `ZOHO_CLIENT_SECRET`, `ZOHO_REFRESH_TOKEN`.
- **Verificatie:** formulier invullen → lead zichtbaar in Zoho.

### NCDE-02 — Security hardening + spam-filters 🔴 OPEN
- Alterion security pattern toepassen (rate limiting, honeypot, CSP headers, input validation).
- Spam-filters opnieuw correct configureren (volgens TODO stonden ze uit).
- Onderzoek vermoeden trojan via oude Magal-website — apart bekijken.

### NCDE-03 — Telefoonnummer `085 222 4004` consistent 🟡 PARTIAL
- [components/Footer.tsx:31](components/Footer.tsx#L31) staat nu `088-XXXXXXX` (placeholder).
- [app/contact/page.tsx:89](app/contact/page.tsx#L89) staat nu `+31 (0) 20 555 0123` (placeholder).
- Alle mentions vervangen door `085 222 4004`.

---

## 🎨 Branding & typografie

### NCDE-04 — Lettertypes lichter dan Alterion 🔴 OPEN
- Globale typografie-review: headings en body iets lichter gewicht (`font-black` → `font-bold`, `font-bold` → `font-semibold` waar passend).
- Doel: rustiger uitstraling dan Alterion.

### NCDE-05 — NCDE afkorting consistent uitleggen 🟡 PARTIAL
- Eerste mention per pagina: **"Nederlands Collectief Duurzame Energie (NCDE)"**, daarna NCDE.
- Al correct op: [contact](app/contact/page.tsx#L23), [partners](app/partners/page.tsx#L27), [footer](components/Footer.tsx#L17).
- Check homepage hero + overige pagina's.

---

## 🏠 Homepage

### NCDE-06 — Sectie "Landenchameters / Provincies" ⚪ BLOCKED
- Wacht op tekst Jamal.
- Locatie toevoegen op homepage.

### NCDE-07 — Nieuwe hoofdpagina "Wie is NCDE?" 🔴 OPEN
- Route `/wie-is-ncde` (of hergebruiken van [/over](app/over/page.tsx)? afstemmen).
- Overzicht / introductie / missie.
- Link vanaf homepage hero of nav.
- Tekst Jamal (deels ⚪ BLOCKED).

---

## ☀️ Pagina Salderingsregeling

### NCDE-08 — Content opbreken in secties 🟡 PARTIAL
- Huidige pagina heeft al 3 secties ([Hoe het nu werkt](app/salderingsregeling/page.tsx#L65), [Voorgenomen wijzigingen](app/salderingsregeling/page.tsx#L95), [Wat betekent dit voor u](app/salderingsregeling/page.tsx#L137)).
- TODO wil meer opdeling + uitgebreidere tekst — wacht op tekst Jamal ⚪.

### NCDE-09 — Hero afbeelding salderingsregeling 🟡 PARTIAL
- Nu externe Google Lh3 URL [regel 49](app/salderingsregeling/page.tsx#L49).
- Vervangen door: woning mét zonnepanelen + warmtepomp, óf bedrijfspand/schuur.
- Foto kleiner maken.

### NCDE-10 — "Wist u dat"-blok subtieler 🟡 PARTIAL
- Nu: `rounded-lg border-l-4 border-primary bg-background-light p-6` — redelijk prominent.
- Maken: tip-stijl, kleiner, subtieler.

### NCDE-11 — Dubbele strepen / dividers opschonen 🔴 OPEN
- Section headers met `<span className="h-1 w-8 rounded-full bg-primary">` behouden bij "Wist u dat" en "Hoe werkt het".
- Weghalen bij algemene secties zodra ze visueel concurreren.

### NCDE-12 — Timeline 2022 → 2027 kleurverloop 🟢 DONE
- Nu al dark → light via `bg-sage/20` → `bg-sage/10` → `bg-slate-100 opacity-70` op regels 106/115/124.

---

## 📞 Contactpagina

### NCDE-13 — Hero "Neem contact op" kleiner + subtieler 🟡 PARTIAL
- Nu `text-5xl lg:text-6xl font-extrabold` [regel 21](app/contact/page.tsx#L21).
- Titel kleiner, tekst eronder compacter, lettertype subtieler.

### NCDE-14 — Formulier particulier/zakelijk toggle 🔴 OPEN
- Nu: naam, email, organisatie, onderwerp, bericht.
- **Ontbrekend:** adres-veld, particulier/zakelijk toggle, "(optioneel)" label op organisatie.

### NCDE-15 — Onderwerp dropdown bijwerken 🟡 PARTIAL
- Nu: Algemene informatie / Technische ondersteuning / Beleid & Regelgeving / Samenwerking / Pers & Media.
- TODO wil: Informatie / Beleid / Rapportage.

### NCDE-16 — Formulier compacter + button styling 🔴 OPEN
- Inputs zijn nu `h-14` met `py-4` ruimte — compacter maken.
- "Bericht versturen" button styling review.

### NCDE-17 — Icoontjes bij contactformulier 🟡 PARTIAL
- Direct contact rechts heeft icons ([regels 84, 94, 104](app/contact/page.tsx#L84)).
- TODO wil ook icons bij formuliervelden (telefoon, mail, etc.).

---

## ⚡ Sectie Energie Onzekerheid (homepage)

### NCDE-18 — Titel + tekst kleiner, meer één lopende zin 🔴 OPEN
- Nu ["Voorbereiding op energieonzekerheid"](app/page.tsx#L160) als `text-3xl lg:text-5xl`.
- Kleiner maken, "Weet je overheid..." tekst compacter.
- `Stroomuitval` + `Netinstabiliteit` meer info ⚪ BLOCKED (wacht op tekst).

---

## 🎒 Sectie Noodpakket

### NCDE-19 — Layout compacter + tekst aanscherpen 🟡 PARTIAL
- Homepage noodpakket-sectie [regels 150-208](app/page.tsx#L150).
- Page [app/noodpakket/page.tsx](app/noodpakket/page.tsx) — aparte review.

---

## 📰 Kenniscentrum / Nieuws

### NCDE-20 — Titel kleiner, tekst dichter op elkaar 🔴 OPEN
- Sectie "Nieuws" / "Kenniscentrum" op homepage check — momenteel niet aanwezig als aparte sectie.
- Mogelijk moet dit nog toegevoegd worden? Afstemmen.

### NCDE-21 — Iconen klikbaar naar blog-detail 🔴 OPEN
- Show-only blog cards, voor nu geen detail-pagina.
- Later werk.

---

## 📋 Regelingen

### NCDE-22 — Regelingen titel + teksten strakker 🟡 PARTIAL
- [app/regelingen/page.tsx](app/regelingen/page.tsx) review typografie.

### NCDE-23 — Beslissing welke regelingen aanbieden ⚪ BLOCKED
- Wacht op Jamal.

### NCDE-24 — Stappenplan Aanvraag → Oriënteren → Aanschaf → Aanmelden 🟢 DONE
- Volgens TODO al oké.

---

## 🤝 Partners

### NCDE-25 — M340 certificering in werkwijze-sectie 🔴 OPEN
- Grep: geen enkele mention van M340 in repo.
- Toevoegen in [app/werkwijze/page.tsx](app/werkwijze/page.tsx) of [app/partners/page.tsx](app/partners/page.tsx).

### NCDE-26 — Partner-afbeelding in kleur ⚪ BLOCKED
- Wacht op foto Jamal.
- Huidige partner-hero: externe Google Lh3 URL [partners regel 52](app/partners/page.tsx#L52).

### NCDE-27 — "Word partner" pagina layout/hoofdletter 🔴 OPEN
- Link wijst nu naar [/portaal/registratie](app/portaal/registratie/page.tsx) — check of dat klopt of dat er aparte `/word-partner` pagina moet.
- Hoofdletter P consistent: "Word Partner" overal zelfde casing.

### NCDE-28 — Stappenplan Energietransitie tekst herschrijven ⚪ BLOCKED
- "Strenge selectiecriteria" — nu te commercieel, moet neutraal/transparant.
- Wacht op nieuwe tekst Jamal.

---

## ✅ Verificatie checklist (laatste fase)

### NCDE-29 — QA sweep 🔴 OPEN
- [ ] Contactformulier → lead in Zoho (afhankelijk van NCDE-01)
- [ ] Externe links open-in-new-tab
- [ ] Mobile responsiveness alle pagina's
- [ ] Spam-filters werken zonder legitimate traffic te blokkeren (afhankelijk van NCDE-02)
- [ ] Geen 404's op partner-pagina + "word partner"
- [ ] Typografie consistent (afhankelijk van NCDE-04)
- [ ] Salderingsregeling leest prettig

---

## 📦 Wachtend op Jamal (⚪ BLOCKED)

- Tekst Landenchameters / Provincies / Sint-Levengroep → NCDE-06
- Tekst Salderingsregeling uitgebreid → NCDE-08
- Tekst Energie Onzekerheid + Stroomuitval + Netinstabiliteit → NCDE-18
- Herschreven selectiecriteria partners → NCDE-28
- Beslissing welke regelingen aanbieden → NCDE-23
- Nieuwe partner-afbeelding (kleur) → NCDE-26
- Tekst "Wie is NCDE?" pagina → NCDE-07

---

## 🔗 Cross-cutting referenties

- Email & mailserver issues → `TODO-INFRA-EMAIL.md` (buiten deze repo)
- Zoho koppeling pattern: zelfde als Alterion Solar Warm
- Security pattern: zelfde als Alterion Solar Warm
- Icon-branding consistent met Alterion

---

## Volgorde van uitvoering (voorstel)

**Sprint 1 — P0:**
1. NCDE-03 (telefoonnummer — quick win, geen dependencies)
2. NCDE-01 (Zoho koppeling)
3. NCDE-02 (security hardening)

**Sprint 2 — design/UX (geen content-blockers):**
4. NCDE-13 (contact hero kleiner)
5. NCDE-14 (particulier/zakelijk toggle)
6. NCDE-15 (onderwerp dropdown)
7. NCDE-16 (formulier compacter)
8. NCDE-10 (Wist u dat subtieler)
9. NCDE-11 (dividers opschonen)
10. NCDE-04 (typografie lichter — globaal)
11. NCDE-05 (NCDE-afkorting consistent)

**Sprint 3 — content-afhankelijk (zodra Jamal teksten stuurt):**
12. NCDE-06, 07, 08, 18, 23, 26, 28

**Sprint 4 — overig:**
13. NCDE-09 (salderingsregeling hero foto)
14. NCDE-17 (icons formulier)
15. NCDE-19 (noodpakket layout)
16. NCDE-20, 21 (kenniscentrum — afhankelijk van beslissing)
17. NCDE-22, 24 (regelingen)
18. NCDE-25 (M340)
19. NCDE-27 (word partner pagina)
20. NCDE-29 (QA sweep)
