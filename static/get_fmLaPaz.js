//Should fetch data from fm La Paz
const thisURL = "https://stream.consultoradas.com/cp/get_info.php?p=8042";

const these_days = ["Sun","Mon","Tue","Wed","Thu","Fri","Sat"];

const weekly_9 = [
    {name:"PopArt",day:1,time:16,duration:1},
    {name:"PopArt",day:2,time:16,duration:1},
    {name:"PopArt",day:3,time:10,duration:1},
    {name:"PopArt",day:4,time:10,duration:1},
    {name:"En Concierto",day:3,time:12,duration:1},
    {name:"En Concierto",day:4,time:16,duration:1},
    {name:"UltraLight",day:0,time:16,duration:3},
    {name:"UltraLight",day:0,time:17,duration:2},
    {name:"UltraLight",day:0,time:18,duration:1},
    {name:"UltraLight",day:1,time:9,duration:3},
    {name:"UltraLight",day:1,time:10,duration:2},
    {name:"UltraLight",day:1,time:11,duration:1},
    {name:"UltraLight",day:2,time:10,duration:3},
    {name:"UltraLight",day:2,time:11,duration:2},
    {name:"UltraLight",day:2,time:12,duration:1},
    {name:"UltraLight",day:4,time:13,duration:3},
    {name:"UltraLight",day:4,time:14,duration:2},
    {name:"UltraLight",day:4,time:15,duration:1},
    {name:"Rock Clasico",day:3,time:16,duration:1},
    {name:"Rock Clasico",day:5,time:10,duration:1},
    {name:"DiscoStu",day:6,time:10,duration:3},
    {name:"DiscoStu",day:6,time:11,duration:2},
    {name:"DiscoStu",day:6,time:12,duration:1},
    {name:"DiscoStu",day:0,time:10,duration:3},
    {name:"DiscoStu",day:0,time:11,duration:2},
    {name:"DiscoStu",day:0,time:12,duration:1},
];
const weekly_4 = [
    {name:"PopArt",day:1,time:3,duration:1},
    {name:"PopArt",day:2,time:3,duration:1},
    {name:"PopArt",day:2,time:21,duration:1},
    {name:"PopArt",day:3,time:21,duration:1},
    {name:"En Concierto",day:2,time:23,duration:1},
    {name:"En Concierto",day:4,time:3,duration:1},
    {name:"UltraLight",day:0,time:3,duration:3},
    {name:"UltraLight",day:0,time:20,duration:3},
    {name:"UltraLight",day:0,time:21,duration:2},
    {name:"UltraLight",day:0,time:22,duration:1},
    {name:"UltraLight",day:1,time:21,duration:3},
    {name:"UltraLight",day:1,time:22,duration:2},
    {name:"UltraLight",day:1,time:23,duration:1},
    {name:"UltraLight",day:4,time:2,duration:3},
    {name:"Rock Clasico",day:3,time:3,duration:1},
    {name:"Rock Clasico",day:4,time:21,duration:1},
    {name:"DiscoStu",day:5,time:21,duration:3},
    {name:"DiscoStu",day:5,time:22,duration:2},
    {name:"DiscoStu",day:5,time:23,duration:1},
    {name:"DiscoStu",day:6,time:21,duration:3},
    {name:"DiscoStu",day:6,time:22,duration:2},
    {name:"DiscoStu",day:6,time:23,duration:1},
];

const titleErr = ["Radio Online  -  LAPAZ.FM","","PROMO PUBLICIDAD LPFM - ",
"Diferente Como Tu Lapaz.fm  -  IVAN 5 *","DISCO ESTUDIO AVANCE DOMINGOS"];
const awfulArt = ["https://stream.consultoradas.com/cp/musiclibrary/nowplay_fmlapaz.png",
"https://i.scdn.co/image/ab67616d0000b273852527d582b377f1543129a3",
"https://i.scdn.co/image/ab67616d0000b2737515ba4e369a9526d7d4dfde",
"https://i.scdn.co/image/ab67616d0000b27344789c72043033cd97924059"];
const discostu = "https:\/\/stream.consultoradas.com\/cp\/musiclibrary\/nowplay_fmlapaz.png";

let origTitle = document.title;
const keys = ["title","art","bitrate","listeners"];
let upTime = 200000; // about 3min20s
const errLapse = 10000; //10s

let songs = [];
let artImg = [];
let timeStamp = [];
let tmpData;
let myList = [];
let upCount = 0;

display_data();

window.onscroll = function() {scrollFunction();};

