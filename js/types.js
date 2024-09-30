"use strict";
// Arrays
let postCodes = [3030, 4402, 2058];
// Empty Array
const devices = [];
// Tuples
let order = [826, "Coffee Table"];
// Enums
var Size;
(function (Size) {
    Size[Size["Small"] = 1] = "Small";
    Size[Size["Medium"] = 2] = "Medium";
    Size[Size["Large"] = 3] = "Large";
})(Size || (Size = {}));
let mySize = Size.Small;
console.log(mySize); // 1
// functions
function calculateTax(income, taxYear = 2020) {
    if (taxYear < 100000) {
        return income * 1.1;
    }
    return income * 1.5;
}
// objects
let user = { id: 123, name: "Leo", birthday: (date) => console.log(date) };
