/*
 * Task 15:
 * Create a Math class with the following information:
 *   PI is the static whose default value is 3.14
 *   abs(x: int) is the function that returns the absolute value of x.
 *   add(x: int, y: int) is the function that returns the sum of x and y.
 *   subtract(x: int, y: int) is the function that returns the difference of x and y.
 *   min(x: int, y: int) is the function that returns the smaller of two numbers.
 *   max(x: int, y: int) is the function that returns the bigger of two numbers.
 *   pow(x: int, y: int) is the function that returns the result of xy.
 */

export class Math {
  public static PI: number = 3.14;

  public static abs(x: number): number {
    return x < 0 ? -x : x;
  }

  public static add(x: number, y: number): number {
    return x + y;
  }

  public static subtract(x: number, y: number): number {
    return x - y;
  }

  public static min(x: number, y: number): number {
    return x < y ? x : y;
  }

  public static max(x: number, y: number): number {
    return x > y ? x : y;
  }

  public static pow(x: number, y: number): number {
    let result = 1;

    for (let i = 0; i < y; i++) {
      result *= x;
    }

    return result;
  }
}
