import { Student } from "./Student";

// This is Entry class to test the program
class Entry {
  public static main(): void {
    const s1 = new Student();
    // s1.display(); // this will give Compile Time Error
  }
}

Entry.main();

/*
 * The result is Compile Time Error
 * This occur because the display method is declared as private member so it can't be
 * accessed outside the Student class.
 */
