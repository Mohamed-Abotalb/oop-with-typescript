import { Person } from "./Person";

export class Student extends Person {
  private salary: number = 0;

  public constructor(name: string, gender: string, salary: number) {
    super(name, gender);
    this.salary = salary;
  }

  public set Salary(salary: number) {
    this.salary = salary;
  }

  public get Salary(): number {
    return this.salary;
  }

  public override display(): void {
    super.display();
    console.log(`Salary: ${this.Salary}`);
  }
}
