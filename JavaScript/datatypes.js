let x; // not defined or value isn't intialized
console.log(typeof x); // returns undefined

x = 10;
console.log(typeof x);

x = "Tash" //inverted commas are only for string intialization
console.log(typeof x);

x = {id: 1, name: 'Tash'};
console.log(typeof x);

x = function print(){
    console.log("its a funtion");
}
console.log(typeof x);
x();

//date type gives you the current date as output
x = new Date(); //creating instance of date type 
console.log(x);
console.log(typeof x);
// operator to find out instance of object
console.log(x instanceof Date); // it will return true or false

x = null; // defined with no data
//null is object data type
console.log(typeof x); //returns object 
