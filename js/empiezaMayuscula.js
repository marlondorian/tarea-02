// Programa que determina si una palabra empieza con mayúscula
const palabra = prompt('Ingrese una palabra: ');
if (palabra.length === 0) {
  console.log('No ingresó ninguna palabra.');
} else if (palabra[0] === palabra[0].toUpperCase()) {
  console.log('La palabra empieza con mayúscula.');
} else {
  console.log('La palabra NO empieza con mayúscula.');
}
