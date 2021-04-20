import { RecommendationModel } from "../recommendation.model";
import { IUser, IJobPost } from "./";
//import { JobPostModel } from "..";
import { Observable } from "rxjs";

export interface ClientI {
  getRecommendations(user: IUser): Observable<RecommendationModel>;

  postLike(job: IJobPost): boolean;

  disLike(job: IJobPost): boolean;

  passed(job: IJobPost): boolean;
}
