import { Injectable } from "@angular/core";
import { LinkedInI } from "../../model/interfaces/linked-in-i.model";
import { IUser, IJobPost } from "../../model/interfaces";
import { UserModel } from "../../model/user.model";
//import { JobPostModel } from "../../model/job-post.card";
import { AbstractLinkedInService } from "./abstract-linked-in.service";

@Injectable({
  providedIn: "root"
})
export class LinkedInService implements AbstractLinkedInService {
  constructor() {}

  login(email: string): IUser {
    const newUser: IUser = new UserModel(
      "123",
      "Juan Perez",
      "test@upb.edu",
      "candidate"
    );
    return newUser;
  }

  register(): IUser {
    return null;
  }

  apply(job: IJobPost): boolean {
    return null;
  }
}
