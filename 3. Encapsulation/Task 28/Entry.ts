import { Account } from "./Account";

class Entry {
  public static main(): void {
    const account1 = new Account(1000, "Tuan", 2000);

    account1.display();
    account1.withdraw(2100);
    account1.deposit(600);
    console.log("Balance: " + account1.Balance);
    account1.withdraw(2100);
    console.log("Balance: " + account1.Balance);
  }
}

Entry.main();

/*
 * The result will be:
 * Id: 1000
 * Name: Tuan
 * Balance: 2000
 * That amount exceeds your current balance.
 * Balance: 2600
 * Balance: 500
 */
