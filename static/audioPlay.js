const stream_url = "https://stream.consultoradas.com/8042/stream";
var audioConnect; //= new Audio();
var playStatus = false;
var tina_timer;

window.addEventListener("load",startPlay);

function startPlay(){
    /*bug: stop only pauses stream */
    playStatus = true;
    const svgPlay = document.getElementById("i-play");
    const svgStop = document.getElementById("i-stop");
    const gifImg = document.getElementById("gifElm");

    //gifImg.style.display = "block";
    //gifImg.style.background = "#2e4054";
    audioConnect = new Audio(stream_url);

    svgPlay.addEventListener("click",playPause);
    svgStop.addEventListener("click",stopPlay);

    //gifImg.style.animation = "load 1s 1.2s infinite linear;";
    function playPause(){
        if(audioConnect.paused){
            audioConnect.play();//if not success -> then timer should not start
            audioConnect.loop = true;
            //console.log("this value",audioConnect.value); 
            play_elapsed();
            svgPlay.classList.remove("paused");
            svgPlay.classList.add("play_on");
            svgStop.style.stroke = "#bed2e0";
            svgStop.style.fill = "#bed2e0";
            gifImg.classList.remove("no-audio");
            //change icon to pause btn
        }else{
            audioConnect.pause();
            clearInterval(tina_timer);
            //resets interval but its possible to send back the 
            //stopped time to interval again
            gifImg.classList.add("no-audio");
            //playbtn should show play again
        }
    }
    function stopPlay(){
        /* pauses stream */
        audioConnect.loop = false;
        audioConnect.load(stream_url);
        
        svgPlay.classList.remove("play_on");
        svgPlay.classList.add("paused");
        //svgPlay.style.fill = "#2e4054";
        //svgPlay.style.stroke = "#2e4054";
        svgStop.style.stroke = "#cc274c";
        svgStop.style.fill = "#cc274c";
        //gifImg.style.display = "none";
        //gifImg.style.animation = "none";
        gifImg.classList.add("no-audio");
        //audioConnect.pause();
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
            //console.log(audioConnect.volume);
            volIcon.src = "assets/volume-repo-off.svg";
            audioConnect.volume = "0";
            volInput.onchange = "0";
            volInput.value = "0";
        }else{
            // console.log("volume off");
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

function playControls(){
    //await display_data();
    const playDiv = document.createElement("div");
    playDiv.setAttribute("id","player");
    var texty = '<button onclick="startPlay()"><svg id="i-play" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="32" height="32" fill="none" stroke="currentcolor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><path d="M10 2 L10 30 24 16 Z" /></svg></button>';
    texty += '<svg id="i-pause" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="32" height="32" fill="none" stroke="currentcolor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><path d="M23 2 L23 30 M9 2 L9 30" /></svg>';
    playDiv.innerHTML = texty;
    return playDiv;
}

function play_elapsed(){
    let sec = 0;
    let min = 0;
    //var texty = "";
    var second,minute;

    tina_timer = setInterval(function(){

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
