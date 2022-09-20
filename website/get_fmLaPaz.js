//Should fetch data from fm La Paz
const thisURL = "https://stream.consultoradas.com/cp/get_info.php?p=8042";

// Week:[0:Sun, 1:Mon, 2:Tue, 3:Wed, 4:Thu, 5:Fri, 6:Sat]
const weekly = [
    {name:"PopArt",day:1,time:16},
    {name:"PopArt",day:3,time:9},
    {name:"PopArt",day:4,time:9},
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
    {name:"Rock Clasico",day:5,time:10},
];

const titleErr = "Radio Online  -  LAPAZ.FM"; //PROMO PUBLICIDAD LPFM - , Diferente Como Tu Lapaz.fm  -  IVAN 5 *
let origTitle = document.title;
const key = "title";
const upTime = 180010; //ms

let songs = [];
let artImg = [];
let timeStamp = [];
let tmpData;
let myList = [];
let upCount = 0;
//document.addEventListener("onload",display_data());
display_data();
//document.addEventListener("load",buildList());
function sleepy(ms){
    console.log("sleeping "+ms);
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
    
    tmpData = {"time": timeStamp[upCount],"song":songs[upCount],"artwork":artImg[upCount]};
    myList.push(tmpData);
    //console.log(upCount,myList);
    export_to_file(myList);
    upCount++;

},upTime);


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
    if(gotData.song == titleErr){
        await sleepy(3000);
        gotData = await get_url(thisURL);
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
    var song = data[key];
    if(song === "www.lapaz.fm - "){
        song = "Title not found";
    }
    if(song === "Radio Online - "){
        song = "Please reload page.";
    }
    const artwork = data['art'];
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