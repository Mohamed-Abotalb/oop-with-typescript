import { Person } from "./Person";

export class Student extends Person {
  private gpa: number = 0;

  public constructor(name: string, dob: number, gpa: number) {
    super(name, dob);
    this.gpa = gpa;
  }

  public set Gpa(gpa: number) {
    this.gpa = gpa;
  }

  public get Gpa(): number {
    return this.gpa;
  }
}
