class SuperClass {
  protected display(): void {
    console.log("Hello from SuperClass");
  }
}

class SubClass extends SuperClass {
  protected override display(): void {
    console.log("Hello from SubClass");
  }
}

class Entry {
  public static main(): void {
    const s = new SubClass();

    s.display(); // compile-time error
  }
}

Entry.main();

/* The result will be a compile-time error because the display method in the SubClass class is protected that isn't accessible outside its class */
