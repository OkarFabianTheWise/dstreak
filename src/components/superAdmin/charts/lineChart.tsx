"use client"

import { Line, LineChart, ResponsiveContainer, Tooltip, XAxis } from "recharts"

interface LineChartProps {
  data: number[]
  labels?: string[]
  height?: number
  color?: string
}

export function CustomLineChart({ data, labels, height = 100, color = "#22c55e" }: LineChartProps) {
  const chartData = data.map((value, index) => ({
    value,
    label: labels?.[index] || "",
  }))

  return (
    <ResponsiveContainer width="100%" height={height}>
      <LineChart data={chartData}>
        <XAxis dataKey="label" stroke="#888888" fontSize={12} tickLine={false} axisLine={false} />
        <Tooltip
          content={({ active, payload }) => {
            if (active && payload && payload.length) {
              return (
                <div className="rounded-lg border bg-background p-2 shadow-sm">
                  <div className="grid grid-cols-2 gap-2">
                    <div className="flex flex-col">
                      <span className="text-[0.70rem] uppercase text-muted-foreground">Value</span>
                      <span className="font-bold text-muted-foreground">{payload[0].value}</span>
                    </div>
                  </div>
                </div>
              )
            }
            return null
          }}
        />
        <Line type="monotone" dataKey="value" stroke={color} strokeWidth={2} dot={false} />
      </LineChart>
    </ResponsiveContainer>
  )
}

