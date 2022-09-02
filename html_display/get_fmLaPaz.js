//Should fetch data from fm La Paz
//const third_rock = "https://feed.tunein.com/profiles/s151799/nowPlaying";
const fmLaPaz = "https://stream.consultoradas.com/cp/get_info.php?p=8042";

let origTitle = document.title;
var timeNow = new Date();
let hh = timeNow.getHours();
let mm = timeNow.getMinutes();

//var songs = [];
//var artUrls = [];

display_data();

async function display_data(){
    const key = "title";
    const gotData = await get_url(fmLaPaz);
    const img_art = "<img src='"+gotData.artwork+"' alt='Now Playing' width=350>";
    document.title = gotData.song;
    
    //document.getElementById("currSong").innerHTML = gotData.song;
    //document.getElementById("currArt").innerHTML = img_art;
    var myFrame = document.getElementById("nowPlaying");
    myFrame.style.width = "100%";
    myFrame.style.height = "500px";
    document.body.appendChild(myFrame);
    const updater = "<meta http-equiv='refresh' content='221'>";
    const calljs = "<script src='get_fmLaPaz.js'></script>"
    //const divElm = document.createElement("div");
    const h2Title = "<h2 style='color:#bed2e0;'>"+ hh + ":" + mm + " Now Playing on FM La Paz"+"</h2>"; 
    //document.createElement("h2");
    //h2Title.innerHTML = hh + ":" + mm + " Now Playing on FM La Paz";
    //const h2Song = document.createElement("h2");
    //h2Song.innerHTML = gotData.song;
    const h2Song = "<h2 style='color:#bed2e0;'>"+gotData.song+"</h2>";
    const divImg = "<div>"+img_art+"</div>";
    //document.createElement("div");
    //divImg.innerHTML = img_art;
    //divElm.appendChild(h2Title);
    //divElm.appendChild(h2Song);
    //divElm.appendChild(divImg);
    //console.log("doc",divElm);
    const catInfo = h2Title + h2Song + divImg;
    myFrame.src = 'javascript:void((function(){var script = document.createElement(\'script\');' +
  'script.innerHTML = "(function() {' +
  'document.open();document.domain=\'' + document.domain +
  '\';document.close();})();";' +
  'document.write("<head>" + script.outerHTML + "'+
	'</head><body></body>");})())';
    myFrame.contentWindow.document.write(updater);
    //myFrame.contentWindow.document.write(calljs);
    myFrame.contentWindow.document.write(catInfo);
    //'<div><h2>'+gotData.song+'</h2></div>'
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

