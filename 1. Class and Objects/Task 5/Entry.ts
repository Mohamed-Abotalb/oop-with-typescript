import { Student } from "./Student";

// This is Entry class to test the program
class Entry {
  public static main(): void {
    const s1 = new Student();

    s1.display();
  }
}

Entry.main();

/*
 * The result will be
 * Name: Tuan
 * Age: 24
 * This occurred because of the constructor which is invoked automatically
 * when an object of a class is created, so it will assign the attributes to the
 * provided values in the constructor body.
 */
