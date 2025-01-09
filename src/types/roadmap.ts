export type RoadmapQuarter = "Q1" | "Q2" | "Q3" | "Q4";
export type RoadmapStatus = "completed" | "in-progress" | "planned";

export interface RoadmapItem {
  id: string;
  title: string;
  description: string;
  quarter: RoadmapQuarter;
  year: number;
  status: RoadmapStatus;
}
