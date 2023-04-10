import { Student } from "./Student";

// This is Entry class to test the program
class Entry {
  public static main(): void {
    const students: Student[] = [];

    students[0] = new Student("Tuan", 24);
    students[1] = new Student("Cuong", 25);
    students[2] = new Student("Duc", 24);

    for (let i = 0; i < 3; i++) {
      students[i].display();
    }
  }
}

Entry.main();
