/*
 * Task 21:
 * Write a program to display the following information on the screen:
 *
 * Id: 1001
 * Name: Quynh
 * Age: 24
 * Address: Ha Noi
 */

export class Person {
  private id: number = 0;
  private name: string = "";
  private age: number = 0;
  private address: string = "";

  // create setter property
  public set Id(id: number) {
    this.id = id;
  }

  // create getter property
  public get Id(): number {
    return this.id;
  }

  public set Name(name: string) {
    this.name = name;
  }

  public get Name(): string {
    return this.name;
  }

  public set Age(age: number) {
    this.age = age;
  }

  public get Age(): number {
    return this.age;
  }

  public set Address(address: string) {
    this.address = address;
  }

  public get Address(): string {
    return this.address;
  }
}
