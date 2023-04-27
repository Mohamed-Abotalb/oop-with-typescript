/*
 * Task 44:
 * Write a program to create interface IShape and 2 classes Rectangle, Circle as below:
 *
 * interface IEmployee:
 *
 * calculateSalary() is an abstract method used to calculate employee salary.
 * getName() is an abstract method that returns the employee name.
 */

export interface IEmployee {
  calculateSalary?(): number;
  get Name(): string;
}
