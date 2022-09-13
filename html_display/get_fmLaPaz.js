//Should fetch data from fm La Paz
//const third_rock = "https://feed.tunein.com/profiles/s151799/nowPlaying";
const fmLaPaz = "https://stream.consultoradas.com/cp/get_info.php?p=8042";

let origTitle = document.title;

const key = "title";
var songs = [];
var artUrls = [];

document.addEventListener("onload",display_data());


document.addEventListener("load",buildList());

function updateAll(){
    setTimeout(()=>{
        display_data();
    },5000);
}

async function buildList(){
    /* Wait 'til display_data is finished, then get info from h2 elems */
    const gotValues = await display_data();
    const gotDiv = document.getElementById('nowPlaying');

    const song = gotDiv.getElementsByTagName("h2");
    const playTime = song[0].innerHTML.split(" ");
    
    //console.log("parent",song[1].innerHTML);
    var artwork = gotDiv.getElementsByTagName("div");
    artwork = artwork[0].innerHTML.split('"');
    songs.push(playTime+" "+song[1].innerHTML);
    artUrls.push(artwork[1]);
    
    const divList = document.getElementById("playList");
    const mainDiv = document.createElement("div");
    mainDiv.setAttribute("class","row");
    //divList.setAttribute("class","row");
    var divColImg = document.createElement("div");
    divColImg.setAttribute("class","colImg");
    divColImg.innerHTML = "<img src='"+ artwork[1]+"' width='75'>";
    var divText = document.createElement("div");
    divText.setAttribute("class","colTxt");
    divText.innerHTML = "<h3>" + playTime[0] + " " + song[1].innerHTML  + "</h3>";
    mainDiv.appendChild(divColImg);
    mainDiv.appendChild(divText);
    console.log(songs,artUrls);
    divList.appendChild(mainDiv);
    document.body.appendChild(divList);
    setInterval(buildList,185000);
    //return divList;
}


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
    myDiv.style.height = "500px";
    
    // const updater = "<meta http-equiv='refresh' content='221'>";
    // const calljs = "<script src='get_fmLaPaz.js'></script>"
    // const divElm = document.createElement("div");
    const h2Title = "<h2 style='color:#bed2e0;'>"+ hh + ":" + mm + " Now Playing on FM La Paz"+"</h2>"; 
    //document.createElement("h2");
    //h2Title.innerHTML = hh + ":" + mm + " Now Playing on FM La Paz";
    //const h2Song = document.createElement("h2");
    //h2Song.innerHTML = gotData.song;
    const h2Song = "<h2 style='color:#bed2e0;'>" + gotData.song + "</h2>";
    const divImg = "<div>" + img_art + "</div>";
    //document.createElement("div");
    //divImg.innerHTML = img_art;
    //console.log("doc",divElm);
    const catInfo = h2Title + h2Song + divImg;
    myDiv.innerHTML = catInfo;

    document.body.appendChild(myDiv);

    setInterval(display_data, 180000);
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

