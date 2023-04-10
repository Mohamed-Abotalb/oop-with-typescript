import { Circle } from "./Circle";

// This is Entry class to test the program
class Entry {
  public static main(): void {
    const circle = new Circle(7);

    console.log(`Area: ${circle.getArea()}`);
    console.log(`Perimeter: ${circle.getCircumference()}`);
  }
}

Entry.main();
