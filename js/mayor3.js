// Programa que pide tres números y muestra cuál es el mayor
const n1 = parseFloat(prompt('Ingrese el primer número: '));
const n2 = parseFloat(prompt('Ingrese el segundo número: '));
const n3 = parseFloat(prompt('Ingrese el tercer número: '));

let mayor = n1;
if (n2 > mayor) mayor = n2;
if (n3 > mayor) mayor = n3;

console.log('El mayor es: ' + mayor);
