/*
 * Task 49:
 * Create a Polyline class and a Point class like the following class diagram:
 *
 * PolyLine class:
 *
 * points is an attribute that stores information about points in PolyLine, the data type of this attribute is List.
 * PolyLine() is a parameter constructor which is used for initializing an empty ArrayList for points.
 * PolyLine(points: List<Point) is a parameter constructor which is used for initializing values to points.
 * appendPoint(point: Point) and appendPoint(x: int, y: int) methods are used for adding a point to the end of points.
 * getLength() method is used for getting the length of PolyLine.
 */

import { Point } from "./Point";

export class PolyLine {
  private points: Point[] = [];

  // Constructor overloading
  public constructor();
  public constructor(points: Array<Point>);
  public constructor(points?: Array<Point>) {
    this.points = points ? points : new Array<Point>();
  }

  // Method overloading
  public appendPoint(point: Point): void;
  public appendPoint(x: number, y: number): void;
  public appendPoint(...args: any[]) {
    if (args.length === 1) this.points.push(args[0]);

    if (args.length === 2) this.points.push(new Point(args[0], args[1]));
  }

  public get Length(): number {
    let sumLength = 0;

    for (let i = 0; i < this.points.length - 1; i++) {
      let j = i + 1;

      sumLength += Math.sqrt(
        Math.pow(this.points[j].X - this.points[i].X, 2) +
          Math.pow(this.points[j].Y - this.points[i].Y, 2)
      );
    }
    return sumLength;
  }
}
