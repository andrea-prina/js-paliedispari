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

// *** ESERCIZIO 2 - Pari o Dispari ***

// Ask the user if they want to choose EVEN or ODD
let userEvenOddChoice;

while (true){
    userEvenOddChoice = prompt("PARI o DISPARI?").toLowerCase();
    if ((userEvenOddChoice === "pari") || (userEvenOddChoice === "dispari")){
        break;
    }
}


// Ask the user to choose a number between 1 and 5
let userNumChoice;

while (true){
    userNumChoice = parseInt(prompt("Inserisci un numero da 1 a 5"));
    if ((userNumChoice >= 1) && (userNumChoice <= 5)){
        break; 
    }
}


// Generate a random number between 1 and 5 for the computer
function randomIntegerNumber (min, max){
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

const computerNum = randomIntegerNumber(1,5);


// Sum them and check if the result is EVEN or ODD
function isEven (number) {
    return (number % 2) === 0;
}

totalNumber = userNumChoice + computerNum;

// Declare the winner
if (((userEvenOddChoice === "pari") && (isEven(totalNumber) === true)) || ((userEvenOddChoice === "dispari") && (isEven(totalNumber) === false ))){
    console.log(`La somma dei numeri da ${totalNumber}, il giocatore ha scelto "${userEvenOddChoice}" e quindi VINCE!!!`);
} else {
    console.log(`La somma dei numeri da ${totalNumber}, il giocatore ha scelto "${userEvenOddChoice}" e quindi PERDE...`);
} 
