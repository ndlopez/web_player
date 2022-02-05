/*
    # This app displays current song playing on FM La Paz
    # at the Notification center in MacOS
    # Developed by ndlopez
    # Last updated on 2021-09-11 
*/
var app = Application.currentApplication()

app.includeStandardAdditions = true

let nowTime= app.currentDate() //current date and time
var nowHeure = nowTime.getHours();
var nowMinute = nowTime.getMinutes();
var currentTime = nowHeure + ":";
currentTime+= (nowMinute < 10)? ("0"+ nowMinute):(nowMinute);

//const dataHome = "/Users/<username>/Public/get_fmLaPaz/fmLaPaz_now.json"
const dataHome = "fmLaPaz_now.json"

function readDataFile(fileName){
	try{
		var pathStr = fileName.toString()
		return app.read(Path(pathStr))
	}catch(error){
		displayError("There's NO such data on system. Would you like to try another?", ["Cancel", "OK"])
	}
}

function displayError(errorMessage, buttons) {
    app.displayDialog(errorMessage, {
        buttons: buttons
    })
}

var myData=readDataFile(dataHome);

//Read JSON
var streamObj = JSON.parse(myData); 

var currSong = streamObj["data"][0]["song"]
var onlineUsers = streamObj["data"][0]["listeners"]+"/"+streamObj["data"][0]["maxlisteners"];

//Display quote
app.displayNotification("Escuchando... " + onlineUsers,{
	withTitle: currentTime + " Ahora en FM La Paz",
	subtitle: currSong,
	soundName: "Frog"
})
