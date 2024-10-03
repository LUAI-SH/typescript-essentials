"use strict";
// Class Declaration
class Account {
    constructor(id, owner, balance) {
        this.id = id;
        this.owner = owner;
        this._balance = balance;
    }
    deposit(amount) {
        if (amount <= 0)
            throw new Error("Invalid amount");
        this._balance += amount;
    }
}
// Create Instance (object)
const account = new Account(213214, "Leo", 0);
account.deposit(100);
// Parameter Properties
class Account2 {
    constructor(id, owner, _balance) {
        this.id = id;
        this.owner = owner;
        this._balance = _balance;
    }
    deposit(amount) {
        if (amount <= 0)
            throw new Error("Invalid amount");
        this._balance += amount;
    }
    get balance() {
        // Getter
        return this._balance;
    }
}
// Index Signature Property (Creating properties dynamically)
class Seat {
}
let seats = new Seat();
seats.S1 = "Leo";
seats["S2"] = "Saif";
// Static properties and methods
class TrackUsersNum {
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
TrackUsersNum._users = 0;
const usersNum = new TrackUsersNum();
usersNum.increment();
console.log(usersNum.users);
// Inheritance
class Person {
    constructor(name) {
        this.name = name;
    }
    printName() {
        console.log(this.name);
    }
}
class Nabilla extends Person {
    constructor(gender, isBeautiful = true) {
        super('Habibti');
        this.gender = gender;
        this.isBeautiful = isBeautiful;
    }
}
class Student extends Person {
    constructor(id, name) {
        super(name);
        this.id = id;
    }
}
class Teacher extends Person {
    printName() {
        // overriding method
        console.log("Dr. " + this.name);
    }
}
// Abstract Class
class Shape {
    constructor(color) {
        this.color = color;
    }
}
class Square {
    constructor() {
        this.color = 'red';
    }
    render() { }
}
let g = new Nabilla('F');
console.log(g.isBeautiful);
