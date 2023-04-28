/*
 * Task 47:
 * Create an Author class and a Book class with the information as in the following class diagram:
 *
 * Book class:
 *
 * This class is used for storing information about books.
 * name, price, authors are attributes storing name, price and author of the book respectively.
 * Book(name: String, authors: Author[], price: double) is the parameter constructor which is used for initializing values to the corresponding attributes.
 * setName(), getName(), setPrice(), getPrice() are setters and getters.
 * getAuthorNames() method returns the author names of the book in the following format "authorName1, authorName2, ..., authorNameN"..
 */

import { Author } from "./Author";

export class Book {
  private name: string = "";
  private price: number = 0;
  private authors: Author[] = [];

  public constructor(name: string, authors: Author[], price: number) {
    this.name = name;
    this.price = price;
    this.authors = authors;
  }

  public set Name(name: string) {
    this.name = name;
  }

  public get Name(): string {
    return this.name;
  }

  public set Price(price: number) {
    this.price = price;
  }

  public get Price(): number {
    return this.price;
  }

  public get AuthorNames(): string {
    let authorNames = "";

    for (let i = 0; i < this.authors.length; i++) {
      authorNames += this.authors[i].Name;

      if (i != this.authors.length - 1) {
        authorNames += ", ";
      }
    }

    return authorNames;
  }
}
