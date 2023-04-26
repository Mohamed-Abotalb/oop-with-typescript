import { Student } from "./Student";
import { Teacher } from "./Teacher";

class Entry {
  public static main(): void {
    const s = new Student("Khanh", 23, "Ha Noi", 9.0);
    s.display();

    console.log();

    const t = new Teacher("Tung", 34, "Ha Noi", 1700);
    t.display();
  }
}

Entry.main();
