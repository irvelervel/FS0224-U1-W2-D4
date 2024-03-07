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
// console.log(favouriteCharacter) // favouriteCharacter non è disponibile al di fuori di printSuperMarioNames()

// le variabili definite con LET e CONST hanno visibilità di BLOCCO

// console.log(greeting) // undefined

// PARAMETRI DELLE FUNZIONI (dati in input)

const sumOfTwoValues = function () {
  // questa funzione eseguirà la somma di due numeri
  const n1 = 5
  const n2 = 8
  const sum = n1 + n2 // 13
  console.log('La somma di n1 e n2 è', sum)
}

sumOfTwoValues()

const sumOfTwoValuesAgain = function () {
  // questa funzione eseguirà la somma di due numeri
  const n1 = 6
  const n2 = 9
  const sum = n1 + n2 // 13
  console.log('La somma di n1 e n2 è', sum)
}

// fornire una funzione di parametri la rende, genericamente, PIÙ RIUTILIZZABILE

const sumOfTwoGenericValues = function (n1, n2) {
  const sum = n1 + n2
  console.log('La somma di n1 e n2 è', sum)
}

sumOfTwoGenericValues(3, 10) // n1 è 3, n2 è 10
sumOfTwoGenericValues(4, 12) // n1 è 4, n2 è 12
sumOfTwoGenericValues(40, 1) // n1 è 40, n2 è 1

// altro esempio
const players = ['claudia', 'jacopo', 'giulio', 'tommaso']

// creiamo una funzione

const replacePlayer = function () {
  // L'allenatore, Mario, decide che sostituire un giocatore
  const substitution = 'giovanni'
  // effettuate la sostituzione di Giulio
  players.splice(2, 1, substitution)
  console.log(players)
}

// invochiamo replacePlayer() per eseguirla
// replacePlayer()
// funziona! però sa sostituire sempre e comunque solo Giulio...
// ...creiamo una variante in grado di sostituire un giocatore a scelta, non sempre Giulio!

const replaceGenericPlayer = function (indexToReplace, newPlayer) {
  console.log(
    'controllo che il primo parametro sia un numero e il secondo una stringa...'
  )
  if (typeof indexToReplace === 'number' && typeof newPlayer === 'string') {
    console.log('ok! eseguo la sostituzione')
    players.splice(indexToReplace, 1, newPlayer)
    console.log(players)
  } else {
    console.log('non hai passato correttamente i parametri')
  }
}

// replaceGenericPlayer(1)
replaceGenericPlayer(3, 'kassandra')
// replaceGenericPlayer('kassandra', 3)

// le parole arancioni alla riga 112 si chiamano "PARAMETRI" della funzione
// sono dei nomi generici, di vostra fantasia (seguite la nomenclatura classica delle variabili)
// che rappresentano un placeholder del dato che verrà passato

// poi, i dati che passate all'invocazione della funzione, quindi es. riga 127 'kassandra' o il numero 3
// quelli vengono definiti ARGOMENTO dell'invocazione della funzione

const printCurrentYear = function (year = 2024) {
  console.log('Adesso siamo nel', year)
}

printCurrentYear(1999)
printCurrentYear(2004)
printCurrentYear() // <-- senza argomento per "year"
// in caso di mancata assegnazione di un parametro, è possibile "istruire" la funzione ad utilizzare un valore di
// rimpiazzo, un valore di "default". Lo si può passare direttamente assegnando il parametro nella funzione ad un valore

// IL VALORE DI RITORNO
// una funzione PUÒ avere un valore di ritorno
// solitamente rappresenta il risultato di un'operazione, o il totale di una somma, una stringa ottenuta concatenando parti etc.

// per ritornare un valore esiste una diretta chiamata "return"
// se una funzione possiede un valore di ritorno, è possibile "trattare" l'esecuzione della funzione come il valore di ritorno stesso

const sumOfTwoNumbers = function (num1, num2) {
  const result = num1 + num2
  // result è disponibile solo qui dentro!
  return result
}

const resultOfTheFunctionExecution = sumOfTwoNumbers(45, 67) // vale 112
console.log(resultOfTheFunctionExecution)

console.log(typeof sumOfTwoNumbers(2, 3))

const sumValuesFromArray = function (arrayOfNumbers) {
  let tempResult = 0
  for (let i = 0; i < arrayOfNumbers.length; i++) {
    tempResult += arrayOfNumbers[i]
  }
  // tempResult è stato calcolato! 138
  return tempResult
  console.log('finito') // non vedrò mai questo console.log! l'istruzione return TERMINA l'esecuzione della funzione
}

const result = sumValuesFromArray([4, 45, 89])
console.log(result) // 138!!! era il valore tornato

// altro esempio
const greetStudent = function (nameOfAStudent) {
  const firstTwoCharacters = nameOfAStudent.slice(0, 2)

  return 'Ciao ' + firstTwoCharacters
}

console.log(greetStudent('Stefano')) // 'Ciao, St'

// Funzioni freccia: una funzione scritta su una sola riga, senza le graffe e con un valore di ritorno implicito
const firstArrowFunction = (firstName) => 'Ciao, ' + firstName
console.log(firstArrowFunction('Tommaso'))

const teacher = 'Stefano'
const currentYear = new Date().getFullYear() // 2024

const school = `${teacher} insegna in EPICODE nel ${currentYear}`
const school2 = teacher + ' insegna in EPICODE nel ' + currentYear

const str1 = '   ciao'
console.log(str1.trim().slice(0, 2).toUpperCase())
