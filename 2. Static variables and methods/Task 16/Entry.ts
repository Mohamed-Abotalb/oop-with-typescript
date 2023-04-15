import { Math } from "./Math";

class Entry {
  public static main(): void {
    console.log(Math.max(3, 5, 2));
  }
}

Entry.main();

/*
 * The result will be 5.
 * we have a duplicated max static method this is called method overloading it refers to
 * that the class can have a multiple methods with the same name but different in data types
 * or number of parameters.
 */
