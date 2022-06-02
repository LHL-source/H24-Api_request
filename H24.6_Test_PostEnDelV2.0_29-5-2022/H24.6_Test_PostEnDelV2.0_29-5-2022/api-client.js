/*fetch, POST w? not yet question is
what is the syntax of the invoke itemPost (?)

step1: je hebt nodig de inputText value van user zet die in een variabel
en gebruik die in variabel raw voor waarde van "description"
----------------------------------------------*/

/*POST :test 27mei2022 post request*/
const baseUrl = "http://localhost:3000";

const itemPost = async(aItem) => {
        // console.log('aItem:', aItem);
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
    }
    /*einde post request------------------------------------------------------*/

/*start GET request of all items in database W? yes excellent*/
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
            //console.log('reponse: ', dataJson);
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

/*start DELETE request W? yes good job-------------------------------*/
const baseUrl_1 = "http://localhost:3000/";

var myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");

var raw = "";

var requestOptions = {
    method: 'DELETE',
    headers: myHeaders,
    body: raw,
    redirect: 'follow'
};

const deleteData = async(id) => {
        const result = baseUrl_1.concat(id);
        // console.log('result:  ', result);W? y
        try {
            const delResponse = await fetch(result, requestOptions)
                //console.log('delResponse: ', delResponse);
        } /*try*/
        catch (err) {
            console.error(err)
        }
    } //async
    //console.log('delResponse: ', delResponse);
    /*end delete request-------------------------------------------------------*/
    /*kladblok 2-6-2022
    //const noWhiteSpace = eachLoadList_Id_1.replace(/\s/g, '');
    //console.log("noWhiteSpace", noWhiteSpace);
    */