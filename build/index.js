"use strict";
// count is of "type" number
let count = 5;
count = 10;
//count = "Justin"
// Const's type is a literal
const fname = "Justin";
// this makes a var of type any
// let testing;
let testing;
// testing = "Justin"
testing = 5;
let student = {
    fname: "Andy",
    lname: "Anderson",
    grade: 12,
};
let student2 = {
    fname: "Jane",
    lname: "Adam",
    grade: 12,
};
function toString(student) {
    return JSON.stringify(student);
}
const toStringArrow = (student) => {
    return JSON.stringify(student);
};
console.log(toString(student));
console.log(add(5, testing));
function add(x, y) {
    let result = x + y;
    return result;
}
// Tuple
function sendMessage() {
    let tmp = Math.round((Math.random()));
    if (tmp == 1) {
        return ["success", {
                fname: "Austin",
                lname: "Ahmann",
                grade: 12
            }];
    }
    else {
        return ["failure", "Something failed"];
    }
}
for (let i = 0; i < 10; i++) {
    let [statusResult, data] = sendMessage();
    if (statusResult == "success")
        console.log(data);
}
