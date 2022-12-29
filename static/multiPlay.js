/*
 check this https://codes4education.com/create-custom-music-player-ui-design-in-html-css/
 https://cdn.freebiesupply.com/images/large/2x/music-player-web-ui-design-b48.jpg
 const stream_url = "https://rfcmedia3.streamguys1.com/thirdrock.mp3";
 alt-x logo: "https://static.wixstatic.com/media/143966_f7c1536f838a4adb890693dcdbf8423f~mv2.jpg/v1/fill/w_498,h_491,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/113fm_alt_x_1001.jpg" 
 Beethoven - moonlight
 Cigarettes After Sex - Apocalypse
 lovelytheband - these are my friends
 The Shins - So now what, New Slang
 Sneaker Pimps - 6 Underground
 Flys - Got You

 id3_info: https://player.181fm.com/streamdata.php?h=listen.181fm.com&p=7080&i=181-classical_128k.mp3&https=&f=ice&c=818600
 stream_url: https://listen.181fm.com/181-classical_128k.mp3?listenerId=esAdblock0185051&aw_0_1st.playerid=esPlayer&aw_0_1st.skey=1670382069
 history: https://player.181fm.com/external.php?http%3A%2F%2Flisten.181fm.com%3A8443%2Fice_history.php?h=listen.181fm.com&p=7080&i=181-90salt_128k.mp3&https=&f=ice&c=802268
 80s: "assets/181fm_logo.png"
 thebuzz_hist: https://player.181fm.com/external.php?http%3A%2F%2Flisten.181fm.com%3A8443%2Fice_history.php?h=listen.181fm.com&p=7080&i=181-buzz_128k.mp3&https=&f=ice&c=128773
 {name: "113.fm Alternative-Rock",
    logo: "assets/113fm_logo.jpg",
    stream_url: "https://113fm-atunwadigital.streamguys1.com/1001",
    id3_info: "From guitar riffs to mellow beats, we've got you covered.",
    description: "The biggest Alternative hits from the '90s.",
    xtra_info: ["Alt-Rock","English"," 128kbps","Yes"]}
*/

