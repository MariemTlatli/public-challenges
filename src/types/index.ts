export type Leaderboard = Team[];

export type Challenge = {
  id: number;
  name: string;
  description: string;
  points: number;
  tech: string | null;
  number: number;
  key: string | null;
  hint: string | null;
};

export type Domain = {
  id: number;
  name: string;
  challenges: Challenge[];
};

export type Team = {
  id: string;
  name: string;
  score: number;
};
