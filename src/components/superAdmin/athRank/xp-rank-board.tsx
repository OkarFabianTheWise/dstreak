import { XPRankCard } from "./xp-rank-card"

export function XPRankBoard() {
  const rankings = [
    {
      username: "sindcodeXKX",
      xp: "10k",
      percentage: 10,
      rank: 1,
    },
    {
      username: "Samuelcodebass",
      xp: "9.5k",
      percentage: 20,
      rank: 2,
    },
    {
      username: "Godsarehappy",
      xp: "9.4k",
      percentage: 40,
      rank: 3,
    },
  ]

  return (
    <div className="w-full max-w-2xl rounded-3xl border border-green-500/30 bg-black/90 p-6 [box-shadow:0_0_30px_rgba(34,197,94,0.15)]">
      <div className="mb-6 font-mono text-xl font-bold tracking-[0.2em] text-green-500">
        ATH XP RANK <span className="ml-2 text-base font-normal tracking-wider text-green-500/70">(Top 3)</span>
      </div>
      <div className="flex flex-col gap-4">
        {rankings.map((ranking, _index) => (
          <XPRankCard key={ranking.username} {...ranking} />
        ))}
      </div>
    </div>
  )
}

