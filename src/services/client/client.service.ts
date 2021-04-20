import { Injectable } from "@angular/core";
import { IUser, IJobPost } from "../../model/interfaces";
import { RecommendationModel } from "../../model/recommendation.model";
//import { JobPostModel } from "../../model/job-post.card";
import { Observable, of } from "rxjs";
import { AbstractClientService } from "./abstract-client.service";

@Injectable({
  providedIn: "root"
})
export class ClientService implements AbstractClientService {
  constructor() {}
  getRecommendations(user: IUser): Observable<RecommendationModel> {
    return of(new RecommendationModel([]));
  }

  postLike(job: IJobPost): boolean {
    console.log("Like saved", job);
    return true;
  }

  disLike(job: IJobPost): boolean {
    console.log("Dislike saved", job);
    return true;
  }

  passed(job: IJobPost): boolean {
    console.log("Passed saved", job);
    return true;
  }
}
