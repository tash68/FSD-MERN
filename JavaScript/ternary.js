// ternary operator.?,:
// <conditionExpression> ? <returnIfMatched> : <returnIfnotmatched>
//every if else case can be replaced by ternary operator 

// function IsEven(val) {
//     if (val % 2 == 0) {
//         return true;
//     } else {
//         return false;
//     }
// }

// function <NameOfTheFunction> (<parameters>){}
function isEven(val) {
    // body of the function
     const result = val % 2 == 0 ? true : false;
     return result;
}

console.log(isEven(100));
console.log(isEven(101));

// function - block of code to do something
// * function is a keyword to define a function
// * function takes parameters to operate on
// * function can return result or nothing