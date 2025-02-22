import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

const transactions = [
  {
    id: 1,
    type: "XP Reward",
    amount: "+500 XP",
    description: "Task completion bonus",
    date: "2024-02-11",
  },
  {
    id: 2,
    type: "XP Spend",
    amount: "-200 XP",
    description: "Premium feature unlock",
    date: "2024-02-10",
  },
]

export default function WalletsPage() {
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold">Wallet</h1>

      <div className="grid gap-6 md:grid-cols-2">
        <Card className="p-6 bg-background/50 backdrop-blur">
          <h2 className="text-lg font-semibold mb-4">Balance</h2>
          <div className="space-y-4">
            <div>
              <p className="text-sm text-muted-foreground">Current XP</p>
              <p className="text-3xl font-bold text-primary">10,000 XP</p>
            </div>
            <div className="flex gap-4">
              <Button>Transfer XP</Button>
              <Button variant="outline">Convert XP</Button>
            </div>
          </div>
        </Card>

        <Card className="p-6 bg-background/50 backdrop-blur">
          <h2 className="text-lg font-semibold mb-4">Recent Transactions</h2>
          <div className="space-y-4">
            {transactions.map((tx) => (
              <div key={tx.id} className="flex items-center justify-between p-4 rounded-lg border">
                <div>
                  <h3 className="font-medium">{tx.type}</h3>
                  <p className="text-sm text-muted-foreground">{tx.description}</p>
                </div>
                <div className="text-right">
                  <span className={tx.amount.startsWith("+") ? "text-green-500" : "text-red-500"}>{tx.amount}</span>
                  <p className="text-xs text-muted-foreground">{tx.date}</p>
                </div>
              </div>
            ))}
          </div>
        </Card>
      </div>

      <Card className="bg-background/50 backdrop-blur">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Type</TableHead>
              <TableHead>Description</TableHead>
              <TableHead>Amount</TableHead>
              <TableHead>Date</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {transactions.map((tx) => (
              <TableRow key={tx.id}>
                <TableCell>{tx.type}</TableCell>
                <TableCell>{tx.description}</TableCell>
                <TableCell>
                  <span className={tx.amount.startsWith("+") ? "text-green-500" : "text-red-500"}>{tx.amount}</span>
                </TableCell>
                <TableCell>{tx.date}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Card>
    </div>
  )
}

