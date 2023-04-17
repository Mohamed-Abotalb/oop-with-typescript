import { Student } from "./Student";

class Entry {
  public static main(): void {
    const s = new Student(1001, "Trung", 24, "Ha Noi", 5);

    console.log(s.Id);
    console.log(s.Name);
    console.log(s.Age);
    console.log(s.Address);
    console.log(s.Score);
    s.Score = -7;
    console.log(s.Score);
    s.Score = 15;
    console.log(s.Score);
  }
}

Entry.main();
