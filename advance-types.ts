// Type Alias
type User = {
  readonly id: number;
  name: string;
};

const user: User = { id: 1234, name: "Leo" };

// Union Types
function bytesToKB(bytes: number | string): number {
  // Narrowing
  if (typeof bytes == "number") return bytes / 1024;
  return parseInt(bytes) / 1024;
}

// Intersection Types
type Identity = {
  id: number;
  name: string;
};

type Contact = {
  email: string;
  phone: string;
};

type Customer = Identity & Contact;
const customer: Customer = { id: 1, name: "Leo", email: "example@x.com", phone: "+123456" };

// Literal Types
type Weather = "sunny" | "rainy";
let currentWeather: Weather = "rainy";

// Nullable
function greeting(name: string | null | undefined) {
  if (name) return "hi" + name;
  return "Hi";
}
greeting(null);

// Optional Chaining
function getUser(id: number): Identity | null | undefined {
  return id === 0 ? null : { id: id, name: "Leo" };
}
const userName = getUser(3)?.name; // string or undefined

// Optional element access operator
let cities: string[] = [];
const city = cities?.[0]; // undefined

// Optional call
let log: any = null;
log?.();

// The Nullish Coalescing Operator
let speed: number | null = null;
let ride = speed ?? 40;

// Type assertions
// Syntax1
let btn = document.getElementById("start") as HTMLButtonElement; // as DOES NOT CONVERT THE TYPE
// Syntax2
let btn2 = <HTMLButtonElement>document.getElementById("start");

// Unknown Type
class Byte {}
function saveData(bytes: unknown) {
  if (typeof bytes === "string") {
    // save string
  }
  if (bytes instanceof Byte) {
    // save bytes
  }
}

// Never type
function sendEmails(emails: string[]): never {
  while (true) {
    console.log(emails)
    // send e-mails
  }
}

sendEmails([""]);
console.log("Finished"); // will not be executed
