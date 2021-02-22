"use strict";
exports.__esModule = true;
exports.Myclass = void 0;
var Myclass = /** @class */ (function () {
    /* ***Typescript allows only one constructor at time**** */
    /*default constructor
    constructor(){
        console.log("This is default constructor and will execute first")
    }  */
    // Parameterize constructor
    function Myclass(ssn) {
        this.ssn = ssn;
    }
    Myclass.prototype.getusername = function () {
        return this.username; // we need to use this as it is referring to current class properties(username within class)
    };
    Myclass.prototype.setusername = function (username) {
        this.username = username;
    };
    Myclass.prototype.getssn = function () {
        return this.ssn;
    };
    return Myclass;
}());
exports.Myclass = Myclass;
//create object of the class,and using that object call the methods or properties present in the class
/* let my = new Myclass(456);
my.setusername("Abhishek the techie");
console.log(my.getusername());
console.log(my.getssn());
*/ 
