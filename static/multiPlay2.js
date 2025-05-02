/* Player2 engine*/

let img_size = 40;
let audioConnect = new Audio();
let isPlaying = 0;
let tina_timer;
let myReg = RegExp("[(][^)]*[)]"); //find parentheses
const errTitle = ["Radio Online","Music Promo60","Music Promo30","Listen.FM"];

init_this();

function display_all_stations(){
    const mainDiv = document.getElementById("amia");
    const tabl = document.createElement("table");
    const tabl_title = document.createElement("caption");
    tabl_title.setAttribute("class","padding_10");
    tabl_title.innerHTML = "PLAYLIST";
    tabl.appendChild(tabl_title);
    const rowth = document.createElement("tr");
    rowth.innerHTML = "<th></th><th></th><th></th><th></th>";

    tabl.appendChild(rowth);

    for(let kdx = 0; kdx < stations.length; kdx++){
        const rowTr = document.createElement("tr");
        // rowTr.setAttribute("class","bottom-10px");
        rowTr.setAttribute("id","station_"+kdx);
        rowTr.setAttribute("onclick","init_player("+kdx+")");
        
        rowTr.innerHTML = "<td id='imgDiv_"+ kdx + "'><img src='" + 
        stations[kdx].logo + "' width='" + img_size + "' height='" + img_size + "' style='border-radius:50%;'/></td>" + 
        "<td id='artistDiv_" + kdx + "'>" + stations[kdx].name + 
        "</td><td id='titleCol_"+kdx+"'>" + stations[kdx].xtra_info[0] + 
        "</td><td id='timer_" + kdx + "'>00:00</td>";
        tabl.appendChild(rowTr);
    }
    mainDiv.appendChild(tabl);
}

function init_this(){
    display_all_stations();
    update_stations();
}
//window.addEventListener("load",startPlay);//for autoplay
function init_player(stream_kdx){
    console.log("gotStream",stream_kdx);
    isPlaying = stream_kdx;

    /*document.getElementById("title_stat").innerText = stations[stream_kdx].name + 
    stations[stream_kdx].description;
    const span_name = document.getElementById("nowLabel");
    span_name.innerHTML = "<h2 class='col90 float_left' id='mainTitle'>Now playing</h2>" + 
    "<h2 id='list-icon' class='col10 float_left closeBtn'></h2>";*/
    stopPlay();
    playStop(stream_kdx);/*startPlay(0);*/
    display_data(stream_kdx);

    document.title = stations[stream_kdx].name;
}

function playStop(kdx){
    const svgPlay = document.getElementById("play2");
    svgPlay.addEventListener("click",stopPlay); 
    // const float_btn = document.getElementById("play_btn");
    // float_btn.addEventListener("click",stopPlay);
    const gifImg = document.getElementById("gifElm");
    
    let get_sub_timer = "";
    let mmss = "";
    for(let jdx=0;jdx < stations.length; jdx++){
        /* this loops disables/enables background and text-color */
        const get_row = document.getElementById("station_"+jdx);
        get_sub_timer = document.getElementById("timer_"+jdx);
        if(kdx == jdx){
            // get_row.classList.remove("dashed-border");
            get_row.classList.add("smoke-bkg");            
            get_sub_timer.classList.add("headLabel");
            mmss = get_sub_timer.innerText;
        }else{
            get_row.classList.remove("smoke-bkg");
            // get_row.classList.add("dashed-border");
            get_sub_timer.classList.remove("headLabel");
        }
    }

    if(audioConnect.paused){
        audioConnect.src = stations[kdx].stream_url;
        audioConnect.play();//if not success -> then timer should not start
        audioConnect.loop = true;
        // mmss = getTimer.innerText; // mm:ss   //mmss = get_sub_timer.innerText; // mm:ss
        //counter starts or restarts
        play_elapsed(parseInt(mmss.substring(0,2)),parseInt(mmss.substring(3,5)),kdx); 
        svgPlay.classList.remove("paused");
        svgPlay.classList.add("play_on");
        svgPlay.innerHTML = circleImg + pauseImg;

        gifImg.classList.remove("no-audio");
    }else{
        audioConnect.pause();
        audioConnect.loop = false;
        gifImg.classList.add("no-audio");
        clearInterval(tina_timer);
        svgPlay.classList.remove("play_on");
        svgPlay.classList.add("paused");
        svgPlay.innerHTML = circleImg + playImg;

        stop_timer();
    }
}

