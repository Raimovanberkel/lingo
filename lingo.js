var inputThing = document.getElementById("input");
var rows = document.getElementsByClassName("row")
var input = "";
var currentWord = getRandomWord();
var words = [];
var correctLetters = [currentWord[0],"","","",""];
var attempts = 0;

function getRandomWord(){
    return words[Math.floor(Math.random() * (words.length -1))];
}   console.log(currentWord);

function getInput(){
    var chars = inputThing.value.split("").slice(0, 5);
    while(chars.length < 5){
        chars.push("");
    }
    inputThing.value = "";
    return chars;
}

function compareWords(){
    for(var i = 0; i < 5; i++){
        if(words[attempts][i] === currentWord[i]){
            reset();
            correctLetters[i] = currentWord[i];

        }
    }
}

function letterIsInWord(letter, word){
    for(var i = 0; i < 5; i++ ){

        if(letter === word[i]){
            return true;
        }
    }
    return false;
}

window.addEventListener("keydown", function(e){
    if (e.key ==="Enter"){
        input = document.getElementById("input").value;
        words.push(getInput());
        compareWords();
        rows[attempts].innerHTML = "";
        for(var i = 0; i < 5; i++){
            if(words[attempts][i] === correctLetters[i] && words[attempts][i] !== ""){
                rows[attempts].innerHTML +=
                "<div style='background: red'>" +
                  words[attempts][i] +
                 "</div>";
            }

            else if(letterIsInWord(words[attempts][i], currentWord)){
                rows[attempts].innerHTML +=
                    "<div style='background: yellow'>" +
                    words[attempts][i] + 
                    "</div>";   
            }
         
            else {
                rows[attempts].innerHTML += "<div>" + words[attempts][i] + "</div>";
            }
        }
        attempts = attempts + 1;
    }
}, false);

function reset() {
  console.log(input + " < input, currentWord > " + currentWord);
if (input == currentWord) {
  alert("Je hebt het woord geraden!");
}
}


for(var i = 0; i < 5; i++){
    rows[i].innerHTML += "<div style='background: red'>" + currentWord[0] + "</div>";
    for(var j = 0; j < 4; j++){
        rows[i].innerHTML += "<div></div>";
    }
};