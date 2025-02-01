export interface RankingUser {
  name: string;
  username: string;
  image: string;
  xps: number;
}

export interface Activity {
  id: string;
  username: string;
  action: string;
  timestamp: string;
  image: string;
}

function generateMoreUsers(baseUsers: RankingUser[], multiplier: number): RankingUser[] {
    const result: RankingUser[] = [...baseUsers]
    for (let i = 1; i < multiplier; i++) {
      baseUsers.forEach((user) => {
        result.push({
          ...user,
          xps: Math.floor(user.xps * (1 - i * 0.1)), // Decrease XP for each page
          name: `${user.name} ${i + 1}`, // Add number to name to make it unique
          username: `${user.username}${i + 1}`, // Add number to username to make it unique
        })
      })
    }
    return result
  }
  

const baseWeeklyRanking: RankingUser[] = [
  {
    name: "Alice Johnson",
    username: "alicej",
    image:
      "https://images.pexels.com/photos/30323030/pexels-photo-30323030/free-photo-of-charming-evening-street-lamp-in-copenhagen.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
    xps: 1200,
  },
  {
    name: "Bob Smith",
    username: "bobsmith",
    image:
      "https://images.pexels.com/photos/30323030/pexels-photo-30323030/free-photo-of-charming-evening-street-lamp-in-copenhagen.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
    xps: 1150,
  },
  {
    name: "Charlie Brown",
    username: "charlieb",
    image:
      "https://images.pexels.com/photos/30323030/pexels-photo-30323030/free-photo-of-charming-evening-street-lamp-in-copenhagen.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
    xps: 1100,
  },
  {
    name: "David Wilson",
    username: "davidw",
    image:
      "https://images.pexels.com/photos/30323030/pexels-photo-30323030/free-photo-of-charming-evening-street-lamp-in-copenhagen.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
    xps: 1050,
  },
  {
    name: "Eva Green",
    username: "evagreen",
    image:
      "https://images.pexels.com/photos/30323030/pexels-photo-30323030/free-photo-of-charming-evening-street-lamp-in-copenhagen.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
    xps: 1000,
  },
  {
    name: "Frank White",
    username: "frankw",
    image:
      "https://images.pexels.com/photos/30323030/pexels-photo-30323030/free-photo-of-charming-evening-street-lamp-in-copenhagen.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
    xps: 950,
  },
  {
    name: "Grace Lee",
    username: "gracelee",
    image:
      "https://images.pexels.com/photos/30323030/pexels-photo-30323030/free-photo-of-charming-evening-street-lamp-in-copenhagen.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
    xps: 900,
  },
  {
    name: "Hannah Scott",
    username: "hannahs",
    image:
      "https://images.pexels.com/photos/30323030/pexels-photo-30323030/free-photo-of-charming-evening-street-lamp-in-copenhagen.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
    xps: 850,
  },
  {
    name: "Ian Clark",
    username: "ianclark",
    image:
      "https://images.pexels.com/photos/30323030/pexels-photo-30323030/free-photo-of-charming-evening-street-lamp-in-copenhagen.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
    xps: 800,
  },
  {
    name: "Jack Turner",
    username: "jackt",
    image:
      "https://images.pexels.com/photos/30323030/pexels-photo-30323030/free-photo-of-charming-evening-street-lamp-in-copenhagen.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
    xps: 750,
  },
  {
    name: "Karen Adams",
    username: "karenadams",
    image:
      "https://images.pexels.com/photos/30323030/pexels-photo-30323030/free-photo-of-charming-evening-street-lamp-in-copenhagen.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
    xps: 700,
  },
  {
    name: "Leo King",
    username: "leoking",
    image:
      "https://images.pexels.com/photos/30323030/pexels-photo-30323030/free-photo-of-charming-evening-street-lamp-in-copenhagen.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
    xps: 650,
  },
  {
    name: "Mia Young",
    username: "miayoung",
    image:
      "https://images.pexels.com/photos/30323030/pexels-photo-30323030/free-photo-of-charming-evening-street-lamp-in-copenhagen.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
    xps: 600,
  },
  {
    name: "Noah Hill",
    username: "noahhill",
    image:
      "https://images.pexels.com/photos/30323030/pexels-photo-30323030/free-photo-of-charming-evening-street-lamp-in-copenhagen.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
    xps: 550,
  },
  {
    name: "Olivia Baker",
    username: "oliviab",
    image:
      "https://images.pexels.com/photos/30323030/pexels-photo-30323030/free-photo-of-charming-evening-street-lamp-in-copenhagen.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
    xps: 500,
  },
];

