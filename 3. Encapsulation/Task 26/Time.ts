/*
 * Task 26:
 * Create Time class with the following information:
 *    Time class stores the information about hours, minutes and seconds.
 *    hour, minute, second are the attributes that describe the hours, minutes and seconds of Time class.
 *    Time(hour: int, minute: int, second: int) constructor parameter is used to initialize values to attributes.
 *    setTime(hour: int, minute: int, second: int) method changes the values of the following attributes hour, minute, second.
 *    nextSecond() method increases the time of objective by 1 second.
 *    previousSecond() method decreases the time of object by 1 second.
 *    display() method displays the time information of objective in the format "HH:mm:ss".
 *    Other methods are setter and getter.
 */

export class Time {
  private hour: number = 0;
  private minute: number = 0;
  private second: number = 0;

  public constructor(hour: number, minute: number, second: number) {
    this.hour = hour;
    this.minute = minute;
    this.second = second;
  }

  public setTime(hour: number, minute: number, second: number): void {
    this.hour = hour;
    this.minute = minute;
    this.second = second;
  }

  public set Hour(hour: number) {
    this.hour = hour;
  }

  public get Hour(): number {
    return this.hour;
  }

  public set Minute(minute: number) {
    this.minute = minute;
  }

  public get Minute(): number {
    return this.minute;
  }

  public set Second(second: number) {
    this.second = second;
  }

  public get Second(): number {
    return this.second;
  }

  public nextSecond(): void {
    if (this.hour == 23 && this.minute == 59 && this.second == 59) {
      this.hour = 0;
      this.minute = 0;
      this.second = 0;
      return;
    }
    if (this.minute == 59 && this.second == 59) {
      this.hour++;
      this.minute = 0;
      this.second = 0;
      return;
    }
    if (this.second == 59) {
      this.minute++;
      this.second = 0;
      return;
    }
    this.second++;
  }

  public previousSecond(): void {
    if (this.hour == 0 && this.minute == 0 && this.second == 0) {
      this.hour = 23;
      this.minute = 59;
      this.second = 59;
      return;
    }
    if (this.minute == 0 && this.second == 0) {
      this.hour--;
      this.minute = 59;
      this.second = 59;
      return;
    }
    if (this.second == 0) {
      this.minute--;
      this.second = 59;
      return;
    }
    this.second--;
  }

  public display() {
    let hour = `${this.hour}`;
    let minute = `${this.minute}`;
    let second = `${this.second}`;

    if (hour.length == 1) {
      hour = `0${this.hour}`;
    }

    if (minute.length == 1) {
      minute = `0${this.minute}`;
    }

    if (second.length == 1) {
      second = `0${this.second}`;
    }

    console.log(`${hour}:${minute}:${second}`);
  }
}
