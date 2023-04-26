/*
 * Task 35:
 * Create Employee class and Manager class with the following information:
 * Employee class
 *    name and salary attributes describe the name and salary of an employee.
 *    Employee(name: String, salary: int) is the parameter constructor which is used for initializing values to attributes.
 *    display() method displays the object information on the screen.
 *    Other methods are setter and getter.
 *
 * Manager class
 *    This class inherit from Employee class.
 *    bonus attribute describes the bonus salary.
 *    Manager(name: String, salary: int, bonus: int) is a parameter constructor which is used for initializing values to attributes.
 *    setBonus() and getBonus() are setter and getter.
 *    getSalary() method overrides Person class, this method returns salary + bonus.
 *    display() method overrides Employee.
 */

export class Employee {
  private name: string = "";
  private salary: number = 0;

  public constructor(name: string, salary: number) {
    this.name = name;
    this.salary = salary;
  }

  public set Name(name: string) {
    this.name = name;
  }

  public get Name(): string {
    return this.name;
  }

  public set Salary(salary: number) {
    this.salary = salary;
  }

  public get Salary(): number {
    return this.salary;
  }

  public display(): void {
    console.log(`Name: ${this.Name}`);
    console.log(`Salary: ${this.Salary}`);
  }
}
