import { Student } from "./Student";

class Entry {
  public static main(): void {
    const s = new Student("Trung", "Male", 1700);

    s.display();
  }
}

Entry.main();
