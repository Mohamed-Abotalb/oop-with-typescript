/*
 * Task 22:
 * Create a Rectangle class with the following information:
 *    length and width are the attributes that describe the length and width of a rectangle.
 *    Rectangle() is the no-arg constructor.
 *    Rectangle(length: double, width: double) is the constructor parameter used to initialize values to length and width.
 *    setLength(length: double), getLength(), setWidth(width: double), getWidth()are setter and getter.
 *    getArea() method returns the area of a rectangle.
 *    getPerimeter() method returns the perimeter of a rectangle.
 */

export class Rectangle {
  private length: number = 0;
  private width: number = 0;

  public constructor(length: number, width: number) {
    this.length = length;
    this.width = width;
  }

  public set Length(length: number) {
    this.length = length;
  }

  public get Length(): number {
    return this.length;
  }

  public set Width(width: number) {
    this.width = width;
  }

  public get Width(): number {
    return this.width;
  }

  public getArea(): number {
    return this.length * this.width;
  }

  public getPerimeter(): number {
    return 2 * (this.length + this.width);
  }
}
