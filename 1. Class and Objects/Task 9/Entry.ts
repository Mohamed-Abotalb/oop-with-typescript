import { Student } from "./Student";

// This is Entry class to test the program
class Entry {
  public static main(): void {
    const s = new Student("Quang", 24, "Male", 7.7);

    s.display();
  }
}

Entry.main();
