/*
 * Customer class:
 *
 * Customer is the class inheriting from the abstract class Person
 * balance is the attribute of storing information about the balance in a customer's account.
 * Customer(name: String, address: String, balance: int) is the constructor that is used to initializing values for attributes.
 * display() is the method overriding from the abstract class.
 */

import { Person } from "./Person";

export class Customer extends Person {
  private balance: number = 0;

  public constructor(name: string, address: string, balance: number) {
    super(name, address);
    this.balance = balance;
  }

  public override display(): void {
    console.log(`Customer name: ${super.Name}`);
    console.log(`Customer address: ${super.Address}`);
    console.log(`Customer balance: ${this.balance}`);
  }
}
