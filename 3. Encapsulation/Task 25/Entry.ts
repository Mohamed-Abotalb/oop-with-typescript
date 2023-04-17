import { Date } from "./Date";

class Entry {
  public static main(): void {
    const d = new Date(1, 1, 1997);

    d.display();
    d.setDate(12, 12, 2004);
    d.display();
    d.Month = 3;
    d.display();
  }
}

Entry.main();
