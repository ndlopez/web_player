// check this https://codes4education.com/create-custom-music-player-ui-design-in-html-css/
// https://cdn.freebiesupply.com/images/large/2x/music-player-web-ui-design-b48.jpg
// add this to stations: https://113fm-atunwadigital.streamguys1.com/1001
// const stream_url = "https://rfcmedia3.streamguys1.com/thirdrock.mp3";
const stream_name = ["Third Rock Radio","113.fm Alt-Rock","181.fm Awesome 80's"];
const stream_url = ["https://rfcmedia3.streamguys1.com/thirdrock-sgplayer.aac",
"https://113fm-atunwadigital.streamguys1.com/1001",
"https://listen.181fm.com/181-awesome80s_128k.mp3?aw_0_1st.playerid=esPlayer&aw_0_1st.skey=1606271347"];
const id3_181fm = "https://player.181fm.com/streamdata.php?h=listen.181fm.com&p=7080&i=181-awesome80s_128k.mp3&https=&f=ice&c=186052";
var audioConnect; //= new Audio();
//Beethoven - moonlight
//Cigarettes After Sex - Apocalypse
var tina_timer;

//window.addEventListener("load",startPlay);
function init_player(stream_idx){
    console.log("gotStream",stream_idx);
    document.title = stream_name[stream_idx];

    const span_name = document.getElementById("stat_name");
    span_name.innerHTML = "<h3>Now Playing: "+stream_name[stream_idx]+"</h3>";
    if(stream_idx === 0){
        startPlay(0);
    }else{
        if(stream_idx === 1){
            startPlay(1);
        }else{
            startPlay(2);
            display_data();
        }
    }
}

function startPlay(idx){
    //playStatus = true;
    const svgPlay = document.getElementById("i-play");
    const svgStop = document.getElementById("i-stop");
    const gifImg = document.getElementById("gifElm");
    const getTimer = document.getElementById("timer");
    
    var mmss = "";

    const circleImg = '<circle class="paused" stroke-width="4" cx="30" cy="30" r="26"/>';
    const playImg  = '<path class="paused" stroke-linecap="round" stroke-linejoin="round" d="M23 40 L23 20 43 30Z"/>'
    const pauseImg = '<path d="M20 40 L20 20 25 20 25 40Z M35 40 L35 20 40 20 40 40Z" />';
    //gifImg.style.display = "block";
    //gifImg.style.background = "#2e4054";
    audioConnect = new Audio();
    svgPlay.addEventListener("click",playPause);
    svgStop.addEventListener("click",stopPlay);

    //gifImg.style.animation = "load 1s 1.2s infinite linear;";
    function playPause(){
        if(audioConnect.paused){
            audioConnect.src = stream_url[idx];//stream_url
            console.log("playing",stream_url[idx]);
            audioConnect.play();//if not success -> then timer should not start
            audioConnect.loop = true;
            //console.log("this value",audioConnect.startTime,audioConnect.networkState);
            //console.log(audioConnect.loadstart,audioConnect.stalled,audioConnect.playing);
            mmss = getTimer.innerText; // mm:ss
            play_elapsed(parseInt(mmss.substring(0,2)),parseInt(mmss.substring(3,5))); //counter starts or restarts
            //play_elapsed();
            svgPlay.classList.remove("paused");
            svgPlay.classList.add("play_on");
            svgPlay.innerHTML = circleImg + pauseImg;
            svgStop.style.stroke = "#bed2e0";
            svgStop.style.fill = "#bed2e0";
            gifImg.classList.remove("no-audio");
            //change icon to pause btn
        }else{
            audioConnect.pause();
            //resets interval but its possible to send back the 
            //stopped time to interval again
            gifImg.classList.add("no-audio");
            clearInterval(tina_timer);
            svgPlay.innerHTML = circleImg + playImg;
        }
    }
    function stopPlay(){
        /* does not pause/stop stream */
        audioConnect.pause();
        audioConnect.loop = false;
        //audioConnect.load(stream_url[idx]);
        
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
            volIcon.src = "../static/volume-repo-off.svg";
            audioConnect.volume = "0";
            volInput.onchange = "0";
            volInput.value = "0";
        }else{
            // volInput.classList.remove("volume-vertical");
            // volInput.classList.add("volume-none");
            volIcon.src = "../static/volume-svgrepo.svg";
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
    /* pauses time */
    clearInterval(tina_timer);
    document.getElementById("timer").innerText = "00:00";
}

async function display_data(){
    var gotData = await get_id3();
    const now_title = document.getElementById("stat_name");
    now_title.innerHTML = "<h3>" + gotData.song + "</h3>";
}
async function get_id3(){
    const response = await fetch(id3_181fm);
    const data = await response.json();
    const song = data["song"];
    // var artwork = data[keys[1]];
    const bit = data["bitrate"];
    // const listen = data[keys[3]];

    return {song,bit};
}