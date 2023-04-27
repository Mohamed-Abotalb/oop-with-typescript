/*
 * PartTimeEmployee class:
 *
 * This class inherits from Employee abstract class.
 * workingHours is the attribute of the number of working hours per day of an employee.
 * calculateSalary() là phương thức ghi đè từ lớp trừ tượng Employee, phương thức này trả về tiền lương của nhân viên part-time theo công thức: workingHours * paymentPerHour.
 */

import { Employee } from "./Employee";

export class PartTimeEmployee extends Employee {
  private workingHours: number;

  public constructor(
    name: string,
    paymentPerHour: number,
    workingHours: number
  ) {
    super(name, paymentPerHour);
    this.workingHours = workingHours;
  }

  public calculateSalary(): number {
    return this.workingHours * this.PaymentPerHour;
  }
}
