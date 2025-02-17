import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import type React from "react" // Import React

interface StatsCardProps {
  title: string
  value: string | number
  children?: React.ReactNode
}

export function StatsCard({ title, value, children }: StatsCardProps) {
  return (
    <Card className="bg-background/50 backdrop-blur border border-green-500/30 [box-shadow:0_0_30px_rgba(34,197,94,0.15)]">
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium text-muted-foreground">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold text-primary">{value}</div>
        {children}
      </CardContent>
    </Card>
  )
}

