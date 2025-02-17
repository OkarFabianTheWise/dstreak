const endpoint = import.meta.env.VITE_DEV_URL as string;

interface LeaderboardEntry {
    id: string;
    full_name: string | null;
    username: string;
    total_points: number;
    rank: number;
  }
  
interface LeaderboardResponse {
  success: boolean;
  message: string;
  data: {
      data: LeaderboardEntry[];
      page: number;
      limit: number;
      total: number;
      total_pages: number;
  };
}

interface FetchLeaderboardParams {
page?: number;
limit?: number;
duration: 'daily' | 'weekly' | 'monthly' | 'all-time';
}
  
export const fetchLeaderboard = async ({
    page = 1,
    limit = 100,
    duration = 'weekly',
  }: FetchLeaderboardParams,
  setErrorMessage: (message: string) => void,
): Promise<LeaderboardResponse | any> => {
    try {
      const token = localStorage.getItem('accessToken');

      const response = await fetch(
        `${endpoint}/leaderboard?page=${page}&limit=${limit}&duration=${duration}`,
        {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            ...(token && { Authorization: `Bearer ${token}` }),
          },
        }
      );
  
      const data: LeaderboardResponse = await response.json();
  
      if (!data.success) {
        setErrorMessage(data.message || 'Failed to fetch leaderboard');
      }
  
      return data;
    } catch (error: any) {
        setErrorMessage(error.message || 'An error occurred while fetching the leaderboard');
    }
  };