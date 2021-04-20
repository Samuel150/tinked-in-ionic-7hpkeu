import { Injectable, ValueSansProvider } from "@angular/core";
//import { UserModel } from "../../model/user.model";
import { RecommendationModel } from "../../model/recommendation.model";
//import { JobPostModel } from "../../model/job-post.card";

import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";
import { IUser, IJobPost } from "../../model/interfaces/";
import { ClientService } from "./client.service";
import { ClientI } from "../../model/interfaces/client-i.model";
import { AbstractClientService } from "./abstract-client.service";

@Injectable({
  providedIn: "root"
})
export class MockClientService implements AbstractClientService {
  constructor(private http: HttpClient) {}

  getRecommendations(user: IUser): Observable<RecommendationModel> {
    return this.http
      .get<Array<IJobPost>>("/assets/mocked/")
      .pipe(map(json => new RecommendationModel(json)));
  }

  postLike(job: IJobPost): boolean {
    console.log("Like mocked saved", job);
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

  getHistory(userUuid: string): void {}
}
