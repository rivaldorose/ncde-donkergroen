interface InfoCardProps {
  title: string;
  description: string;
  icon?: React.ReactNode;
}

export default function InfoCard({ title, description, icon }: InfoCardProps) {
  return (
    <div className="rounded-2xl border border-sage bg-white p-6 shadow-sm">
      {icon && <div className="mb-4 text-accent">{icon}</div>}
      <h3 className="mb-2 text-lg font-semibold text-primary">{title}</h3>
      <p className="text-sm leading-relaxed text-dark/70">{description}</p>
    </div>
  );
}
