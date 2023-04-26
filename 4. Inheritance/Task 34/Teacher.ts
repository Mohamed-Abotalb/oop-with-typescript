import { Person } from "./Person";

export class Teacher extends Person {
  private salary: number = 0;

  public constructor(
    name: string,
    age: number,
    address: string,
    salary: number
  ) {
    super(name, age, address);
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
