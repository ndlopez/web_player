//Should fetch data from fm La Paz
const third_rock = "https://feed.tunein.com/profiles/s151799/nowPlaying";
const fmLaPaz = "https://stream.consultoradas.com/cp/get_info.php?p=8042";

let origTitle = document.title;
var timeNow = new Date();
let hh = timeNow.getHours();
let mm = timeNow.getMinutes();

//change title when focus
function oldTitle(){
    document.title = origTitle;
}
function newTitle(thisTitle){
    document.title = thisTitle;
}

//window.onfocus = newTitle(display_data());
//window.onfocus = oldTitle();
var songs = [];
var artUrls = [];

display_data();

function buildList(song,artwork){
    songs.push(song);
    artUrls.push(artwork);
    var songArr = song.split("-");
    const divList = document.createElement("div");
    divList.setAttribute("class","row");
    var divColImg = document.createElement("div");
    divColImg.setAttribute("class","colImg");
    divColImg.innerHTML = "<img src='"+ artwork+"' width=100%>";
    var divText = document.createElement("div");
    divText.setAttribute("class","colTxt");
    divText.innerHTML = "<h2>" + songArr[0]  + "<br/>"+songArr[1]+"</h2>";
    divList.appendChild(divColImg);
    divList.appendChild(divText);
    console.log(songs,artUrls);
    document.body.appendChild(divList);
    //return divList;
}

async function display_data(){
    const key = "title";
    const gotData = await get_url(fmLaPaz);
    const img_art = "<img src='"+gotData.artwork+"' alt='Now Playing' width=350>";
    document.title = gotData.song;
    
    //document.getElementById("currSong").innerHTML = gotData.song;
    //document.getElementById("currArt").innerHTML = img_art;
    const divElm = document.createElement("div");
    const h2Title = document.createElement("h2");
    h2Title.innerHTML = hh + ":" + mm + " Now Playing on FM La Paz";
    const h2Song = document.createElement("h2");
    h2Song.innerHTML = gotData.song;
    const divImg = document.createElement("div");
    divImg.innerHTML = img_art;
    divElm.appendChild(h2Title);
    divElm.appendChild(h2Song);
    divElm.appendChild(divImg);
    
    document.body.appendChild(divElm);
    buildList(gotData.song,gotData.artwork);
    //document.body.appendChild(buildList(gotData.song,gotData.artwork));
    //console.log("Now: "+ gotData.song,gotData.artwork);
}

async function get_url(my_url){
    const response = await fetch(my_url);
    const data = await response.json();
    var song = data['title'];
    if(song === "www.lapaz.fm - "){
        song = "Title not found";
    }
    const artwork = data['art'];
    return {song,artwork};
}

