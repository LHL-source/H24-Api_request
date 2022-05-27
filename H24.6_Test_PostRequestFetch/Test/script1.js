/*< input type = "text" id = "textInput" value = "Initial" >
    < button type = "submit" id = "btnId" > add button </button> 
    <div > Here come the text: < span id = "textSpan" > < /span></div >*/

const btnAdd = document.querySelector('#btnId'); //w?y
const input = document.querySelector('#textInput'); //w? y
const inputValue = document.querySelector('#textInput').value; //w?y
const textSpan = document.querySelector('#textSpan'); //W? y
//console.log('textSpan:', textSpan);

btnAdd.addEventListener('click', (event) => {
    console.log("textInput value; ", input.value)
    textSpan.innerHTML = input.value;
    console.log('to enter event properties: ', event);
});