var audioConnect = "";//new Audio("https://stream.consultoradas.com/8042/stream");
var playStatus = false;

function startPlay(){
    playStatus = true;
    audioConnect = new Audio("https://stream.consultoradas.com/8042/stream");
    const svgPlay = document.getElementById("i-play");
    const svgStop = document.getElementById("i-stop");
    const gifImg = document.getElementById("gifElm");
    svgPlay.classList.remove("paused");
    svgPlay.classList.add("play_on");
    // svgPlay.style.fill = "#cc274c";
    // svgPlay.style.stroke = "#cc274c";
    svgStop.style.stroke = "#2e4054";
    svgStop.style.fill = "#2e4054";
    //gifImg.style.display = "block";
    //gifImg.style.background = "#2e4054";
    gifImg.classList.remove("no-audio");
    //gifImg.style.animation = "load 1s 1.2s infinite linear;";
    audioConnect.play();
    audioConnect.loop = true;
    play_elapsed();
}

function stopPlay(){
    playStatus = false;
    const svgPlay = document.getElementById("i-play");
    const svgStop = document.getElementById("i-stop");
    const gifImg = document.getElementById("gifElm");
    svgPlay.classList.remove("play_on");
    svgPlay.classList.add("paused");
    //svgPlay.style.fill = "#2e4054";
    //svgPlay.style.stroke = "#2e4054";
    svgStop.style.stroke = "#cc274c";
    svgStop.style.fill = "#cc274c";
    //gifImg.style.display = "none";
    //gifImg.style.animation = "none";
    gifImg.classList.add("no-audio");
    audioConnect.pause();
    audioConnect.loop = false;
    stop_timer();
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

function display_volume(vol_stat){
    const volInput = document.getElementById("vol_input");
    if(vol_stat === 1){
        volInput.classList.remove("volume-none");
        volInput.classList.add("volume-vertical");
    }else{
        volInput.classList.remove("volume-vertical");
        volInput.classList.add("volume-none");
    }
    
}

function playControls(){
    //await display_data();
    const playDiv = document.createElement("div");
    playDiv.setAttribute("id","player");
    var texty = '<button onclick="startPlay()"><svg id="i-play" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="32" height="32" fill="none" stroke="currentcolor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><path d="M10 2 L10 30 24 16 Z" /></svg></button>';
    texty += '<button onclick="pausePlay()"><svg id="i-pause" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="32" height="32" fill="none" stroke="currentcolor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><path d="M23 2 L23 30 M9 2 L9 30" /></svg></button>';
    playDiv.innerHTML = texty;
    return playDiv;
}

var tina_timer;
function play_elapsed(){
    let sec = 0;
    let min = 0;
    var texty = "";
    var second,minute;

    tina_timer = setInterval(function(){
        /*if(sec < 10){
            second = "0"+String(sec);
        }
        if(min < 10){
            minute = "0"+String(min);
        }*/
        second = (sec<10)?"0"+String(sec):sec;
        minute = (min<10)?"0"+String(min):min;
        //texty = ()? :sec; min = (min < 10)? :min;
        //var texty = String(min) + ":" + String(sec);
        //var texty = min + ":" + sec;
        document.getElementById("timerr").innerText = minute + ":" + second;
        sec++;
        if(sec>59){
            min++;
            sec=0;
            //clearInterval(tina_timer)
            //texty = "0"+ min + sec;  
        }
        //if(sec < 0){clearInterval(tina_timer);}
    },1000);
}
function stop_timer(){
    /* pauses time */
    clearInterval(tina_timer);
    document.getElementById("timerr").innerText = "00:00";
}
