import { IShape } from "./IShape";
import { Rectangle } from "./Rectangle";
import { Circle } from "./Circle";

class Entry {
  public static main(): void {
    const shapes: IShape[] = [];

    shapes[0] = new Rectangle(3.4, 5.3);
    shapes[1] = new Circle(5.5);
    shapes[2] = new Rectangle(7.4, 4.3);

    for (let i = 0; i < 3; i++) {
      console.log(`Area of shapes [${i}]: ${shapes[i].getArea()}`);
      console.log(`Perimeter of shapes [${i}]: ${shapes[i].getPerimeter()}`);
    }
  }
}

Entry.main();
