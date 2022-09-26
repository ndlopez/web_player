//Should fetch data from fm La Paz
const thisURL = "https://stream.consultoradas.com/cp/get_info.php?p=8042";

// Week:[0:Sun, 1:Mon, 2:Tue, 3:Wed, 4:Thu, 5:Fri, 6:Sat]
const weekly_9 = [
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
    {name:"UltraLight",day:1,time:12},
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
const weekly_4 = [
    {name:"PopArt",day:1,time:3},
    {name:"PopArt",day:2,time:3},
    {name:"PopArt",day:2,time:21},
    {name:"PopArt",day:3,time:20},
    {name:"En Concierto",day:2,time:23},
    {name:"En Concierto",day:4,time:3},
    {name:"UltraLight",day:0,time:3},
    {name:"UltraLight",day:0,time:20},
    {name:"UltraLight",day:0,time:21},
    {name:"UltraLight",day:0,time:22},
    {name:"UltraLight",day:0,time:23},
    {name:"UltraLight",day:1,time:21},
    {name:"UltraLight",day:1,time:22},
    {name:"UltraLight",day:1,time:23},
    {name:"UltraLight",day:4,time:2},
    {name:"Rock Clasico",day:3,time:3},
    {name:"Rock Clasico",day:4,time:21},
    {name:"DiscoStu",day:5,time:21},
    {name:"DiscoStu",day:5,time:22},
    {name:"DiscoStu",day:5,time:23},
    {name:"DiscoStu",day:6,time:21},
    {name:"DiscoStu",day:6,time:22},
    {name:"DiscoStu",day:6,time:23},
];

const titleErr = ["Radio Online  -  LAPAZ.FM","PROMO PUBLICIDAD LPFM - ","Diferente Como Tu Lapaz.fm  -  IVAN 5 *","DISCO ESTUDIO AVANCE DOMINGOS"];
const discostu = "DISCO ESTUDIO PROGRAMA VIERNES - ";

let origTitle = document.title;
const keys = ["title","art"];
const upTime = 10000;//190000; //ms
const errLapse = 5000; //ms

let songs = [];
let artImg = [];
let timeStamp = [];
let tmpData;
let myList = [];
let upCount = 0;

display_data();

window.onscroll = function() {scrollFunction()};

var pxx=600; //artwork size
//scrolldelay = setTimeout('scrollFunction()',500); // scrolls every 100 milliseconds
function scrollFunction() {
    if (document.body.scrollTop > pxx || document.documentElement.scrollTop > pxx) {
        document.getElementById("topBtn").style.display = "block";
        document.getElementById("currSong").style.display = "block";
    } else {
        document.getElementById("topBtn").style.display = "none";
        document.getElementById("currSong").style.display = "none";
    }
}
//user clicks on myBtn, scroll to top
function topFunction() {
    //document.body.scrollTop = 0;
    //document.body.animate({scrollTop:0},1500);
    //document.documentElement.scrollTop = 0;
    window.scroll({ top: 0, left: 0, behavior: 'smooth' });
}

function sleepy(ms){
    return new Promise(resolve =>setTimeout(resolve,ms));
}

function get_sched(tag,heure,time_lag){
    var myTitle = "LAPAZ.fm";
    var gotObj="";
    if(time_lag == 240){
        /* UTC-4 */
        gotObj = weekly_4;
    }else{gotObj = weekly_9;}
    for (let item in gotObj){
        if(gotObj[item].day === tag && gotObj[item].time === heure){
            myTitle = gotObj[item].name;
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
    linkElm.setAttribute('target','_blank');
    //linkElm.click();//downloads a file every update
}

setInterval(async function buildList(){
    /* Wait 'til display_data is finished, then get info from h2 elems */
    await display_data();

    const gotDiv = document.getElementById('nowPlaying');
    const song = gotDiv.getElementsByTagName("h2");
    //console.log(song[2].innerText);
    //const playTime = song[2].innerHTML;//.split(" ");
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
    const timeNow = new Date();
    const timeOffset = timeNow.getTimezoneOffset(); //if UTC + -> return -offset
    //console.log(timeOffset,typeof(timeOffset));//
    let day = timeNow.getDay();
    let hh = timeNow.getHours();
    let mm = timeNow.getMinutes();
    var auxText="";

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
        await sleepy(errLapse);
        auxText = "Loading... please wait";
        gotData = await get_url(thisURL);
        console.log(auxText,gotData.song);
    }
    document.title = gotData.song;
    const img_art = "<img src='" + gotData.artwork + "' alt='Now Playing' width=350>";
    
    const headTitle = document.getElementById("nowLabel");
    headTitle.innerHTML = "<h2>Now Playing: " + get_sched(day,hh,timeOffset) + "</h2><h3 id='currSong'>"+
    gotData.song+"</h3>";

    var myDiv = document.getElementById("nowPlaying");
    myDiv.style.width = "100%";
    myDiv.style.height = "450px";
    
    const h2Time = "<h2 class='opaque lighter'><small>"+ hh + ":" + mm +"</small></h2>"; 
    //document.createElement("h2");
    //const hTitle = "<h1> Now Playing: " + get_sched(day,hh) + "</h1>";
    const h2Song = gotData.song.split("-");
    const divTitle = "<div class='bottomText'>" +
    "<h2>"+ h2Song[0] + "</h2><h2 class='opaque'><small>" + h2Song[1]+ "</small></h2>"+h2Time+"</div>";
    const divImg = "<div class='contain'>" + img_art + divTitle + "</div>";

    //console.log("doc",divElm);
    const catInfo = divImg;
    myDiv.innerHTML = /*hTitle +*/ catInfo;

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