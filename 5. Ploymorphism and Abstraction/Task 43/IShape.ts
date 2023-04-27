/*
 * Task 43:
 * Write a program to create interface IShape and 2 classes Rectangle, Circle as below:
 *
 * interface IShape
 * getArea() and getPerimeter() are two abstract methods used for calculating the circumference and area of an object.
 */

export interface IShape {
  getArea(): number;
  getPerimeter(): number;
}
