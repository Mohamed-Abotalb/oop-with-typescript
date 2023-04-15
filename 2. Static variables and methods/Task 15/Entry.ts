import { Math } from "./Math";

class Entry {
  public static main(): void {
    console.log(Math.PI);
    console.log(Math.abs(-2));
    console.log(Math.add(2, 3));
    console.log(Math.subtract(2, 3));
    console.log(Math.min(2, 3));
    console.log(Math.max(2, 3));
    console.log(Math.pow(2, 3));
  }
}

Entry.main();

/*
 * The result will be:
 * 3.14
 * 2
 * 5
 * -1
 * 2
 * 3
 * 8
 */
