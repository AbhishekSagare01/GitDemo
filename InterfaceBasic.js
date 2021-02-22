function validatePhone(mobile) {
    console.log(mobile.colour);
    console.log(mobile.RAM);
    console.log(mobile.processor);
}
var LG = {
    colour: "black",
    RAM: 4,
    processor: "octacore"
};
var NOKIA = {
    colour: "GREY",
    RAM: 8,
    processor: "hexacore"
};
validatePhone(LG);
validatePhone(NOKIA);
/*

interface vehicle
{
color:string;
engine:number;
camera?:boolean;

}

let Bmw=
{
    color:"red",
    engine:100,
    camera:true
}


let xyz=
{
    color:"black",
    engine:500
   
}

function validateCar(car:vehicle)
{
console.log(car.camera);
console.log(car.engine);
}
validateCar(Bmw);
validateCar(xyz);
*/
