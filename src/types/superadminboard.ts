export interface NavItem {
  id: string;
  label: string;
  icon: string;
  path: string;
}

export interface TopPerformer {
  username: string;
  xp: number;
  growth: number;
}

export interface TaskStats {
  completed: number;
  active: number;
}

export interface RegionData {
  name: string;
  percentage: number;
}

export interface RecentChange {
  username: string;
  type: string;
  xp: number;
}

export interface DashboardData {
  onlineCount: number;
  weeklySubmission: number[];
  totalMembers: number;
  memberGrowth: number;
  regions: RegionData[];
  totalXP: number;
  xpGrowth: number;
  taskStats: TaskStats;
  topPerformers: TopPerformer[];
  recentChanges: RecentChange[];
  signUps: number[];
}

export type UserRole = "SUPER_ADMIN" | "ADMIN" | "OTHER";

// Base interface for common fields
export interface BaseUser {
  id: string;
  name: string;
  username: string;
  avatar: string;
  state: string;
  rank: number;
}

// Extended interface for users with additional fields
export interface User extends BaseUser {
  role: UserRole;
  task: string;
  xp: number;
}

// Member interface for task assignment
export interface Member extends BaseUser {
  isAssigned?: boolean;
}
