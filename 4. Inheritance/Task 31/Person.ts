/*
 * Task 31:
 * Write a program to display the following information on the screen:
 * Name: Hai
 * Date of birth: 1999
 * GPA: 8.8
 */

export class Person {
  private name: string = "";
  private dob: number = 0;

  public constructor(name: string, dob: number) {
    this.name = name;
    this.dob = dob;
  }

  public set Name(name: string) {
    this.name = name;
  }

  public get Name(): string {
    return this.name;
  }

  public set Dob(dob: number) {
    this.dob = dob;
  }

  public get Dob(): number {
    return this.dob;
  }
}
