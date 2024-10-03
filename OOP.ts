// Class Declaration
class Account {
  readonly id: number; // Cannot be assigned after initialized.
  owner: string;
  private _balance: number;
  nickname?: string; // Optional property

  constructor(id: number, owner: string, balance: number) {
    this.id = id;
    this.owner = owner;
    this._balance = balance;
  }

  deposit(amount: number): void {
    if (amount <= 0) throw new Error("Invalid amount");
    this._balance += amount;
  }
}

// Create Instance (object)
const account = new Account(213214, "Leo", 0);
account.deposit(100);

// Parameter Properties
class Account2 {
  nickname?: string; // Optional property

  constructor(public readonly id: number, public owner: string, private _balance: number) {}

  deposit(amount: number): void {
    if (amount <= 0) throw new Error("Invalid amount");
    this._balance += amount;
  }
  get balance(): number {
    // Getter
    return this._balance;
  }
}

// Index Signature Property (Creating properties dynamically)
class Seat {
  [seatNumber: string]: string;
}
let seats = new Seat();
seats.S1 = "Leo";
seats["S2"] = "Saif";

// Static properties and methods
class TrackUsersNum {
  private static _users = 0;

  get users() {
    return TrackUsersNum._users;
  }
  increment() {
    TrackUsersNum._users++;
  }
  decrement() {
    TrackUsersNum._users--;
  }
}

const usersNum = new TrackUsersNum();
usersNum.increment();
console.log(usersNum.users);

// Inheritance
class Person {
  constructor(public name: string) {}
  printName() {
    console.log(this.name);
  }
}

class Student extends Person {
  constructor(public readonly id: number, name: string) {
    super(name);
  }
}

class Teacher extends Person {
  override printName() {
    // overriding method
    console.log("Dr. " + this.name);
  }
}

// Abstract Class
abstract class Shape {
  constructor(public color: string) {}
  abstract render(): void;
}

// Interface
interface IShape {
  color: string;
  render: () => void;
}

class Square implements IShape {
  color: string = "red";
  render() {}
}
