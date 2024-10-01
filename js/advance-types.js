"use strict";
var _a;
const user = { id: 1234, name: "Leo" };
// Union Types
function bytesToKB(bytes) {
    // Narrowing
    if (typeof bytes == "number")
        return bytes / 1024;
    return parseInt(bytes) / 1024;
}
const customer = { id: 1, name: "Leo", email: "example@x.com", phone: "+123456" };
let currentWeather = "rainy";
// Nullable
function greeting(name) {
    if (name)
        return "hi" + name;
    return "Hi";
}
greeting(null);
// Optional Chaining
function getUser(id) {
    return id === 0 ? null : { id: id, name: "Leo" };
}
const userName = (_a = getUser(3)) === null || _a === void 0 ? void 0 : _a.name; // string or undefined
// Optional element access operator
let cities = [];
const city = cities === null || cities === void 0 ? void 0 : cities[0]; // undefined
// Optional call
let log = null;
log === null || log === void 0 ? void 0 : log();
// The Nullish Coalescing Operator
let speed = null;
let ride = speed !== null && speed !== void 0 ? speed : 40;
// Type assertions
// Syntax1
let btn = document.getElementById("start"); // as DOES NOT CONVERT THE TYPE
// Syntax2
let btn2 = document.getElementById("start");
// Unknown Type
class Byte {
}
function saveData(bytes) {
    if (typeof bytes === "string") {
        // save string
    }
    if (bytes instanceof Byte) {
        // save bytes
    }
}
// Never type
function sendEmails(emails) {
    while (true) {
        console.log(emails);
        // send e-mails
    }
}
sendEmails([""]);
console.log("Finished"); // will not be executed
