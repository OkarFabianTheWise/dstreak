import { StatsCard } from "@/components/superAdmin/dashboard/statCard";
import { CustomLineChart } from "@/components/superAdmin/charts/lineChart";
import { DonutChart } from "@/components/superAdmin/charts/donutChart";
import { XPRankBoard } from "@/components/superAdmin/athRank/xp-rank-board";
import { RecentChanges } from "@/components/superAdmin/athRank/recentChange";
import { SignUpsCard } from "@/components/superAdmin/athRank/sign-ups-card";
import { TaskStatusCard } from "@/components/superAdmin/athRank/task-status-card";

const mockData = {
  onlineCount: 650,
  weeklySubmission: [150, 180, 220, 240, 200, 180, 170],
  totalMembers: 10200,
  memberGrowth: 0.9,
  regions: [
    { name: "Anambra", percentage: 39 },
    { name: "Lagos", percentage: 26 },
    { name: "Kaduna", percentage: 11 },
    { name: "Others", percentage: 24 },
  ],
  totalXP: 210050,
  xpGrowth: -10,
  taskStats: {
    completed: 352,
    active: 5,
  },
  topPerformers: [
    { username: "sindcodeXKX", xp: 10000, growth: 10 },
    { username: "Samuelcodebass", xp: 9500, growth: 20 },
    { username: "Godsarehappy", xp: 9400, growth: 40 },
  ],
};

export default function SuperAdminDashboard() {
  return (
    <div className="flex bg-black">
      <div className="flex-1">
        <main className="p-6 space-y-6">
          <div className="grid gap-6 grid-cols-1 lg:grid-cols-2">
            <div className="grid gap-6 grid-cols-1">
              <div className="">
                <XPRankBoard />
              </div>
              <StatsCard title="Total XP" value={mockData.totalXP}>
                <div className="text-sm text-red-500">
                  {mockData.xpGrowth}% vs Last Month
                </div>
              </StatsCard>
              <StatsCard
                title="Weekly Task Submission"
                value={mockData.weeklySubmission[6]}
              >
                <CustomLineChart
                  data={mockData.weeklySubmission}
                  labels={["MON", "TUE", "WED", "THU", "FRI", "SAT", "SUN"]}
                />
              </StatsCard>
            </div>
            <div className="flex flex-col gap-6 grid-cols-1">
              <StatsCard title="Total Members" value={mockData.totalMembers}>
                <DonutChart data={mockData.regions} />
              </StatsCard>
              <SignUpsCard />
            </div>
          </div>

          <div className="grid gap-6 lg:grid-cols-2">
            <TaskStatusCard />
          <RecentChanges />
          </div>
        </main>
      </div>
    </div>
  );
}
