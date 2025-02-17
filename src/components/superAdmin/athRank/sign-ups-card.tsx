"use client"

import { LineChart, Line, ResponsiveContainer } from "recharts"

// Sample data for the past 30 days
const data = Array.from({ length: 30 }, (_, i) => ({
  date: i + 1,
  value: Math.floor(Math.random() * 50) + 100, // Random values between 100-150
}))

export function SignUpsCard() {
  return (
    <div className="w-full max-w-md overflow-hidden rounded-3xl border border-green-500/30 bg-black/90 p-6 [box-shadow:0_0_30px_rgba(34,197,94,0.15)]">
      <div className="space-y-1">
        <h2 className="font-mono text-xl font-bold tracking-[0.2em] text-green-500">Sign Ups</h2>
        <p className="font-mono text-sm text-gray-500">Past 30 days</p>
      </div>

      <div className="mt-4 space-y-2">
        {/* Pixelated number */}
        <div className="font-mono text-6xl font-bold tracking-wider text-green-500 [text-shadow:0_0_10px_rgba(34,197,94,0.5)]">
          300
        </div>

        {/* Percentage indicator */}
        <div className="flex items-center gap-1 font-mono text-lg text-green-500">
          +40%
          <span className="inline-block -rotate-45 transform">↗</span>
        </div>
      </div>

      {/* Chart */}
      <div className="mt-4 h-24">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data}>
            <Line
              type="monotone"
              dataKey="value"
              stroke="#22c55e"
              strokeWidth={2}
              dot={false}
              style={{
                filter: "drop-shadow(0 0 8px rgba(34,197,94,0.5))",
              }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  )
}