const stations = [
    {
        name: "LaPaz.fm",
        logo: "assets/fmlapaz_logo.png",
        stream_url: "https://cloudstream2030.conectarhosting.com/8042/stream",
        id3_info: "https://cloudstream2030.conectarhosting.com/cp/get_info.php?p=8042",
        description: "<a href='fmlapaz.html'>Mas musica menos palabras. Musica adulto contemporanea.</a>",
        site: "fmlapaz.html",
        xtra_info: ["Contemporary","English","128kbps",true]
    },{
        name: "181.fm - Awesome 80's",
        logo: "assets/181fm_logo.png",
        stream_url: "https://listen.181fm.com/181-awesome80s_128k.mp3?aw_0_1st.playerid=esPlayer&aw_0_1st.skey=1606271347",
        id3_info: "https://player.181fm.com/streamdata.php?h=listen.181fm.com&p=7080&i=181-awesome80s_128k.mp3&https=&f=ice&c=186052",
        description: "The Best Choice for Radio. Your Lifestyle, Your Music.",
        site: "",
        xtra_info: ["80's hits","English"," 128kbps",true]
    },{
        name: "181.fm - 90's Alternative",
        logo: "assets/90s_alt.jpg",
        stream_url: "https://listen.181fm.com/181-90salt_128k.mp3?listenerId=esAdblock0185051&aw_0_1st.playerid=esPlayer&aw_0_1st.skey=1670381772",
        id3_info: "https://player.181fm.com/streamdata.php?h=listen.181fm.com&p=7080&i=181-90salt_128k.mp3&https=&f=ice&c=802257",
        description: "Listen to the best hits of the 1990s",
        site: "",
        xtra_info: ["Alternative-Rock","English"," 128kbps",true]
    },{
        name: "The Buzz - Alternative-Rock",
        logo: "assets/alt-rock.jpg",
        stream_url: "https://listen.181fm.com/181-buzz_128k.mp3?listenerId=esAdblock0523084&aw_0_1st.playerid=esPlayer&aw_0_1st.skey=1672012878",
        id3_info: "https://player.181fm.com/streamdata.php?h=listen.181fm.com&p=7080&i=181-buzz_128k.mp3&https=&f=ice&c=128782",
        description: "Listen to the best Alternative-Rock hits",
        site: "",
        xtra_info: ["Alternative-Rock","English","128kbps",true]
    },{
        name:"Third Rock Radio",
        logo: "assets/thirdRock_logo.png",
        stream_url:"https://rfcmedia3.streamguys1.com/thirdrock-sgplayer.aac",
        id3_info: "",
        description: "Explore and discover new worlds of music with NASA's Radio.",
        site: "https://feed.tunein.com/profiles/s151799/nowPlaying",
        xtra_info:["Alternative-Rock","English"," 196kbps",false]
    },{
        name: "113.fm Classic One",
        logo: "https://static.wixstatic.com/media/143966_5140b6900352496eb333884c2bc960ec~mv2_d_1400_1400_s_2.jpg/v1/fill/w_398,h_393,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/113fm_Classic_One.jpg",
        stream_url: "https://113fm-atunwadigital.streamguys1.com/1008",
        id3_info: "",
        description: "Your radio station for the very best Classical and Piano Greats!",
        site: "",
        xtra_info: ["Classical","English"," 128kbps","Yes"]
    }
];
const awfulArt = ["https://stream.consultoradas.com/cp/musiclibrary/nowplay_fmlapaz.png",
"https://i.scdn.co/image/ab67616d0000b273852527d582b377f1543129a3",
"https://i.scdn.co/image/ab67616d0000b2737515ba4e369a9526d7d4dfde",
"https://i.scdn.co/image/ab67616d0000b27344789c72043033cd97924059",
"https://stream.consultoradas.com/cp/musiclibrary/nocover.png",
"https://i.scdn.co/image/ab67616d0000b273946c1699a48b214e45f765d6",
"https://i.scdn.co/image/ab67616d0000b2736d7a8a34f348d587f007045f",
"https://i.scdn.co/image/ab67616d0000b273d4af276af7f96299274d4b1b",
"https://i.scdn.co/image/ab67616d0000b273e8e71ebc372dfa978fc0581f"];

const info_keys = ["Genre","Language","Bitrate","Ads"];
const svg_elm = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 36 36" width="36" height="36" stroke="#2e4054" fill="#bed2e0" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><circle class="paused" cx="18" cy="18" r="18"/><path fill="#2e4054" class="paused" d="M13 8 L13 28 26 18 Z" /></svg>';
const svg_btn = '<svg class="col_half float_left" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 60 60" width="60" height="60" stroke="#2e4054" fill="#bed2e0">'
const circleImg = '<circle class="paused no_mobil" stroke-width="4" cx="30" cy="30" r="26"/>';
const circle_img = '<circle class="paused" stroke-width="4" cx="30" cy="30" r="26"/>';
const playImg  = '<path class="paused" stroke-linecap="round" stroke-linejoin="round" d="M23 40 L23 20 43 30Z"/>'
const stopImg = '<path d="M20 40 L20 20 40 20 40 40 Z" />';
const pauseImg = '<path d="M20 40 L20 20 25 20 25 40Z M35 40 L35 20 40 20 40 40Z" />';
const reloadImg = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="32" height="32" fill="none" stroke="#ffeea6" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><path d="M29 16 C29 22 24 29 16 29 8 29 3 22 3 16 3 10 8 3 16 3 21 3 25 6 27 9 M20 10 L27 9 28 2" /></svg>';
const defaultImg = "https://lastfm.freetls.fastly.net/i/u/300x300/accb1e554ea0afbac1fcc02a7413ed87.png";
var audioConnect = new Audio();
var isPlaying = 0;
var tina_timer;

init_this();

