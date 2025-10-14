// Mock data for Social Media Analytics Dashboard

// Generate dates for the last 30 days
const generateDates = (days) => {
  const dates = [];
  for (let i = days - 1; i >= 0; i--) {
    const date = new Date();
    date.setDate(date.getDate() - i);
    dates.push(date.toISOString().split('T')[0]);
  }
  return dates;
};

// Generate random engagement data
const generateEngagementData = (days) => {
  const dates = generateDates(days);
  return dates.map(date => ({
    date,
    likes: Math.floor(Math.random() * 500) + 100,
    comments: Math.floor(Math.random() * 100) + 20,
    shares: Math.floor(Math.random() * 50) + 10,
  }));
};

// Generate user growth data
const generateUserGrowthData = (days) => {
  const dates = generateDates(days);
  let totalUsers = 1000;
  return dates.map(date => {
    const newUsers = Math.floor(Math.random() * 50) + 5;
    totalUsers += newUsers;
    return {
      date,
      newUsers,
      totalUsers,
    };
  });
};

// Mock Analytics Data
export const mockData = {
  // Key Metrics
  keyMetrics: {
    totalUsers: 15420,
    totalPosts: 2847,
    totalLikes: 45230,
    engagementRate: 6.8, // percentage
  },

  // Daily engagement data for line chart
  dailyEngagement: generateEngagementData(30),

  // Top performing posts for bar chart
  topPosts: [
    {
      id: 1,
      title: "Summer Vacation Tips",
      likes: 1250,
      comments: 89,
      shares: 45,
      author: "Travel_Guru",
      date: "2024-10-10",
    },
    {
      id: 2,
      title: "Best Coffee Recipes",
      likes: 980,
      comments: 67,
      shares: 32,
      author: "CoffeeLover23",
      date: "2024-10-09",
    },
    {
      id: 3,
      title: "Tech News Weekly",
      likes: 875,
      comments: 124,
      shares: 78,
      author: "TechReporter",
      date: "2024-10-08",
    },
    {
      id: 4,
      title: "Healthy Meal Prep",
      likes: 756,
      comments: 43,
      shares: 29,
      author: "HealthyEats",
      date: "2024-10-07",
    },
    {
      id: 5,
      title: "Weekend Movie Reviews",
      likes: 642,
      comments: 91,
      shares: 37,
      author: "MovieBuff",
      date: "2024-10-06",
    },
  ],

  // User growth data for area chart
  userGrowth: generateUserGrowthData(30),

  // Recent activity feed
  recentActivities: [
    {
      id: 1,
      type: "new_user",
      user: "sarah_j",
      action: "joined the platform",
      time: "2 minutes ago",
      avatar: "👩‍💼",
    },
    {
      id: 2,
      type: "new_post",
      user: "mike_dev",
      action: "posted 'JavaScript Tips'",
      time: "5 minutes ago",
      avatar: "👨‍💻",
    },
    {
      id: 3,
      type: "like",
      user: "anna_designer",
      action: "liked 'Summer Vacation Tips'",
      time: "8 minutes ago",
      avatar: "👩‍🎨",
    },
    {
      id: 4,
      type: "comment",
      user: "john_photographer",
      action: "commented on 'Best Coffee Recipes'",
      time: "12 minutes ago",
      avatar: "📸",
    },
    {
      id: 5,
      type: "share",
      user: "lisa_writer",
      action: "shared 'Tech News Weekly'",
      time: "15 minutes ago",
      avatar: "✍️",
    },
    {
      id: 6,
      type: "new_user",
      user: "david_student",
      action: "joined the platform",
      time: "18 minutes ago",
      avatar: "🎓",
    },
    {
      id: 7,
      type: "like",
      user: "emma_chef",
      action: "liked 'Healthy Meal Prep'",
      time: "22 minutes ago",
      avatar: "👩‍🍳",
    },
    {
      id: 8,
      type: "new_post",
      user: "alex_gamer",
      action: "posted 'Game Review: Latest RPG'",
      time: "25 minutes ago",
      avatar: "🎮",
    },
  ],

  // Weekly engagement comparison
  weeklyEngagement: {
    thisWeek: {
      likes: 3420,
      comments: 567,
      shares: 234,
    },
    lastWeek: {
      likes: 3180,
      comments: 523,
      shares: 198,
    },
  },

  // Platform demographics (for future use)
  demographics: {
    ageGroups: [
      { range: "18-24", percentage: 28, count: 4318 },
      { range: "25-34", percentage: 35, count: 5397 },
      { range: "35-44", percentage: 22, count: 3392 },
      { range: "45-54", percentage: 10, count: 1542 },
      { range: "55+", percentage: 5, count: 771 },
    ],
    deviceUsage: [
      { device: "Mobile", percentage: 68, count: 10486 },
      { device: "Desktop", percentage: 24, count: 3701 },
      { device: "Tablet", percentage: 8, count: 1233 },
    ],
  },
};

export default mockData;