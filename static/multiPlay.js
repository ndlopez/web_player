/*
 check this https://codes4education.com/create-custom-music-player-ui-design-in-html-css/
 https://cdn.freebiesupply.com/images/large/2x/music-player-web-ui-design-b48.jpg
 const stream_url = "https://rfcmedia3.streamguys1.com/thirdrock.mp3";
 alt-x logo: "https://static.wixstatic.com/media/143966_f7c1536f838a4adb890693dcdbf8423f~mv2.jpg/v1/fill/w_498,h_491,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/113fm_alt_x_1001.jpg" 
 Beethoven - moonlight
 Cigarettes After Sex - Apocalypse
 lovelytheband - these are my friends
 The Shins - So now what
 Sneaker Pimps - 6 Underground

 id3_info: https://player.181fm.com/streamdata.php?h=listen.181fm.com&p=7080&i=181-classical_128k.mp3&https=&f=ice&c=818600
 stream_url: https://listen.181fm.com/181-classical_128k.mp3?listenerId=esAdblock0185051&aw_0_1st.playerid=esPlayer&aw_0_1st.skey=1670382069
 history: https://player.181fm.com/external.php?http%3A%2F%2Flisten.181fm.com%3A8443%2Fice_history.php?h=listen.181fm.com&p=7080&i=181-90salt_128k.mp3&https=&f=ice&c=802268
 80s: "assets/181fm_logo.png"
*/

const stations = [
    {
        name: "181.fm Awesome 80's",
        logo: "https://lastfm.freetls.fastly.net/i/u/300x300/accb1e554ea0afbac1fcc02a7413ed87.png",
        stream_url: "https://listen.181fm.com/181-awesome80s_128k.mp3?aw_0_1st.playerid=esPlayer&aw_0_1st.skey=1606271347",
        id3_info: "https://player.181fm.com/streamdata.php?h=listen.181fm.com&p=7080&i=181-awesome80s_128k.mp3&https=&f=ice&c=186052",
        description: "The Best Choice for Radio. Your Lifestyle, Your Music.",
        xtra_info: ["80's best hits","English","128kbps","Yes"]
    },{
        name: "181.fm '90s Alternative",
        logo: "assets/90s_alt.jpg",
        stream_url: "https://listen.181fm.com/181-90salt_128k.mp3?listenerId=esAdblock0185051&aw_0_1st.playerid=esPlayer&aw_0_1st.skey=1670381772",
        id3_info: "https://player.181fm.com/streamdata.php?h=listen.181fm.com&p=7080&i=181-90salt_128k.mp3&https=&f=ice&c=802257",
        description: "Listen to the best hits of the 1990s",
        xtra_info: ["90's alternative","English","128kbps","Yes"]
    },{
        name: "113.fm Alternative-Rock",
        logo: "assets/113fm_logo.jpg",
        stream_url: "https://113fm-atunwadigital.streamguys1.com/1001",
        id3_info: "",
        description: "The biggest Alternative hits from the '90s. From guitar riffs to mellow beats, we've got you covered.",
        xtra_info: ["Alt-Rock","English","128kbps","Yes"]
    },{
        name:"Third Rock Radio",
        logo: "assets/thirdRock_logo.png",
        stream_url:"https://rfcmedia3.streamguys1.com/thirdrock-sgplayer.aac",
        id3_info: "https://feed.tunein.com/profiles/s151799/nowPlaying",
        description: "Explore and discover new worlds of music with NASA's 3rd Rock Radio.",
        xtra_info:["Alternative, Indie-Rock","English","196kbps","no"]
    }
];
const info_keys = ["Genre","Language","Bitrate","Ads"];
const svg_elm = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 36 36" width="36" height="36" stroke="#2e4054" fill="#bed2e0" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><circle class="paused" cx="18" cy="18" r="18"/><path fill="#2e4054" class="paused" d="M13 8 L13 28 26 18 Z" /></svg>';
const svg_btn = '<svg class="col_half float_left" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 60 60" width="60" height="60" stroke="#2e4054" fill="#bed2e0">'
const circleImg = '<circle class="paused no_mobil" stroke-width="4" cx="30" cy="30" r="26"/>';
const circle_img = '<circle class="paused" stroke-width="4" cx="30" cy="30" r="26"/>';
const playImg  = '<path class="paused" stroke-linecap="round" stroke-linejoin="round" d="M23 40 L23 20 43 30Z"/>'
const stopImg = '<path d="M20 40 L20 20 40 20 40 40 Z" />';
const pauseImg = '<path d="M20 40 L20 20 25 20 25 40Z M35 40 L35 20 40 20 40 40Z" />';

