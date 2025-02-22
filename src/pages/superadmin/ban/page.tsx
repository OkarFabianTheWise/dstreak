import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"

const bannedUsers = [
  {
    id: 1,
    username: "user123",
    reason: "Spam",
    date: "2024-02-01",
    duration: "30 days",
  },
  {
    id: 2,
    username: "user456",
    reason: "Inappropriate behavior",
    date: "2024-02-05",
    duration: "Permanent",
  },
]

export default function BanPage() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold">Ban Management</h1>
        <Button variant="destructive">Ban User</Button>
      </div>

      <Card className="bg-background/50 backdrop-blur">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Username</TableHead>
              <TableHead>Reason</TableHead>
              <TableHead>Date</TableHead>
              <TableHead>Duration</TableHead>
              <TableHead>Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {bannedUsers.map((user) => (
              <TableRow key={user.id}>
                <TableCell>{user.username}</TableCell>
                <TableCell>{user.reason}</TableCell>
                <TableCell>{user.date}</TableCell>
                <TableCell>
                  <Badge variant="destructive">{user.duration}</Badge>
                </TableCell>
                <TableCell>
                  <Button variant="ghost" size="sm">
                    Unban
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Card>
    </div>
  )
}

