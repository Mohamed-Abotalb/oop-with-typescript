import { Manager } from "./Manager";

class Entry {
  public static main(): void {
    const m = new Manager("Binh", 3100, 1000);

    m.display();
  }
}

Entry.main();
