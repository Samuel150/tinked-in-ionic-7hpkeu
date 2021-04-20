import { LinkedInService } from "../services/linked-in/linked-in.service";
import { IUser } from "./interfaces/";
import { AfterViewInit, Component, Inject } from "@angular/core";
import { AbstractLinkedInService } from "../services/linked-in/abstract-linked-in.service";

export class UserModel implements IUser {
  uuid?: string;
  displayName: string;
  email: string;
  country: string;
  city: string;
  relocation: boolean;
  skills: Array<string>;
  lastLogin: number;
  private linkedinService: AbstractLinkedInService;
  private enabled: boolean;
  private type: string | "admin" | "candidate" | "company";

  constructor(uuid: string, displayName: string, email: string, type: string) {
    this.uuid = uuid;
    this.displayName = displayName;
    this.email = email;
    this.type = type;
    this.lastLogin = new Date().getTime();
    this.linkedinService = new LinkedInService();
  }

  login() {
    this.linkedinService.login(this.email);
    this.saveUserInDb();
  }

  saveUserInDb() {
    localStorage.setItem("email", this.email);
    localStorage.setItem("lastLogin", String(this.lastLogin));
  }

  getUserType(): string {
    return this.type;
  }

  isUserAdmin(): boolean {
    return this.type === "admin";
  }

  isUserCandidate(): boolean {
    return this.type === "candidate";
  }

  isUserCompany(): boolean {
    return this.type === "company";
  }

  isEnabled(): boolean {
    return this.enabled;
  }
}