function display_all_stations(){
    const mainDiv = document.getElementById("amia");
    
    for(let idx = 0; idx < stations.length; idx++){
        const rowDiv = document.createElement("div");
        rowDiv.setAttribute("class","row round-border dashed-border bottom-10px");
        rowDiv.setAttribute("id","station_"+idx);
        rowDiv.setAttribute("onclick","init_player("+idx+")");
        
        rowDiv.innerHTML = "<div class='colImg float_left' id='imgDiv_"+ idx + "'><img src='" + 
        stations[idx].logo + "' width='84' height='84'/></div>" + 
        "<div class='colArtist float_left' id='artistDiv_" + idx + "'><span>" + 
        stations[idx].name + "</span><span>" + stations[idx].description + 
        "</span></div><div class='colTime float_left'><span id='timer_" + idx + 
        "'>00:00</span></div>";
        mainDiv.appendChild(rowDiv);
    }
}

function init_this(){
    display_all_stations();
    //build_case("Phantogram","You don't get me high anymore","","");
    /*for (let idx = 0; idx < stations.length; idx++) {
        display_data(idx);
    }*/
    update_stations();
}
//window.addEventListener("load",startPlay);//for autoplay
function init_player(stream_idx){
    console.log("gotStream",stream_idx);
    isPlaying = stream_idx;

    /*document.getElementById("title_stat").innerText = stations[stream_idx].name + 
    stations[stream_idx].description;
    const span_name = document.getElementById("nowLabel");
    span_name.innerHTML = "<h2 class='col90 float_left' id='mainTitle'>Now playing</h2>" + 
    "<h2 id='list-icon' class='col10 float_left closeBtn'></h2>";*/

    switch (stream_idx) {
        case 0:
            stopPlay();
            playStop(0);/*startPlay(0);*/
            display_data(0);
            /*if(navigator.userAgent.match(/(iPhone|iPad|Android|IEMobile)/)){openNav();}*/
            break;
        case 1:
            stopPlay();
            playStop(1);/*startPlay(1);*/
            display_data(1);
            /*if(navigator.userAgent.match(/(iPhone|iPad|Android|IEMobile)/)){openNav();}*/
            break;
        case 2:
            stopPlay();
            playStop(2);/*startPlay(2);*/
            display_data(2);
            break;
        case 3:
            stopPlay();
            playStop(3);
            display_data(3);
            break;
        case 4:
            stopPlay();
            playStop(4);
            display_data(4);
            break;
        default:
            stopPlay();
            playStop(5);
            display_data(5);
            break;
    }
    document.title = stations[stream_idx].name;
}
// audioConnect = new Audio();

function playStop(idx){
    const svgPlay = document.getElementById("play2");
    svgPlay.addEventListener("click",stopPlay); /*function(){
        console.log("passing index",idx); stopPlay(idx);});*/
    // const float_btn = document.getElementById("play_btn");
    // float_btn.addEventListener("click",stopPlay);
    const gifImg = document.getElementById("gifElm");
    // const getTimer = document.getElementById("timer");
    
    var get_sub_timer = "";
    var mmss = "";
    for(let jdx=0;jdx < stations.length; jdx++){
        /* this loops disables/enables background and text-color */
        const get_row = document.getElementById("station_"+jdx);
        get_sub_timer = document.getElementById("timer_"+jdx);
        if(idx == jdx){
            get_row.classList.remove("dashed-border");
            get_row.classList.add("smoke-bkg");            
            get_sub_timer.classList.add("headLabel");
            mmss = get_sub_timer.innerText;
        }else{
            get_row.classList.remove("smoke-bkg");
            get_row.classList.add("dashed-border");
            get_sub_timer.classList.remove("headLabel");
        }
    }

    if(audioConnect.paused){
        audioConnect.src = stations[idx].stream_url;
        audioConnect.play();//if not success -> then timer should not start
        audioConnect.loop = true;
        // mmss = getTimer.innerText; // mm:ss   //mmss = get_sub_timer.innerText; // mm:ss
        play_elapsed(parseInt(mmss.substring(0,2)),parseInt(mmss.substring(3,5)),idx); //counter starts or restarts
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

        stop_timer();//idx
    }
}

