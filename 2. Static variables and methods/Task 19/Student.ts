/*
 * Task 19:
 * Create a Student class with the following information:
 *    name and gender are two private attributes of Student class.
 *    Student() is the no-arg constructor which is used for initializing 2 values: name = "Unknown", gender = 'u'.
 *    Student(name: String) is the parameter constructor which is used for initializing values
 *    to 2 attributes name and gender (this.name = name; gender = 'u').
 *    Student(gender: char) is the parameter constructor which is used for initializing values
 *    to 2 attributes gender and name (this.gender = gender, name = "Unknown").Student(gender: char)
 *    is the parameter constructor which is used for initializing values to 2 attributes gender and name (this.gender = gender, name = "Unknown").
 *    Student(name: String, gender: char) is the parameter constructor which is used for initializing values to 2 attributes name and gender.
 *    display() method is used for displaying information of an object on the screen.
 */

export class Student {
  private name: string = "";
  private gender: string = "";

  // Using the partial operator (?) to implement the constructor overloading
  public constructor(name?: string, gender?: string) {
    name ? (this.name = name) : (this.name = "Unknown");
    gender ? (this.gender = gender) : (this.gender = "u");
  }

  public display(): void {
    console.log(`Name: ${this.name}`);

    if (this.gender == "m") {
      console.log("Gender: Male");
    } else if (this.gender == "f") {
      console.log("Gender: Female");
    } else if (this.gender == "u") {
      console.log("Gender: Unknown");
    }
  }
}

/*
 * TypeScript doesn't support creating multiple constructor but we can implement it by using partial operator (?) applied to the parameter of the constructor.
 */
