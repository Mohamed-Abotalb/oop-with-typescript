/*
 * Employee abstract class:
 *
 * This class inherits from interface IEmployee
 * This is an abstract class that stores general information of employees.
 * name, paymentPerHour are the names and amount of money the employee receives for more than an hour of work.
 * Employee(name: String, paymentPerHour: int) is a parameter constructor used for initializing values to properties.
 * setName(), getName(), setPaymentPerHour(), getPaymentPerHour() are setter and getter.
 */

import { IEmployee } from "./IEmployee";

export abstract class Employee implements IEmployee {
  private name: string = "";
  private paymentPerHour: number = 0;

  public constructor(name: string, paymentPerHour: number) {
    this.name = name;
    this.paymentPerHour = paymentPerHour;
  }

  public set Name(name: string) {
    this.name = name;
  }

  public get Name() {
    return this.name;
  }

  public set PaymentPerHour(paymentPerHour: number) {
    this.paymentPerHour = paymentPerHour;
  }

  public get PaymentPerHour(): number {
    return this.paymentPerHour;
  }
}
