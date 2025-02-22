import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Calendar } from "@/components/ui/calendar"
import { Badge } from "@/components/ui/badge"

const events = [
  {
    id: 1,
    title: "Code Review Session",
    date: "2024-02-15",
    type: "Workshop",
    xp: 200,
  },
  {
    id: 2,
    title: "Team Hackathon",
    date: "2024-02-20",
    type: "Competition",
    xp: 1000,
  },
]

export default function EventPage() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold">Events</h1>
        <Button>Create Event</Button>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <Card className="p-6 bg-background/50 backdrop-blur">
          <Calendar />
        </Card>

        <Card className="p-6 bg-background/50 backdrop-blur">
          <h2 className="text-lg font-semibold mb-4">Upcoming Events</h2>
          <div className="space-y-4">
            {events.map((event) => (
              <div key={event.id} className="flex items-center justify-between p-4 rounded-lg border">
                <div>
                  <h3 className="font-medium">{event.title}</h3>
                  <p className="text-sm text-muted-foreground">{event.date}</p>
                  <Badge className="mt-2">{event.type}</Badge>
                </div>
                <div className="text-right">
                  <span className="text-primary">{event.xp} XP</span>
                </div>
              </div>
            ))}
          </div>
        </Card>
      </div>
    </div>
  )
}