var pxx=400; //artwork size
//scrolldelay = setTimeout('scrollFunction()',500); // scrolls every 100 milliseconds
function scrollFunction() {
    if (document.body.scrollTop > pxx || document.documentElement.scrollTop > pxx) {
        document.getElementById("topBtn").style.display = "block";
        document.getElementById("currSong").style.display = "block";
        document.getElementById("headTit").style.display = "none";
    } else {
        document.getElementById("topBtn").style.display = "none";
        document.getElementById("currSong").style.display = "none";
        document.getElementById("headTit").style.display = "block";
    }
}
//user clicks on myBtn, scroll to top
function topFunction() {
    //document.body.scrollTop = 0;
    //document.body.animate({scrollTop:0},1500);
    //document.documentElement.scrollTop = 0;
    window.scroll({ top: 0, left: 0, behavior: 'smooth' });
}

function reloadMe(){
    /* Reload the Playing artwork */
    /*returns buildList is not defined, probably because is 
    inside setInterval function, by setting it outside might work.
    const play_list = document.getElementById("playList");
    if(play_list === undefined){
        display_data();
    }else{
        buildList();
    }*/
    // in the mean time call:
    window.scroll({bottom:0,left:0,behavior:'smooth'});
    //scrollTo(0, document.body.scrollHeight);  
    display_data();
}

function zeroPad(timeElm){
    return (parseInt(timeElm,10) < 10 ? '0' : '') + timeElm;
}

function sleepy(msec){
    /* Display a simple msg on top */
    const headTitle = document.getElementById("nowLabel");
    headTitle.innerHTML = "<span>Connecting, please wait.</span>";
    return new Promise(resolve =>setTimeout(resolve,msec));
}

