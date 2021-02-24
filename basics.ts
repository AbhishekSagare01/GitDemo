/*Javascript
//when we use var like below we will get o/p as 5,5,5,5,5 as Jscript is asynchronous and doesnot wait for 100*i to get over
{

    setTimeout(function(){console.log(i); },100*i);

} */

/* Typescript */
//Let wil break the asynchronous js and hence o/p will be 0,1,2,3,4.
for(let i=0;i<5;i++)
{

    setTimeout(function(){console.log(i); },100*i);
    console.log("Hey Abhishek");
    console.log("Abhishek Sagare");

}
//When we define in specific way,then you need to declare as below.
let z:string="Hi";
let w:number= 56;
let flag:boolean= true; // boolean declaration
let list:Array<number>=[1,2,4,5,5]; //Array declarion
let list1=[4,"gi",5];//can declare like this as well
let a :any =5;
a="xyz";//valid because you have declared it as "any" keyword 
const x= 20;
//as we have declare it as constant, typescript wont allow to declare it again with other value.
//x=25;

