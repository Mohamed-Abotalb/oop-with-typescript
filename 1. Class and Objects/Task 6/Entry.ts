import { Student } from "./Student";

// This is Entry class to test the program
class Entry {
  public static main(): void {
    const s1 = new Student("Long", 24);
    const s2 = new Student("Kien", 29);
    s1.display();
    s2.display();
  }
}

Entry.main();
