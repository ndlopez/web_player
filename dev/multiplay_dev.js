/* Deprecated functions */
function display_info(){
    const mainDiv = document.getElementById("amia");
    const divTitle = document.createElement("h2");
    divTitle.innerText = "Favorite stations";
    mainDiv.appendChild(divTitle);
    
    for (let idx = 0; idx < stations.length; idx++) {
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

function startPlay(idx=0){
    const svgPlay = document.getElementById("play2");
    //const float_btn = document.getElementById("play_btn")
    const gifImg = document.getElementById("gifElm");
    // const getTimer = document.getElementById("timer");
    var mmss = "";
    var get_sub_timer = "";
    for(let jdx=0;jdx < stations.length; jdx++){
        /* this loops disables/enables background and text-color */
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
    //float_btn.addEventListener("click",playStop);

    document.addEventListener("keydown",function(event){
        if(event.key === "d" || event.key === "D"){
            /* adding key press events to player: play pressed */
            playStop();
        }
        if(event.key === "r" || event.key === "R"){
            display_data(idx);
        }
    });
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

            /*float_btn.classList.remove("paused");
            float_btn.classList.add("play_on");
            float_btn.innerHTML = circle_img + pauseImg;*/
            gifImg.classList.remove("no-audio");
        }else{
            audioConnect.pause();
            audioConnect.loop = false;
            gifImg.classList.add("no-audio");
            clearInterval(tina_timer);
            svgPlay.classList.remove("play_on");
            svgPlay.classList.add("paused");
            svgPlay.innerHTML = circleImg + playImg;
            /*float_btn.classList.remove("play_on");
            float_btn.classList.add("paused");
            float_btn.innerHTML = circle_img + playImg;*/
            stop_timer(idx);
        }
    }
}
function no_artwork(idx){
    const gotDiv = document.getElementById("artwork");
    gotDiv.innerHTML = "<div class='bkg_cd_icon' id='coverCD'><img src='" + stations[idx].logo +
    "' width='260'/></div>";
    document.getElementById("cover_art").innerHTML = "<img src='" + stations[idx].logo + "' width='60' height='60'/>";
    const divTitle = document.getElementById("cover_title");
    divTitle.innerHTML= "<span>Now Playing</span><span>" +  stations[idx].name + "</span>";
    //divTitle.classList.add("moving-text");
}