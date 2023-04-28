import { Line } from "./Line";
import { Point } from "./Point";

class Entry {
  public static main(): void {
    const begin = new Point(1, 1);
    const end = new Point(2, 2);

    const line1 = new Line(begin, end);
    console.log(line1.Length);

    const line2 = new Line(2, 3, 5, 4);
    console.log(line2.Length);
  }
}

Entry.main();
