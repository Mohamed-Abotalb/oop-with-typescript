/*
 * Task 28:
 * Create Account class with the following information:
 *    Account class describes the information of bank accounts.
 *    id, name and balance attributes are the ID account, name of the account and the available balance respectively.
 *    Account(id: int, name: String) and Account(id: int, name: String, balance: int) are the constructor parameters which is used to declare the corresponding attributes.
 *    getId(), setName(), getName(), getBalance() are the setters and getters.
 *    deposit(amount: int) method is used to deposit an amount of money (balance += amount).
 *    withdraw(amount: int) method is used to withdraw an amount of money (balance -= amount). If the balance in the account is not enough (balance < amount), do not withdraw money.
 *    display() method is used to display the account information on the screen.
 */

export class Account {
  private id: number = 0;
  private name: string = "";
  private balance: number = 0;

  // Constructor overloading
  public constructor(id: number, name: string); // Account(id: int, name: String)
  public constructor(id: number, name: string, balance: number); // Account(id: int, name: String, balance: int)
  public constructor(id: number, name: string, balance?: number) {
    this.id = id;
    this.name = name;
    if (balance) this.balance = balance;
  }

  // Setter and Getter methods
  public set Id(id: number) {
    this.id = id;
  }

  public get Id(): number {
    return this.id;
  }

  public set Name(name: string) {
    this.name = name;
  }

  public get Name(): string {
    return this.name;
  }

  public set Balance(balance: number) {
    this.balance = balance;
  }

  public get Balance(): number {
    return this.balance;
  }

  public deposit(amount: number): void {
    this.balance += amount;
  }

  public withdraw(amount: number): void {
    if (this.balance >= amount) {
      this.balance -= amount;
    } else {
      console.log("That amount exceeds your current balance.");
    }
  }

  public display(): void {
    console.log(`Id: ${this.Id}`);
    console.log(`Name: ${this.Name}`);
    console.log(`Balance: ${this.Balance}`);
  }
}
