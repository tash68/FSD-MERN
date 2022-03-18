// loops
// doing something on repeat mode
// for repeating single operation or similar operations

// steps
// *intialiazation - where loop begins
// *condition- how log the loop runs
// *increament or decreament 

// 1. While loop
// print numbers from 1-10
let a = 1;
while(a<=10){
console.log(a);
a=a+1;
}

//reverse a string 
const str = "hey this is tash";
console.log(str.length);
const index = str.length-1;
let reversedString="";
for(let i=index; i>=0; i--){  // here it goes like with the concat h , hs , hsa , hast , hast s, hast si... 
    reversedString=reversedString.concat(str[i]);
}
console.log(reversedString);
// concat means joining the chars or the strings
