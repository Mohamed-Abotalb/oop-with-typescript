/*
 * Task 3:
 * Use object-oriented programming paradigm to solve the following exercise:
 * Write a program that accepts the length and width of a rectangle from the
 * user and display the following information on the screen:
 * Area = {P1}
 * Perimeter = {P2}
 * Where {P1} is the area and {P2} is perimeter of that rectangle.
 *
 * class name is Rectangle
 * class attributes are length and width
 * class methods are getInformation, getArea, getPerimeter, display
 */

import readline from "readline-sync";

export class Rectangle {
  private width: number = 0;
  private length: number = 0;

  public getInformation(): void {
    this.length = +readline.question(); // + operator to convert string to number
    this.width = +readline.question(); // + operator to convert string to number
  }

  public getArea(): number {
    return this.length * this.width;
  }

  public getPerimeter(): number {
    return (this.length + this.width) * 2;
  }

  public display(): void {
    console.log(`Area: ${this.getArea()}`);
    console.log(`Perimeter: ${this.getPerimeter()}`);
  }
}
