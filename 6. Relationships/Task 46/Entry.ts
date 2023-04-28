import { Point } from "./Point";
import { Triangle } from "./Triangle";

class Entry {
  public static main(): void {
    const vertice1 = new Point(1, 3);
    const vertice2 = new Point(2, 3);
    const vertice3 = new Point(4, 2);

    const triangle1 = new Triangle(vertice1, vertice2, vertice3);
    const triangle2 = new Triangle(4, 5, 2, 6, 3, 7);

    console.log(triangle1.Perimeter);
    console.log(triangle2.Perimeter);
  }
}

Entry.main();

/* The result will be
 * 6.39834563766817
 * 5.8863495173726745
 */
