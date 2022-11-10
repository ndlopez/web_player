// check this https://codes4education.com/create-custom-music-player-ui-design-in-html-css/
// https://cdn.freebiesupply.com/images/large/2x/music-player-web-ui-design-b48.jpg
// const stream_url = "https://rfcmedia3.streamguys1.com/thirdrock.mp3";
// alt-x logo: "https://static.wixstatic.com/media/143966_f7c1536f838a4adb890693dcdbf8423f~mv2.jpg/v1/fill/w_498,h_491,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/113fm_alt_x_1001.jpg" 
// Beethoven - moonlight
// Cigarettes After Sex - Apocalypse
// lovelytheband - these are my friends

const stations = [
    {
        name: "181.fm Awesome 80's",
        logo: "https://player.181fm.com/configs/images/181fm.png",
        stream_url: "https://listen.181fm.com/181-awesome80s_128k.mp3?aw_0_1st.playerid=esPlayer&aw_0_1st.skey=1606271347",
        id3_info: "https://player.181fm.com/streamdata.php?h=listen.181fm.com&p=7080&i=181-awesome80s_128k.mp3&https=&f=ice&c=186052",
        description: "181.FM Awesome 80's - The Best Choice for Radio. Your Lifestyle, Your Music.",
        xtra_info: ["80's best hits","English","128kbps","Yes"]
    },{
        name:"Third Rock Radio",
        logo: "https://thirdrockradio.net/wp-content/uploads/2018/02/logo_transparent_small.png",
        stream_url:"https://rfcmedia3.streamguys1.com/thirdrock-sgplayer.aac",
        id3_info: "https://feed.tunein.com/profiles/s151799/nowPlaying",
        description: "Third Rock Radio, produced and published by Houston-based RFC Media LLC under a Space Act Agreement with NASA.",
        xtra_info:["Alternative, Indie-Rock","English","196kbps","no"]
    },{
        name: "113.fm Alt-Rock",
        logo: "https://static.wixstatic.com/media/143966_9e7dd404f2fd4df1a0c48e335c993bad~mv2.jpg/v1/crop/x_97,y_166,w_328,h_164/fill/w_161,h_93,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/113fm_logo_blk_sml_transparent.jpg",
        stream_url: "https://113fm-atunwadigital.streamguys1.com/1001",
        id3_info: "",
        description: "The biggest Alternative hits from the '90s.  From guitar riffs to mellow beats, we've got you covered.",
        xtra_info: ["Alternative Rock","English","128kbps","Yes"]
    }
];
const info_keys = ["Genre","Language","Bitrate","Ads"];
const svg_elm = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 36 36" width="36" height="36" stroke="#2e4054" fill="#bed2e0" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><circle class="paused" cx="18" cy="18" r="18"/><path fill="#2e4054" class="paused" d="M13 8 L13 28 26 18 Z" /></svg>';

display_info();

function display_info(){
    const mainDiv = document.getElementById("amia");
    
    for (let idx = 0; idx < stations.length; idx++) {
        var aux_text = "";
        if(idx == 0){
            aux_text = '&emsp;<a onclick="display_data()"><img src="assets/reload-svgrepo.svg" width="32"/></a>';
        }else{aux_text = "";}
        const newDiv = document.createElement("div");
        newDiv.setAttribute("class","padding_10");
        var texty = "<p><a onclick='init_player("+idx+")' title='click me'><img src='"+stations[idx].logo+"' width='128'/>";
        texty += "</a>"+aux_text+"</p><details><summary>"+stations[idx].description+"</summary>";
        var zoey_html = "<div>";
        for (let jdx = 0; jdx < info_keys.length; jdx++) {
            zoey_html += "<div class='half_col float_left'><h4>"+info_keys[jdx]+"</h4><p>"+stations[idx].xtra_info[jdx]+"</p></div>";
        }
        zoey_html += "</div></details>";
        newDiv.innerHTML = texty + zoey_html;
        mainDiv.appendChild(newDiv);
    }    
}

function no_artwork(){
    const gotDiv = document.getElementById("artwork");
    gotDiv.innerHTML = "<img src='assets/CD_icon.svg' width='310'/>"
}
var audioConnect; //= new Audio();

var tina_timer;

//window.addEventListener("load",startPlay);
function init_player(stream_idx){
    console.log("gotStream",stream_idx);
    document.title = stations[stream_idx].name;

    const span_name = document.getElementById("stat_name");
    span_name.innerHTML = "<h3>Now Playing: "+stations[stream_idx].name+"</h3>";
    switch (stream_idx) {
        case 0:
            startPlay(0);
            break;
        case 1:
            startPlay(1);
            no_artwork();
            break;
        case 2:
            startPlay(2);
            no_artwork();            
            break;
        default:
            break;
    }
}

/*function reloadMe(){display_data();}*/

function startPlay(idx){
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

async function display_data(){
    const timeNow = new Date();
    //var gotSong = await get_id3();
    var gotData = await get_artwork();//await get_id3();
    //console.log("gotThis",gotData);
    const coverDiv = document.getElementById("artwork");
    //const coverDiv = document.createElement("div");
    coverDiv.innerHTML = "<div class='bkg_cd_icon' id='coverCD'><img src='" + gotData.artwork+"' width='260'/></div>"+
    "<div class='smoke-bkg padding_15'><h3 class='headLabel'>" + gotData.nowPlaying.song+
    "</h3><h3>"+ gotData.nowPlaying.artist + "</h3><p>" + gotData.album + "</p><p>&#x231A; " +
    zeroPad(timeNow.getHours()) +":"+ zeroPad(timeNow.getMinutes()) + "</p></div>";
    //this_img.appendChild(coverDiv);
}
async function get_id3(){
    const response = await fetch(stations[0].id3_info);
    const data = await response.json();
    const artist = data["artist"];
    const song = data["title"];
    //const bit = data["bitrate"];
    return {artist,song};
}

async function get_artwork(){
    const nowPlaying = await get_id3();
    //const song_artist = now_song.split("-");
    const this_url = "https://ws.audioscrobbler.com/2.0/?method=track.getInfo&api_key=16fe44aaa6f35d5755a08eb62f371994&artist="+
    nowPlaying.artist.trim().replace(/\s+/g,"%20") + "&track=" + 
    nowPlaying.song.trim().replace(/\s+/g,"%20") + "&format=json";
    console.log("got url",this_url);
    try {
        const response = await fetch(this_url)
        const data = await response.json();
        var album = "", artwork = "",duration="";
        if(data["track"]["album"] === undefined || data["track"]["album"] === ""){
            artwork = stations[0].logo;
            album = "";
        }else{
            artwork = data["track"]["album"]["image"][3]["#text"];
            album = data["track"]["album"]["title"],duration="";
            //duration = data["track"]["duration"];//ms
        }
        console.log("artwork",artwork,"album",album);
        return {nowPlaying, album, artwork};
    } catch (error) {
        console.log("got an error",error);
        return {nowPlaying};
    }    
}

function zeroPad(timeElm){
    return (parseInt(timeElm,10) < 10 ? '0' : '') + timeElm;
}