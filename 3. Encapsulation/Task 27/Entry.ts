import { Point } from "./Point";

class Entry {
  public static main(): void {
    const p1 = new Point(1.5, 6.7);
    const p2 = new Point(2.8, 3.2);

    // using distance method to call the another parameter we should add x and y arguments as 0
    console.log(p1.distance(0, 0, p2));
    console.log(p1.distance(2.34, 7.8));
  }
}

Entry.main();
