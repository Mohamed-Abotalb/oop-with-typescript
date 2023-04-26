/*
 * Task 32:
 * Write a program to display the following information on the screen:
 * Name: Hieu
 * Gender: Male
 * Salary: 1700
 */

export class Person {
  private name: string = "";
  private gender: string = "";

  public constructor(name: string, gender: string) {
    this.name = name;
    this.gender = gender;
  }

  public set Name(name: string) {
    this.name = name;
  }

  public get Name(): string {
    return this.name;
  }

  public set Gender(gender: string) {
    this.gender = gender;
  }

  public get Gender(): string {
    return this.gender;
  }

  public display(): void {
    console.log(`Name: ${this.Name}`);
    console.log(`Gender: ${this.Gender}`);
  }
}
