import { Student } from "./Student";

class Entry {
  public static main(): void {
    const s = new Student("Kien", "Ha Noi", 6.6);

    console.log(s.toString());
  }
}

Entry.main();
