/*
 * Task 41:
 * What is the result of this program:
 */

class Entry {
  public static main(): void {
    const a: SuperClass = new SubClass();

    console.log(a.x);
    a.display();
  }
}

class SuperClass {
  x: number = 10;

  public display(): void {
    console.log(this.x);
  }
}

class SubClass extends SuperClass {
  x: number = 20;

  public override display(): void {
    console.log(this.x);
  }
}

Entry.main();

/* The result will be
 * 20
 * 20
 */
