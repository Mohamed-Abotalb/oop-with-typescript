import { Student } from "./Student";

// This is Entry class to test the program
class Entry {
  public static main(): void {
    const s1 = new Student();

    s1.getInformation();
    s1.display();
  }
}

Entry.main();
