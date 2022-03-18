// date is a type of which we are creating a new obj
// how do we get current date and time

const currentDate = new Date();//obj created
console.log(currentDate);

// date formats in js
// to get these <get----> along with get the required parameter must be given then we can get the o/p
console.log(currentDate.toDateString());//date by using the string
console.log(currentDate.toTimeString());//time by using the string

// how do we get month from current date
console.log(currentDate.getMonth());// [0,......,11] it considers like this in the case of month

// how do we get hour from the current date
console.log(currentDate.getHours());

//how do we get day from the current date
console.log(currentDate.getDay()); // [0,....,6] similar to the month count 

// how do we get current year from the current date
console.log(currentDate.getFullYear());

// the most useful library to work with dates is "MOMENT js"