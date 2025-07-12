// Programa que pide un número y muestra sus divisores
const num = parseInt(prompt('Ingrese un número: '));
let resultado = 'Divisores de ' + num + ': ';
for (let i = 1; i <= num; i++) {
  if (num % i === 0) {
    resultado += i + ' ';
  }
}
console.log(resultado);
