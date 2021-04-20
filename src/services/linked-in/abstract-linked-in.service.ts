import { Injectable } from "@angular/core";
import { LinkedInI } from "../../model/interfaces/linked-in-i.model";
import { IUser, IJobPost } from "../../model/interfaces";
import { UserModel } from "../../model/user.model";

@Injectable({
  providedIn: "root"
})
export abstract class AbstractLinkedInService implements LinkedInI {
  //constructor() {}

  abstract login(email: string): IUser;

  abstract register(): IUser;

  abstract apply(job: IJobPost): boolean;
}
