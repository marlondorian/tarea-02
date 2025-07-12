// Programa que pide una frase y cuenta cuántas veces aparece cada vocal
const frase = prompt('Ingrese una frase: ');
const vocales = { a: 0, e: 0, i: 0, o: 0, u: 0 };
for (let i = 0; i < frase.length; i++) {
  const letra = frase[i].toLowerCase();
  if (vocales.hasOwnProperty(letra)) {
    vocales[letra]++;
  }
}
console.log('Cantidad de vocales:');
for (const v in vocales) {
  console.log(`La letra '${v}' aparece ${vocales[v]} veces.`);
}
