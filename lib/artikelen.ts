export type Artikel = {
  slug: string;
  category: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  icon: string;
  sections: { heading?: string; paragraphs: string[] }[];
};

export const artikelen: Artikel[] = [
  {
    slug: "salderingsregeling-2027",
    category: "Salderingsregeling",
    title: "Salderingsregeling: wat verandert er vanaf 2027?",
    excerpt:
      "De geleidelijke afbouw van de salderingsregeling start in 2027. Wij leggen uit wat dit betekent voor huiseigenaren met zonnepanelen en hoe u zich kunt voorbereiden.",
    date: "15 april 2026",
    readTime: "5 min",
    icon: "wb_sunny",
    sections: [
      {
        paragraphs: [
          "De salderingsregeling is sinds 2004 een belangrijke drijvende kracht achter de groei van zonnepanelen in Nederland. Vanaf 2027 verandert deze regeling stapsgewijs. In dit artikel leest u wat er precies gaat gebeuren en hoe u zich kunt voorbereiden.",
        ],
      },
      {
        heading: "Wat houdt de afbouw in?",
        paragraphs: [
          "De terugleververgoeding wordt jaarlijks verlaagd. In 2031 eindigt de huidige regeling volledig. U ontvangt dan een redelijke vergoeding van uw energieleverancier, maar geen 1-op-1 verrekening meer met uw verbruik.",
          "Deze wijziging is bedoeld om direct eigen verbruik te stimuleren en de druk op het elektriciteitsnet te verminderen.",
        ],
      },
      {
        heading: "Wat betekent dit voor u?",
        paragraphs: [
          "Zonnepanelen blijven ook zonder salderingsregeling een rendabele investering. Het zwaartepunt verschuift naar direct verbruik en slimme opslag via thuisbatterijen.",
          "De gemiddelde terugverdientijd blijft tussen 7 en 9 jaar, afhankelijk van uw specifieke situatie.",
        ],
      },
    ],
  },
  {
    slug: "m340-certificering",
    category: "Certificering",
    title: "M340-certificering: waarom dit belangrijk is",
    excerpt:
      "Een overzicht van de M340-standaard voor installateurs. Hoe waarborgt deze certificering kwaliteit en veiligheid bij duurzame installaties?",
    date: "8 april 2026",
    readTime: "4 min",
    icon: "verified",
    sections: [
      {
        paragraphs: [
          "M340 is een Nederlandse certificeringsstandaard voor installateurs in de duurzame energiesector. De norm stelt eisen aan kennis, werkwijze en kwaliteitscontrole bij installatiewerkzaamheden.",
        ],
      },
      {
        heading: "Wat wordt getoetst?",
        paragraphs: [
          "M340 toetst onder andere de technische vakbekwaamheid, veiligheidsprocedures, documentatie en naleving van relevante normen (NEN, ISO, VCA).",
          "Installateurs die M340-gecertificeerd zijn, laten zien dat zij voldoen aan deze strenge eisen.",
        ],
      },
      {
        heading: "Waarom NCDE hierop inzet",
        paragraphs: [
          "Het Nederlands Collectief Duurzame Energie (NCDE) werkt uitsluitend samen met M340-gecertificeerde partners. Hiermee borgen wij de kwaliteit van installaties bij eindgebruikers en geven wij invulling aan onze onafhankelijke toezichtsrol.",
        ],
      },
    ],
  },
  {
    slug: "stroomuitval-voorbereiding",
    category: "Noodvoorziening",
    title: "Voorbereid zijn op stroomuitval: de essentie",
    excerpt:
      "Door toenemende druk op het energienet wordt noodvoorziening steeds belangrijker. Een praktische gids voor uw huishouden.",
    date: "1 april 2026",
    readTime: "6 min",
    icon: "bolt",
    sections: [
      {
        paragraphs: [
          "De elektriciteitsvoorziening in Nederland is betrouwbaar, maar door de energietransitie neemt de druk op het net toe. Kortdurende stroomuitval kan vaker voorkomen. Een goed voorbereid huishouden blijft rustig en veilig.",
        ],
      },
      {
        heading: "De basis van een noodpakket",
        paragraphs: [
          "Een noodpakket bevat minimaal water, houdbaar eten, zaklamp met reservebatterijen, een EHBO-kit, warme dekens, een batterijradio en contant geld. Bewaar dit op een vaste, bereikbare plek.",
          "Zorg ervoor dat powerbanks altijd volledig opgeladen zijn en dat huisgenoten weten waar het pakket zich bevindt.",
        ],
      },
      {
        heading: "Wat te doen tijdens een stroomuitval",
        paragraphs: [
          "Controleer eerst uw zekeringkast om interne storingen uit te sluiten. Houd koelapparatuur zo veel mogelijk dicht om bederf te voorkomen. Schakel gevoelige elektronica uit om schade door piekspanning te voorkomen.",
          "Blijf geïnformeerd via een batterijradio en raadpleeg de website van uw regionale netbeheerder.",
        ],
      },
    ],
  },
];

export function getArtikel(slug: string): Artikel | undefined {
  return artikelen.find((a) => a.slug === slug);
}
