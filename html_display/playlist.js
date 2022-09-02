//Should fetch data from fm La Paz
//const third_rock = "https://feed.tunein.com/profiles/s151799/nowPlaying";
//const fmLaPaz = "https://stream.consultoradas.com/cp/get_info.php?p=8042";

//let origTitle = document.title;
//var timeNow = new Date();
//let hh = timeNow.getHours();
//let mm = timeNow.getMinutes();

var songs = [];
var artUrls = [];

document.addEventListener("load",buildList());

function buildList(){
    var gotFrame = document.getElementById('nowPlaying');
    //console.log(gotFrame);
    var song = gotFrame.contentWindow.document.getElementsByTagName("H2")[1];
    console.log("parent",song);
    //var divart = gotFrame.contentWindow.document.getElementsByTagName("DIV")[0];
    var artwork = "";//divart.getElementsByTagName("IMG")[0];
    //const gotData = await get_url(fmLaPaz);
    
    //song = getH2;
    //artwork = gotData.artwork;
    songs.push(song);
    artUrls.push(artwork);
    //var songArr = song.split("-");
    const divList = document.createElement("div");
    divList.setAttribute("class","row");
    var divColImg = document.createElement("div");
    divColImg.setAttribute("class","colImg");
    divColImg.innerHTML = "<img src='"+ artwork+"' width=100%>";
    var divText = document.createElement("div");
    divText.setAttribute("class","colTxt");
    divText.innerHTML = "<h3>" + song  + "</h3>";//"<p>"+songArr[1]+"</p>";
    divList.appendChild(divColImg);
    divList.appendChild(divText);
    console.log(songs,artUrls);
    document.body.appendChild(divList);
    //return divList;
}

/*async function get_url(my_url){
    const response = await fetch(my_url);
    const data = await response.json();
    var song = data['title'];
    if(song === "www.lapaz.fm - "){
        song = "Title not found";
    }
    const artwork = data['art'];
    return {song,artwork};
}*/

