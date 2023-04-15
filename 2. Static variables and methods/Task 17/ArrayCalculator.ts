/*
 * Task 17:
 * Create an ArrayCalculator class with the following information:
 *   ArrayCalculator is a class without attributes.
 *   sumOfArray(arr: int[]) is a static method of which the input is an array of integers
 *   and it returns the sum of this array.
 *   sumOfArray(arr: double[]) is a static method of which the input is an array of double
 *   numbers and it returns the sum of this array.
 */

export class ArrayCalculator {
  public static sumOfArray(arr: number[]): number {
    let sum: number = 0;

    for (let i = 0; i < arr.length; i++) {
      sum += arr[i];
    }

    return sum;
  }
}

/*
 * TypeScript doesn't support int or double types, it only support number type which includes
 * integer and double types, so I implement the sumOfArray method only one time.
 */
