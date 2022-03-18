// template literal in js 
// allows you to embed js variables in a string
// when we ant to create a string out of variables 
// user defined-Pre defined functions ((UDF)-(PDF))
// in js we can create or define our own functions, called user defined 
// already buildin functions are known as pre defined functions  

const myname = "tash";
const myrole = "student";
const mylocation = "India";
const goal = "FSD";

// Hey I am tash and I am a student. I live in India and my goal is to become a FSD...
const sentence = "Hey I am "+myname+" and I am a "+myrole+". I live in "+mylocation+" and my goal is to become a "+goal+"..."
console.log(sentence);
// we use + at start and at the end of the string name
// general method where we use concatination as the + symbol is used for concat 

// now template lit is a method which is used to make this much more easier in js
const sentenceWithTempLit = 
`Hey I am ${myname} and I am a ${myrole}. I live in ${mylocation} and my goal is to become a ${goal}...`;
console.log(sentenceWithTempLit);
// here we use $ and {} for concat 