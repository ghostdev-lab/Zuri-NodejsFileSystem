//Called the fetch module
var fetch = require('node-fetch');
//Called the fs (fileSystem) module
var fs = require("fs");

//Created a variable (url) to contain the url of the api
var url = 'http://jsonplaceholder.typicode.com/posts';

//Used the fetch method to request data from the api
fetch(url)
    .then(res => res.json())
    .then(json => {
        console.log("Fetching json data successfully.");
    
        /*Created a variable (jsondata) and used the JSON.stringify function 
          to convert the json data gotten from the api to a string*/
        var jsondata = JSON.stringify(json, null, 2);
        
        //To check if the folder exists
        if(!fs.existsSync("result")){
            //Used the make directory function (mkdir) to create a folder
	        fs.mkdir("result", err => {
                //If error occurs throw error on screen 
                if (err) throw err;
            })
        }
        
        //Used the writeFile function to write the json data to a new file
        fs.writeFile("./result/posts.json", jsondata , err => {
            //If error occurs throw error on screen
            if (err) throw err;
            console.log("Done writing.")
        })
    })

