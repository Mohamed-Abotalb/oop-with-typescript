/*
 * Circle class:
 *
 * radius attribute describes the radius of a circle.
 * Circle(radius: double) method assign values to radius.
 * getArea() and getPerimeter() methods are overridden from interface IShape,
 * they return area and circumference of the circle respectively (π = 3.14).
 */

import { IShape } from "./IShape";

export class Circle implements IShape {
  private radius: number;

  public constructor(radius: number) {
    this.radius = radius;
  }

  public getArea(): number {
    return 3.14 * this.radius * this.radius;
  }

  public getPerimeter(): number {
    return 2 * 3.14 * this.radius;
  }
}
