import { Person } from "./Person";

export class Student extends Person {
  private gpa: number = 0;

  public constructor(name: string, age: number, address: string, gpa: number) {
    super(name, age, address);
    this.gpa = gpa;
  }

  public set GPA(gpa: number) {
    this.gpa = gpa;
  }

  public get GPA(): number {
    return this.gpa;
  }

  public override display(): void {
    super.display();
    console.log(`GPA: ${this.GPA}`);
  }
}
