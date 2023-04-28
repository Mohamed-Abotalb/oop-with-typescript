import { Invoice } from "./Invoice";
import { Customer } from "./Customer";

class Entry {
  public static main() {
    const customer1 = new Customer(1000, "Tuan", 20);
    const invoice1 = new Invoice(1000, customer1, 100000);
    console.log("Customer name: " + invoice1.CustomerName);
    console.log("Invoice after discount: " + invoice1.AmountAfterDiscount);
  }
}

Entry.main();

/* The result will be
 * Customer Name: Tuan
 * Invoice after discount: 80000
 */
