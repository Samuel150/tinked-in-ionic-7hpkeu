import { IUser } from "./";

export interface LinkedInI {
  login(email: string): IUser;

  register(): IUser;
}
