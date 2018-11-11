


$(document).ready(function(){

var words = [
    "beep",
    "flute",
    "empire",
    "serpent",
    "trench"
];

var word = words[Math.floor(Math.random() * words.length)];
console.log(word);

function hiddenLetters() {
    var answer = [];
for(i=0; i<word.length; i++) {
    answer[i] = "_";
    console.log(answer);
}
//return answer;

for(j=0; j < word.length; j++) {
    if (word[j] == userInput) {
        answer[j] == word[j];
    }
}
}

var remainingLetters = word.length;
var remainingGuesses = 12;

while (remainingLetters > 0 && remainingGuesses > 0) {
    answer.join(" ");
}

$("input").on("keypress", function() {
    //if key pressed = words[i][j], change _ to letter pressed.
    if (keypress == )
});
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
