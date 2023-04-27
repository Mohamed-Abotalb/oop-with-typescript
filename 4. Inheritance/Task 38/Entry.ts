/*
 * Task 38:
 * What is the result of this program:
 */

class Employee {
  public display(): void {
    console.log("I'm an Employee");
  }
}

class Manager extends Employee {
  public override display(): void {
    console.log("I'm a Manager");
  }
}

class Entry {
  public static main(): void {
    const e: Employee = new Manager();

    e.display();
  }
}

Entry.main();

/* The result will be I'm a Manager */
