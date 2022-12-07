/*
 check this https://codes4education.com/create-custom-music-player-ui-design-in-html-css/
 https://cdn.freebiesupply.com/images/large/2x/music-player-web-ui-design-b48.jpg
 const stream_url = "https://rfcmedia3.streamguys1.com/thirdrock.mp3";
 alt-x logo: "https://static.wixstatic.com/media/143966_f7c1536f838a4adb890693dcdbf8423f~mv2.jpg/v1/fill/w_498,h_491,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/113fm_alt_x_1001.jpg" 
 Beethoven - moonlight
 Cigarettes After Sex - Apocalypse
 lovelytheband - these are my friends
 The Shins - So now what
 id3_info: https://player.181fm.com/streamdata.php?h=listen.181fm.com&p=7080&i=181-classical_128k.mp3&https=&f=ice&c=818600
 stream_url: https://listen.181fm.com/181-classical_128k.mp3?listenerId=esAdblock0185051&aw_0_1st.playerid=esPlayer&aw_0_1st.skey=1670382069
 history: https://player.181fm.com/external.php?http%3A%2F%2Flisten.181fm.com%3A8443%2Fice_history.php?h=listen.181fm.com&p=7080&i=181-90salt_128k.mp3&https=&f=ice&c=802268
 */

const stations = [
    {
        name: "181.fm Awesome 80's",
        logo: "assets/181fm_logo.png",
        stream_url: "https://listen.181fm.com/181-awesome80s_128k.mp3?aw_0_1st.playerid=esPlayer&aw_0_1st.skey=1606271347",
        id3_info: "https://player.181fm.com/streamdata.php?h=listen.181fm.com&p=7080&i=181-awesome80s_128k.mp3&https=&f=ice&c=186052",
        description: "181.FM Awesome 80's - The Best Choice for Radio. Your Lifestyle, Your Music.",
        xtra_info: ["80's best hits","English","128kbps","Yes"]
    },{
        name: "181.fm '90s Alternative",
        logo: "assets/181fm_logo.png",
        stream_url: "https://listen.181fm.com/181-90salt_128k.mp3?listenerId=esAdblock0185051&aw_0_1st.playerid=esPlayer&aw_0_1st.skey=1670381772",
        id3_info: "https://player.181fm.com/streamdata.php?h=listen.181fm.com&p=7080&i=181-90salt_128k.mp3&https=&f=ice&c=802257",
        description: "181.FM '90s Alternative - The Best Choice for Radio. Your Lifestyle, Your Music.",
        xtra_info: ["90's alternative","English","128kbps","Yes"]
    },{
        name: "113.fm Alt-Rock",
        logo: "assets/113fm_logo.jpg",
        stream_url: "https://113fm-atunwadigital.streamguys1.com/1001",
        id3_info: "",
        description: "The biggest Alternative hits from the '90s.  From guitar riffs to mellow beats, we've got you covered.",
        xtra_info: ["Alt-Rock","English","128kbps","Yes"]
    },{
        name:"Third Rock Radio",
        logo: "assets/thirdRock_logo.png",
        stream_url:"https://rfcmedia3.streamguys1.com/thirdrock-sgplayer.aac",
        id3_info: "https://feed.tunein.com/profiles/s151799/nowPlaying",
        description: "Third Rock Radio, produced and published by Houston-based RFC Media LLC under a Space Act Agreement with NASA.",
        xtra_info:["Alternative, Indie-Rock","English","196kbps","no"]
    }
];
const info_keys = ["Genre","Language","Bitrate","Ads"];
const svg_elm = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 36 36" width="36" height="36" stroke="#2e4054" fill="#bed2e0" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><circle class="paused" cx="18" cy="18" r="18"/><path fill="#2e4054" class="paused" d="M13 8 L13 28 26 18 Z" /></svg>';

display_info();

function display_info(){
    const mainDiv = document.getElementById("amia");
    
    for (let idx = 0; idx < stations.length; idx++) {
        /*var aux_text = "";
        if(idx == 0){
            aux_text = '&emsp;<a onclick="display_data()"><img src="assets/reload-svgrepo.svg" width="32"/></a>';
        }else{aux_text = "";}*/
        const newDiv = document.createElement("div");
        newDiv.setAttribute("class","padding_10");
        var texty = "<p><a onclick='init_player("+idx+")' title='click me'><img src='"+stations[idx].logo+"' width='128'/>";
        texty += "</a>"+/*aux_text+*/"</p><details><summary>"+stations[idx].description+"</summary>";
        var zoey_html = "<div>";
        for (let jdx = 0; jdx < info_keys.length; jdx++) {
            zoey_html += "<div class='half_col float_left'><h4>"+info_keys[jdx]+"</h4><p>"+stations[idx].xtra_info[jdx]+"</p></div>";
        }
        zoey_html += "</div></details>";
        newDiv.innerHTML = texty + zoey_html;
        mainDiv.appendChild(newDiv);
    }    
}

