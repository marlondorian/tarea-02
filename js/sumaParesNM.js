// Sumar todos los números pares entre N y M usando while
const n = parseInt(prompt('Ingrese el valor de N: '));
const m = parseInt(prompt('Ingrese el valor de M: '));
let suma = 0;
let i = n;
while (i <= m) {
  if (i % 2 === 0) {
    suma += i;
  }
  i++;
}
console.log('La suma de los pares entre ' + n + ' y ' + m + ' es: ' + suma);
