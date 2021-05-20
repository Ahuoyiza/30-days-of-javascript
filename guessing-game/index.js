//variables

let randomNumber = Math.floor(Math.random() * 100) + 1; //this generates the random numbers and assigns to the variable randomNumber

const guesses = document.querySelector('.guesses'); //this queries the class .guesses in our html and assigns it's value to the variable guesses
const lastResult = document.querySelector('.lastResult');
const lowOrHi = document.querySelector('.lowOrHi');

const guessSubmit = document.querySelector('.guessSubmit');
const guessField = document.querySelector('.guessField');


let guessCount = 1;
let resetButton ;

//functions 

function checkGuess() {
    // alert('we are learning functions')
}

checkGuess();