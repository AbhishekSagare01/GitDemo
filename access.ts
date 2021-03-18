import { Myclass } from "./Classdemo";
// export , import and function syntax
let my = new Myclass(456);
my.setusername("Abhishek the techie");
console.log(my.getusername());
console.log(my.getssn());

// Function Declarstion
function demo(birth:number) : number {

    return birth+10;
    console.log("hey");
    console.log("hey");
    console.log("hey");
    console.log("Abhishek Sagare");
}

console.log(demo(2000));

// Object declare and calling
let abc=
{
   colour : "blue",
    engine : 180
}
console.log(abc.colour);
console.log(abc);
console.log("Abhishek Sagare");
console.log("I am in develop branch now");
