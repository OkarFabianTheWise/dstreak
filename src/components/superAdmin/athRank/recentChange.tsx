"use client";

import { motion } from "framer-motion";
import { Zap } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

interface Change {
  id: string;
  username: string;
  avatar: string;
  type: string;
  xp: number;
}

const recentChanges: Change[] = [
  {
    id: "1",
    username: "Samuelcodebass",
    avatar: "/placeholder.svg?height=40&width=40",
    type: "Weekly Submission",
    xp: 800,
  },
  {
    id: "2",
    username: "Godsarehappy",
    avatar: "/placeholder.svg?height=40&width=40",
    type: "Weekly Submission",
    xp: 2000,
  },
  {
    id: "3",
    username: "Godsarehappy",
    avatar: "/placeholder.svg?height=40&width=40",
    type: "Weekly Submission",
    xp: 300,
  },
  {
    id: "4",
    username: "Godsarehappy",
    avatar: "/placeholder.svg?height=40&width=40",
    type: "Weekly Submission",
    xp: 150,
  },
];

export function RecentChanges() {
  return (
    <div className="w-full space-y-4 rounded-3xl border border-green-500/30 bg-black/90 p-6 [box-shadow:0_0_30px_rgba(34,197,94,0.15)]">
      <div className="flex items-center justify-between">
        <h2 className="font-mono text-xl font-bold tracking-[0.2em] text-green-500">
          Recent Changes
        </h2>
        <Zap className="size-5 text-green-500" />
      </div>

      <div className="space-y-2 md:h-[170px] overflow-y-auto no-scrollbar">
        {recentChanges.map((change, index) => (
          <motion.div
            key={change.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.5,
              delay: index * 0.2,
              ease: [0.4, 0, 0.2, 1],
            }}
          >
            <div
              className={`group relative flex flex-col md:justify-center md:items-center justify-start items-start md:flex-row md:rounded-full border p-2 transition-all duration-300 ${
                index === 0
                  ? "border-green-500/10 bg-gradient-to-r from-green-500/20 to-transparent [box-shadow:0_0_15px_rgba(34,197,94,0.2)]"
                  : "border-green-500/10 bg-gradient-to-r from-green-500/10 to-transparent"
              }`}
            >
              <div className="flex items-center gap-3">
                <Avatar className="size-10 border-2 border-green-500/20">
                  <AvatarImage src={change.avatar} alt={change.username} />
                  <AvatarFallback className="bg-green-950 text-green-500">
                    {change.username.slice(0, 2)}
                  </AvatarFallback>
                </Avatar>
                <div className="flex gap-2">
                  <span className="font-mono text-lg font-bold tracking-wider text-green-500">
                    {change.username}
                  </span>
                </div>
              </div>
              <div className="flex gap-3 font-mono text-lg font-bold text-green-500 lg:ml-2">
                <div className="flex items-center gap-1">
                  <Zap className="size-3 text-yellow-500" />
                  <span className="font-mono text-sm text-yellow-500/90">
                    {change.type}
                  </span>
                </div>
                <div className="flex items-center gap-1">
                  <Zap className="size-3" />
                  {`+${change.xp} XP`}
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
