import { Animal } from "./Animal";

export class Dog extends Animal {
  public sound(): void {
    console.log("bow wow");
  }
}
