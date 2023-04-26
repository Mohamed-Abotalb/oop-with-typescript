export class Student {
  private name: string = "";
  private address: string = "";
  private gpa: number = 0;

  public constructor(name: string, address: string, gpa: number) {
    this.name = name;
    this.address = address;
    this.gpa = gpa;
  }

  public toString(): string {
    return (
      "Name: " + this.name + ", address: " + this.address + ", GPA: " + this.gpa
    );
  }
}
