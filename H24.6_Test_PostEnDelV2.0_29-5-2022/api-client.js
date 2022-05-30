/*fetch, POST w? not yet question is
what is the syntax of the invoke itemPost (?)

step1: je hebt nodig de inputText value van user zet die in een variabel
en gebruik die in variabel raw voor waarde van "description"
----------------------------------------------*/

/*test 27mei2022 post request*/
const baseUrl = "http://localhost:3000";

const itemPost = async(aItem) => {
        console.log('aItem:', aItem);
        const responsePost = await fetch(baseUrl, {
                method: 'POST',
                body: JSON.stringify(aItem), //json
                headers: {
                    "Content-Type": "application/json",
                }, //header
            }) //fetch
        try {
            (response => response.text())
            (result => console.log(result))
        } catch {
            error =>
                console.log('error', error)
        };

        /*einde post request------------------------------------------------------*/

        /*start get request of all items in database W? yes excellent*/
        const getAllData = async(alldata) => {
                try {
                    const response = await fetch(baseUrl, {
                            method: "GET",
                            headers: {
                                "Content-Type": "application/json",
                            },

                            // headers
                        }) //fetch

                    const dataJson = await response.json();
                    console.log('reponse: ', dataJson);
                    return dataJson
                } catch (err) {
                    console.error(err)
                } //catch
            } //func
        ;
        // getAllData();

        //const getAllData_1 = getAllData(); //w/ yes
        //console.log("getAllData_1 : ", getAllData_1);
        /*end fetch loadlist-------------------------------------------------*/


        /*start delete request W? yes good job*/
        // const baseUrl = "http://localhost:3000/";
        // const eachLoadList_Id = "2de9529a-74b8-47be-a2f4-8ad6aea52213";
        //  const noWhiteSpace = eachLoadList_Id.replace(/\s/g, '');
        //  console.log("noWhiteSpace", noWhiteSpace);
        //  const result = baseUrl.concat(noWhiteSpace);
        //  console.log('result:  ', result);

        // var myHeaders = new Headers();
        //  myHeaders.append("Content-Type", "application/json");

        //  var raw = "";

        //  var requestOptions = {
        //      method: 'DELETE',
        //      headers: myHeaders,
        //      body: raw,
        //      redirect: 'follow'
        //  };

        //const deleteData = async(delData) => {
        //        try {
        //            const delResponse = await fetch(result, requestOptions)
        //       } /*try*/
        //       catch (err) {
        //           console.erro(err)
        //} //catch
        // } //async

        /*end delete request*/




        /*einde 27mei2022*/

        /*25mei 2022 rewrite fetch, await/TRY/catch works? yes excellent job, but with a wrong data*/
        //var myHeaders = new Headers();
        //myHeaders.append("Content-Type", "application/json");

        // var raw = JSON.stringify({
        //     "description": textInput_1.value, //textInput_2.value
        //"done": "false"
        //});

        //var requestOptions = {
        //  method: 'POST',
        //    headers: myHeaders,
        //   body: raw,
        //   redirect: 'follow'
        //};


        // const itemPost = async(koek) => {

        //   const responsePost = await fetch(baseUrl, requestOptions)
        //  try {
        //(response => response.text())
        //  (result => console.log(result))
        //} catch {
        // error =>
        //   console.log('error', error)
        //};

        ; //fetch

    } //func
    //*end fetch await/try/cach------------------------------------------*/

/*post async await/then/catch , works ? y but with the wrong data-------------*/
//const itemPost = async(koek) => {

//const responsePost = await fetch(baseUrl, requestOptions)
//.then(response => response.text())
//.then(result => console.log(result))
// .catch(error => console.log('error', error));

//; //fetch

//} //func

//const testItemPost = itemPost();
//console.log("testItemPost: ", testItemPost); //W? not yet

/*end fetch Post,feth await/then/catch*/




/*kladblok-------------------------------------*/