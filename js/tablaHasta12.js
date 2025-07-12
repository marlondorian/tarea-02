// Mostrar la tabla de multiplicar de un número hasta 12 usando while
const n = parseInt(prompt('Ingrese un número: '));
let i = 1;
while (i <= 12) {
  console.log(n + ' x ' + i + ' = ' + (n * i));
  i++;
}