const baseMonthlyRanking: RankingUser[] = [
  {
    name: "Alice Johnson",
    username: "alicej",
    image:
      "https://images.pexels.com/photos/30323030/pexels-photo-30323030/free-photo-of-charming-evening-street-lamp-in-copenhagen.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
    xps: 4800,
  },
  {
    name: "Bob Smith",
    username: "bobsmith",
    image:
      "https://images.pexels.com/photos/30323030/pexels-photo-30323030/free-photo-of-charming-evening-street-lamp-in-copenhagen.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
    xps: 4600,
  },
  {
    name: "Charlie Brown",
    username: "charlieb",
    image:
      "https://images.pexels.com/photos/30323030/pexels-photo-30323030/free-photo-of-charming-evening-street-lamp-in-copenhagen.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
    xps: 4400,
  },
  {
    name: "David Wilson",
    username: "davidw",
    image:
      "https://images.pexels.com/photos/30323030/pexels-photo-30323030/free-photo-of-charming-evening-street-lamp-in-copenhagen.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
    xps: 4200,
  },
  {
    name: "Eva Green",
    username: "evagreen",
    image:
      "https://images.pexels.com/photos/30323030/pexels-photo-30323030/free-photo-of-charming-evening-street-lamp-in-copenhagen.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
    xps: 4000,
  },
  {
    name: "Frank White",
    username: "frankw",
    image:
      "https://images.pexels.com/photos/30323030/pexels-photo-30323030/free-photo-of-charming-evening-street-lamp-in-copenhagen.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
    xps: 3800,
  },
  {
    name: "Grace Lee",
    username: "gracelee",
    image:
      "https://images.pexels.com/photos/30323030/pexels-photo-30323030/free-photo-of-charming-evening-street-lamp-in-copenhagen.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
    xps: 3600,
  },
  {
    name: "Hannah Scott",
    username: "hannahs",
    image:
      "https://images.pexels.com/photos/30323030/pexels-photo-30323030/free-photo-of-charming-evening-street-lamp-in-copenhagen.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
    xps: 3400,
  },
  {
    name: "Ian Clark",
    username: "ianclark",
    image:
      "https://images.pexels.com/photos/30323030/pexels-photo-30323030/free-photo-of-charming-evening-street-lamp-in-copenhagen.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
    xps: 3200,
  },
  {
    name: "Jack Turner",
    username: "jackt",
    image:
      "https://images.pexels.com/photos/30323030/pexels-photo-30323030/free-photo-of-charming-evening-street-lamp-in-copenhagen.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
    xps: 3000,
  },
  {
    name: "Karen Adams",
    username: "karenadams",
    image:
      "https://images.pexels.com/photos/30323030/pexels-photo-30323030/free-photo-of-charming-evening-street-lamp-in-copenhagen.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
    xps: 2800,
  },
  {
    name: "Leo King",
    username: "leoking",
    image:
      "https://images.pexels.com/photos/30323030/pexels-photo-30323030/free-photo-of-charming-evening-street-lamp-in-copenhagen.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
    xps: 2600,
  },
  {
    name: "Mia Young",
    username: "miayoung",
    image:
      "https://images.pexels.com/photos/30323030/pexels-photo-30323030/free-photo-of-charming-evening-street-lamp-in-copenhagen.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
    xps: 2400,
  },
  {
    name: "Noah Hill",
    username: "noahhill",
    image:
      "https://images.pexels.com/photos/30323030/pexels-photo-30323030/free-photo-of-charming-evening-street-lamp-in-copenhagen.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
    xps: 2200,
  },
  {
    name: "Olivia Baker",
    username: "oliviab",
    image:
      "https://images.pexels.com/photos/30323030/pexels-photo-30323030/free-photo-of-charming-evening-street-lamp-in-copenhagen.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
    xps: 2000,
  },
];

export const recentActivities: Activity[] = [
  {
    id: "1",
    username: "felixthedev",
    action: "just completed a task",
    timestamp: "30min",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-01-26%20232207-iDSONRiVh0Y5OZSnx1PTQd7DD9SmC4.png",
  },
  {
    id: "2",
    username: "nattyproff",
    action: "just completed a task",
    timestamp: "30min",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-01-26%20232207-iDSONRiVh0Y5OZSnx1PTQd7DD9SmC4.png",
  },
  {
    id: "3",
    username: "danthedev",
    action: "just completed a task",
    timestamp: "30min",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-01-26%20232207-iDSONRiVh0Y5OZSnx1PTQd7DD9SmC4.png",
  },
  {
    id: "4",
    username: "felixthedev",
    action: "just completed a task",
    timestamp: "30min",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-01-26%20232207-iDSONRiVh0Y5OZSnx1PTQd7DD9SmC4.png",
  },
];


export const weeklyRanking = generateMoreUsers(baseWeeklyRanking, 4) // Generate 60 users
export const monthlyRanking = generateMoreUsers(baseMonthlyRanking, 4) // Generate 60 users