/*
 * Task 37:
 * What is the result of this program:
 */

class Student {
  public name: string = "";
  public address: string = "";

  public constructor(name: string, address: string) {
    this.name = name;
    this.address = address;
  }
}

class Entry {
  public static main(): void {
    const s1 = new Student("Viet", "Bac ninh");
    const s2 = new Student("Viet", "Bac ninh");

    console.log(s1 == s2);
  }
}

Entry.main();

/* The result will be false */
