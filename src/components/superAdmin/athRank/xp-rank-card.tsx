import { Zap } from "lucide-react";
import { cn } from "@/lib/utils";

interface XPRankCardProps {
  username: string;
  xp: string;
  percentage: number;
  rank: number;
  className?: string;
}

export function XPRankCard({
  username,
  xp,
  percentage,
  rank,
  className,
}: XPRankCardProps) {
  // Calculate color based on rank
  const getColors = (rank: number) => {
    switch (rank) {
      case 1:
        return "from-green-500/20 to-green-500/10 text-green-500 [box-shadow:0_0_15px_rgba(34,197,94,0.3)]";
      case 2:
        return "from-orange-500/20 to-orange-500/10 text-orange-500 [box-shadow:0_0_15px_rgba(249,115,22,0.3)]";
      default:
        return "from-orange-400/20 to-orange-400/10 text-orange-400 [box-shadow:0_0_15px_rgba(251,146,60,0.3)]";
    }
  };

  return (
    <div
      className={cn(
        "group relative flex items-center justify-between rounded-full bg-gradient-to-r p-2 transition-all duration-300 hover:scale-[1.02]",
        getColors(rank),
        className
      )}
    >
      <div className="flex items-center gap-3">
        <div className="relative">
          <Zap
            className="size-6 animate-pulse"
            style={{
              filter: "drop-shadow(0 0 8px currentColor)",
            }}
          />
          <div className="absolute inset-0 animate-ping opacity-50">
            <Zap className="size-6" />
          </div>
        </div>
        <span className="font-mono text-md font-bold tracking-wider">
          {username}
        </span>
      </div>
      <div className="flex items-center gap-2">
        <div
          className={cn(
            "rounded-full bg-gradient-to-r from-black/50 to-black/30 px-4 py-2 font-mono",
            "border border-current/20 [box-shadow:0_0_15px_rgba(0,0,0,0.3)]"
          )}
        >
          <span className="text-md font-bold">{xp}</span>
          <div className="text-xs font-medium text-green-400">
            +{percentage}%
            <span className="inline-block -rotate-45 transform">↗</span>
          </div>
        </div>
      </div>
    </div>
  );
}
