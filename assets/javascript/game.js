


$(document).ready(function(){

var words = [
    "beep",
    "flute",
    "empire",
    "serpent",
    "trench"
];


var alphabet = ["a","b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

var word = words[Math.floor(Math.random() * words.length)];
console.log(word);

var answer = [];
var remainingGuesses = 12;
var guessedLetters = [];
var statement = false;

function hiddenLetters() {

    for(var i=0; i<word.length; i++) {
    answer[i] = "_";
    console.log(answer);
    }
}
//return answer;
/* 
    for(j=0; j < word.length; j++) {
    $('.userInput').on("keypress", function(){
    var userInput = $(this).attr('value');
        if (word[j] == userInput) {
        answer[j] == word[j];
        }
    })
} */

document.onkeyup = function() {
    var guess = $(this).text();
    for(var i=0; i < alphabet.length; i++) {

        // Check if guess is a letter of the alphabet array
        if(guess === alphabet[i]) {

            // Check to see if letter has already been guessed
            if(guessedLetters.length > 0) {

                // Run through array of guessed letters
                for(var j=0; j < guessedLetters.length; j++) {
                    if (guess !== guessedLetters[j]) {

                        // Checks if guess is comparing against the final element in guessedLetters
                        // This statement is only true if guess has not been found equal to all elements in guessedLetters
                        if (j == guessedLetters.length - 1 ) {

                            // Loops to check guess against each letter of word
                            for(k=0; k < word.length; k++) {
                                if(guess === word[k]) {
                                    //Reveals letter
                                    answer[k] = word[k];
                                }
                            }
                            // Adds guess to guessedLetters
                            guessedLetters.push(guess);

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
            }
        }
    }
}

$("#guesses").keypress(function(){
    $("span").text(i -= 1);
});
$("button").click(function(){
    $("p").keypress();

var remainingLetters = word.length;

while (remainingLetters > 0 && remainingGuesses > 0) {
    answer.join(" ");
}

for(var i=0; remainingGuesses > 0; i++) {

}

var i = 12;  //possible conflict with previous for loop?

// guesses
while (i>0) {
$("input").keypress(function(){
    $("span").text(i -= 1);
    });
}
    var userInput = $("#input").on("keypress");
});
