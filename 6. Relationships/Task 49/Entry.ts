import { Point } from "./Point";
import { PolyLine } from "./PolyLine";

class Entry {
  public static main(): void {
    const polyLine = new PolyLine();

    polyLine.appendPoint(new Point(1, 1));
    polyLine.appendPoint(new Point(2, 3));
    polyLine.appendPoint(3, 0);
    polyLine.appendPoint(4, 2);

    console.log(polyLine.Length);
  }
}

Entry.main();

/* The result will be
 * 7.63441361516796
 */
