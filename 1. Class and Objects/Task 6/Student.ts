/*
 * Task 6:
 * Write a program to print the following information on the screen:
 *  Name: Long
 *  Age: 24
 *  Name: Kien
 *  Age: 29
 */

export class Student {
  private name: string = "";
  private age: number = 0;

  public constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  public display(): void {
    console.log(`Name: ${this.name}`);
    console.log(`Age: ${this.age}`);
  }
}
