/*
 * Task 25:
 * Create Date class with the following information:
 *    day, month, year are attributes describing the day, month and year of the Date objective.
 *    Date(day: int, month: int, year: int) constructor parameter is used to initialize values to attributes.
 *    setDate(day: int, month: int, year: int) method is used to change the values of attributes.
 *    display() method displays the time information of objective in the following format "dd/MM/yyyy".
 *    Other methods are setter and getter.
 */

export class Date {
  private day: number = 0;
  private month: number = 0;
  private year: number = 0;

  public constructor(day: number, month: number, year: number) {
    this.day = day;
    this.month = month;
    this.year = year;
  }

  public setDate(day: number, month: number, year: number) {
    this.day = day;
    this.month = month;
    this.year = year;
  }

  public set Day(day: number) {
    this.day = day;
  }

  public get Day(): number {
    return this.day;
  }

  public set Month(month: number) {
    this.month = month;
  }

  public get Month(): number {
    return this.month;
  }

  public set Year(year: number) {
    this.year = year;
  }

  public get Year(): number {
    return this.year;
  }

  public display(): void {
    let day = `${this.day}`;
    let month = `${this.month}`;
    let year = `${this.year}`;

    if (day.length == 1) {
      day = `0${this.day}`;
    }

    if (month.length == 1) {
      month = `0${this.month}`;
    }

    console.log(`${day}/${month}/${year}`);
  }
}
