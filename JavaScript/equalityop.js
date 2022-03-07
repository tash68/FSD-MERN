// equality operator 
// we have two equality operators they are:- ==   ===
// == checks for equality between two values 
// === checks for equality between values and also checks for equality between data types
// == known as equality operator
// === known as strict equality operator

let x = null;
let y;
console.log(x==y);//true because x and y values are same
console.log(x===y);//false because x and y data types are different as x is object data type and y is undefined data type

let num1 = 19;
let num2 = "19";
console.log(num1==num2);//true because values of both are same
console.log(num1===num2);// false because num1 is number data type and num2 is string data type