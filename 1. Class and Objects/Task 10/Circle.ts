/*
 * Task 10:
 * Write a program to declare a Student class of the following information:
 *  radius is the attribute that represents the radius of the circle.
 *  Circle(radius) is the method that initializes parameters which are used to
 *  assign values to attribute.radius
 *  getArea() and getCircumference() are two methods that returns the area and perimeter of
 *  a circle. pi (π) = 3.14
 */

export class Circle {
  private radius: number = 0;

  public constructor(radius: number) {
    this.radius = radius;
  }

  public getArea(): number {
    return 3.14 * this.radius * this.radius;
  }

  public getCircumference(): number {
    return 2 * 3.14 * this.radius;
  }
}
