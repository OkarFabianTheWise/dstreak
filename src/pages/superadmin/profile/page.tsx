"use client"

import { useState } from "react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Edit2, Twitter, Send, DiscIcon as Discord, Mail, KeyRound } from "lucide-react"
import { cn } from "@/lib/utils"
import fsh from "../../../assets/image/fsh.png"
import woman from "../../../assets/image/woman.png"


export function ProfilePage() {
  const [isEditing, setIsEditing] = useState(false)

  return (
    <div className="min-h-screen w-full bg-black p-4 font-mono text-white md:p-6">
      {/* Dot matrix background */}
      <div
        className="fixed inset-0 -z-10 opacity-20"
        style={{
          backgroundImage: "radial-gradient(circle, #ffffff 1px, transparent 1px)",
          backgroundSize: "24px 24px",
        }}
      />

      <div className="mx-auto max-w-4xl">
        {/* Stats Header */}
        <div className="mb-12 grid grid-cols-2 gap-4 md:grid-cols-3">
          <div className="rounded-xl bg-zinc-900/50 p-4 backdrop-blur">
            <h3 className="text-xs text-gray-500">RECENT LOGIN</h3>
            <p className="text-lg text-green-500">18 hours ago</p>
            <p className="text-xs text-gray-500">13 - 03 - 2025</p>
          </div>

          <div className="rounded-xl bg-zinc-900/50 p-4 backdrop-blur md:col-start-3">
            <div className="flex justify-between">
              <div>
                <h3 className="text-xs text-gray-500">Members</h3>
                <p className="text-lg text-green-500">10,200</p>
              </div>
              <div>
                <h3 className="text-xs text-gray-500">Total Login</h3>
                <p className="text-lg text-green-500">600</p>
              </div>
            </div>
          </div>
        </div>

        {/* Profile Section */}
        <div className="relative mb-8 flex flex-col items-center">
          {/* Rocket Icon */}
          <div className="absolute -top-12 flex items-center justify-center">
            {/* <Rocket className="h-8 w-8 rotate-45 text-pink-500" style={{ filter: "drop-shadow(0 0 8px #ec4899)" }} /> */}
            <img
                src={fsh}
                alt="Profile"
                className="w-[30px] object-cover"
              />
            <div className="absolute animate-ping">
              {/* <Rocket className="h-8 w-8 rotate-45 text-pink-500 opacity-50" /> */}
              <img
                src={fsh}
                alt="Profile"
                className="w-[30px] object-cover"
              />
            </div>
          </div>

          {/* Edit Button */}
          <Button
            variant="ghost"
            size="icon"
            className="absolute left-0 top-0 text-green-500 hover:text-green-400"
            onClick={() => setIsEditing(!isEditing)}
          >
            <Edit2 className="h-5 w-5" />
          </Button>

          {/* Avatar */}
          <div className="relative mb-4">
            <div className="size-32 overflow-hidden rounded-full border-2 border-white/10 md:size-40">
              <img
                src={woman}
                alt="Profile"
                className="size-full object-cover [box-shadow:0_0_40px_rgba(74,222,128,0.2)]"
              />
            </div>
            <div className="absolute inset-0 rounded-full [box-shadow:0_0_40px_rgba(74,222,128,0.2)] shadow-[0_0_20px_rgba(74,222,128,0.2)] border border-primary" />
          </div>

          {/* Super Admin Badge */}
          <Badge className="bg-pink-500 text-white hover:bg-pink-600">SUPER ADMIN</Badge>
        </div>

        {/* Profile Forms */}
        <div className="grid gap-4 md:grid-cols-2">
          <div className="flex items-center gap-3 rounded-full bg-zinc-900/50 px-4 py-3 backdrop-blur">
            <div className="size-6 rounded-full bg-zinc-800" />
            <Input
              defaultValue="Sandra Best Oxford"
              readOnly={!isEditing}
              className="border-none bg-transparent text-lg focus-visible:ring-0"
            />
          </div>

          <div className="flex items-center gap-3 rounded-full bg-zinc-900/50 px-4 py-3 backdrop-blur">
            <div className="size-6 rounded-full bg-zinc-800" />
            <Input
              defaultValue="SnadracodeX"
              readOnly={!isEditing}
              className="border-none bg-transparent text-lg focus-visible:ring-0"
            />
          </div>

          <div className="flex items-center gap-3 rounded-full bg-zinc-900/50 px-4 py-3 backdrop-blur">
            <Twitter className="h-5 w-5 text-gray-500" />
            <Input
              defaultValue="@sandbest"
              readOnly={!isEditing}
              className="border-none bg-transparent focus-visible:ring-0"
            />
          </div>

          <div className="flex items-center gap-3 rounded-full bg-zinc-900/50 px-4 py-3 backdrop-blur">
            <Send className="h-5 w-5 text-gray-500" />
            <Input
              defaultValue="@sandbest0x"
              readOnly={!isEditing}
              className="border-none bg-transparent focus-visible:ring-0"
            />
          </div>

          <div className="flex items-center gap-3 rounded-full bg-zinc-900/50 px-4 py-3 backdrop-blur">
            <Discord className="h-5 w-5 text-gray-500" />
            <Input
              defaultValue="@sandbest"
              readOnly={!isEditing}
              className="border-none bg-transparent focus-visible:ring-0"
            />
          </div>

          <div className="flex items-center gap-3 rounded-full bg-zinc-900/50 px-4 py-3 backdrop-blur">
            <KeyRound className="h-5 w-5 text-gray-500" />
            <span className="text-gray-400">Change Password</span>
          </div>

          <div className="relative flex items-center gap-3 rounded-full bg-zinc-900/50 px-4 py-3 backdrop-blur md:col-span-2">
            <Mail className="h-5 w-5 text-gray-500" />
            <Input
              defaultValue="sandra@gmail.com"
              readOnly={!isEditing}
              className="border-none bg-transparent focus-visible:ring-0"
            />
            <Button variant="ghost" size="sm" className="absolute right-4 text-green-500 hover:text-green-400">
              Verify
            </Button>
          </div>
        </div>

        {/* Save Button */}
        <div className="mt-8">
          <Button
            className={cn(
              "w-full rounded-full bg-green-500 py-6 text-lg font-bold text-black hover:bg-green-400",
              "transition-all duration-300 hover:shadow-[0_0_20px_rgba(74,222,128,0.3)]",
            )}
            onClick={() => setIsEditing(false)}
          >
            Save
          </Button>
          <p className="mt-4 text-center text-sm text-gray-500">You can only make change once every 7 days.</p>
        </div>
      </div>
    </div>
  )
}

