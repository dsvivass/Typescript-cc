"use strict";
function printMessage(message) {
    console.log(message);
}
printMessage('Hello World');
function add(num1, num2) {
    return num1 + num2;
}
console.log(add(1, 2));
var suma = add;
console.log(suma(2, 3));
