"use strict";
// data types
let i = 1;
let s;
s = "Muhammad Aqib";
i = 0.5;
const bool = true;
let any;
any = "Hello there!";
any = ['new', 1, "4"];
// any data type array
let arr = new Array();
arr.push("string", 11, false, [1, 2]);
// we cant push single elemetn because we declare two dimensional array
let numArr = new Array();
numArr.push([1122], [1, 2, 3, 4]);
// now tuple
let person;
person =
    [
        ["hello", 1, [true, "String"]],
        ["hi", 2, [false, "anotherstring"]]
    ];
let u1 = {
    id: 1,
    name: "Muhammad Aqib"
};
// type conversion 
let a = "1";
let b = a;
function userObj(user) {
    return { name: user.name, address: user.address };
}
console.log(userObj({ name: "Aqib", address: "Peshawar Kohat Road" }));
// another function
function add(a1, b1) {
    return a1 + b1;
}
console.log(add(1, 2));
