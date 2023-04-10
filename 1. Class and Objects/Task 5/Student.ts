/*
 * Task 5:
 * What is the result when we run the following program
 */

export class Student {
  private name: string = "";
  private age: number = 0;

  public constructor() {
    this.name = "Tuan";
    this.age = 24;
  }

  public display(): void {
    console.log(`Name: ${this.name}`);
    console.log(`Age: ${this.age}`);
  }
}
