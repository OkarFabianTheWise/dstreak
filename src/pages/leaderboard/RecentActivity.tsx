import { useEffect, useState } from "react";
import { activityRequests } from "@/utils/api/activity.request";

export function RecentActivity() {
  const [activities, setActivities] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchActivities = async () => {
    try {
      const { success, message, data } = await activityRequests.getActivities(
        setIsLoading
      );

      if (!success) {
        setError(message);
        return;
      }

      setActivities(data);
    } catch (error: any) {
      setError(error.message || "Failed to fetch activities");
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchActivities();
  }, []);

  if (isLoading) {
    return <div>Loading activities...</div>;
  }

  return (
    <div className="w-full md:w-auto space-y-6 rounded-lg border border-[#1a1a1a] bg-[#0a0a0a] p-6">
      <h2 className="font-mono text-2xl text-[#00ff00]">Recent activity</h2>
      <div className="space-y-4">
        {activities.length > 0 ? (
          activities.map((activity) => (
            <div key={activity} className="flex items-start gap-4">
              <img
                src={activity || "/placeholder.svg"}
                alt=""
                className="h-24 w-32 rounded-lg object-cover"
              />
              <div className="flex flex-col justify-between py-1">
                <div className="space-y-1">
                  <p className="font-mono text-[#00ff00]">@{activity}</p>
                  <p className="font-mono text-white">{activity}</p>
                </div>
                <p className="font-mono text-sm text-[#666666]">.{activity}</p>
              </div>
            </div>
          ))
        ) : (
          <div>No existing activities.</div>
        )}
      </div>
    </div>
  );
}
