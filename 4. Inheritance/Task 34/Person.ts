/*
 * Task 34:
 * Create 3 classes Person, Student, Teacher with the following information:
 * Person class:
 *    name, age, address attributes describe name, age and address of the object.
 *    Person(name: String, age: int, address: String) is parameter which is used for initializing values to attributes.
 *    display() method displays object information on the screen.
 *    Other methods are setter and getter.
 *
 * Student class:
 *    Student class inherits from Person class.
 *    Student(name: String, age: int, address: String, gpa: double) is the parameter constructor which is used for initializing values to attributes.
 *    setGpa() and getGpa() are setter and getter.
 *    display() method overrides Person class, it is used for displaying the object information on the screen.
 *
 * Teacher class:
 *    Teacher class overrides Person class.
 *    Teacher(name: String, age: int, address: String, salary: int) is the parameter constructor which is used for initializing values to attributes.
 *    setSalary() and getSalary() are setter and getter.
 *    display() method overrides Person class which is used for displaying object information on the screen.
 */

export class Person {
  private name: string = "";
  private age: number = 0;
  private address: string = "";

  public constructor(name: string, age: number, address: string) {
    this.name = name;
    this.age = age;
    this.address = address;
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

  public display(): void {
    console.log(`Name: ${this.Name}`);
    console.log(`Age: ${this.Age}`);
    console.log(`Address: ${this.Address}`);
  }
}
