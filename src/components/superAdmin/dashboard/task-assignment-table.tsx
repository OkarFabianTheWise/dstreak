"use client";

import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import members from "@/assets/image/members.png";

type User = {
  id: number;
  name: string;
  username: string;
  state: string;
  rank: number;
  avatar: string;
};

const initialUsers: User[] = [
  {
    id: 1,
    name: "Simon Peter",
    username: "Petermon",
    state: "Anambra",
    rank: 21,
    avatar:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-02-15%20141253-HFiRRLVDTPavBbMQFUNENbQVV14Mz8.png",
  },
  {
    id: 2,
    name: "Helen Samsam",
    username: "Elenss",
    state: "Lagos",
    rank: 23,
    avatar:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-02-15%20141253-HFiRRLVDTPavBbMQFUNENbQVV14Mz8.png",
  },
  {
    id: 3,
    name: "Sunny Ike Osisi",
    username: "Ikeosi",
    state: "Kaduna",
    rank: 23,
    avatar:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-02-15%20141253-HFiRRLVDTPavBbMQFUNENbQVV14Mz8.png",
  },
  {
    id: 4,
    name: "Musa Toba",
    username: "Tobam",
    state: "Abuja",
    rank: 22,
    avatar:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-02-15%20141253-HFiRRLVDTPavBbMQFUNENbQVV14Mz8.png",
  },
  {
    id: 5,
    name: "Micheal Metu",
    username: "Metu",
    state: "Enugu",
    rank: 30,
    avatar:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-02-15%20141253-HFiRRLVDTPavBbMQFUNENbQVV14Mz8.png",
  },
];

export default function UserTable() {
  const [users] = useState<User[]>(initialUsers);
  const router = useNavigate();

  const handleRowClick = (userId: number) => {
    router(`/super-admin/task/${userId}`);
  };

  return (
    <div className="rounded-lg border border-zinc-800 bg-zinc-900/50">
      <Table>
        <TableHeader>
          <TableRow className="border-zinc-800 hover:bg-transparent">
            <TableHead className="text-[#51FF00]">Name</TableHead>
            <TableHead className="text-[#51FF00]">Username</TableHead>
            <TableHead className="text-[#51FF00]">Role</TableHead>
            <TableHead className="text-[#51FF00]">State</TableHead>
            <TableHead className="text-[#51FF00]">Rank</TableHead>
            <TableHead className="text-right text-[#51FF00]">
              DEVSTREAK
            </TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {users.map((user) => (
            <TableRow
              key={user.id}
              className="cursor-pointer border-zinc-800 text-white hover:bg-zinc-800"
              onClick={() => handleRowClick(user.id)}
            >
              <TableCell className="flex items-center gap-2">
                <div className="h-8 w-8 overflow-hidden rounded-full">
                  <img
                    src={user.avatar || "/placeholder.svg"}
                    alt={user.name}
                    className="h-full w-full object-cover"
                  />
                </div>
                {user.name}
              </TableCell>
              <TableCell>{user.username}</TableCell>
              <TableCell>
                <img
                  src={members || "/placeholder.svg"}
                  alt={user.name}
                  className="h-6 w-6 object-cover"
                />
              </TableCell>
              <TableCell>{user.state}</TableCell>
              <TableCell>{user.rank}</TableCell>
              <TableCell className="text-right">
                <Button
                  variant="outline"
                  className="border-[#51FF00] text-[#51FF00] hover:bg-[#51FF00] hover:text-black"
                  onClick={(e) => {
                    e.stopPropagation();
                    // Handle release action
                  }}
                >
                  Release
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
