/*
 * Create Point and Line classes as in the following class diagram:
 *
 * Point class:
 *
 * This class is used for storing information about a point in a two-dimensional coordinate system.
 * x and y attributes describe the abscissa and ordinate of a point.
 * Point(x: int, y: int) is the parameter constructor used for initializing values to x and y.
 * setX(), getX(), setY(), getY() are setter and getter.
 */

export class Point {
  private x: number = 0;
  private y: number = 0;

  public constructor(x: number, y: number) {
    this.x = x;
    this.y = y;
  }

  public set X(x: number) {
    this.x = x;
  }

  public get X(): number {
    return this.x;
  }

  public set Y(y: number) {
    this.y = y;
  }

  public get Y(): number {
    return this.y;
  }
}
