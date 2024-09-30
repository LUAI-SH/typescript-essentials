// Arrays
let postCodes: number[] = [3030, 4402, 2058];

// Empty Array
const devices: string[] = [];

// Tuples
let order: [number, string] = [826, "Coffee Table"];

// Enums
enum Size {
  Small = 1,
  Medium,
  Large,
}
let mySize: Size = Size.Small;
console.log(mySize); // 1

// functions
function calculateTax(income: number, taxYear = 2020): number {
  if (taxYear < 100_000) {
    return income * 1.1;
  }
  return income * 1.5;
}

// objects
let user: {
  readonly id: number;
  name: string;
  birthday: (date: Date) => void;
} = { id: 123, name: "Leo", birthday: (date: Date) => console.log(date) };
