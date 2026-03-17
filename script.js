// console.log("Hello, World!");
// document.write("Hi Sohan! Welcome to JavaScript.");

var num = 10;
console.log(num);
console.log(typeof num);

num = false;
console.log(num);
console.log(typeof num);

num = "Sohan";
console.log(num);
console.log(typeof num);

num = null;
console.log(num);
console.log(typeof num);

num = undefined;
console.log(num);
console.log(typeof num);


let sayHello = function (name) {
    alert("Hello, " + name + "!");
}

// array
let numberArray = [1, 2, 3, 4, 5];
let animals = ["cat", "dog", "elephant"];

// object
let person = {
    name: "Sohan",
    city: "Delhi",
}

const symbl = Symbol("4");
console.log(symbl);

const symbl2 = Symbol("4");
console.log(symbl === symbl2);

if (symbl === symbl2) {
    console.log("Symbols are equal");
}
else {
    console.log("Different symbol");
}

let a = 100, b = 13, c = 10;

var linebreak = "<br>";
document.write("a + b + c = " + (a + b + c) + "<br>");

result = a + b + c;
// console.log(result);

document.write("The sum of " + a + ", " + b + " and =" + c + " is: " + result);
document.write(linebreak);

if (a == b) {
    document.write("a and b are equal;This is equal to operator");
}
else{
    document.write("a and b are not equal;This is equal to operator");
}
