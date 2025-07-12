// Programa que determina si un triángulo es válido según sus ángulos internos
const a1 = parseFloat(prompt('Ingrese el primer ángulo: '));
const a2 = parseFloat(prompt('Ingrese el segundo ángulo: '));
const a3 = parseFloat(prompt('Ingrese el tercer ángulo: '));

if (a1 > 0 && a2 > 0 && a3 > 0 && a1 + a2 + a3 === 180) {
  console.log('El triángulo es válido.');
} else {
  console.log('El triángulo NO es válido.');
}
