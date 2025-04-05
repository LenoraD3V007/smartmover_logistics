interface StatsCardProps {
  number: string
  label: string
}

export function StatsCard({ number, label }: StatsCardProps) {
  return (
    <div className="text-center">
      <p className="mb-2 text-4xl font-bold text-yellow-400">{number}</p>
      <p className="text-gray-300">{label}</p>
    </div>
  )
}

