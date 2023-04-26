import { Employee } from "./Employee";

export class Manager extends Employee {
  private bonus: number = 0;

  public constructor(name: string, salary: number, bonus: number) {
    super(name, salary);
    this.bonus = bonus;
  }

  public set Bonus(bonus: number) {
    this.bonus = bonus;
  }

  public get Bonus(): number {
    return this.bonus;
  }

  public override get Salary(): number {
    return super.Salary + this.Bonus;
  }
}
