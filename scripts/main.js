console.log('Hello World');
var myText = 'My text';
console.log({ myText: myText });
var tagOne = '<div class="example">';
console.log(tagOne);
console.log("This is the first line\nThis is the second line\nThis is my text ".concat(myText));
var op1 = 1;
var op2 = 2;
console.log("".concat(op1, " + ").concat(op2, " = ").concat(op1 + op2));
op1++;
op2 += 4;
console.log("".concat(op1, " + ").concat(op2, " = ").concat(op1 + op2));
var resultDivision = op1 / op2;
console.log("".concat(op1, " / ").concat(op2, " = ").concat(resultDivision));
console.log("Decimals: ".concat(op1, " / ").concat(op2, " = ").concat(resultDivision.toPrecision(2)));
var varUnknown;
console.log("La variable desconocida tiene el valor: ".concat(varUnknown, " \ny es de tipo: ").concat(typeof varUnknown));
varUnknown = 'Soy un string';
console.log("La variable que era desconocida tiene el valor: ".concat(varUnknown, " \ny es de tipo: ").concat(typeof varUnknown));
varUnknown = 2;
console.log("La variable que era desconocida tiene el valor: ".concat(varUnknown, " \ny es de tipo: ").concat(typeof varUnknown));
var varUndefined;
// varUndefined = 2; // Throw error because undefined is not assignable to number, 
// but it is assignable to undefined or null
varUndefined = undefined;
varUndefined = null;
var varVoid = undefined; // Void indicates that a variable has no value
console.log("La variable void tiene el valor: ".concat(varVoid, " \ny es de tipo: ").concat(typeof varVoid));
