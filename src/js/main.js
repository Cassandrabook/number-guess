let answer = 0;

let saveButton = document.getElementById("saveAnswer");
saveButton.addEventListener("click", saveTheAnswer)

function saveTheAnswer(){
    let theAnswer = document.getElementById("userAnswer");
    answer = parseInt(theAnswer.value);
    theAnswer.value = "";
}

let guessButton = document.getElementById("saveGuess")
guessButton.addEventListener("click", guessFromUser);

function guessFromUser(){
    let theGuess = document.getElementById("userGuess");
    let guess = parseInt(theGuess.value);

    if(guess < answer){
        alert("Du gissade för lågt")
    }

    if(guess > answer){
        alert("Du gissade för högt")
    }

    if(guess === answer){
        alert("Du gissade rät!!!")
    }
}

