"use strict";
// Generic Class
class KeyValuePair {
    constructor(key, value) { }
}
let pair = new KeyValuePair("mel", "Melbourne");
let pair2 = new KeyValuePair("mel", "Melbourne"); // inferred
// Generic Function
function wrapInArray(value) {
    return [value];
}
// Generic Constrain
function echo(value) {
    return value;
}
