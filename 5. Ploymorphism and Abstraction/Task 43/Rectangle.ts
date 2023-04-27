/*
 * Rectangle class:
 *
 * length and width attributes describe the length and width of a rectangle.
 * rectangle(length: double, width: double) method initializes values to attributes.
 * getArea() and getPerimeter() methods are overridden from interface IShape, they return the circumference and area of the rectangle.
 */

import { IShape } from "./IShape";

export class Rectangle implements IShape {
  private length: number;
  private width: number;

  public constructor(length: number, width: number) {
    this.length = length;
    this.width = width;
  }

  public getArea(): number {
    return this.length * this.width;
  }

  public getPerimeter(): number {
    return 2 * (this.length + this.width);
  }
}
