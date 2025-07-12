// Programa que determina si un string inicia con un número o una letra
const texto = prompt('Ingrese un texto: ');
if (texto.length === 0) {
  console.log('No ingresó ningún texto.');
} else if (/^[0-9]/.test(texto)) {
  console.log('El texto inicia con un número.');
} else if (/^[a-zA-ZáéíóúÁÉÍÓÚüÜñÑ]/.test(texto)) {
  console.log('El texto inicia con una letra.');
} else {
  console.log('El texto inicia con otro carácter.');
}
