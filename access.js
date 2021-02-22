"use strict";
exports.__esModule = true;
var Classdemo_1 = require("./Classdemo");
// export , import and function syntax
var my = new Classdemo_1.Myclass(456);
my.setusername("Abhishek the techie");
console.log(my.getusername());
console.log(my.getssn());
// Function Declarstion
function demo(birth) {
    return birth + 10;
    //cosole.log("hey");
}
console.log(demo(2000));
// Object declare and calling
var abc = {
    colour: "blue",
    engine: 180
};
console.log(abc.colour);
console.log(abc);
