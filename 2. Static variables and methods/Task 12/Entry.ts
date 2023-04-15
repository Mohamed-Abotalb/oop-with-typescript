import { Student } from "./Student";

class Entry {
  public static main(): void {
    const s1 = new Student("Manh", 19);
    const s2 = new Student("Trung", 19);
    const s3 = new Student("Kien", 19);

    console.log(Student.numberOfStudents);
  }
}

Entry.main();

/*
 * The result will be the value of numberOfStudents attribute member as it is a static
 * variable as it used to refer to the common property of all objects which is not unique
 * for each object.
 */