display_all_stations();

function display_info(){
    const mainDiv = document.getElementById("amia");
    const divTitle = document.createElement("h2");
    divTitle.innerText = "Favorite stations";
    mainDiv.appendChild(divTitle);
    
    for (let idx = 0; idx < stations.length; idx++) {
        /*var aux_text = "";
        if(idx == 0){
            aux_text = '&emsp;<a onclick="display_data()"><img src="assets/reload-svgrepo.svg" width="32"/></a>';
        }else{aux_text = "";}*/
        const newDiv = document.createElement("div");
        newDiv.setAttribute("class","padding_10");
        var texty = "<details><summary>"+stations[idx].name+"&emsp;<a onclick='init_player(" + 
        idx + ")' title='click me'><img src='"+stations[idx].logo+"' width='128'/>" + 
        "</a></summary><p>" + stations[idx].description + "</p>";
        var zoey_html = "<div>";
        for (let jdx = 0; jdx < info_keys.length; jdx++) {
            zoey_html += "<div class='half_col float_left'><h4>"+info_keys[jdx]+"</h4><p>"+stations[idx].xtra_info[jdx]+"</p></div>";
        }
        zoey_html += "</div></details>";
        newDiv.innerHTML = texty + zoey_html;
        mainDiv.appendChild(newDiv);
    }    
}

function display_all_stations(){
    const mainDiv = document.getElementById("amia");
    
    for(let idx = 0; idx < stations.length; idx++){
        const rowDiv = document.createElement("div");
        rowDiv.setAttribute("class","row");
        rowDiv.setAttribute("id","station_"+idx);
        rowDiv.innerHTML = "<div class='colImg float_left'><img onclick='init_player(" + idx + 
        ")' src='" + stations[idx].logo + "' width='84' height='84'/></div>" +
        "<div class='colArtist float_left'><span>" + stations[idx].name + "</span><span>" + stations[idx].description + 
        "</span></div><div class='colTime float_left'><span id='timer_" + idx + "'>00:00</span></div>";
        mainDiv.appendChild(rowDiv);
    }
}

var audioConnect; //= new Audio();
var tina_timer;

//window.addEventListener("load",startPlay);
function init_player(stream_idx){
    /*bug: user must click 2 times the logo to start stream */
    console.log("gotStream",stream_idx);
    document.title = stations[stream_idx].name;

    // document.getElementById("title_stat").innerText = stations[stream_idx].name + 
    stations[stream_idx].description;

    /*const span_name = document.getElementById("nowLabel");
    span_name.innerHTML = "<h2 class='col90 float_left' id='mainTitle'>Now playing</h2>" + 
    "<h2 id='list-icon' class='col10 float_left closeBtn'></h2>";*/

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
    /*if(navigator.userAgent.match(/(iPhone|iPad|Android|IEMobile)/)){
        closeNav();
    }*/
}