function stopPlay(){/* param: kdx=0 */
    const gifImg = document.getElementById("gifElm");
    const svgPlay = document.getElementById("play2");
    // svgPlay.addEventListener("click",function(){ playStop(kdx); });
    audioConnect.pause();
    audioConnect.loop = false;
    gifImg.classList.add("no-audio");
    clearInterval(tina_timer);
    svgPlay.classList.remove("play_on");
    svgPlay.classList.add("paused");
    svgPlay.innerHTML = circleImg + playImg;
    document.getElementById("imgDiv_"+isPlaying).firstElementChild.classList.remove("loader");
    stop_timer();//kdx
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
    let second,minute;

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

function stop_timer(){
    /* pauses timer */
    clearInterval(tina_timer);
}

function build_case(jdx,artist, song, album, artwork){
    const timeNow = new Date();
    let search_link = "";
    if(jdx < 10){
        search_link = "<a class='col_half float_left' title='Click for more info' href='https://duckduckgo.com/?q=" + artist.trim().replace(/\s+/g,"%20").replace(/'/g,"") + "+" + 
        song.trim().replace(/\s+/g,"%20").replace(/'/g,"") +
        "&t=ffcm&atb=v319-1&ia=web' target='_blank'><img src='assets/duck.svg' width='36'/></a>";
    }
    const this_html = "<div class='bkg_cd_icon' id='coverCD'><a href='" + stations[jdx].site + 
    "'><img src='" + artwork + "' width='260'/></a></div><div class='smoke-bkg padding_15 small round-border'><h2 class='headLabel'>" + 
    song + "</h2><h2>" + artist + "</h2><h2 class='lighter'>" + 
    album + "</h2><h2 class='col_half float_left lighter'>&#x231A; " + 
    zeroPad(timeNow.getHours()) + ":" + zeroPad(timeNow.getMinutes()) + "</h2>" + search_link + "</div>";
    
    return this_html;
}

async function update_stations(){
    let gotData = "";
    let auxLink = "";
    let zoey = "";
    for(let kdx = 0; kdx < stations.length; kdx++){
        gotData = {
            nowPlaying:{artist: stations[kdx].xtra_info[0], song:stations[kdx].name},
            album: stations[kdx].xtra_info[0],artwork: stations[kdx].logo};

        if(kdx < 10){
            //returns {{artist, song},album,artwork}
            gotData = await get_artwork(kdx);
        }
        
        auxLink = "";
        const this_artist = document.getElementById("artistDiv_"+kdx);
        const this_title = document.getElementById("titleCol_"+kdx);
        if( kdx > 10 ){ auxLink = "<td class='small'>" + stations[kdx].name + "</td>"; }

        this_artist.innerHTML = "<td class='headLabel'>" + gotData.nowPlaying.song +"</td>";
        this_title.innerHTML = "<td>" + gotData.nowPlaying.artist + "</td>"; //+ auxLink;

        let this_artwork = gotData.artwork;
        
        if(gotData.artwork === ""){
            console.log("Error: No artwork found",kdx,gotData.artwork);
            this_artwork = "assets/cd_case.svg";
        }
        // auxLink = this_artwork;
        if(kdx < 3){//LaPaz.fm, gotData={{artist,song,artwork},album,artwork}
            if(awfulArt.includes(gotData.nowPlaying.artwork)){
                this_artwork = stations[kdx].logo;
            }else{
                this_artwork = gotData.nowPlaying.artwork;
            }
        }

        if(isPlaying == kdx){
            this_artist.parentElement.style.backgroundImage= `url('${this_artwork}')`;
            // this_artist.parentElement.style.backgroundImage= `url('${stations[kdx].logo}')`;
            this_artist.parentElement.style.backgroundRepeat = "no-repeat";
            this_artist.parentElement.style.backgroundSize = "contain";
            auxLink = "loader";
            this_artwork = `<div class="${auxLink}"></div>`;
            //zoey = "<div class='above_img'><img src='assets/bars.svg' width='"+ img_size + "'/></div>";
        }else{
            auxLink="stop_loader";
            zoey="";this_artwork = `<img src='${gotData.artwork}' width="${img_size}" height="${img_size}"/>`;
            this_artist.parentElement.style.backgroundImage = "";
        }

        const this_img = document.getElementById("imgDiv_"+kdx);
        /*this_img.style.backgroundImage = 'url("assets/favicon.svg")';
        this_img.style.backgroundRepeat = "no-repeat";
        this_img.style.backgroundSize = "contain";*/
        
        this_img.innerHTML = this_artwork;

        const this_row = document.getElementById("station_"+kdx);
        this_row.setAttribute("data-album",gotData.album);
        /*this_row.innerHTML = "<div class='colImg float_left'>" + auxLink + 
        "</div><div class='colArtist float_left'><span class='headLabel'>" + 
        gotData.nowPlaying.song + "</span><span>" + gotData.nowPlaying.artist + 
        "</span></div><div class='colTime float_left'><span id='timer_" + kdx + 
        "'>00:00</span></div>";*/
    }
}

async function display_data(kdx){
    await update_stations();

    const got_row = document.getElementById("station_"+kdx);
    const got_artwork = document.getElementById("imgDiv_"+kdx);
    // got_row.getElementsByClassName("colImg");
    const got_artist = document.getElementById("artistDiv_"+kdx);
    const got_title = document.getElementById("titleCol_"+kdx).innerText;
    // got_row.getElementsByClassName("colArtist");
    // console.log("artist",got_artist,got_artwork);
    // got_artist[0].lastChild.childNodes[0].data
    let newArt = getComputedStyle(got_row).backgroundImage; //returns url
    let auxArr = newArt.split('"');
    // previously: got_artwork.firstChild.src;
    // got_artwork[0].firstChild.src;
    // console.log("newArt",newArt.substring(newArt.length-3));
    if(auxArr[1].substring(newArt.length - 3) === "svg"){
        newArt = stations[kdx].logo;
    }
    newArt = auxArr[1];
    let gotSong = got_artist.innerText; //.firstChild.childNodes[0].data;
    if( typeof gotSong === 'undefined'){
        gotSong = "No id3 found";}
    const coverDiv = document.getElementById("artwork");
    coverDiv.innerHTML = build_case(kdx,got_title,gotSong,got_row.getAttribute("data-album"),newArt);
    /*got_artist[0].childNodes[1].firstChild.data*/
    // Updating player2: elements
    let auxText = "";
    const duck = document.getElementById("duck_it");
    duck.innerHTML = `<a title='Duck it!' href='https://duckduckgo.com/?q=${got_title.trim().replace(/\s+/g,"%20").replace(/'/g,"")}+${gotSong.trim().replace(/\s+/g,"%20").replace(/'/g,"")}&t=ffcm&atb=v319-1&ia=web' target='_blank'><img src='assets/duck.svg' width='36'/></a>`;
    auxText = "";

    const reload_id3 = document.getElementById("reloadMe");
    reload_id3.setAttribute("onclick","display_data(" + kdx + ")");
    reload_id3.innerHTML = reloadImg;
    //"<img src='assets/loading.svg' width='36'></>";
    document.getElementById("player2").style.backgroundImage= `url('${newArt}')`;
        
    document.getElementById("cover_title").innerHTML = `<span class="oneLine">${gotSong}</span><span class="oneLine">${got_title}</span><span class="oneLine">${got_row.getAttribute("data-album")}</span>`;
    // "<span>Now Playing</span><span>" + stations[kdx].name + "</span>";
}

async function get_id3(kdx){
    const response = await fetch(stations[kdx].id3_info);
    const data = await response.json();
    
    let artist = "", artwork = "";
    let song = data["title"].replace(myReg,"").replace(/&/g,"and");
    if(kdx < 3){
        let auxStr = song.split("-");
        artist = auxStr[1];
        song = auxStr[0];
        artwork = data["art"];
    }else{
        artist = data["artist"].replace(/&/g,"and");
    }
    // console.log("got:",data["title"],song);
    if(errTitle.includes(song.trim())){
        artwork = stations[kdx].logo;
    }
    return {artist,song,artwork};
}

async function get_artwork(jdx){
    let album = "", artwork = stations[jdx].logo;
    /*Fetch artwork from another source, must get first id3 */
    const nowPlaying = await get_id3(jdx); // {artist,song,artwork}

    if(errTitle.includes(nowPlaying.song.trim()) || (jdx < 3)){
        // console.log("No artwork requests for ",stations[jdx].name);
        return {nowPlaying,album,artwork};
    }
    if(jdx != isPlaying){
        return {nowPlaying, album, artwork};
    }
    // if(jdx !== 4){document.title = nowPlaying.artist + " - "+ nowPlaying.song;}
    const this_url = "https://ws.audioscrobbler.com/2.0/?method=track.getInfo&api_key=16fe44aaa6f35d5755a08eb62f371994&artist="+
    nowPlaying.artist.trim().replace(/\s+/g,"%20") + "&track=" + 
    nowPlaying.song.trim().replace(myReg,"").replace(/\s+/g,"%20") + "&format=json";
    
    try {
        const response = await fetch(this_url)
        const data = await response.json();
        
        if(typeof data["track"]["album"] !== 'undefined'){
            artwork = data["track"]["album"]["image"][3]["#text"];
            album = data["track"]["album"]["title"];
        }else{
            artwork = "";
            album = "";
        }
        // console.log("artwork",artwork,"album",album);
    } catch (error) {
        console.log("got an error",jdx,error);
        //return {nowPlaying, album, artwork};
    }
    
    return {nowPlaying, album, artwork};
}

function zeroPad(timeElm){
    return (parseInt(timeElm,10) < 10 ? '0' : '') + timeElm;
}

/* open and close Info modal */
function openNav(){
    /*const titleDiv = document.getElementById("cover_title");
    titleDiv.setAttribute("onclick","closeNav()");*/
    document.getElementById("amia").style.display = "none";
    document.getElementById("artwork").style.display = "block";
    document.body.style.overflow = "hidden";    
}
function closeNav(){
    /*if(navigator.userAgent.match(/(iPhone|iPad|Android|IEMobile)/)){
        document.getElementById('amia').style.display = "none";
    }else{
        document.getElementById('amia').style.display = "block";
    }*/
    /*const titleDiv = document.getElementById("cover_title");
    titleDiv.setAttribute("onclick","openNav()");*/
    document.getElementById("artwork").style.display = "none";
    document.getElementById("amia").style.display = "block";
    document.body.style.overflow = "auto";
}
