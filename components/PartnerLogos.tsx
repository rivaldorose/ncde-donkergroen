interface Partner {
  name: string;
  logoUrl: string;
}

interface PartnerLogosProps {
  partners: Partner[];
}

export default function PartnerLogos({ partners }: PartnerLogosProps) {
  return (
    <div className="flex flex-wrap items-center justify-center gap-10">
      {partners.map((partner) => (
        <div key={partner.name} className="flex flex-col items-center gap-2">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={partner.logoUrl}
            alt={partner.name}
            className="h-16 w-auto object-contain grayscale transition-all hover:grayscale-0"
          />
          <span className="text-xs text-dark/50">{partner.name}</span>
        </div>
      ))}
    </div>
  );
}
