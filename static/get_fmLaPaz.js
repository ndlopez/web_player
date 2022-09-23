//Should fetch data from fm La Paz
const thisURL = "https://stream.consultoradas.com/cp/get_info.php?p=8042";
const audioConnect = new Audio("https://stream.consultoradas.com/8042/stream");

// Week:[0:Sun, 1:Mon, 2:Tue, 3:Wed, 4:Thu, 5:Fri, 6:Sat]
const weekly = [
    {name:"PopArt",day:1,time:16},
    {name:"PopArt",day:2,time:16},
    {name:"PopArt",day:3,time:10},
    {name:"PopArt",day:4,time:9},
    {name:"En Concierto",day:3,time:12},
    {name:"En Concierto",day:4,time:16},
    {name:"UltraLight",day:0,time:16},
    {name:"UltraLight",day:1,time:9},
    {name:"UltraLight",day:1,time:10},
    {name:"UltraLight",day:1,time:11},
    {name:"UltraLight",day:1,time:11},
    {name:"UltraLight",day:2,time:10},
    {name:"UltraLight",day:2,time:11},
    {name:"UltraLight",day:2,time:12},
    {name:"UltraLight",day:4,time:15},
    {name:"Rock Clasico",day:3,time:16},
    {name:"Rock Clasico",day:5,time:10},
];

function startPlay(){
    audioConnect.play();
    audioConnect.loop = true;
    //console.log("Did it started?");
}
function pausePlay(){
    audioConnect.pause();
    audioConnect.loop = false;
}

const titleErr = ["Radio Online  -  LAPAZ.FM","PROMO PUBLICIDAD LPFM - ","Diferente Como Tu Lapaz.fm  -  IVAN 5 *"];
let origTitle = document.title;
const keys = ["title","art"];
const upTime = 180010; //ms

let songs = [];
let artImg = [];
let timeStamp = [];
let tmpData;
let myList = [];
let upCount = 0;
//document.addEventListener("onload",display_data());
display_data();

playControls();
//document.addEventListener("load",buildList());
async function playControls(){
    await display_data();
    const nowDiv = document.getElementById('nowPlaying');
    const playDiv = document.createElement("div");
    var texty = '<button onclick="startPlay()"><svg id="i-play" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="32" height="32" fill="none" stroke="currentcolor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><path d="M10 2 L10 30 24 16 Z" /></svg></button>';
    texty += '<button onclick="pausePlay()"><svg id="i-pause" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="32" height="32" fill="none" stroke="currentcolor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><path d="M23 2 L23 30 M9 2 L9 30" /></svg></button>';
    playDiv.innerHTML = texty;
    nowDiv.appendChild(playDiv);
}

function sleepy(ms){
    return new Promise(resolve =>setTimeout(resolve,ms));
}

function get_sched(tag,heure){
    var myTitle = "";
    for (let item in weekly){
        if(weekly[item].day === tag && weekly[item].time === heure){
            myTitle = weekly[item].name;
        }
    }
    return myTitle;
}

function export_to_file(jsonData){
    let dataStr = JSON.stringify(jsonData);
    let dataUri = 'data:application/json;charset=utf-8,'+encodeURIComponent(dataStr);

    let exportFile = "playlist.json";

    let linkElm = document.getElementById("downLink")
    linkElm.setAttribute('href',dataUri);
    linkElm.setAttribute('download',exportFile);
    //linkElm.click();
}

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
    divText.innerHTML = "<span>" + song[1].innerHTML + "</span><span>" + song[2].innerHTML +"</span>";
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
    
    tmpData = {"time": timeStamp[upCount], "song": songs[upCount], "artwork": artImg[upCount]};
    myList.push(tmpData);
    //console.log(upCount,myList);
    export_to_file(myList);
    upCount++;

},upTime);

async function call_back(){
    await sleepy(1500);
    gotData = await get_url(thisURL);
    console.log("sleeping 1.5s",gotData.song);
}

async function display_data(){
    /* Display current song playing on FM La Paz */
    var gotData = await get_url(thisURL);
    var timeNow = new Date();
    let day = timeNow.getDay();
    let hh = timeNow.getHours();
    let mm = timeNow.getMinutes();

    if(mm < 10){
        mm = "0"+String(mm);
    }
    /*switch(gotData.song){
        case titleErr[0]:
            await call_back();
            break;
        case titleErr[1]:
    }*/
    if(gotData.song === titleErr[0]){
        console.log(hh+":"+mm,gotData.song);
        await sleepy(5000);
        gotData = await get_url(thisURL);
        console.log("sleeping 5s",gotData.song);
    }
    document.title = gotData.song;
    const img_art = "<img src='" + gotData.artwork + "' alt='Now Playing' width=350>";
    
    var myDiv = document.getElementById("nowPlaying");
    myDiv.style.width = "100%";
    myDiv.style.height = "450px";
    
    // const updater = "<meta http-equiv='refresh' content='221'>";
    // const calljs = "<script src='get_fmLaPaz.js'></script>"
    // const divElm = document.createElement("div");
    const h2Time = "<h2>"+ hh + ":" + mm +"</h2>"; 
    //document.createElement("h2");
    const hTitle = "<h1> Now Playing on FM La Paz: " + get_sched(day,hh) + 
    "</h1><p><a id='downLink'>Download playlist</a></p>";
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

    //console.log(day,hh,"Prog:",get_sched(day,hh));
}

async function get_url(my_url){
    const response = await fetch(my_url);
    const data = await response.json();
    const song = data[keys[0]];
    const artwork = data[keys[1]];
    return {song,artwork};
}

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