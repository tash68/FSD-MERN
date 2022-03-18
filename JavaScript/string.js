// string is the combination of alpha&numeric&specialchars
// special chars-@#$%&*()

let password = "Tanu@2304";
console.log(typeof password);

// how to make all chars in lowercase 
console.log(password.toLowerCase());

// how to make all chars in uppercase
console.log (password.toUpperCase());

// how to check if the string  contains the substring we need or the element we need results in true or false format
console.log(password.includes("04"));
console.log(password.includes("19"));

//how to find index of a character in a string results in the index number form
console.log(password.indexOf("@"));

//how to check if the string ends with the char or element we need results in true or false format
console.log(password.endsWith("04"));

let myname ="tashtash";
console.log(myname.indexOf("s",3));
// to check the number of elements or char got repeated results in true or false format

console.log(myname.replace("tash", "eerhs"));
// by this we can replace elements

