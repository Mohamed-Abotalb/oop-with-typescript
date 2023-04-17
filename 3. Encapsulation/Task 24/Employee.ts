/*
 * Task 24:
 * Create an Employee class with the following information:
 *    id, firstName, lastName, salary attributes describe the ID, first name, last name and salary of the employee object.
 *    Employee(id: int, firstName: String, lastName: String, salary: int) constructor parameter is used to initialize values to attributes.
 *    getFullName() method returns the firstName + lastName.
 *    The other methods are setter and getter.
 */

export class Employee {
  private id: number = 0;
  private firstName: string = "";
  private lastName: string = "";
  private salary: number = 0;

  public constructor(
    id: number,
    firstName: string,
    lastName: string,
    salary: number
  ) {
    this.id = id;
    this.firstName = firstName;
    this.lastName = lastName;
    this.salary = salary;
  }

  public set Id(id: number) {
    this.id = id;
  }

  public get Id(): number {
    return this.id;
  }

  public set FirstName(firstName: string) {
    this.firstName = firstName;
  }

  public get FirstName(): string {
    return this.firstName;
  }

  public set LastName(lastName: string) {
    this.lastName = lastName;
  }

  public get LastName(): string {
    return this.lastName;
  }

  public get FullName(): string {
    return `${this.firstName} ${this.lastName}`;
  }

  public set Salary(salary: number) {
    this.salary = salary;
  }

  public get Salary(): number {
    return this.salary;
  }
}
