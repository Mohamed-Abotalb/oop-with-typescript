import { ArrayCalculator } from "./ArrayCalculator";

class Entry {
  public static main(): void {
    const arr1: number[] = new Array(3, 4, 2); // integer values
    const arr2: number[] = [1.3, 4.2, 6.7]; // double values

    console.log(`${ArrayCalculator.sumOfArray(arr1)}`);
    console.log(`${ArrayCalculator.sumOfArray(arr2)}`);
  }
}

Entry.main();

/*
 * The result will be:
 * 9
 * 12.2
 */
