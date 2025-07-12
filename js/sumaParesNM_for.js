// Sumar todos los números pares entre N y M usando for
const n = parseInt(prompt('Ingrese el valor de N: '));
const m = parseInt(prompt('Ingrese el valor de M: '));
let suma = 0;
for (let i = n; i <= m; i++) {
  if (i % 2 === 0) {
    suma += i;
  }
}
console.log('La suma de los pares entre ' + n + ' y ' + m + ' es: ' + suma);
