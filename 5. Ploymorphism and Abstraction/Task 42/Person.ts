/*
 * Task 42:
 * Create 3 classes Person, Employee and Customer with the following information:
 *
 * Person class:
 *
 * Person is a subtraction class used to store general information about human objects.
 * name and address are private attributes about name and address of an object.
 * Person(name: String, address: String) is a constructor with parameter which is used to initializing values for attributes.
 * display() is an abstract method used to display information of the object.
 */

export abstract class Person {
  private name: string = "";
  private address: string = "";

  public constructor(name: string, address: string) {
    this.name = name;
    this.address = address;
  }

  public set Name(name: string) {
    this.name = name;
  }

  public get Name(): string {
    return this.name;
  }

  public set Address(address: string) {
    this.address = address;
  }

  public get Address(): string {
    return this.address;
  }

  public abstract display(): void;
}
