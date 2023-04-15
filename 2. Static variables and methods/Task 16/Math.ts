/*
 * Task 16:
 * What is the result of the following program:
 * The result will be in the Entry.ts file
 */

export class Math {
  public static max(a: number, b: number): number {
    return a > b ? a : b;
  }

  public static max(a: number, b: number, c: number): number {
    return this.max(this.max(a, b), c);
  }
}
