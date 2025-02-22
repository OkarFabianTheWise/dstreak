import { useEffect, useState } from "react";
// import { recentActivities } from "../../data";

export function RecentActivity() {
  const [activities, setActivities] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchActivities = async () => {
      try {
        const response = await fetch(
          `${import.meta.env.VITE_DEV_URL}/activities?page=1&limit=20`
        );
        const data = await response.json();
        setActivities(data);
        console.log("Activities fetched:", data.activities);
      } catch (error) {
        console.error("Error fetching activities:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchActivities();
  }, []);

  if (loading) {
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
                  <p className="font-mono text-[#00ff00]">
                    @{activity}
                  </p>
                  <p className="font-mono text-white">{activity}</p>
                </div>
                <p className="font-mono text-sm text-[#666666]">
                  .{activity}
                </p>
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
