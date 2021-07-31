// --- variables ---
let popupButton = document.getElementById('popupcontainer');
let questionField = document.getElementById('questionField');
let answer = document.getElementById('answer');
let askButton = document.getElementById('getAnswerButton');
let askInput = document.getElementById('askInput');
let answerList = [];
// --- end variables ---

// --- functions ---
// show the question field
function showQuestionField(){
    questionField.style.display = 'flex';
}
// assign the background image to the answer
function assignAnswerImage(){
    answer.style.backgroundImage = 'url(' + answerList[Math.floor(Math.random() * answerList.length)].src + ')';
}
// enable the ask button once the input has text
function btnCheck() {
    if (askInput.value == ''){ 
        askButton.disabled = true; 
    }
    else{ 
       askButton.disabled = false;
    }
}
// --- end functons ---

// --- event listeners ---
// click popup button to show question field
popupButton.addEventListener('click', showQuestionField);
// click ask button to ask question
askButton.addEventListener('click', (event) =>{
    event.preventDefault();
    // split the question into an array of letters
    let questionArray = askInput.value.split("");
    // if the last letter of the input field isnt a ?, refuse
    if(questionArray[questionArray.length - 1] != '?'){
        alert('Please ask an actual question.');
        askInput.value = '';
        askButton.disabled = true; 
    }
    // if the last letter is a ?, answer the question
    else{
        assignAnswerImage();
        askInput.value = '';
        askButton.disabled = true; 
    }
});
// on keyup in the input field enable the ask button
askInput.addEventListener('keyup', btnCheck);
// --- end event listeners ---

// --- loops ---
// assign images to the answerlist array
for (i = 1; i < 20; i++){
    answerList[i] = new Image();
    answerList[i].src = './media/' + i.toString() + '.png';
}
// --- end loops ---
