import { IJobPostCard } from "./job-post-card-i.model";

export interface IJobPost {
  uuid?: string;
  card: IJobPostCard;
  country: string;
  city: string;
  accuracy: number;
  random: boolean;
  tags: Array<string>;
}
