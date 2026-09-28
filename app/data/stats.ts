export interface StatItem {
  id: string;
  number: string;
  description: string;
  offset?: boolean;
}

export interface StatsData {
  eyebrow: string;
  titleLine1: string;
  titleLine2: string;
  description: string;
  stats: StatItem[];
}

export const statsData: StatsData = {
  eyebrow: "Riwaaz in numbers",
  titleLine1: "Creating Memories Across",
  titleLine2: "Every Celebration",
  description:
    "A glimpse at the celebrations, experiences, and memories we've created along the way.",
  stats: [
    {
      id: "stat-1",
      number: "150+",
      description: "Thoughtfully bringing every celebration to life.",
      offset: false,
    },
    {
      id: "stat-2",
      number: "8+",
      description: "Years of creativity, care, and dedication.",
      offset: true,
    },
    {
      id: "stat-3",
      number: "25+",
      description: "Turning spaces into remarkable celebration settings.",
      offset: false,
    },
    {
      id: "stat-4",
      number: "10K+",
      description: "Creating memorable experiences for every guest.",
      offset: true,
    },
  ],
};
