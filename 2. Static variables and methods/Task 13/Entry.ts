/*
 * Task 13:
 * What is the result of the following program:
 */

class Entry {
  x: number = 10;

  public static main(): void {
    console.log(x); // will give a compile-time error
  }
}

Entry.main();

/*
 * The result will be a Compile-time error because the main method is a static member so it
 * only accepts the static variables and the variable x is a normal type not a static
 * so the method can't call the variable inside it.
 */
