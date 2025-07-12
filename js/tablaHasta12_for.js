// Mostrar la tabla de multiplicar de un número hasta 12 usando for
const n = parseInt(prompt('Ingrese un número: '));
for (let i = 1; i <= 12; i++) {
  console.log(n + ' x ' + i + ' = ' + (n * i));
}
