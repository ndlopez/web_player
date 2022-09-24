//Should fetch data from fm La Paz
const thisURL = "https://stream.consultoradas.com/cp/get_info.php?p=8042";
var audioConnect = "";//new Audio("https://stream.consultoradas.com/8042/stream");

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
    {name:"DiscoStu",day:6,time:10},
    {name:"DiscoStu",day:6,time:11},
    {name:"DiscoStu",day:6,time:12},
    {name:"DiscoStu",day:0,time:10},
    {name:"DiscoStu",day:0,time:11},
    {name:"DiscoStu",day:0,time:12},
];

const titleErr = ["Radio Online  -  LAPAZ.FM","PROMO PUBLICIDAD LPFM - ","Diferente Como Tu Lapaz.fm  -  IVAN 5 *"," - "];
const discostu = "DISCO ESTUDIO PROGRAMA VIERNES - ";

let origTitle = document.title;
const keys = ["title","art"];
const upTime = 180010; //ms

let songs = [];
let artImg = [];
let timeStamp = [];
let tmpData;
let myList = [];
let upCount = 0;
var playStatus = false;

function startPlay(){
    playStatus = true;
    audioConnect = new Audio("https://stream.consultoradas.com/8042/stream");
    const svgPlay = document.getElementById("i-play");
    const svgStop = document.getElementById("i-stop");
    svgPlay.style.fill = "#cc274c";
    svgPlay.style.stroke = "#cc274c";
    svgStop.style.stroke = "#234054";
    svgStop.style.fill = "#234054";
    audioConnect.play();
    audioConnect.loop = true;
}
function stopPlay(){
    playStatus = false;
    const svgPlay = document.getElementById("i-play");
    const svgStop = document.getElementById("i-stop");
    svgPlay.style.fill = "#234054";
    svgPlay.style.stroke = "#234054";
    svgStop.style.stroke = "#cc274c";
    svgStop.style.fill ="#cc274c";
    audioConnect.pause();
    audioConnect.loop = false;
}
function chgIcon(){
    const btn = document.getElementById("playBtn");
    if(playStatus){
        btn.innerHTML = '<svg id="i-stop" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="32" height="32" fill="#2e4054" stroke="#2e4054" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><path d="M5 9 L5 29 27 29 27 9 Z" /></svg>stop';
    }else{
        //stopPlay();
        btn.innerHTML = '<svg id="i-play" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="32" height="32" fill="#2e4054" stroke="#2e4054" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><path d="M10 2 L10 30 24 16 Z" /></svg>play';
    }
}

display_data();
//playControls();

function playControls(){
    //await display_data();
    const playDiv = document.createElement("div");
    playDiv.setAttribute("id","player");
    var texty = '<button onclick="startPlay()"><svg id="i-play" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="32" height="32" fill="none" stroke="currentcolor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><path d="M10 2 L10 30 24 16 Z" /></svg></button>';
    texty += '<button onclick="pausePlay()"><svg id="i-pause" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="32" height="32" fill="none" stroke="currentcolor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><path d="M23 2 L23 30 M9 2 L9 30" /></svg></button>';
    playDiv.innerHTML = texty;
    return playDiv;
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
    //console.log(song[2].innerText);
    //const playTime = song[2].innerHTML;//.split(" ");
    
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
    divText.innerHTML = "<span>" + song[0].innerText + "</span><span>" + song[1].innerText +"</span>";
    var divTime = document.createElement("div");
    divTime.setAttribute("class","colTime");
    divTime.innerHTML = "<span>" + song[2].innerText + "</span>";
    
    mainDiv.appendChild(divColImg);
    mainDiv.appendChild(divText);
    mainDiv.appendChild(divTime);

    divList.appendChild(mainDiv);
    document.body.appendChild(divList);

    timeStamp.push(song[2].innerText);
    songs.push(song[0].innerText + "-" + song[1].innerText);
    artImg.push(artwork[1]);
    
    tmpData = {"time": timeStamp[upCount], "song": songs[upCount], "artwork": artImg[upCount]};
    myList.push(tmpData);
    //console.log(upCount,myList);
    export_to_file(myList);
    var dLink = document.getElementById("downLink");
    dLink.innerHTML = "<img src='assets/down_cloud.svg' width='32'/>";
    upCount++;

},upTime);

async function call_back(hour,min){
    console.log(hour+":"+min,"error:",gotData.song);
    await sleepy(5000);
    gotData = await get_url(thisURL);
    console.log("sleeping 5s",gotData.song);
    return gotData;
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
            call_back(hh,mm);
            break;
        case titleErr[1]:
            call_back(hh,mm);
            break;
        case titleErr[2]:
            call_back(hh,mm);
            break;
        default:
            let fdx=0;
    }*/
    if(gotData.song === titleErr[0] || gotData.song === titleErr[1] || gotData.song === titleErr[2] || gotData.song === titleErr[3]){
        console.log(hh+":"+mm,"error:",gotData.song);
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
    const h2Time = "<h2><small>"+ hh + ":" + mm +"</small></h2>"; 
    //document.createElement("h2");
    const hTitle = "<h1> Now Playing on FM La Paz: " + get_sched(day,hh) + 
    "</h1>";
    const h2Song = gotData.song.split("-");
    const divTitle = "<div class='bottomText'>" +
    "<h2>"+ h2Song[0] + "</h2><h2>" + h2Song[1]+ "</h2>"+h2Time+"</div>";
    const divImg = "<div class='contain'>" + img_art + divTitle + "</div>";

    //console.log("doc",divElm);
    const catInfo = divImg;
    myDiv.innerHTML = hTitle + catInfo;

    document.body.appendChild(myDiv);

}

async function get_url(my_url){
    const response = await fetch(my_url);
    const data = await response.json();
    const song = data[keys[0]];
    const artwork = data[keys[1]];
    if(song === discostu){
        //upTime = 3600000;
        console.log("3hr sched",song,upTime);}
    //console.log(song);
    return {song,artwork};
}

/* open and close Info modal */
function openNav(){
    document.getElementById("InfoNav").style.display = "block";
    document.body.style.overflow = "hidden";
}
function closeNav(thisObj){
    document.getElementById(thisObj).style.display = "none";
    document.body.style.overflow = "auto";
}

function addModal(){
    const secDiv = document.createElement("div");
    secDiv.id = "InfoNav";
    secDiv.className = "success_window";
    secDiv.innerHTML = "<div class='success-content'><div class='success-header'>"+
    "<span class='closeBtn' onclick=\"closeNav('InfoNav')\">&times;</span>" +
    "</div><div class='success-body'>"+
    "<h2>Info</h2>" +
    "<p>In order to NOT make too many requests to server (lapaz.fm), the Playlist is updated every 3mins. Thus, sometimes live playing might differ from nowPlaying info and artwork</p><p><img class='success-svg' src='assets/down_cloud.svg'/> Click on this icon and you can download the playlist, from the moment you opened this page.</p><p>Developed by <a href='https://github.com/ndlopez'>ndzerglink</a></p></div></div>";
    window.onclick = function(ev){
        if (ev.target == secDiv){
            secDiv.style.display = "none";
        }
    }
    return secDiv;
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