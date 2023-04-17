/*
 * Task 29:
 * What are benefits of inheritance in object oriented programming?
 *
 * Assuming that we need to write a program that stores information about students and teachers.
 * For students, we need to save their name, age, address, gpa and for teachers, we need to save
 * information about their name, age, address and salary.
 * After analyzing, we get the following class diagram of Student.png and Teacher.png
 *
 * The problem here is that the Student class has some attributes and methods which is the same as some
 * in Teacher class  class, so if we just follow this class diagram, the code will be duplicated many
 * times and violate the DRY principle (Don't Repeat Yourself - never repeat code).
 * Inheritance in OOP will help us to solve this problem.
 *
 * Inheritance in object oriented programming is the inheritance of attributes and methods of a class.
 * This means that if class A inherits class B, class A will have the attributes and methods of class B.
 * Therefore, we can separate the identical attributes and methods in the above diagram into a new class named
 * Person then let the Student class and Teacher to inherit this class as in Person.png diagram.
 *
 * It can be seen that with Person diagram the Student class and Teacher class will inherit the common attributes from the
 * Person class and the code will be no longer be duplicated.
 *
 * In the Person diagram the arrow with a hollow triangle is the symbol representing the inheritance relationship.
 *
 * Classes that inherit attributes and methods from another class are called Derived Class or Subclass and the
 * class inherited by another class is called Base Class or parent class. As in the example, Person is the parent class (Base class)
 * and Student and Teacher are the subclasses (derived classes).
 *
 * In the TypeScript programming language, to inherit a class we use the extends keyword.
 *
 * The benefits of Inheritance:
 *      Help code reuse.
 *      Increase the scalability.
 */
