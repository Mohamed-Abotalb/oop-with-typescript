/*
 * Triangle class:
 *
 * This is the class that stores information about triangles.
 * vertice1, vertice2, vertice3 attributes describe 3 vertices of the triangle.
 * Triangle(vertice1: Point, vertice2: Point, vertice3: Point) is the parameter constructor which is used for initializing values to 3 vertices of the triangle.
 * Triangle(x1: int, y1: int, x2: int, y2: int, x3: int, y3: int) is the parameter constructor which is used for initializing values to 3 vertices of the triangle.
 * getPerimeter() method returns the circumference of a triangle.
 */

import { Point } from "./Point";

export class Triangle {
  private vertice1: Point = new Point(0, 0); // default value
  private vertice2: Point = new Point(0, 0); // default value
  private vertice3: Point = new Point(0, 0); // default value

  public constructor(vertice1: Point, vertice2: Point, vertice3: Point);
  public constructor(
    x1: number,
    y1: number,
    x2: number,
    y2: number,
    x3: number,
    y3: number
  );
  public constructor(...args: any[]) {
    // check if the arguments are 3 refer to first constructor
    if (args.length === 3) {
      this.vertice1 = args[0];
      this.vertice2 = args[1];
      this.vertice3 = args[2];
    }

    // check if the arguments are 6 refer to second constructor
    if (args.length === 6) {
      this.vertice1 = new Point(args[0], args[1]);
      this.vertice2 = new Point(args[2], args[3]);
      this.vertice3 = new Point(args[4], args[5]);
    }
  }

  public get Perimeter(): number {
    const d1 = Math.sqrt(
      Math.pow(this.vertice1.X - this.vertice2.X, 2) +
        Math.pow(this.vertice1.Y - this.vertice2.Y, 2)
    );
    const d2 = Math.sqrt(
      Math.pow(this.vertice1.X - this.vertice3.X, 2) +
        Math.pow(this.vertice1.Y - this.vertice3.Y, 2)
    );
    const d3 = Math.sqrt(
      Math.pow(this.vertice2.X - this.vertice3.X, 2) +
        Math.pow(this.vertice2.Y - this.vertice3.Y, 2)
    );

    return d1 + d2 + d3;
  }
}
