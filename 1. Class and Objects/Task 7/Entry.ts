import { Customer } from "./Customer";

// This is Entry class to test the program
class Entry {
  public static main(): void {
    // const customer = new Customer(); // this will cause a compile-time error

    console.log("Welcome to Codelearn!");
  }
}

Entry.main();

/*
 * The program will cause a compile-time error because the created constructor in
 * Customer class is parameterized type so we should apply the parameter value when
 * creating a new object of the class.
 */
