import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

const emails = [
  {
    id: 1,
    subject: "New Task Assignment",
    from: "system@devstreak.com",
    status: "Unread",
    date: "2024-02-11 14:30",
  },
  {
    id: 2,
    subject: "Weekly Progress Report",
    from: "reports@devstreak.com",
    status: "Read",
    date: "2024-02-10 09:15",
  },
]

export default function EmailPage() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold">Email Notifications</h1>
        <Button>Compose</Button>
      </div>

      <div className="grid gap-6 md:grid-cols-[250px_1fr]">
        <Card className="p-4 bg-background/50 backdrop-blur">
          <div className="space-y-4">
            <Button variant="secondary" className="w-full justify-start">
              <span>Inbox</span>
              <Badge className="ml-auto">2</Badge>
            </Button>
            <Button variant="ghost" className="w-full justify-start">
              <span>Sent</span>
            </Button>
            <Button variant="ghost" className="w-full justify-start">
              <span>Drafts</span>
            </Button>
            <Button variant="ghost" className="w-full justify-start">
              <span>Trash</span>
            </Button>
          </div>
        </Card>

        <Card className="bg-background/50 backdrop-blur">
          <div className="p-4">
            <Input placeholder="Search emails..." />
          </div>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Subject</TableHead>
                <TableHead>From</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Date</TableHead>
                <TableHead>Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {emails.map((email) => (
                <TableRow key={email.id}>
                  <TableCell>{email.subject}</TableCell>
                  <TableCell>{email.from}</TableCell>
                  <TableCell>
                    <Badge variant={email.status === "Unread" ? "default" : "secondary"}>{email.status}</Badge>
                  </TableCell>
                  <TableCell>{email.date}</TableCell>
                  <TableCell>
                    <Button variant="ghost" size="sm">
                      View
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </Card>
      </div>
    </div>
  )
}

