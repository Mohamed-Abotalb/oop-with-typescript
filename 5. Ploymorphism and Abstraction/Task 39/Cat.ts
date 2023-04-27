import { Animal } from "./Animal";

export class Cat extends Animal {
  public sound(): void {
    console.log("meow meow");
  }
}
