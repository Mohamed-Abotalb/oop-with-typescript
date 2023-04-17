/*
 * Task 27:
 * Create Point class with the following information:
 *    Point class stores the information of coordinates of a point in a two-dimensional Cartesian coordinate system.
 *    x, y are attributes that describe the abscissa and ordinate of the objective Point class.
 *    Point() is the no-arg constructor.
 *    Point(x: double, y: double) is the constructor parameter which is used to initialize the values to x and y.
 *    setX(x: double), getX(), setY(y: double), getY() are the setter and getter.
 *    setXY(x: double, y:double) is the attribute to change the values of x and y
 *    distance(x: double, y:double) method returns the distance between the current objective and the point (x, y).
 *    distance(another: Point) method returns the distance between the current objective and another objective (another is also an objective of Point class).
 */

export class Point {
  private x: number = 0;
  private y: number = 0;

  // Constructor overloading
  public constructor(); // Point()
  public constructor(x: number, y: number); // Point(x: number, y: number)
  public constructor(x?: any, y?: any) {
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

  public setXY(x: number, y: number) {
    this.x = x;
    this.y = y;
  }

  // Implementation of method overloading in typescript
  // Method Signature
  public distance(x: number, y: number): number;
  public distance(x: number, y: number, another: Point): number;

  // Method Definition
  public distance(x: any, y: any, another?: any): any {
    if (another) return this.distance(another.X, another.Y);
    else
      return Math.sqrt(
        (this.x - x) * (this.x - x) + (this.y - y) * (this.y - y)
      );
  }
}

/*
 * Method overloading is a mechanism or ability to create multiple methods with the same name but different parameter types and return type.
 * In TypeScript, the Method name and number of parameters in overloaded methods should be same but different in their types.
 *
 * Example for methods with same number of parameters
 *
 *  public foo(s: string): number;
 *  public foo(n: number): string;
 *  public foo(arg: any): any
 *  {
 *    if (typeof(arg) === 'number')
 *      return arg.toString();
 *    if (typeof(arg) === 'string')
 *      return arg.length;
 *  }
 *
 * Method overloading with a different number of parameters and different types along with the same function name is not supported.
 * public display(x: number, y: number): void
 * {
 *    console.log(x + y);
 * }
 *
 * public display(x: string): void
 * {
 *    console.log(x);
 * }
 *
 * This will give a Compiler Error: Duplicate function implementation.
 * to so this problem we can use optional parameter (?).
 *
 * public display(x: string): void;
 * public display(x: number, y: number): void;
 * public display(x: any, y?: any): void
 * {
 *    if (y)
 *    {
 *      console.log(x + y);
 *    } else
 *    {
 *      console.log(x);
 *    }
 * }
 *
 * if we call display as this display("Hello", 5) : this will give an error as if we want to call x as string value we shouldn't call y.
 */
