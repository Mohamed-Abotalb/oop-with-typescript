import { Person } from "./Person";

class Entry {
  public static main(): void {
    const p = new Person();

    p.Id = 1001;
    p.Name = "Quynh";
    p.Age = 24;
    p.Address = "Ha Noi";

    console.log(`Id: ${p.Id}`);
    console.log(`Name: ${p.Name}`);
    console.log(`Age: ${p.Age}`);
    console.log(`Address: ${p.Address}`);
  }
}

Entry.main();
