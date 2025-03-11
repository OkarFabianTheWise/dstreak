'use client'

import type { RegionData } from '@/types/superadminboard'
import { Cell, Pie, PieChart, ResponsiveContainer } from 'recharts'

interface DonutChartProps {
  data: RegionData[]
}

export function DonutChart({ data }: DonutChartProps) {
  const COLORS = ['#3b82f6', '#ef4444', '#22c55e', '#eab308']

  return (
    <ResponsiveContainer width='90%' height={200}>
      <PieChart>
        <Pie
          data={data}
          innerRadius={60}
          outerRadius={80}
          paddingAngle={5}
          dataKey='percentage'
        >
          {data.map((_entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
      </PieChart>
    </ResponsiveContainer>
  )
}
