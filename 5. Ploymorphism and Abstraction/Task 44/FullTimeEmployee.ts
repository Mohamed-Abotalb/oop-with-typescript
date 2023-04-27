/*
 * FullTimeEmployee class:
 *
 * This class inherits from Employee abstract class
 * calculateSalary() method overrides Employee abstract class,
 * it returns the full-time wage of an employee according to
 * this formula: 8 * paymentPerHour (Full-time employees always work 8 hours a day so FullTimeEmployee class does not include workingHours attribute)
 */

import { Employee } from "./Employee";

export class FullTimeEmployee extends Employee {
  public constructor(name: string, paymentPerHour: number) {
    super(name, paymentPerHour);
  }

  public calculateSalary(): number {
    return 8 * this.PaymentPerHour;
  }
}
