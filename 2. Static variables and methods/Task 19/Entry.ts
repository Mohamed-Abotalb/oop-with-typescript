import { Student } from "./Student";

class Entry {
  public static main(): void {
    const s1 = new Student();
    s1.display();
    const s2 = new Student("Quang", "");
    s2.display();
    const s3 = new Student("", "m");
    s3.display();
    const s4 = new Student("Thu", "f");
    s4.display();
  }
}

Entry.main();

/*
 * The result will be:
 * Name: Unknown
 * Gender: Unknown
 * Name: Quang
 * Gender: Unknown
 * Name: Unknown
 * Gender: Male
 * Name: Thu
 * Gender: Female
 */
