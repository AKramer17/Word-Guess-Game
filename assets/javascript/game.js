


$(document).ready(function(){

var words = [
    "beep",
    "flute",
    "empire",
    "serpent",
    "trench"
];

var alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", 
"k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

var word;
var answer;
var totalWins = document.getElementById("wins");
var remainingGuesses = document.getElementById("guessesLeft");
var wordElement = document.getElementById("currentWord");
var guessedLetters = document.getElementById("guessList");
var hasWon;
var hasLost;
var winCounter = 0;
var letter = "";

function restartGame() {
    word = words[Math.floor(Math.random() * words.length)];
    console.log(word);
    letterGuesses = 12;
    guessedLetters = [];
    answer = "";
    hasWon = false;
    hasLost = false;


    for(var i=0; i<word.length; i++) {
        answer += "_";
    }
    console.log(answer);
    totalWins.innerHTML = "Total wins: " + winCounter;
    wordElement.innerHTML = "Current word: " + answer;
    guessedLetters.innerHTML = "Guesses this round: " + guessedLetters;
    remainingGuesses.innerHTML = "Guesses remaining: " + letterGuesses;
}

/* document.onkeyup = function() {
    var guess = $(this).text(); */
    document.onkeypress = function(event) {
        var guess = String.fromCharCode(event.keyCode);
        console.log(guess);
    for(var i=0; i < alphabet.length; i++) {
/*         letter = alphabet[i];
        console.log(letter); */
        // Check if guess is a letter of the alphabet array
        if(guess == alphabet[i]) {
            letterChecker();
            break;
        } else if (i == 25 && guess != letter) {
            alert("Please enter a lowercase letter");
        } else {
            continue;
        }
    }
}
function letterChecker() {
    // Check to see if letter has already been guessed
    if(guessedLetters.length >= 0) {

        // Run through array of guessed letters
        for(var j=0; j < guessedLetters.length; j++) {
            if (guess !== guessedLetters[j]) {

                // Checks if guess is comparing against the final element in guessedLetters
                // This statement is only true if guess has not been found equal to all elements in guessedLetters
                if (j == guessedLetters.length - 1) {

                    // Loops to check guess against each letter of word
                    for(var k=0; k < word.length; k++) {
                        if(guess == word.chatAt(k)) {
                            //Reveals letter
                            answer.chatAt(k) = word.chatAt(k);
                            guessedLetters.push(guess);
                            checkWin();
                            addToGuessed();
                        }
                    }
                    // Adds guess to guessedLetters
                    guessedLetters.push(guess);
                    remainingGuesses--;

                // If last element has not been reached, continue to next element of array
                } else {
                    continue;
                }
            // Case in which guess is the same as an element in guessedLetters
            } else if (guess === guessedLetters[j]) {
                alert("Letter already guessed!");
                break;
            }
        }
    }checkWin();
}

function addToGuessed() {
    remainingGuesses--;
    guessedLetters.push(guess);
}

function checkWin() {
    if(answer == word) {
        alert("You win!");
        hasWon = true;
        winCounter += 1;
        restartGame();
    } else if (remainingGuesses == 0 && answer.toString !== word.toString) {
        alert("You lost...!");
        hasLost = true;
        restartGame();
    }
}
/* if (hasWon) {
    restartGame();
}
if (hasLost) {
    restartGame();
} */
});
