/*
 * Invoice class:
 *
 * This class is used for storing information about customers' invoices.
 * id, name and discount attributes are customer ID, customer name and discount rate (as percentage) of a customer respectively.
 * Invoice(id: int, customer: Customer, amount: double) is the parameter constructor which is used for initializing values to corresponding attributes.
 * getId(), setCustomer(), getCustomer(), setAmount(), getAmount() are setters and getters. This class does not include setId() method.
 * getCustomerName() method returns the customer's name.
 * getAmountAfterDiscount() is the method of calculating the bill after the discount has been applied to customers.
 */

import { Customer } from "./Customer";

export class Invoice {
  private id: number;
  private customer: Customer;
  private amount: number;

  public constructor(id: number, customer: Customer, amount: number) {
    this.id = id;
    this.customer = customer;
    this.amount = amount;
  }

  public get Id(): number {
    return this.id;
  }

  public set Customer(customer: Customer) {
    this.customer = customer;
  }

  public get Customer(): Customer {
    return this.customer;
  }

  public set Amount(amount: number) {
    this.amount = amount;
  }

  public get Amount(): number {
    return this.amount;
  }

  public get CustomerName(): string {
    return this.customer.Name;
  }

  public get AmountAfterDiscount(): number {
    return this.amount - (this.amount * this.customer.Discount) / 100;
  }
}