function no_artwork(idx){
    const gotDiv = document.getElementById("artwork");
    //"<img src='assets/CD_icon.svg' width='310'/>"
    gotDiv.innerHTML = "<div class='bkg_cd_icon' id='coverCD'><img src='" + stations[idx].logo +
    "' width='260'/></div>";
}

var audioConnect; //= new Audio();
var tina_timer;

//window.addEventListener("load",startPlay);
function init_player(stream_idx){
    /*bug: user must click 2 times the logo to start stream */
    console.log("gotStream",stream_idx);
    document.title = stations[stream_idx].name;
    const stat_title = document.getElementById("title_stat");
    stat_title.innerText = stations[stream_idx].name;

    const span_name = document.getElementById("nowLabel");
    span_name.innerHTML = "<h2 class='col90 float_left' id='mainTitle'>Now Playing</h2>"+
    "<h2 id='list-icon' onclick='openNav()' class='col10 float_left closeBtn'>"+
    "<img src='assets/list-alt.svg' width='32'/></h2>";
    switch (stream_idx) {
        case 0:
            startPlay(0);
            display_data(0);
            break;
        case 1:
            startPlay(1);
            display_data(1);
            break;
        case 2:
            startPlay(2);
            no_artwork(2);            
            break;
        default:
            startPlay(3);
            no_artwork(3);
            break;
    }
}

function startPlay(idx=0){
    //playStatus = true;
    const svgPlay = document.getElementById("i-play");    
    const gifImg = document.getElementById("gifElm");
    const getTimer = document.getElementById("timer");
    
    var mmss = "";
    const circleImg = '<circle class="paused" stroke-width="4" cx="30" cy="30" r="26"/>';
    const playImg  = '<path class="paused" stroke-linecap="round" stroke-linejoin="round" d="M23 40 L23 20 43 30Z"/>'
    const stopImg = '<path d="M20 40 L20 20 40 20 40 40 Z" />';
    //const pauseImg = '<path d="M20 40 L20 20 25 20 25 40Z M35 40 L35 20 40 20 40 40Z" />';
    
    svgPlay.addEventListener("click",playPause);
    document.addEventListener("keydown",function(event){
        /* adding key press events to player */
        if(event.key === "d" || event.key === "D"){
            /* play pressed */
            playPause();
        }
    });
    //const svgStop = document.getElementById("i-stop");
    //svgStop.addEventListener("click",stopPlay);
    audioConnect = new Audio();
    function playPause(){
        if(audioConnect.paused){
            audioConnect.src = stations[idx].stream_url;//stream_url[idx];
            audioConnect.play();//if not success -> then timer should not start
            audioConnect.loop = true;
            mmss = getTimer.innerText; // mm:ss
            play_elapsed(parseInt(mmss.substring(0,2)),parseInt(mmss.substring(3,5))); //counter starts or restarts
            svgPlay.classList.remove("paused");
            svgPlay.classList.add("play_on");
            svgPlay.innerHTML = circleImg + stopImg;
            //svgStop.style.stroke = "#bed2e0";
            //svgStop.style.fill = "#bed2e0";
            gifImg.classList.remove("no-audio");
        }else{
            audioConnect.pause();
            audioConnect.loop = false;
            gifImg.classList.add("no-audio");
            svgPlay.classList.remove("play_on");
            svgPlay.classList.add("paused");
            clearInterval(tina_timer);
            svgPlay.innerHTML = circleImg + playImg;
            stop_timer();
        }
    }
    function stopPlay(){
        /* does not pause/stop stream */
        audioConnect.pause();
        audioConnect.loop = false;
        audioConnect.load(stream_url[idx]);    
        svgPlay.classList.remove("play_on");
        svgPlay.classList.add("paused");
        svgPlay.innerHTML = circleImg + playImg;
        svgStop.style.stroke = "#cc274c";
        svgStop.style.fill = "#cc274c";
        gifImg.classList.add("no-audio");
        stop_timer();
    }
}

function volume_mute(vol_stat){
    const volInput = document.getElementById("vol_input");
    const volIcon = document.getElementById("vol_icon");

    if(vol_stat === 0){
        if(volInput.value != "0"){
            // console.log("volume on");
            // volInput.classList.remove("volume-none");
            // volInput.classList.add("volume-vertical");
            volIcon.src = "assets/volume-repo-off.svg";
            audioConnect.volume = "0";
            volInput.onchange = "0";
            volInput.value = "0";
        }else{
            // volInput.classList.remove("volume-vertical");
            // volInput.classList.add("volume-none");
            volIcon.src = "assets/volume-svgrepo.svg";
            volInput.onchange = "0.8";
            volInput.value = "80";
            if(audioConnect !== null){
                audioConnect.volume = "0.8";
            }            
        }
    }
}

function play_elapsed(min=0,sec=0){
    //var texty = "";
    var second,minute;

    tina_timer = setInterval(function(){
        second = (sec<10)?"0"+String(sec):sec;
        minute = (min<10)?"0"+String(min):min;
        
        document.getElementById("timer").innerText = minute + ":" + second;
        sec++;
        if(sec>59){
            min++;
            sec=0;
        }
        /* if listen hours
        if(min>59 && sec>59){hours++;min=0;sec=0;}*/
        //timer case: if(sec < 0){clearInterval(tina_timer);}
    },1000);
}

