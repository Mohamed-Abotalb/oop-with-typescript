/*
 * Task 12:
 * What is the result of the following program:
 * The result will be in the Entry.ts file
 */

export class Student {
  private name: string = "";
  private age: number = 0;

  public static numberOfStudents: number = 0;

  public constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
    Student.numberOfStudents++;
  }
}
