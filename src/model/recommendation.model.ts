import { IJobPostCard, IJobPost } from "./interfaces";

export class RecommendationModel {
  uuid?: string;
  timestamp: number;
  fromCache: boolean;
  recommendedPosts: Array<IJobPost>;

  constructor(recommendedPosts: Array<IJobPost>) {
    this.timestamp = new Date().getTime();
    this.fromCache = false;
    this.recommendedPosts = recommendedPosts;
  }

  getCards(): Array<IJobPostCard> {
    return this.recommendedPosts.map(post => post.card);
  }
}

export class RecommendationHistory {
  userUuid: string;
  //Uuid of JobPosts
  likes: Set<string>;
  disLikes: Set<string>;

  //Key; Uuid of JobPost, val: Number of occurrences
  passed: Map<string, number>;
  lastActionTimestamp: number;
}
