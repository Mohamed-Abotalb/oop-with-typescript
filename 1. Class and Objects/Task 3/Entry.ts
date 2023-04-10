import { Rectangle } from "./Rectangle";

// This is Entry class to test the program
class Entry {
  public static main(): void {
    const rec = new Rectangle();

    rec.getInformation();
    rec.display();
  }
}

Entry.main();
