"use client"

import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts"

interface TaskData {
  completed: number
  active: number
}

// This could be fetched from an API or database
const taskData: TaskData = {
  completed: 352,
  active: 200,
}

export function TaskStatusCard() {
  // Calculate percentages
  const total = taskData.completed + taskData.active
  const completedPercentage = Math.round((taskData.completed / total) * 100)
  const activePercentage = 100 - completedPercentage

  const data = [
    { name: "Completed", value: completedPercentage, color: "#ff6b6b" },
    { name: "Active", value: activePercentage, color: "#4ade80" },
  ]

  return (
    <div className="w-full max-w-md overflow-hidden rounded-3xl border border-green-500/30 bg-black/90 p-6 [box-shadow:0_0_30px_rgba(34,197,94,0.15)]">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-6">
          {/* Completed Tasks */}
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <div className="size-2 rounded-full bg-red-400" />
              <span className="font-mono text-sm tracking-wide text-gray-400">Completed Task</span>
            </div>
            <div className="font-mono text-5xl font-bold tracking-wider text-red-400 [text-shadow:0_0_10px_rgba(248,113,113,0.5)]">
              {taskData.completed}
            </div>
          </div>

          {/* Active Tasks */}
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <div className="size-2 rounded-full bg-green-400" />
              <span className="font-mono text-sm tracking-wide text-gray-400">Active Task</span>
            </div>
            <div className="font-mono text-5xl font-bold tracking-wider text-green-400 [text-shadow:0_0_10px_rgba(74,222,128,0.5)]">
              {taskData.active}
            </div>
          </div>
        </div>

        {/* Pie Chart */}
        <div className="flex items-center justify-center">
          <div className="relative size-40">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={data}
                  cx="50%"
                  cy="50%"
                  innerRadius={0}
                  outerRadius={80}
                  paddingAngle={0}
                  dataKey="value"
                  strokeWidth={0}
                >
                  {data.map((entry, index) => (
                    <Cell
                      key={`cell-${index}`}
                      fill={entry.color}
                      style={{
                        filter: `drop-shadow(0 0 8px ${entry.color}80)`,
                      }}
                    />
                  ))}
                </Pie>
              </PieChart>
            </ResponsiveContainer>

            {/* Percentage Labels */}
            {/* {data.map((entry, index) => (
              <div
                key={`label-${index}`}
                className="absolute font-mono text-lg font-bold text-white"
                style={{
                  top: index === 0 ? "45%" : "25%",
                  left: index === 0 ? "35%" : "65%",
                  transform: "translate(-50%, -50%)",
                }}
              >
                {entry.value}%
              </div>
            ))} */}
          </div>
        </div>
      </div>
    </div>
  )
}

