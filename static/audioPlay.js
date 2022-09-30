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

function playControls(){
    //await display_data();
    const playDiv = document.createElement("div");
    playDiv.setAttribute("id","player");
    var texty = '<button onclick="startPlay()"><svg id="i-play" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="32" height="32" fill="none" stroke="currentcolor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><path d="M10 2 L10 30 24 16 Z" /></svg></button>';
    texty += '<button onclick="pausePlay()"><svg id="i-pause" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="32" height="32" fill="none" stroke="currentcolor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><path d="M23 2 L23 30 M9 2 L9 30" /></svg></button>';
    playDiv.innerHTML = texty;
    return playDiv;
}