function startPlay(idx=0){
    const svgPlay = document.getElementById("play");
    const float_btn = document.getElementById("play_btn")
    const gifImg = document.getElementById("gifElm");
    // const getTimer = document.getElementById("timer");
    var mmss = "";
    var get_sub_timer = "";
    for(let jdx=0;jdx < stations.length; jdx++){
        const get_row = document.getElementById("station_"+jdx);
        get_sub_timer = document.getElementById("timer_"+jdx);
        if(idx == jdx){
            get_row.classList.add("smoke-bkg");
            get_sub_timer.classList.add("headLabel");
        }else{
            get_row.classList.remove("smoke-bkg");
            get_sub_timer.classList.remove("headLabel");
        }
    }
    
    svgPlay.addEventListener("click",playStop);
    float_btn.addEventListener("click",playStop);

    document.addEventListener("keydown",function(event){
        if(event.key === "d" || event.key === "D"){
            /* adding key press events to player: play pressed */
            playStop();
        }
        if(event.key === "r" || event.key === "R"){
            display_data(idx);
        }
    });
    
    //const svgStop = document.getElementById("i-stop");
    //svgStop.addEventListener("click",stopPlay);
    audioConnect = new Audio();
    function playStop(){
        if(audioConnect.paused){
            audioConnect.src = stations[idx].stream_url;
            audioConnect.play();//if not success -> then timer should not start
            audioConnect.loop = true;
            // mmss = getTimer.innerText; // mm:ss
            mmss = get_sub_timer.innerText; // mm:ss
            play_elapsed(parseInt(mmss.substring(0,2)),parseInt(mmss.substring(3,5)),idx); //counter starts or restarts
            svgPlay.classList.remove("paused");
            svgPlay.classList.add("play_on");
            svgPlay.innerHTML = circleImg + pauseImg;

            float_btn.classList.remove("paused");
            float_btn.classList.add("play_on");
            float_btn.innerHTML = circle_img + pauseImg;
            gifImg.classList.remove("no-audio");
        }else{
            audioConnect.pause();
            audioConnect.loop = false;
            gifImg.classList.add("no-audio");
            clearInterval(tina_timer);
            svgPlay.classList.remove("play_on");
            svgPlay.classList.add("paused");
            svgPlay.innerHTML = circleImg + playImg;
            float_btn.classList.remove("play_on");
            float_btn.classList.add("paused");
            float_btn.innerHTML = circle_img + playImg;
            stop_timer(idx);
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

function play_elapsed(min=0,sec=0,jdx){
    var second,minute;

    tina_timer = setInterval(function(){
        second = (sec<10)?"0"+String(sec):sec;
        minute = (min<10)?"0"+String(min):min;
        
        document.getElementById("timer_"+jdx).innerText = minute + ":" + second;
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

function stop_timer(jdx){
    /* pauses timer */
    clearInterval(tina_timer);
    document.getElementById("timer_"+jdx).innerText = "00:00";
}

function no_artwork(idx){
    const gotDiv = document.getElementById("artwork");
    gotDiv.innerHTML = "<div class='bkg_cd_icon' id='coverCD'><img src='" + stations[idx].logo +
    "' width='260'/></div>";
    document.getElementById("cover_art").innerHTML = "<img src='" + stations[idx].logo + "' width='60' height='60'/>";
    const divTitle = document.getElementById("cover_title");
    divTitle.innerHTML= "<span class='align-left'>Now Playing</span><span class='align-left'>" + 
    stations[idx].name + "</span>";
    //divTitle.classList.add("moving-text");
}

async function display_data(idx){
    const timeNow = new Date();
    var gotData = await get_artwork(idx);
    var this_artwork = gotData.artwork;
    if(gotData.artwork === "assets/cd_case.svg"){
        this_artwork = "assets/181fm_logo.png";
    }
    const coverDiv = document.getElementById("artwork");
    //const coverDiv = document.createElement("div"); <h2 id='list-icon' class='closeBtn'></h2>
    coverDiv.innerHTML = "<div class='bkg_cd_icon' id='coverCD'><img src='" + 
    this_artwork + "' width='260'/></div>"+
    "<div class='smoke-bkg padding_15 small'><h2 class='headLabel'>" + gotData.nowPlaying.song+
    "</h2><h2>"+ gotData.nowPlaying.artist + "</h2><h2 class='lighter'>" + gotData.album + 
    "</h2><h2 class='col_half float_left lighter'>&#x231A; " + zeroPad(timeNow.getHours()) + ":"+ 
    zeroPad(timeNow.getMinutes()) + 
    "</h2><a title='Reload id3-tag' onclick='display_data("+ idx +
    ")' class='col_half float_left align-right'><img src='assets/reload-svgrepo.svg' width='36'/></a>" +
    "<a title='Click for more info' href='https://duckduckgo.com/?q=" + 
    gotData.nowPlaying.artist.trim().replace(/\s+/g,"%20").replace(/'/g,"") + "+" + 
    gotData.nowPlaying.song.trim().replace(/\s+/g,"%20").replace(/'/g,"") +
    "&t=ffcm&atb=v319-1&ia=web' target='_blank'>Click for more info: &emsp; <img src='assets/duck.svg' width='36'/></a></div>";

    const cover_art = document.getElementById("cover_art");
    cover_art.innerHTML = "<img src='" + stations[idx].logo + "' width='60' height='60'/>";
    document.getElementById("cover_title").innerHTML = "<span class='align-left'>" + 
    "Now Playing</span><span class='align-left'>" + stations[idx].name + "</span>";

    const this_row = document.getElementById("station_"+idx);
    this_row.innerHTML = "<div class='colImg float_left'><img onclick='init_player(" + idx + 
    ")' src='" + gotData.artwork + "' width='84'/></div>" +
    "<div class='colArtist float_left'><span class='headLabel'>" + gotData.nowPlaying.song + 
    "</span><span>" + gotData.nowPlaying.artist + 
    "</span></div><div class='colTime float_left'><span id='timer_" + idx + 
    "' class='headLabel'>00:00</span></div>";
    //document.getElementById("cover_title").classList.remove("moving-text");
}

async function get_id3(idx){
    const response = await fetch(stations[idx].id3_info);
    const data = await response.json();
    var myReg = RegExp("[(][^)]*[)]");//find parentheses
    const artist = data["artist"].replace(/&/g,"and");
    const song = data["title"].replace(myReg,"").replace(/&/g,"and");
    console.log("got:",data["title"],song);
    //const bit = data["bitrate"];
    return {artist,song};
}

async function get_artwork(jdx){
    /*Fetch artwork from another source, must get first id3 */
    const nowPlaying = await get_id3(jdx);
    document.title = nowPlaying.artist + " - "+ nowPlaying.song;
    const this_url = "https://ws.audioscrobbler.com/2.0/?method=track.getInfo&api_key=16fe44aaa6f35d5755a08eb62f371994&artist="+
    nowPlaying.artist.trim().replace(/\s+/g,"%20") + "&track=" + 
    nowPlaying.song.trim().replace(/\s+/g,"%20") + "&format=json";
    //const default_art = ;//["assets/181fm_logo.png","assets/181fm_logo.png"];
    var album = "", artwork = "assets/cd_case.svg", summ = "";
    // console.log("got url",this_url);duration="",
    try {
        const response = await fetch(this_url)
        const data = await response.json();
        
        if(typeof data["track"]["album"] !== 'undefined'){
            artwork = data["track"]["album"]["image"][3]["#text"];
            album = data["track"]["album"]["title"];
            /*summ = data["track"]["wiki"]["summary"];
            if(summ === undefined){summ = "";}*/
        }else{
            artwork = "assets/cd_case.svg";
            album = "";
        }
        // console.log("artwork",artwork,"album",album);
        return {nowPlaying, album, artwork};
    } catch (error) {
        console.log("got an error",error);
        return {nowPlaying, album, artwork};
    }    
}

function zeroPad(timeElm){
    return (parseInt(timeElm,10) < 10 ? '0' : '') + timeElm;
}

/* open and close Info modal */
function openNav(){
    // document.getElementById("burger").style.display = "none";
    // document.getElementById("nowLabel").style.display = "block";
    const closeBtn = document.getElementById("list-icon");
    closeBtn.style.display = "block";
    closeBtn.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="32" height="32" fill="#2e4054" stroke="#bed2e0" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><path d="M2 30 L30 2 M30 30 L2 2"/></svg>';
    //closeBtn.style.margin = "0";
    //closeBtn.setAttribute("class","col10 float_left closeBtn");
    //closeBtn.setAttribute("href","javascript:void(0)");
    closeBtn.setAttribute("onclick","closeNav()");
    document.getElementById("play_btn").style.display = "block";
    document.getElementById("amia").style.display = "none";
    document.getElementById("artwork").style.display = "block";
    document.getElementById("player2").style.display = "none";
    document.getElementById("station_info").style.display = "none";
    document.body.style.overflow = "hidden";    
}
function closeNav(){
    /*if(navigator.userAgent.match(/(iPhone|iPad|Android|IEMobile)/)){
        document.getElementById('amia').style.display = "none";
    }else{
        document.getElementById('amia').style.display = "block";
    }*/
    // document.getElementById("nowLabel").style.display = "none";
    // document.getElementById("burger").style.display = "block"
    document.getElementById("play_btn").style.display = "none";
    document.getElementById("list-icon").style.display = "none";
    document.getElementById("artwork").style.display = "none";
    document.getElementById("player2").style.display = "block";
    document.getElementById("amia").style.display = "block";
    document.getElementById("station_info").style.display = "block";
    document.body.style.overflow = "auto";
}