function stop_timer(){
    /* pauses timer */
    clearInterval(tina_timer);
    document.getElementById("timer").innerText = "00:00";
}

async function display_data(idx){
    const timeNow = new Date();
    //var gotSong = await get_id3();
    var gotData = await get_artwork(idx);//await get_id3();
    //console.log("gotThis",gotData);
    const coverDiv = document.getElementById("artwork");
    //const coverDiv = document.createElement("div");
    coverDiv.innerHTML = "<div class='bkg_cd_icon' id='coverCD'><img src='" + gotData.artwork+"' width='260'/></div>"+
    "<div class='smoke-bkg padding_15'><h3 class='headLabel'>" + gotData.nowPlaying.song+
    "</h3><h3>"+ gotData.nowPlaying.artist + "</h3><p>" + gotData.album + 
    "</p><p class='col_50 float_left'>&#x231A; " + zeroPad(timeNow.getHours()) + ":"+ 
    zeroPad(timeNow.getMinutes()) + 
    "</p><a title='Reload id3-tag' onclick='display_data("+ idx +
    ")' class='align-right'><img src='assets/reload-svgrepo.svg' width='32'/></a></div>";
    //this_img.appendChild(coverDiv);
}

async function get_id3(idx){
    const response = await fetch(stations[idx].id3_info);
    const data = await response.json();
    const artist = data["artist"];
    const song = data["title"];
    //const bit = data["bitrate"];
    return {artist,song};
}

async function get_artwork(jdx){
    const nowPlaying = await get_id3(jdx);
    document.title = nowPlaying.artist + " - "+ nowPlaying.song;
    //const song_artist = now_song.split("-");
    const this_url = "https://ws.audioscrobbler.com/2.0/?method=track.getInfo&api_key=16fe44aaa6f35d5755a08eb62f371994&artist="+
    nowPlaying.artist.trim().replace(/\s+/g,"%20") + "&track=" + 
    nowPlaying.song.trim().replace(/\s+/g,"%20") + "&format=json";
    // console.log("got url",this_url);
    try {
        const response = await fetch(this_url)
        const data = await response.json();
        var album = "", artwork = "",duration="";
        if(data["track"]["album"] === undefined || data["track"]["album"] === ""){
            //stations[0].logo;
            artwork = "https://lastfm.freetls.fastly.net/i/u/300x300/62b1b1423e0cfb3d055cca4206667080.png";
            album = "";
        }else{
            artwork = data["track"]["album"]["image"][3]["#text"];
            album = data["track"]["album"]["title"],duration="";
            //duration = data["track"]["duration"];//ms
        }
        // console.log("artwork",artwork,"album",album);
        return {nowPlaying, album, artwork};
    } catch (error) {
        // console.log("got an error",error);
        return {nowPlaying};
    }    
}

function zeroPad(timeElm){
    return (parseInt(timeElm,10) < 10 ? '0' : '') + timeElm;
}

/* open and close Info modal */
function openNav(){
    //document.getElementById("nowLabel").style.display = "none";
    const closeBtn = document.getElementById("list-icon");
    closeBtn.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="32" height="32" fill="#2e4054" stroke="#bed2e0" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><path d="M2 30 L30 2 M30 30 L2 2"/></svg>';
    //closeBtn.style.margin = "0";
    //closeBtn.setAttribute("class","col10 float_left closeBtn");
    //closeBtn.setAttribute("href","javascript:void(0)");
    closeBtn.setAttribute("onclick","closeNav()");
    document.getElementById("mainTitle").innerText = "Favorite Stations";
    document.getElementById("amia").style.display = "block";
    document.getElementById("artwork").style.display = "none";
    //document.getElementById("nowPlaying").style.display = "none";
    //document.getElementById("playList").style.display = "block";
    document.getElementById("player").style.display = "none";
    document.getElementById("station_info").style.display = "none";
    document.body.style.overflow = "hidden";    
}
function closeNav(){
    if(navigator.userAgent.match(/(iPhone|iPad|Android|IEMobile)/)){
        document.getElementById('amia').style.display = "none";
    }else{
        document.getElementById('amia').style.display = "block";
    }
    const listBtn = document.getElementById("list-icon");
    listBtn.setAttribute("onclick","openNav()");
    listBtn.innerHTML = "<img src='assets/list-alt.svg' width='32'/>"
    document.getElementById("mainTitle").innerText = "Now Playing";
    document.getElementById("artwork").style.display = "block";
    //document.getElementById("nowPlaying").style.display = "block";
    //document.getElementById("mainTitle").style.display = "block";
    document.getElementById("amia").style.display = "none";
    document.getElementById("player").style.display = "block";
    document.getElementById("station_info").style.display = "block";
    document.body.style.overflow = "auto";
}