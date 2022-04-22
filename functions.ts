function printMessage(message:string): void {
    console.log(message);
}

printMessage('Hello World');

function add(num1: number, num2: number): number {
    return num1 + num2;
}

console.log(add(1, 2));

var suma = add;

console.log(suma(2, 3));