import { ArrayCalculator } from "./ArrayCalculator";

class Entry {
  public static main(): void {
    const arr1: number[] = new Array(3, 4, 2); // integer values
    const arr2: number[] = [1.3, 4.2, 6.7]; // double values

    console.log(`${ArrayCalculator.minOfArray(arr1)}`);
    console.log(`${ArrayCalculator.minOfArray(arr2)}`);
    console.log(`${ArrayCalculator.maxOfArray(arr1)}`);
    console.log(`${ArrayCalculator.maxOfArray(arr2)}`);
  }
}

Entry.main();

/*
 * The result will be:
 * 2
 * 1.3
 * 4
 * 6.7
 */
