import { IGuide } from "./interfaces";

export class GuideModel implements IGuide {
  constructor(public icon: string, public text?: string) {}
}
