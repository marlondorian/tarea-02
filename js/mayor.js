// Programa que pide dos números y muestra cuál es el mayor
const n1 = parseFloat(prompt('Ingrese el primer número: '));
const n2 = parseFloat(prompt('Ingrese el segundo número: '));
if (n1 > n2) {
  console.log('El mayor es: ' + n1);
} else if (n2 > n1) {
  console.log('El mayor es: ' + n2);
} else {
  console.log('Ambos números son iguales.');
}
