// LE FUNZIONI IN JS!

// Definizione: una funzione è un blocco di codice riutilizzabile.
// alle volte una funzione può ricevere dei parametri (dei dati in input)
// alle volte una funzione può ritornare un valore, emettere un risultato (un dato in output)

// bark() // funzionerà :(
// perchè? *

// DICHIARAZIONE DI FUNZIONE
function bark() {
  console.log('BAU')
}

// INVOCAZIONE (esecuzione) DI FUNZIONE
bark() // stampa un console.log
bark() // stampa un console.log
// totale: 2 bau

// la DICHIARAZIONE e la INVOCAZIONE di una funzione sono due passaggi indipendenti

// questa sintassi di DICHIARAZIONE di funzione (righe 8-9-10) ha un problema

let myName = 'Stefano'
console.log(myName)
myName = 'Giacomo'

// * sostanzialmente dichiarando una funzione in questa forma "arcaica" -> function bark()
// JS effettua un cosiddetto "hoisting" della nostra funzione, "sollevando" le nostre function in cima al file (di nascosto!)
// questa prassi non ci va bene per due motivi:
// 1) non voglio che JS effettui operazioni sul mio codice a mia insaputa -> voglio essere in controllo del codice (anche degli errori)
// 2) questo comportamento NON ESISTE in nessun altro linguaggio moderno, quindi impararlo e aspettarsi che sia il codice
// a risolvermi il problema (non dandomi errore) NON È una prassi da imparare

// QUINDI :)
// impariamo a scrivere le funzioni in un modo moderno, corretto e privo di hoisting automatico
// meow() // ERRORE, ma è giusto! :)

const meow = function () {
  console.log('MAO')
}

meow()

// scope delle functions
const arrayOfCharacters = ['Mario', 'Luigi', 'Peach', 'Toad'] // global scope

const printSuperMarioNames = function () {
  // questa è la DICHIARAZIONE della funzione
  console.log(arrayOfCharacters) // ?
  // funziona, perchè qualsiasi variabile definita PRIMA della definizione di printSuperMarioNames
  // è visibile all'interno della funzione
  const favouriteCharacter = 'Luigi'
}

printSuperMarioNames() // questa è l'esecuzione

console.log(favouriteCharacter)
// le variabili definite con LET e CONST hanno visibilità di BLOCCO

if (favouriteCharacter) {
  const greeting = 'Ciao'
}

// console.log(greeting) // undefined
