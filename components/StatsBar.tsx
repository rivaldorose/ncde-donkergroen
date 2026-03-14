interface Stat {
  label: string;
  value: string;
}

interface StatsBarProps {
  stats: Stat[];
}

export default function StatsBar({ stats }: StatsBarProps) {
  return (
    <section className="bg-primary text-white">
      <div className="mx-auto grid max-w-7xl gap-6 px-6 py-10 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat) => (
          <div key={stat.label} className="text-center">
            <p className="text-3xl font-bold text-sage">{stat.value}</p>
            <p className="mt-1 text-sm text-white/80">{stat.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
