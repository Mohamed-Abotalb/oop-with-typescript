/*
 * Task 9:
 * Write a program to declare a Student class of the following information:
 *  name, age, gender and gpa are attributes with private modifier.
 *  Student(name: String, age: int, gender: String, gpa: double)
 *  is a parametric initialization method used to initialize values for attributes.
 *  display() is the method of displaying the student's information screen.
 */

export class Student {
  private name: string = "";
  private age: number = 0;
  private gender: string = "";
  private gpa: number = 0;

  public constructor(name: string, age: number, gender: string, gpa: number) {
    this.name = name;
    this.age = age;
    this.gender = gender;
    this.gpa = gpa;
  }

  public display(): void {
    console.log(`Name: ${this.name}`);
    console.log(`Age: ${this.age}`);
    console.log(`Gender: ${this.gender}`);
    console.log(`GPA: ${this.gpa}`);
  }
}
