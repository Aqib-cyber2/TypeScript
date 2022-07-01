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
person = [
    ["hello", 1, [true, "String"]],
    ["hi", 2, [false, "anotherstring"]]
];
let u1 = {
    id: 1,
    name: "Muhammad Aqib"
};
const std1 = {
    regNo: "19pwbcs0695",
    name: "Muhammad Aqib",
    class: "6th Semister"
};
// std1.regNo = "18pwbcs0695" //can't change or overwrite...
const std2 = {
    regNo: "19pwbcs0697",
    name: "Mazhar Hussain",
    class: "6th semister",
    phone: 10101010101
};
// type conversion
let a = "1";
let b = a;
function userObj(user) {
    return {
        name: user.name,
        address: user.address
    };
}
let userfunc = userObj({
    name: "Aqib",
    address: "Peshawar Kohat Road"
});
console.log(userfunc);
// arrow function...
let sum = (a, b) => a + b;
console.log(sum(1, 2));
class Person {
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }
    added() {
        return this.name + " was added successfully.";
    }
}
let p1 = new Person(1, "Person 1");
console.log(p1.added());
// subclass
class Employ extends Person {
    constructor(id, name, position) {
        super(id, name);
        this.position = position;
    }
    added() {
        return this.name + " was added successfully on post : " + this.position;
    }
}
let emp1 = new Employ(1, "Mazhar", "Developer");
console.log(emp1.added());
