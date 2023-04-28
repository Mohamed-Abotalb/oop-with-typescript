/*
 * Task 48:
 * Create a Customer class and an Invoice class with the following information:
 *
 * Customer class:
 *
 * This class is used for storing information about customers.
 * id, name and discount attributes are customer ID, customer name and discount rate (as percentage) of a customer respectively.
 * Customer(id: int, name: String, discount: int) is the parameter constructor which is used for initializing values to corresponding attributes.
 * getId(), setName(), getName(), setDiscount(), getDiscount() are setters and getters.
 */

export class Customer {
  private id: number = 0;
  private name: string = "";
  private discount: number = 0;

  public constructor(id: number, name: string, discount: number) {
    this.id = id;
    this.name = name;
    this.discount = discount;
  }

  public get Id(): number {
    return this.id;
  }

  public set Name(name: string) {
    this.name = name;
  }

  public get Name(): string {
    return this.name;
  }

  public set Discount(discount: number) {
    this.discount = discount;
  }

  public get Discount(): number {
    return this.discount;
  }
}
