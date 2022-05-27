/*initialization---------------------------------------*/


const addbutton = document.querySelector("#btnId") //W?y
const textInput_1 = document.querySelector("#textInput"); //w? yes
//const textInput_1value = document.querySelector("#textInput").value; //w?not yet
const container_Ul = document.querySelector('#containerUl'); //w? y

/*eventlistener button add-------------------------------------*/


addbutton.addEventListener('click', (event) => {
    console.log('textInput_1.value', textInput_1.value);
    getlist1(textInput_1.value);
    var textInput_1Var = textInput_1.value; //scope problem option solution declare a var :new variabel for api-client.js


    //step4: make a POST request to put the textValue in the local.api 
});
itemPost();
/*start make newLi W? yes good job---------------------------*/
const getlist1 = (koek) => {

        const newLi = document.createElement('li'); //W?y
        const newLiAppContUl = container_Ul.appendChild(newLi); //W? y
        const newInput = document.createElement('input'); //W?>y
        const newInputApp_newLi = newLi.appendChild(newInput); //w?y
        newInput.setAttribute('value', textInput_1.value); //w? y

        return newLi
    }
    //const newLi1 = getlist1();
    //console.log("newLi1  ", newLi1); //W? y
    /*the end function getlist1-----------------------------------------------*/