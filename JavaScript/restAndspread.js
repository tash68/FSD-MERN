// rest and spread operator
// used in collections to help with multiple values
// introduced in ES6

// function sum(n1, n2){
//     console.log(n1+n2);
// }
// sum(2,3); here if we just call function just like sum() then we get NaN but when we gave values it gave a number output 5

// using rest operator 
// coverts all the parameters into single array 
// converts individual values into an array

//Three dots in js are the spread/rest operator. its either rest op or spread op 
// if the three dots are at the end of the function parameter then it is rest op and gathers the rest of the list of arguments into an array
// the rest parameter syntax is used for functions with a variable number of arguments 

function sum(...num){
    let output=0;
    for(let i=0; i<num.length; i++){
        output=output+num[i];
    }
    console.log(output);
}

sum(6,8);//14
sum(6,8,1,9);//24
sum(1,9,2,3,6);//21
sum(2,3,6,8,19,68);//106
// multiple parameters tasks are done by single class by just adding three dots we can gather the arguments or all the parameters we needed into an array

// using spread operator 
//converts array into individual values 
// gets individual values from array
// when the three dots occurs in a function call or alike its spread op and expands an array into a list 
// the spread syntax allows an expression to be expanded in places where multiple arguments are expected

const INRnames = ["tara", "tanaya", "sai"];
const USnames =["taylor", "johnny", "samual"];
//create another array with values from values from both these array 
console.log(INRnames);
console.log(USnames);

//const result = [ 'tara', 'tanaya', 'sai', 'taylor', 'johnny', 'samual' ] so here is the diff if we use spread op we can easily concat 
const output = [...INRnames, ...USnames];
console.log(output);
const output1 = [...output, "tash"];
console.log(output1);
//to add any string we just need to do like the above one output1 as we took the previous reult and added or concated the new one so we get like this [ 'tara', 'tanaya','sai', 'taylor','johnny', 'samual','tash']
// here by using the dots we can expand elements of an iterable (like an array) into places where multiple elements can fit.
// There have always been a variety of ways to combine arrays, but the spread operator gives use a new method for combining arrays:
// With spread operator, Shallow-cloning (excluding prototype) or merging of objects is now possible using a shorter syntax than Object.assign().

