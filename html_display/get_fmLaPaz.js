//Should fetch data from fm La Paz
//const third_rock = "https://feed.tunein.com/profiles/s151799/nowPlaying";
const fmLaPaz = "https://stream.consultoradas.com/cp/get_info.php?p=8042";

let origTitle = document.title;

const key = "title";
const upTime = 60000; //180010; //ms

let songs = [];
let artImg = [];
let timeStamp = [];

let myList = [];

//document.addEventListener("onload",display_data());
buildList();
//document.addEventListener("load",buildList());

setInterval(async function buildList(){
    /* Wait 'til display_data is finished, then get info from h2 elems */
    await display_data();
    //setTimeout(buildList,185000);
    const gotDiv = document.getElementById('nowPlaying');

    const song = gotDiv.getElementsByTagName("h2");
    const playTime = song[0].innerHTML.split(" ");
    
    //console.log("parent",song[1].innerHTML);
    var artwork = gotDiv.getElementsByTagName("div");
    artwork = artwork[0].innerHTML.split('"');

    //var thisSong = song[1].innerHTML; // .split("-");
    const divList = document.getElementById("playList");
    const mainDiv = document.createElement("div");
    mainDiv.setAttribute("class","row");
    //divList.setAttribute("class","row");
    var divColImg = document.createElement("div");
    divColImg.setAttribute("class","colImg");
    divColImg.innerHTML = "<img src='"+ artwork[1]+"' width='75'>";
    var divText = document.createElement("div");
    divText.setAttribute("class","colArtist");
    divText.innerHTML = "<span>" + song[1].innerHTML + "<br/><br/>" + song[2].innerHTML +"</span>";
    var divTime = document.createElement("div");
    divTime.setAttribute("class","colTime");
    divTime.innerHTML = "<span>" + playTime[0] + "</span>";
    
    mainDiv.appendChild(divColImg);
    mainDiv.appendChild(divText);
    mainDiv.appendChild(divTime);

    divList.appendChild(mainDiv);
    document.body.appendChild(divList);

    timeStamp.push(playTime[0]);
    songs.push(song[1].innerHTML+"-"+song[2].innerHTML);
    artImg.push(artwork[1]);
    
    let tmpData;
    for(let idx=0; idx < timeStamp.length; idx++){
        tmpData = {"time": timeStamp[idx],"song":songs[idx],"artwork":artImg[idx]};
        myList.push(tmpData);
    }
    
    console.log(myList);
    //return divList;
},upTime);


async function display_data(){
    /* Display current song playing on FM La Paz */
    const gotData = await get_url(fmLaPaz);
    var timeNow = new Date();
    let hh = timeNow.getHours();
    let mm = timeNow.getMinutes();

    if(mm < 10){
        mm = "0"+String(mm);
    }

    const img_art = "<img src='" + gotData.artwork + "' alt='Now Playing' width=350>";
    document.title = gotData.song;
    
    var myDiv = document.getElementById("nowPlaying");
    myDiv.style.width = "100%";
    myDiv.style.height = "450px";
    
    // const updater = "<meta http-equiv='refresh' content='221'>";
    // const calljs = "<script src='get_fmLaPaz.js'></script>"
    // const divElm = document.createElement("div");
    const h2Time = "<h2>"+ hh + ":" + mm +"</h2>"; 
    //document.createElement("h2");
    //h2Title.innerHTML = hh + ":" + mm + 
    const hTitle = "<h1> Now Playing on FM La Paz</h1>";
    const h2Song = gotData.song.split("-");
    const divTitle = "<div class='bottomText'>" + h2Time + 
    "<h2>"+ h2Song[0] + "</h2><h2>" + h2Song[1]+ "</h2></div>";
    const divImg = "<div class='contain'>" + img_art + divTitle + "</div>";
    //document.createElement("div");
    //divImg.innerHTML = img_art;
    //console.log("doc",divElm);
    const catInfo = divImg;
    myDiv.innerHTML = hTitle + catInfo;

    document.body.appendChild(myDiv);
    /*myDiv.src = 'javascript:void((function(){var script = document.createElement(\'script\');' +
  'script.innerHTML = "(function() {' +
  'document.open();document.domain=\'' + document.domain +
  '\';document.close();})();";' +
  'document.write("<head>" + script.outerHTML + "'+
	'</head><body></body>");})())';
    myDiv.contentWindow.document.write(updater);
    //myDiv.contentWindow.document.write(calljs);
    myDiv.contentWindow.document.write(catInfo);*/
    //'<div><h2>'+gotData.song+'</h2></div>'
    //console.log("Now: "+ gotData.song,gotData.artwork);
}

async function get_url(my_url){
    const response = await fetch(my_url);
    const data = await response.json();
    var song = data[key];
    if(song === "www.lapaz.fm - "){
        song = "Title not found";
    }
    const artwork = data['art'];
    return {song,artwork};
}

