import { Animal } from "./Animal";

export class Duck extends Animal {
  public sound(): void {
    console.log("quack quack");
  }
}
