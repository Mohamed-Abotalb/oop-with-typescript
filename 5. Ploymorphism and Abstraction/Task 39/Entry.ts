import { Animal } from "./Animal";
import { Dog } from "./Dog";
import { Cat } from "./Cat";
import { Duck } from "./Duck";

class Entry {
  public static main(): void {
    const animals: Animal[] = [];

    animals[0] = new Animal();
    animals[1] = new Dog();
    animals[2] = new Cat();
    animals[3] = new Duck();

    for (let i = 0; i < animals.length; i++) {
      animals[i].sound();
    }
  }
}

Entry.main();

/* The result will be:
 * some sound
 * bow wow
 * meow meow
 * quack quack
 */
