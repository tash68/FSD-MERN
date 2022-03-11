// array is the collection of multiple values
// array stores data based on indexes 
// indexes starts at 0 
// indexes are like      0  1  2  3  4  5 
//  array               [10 20 30 40 50 60]

// creating the array 0  1  2  3  4  5  6  7 
const arrayofnum =   [10,20,30,40,50,23,70,19];
// we declared array as constant because we are not going to reintialize the values 
console.log(arrayofnum[5],arrayofnum[7]);
// this was to access values from array we can either display or perform any arthimetic operations

arrayofnum.push(42);
console.log(arrayofnum);
// this was to add any number into the array push keyword is required

arrayofnum.pop();
console.log(arrayofnum);
// to remove the added value from the array this pop keyword is used

arrayofnum.splice(4,0,42);
console.log(arrayofnum)
// here using splice we can insert the number anywhere in the array 
// two parameters are required first is the start-num and the other delete-num count. we need to enter the in which index we need to insert the num and delete count is opt if you want to use you can specify with a num if not put 0

arrayofnum.splice(0,1);
console.log(arrayofnum);
// this was deleting elements using splice keyword and also with their index

console.log(arrayofnum.length);
// this was to get the size of the array 