function get_sched(tag,heure,time_lag){
    var myTitle = "LAPAZ.fm";
    var gotObj = weekly_9; //default JST
    if(time_lag == 240){
        /* UTC-4 */
        gotObj = weekly_4;
    }
    for (let item in gotObj){
        if(gotObj[item].day === tag && gotObj[item].time === heure){
            myTitle = gotObj[item].name;
            var durTime = gotObj[item].time + gotObj[item].duration;
            myTitle += " (" + gotObj[item].time + " - " + durTime+")";
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
    //linkElm.setAttribute('target','_blank');
    //linkElm.click();//downloads a file every update
}

setInterval(async function buildList(){
    /* Wait 'til display_data is finished, then get info from h2 elems */
    await display_data();
    const parentDiv = document.getElementById("music");
    const divList = document.getElementById("playList");

    const gotDiv = document.getElementById('nowPlaying');
    const song = gotDiv.getElementsByTagName("h2");
    var noSec = song[2].innerText;//time HH:MM:SS
    noSec = (noSec.length < 8)? noSec.substring(0,4):noSec.substring(0,5);
    //noSec = noSec.substring(0,5);
    //console.log(song[2].innerText);
    //const playTime = song[2].innerHTML;//.split(" ");
    var artwork = gotDiv.getElementsByTagName("div");
    artwork = artwork[0].innerHTML.split('"');

    //var thisSong = song[1].innerHTML; // .split("-");
    
    const mainDiv = document.createElement("div");
    mainDiv.setAttribute("class","row");
    //divList.setAttribute("class","row");

    var divText = document.createElement("div");
    divText.setAttribute("class","colArtist");

    var gotArtist = song[0].innerText;
    if(gotArtist === "Radio Online" || gotArtist === "LA CASCADA"){
        gotArtist = "Sorry, title error";
        artwork[1] = "";
    }
    if((artwork[1] === awfulArt[0]) || (artwork[1] === awfulArt[1]) || (artwork[1] === awfulArt[2]) || artwork[1] === awfulArt[3]){
        artwork[1] = "";
        gotArtist = "Sorry, title error";
    }
    var divColImg = document.createElement("div");
    divColImg.setAttribute("class","colImg");
    divColImg.innerHTML = "<img src='"+ artwork[1]+"' width='75'>";

    divText.innerHTML = "<span>" + gotArtist + "</span><span>" + song[1].innerText +"</span>";

    var divTime = document.createElement("div");
    divTime.setAttribute("class","colTime");
    divTime.innerHTML = "<span>" + noSec + "</span>";
    
    mainDiv.appendChild(divColImg);
    mainDiv.appendChild(divText);
    mainDiv.appendChild(divTime);

    divList.appendChild(mainDiv);
    //document.body.appendChild(divList);
    parentDiv.appendChild(divList);

    /*Schedule list
    const schedLiz = document.getElementById("schedList");
    const newDate = new Date();
    schedLiz.innerHTML = "<h2>Later today<br/>"+ days[newDate.getDay()] + "</h2>";*/

    timeStamp.push(noSec);
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


async function display_data(){
    /* Display current song playing on FM La Paz */
    var gotData = await get_url(thisURL);
    const parentDiv = document.getElementById("music");
    //await sleepy(5000);
    const timeNow = new Date();
    const timeOffset = timeNow.getTimezoneOffset(); //if UTC + -> return -offset
    //console.log(timeOffset,typeof(timeOffset));//
    let day = timeNow.getDay();
    let hh = timeNow.getHours();
    let mm = timeNow.getMinutes();
    let ss = timeNow.getSeconds();

    mm = zeroPad(mm); //(mm < 10)? "0" + String(mm):mm;
    ss = zeroPad(ss); //(ss < 10)? "0" + String(ss):ss;

    var gina = hh+":"+mm;// +":"+ss;
    //console.log("time",gina);
    if(gotData.song === titleErr[0] || gotData.song === titleErr[1] || gotData.song === titleErr[2] || gotData.song === titleErr[3]){
        console.log(gina,"error:",gotData.song);
        await sleepy(errLapse);
        gotData = await get_url(thisURL);
        console.log("Loading...",gotData.song);
    }
    if(gotData.artwork === awfulArt[0] || gotData.artwork === awfulArt[1] || gotData.artwork === awfulArt[2]){
        console.log(gina,"wait 60s, art error:",gotData.artwork);
        await sleepy(60000);//10s
        gotData = await get_url(thisURL);
    }
    if(gotData.artwork === awfulArt[0]){
        gotData.artwork = "";
    }
    document.title = gotData.song;
    const img_art = "<img src='" + gotData.artwork + "' alt='Now Playing: Artwork' width=256>";
    
    const headTitle = document.getElementById("nowLabel");
    headTitle.innerHTML = "<h2 id='headTit'>Now Playing: " + get_sched(day,hh,timeOffset) + 
    "</h2><h3 id='currSong' class='lighter'>" + gina +" "+gotData.song+"</h3>";

    var myDiv = document.getElementById("nowPlaying");
    /*myDiv.style.width = "100%";*/
    myDiv.style.height = "350px";
    gina = hh + ":" + mm + ":" + ss;
    const h2Time = "<h2 class='lighter'><small>"+ gina +"</small></h2>"; 
    //document.createElement("h2");
    //const hTitle = "<h1> Now Playing: " + get_sched(day,hh) + "</h1>";
    const h2Song = gotData.song.split("-");
    const divTitle = "<div class='bottomText'>" + "<h2 class='headLabel'>"+ h2Song[0].trim() +
    "</h2><h2><small>" + h2Song[1].trim() + 
    "</small></h2>"+ h2Time +"<div id='more_info'><div class='col3'>"+
    "<h3 class='lighter'>Bitrate</h3><h3>" + gotData.bit + 
    " kbps</h3></div><div class='col3'><h3 class='lighter'> Listeners</h3><h3>"+ 
    gotData.listen + "</h3></div><div class='col3'><h3 class='lighter'>Search on</h3>" + 
    "<h3><a href='https://duckduckgo.com/?q="+ h2Song[1].trim()+ "+" + h2Song[0].trim() +
    "&t=ffcm&atb=v319-1&ia=web' target='_blank'><img src='https://duckduckgo.com/assets/logo_header.alt.v108.svg' width=32/></a>"+"</h3></div></div></div>";

    const divImg = "<div class='contain'>" + img_art + "</div>" + divTitle;
    //console.log("doc",divElm);
    const catInfo = divImg;
    myDiv.innerHTML = /*hTitle +*/ catInfo;

    //document.body.appendChild(myDiv);
    parentDiv.appendChild(myDiv);
}

async function get_url(my_url){
    const response = await fetch(my_url);
    const data = await response.json();
    const song = data[keys[0]];
    var artwork = data[keys[1]];
    const bit = data[keys[2]];
    const listen = data[keys[3]];

    if(artwork === awfulArt[1] || artwork === ""){
        artwork = "";
    }
    // Should not update if Sat/Sun @10-12
    // sleepy <- 3hrs
    //console.log(song,artwork);
    return {song,artwork,bit,listen};
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
    "<span class='closeBtn' onclick=\'closeNav('InfoNav')\'>&times;</span>" +
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
    /\myDiv.contentWindow.document.write(calljs);
    myDiv.contentWindow.document.write(catInfo);
    /\'<div><h2>'+gotData.song+'</h2></div>'
    /\console.log("Now: "+ gotData.song,gotData.artwork);
*/
