/*
 * Author class:
 *
 * This class is used for storing information about the author of the book.
 * name, email attributes describe name and address of the author.
 * Author(name: String, email: String) is the parameter constructor which is used for initializing values to the corresponding attributes.
 * setName(), getName(), setEmail(), getEmail() are setters and getter.
 */

export class Author {
  private name: string = "";
  private email: string = "";

  public constructor(name: string, email: string) {
    this.name = name;
    this.email = email;
  }

  public set Name(name: string) {
    this.name = name;
  }

  public get Name(): string {
    return this.name;
  }

  public set Email(email: string) {
    this.email = email;
  }

  public get Email(): string {
    return this.email;
  }
}
