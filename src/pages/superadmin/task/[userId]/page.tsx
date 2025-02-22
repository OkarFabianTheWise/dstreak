"use client";

import type React from "react";

import { useState } from "react";
import { Plus, ChevronDown, ImageIcon } from "lucide-react";
import { format } from "date-fns";
import { Calendar } from "@/components/ui/calendar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Switch } from "@/components/ui/switch";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { TaskList } from "./assign-task";

export default function AssignTaskPage({}: {
  params: { userId: string };
}) {
  const [startDate, setStartDate] = useState<Date>();
  const [endDate, setEndDate] = useState<Date>();
  const [image, setImage] = useState<string>();
  const [amount, setAmount] = useState("");

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImage(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="min-h-screen bg-black p-4 lg:p-6">
      <div className="mx-auto max-w-6xl space-y-6 lg:space-y-8">
        {/* Header */}
        <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
          <div className="flex items-center gap-2 text-[#51FF00]">
            <Plus className="h-5 w-5" />
            <h1 className="text-xl font-mono">Create Task</h1>
          </div>

          <div className="flex flex-col gap-4 sm:flex-row sm:flex-wrap sm:items-center">
            {/* Date and Currency Controls */}
            <div className="grid w-full gap-2 sm:w-auto sm:grid-cols-2 lg:flex lg:gap-4">
              {/* Start Date */}
              <Popover>
                <PopoverTrigger asChild>
                  <Button
                    variant="outline"
                    className="w-full justify-start border-zinc-800 bg-transparent font-mono text-white hover:bg-zinc-800/50 sm:w-[180px]"
                  >
                    Start{" "}
                    {startDate ? format(startDate, "dd/MM/yyyy") : "DD/MM/YYYY"}
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0 bg-background" align="start">
                  <Calendar
                    mode="single"
                    selected={startDate}
                    onSelect={setStartDate}
                    initialFocus
                    className="bg-background"
                  />
                </PopoverContent>
              </Popover>

              {/* End Date */}
              <Popover>
                <PopoverTrigger asChild>
                  <Button
                    variant="outline"
                    className="w-full justify-start border-zinc-800 bg-transparent font-mono text-white hover:bg-zinc-800/50 sm:w-[180px]"
                  >
                    Ends{" "}
                    {endDate ? format(endDate, "dd/MM/yyyy") : "DD/MM/YYYY"}
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-full bg-background p-0" align="start">
                  <Calendar
                    mode="single"
                    selected={endDate}
                    onSelect={setEndDate}
                    initialFocus
                    className="bg-background"
                  />
                </PopoverContent>
              </Popover>
            </div>

            {/* Currency and Amount Controls */}
            <div className="flex items-center gap-2 sm:gap-4">
              <Button
                variant="outline"
                className="border-zinc-800 bg-transparent font-mono text-white hover:bg-zinc-800/50"
              >
                USDT
                <ChevronDown className="ml-2 h-4 w-4" />
              </Button>

              <Input
                type="number"
                placeholder="Amount"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                className="w-full border-zinc-800 bg-transparent font-mono text-white placeholder:text-zinc-500 sm:w-[100px]"
              />

              <div className="flex items-center gap-2 ml-auto sm:ml-0">
                <span className="font-mono text-sm text-zinc-400">MODE</span>
                <Switch className="data-[state=checked]:bg-[#51FF00]" />
              </div>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="grid gap-6 lg:grid-cols-[400px,1fr]">
          {/* Image Upload Area */}
          <div className="relative aspect-square rounded-lg border border-zinc-800 bg-zinc-900/50">
            <input
              type="file"
              accept="image/*"
              onChange={handleImageUpload}
              className="absolute inset-0 cursor-pointer opacity-0"
            />
            {image ? (
              <img
                src={image || "/placeholder.svg"}
                alt="Task preview"
                className="h-full w-full rounded-lg object-cover"
              />
            ) : (
              <div className="flex h-full items-center justify-center">
                <ImageIcon className="h-12 w-12 text-[#51FF00]" />
              </div>
            )}
          </div>

          {/* Form Fields */}
          <div className="space-y-4">
            <Input
              placeholder="Title"
              className="border-zinc-800 bg-zinc-900/50 font-mono text-white placeholder:text-zinc-500"
            />
            <Textarea
              placeholder="Body"
              className="min-h-[200px] border-zinc-800 bg-zinc-900/50 font-mono text-white placeholder:text-zinc-500"
            />
            <Button className="w-full bg-[#51FF00] font-mono text-black hover:bg-[#51FF00]/90">
              Save
            </Button>
          </div>
        </div>

        {/* Task List Section */}
        <div className="space-y-4">
          <Tabs defaultValue="all" className="w-full">
            <TabsList className="w-full bg-zinc-900/50">
              <TabsTrigger
                value="all"
                className="flex-1 data-[state=active]:bg-[#51FF00] data-[state=active]:text-black"
              >
                All
              </TabsTrigger>
              <TabsTrigger
                value="active"
                className="flex-1 data-[state=active]:bg-[#51FF00] data-[state=active]:text-black"
              >
                Active
              </TabsTrigger>
              <TabsTrigger
                value="completed"
                className="flex-1 data-[state=active]:bg-[#51FF00] data-[state=active]:text-black"
              >
                Completed
              </TabsTrigger>
            </TabsList>
          </Tabs>
          <TaskList />
        </div>
      </div>
    </div>
  );
}
