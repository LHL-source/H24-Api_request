/*initialization---------------------------------------*/


const addbutton = document.querySelector("#btnId") //W?y
const textInput_1 = document.querySelector("#textInput"); //w? yes
//const textInput_1value = document.querySelector("#textInput").value; //w?not yet
const container_Ul = document.querySelector('#containerUl'); //w? y

/*start: eventlistener button add-------------------------------------*/


addbutton.addEventListener('click', (event) => {
        console.log('textInput_1.value', textInput_1.value); //W? yes

        /*start function newTask-------------*/
        const postNewTask = async() => {
            const todo = {
                description: textInput_1.value,
                done: false
            }; //todo
            await itemPost(todo);
            await makeList();
            textInput_1.value = ''; //w? not yet
        }; //async
        postNewTask();
        makeList(textInput_1.value); //w?y
        /*end function new task------------------*/

        /*start get Post-------------------------------*/
        //getAllData(); //getPOST W? not yet
        /*end get Post-------------------------------*/

    }) //eventlist
    /*end : eventlistener button add---------------------------------------*/


/*start:get the whole data of the database----------------------------------------*/
//getAllData(); //w? notyet: not defined(tijdelijke oplossing aanroepen via api-client.js)
/*end:get the whole data of the database-------------------------------------------*/


/* start make a function to read each item of the get Post and put on dom */

/*getData :async await works ? not yet----------------------------------------- */
/*why not ? it get the description and the _id, de aantal rijen worden gemaakt op scherm ongeveer 10stuks,
but does not display on the user screen*/
const getDataOnDom = async(doek) => {

        //console.log('entering functin getData');/W? yes good job
        console.log(" getAllData  ", getAllData()); //W?y
        const list = await getAllData();
        console.log('list: ', list); //W?y

        var loadList_1 = list.map((eachLoadList) => {

            console.log('eachLoadList after .map', eachLoadList); //W? yes
            console.log('eachLoadList.descrip :   ', eachLoadList.description); //w ? yes
            const test_eachLoadList_desc = eachLoadList.description;
            console.log('test_eachLoadList_desc:', test_eachLoadList_desc)
            console.log('eachLoadList_id :', eachLoadList._id);
            console.log('loadList_1', loadList_1); // w ? nee

            //getlist1(); //eachLoadList w?nee want eachLoadList is function
            //scope niet bereikbaar voor global scope oplossing? hieronder aanmaken newLi , newInput enz

            const container_Ul = document.querySelector('#containerUl');
            const newLi = document.createElement('li');
            const newLiAppContUl = container_Ul.appendChild(newLi);

            const newInput = document.createElement('input');
            const newInputApp_newLi = newLi.appendChild(newInput);
            newInput.innerHTML = eachLoadList.description;
            //einde newLi en newInput

            /*start make delete btn-----------------------*/
            const newDelBtn = document.createElement('button'); //W?y
            newLi.appendChild(newDelBtn); //w?y
            newDelBtn.setAttribute('id', 'delBtn'); //w?y
            newDelBtn.textContent = "delete btn"; // w? not yet , should be a icon trash
            newDelBtn.setAttribute('type', 'submit');
            /*end makedelete btn------------------------*/

        }); //loadList_1
        console.log('loadList_1 after map', loadList_1); //W? not yet undefined

        const loadList_2 = await loadList_1 //getData
        console.log('loadList_2 ', loadList_2); //w? not yet undefined
        return loadList_2

    } //getDataOnDom

const getDataOnDom_1 = getDataOnDom();
console.log('getDataOnDom_1', getDataOnDom_1); //w? not yet

/*end getDataOnDom, async await ----------------------------------------------------------*/

/* start eventlistener to newDelBtn , lees uitde eachLoadList._id
 plak de _id aan de url (zie postman) en plaats in de fetch async await*/
newDelBtn.addEventListener('click', (eventDelBtn) => {
    console.log('entering eventlistener newDelBtn', eventDelBtn);

    console.log('eachLoadList._id', eachLoadList._id);


});
/*end eventlistener delete btn----------------------------------------------*/







/*start makeList newLi W? yes good job---------------------------*/
const makeList = (eachList) => {

        const newLi = document.createElement('li'); //W?y
        const newLiAppContUl = container_Ul.appendChild(newLi); //W? y
        const newInput = document.createElement('input'); //W?>y
        const newInputApp_newLi = newLi.appendChild(newInput); //w?y
        newInput.setAttribute('value', textInput_1.value); //w? y

        const newDelBtn = document.createElement('button'); //W?y
        newLi.appendChild(newDelBtn); //w?y
        newDelBtn.setAttribute('id', 'delBtn'); //w?y
        newDelBtn.textContent = "delete btn"; // w? not yet , should be a icon trash
        newDelBtn.setAttribute('type', 'submit');

        return newLi
    } //makeList

/*the end function makeList-----------------------------------------------*/


/*kladblok-----------------------------------------------------------*/
/* start eventlistener to newDelBtn */
//newDelBtn.addEventListener('click', (eventDelBtn) => {
//  console.log('entering eventlistener newDelBtn', eventDelBtn);

//});
/*end eventlistener delete btn----------------------------------------------*/


/*einde kladblok*/
/* functie getPost read getPost per item : uitlezen van de getpost per rij dmv forEach, dan ophangen in de
DOM dmv aanroepen functie makeGetList: */

//const getPost = (eachPost) => {

//make the new list of the get post
// const getNewLi = document.createElement('li'); //W?y
//console.log('getNewLi', getNewLi); //? y

//const getNewLiAppContUl = container_Ul.appendChild(getNewLi); //W? y
//console.log('newLiAppContUl', getNewLiAppContUl); //w?y

//const getNewInput = document.createElement('input'); //W?y
//console.log('getNewInput ', getNewInput);

//const getNewInputApp_getNewLi = getNewLi.appendChild(getNewInput); //w?y
//console.log('getNewInputApp_getNewLi', getNewInputApp_getNewLi); //w?y

//getNewInput = ( hier komt de waarde van description bv brood)

//make a delete button
//const getDelBtn = document.createElement('button'); //W?y
//console.log('getDelBtn', getDelBtn); //w?y
//getNewLi.appendChild(getDelBtn); //w?y
//getDelBtn.setAttribute('id', 'getDelBtn'); //w?y
//getDelBtn.textContent = "get_delete_ btn"; // w?y
//getDelBtn.setAttribute('type', 'submit'); //w?y

//make a checkbox
//const theCheckBox = document.createElement('input'); //W?y
//console.log('theCheckBox', theCheckBox); //W?y
//getNewLi.appendChild(theCheckBox); //w?y
//console.log(' getNewLi', getNewLi); / / w ? y
//theCheckBox.setAttribute('type', 'checkbox'); //w?y
//console.log('theCheckBox', theCheckBox); //w/y

//}; //getPost

//getPost();



/*makeGetList: make list for get POST for all data--------------------------------*/
//oooo
/*end makeGetList------------------------------------------------------------------*/