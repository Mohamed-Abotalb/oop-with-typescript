import { Employee } from "./Employee";

class Entry {
  public static main(): void {
    const e = new Employee(1, "Kien", "Hoang", 1000);

    console.log("Id: " + e.Id);
    console.log("Name: " + e.FullName);
    console.log("Salary: " + e.Salary);
  }
}

Entry.main();
