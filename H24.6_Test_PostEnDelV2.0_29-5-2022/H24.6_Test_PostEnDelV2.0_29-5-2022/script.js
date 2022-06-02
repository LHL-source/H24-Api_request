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
            textInput_1.value = " "; //w? not yet
        }; //async
        postNewTask();
        /*end function new task------------------*/
    }) //eventlist
    /*end : eventlistener button add---------------------------------------*/

/*get all data from the server, so call the getAllData */
getAllData(); //w? y good job
/*end get all data from the server, so call the getAllData */

const getDataOnDom = async(doek) => {
        const list = await getAllData();
        // console.log('list: ', list); //W?y
        var loadList_1 = list.map((eachLoadList) => {

            /*start put into the Dom*/
            //container_Ul.style.list - style - Types = "none";
            const getNewLi = document.createElement('li'); //W?y
            const getNewLiAppContUl = container_Ul.appendChild(getNewLi); //W? y
            const getNewInput = document.createElement('input'); //W?y
            const getNewInputApp_getNewLi = getNewLi.appendChild(getNewInput); //w?y
            getNewInput.value = (eachLoadList.description); //W? not yet
            //make a delete button
            let getDelBtn = document.createElement('button'); //W?y
            getNewLi.appendChild(getDelBtn); //w?y
            getDelBtn.setAttribute('id', 'getDelBtn'); //w?y
            //getDelBtn.textContent = "get_delete_ btn"; // w?y
            getDelBtn.setAttribute('type', 'submit'); //w?y
            //make the trash icon
            const makeClass = document.createAttribute("class");
            makeClass.value = 'fa-solid fa-trash-can';
            getDelBtn.setAttributeNode(makeClass);

            //make a checkbox
            const theCheckBox = document.createElement('input'); //W?y
            getNewLi.appendChild(theCheckBox); //w ? y
            theCheckBox.setAttribute('type', 'checkbox'); //w?y

            /* start eventlistener to newDelBtn , lees uit de eachLoadList._id-------------*/
            getDelBtn.addEventListener('click', (eventDelBtn) => {
                // call function deleteDAta, delete request w? y----------------------
                const deleteTodo = (todoDomElement) => {
                        const id = eachLoadList._id;
                        const delDataTest = deleteData(id);
                    } //delxxTodo
                deleteTodo();
                container_Ul.innerHTML = "";
                getData_AfterDel();
            }); //eventlis_delBtn
            /*end eventlistener delete btn----------------------------------------------*/
            /*start invoke getDataAfterDelete function */


            return list
        }); //loadList_1
        //console.log('loadList_1 after map', loadList_1); //W? not yet undefined
        const loadList_2 = loadList_1 //getData
            // console.log('loadList_2 ', loadList_2); //w? not yet undefined
        return loadList_2
    } //getDataOnDom

const getDataOnDom_1 = getDataOnDom();
//console.log('getDataOnDom_1', getDataOnDom_1); //w? not yet

/*end getDataOnDom, async await ----------------------------------------------------------*/

/*start makeList newLi W? yes good job----------------------------------------------------*/
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
/*make function to get all data from the database and put into the Dom*/

const getData_AfterDel = async(doek) => {
        const list = await getAllData();
        // console.log('list: ', list); //W?y
        var loadList_1 = list.map((eachLoadList) => {

            /*start put into the Dom*/
            //container_Ul.style.list - style - Types = "none";
            const getNewLi = document.createElement('li'); //W?y
            const getNewLiAppContUl = container_Ul.appendChild(getNewLi); //W? y
            const getNewInput = document.createElement('input'); //W?y
            const getNewInputApp_getNewLi = getNewLi.appendChild(getNewInput); //w?y
            getNewInput.value = (eachLoadList.description); //W? not yet
            //make a delete button
            let getDelBtn = document.createElement('button'); //W?y
            getNewLi.appendChild(getDelBtn); //w?y
            getDelBtn.setAttribute('id', 'getDelBtn'); //w?y
            //getDelBtn.textContent = "get_delete_ btn"; // w?y
            getDelBtn.setAttribute('type', 'submit'); //w?y
            //make the trash icon
            const makeClass = document.createAttribute("class");
            makeClass.value = 'fa-solid fa-trash-can';
            getDelBtn.setAttributeNode(makeClass);

            //make a checkbox
            const theCheckBox = document.createElement('input'); //W?y
            getNewLi.appendChild(theCheckBox); //w ? y
            theCheckBox.setAttribute('type', 'checkbox'); //w?y

            return list
        }); //loadList_1
        const loadList_2 = loadList_1 //getData
            // console.log('loadList_2 ', loadList_2); //w? not yet undefined
        return loadList_2
    } //getDataOnDom

//const getData_AfterDel_1 = getData_AfterDel();
//console.log('getData_AfterDel', getData_AfterDel); //w? not yet

/*end getDataOnDom, async await ----------------------------------------------------------*/

/*remove the li ect from Dom----------------------------*/
//const removeFromDom = () => {
//  console.log('passId', passId);
//   const parent = container_Ul;
//  console.log("container_Ul", parent); //W? not yet
//  const child = container_Ul.getElementsByTagName('li', passId);
//  console.log("child", child);
//  const removedLi = parent.removeChild(child);

//  return
//}; //removeFr
//removeFromDom(eachLoadList._id);
/*end remove the li ect. van Dom------------------------------------*/






/*to solve problems on 31 march 2022:
1: ---line 23 = to make input empty W? not yet, vraag uitgezet? y good job
2: ---line 60 = inner.HTML w? yes good job 1 juni
3: ---line 37 =  eachLoadList_Id_2 script.js to put in api-client.js , w? yes good job 2juni
4: test post catch w? not yet
5: test get catch w? not yet
6: ---trash icon w?yes  works good job 1juni
7a:- delete dom input, button delete, checkbox W? not yet
7b: na click op deletebtn: li enz gelijk laten verdwijnen (niet enkel na refresh van page)
8: punt voor input mag weg
*/