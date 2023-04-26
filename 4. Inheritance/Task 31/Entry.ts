import { Student } from "./Student";

class Entry {
  public static main(): void {
    const s = new Student("Hai", 1999, 8.8);

    console.log(`Name: ${s.Name}`);
    console.log(`Date of birth: ${s.Dob}`);
    console.log(`GPA: ${s.Gpa}`);
  }
}

Entry.main();
