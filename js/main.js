// *** ESERCIZIO 1 - Parola palindroma ***

// Ask the user to input a word
const userInputWord = prompt("Inserisci la parola da verificare");

// Reverse it by iterating through it's characters from finish to start and adding them to a new string variable
function reverseWord (inputWord){
    
    outputWord = "";
    for (let i = inputWord.length - 1; i >= 0; i--){
        outputWord += inputWord[i];
    }

    return outputWord;
}

const userReversedWord = reverseWord(userInputWord);

// Check if the original word is the same of the reversed one

if (userInputWord === userReversedWord){
    console.log(`La parola ${userInputWord} è palindroma`);
} else {
    console.log(`La parola ${userInputWord} NON è palindroma`);
}



// ! Pari e Dispari
// ! L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
// ! Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
// ! Sommiamo i due numeri
// ! Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
// ! Dichiariamo chi ha vinto.