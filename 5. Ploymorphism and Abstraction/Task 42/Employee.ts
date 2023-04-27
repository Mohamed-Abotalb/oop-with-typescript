/*
 * Employee class:
 *
 * Employee is the class inheriting from the abstract class Person
 * salary attribute stores information about employees' salary.
 * Employee(name: String, address: String, salary: int) is the constructor used to initializing values for attributes.
 * display() is the method overriding from the abstract attributes, it is used to display information of employees on the screen.
 */

import { Person } from "./Person";

export class Employee extends Person {
  private salary: number = 0;

  public constructor(name: string, address: string, salary: number) {
    super(name, address);
    this.salary = salary;
  }

  public override display(): void {
    console.log(`Employee name: ${super.Name}`);
    console.log(`Employee address: ${super.Address}`);
    console.log(`Employee salary: ${this.salary}`);
  }
}