function stopPlay(){/* param: idx=0 */
    const gifImg = document.getElementById("gifElm");
    const svgPlay = document.getElementById("play2");
    // svgPlay.addEventListener("click",function(){ playStop(idx); });
    // const float_btn = document.getElementById("play_btn");
    audioConnect.pause();
    audioConnect.loop = false;
    gifImg.classList.add("no-audio");
    clearInterval(tina_timer);
    svgPlay.classList.remove("play_on");
    svgPlay.classList.add("paused");
    svgPlay.innerHTML = circleImg + playImg;
    
    stop_timer();//idx
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

function stop_timer(){
    /* pauses timer */
    clearInterval(tina_timer);
}

function build_case(index,artist, song, album, artwork){
    const timeNow = new Date();
    const this_html = "<div class='bkg_cd_icon' id='coverCD'><a href='" + stations[index].site + 
    "'><img src='" + artwork + "' width='260'/></a></div><div class='smoke-bkg padding_15 small round-border'><h2 class='headLabel'>" + 
    song + "</h2><h2>" + artist + "</h2><h2 class='lighter'>" + 
    album + "</h2><h2 class='col_half float_left lighter'>&#x231A; " + 
    zeroPad(timeNow.getHours()) + ":" + zeroPad(timeNow.getMinutes()) + 
    "</h2><a class='col_half float_left' title='Click for more info' href='https://duckduckgo.com/?q=" + 
    artist.trim().replace(/\s+/g,"%20").replace(/'/g,"") + "+" + 
    song.trim().replace(/\s+/g,"%20").replace(/'/g,"") +
    "&t=ffcm&atb=v319-1&ia=web' target='_blank'><img src='assets/duck.svg' width='36'/></a></div>";
    return this_html;
}

async function update_stations(){
    var gotData = "", auxLink = "";
    
    for(let idx = 0; idx < stations.length; idx++){
        gotData = {
            nowPlaying:{artist: stations[idx].description, song:stations[idx].name},
            album: stations[idx].xtra_info[0],artwork: stations[idx].logo};

        if(idx < 4){
            gotData = await get_artwork(idx);//returns {{artist, song},album,artwork}
        }
        
        var this_artwork = gotData.artwork;
        if(gotData.artwork === ""){
            console.log("Error: No artwork found",idx,gotData.artwork);
            this_artwork = "assets/cd_case.svg";
        }

        auxLink = this_artwork;
        if(idx == 0){//LaPaz.fm, gotData={{artist,song,artwork},album,artwork}
            if(awfulArt.includes(gotData.nowPlaying.artwork)){
                auxLink = stations[0].logo;
            }else{
                auxLink = gotData.nowPlaying.artwork;
            }
        }
        
        const this_img = document.getElementById("imgDiv_"+idx);
        this_img.innerHTML = "<img src='" + auxLink + "' width='84'/>";

        const this_artist = document.getElementById("artistDiv_"+idx);
        auxLink = "";
        
        if( idx < 4 ){ auxLink = "<span class='small'>" + stations[idx].name + "</span>"; }
        if(isPlaying == idx){ auxLink = ""; }
        this_artist.innerHTML = "<span class='headLabel'>" + gotData.nowPlaying.song +
        "</span><span>" + gotData.nowPlaying.artist + "</span>" + auxLink;
        
        const this_row = document.getElementById("station_"+idx);
        this_row.setAttribute("data-album",gotData.album);
        /*this_row.innerHTML = "<div class='colImg float_left'>" + auxLink + "</div>" + 
        "<div class='colArtist float_left'><span class='headLabel'>" + gotData.nowPlaying.song + 
        "</span><span>" + gotData.nowPlaying.artist + 
        "</span></div><div class='colTime float_left'><span id='timer_" + idx + 
        "'>00:00</span></div>";*/
    }
}

async function display_data(idx){
    await update_stations();

    // coverDiv.innerHTML = build_case(gotData.nowPlaying.artist,gotData.nowPlaying.song,gotData.album,this_artwork);
    // document.getElementById("cover_title").classList.remove("moving-text");
    const got_row = document.getElementById("station_"+idx);
    const got_artwork  = got_row.getElementsByClassName("colImg");
    const got_artist = got_row.getElementsByClassName("colArtist");
    // console.log("artist",got_artist[0].childNodes[1].firstChild.data);
    // got_artist[0].lastChild.childNodes[0].data
    var newArt = got_artwork[0].firstChild.src;
    // console.log("newArt",newArt.substring(newArt.length-3));
    if(newArt.substring(newArt.length - 3) === "svg"){
        //console.log("is it cd_case?");
        newArt = stations[idx].logo;
    }
    var gotSong = got_artist[0].firstChild.childNodes[0].data;
    if( typeof gotSong === 'undefined'){
        gotSong = "No id3 found";}
    const coverDiv = document.getElementById("artwork");
    coverDiv.innerHTML = build_case(idx, got_artist[0].childNodes[1].firstChild.data,
        gotSong, got_row.getAttribute("data-album"),newArt);
    
    // Updating player2: elements
    var auxText = "";
    const cover_art = document.getElementById("cover_art");
    cover_art.setAttribute("onclick","display_data(" + idx + ")");
    auxText = "<div class='above_img'>" + reloadImg + "</div>";

    cover_art.innerHTML = "<img src='" + stations[idx].logo + "' width='60' height='60'/>" + auxText;
    
    document.getElementById("cover_title").innerHTML = "<span>Now Playing</span><span>" +
    stations[idx].name + "</span>";    
}

let myReg = RegExp("[(][^)]*[)]");//find parentheses

async function get_id3(idx){
    const response = await fetch(stations[idx].id3_info);
    const data = await response.json();
    
    var artist = "", artwork = "";
    var song = data["title"].replace(myReg,"").replace(/&/g,"and");
    if(idx == 0){
        var auxStr = song.split("-");
        artist = auxStr[1];
        song = auxStr[0];
        artwork = data["art"];
    }else{
        artist = data["artist"].replace(/&/g,"and");
    }
    // console.log("got:",data["title"],song);
    return {artist,song,artwork};
}

async function get_artwork(jdx){
    var album = "", artwork = "assets/cd_case.svg";
    /*Fetch artwork from another source, must get first id3 */
    const nowPlaying = await get_id3(jdx); // {artist,song,artwork}
    const errTitle = ["Radio Online","Music Promo60","Music Promo30"];
    if(errTitle.includes(nowPlaying.song.trim()) || (jdx == 0)){
        console.log("Apparently no requests",jdx);
        return {nowPlaying,album,artwork};
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
    if (artwork === defaultImg){
        artwork = stations[jdx].logo;
    }
    return {nowPlaying, album, artwork};
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
    closeBtn.innerHTML = '<svg focusable="false" width="24" height="24" viewBox="0 0 24 24" stroke="#2e4054" fill="#2e4054"><path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12 19 6.41z"></path></svg>'
    // '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="32" height="32" fill="#2e4054" stroke="#bed2e0" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><path d="M2 30 L30 2 M30 30 L2 2"/></svg>';
    //closeBtn.style.margin = "0";
    //closeBtn.setAttribute("class","col10 float_left closeBtn");
    //closeBtn.setAttribute("href","javascript:void(0)");
    closeBtn.setAttribute("onclick","closeNav()");
    //document.getElementById("play_btn").style.display = "block";
    document.getElementById("amia").style.display = "none";
    document.getElementById("artwork").style.display = "block";
    // document.getElementById("player2").style.display = "none";
    // document.getElementById("station_info").style.display = "none";
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
    //document.getElementById("play_btn").style.display = "none";
    document.getElementById("list-icon").style.display = "none";
    document.getElementById("artwork").style.display = "none";
    // document.getElementById("player2").style.display = "block";
    document.getElementById("amia").style.display = "block";
    //document.getElementById("station_info").style.display = "block";
    document.body.style.overflow = "auto";
}

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