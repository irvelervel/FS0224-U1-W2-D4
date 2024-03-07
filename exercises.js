const arrayOfCars = [
  {
    brand: 'Mercedes',
    price: 50000,
    colors: ['black', 'silver'],
  },
  {
    brand: 'Fiat',
    price: 15000,
    colors: ['white'],
  },
  {
    brand: 'Peugeot',
    price: 25000,
    colors: ['red', 'black'],
  },
]

// calcoliamo con una funzione il prezzo totale delle auto nell'array
const sumAllPrices = function (cars) {
  let sum = 0

  for (let i = 0; i < cars.length; i++) {
    // dobbiamo sommare i prezzi
    sum += cars[i].price
  }

  return sum
}

console.log('Il prezzo totale è: ' + sumAllPrices(arrayOfCars))

//
// creiamo una funzione che riceve due numeri, se la loro somma è esattamente 35 ti fa i complimenti! :)

const congratsIf35 = function (num1, num2) {
  if (num1 + num2 === 35) {
    return 'Complimenti! I due numeri sommati fanno 35 :)'
  } else {
    return 'Non fanno 35 :('
  }
  // versione concisa :)
  // return num1 + num2 === 35 ? 'Complimenti! I due numeri sommati fanno 35 :)' : 'Non fanno 35 :('
}

console.log(congratsIf35(30, 8))
console.log(congratsIf35(27, 8))

const congratsIf35TrueFalse = function (num1, num2) {
  if (num1 + num2 === 35) {
    return true
  } else {
    return false
  }
}

if (congratsIf35TrueFalse(27, 8)) {
  console.log('Congratulazioni, fa 35')
} else {
  console.log('Mi dispiace')
}

// funzione che torna true se i due parametri forniti sono maggiori di 0 ma anche minori di 10
const compare = function (n1, n2) {
  if (n1 > 0 && n1 < 10 && n2 > 0 && n2 < 10) {
    return true
  } else {
    return false
  }

  // versione alternativa concisa :)
  // return (n1 > 0 && n1 < 10 && n2 > 0 && n2 < 10)
}

console.log(compare(4, 5)) // true
console.log(compare(4, 11)) // false

// rimuoviamo la parola "code" se presente in una stringa

const removeCodeFromString = function (sentence) {
  const wordPosition = sentence.indexOf('code')
  // indexOf restituisce l'indice della stringa in cui comincia a presentarsi la parole "code"
  // se non viene trovata la parola 'code', wordPosition torna -1
  if (wordPosition >= 0) {
    // abbiamo trovato la parola "code" nella stringa!
    // ora lo togliamo
    return sentence.replace('code', '')
  } else {
    // non abbiamo trovato la parola "code" nella stringa!
    return sentence // ritorniamo la stringa senza alterarla
  }
}

console.log(removeCodeFromString('I like to code')) // 10
console.log(removeCodeFromString('I like to run')) // -1, perchè "code" non c'è!
