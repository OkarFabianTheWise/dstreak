import { ScrollArea } from "@/components/ui/scroll-area";

const tasks = [
  {
    id: 1,
    title: "Create UBS Wallet on Solana.",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-02-15%20212224-4D6zzHoVJybBLV7tSTyz5ltv0SlKFa.png",
    summary:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut",
    startDate: "15-02-25",
    endDate: "20-02-25",
    submission: 20,
    taskNumber: 15,
  },
  // Add more mock tasks as needed
];

export function TaskList() {
  return (
    <div className="grid gap-4 lg:grid-cols-[1fr,2fr]">
      {/* Task List */}
      <ScrollArea className="h-[200px] lg:h-[300px]">
        <div className="space-y-2 pr-4">
          {tasks.map((task) => (
            <div
              key={task.id}
              className="flex items-center gap-2 rounded-lg bg-[#51FF00] p-2"
            >
              <div className="h-10 w-10 flex-shrink-0 overflow-hidden rounded">
                <img
                  src={task.image || "/placeholder.svg"}
                  alt={task.title}
                  className="h-full w-full object-cover"
                />
              </div>
              <span className="font-mono text-sm text-black line-clamp-2">
                {task.title}
              </span>
            </div>
          ))}
        </div>
      </ScrollArea>

      {/* Task Details */}
      <div className="rounded-lg border border-zinc-800 bg-zinc-900/50 p-4 lg:p-6">
        <div className="mb-4 flex flex-col gap-2 lg:flex-row lg:items-center lg:justify-between">
          <h3 className="font-mono text-lg font-semibold text-[#51FF00]">
            Title
          </h3>
          <div className="font-mono text-sm text-zinc-400">
            <div className="flex flex-wrap gap-x-4">
              <span>Start {tasks[0].startDate}</span>
              <span>Ends {tasks[0].endDate}</span>
              <span>Submission: {tasks[0].submission}</span>
            </div>
          </div>
        </div>

        <h2 className="mb-4 font-mono text-xl font-bold text-white">
          {tasks[0].title}
        </h2>

        <div className="mb-4">
          <h4 className="mb-2 font-mono text-sm font-semibold text-[#51FF00]">
            Summary
          </h4>
          <p className="font-mono text-sm text-zinc-300">{tasks[0].summary}</p>
        </div>

        <div className="font-mono text-sm text-[#51FF00]">
          Task {tasks[0].taskNumber}
        </div>
      </div>
    </div>
  );
}
