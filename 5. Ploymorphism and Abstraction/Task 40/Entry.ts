/*
 * Task 40:
 * What is the result of this program:
 */

class Entry {
  public static main(): void {
    const a: SuperClass = new SubClass();

    console.log(a.x);
    console.log((<SubClass>a).x);
  }
}

class SuperClass {
  x: number = 10;
}

class SubClass extends SuperClass {
  x: number = 20;
}

Entry.main();

/* The result will be
 * 20
 * 20
 */
