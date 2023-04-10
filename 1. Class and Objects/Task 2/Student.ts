/*
 * Task 2:
 * Write a program to declare a Student class of the following information:
 * class attributes are name and age.
 * class methods are display and getInformation.
 */

import readline from "readline-sync";

export class Student {
  private name: string = "";
  private age: number = 0;

  public display(): void {
    console.log(`Name: ${this.name}`);
    console.log(`Age: ${this.age}`);
  }

  public getInformation(): void {
    this.name = readline.question();
    this.age = +readline.question(); // + operator to convert string to number
  }
}
