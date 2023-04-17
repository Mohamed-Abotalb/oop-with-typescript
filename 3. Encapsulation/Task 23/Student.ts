/*
 * Task 23:
 * Create a Rectangle class with the following information:
 *    id, name, age, address, score attributes describe the ID, name, age, address and score
 *    respectively of a student where the score is guaranteed to be greater than 0 and less
 *    than or equal to 10 (if score < 0, assign 0 to score, if score > 10, assign 10 to score).
 *    Student() is the no-arg constructor.
 *    Student(id: int, name: String, age: int, address: String, score: int) constructor parameter is used
 *    to initialize values to the following attributes id, name, age, address, score.
 *    The other methods are setter and getter.
 */

export class Student {
  private id: number = 0;
  private name: string = "";
  private age: number = 0;
  private address: string = "";
  private score: number = 0;

  public constructor(
    id: number,
    name: string,
    age: number,
    address: string,
    score: number
  ) {
    this.id = id;
    this.name = name;
    this.age = age;
    this.address = address;
    this.Score = score;
  }

  public set Id(id: number) {
    this.id = id;
  }

  public get Id(): number {
    return this.id;
  }

  public set Name(name) {
    this.name = name;
  }

  public get Name(): string {
    return this.name;
  }

  public set Age(age: number) {
    this.age = age;
  }

  public get Age(): number {
    return this.age;
  }

  public set Address(address: string) {
    this.address = address;
  }

  public get Address(): string {
    return this.address;
  }

  public set Score(score: number) {
    if (score < 0) {
      this.score = 0;
    } else if (score > 10) {
      this.score = 10;
    } else {
      this.score = score;
    }
  }

  public get Score(): number {
    return this.score;
  }
}
