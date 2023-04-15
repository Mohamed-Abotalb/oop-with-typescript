class MyClass {
  public static x: number = 10;
}

class Entry {
  public static main(): void {
    const m1 = new MyClass();
    const m2 = new MyClass();

    // m1.x = 20; // this way is not supported in typescript so I will use the class name to call the static member
    MyClass.x = 20;

    console.log(`${MyClass.x} ${MyClass.x}`);
  }
}

Entry.main();

/*
 * The result will be 20 20
 * I used the way of calling the static variable by class name as the way of calling it
 * by the instantiated object is supported in Java but not in TypeScript.
 */
