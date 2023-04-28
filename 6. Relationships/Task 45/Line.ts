/*
 * Line class:
 *
 * This class stores information about a line in a two-dimensional coordinate system.
 * begin and end attributes describe the start point and end point of a line. They are the object of Point class.
 * Line(begin: Point, end: Point) and Line(x1: int, y1: int, x2: int, y2: int) constructors are used for initializing values to attributes.
 * setBegin(), getBegin(), setEnd(), getEnd() are setter and getter.
 * getLength() method returns the length of a line.
 */

import { Point } from "./Point";

export class Line {
  private begin: Point = new Point(0, 0);
  private end: Point = new Point(0, 0);

  public constructor(begin: Point, end: Point);
  public constructor(x1: number, y1: number, x2: number, y2: number);
  public constructor(...args: any[]) {
    if (args.length == 2) {
      this.begin = args[0];
      this.end = args[1];
    }

    if (args.length == 4) {
      this.begin = new Point(args[0], args[1]);
      this.end = new Point(args[2], args[3]);
    }
  }

  public set Begin(begin: Point) {
    this.begin = begin;
  }

  public get Begin(): Point {
    return this.begin;
  }

  public set End(end: Point) {
    this.end = end;
  }

  public get End(): Point {
    return this.end;
  }

  public get Length(): number {
    return Math.sqrt(
      Math.pow(this.End.X - this.Begin.X, 2) +
        Math.pow(this.End.Y - this.Begin.Y, 2)
    );
  }
}
