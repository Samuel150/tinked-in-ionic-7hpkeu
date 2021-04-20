import { Injectable } from "@angular/core";
import { IUser } from "../../model/interfaces";
import {
  RecommendationHistory,
  RecommendationModel
} from "../../model/recommendation.model";
import { RecomendatorI } from "../../model/interfaces/recommendator-i";
//import { JobPostModel } from "../../model/job-post.card";
import { Observable, of } from "rxjs";

@Injectable({
  providedIn: "root"
})
export abstract class AbstractRecommendationService implements RecomendatorI {
  //constructor() {}

  abstract getRecommendations(user: IUser): Observable<RecommendationModel>;
  abstract getHistory(userUuid: string): RecommendationHistory;
}
