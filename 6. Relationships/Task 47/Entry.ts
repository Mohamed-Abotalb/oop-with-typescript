import { Author } from "./Author";
import { Book } from "./Book";

class Entry {
  public static main(): void {
    const authors: Author[] = new Array(3);

    authors[0] = new Author("Viet", "VietCV@codelearn.io");
    authors[1] = new Author("Tuan", "TuanLQ@codelearn.io");
    authors[2] = new Author("Kien", "KienNT@Codelearn.io");

    const book1 = new Book("C++ for Beginners", authors, 210000);
    console.log(book1.AuthorNames);
  }
}

Entry.main();

/* The result will be
 * Viet, Tuan, Kien
 */
