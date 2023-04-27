import { Person } from "./Person";
import { Employee } from "./Employee";
import { Customer } from "./Customer";

class Entry {
  public static main(): void {
    const person1: Person = new Employee("Trung", "HN", 3300);
    const person2: Person = new Customer("Linh", "BN", 10400);

    person1.display();
    person2.display();
  }
}

Entry.main();
