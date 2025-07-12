// Programa para adivinar un número aleatorio entre 1 y 10
const numeroSecreto = Math.floor(Math.random() * 10) + 1;
const intento = parseInt(prompt('Adivina el número (entre 1 y 10): '));
if (intento === numeroSecreto) {
  alert('¡Buen trabajo!');
} else {
  alert('Vuelva a intentarlo. El número era ' + numeroSecreto + '.');
}
