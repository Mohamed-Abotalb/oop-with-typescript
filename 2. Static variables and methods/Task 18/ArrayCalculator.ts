/*
 * Task 17:
 * Create an ArrayCalculator class with the following information:
 *   ArrayCalculator is a class without attributes.
 *   maxOfArray(arr: int[]) and maxOfArray(arr: double[]) are two overridden static methods,
 *   they return the largest value in array arr.
 *   minOfArray(arr: int[]) and minOfArray(arr: double[]) are two overridden static methods,
 *   they return the smallest value in array arr.
 */

export class ArrayCalculator {
  public static maxOfArray(arr: number[]): number {
    let max = arr[0];

    for (let i = 1; i < arr.length; i++) {
      if (max < arr[i]) {
        max = arr[i];
      }
    }
    return max;
  }

  public static minOfArray(arr: number[]): number {
    let min = arr[0];

    for (let i = 1; i < arr.length; i++) {
      if (min > arr[i]) {
        min = arr[i];
      }
    }
    return min;
  }
}

/*
 * TypeScript doesn't support int or double types, it only support number type which includes
 * integer and double types, so I implement the sumOfArray method only one time.
 */
