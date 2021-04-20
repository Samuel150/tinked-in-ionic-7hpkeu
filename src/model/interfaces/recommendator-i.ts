import { RecommendationModel } from "../recommendation.model";
import { IUser, IJobPost } from "./";
//import { JobPostModel } from "..";
import { Observable } from "rxjs";
import { RecommendationHistory } from "../recommendation.model";

export interface RecomendatorI {
  getRecommendations(user: IUser): Observable<RecommendationModel>;

  getHistory(userUuid: string): RecommendationHistory;
}
