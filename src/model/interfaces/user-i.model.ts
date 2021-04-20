export interface IUser {
  uuid?: string;
  displayName: string;
  email: string;
  country: string;
  city: string;
  relocation: boolean;
  skills: Array<string>;
  lastLogin: number;

  login(): void;

  saveUserInDb(): void;

  isUserAdmin(): boolean;

  isUserCandidate(): boolean;

  isUserCompany(): boolean;

  isEnabled(): boolean;
}
