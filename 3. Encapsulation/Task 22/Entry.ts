import { Rectangle } from "./Rectangle";

class Entry {
  public static main(): void {
    const r = new Rectangle(4, 5);

    console.log("Area: " + r.getArea());
    console.log("Perimeter: " + r.getPerimeter());

    r.Length = 2;
    r.Width = 3;

    console.log("Area: " + r.getArea());
    console.log("Perimeter: " + r.getPerimeter());
  }
}

Entry.main();
