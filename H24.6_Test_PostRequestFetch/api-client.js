/*fetch, POST w? not yet question is
what is the syntax of the invoke itemPost (?)

step1: je hebt nodig de inputText value van user zet die in een variabel
en gebruik die in variabel raw voor waarde van "description"
----------------------------------------------*/

var myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");

//const textInput_2 = document.querySelector("#textInput"); //W?y
//const inputTextValue_2 = textInput_2.value;

var raw = JSON.stringify({
    "description": textInput_1Var, //textInput_2.value
    "done": "false"
});

var requestOptions = {
    method: 'POST',
    headers: myHeaders,
    body: raw,
    redirect: 'follow'
};


const baseUrl = "http://localhost:3000";

/* rewrite fetch, await/TRY/catch works? yes excellent job, but with a wrong data*/
const itemPost = async(koek) => {

        const responsePost = await fetch(baseUrl, requestOptions)
        try {
            (response => response.text())
            (result => console.log(result))
        } catch {
            error =>
                console.log('error', error)
        };

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