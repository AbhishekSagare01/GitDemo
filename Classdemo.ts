export class Myclass
{
//properties ,methods,constructors
//we call it properties as the limit of this variables are within this class and hence by default it has let in it.
username:string;
password:string;
ssn:number;

/* ***Typescript allows only one constructor at time**** */
/*default constructor
constructor(){
    console.log("This is default constructor and will execute first")
}  */

// Parameterize constructor
constructor(ssn: number){

     this.ssn = ssn;

}

getusername(){

    return this.username;// we need to use this as it is referring to current class properties(username within class)
}

setusername(username:string){

    this.username= username;
}

getssn(){

    return this.ssn;
}


}

//create object of the class,and using that object call the methods or properties present in the class
/* let my = new Myclass(456);
my.setusername("Abhishek the techie");
console.log(my.getusername());
console.log(my.getssn());
*/