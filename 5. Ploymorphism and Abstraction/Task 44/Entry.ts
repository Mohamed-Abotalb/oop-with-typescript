import { FullTimeEmployee } from "./FullTimeEmployee";
import { PartTimeEmployee } from "./PartTimeEmployee";

class Entry {
  public static main(): void {
    const employee1 = new PartTimeEmployee("Trung", 45000, 7);
    console.log("Name: " + employee1.Name);
    console.log("Salary per day: " + employee1.calculateSalary());

    const employee2 = new FullTimeEmployee("Linh", 65000);
    console.log("Name: " + employee2.Name);
    console.log("Salary per day: " + employee2.calculateSalary());
  }
}

Entry.main();
