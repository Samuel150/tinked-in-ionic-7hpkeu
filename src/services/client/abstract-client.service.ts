import { Injectable } from "@angular/core";
import { IUser, IJobPost } from "../../model/interfaces";
import { RecommendationModel } from "../../model/recommendation.model";
//import { JobPostModel } from "../../model/job-post.card";
import { Observable, of } from "rxjs";
import { ClientService } from "./client.service";
import { ClientI } from "../../model/interfaces/client-i.model";
import { RecommendationHistory } from "../../model/recommendation.model";

@Injectable({
  providedIn: "root"
})
export abstract class AbstractClientService implements ClientI {
  //constructor() {}

  abstract getRecommendations(user: IUser): Observable<RecommendationModel>;
  abstract postLike(job: IJobPost): boolean;
  abstract disLike(job: IJobPost): boolean;
  abstract passed(job: IJobPost): boolean;

  // getRecommendations(user: IUser): Observable<RecommendationModel> {
  //   return of(new RecommendationModel([]));
  // }

  // postLike(job: IJobPost): boolean {
  //   console.log("Like saved", job);
  //   return true;
  // }

  // disLike(job: IJobPost): boolean {
  //   console.log("Dislike saved", job);
  //   return true;
  // }

  // passed(job: IJobPost): boolean {
  //   console.log("Passed saved", job);
  //   return true;
  // }
}
