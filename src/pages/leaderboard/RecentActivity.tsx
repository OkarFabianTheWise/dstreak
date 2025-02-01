import { recentActivities } from "../../data"

export function RecentActivity() {
  return (
    <div className="w-full md:w-auto space-y-6 rounded-lg border border-[#1a1a1a] bg-[#0a0a0a] p-6">
      <h2 className="font-mono text-2xl text-[#00ff00]">Recent activity</h2>
      <div className="space-y-4">
        {recentActivities.map((activity) => (
          <div key={activity.id} className="flex items-start gap-4">
            <img src={activity.image || "/placeholder.svg"} alt="" className="h-24 w-32 rounded-lg object-cover" />
            <div className="flex flex-col justify-between py-1">
              <div className="space-y-1">
                <p className="font-mono text-[#00ff00]">@{activity.username}</p>
                <p className="font-mono text-white">{activity.action}</p>
              </div>
              <p className="font-mono text-sm text-[#666666]">.{activity.timestamp}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

