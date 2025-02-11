/*  
    Manage all stations update/id3tag/artwork and audio bar progress
*/
// import stations from "./fetch_list.js"; // should not be local
const lpb_id3 = 3;//1 // LaPaz.fm, Me..
const no_id3 = 10;//6; //@stations, from this index no requests
// id3_info: "https://www.wdr.de/radio/radiotext/streamtitle_wdr4.txt?cb=61024762"
const info_keys = ["Genre","Language","Bitrate","Ads"];
const gifImg = document.getElementById("gifElm");
const svgPlay = document.getElementById("play2");
const errTitle = ["Radio Online","Music Promo60","Music Promo30","Listen.FM"];
const updateTime = 185000 //ms
const art_size = 300; //artwork default size
// const top_title = document.getElementById("url_status");
const titleDiv = document.getElementById("toggle-list");

let myReg = RegExp("[(][^)]*[)]");//find parentheses
let cardHeight = "220px";
let img_size = 100; //card Image size %

let audioConnect = new Audio();
let isPlaying;
let tina_timer,dayna_timer;
let zoey, cindy;
let slept = false;

init_this();
// topBtn functions
if(navigator.userAgent.match(/(iPhone|iPad|Android|IEMobile)/)){
    // Load onMobile only:console.log("User is using a Mobile device");
    window.onscroll = () => {scrollFunction("topBtn");};
}/*else{    window.onscroll = () => {scrollFunction("player2");}}*/
function scrollFunction(thisObj) {
    let pxx=380;
    if (document.body.scrollTop > pxx || document.documentElement.scrollTop > pxx) { document.getElementById(thisObj).style.display = "block"; } 
    else { document.getElementById(thisObj).style.display = "none"; }
}
function topFunction() {
    window.scroll({ top: 0, left: 0, behavior: 'smooth' });
}

function display_all_stations(){
    const amiaDiv = document.getElementById("amia");
    /* Build one card for each station*/
    const mainDiv = document.createElement("div");
    mainDiv.setAttribute("class","outer_div");
    
    for(let kdx = 0; kdx < (stations.length -1); kdx++){
        /* here should consider replacing Fides by Mundial
        based on local time */
        const rowDiv = document.createElement("div");
        rowDiv.setAttribute("class","row round-border bottom-10px card");
        rowDiv.setAttribute("id","station_"+kdx);
        rowDiv.setAttribute("onclick","init_player("+kdx+")");
        rowDiv.style.float = "left";
        /*rowDiv.style.backgroundColor = stations[kdx].xtra_info[4];
        /*rowDiv.style.background = card_bkg;*/
        rowDiv.style.height = cardHeight;
        rowDiv.style.width = img_size;
        rowDiv.style.backgroundImage = "url('" + stations[kdx].logo +"')";
        rowDiv.style.backgroundRepeat = "no-repeat";
        rowDiv.style.backgroundSize = "cover";
        rowDiv.style.backgroundPosition = "center";
        /*colImg:class=float_left; colArtist:class=float_left*/
        let auxStr = "";
        //if( kdx < no_id3 ){
        auxStr = `<div class='info_block'><div><span id='timer_${kdx}' class='small glass_circle'> 00:00 </span></div>`;
        //}
        rowDiv.innerHTML = `<div class='colImg pos_rel linear_bkg round-border' id='imgDiv_${kdx}'> 
        ${auxStr}<div class='colArtist' id='artistDiv_${kdx}'></div></div>`;
        // <!--img src='${stations[kdx].logo}' width='${img_size}%' height='${img_size}%'/-->
        /*stations[kdx].name + "</span><span>" + stations[kdx].xtra_info[0] + "</span></div>";<div class='colTime float_left'><span id='timer_" + kdx + "'>00:00</span></div>";*/
        mainDiv.appendChild(rowDiv);
    }
    amiaDiv.appendChild(mainDiv);
    // const up_time = document.getElementById("update_time");//&#x231A;
    // up_time.innerHTML = `<span id="id3_timer" class="col_half float_left">00:00</span>`;
    // onClick sleep timer starts 
    // up_time.addEventListener("click",sleepy);
}

function init_this(){
    if(navigator.userAgent.match(/(iPhone|iPad|Android|IEMobile)/)){
        closeNav();
    }
    display_all_stations();
    // build_case(0,stations[0].name,"You dont get me high anymore",stations[0].xtra_info[0],stations[0].logo);
    
    update_stations();
}

function update_this(){
    clearInterval(dayna_timer);
    run_timer();
    display_data(isPlaying);
}

// Updates all avail id3 and playing album every updateTime
let updater = setInterval(update_this,updateTime);

//window.addEventListener("load",startPlay);//for autoplay
function init_player(stream_idx){
    // console.log("gotStream",stream_idx);
    isPlaying = stream_idx;
    clearInterval(updater);
    //const getTimer = document.getElementById("timer_"+isPlaying);
    //getTimer.innerText = document.getElementById("timer").innerText;
    updater = setInterval(update_this,updateTime)
    stopPlay();
    // playStop(stream_idx);
    display_data(stream_idx);
    playStop(stream_idx);
    clearInterval(dayna_timer);
    run_timer();
    openNav();
}

let duration = 900;// ~15min myAudio.duration;
function updateBar(){
    // update a progress bar:
    // https://developer.mozilla.org/en-US/docs/Web/Media/Audio_and_video_delivery/buffering_seeking_time_ranges
    audioConnect.addEventListener('timeupdate',function(){
        // console.log("Audio len",audioConnect.currentTime,updateTime);
        document.getElementById('progress-amount').style.width = ((audioConnect.currentTime / duration)*100) + "%";
        // document.getElementById('progress-amount').style.height = ((audioConnect.currentTime / duration)*100) + "%";

        if (audioConnect.currentTime > duration){
            // document.getElementById('progress-amount').style.width = "50%";
            duration = 3600; //60min
        }
    });
}

function playStop(kdx){
    svgPlay.addEventListener("click",stopPlay);
    svgPlay.removeEventListener("click",playStop); 
    /*function(){console.log("passing index",kdx); stopPlay(kdx);});*/
    let getTimer = "", mmss = "";
    for (let jdx = 0; jdx < stations.length -1; jdx++) {
        getTimer = document.getElementById("timer_"+jdx);
        // console.log("timer",jdx,getTimer.innerText);
        if (kdx == jdx){
            mmss = getTimer.innerText;
        }
    }
    
    if(audioConnect.paused){
        const stream_info = document.getElementById("title_stat");
        // top_title.innerText = "";
        audioConnect.addEventListener('error',()=>{
            stopPlay();
            // Should be displayed also on GUI
            stream_info.innerText = `Cannot connect to ${stations[kdx].name}`;
            // console.error(`Error loading: ${stations[kdx].stream_url}`);
        });
        
        audioConnect.src = stations[kdx].stream_url;
        audioConnect.play();//if not success -> then timer should not start
        audioConnect.loop = true;
        // Once audio changes this func starts.
        audioConnect.ontimeupdate = updateBar();
        //console.log("audio?",audioConnect.duration());
        //counter starts or restarts mmss = "00:00";
        play_elapsed(parseInt(mmss.substring(0,2)),parseInt(mmss.substring(3,5)),kdx); 
        svgPlay.classList.remove("paused");
        svgPlay.classList.add("play_on");
        svgPlay.innerHTML = circleImg + stopImg;
        gifImg.classList.remove("no-audio");
    }else{
        audioConnect.pause();
        audioConnect.loop = false;
        gifImg.classList.add("no-audio");
        svgPlay.classList.remove("play_on");
        svgPlay.classList.add("paused");
        svgPlay.innerHTML = circleImg + playImg;
        stop_timer();
    }
}

function playThis(){
    svgPlay.removeEventListener("click",stopPlay);
    playStop(isPlaying);
}
function stopPlay(){/* param: kdx=0 */
    //getTimer.innerText = document.getElementById("timer").innerText;
    svgPlay.addEventListener("click",playThis);

    // const float_btn = document.getElementById("play_btn");
    audioConnect.pause();
    audioConnect.loop = false;
    gifImg.classList.add("no-audio");
    // clearInterval(tina_timer);
    svgPlay.classList.remove("play_on");
    svgPlay.classList.add("paused");
    svgPlay.innerHTML = circleImg + playImg;
    
    stop_timer();
    if (slept){ 
        window.location.href = "https://ndlopez.github.io/pages/about.html";
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

function play_elapsed(min=0,sec=0,jdx){//
    // let second,minute;
    tina_timer = setInterval(function(){
        // timer for each station
        document.getElementById("timer_"+jdx).innerText = `${String(min).padStart(2,'0')}:${String(sec).padStart(2,'0')}`;
        // timer on player
        document.getElementById("timer").innerText = `${String(min).padStart(2,'0')}:${String(sec).padStart(2,'0')}`;
        sec++;
        // console.log("stream",audioConnect.currentTime,audioConnect.currentSrc);
        // returns 0.160997, 1.16687, ...
        if(sec > 59){
            min++; sec=0;
        }
        /* if listen hours
        if(min>59 && sec>59){hours++;min=0;sec=0;}*/
        //timer case: if(sec < 0){clearInterval(tina_timer);}
    },1000);    
}

function run_timer(){
    // console.log("run_timer started");
    zoey = 3, cindy = 4;
    dayna_timer = setInterval(()=>{
        // timer to update id3
        document.getElementById("id3_timer").innerText = `${String(zoey).padStart(2,'0')}:${String(cindy).padStart(2,'0')}`;
        cindy = cindy - 1;
        if ((cindy < 0) && (zoey > 0)){
            cindy=59;zoey = zoey - 1;
        }       
    },1000);
}

function stop_timer(){
    /* pauses timer */
    clearInterval(tina_timer);
}

function build_case(jdx, artist, song, album, artwork){
    let search_link = "";
    let aux_link = "";
    if( typeof album === 'undefined'){ album = artist;}
    if(jdx < (no_id3+1)){
        search_link = `<a title='Duck it!' href='https://duckduckgo.com/?q=${artist.trim().replace(/\s+/g,"%20").replace(/'/g,"")}+${song.trim().replace(/\s+/g,"%20").replace(/'/g,"")}&t=ffcm&atb=v319-1&ia=web' target='_blank'><img src='assets/duck.svg' width='36'/></a>`;
        aux_link = `https://duckduckgo.com/?q=${artist.trim().replace(/\s+/g,"%20").replace(/'/g,"")}+${song.trim().replace(/\s+/g,"%20").replace(/'/g,"")}&t=ffcm&atb=v319-1&ia=web'`;
    }else{ 
        aux_link = stations[jdx].site;
        search_link = `<a href='${stations[jdx].site}' target='_blank'> ${svg_ff}</a>`;
    }

    const duck = document.getElementById("duck_it");
    duck.innerHTML = search_link;
    
    const vol_icon = `<div class="flexy"><label for="vol_input" onclick="volume_mute(0)">
    <img id="vol_icon" src="assets/volume-svgrepo.svg" width="38"/></label>
    <input id="vol_input" type="range" min="0" max="100" value="80" step="10" oninput="audioConnect.volume = this.value/100" onchange="this.oninput()"></div>`;
    const this_html = `<div class="pos_rel" id="coverCD">
    <a target='_blank' title='Duck it!' href='${aux_link}'>
    <img src='${artwork}' width='${art_size}'/></a></div><div class="center"> <div class="cardTitle small"><h2 class="headLabel"> 
    ${song}</h2><h2 class='lighter'> ${artist} </h2><h2 class='lighter'>${album} </h2></div>${vol_icon}</div>`;
    /*search_link +
    <div><h3 id="timer" class="col_20 float_left lighter centered">00:00</h3>
    <h3 id="title_stat" class="col80 float_left lighter"></h3></div>*/    
    return this_html;
}

function sleepy(){
    // this should be a modal page
    const time_limit=30 //minutes
    let timeNow = new Date();

    // let msg = `Streaming will end at ${String(timeNow.getHours() + 1).padStart(2,'0')}:${String(timeNow.getMinutes()).padStart(2,'0')}, is that correct?`;
    Date.prototype.addMins = function (mini) {
        return this.setTime(this.getTime() + (mini * 60 * 1000));
    }
    
    timeNow.addMins(time_limit);
    let msg = `Streaming will end at ${String(timeNow.getHours()).padStart(2,'0')}:${String(timeNow.getMinutes()).padStart(2,'0')}, is that correct?`;
    if(confirm(msg)){
        slept = true;
        setTimeout(stopPlay,(time_limit*60*1000));//1hour=60*60*1000
        clearInterval(updater);
    }else{
        console.log("Sleepy canceled");return;}
}

async function update_stations(){
    let gotData = "", auxLink = "";

    for(let kdx = 0; kdx < (stations.length -1); kdx++){
        gotData = {
            artist: stations[kdx].xtra_info[0],song: stations[kdx].name};
        /*nowPlaying:{artist: stations[kdx].description, song:stations[kdx].name},
            album: stations[kdx].xtra_info[0],artwork: stations[kdx].logo;*/

        if(kdx < no_id3){
            gotData = await get_id3(kdx);// {artist,song,artwork}
            //get_artwork(kdx);//returns {{artist, song},album,artwork}
        }
        if (kdx >= no_id3 && kdx <= (no_id3+1)){
            const response = await fetch(stations[kdx].id3_info);
            auxLink = await response.text();
            auxLink = auxLink.split("-");
            if(auxLink.length < 2){auxLink.push(stations[kdx].name);}
            gotData = {artist: auxLink[1], song:auxLink[0]};
        }
        
        auxLink = "";
        const this_artist = document.getElementById("artistDiv_"+kdx);
        //auxLink = "<span class='small'>" + stations[kdx].name + "</span>";/*stations[kdx].xtra_info[0] +*/
        /*if( kdx < no_id3 ){
            auxLink = "<span class='small'>" + stations[kdx].name + "</span>"; }*/
        if(isPlaying == kdx){
            //auxLink = "";//img_size = 80;played.push(kdx); 
            document.title = gotData.artist + "-" + gotData.song;
            document.getElementById("station_"+kdx).style.display = "none";
            // console.log("Removing:",isPlaying);
        }else{
            document.getElementById("station_"+kdx).style.display = "block";
        }
        
        this_artist.innerHTML = `<span class='bold_medium oneLine'> ${gotData.song}
        </span><span class='oneLine'> ${gotData.artist} </span>`; 
        //+ auxLink;

        /*Update artwork of station by artist
        auxLink = stations[kdx].logo;
        const this_img = document.getElementById("imgDiv_"+kdx);
        this_img.innerHTML = "<img src='" + auxLink + "' width='"+ img_size + "' height='" + img_size + "'/>";*/

        /* adding album info to <data-?> tag */
        auxLink = gotData.artwork;
        if(kdx < lpb_id3){//==0 LaPaz.fm, gotData={artist,song,artwork}
            if(awfulArt.includes(gotData.artwork)){
                auxLink = stations[0].logo;
            }else{
                auxLink = gotData.artwork;
            }
        }else{ auxLink = ""; }
        const this_row = document.getElementById("station_"+kdx);
        this_row.setAttribute("data-album",auxLink);
    }
}

async function display_data(kdx){
    // reset timer zoey = 3, cindy = 5;
    // clearInterval(dayna_timer); stops timer but does not restarts
    // Function to request artwork from ext-source, not valid for kdx=0
    await update_stations();
    
    const got_row = document.getElementById("station_"+kdx);
    const got_artist = got_row.getElementsByClassName("colArtist");
    
    let gotSong = got_artist[0].firstChild.childNodes[0].data;
    let gotArtist = got_artist[0].childNodes[1].firstChild.data;
    if( (typeof gotSong === 'undefined') || (typeof gotArtist === 'undefined')){
        gotSong = "No id3 found"; gotArtist = "No artist";
    }
    
    let gotData = "";
    if(kdx >= lpb_id3){ gotData = await get_artwork(kdx,gotArtist,gotSong);}

    let this_artwork = gotData.artwork;
    if(kdx < lpb_id3){ this_artwork = got_row.getAttribute("data-album"); }
    if(gotData.artwork === ""){
        console.log("Error: No artwork found",kdx,gotData.artwork);
        this_artwork = stations[kdx].logo;//"assets/cd_case.svg";
    }
    const coverDiv = document.getElementById("artwork");
    /*coverDiv.innerHTML = build_case(kdx, got_artist[0].childNodes[1].firstChild.data, gotSong, got_row.getAttribute("data-album"),newArt);*/
    coverDiv.style.backgroundImage = `url("${this_artwork}")`;

    /* append dark_bkg div to coverDiv*/
    coverDiv.innerHTML = `<div id="dark_bkg" class="pos_rel">${build_case(kdx, gotArtist, gotSong, gotData.album, this_artwork)}</div>`;//flexy class

    /*const auxDiv = document.getElementById("dark_bkg");
    auxDiv.classList.add("pos_rel");
    auxDiv.style.background = card_bkg;
    auxDiv.style.height = "100vh";
    auxDiv.innerHTML = build_case(kdx, gotArtist, gotSong, gotData.album, this_artwork);*/
    // Update artwork of each station_kdx Div
    /*const got_artwork  = document.getElementById("imgDiv_" + kdx);
    let newArt = this_artwork;//got_artwork[0].firstChild.src;
    got_artwork.innerHTML = "<img src='" + newArt + "' width='" + img_size + 
    "' height='"+ img_size + "'/>"*/
    //console.log("newArt",newArt.substring(newArt.length-3));
    /*if(newArt.substring(newArt.length - 3) === "svg"){
        newArt = stations[kdx].logo;//console.log("is it cd_case?");}*/
    
    // Updating player2: elements
    let auxText = "";
    const reloadMe = document.getElementById("reload_this");//"update_stations()"
    reloadMe.setAttribute("onclick","display_data(" + kdx + ")");
    reloadMe.innerHTML = reloadImg;
    const cover_art = document.getElementById("cover_art");
    // cover_art.setAttribute("onclick","display_data(" + kdx + ")");
    // auxText = `<div class='above_img'> ${reloadImg} </div>`;
    cover_art.innerHTML = `<img src='${this_artwork}' width='48' height='48'/>`
    // ${auxText}`;

    auxText = gotArtist;
    let play_stat = stations[kdx].name + " - " + stations[kdx].description;
    if(kdx > no_id3){
        auxText = stations[kdx].xtra_info[0];
        //play_stat = "";
    }
    
    /*let newTitle = gotSong + " - " + gotArtist;
    if(gotSong.length < 21){ newTitle = gotSong; }else{ auxText = ""; }*/
    document.getElementById("cover_title").innerHTML = 
    `<span class="headLabel oneLine"> ${gotSong} </span><span class="oneLine"> ${auxText} </span>`;
    
    /* current song title next to burger menu
    const currDiv = document.getElementById('curr_song');
    let strText = "";    
    if(navigator.userAgent.match(/(iPhone|iPad|Android|IEMobile)/) && (kdx < no_id3)){ 
        strText = `<h3 class="moving-text"> Now ♪ ${auxText} - ${gotSong} ♪ </h3>`;
    }currDiv.innerHTML = strText;*/
    // current playing station id
    document.getElementById("title_stat").innerHTML = play_stat; 
}
// deal with timeout requests
function withTimeout(msecs, promise) {
    const timeout = new Promise((resolve, reject) => {
        setTimeout(() => {
        reject(new Error("timeout"));
        }, msecs);
    });
    return Promise.race([timeout, promise]);
}

async function get_id3(kdx){
    const this_output = {
        artist:stations[kdx].name,
        song:stations[kdx].xtra_info[0],
        artwork:stations[kdx].logo};
    let artist = "", artwork = "";
    let data = {}, song = "";
    
    try{
	    if (kdx > (lpb_id3 - 1) ){
            //avoid the 1st tree streams
            const response = await fetch(stations[kdx].id3_info);
            if(!response.ok){
                throw new Error(`couldnt fetch ${stations[kdx].id3_info}`);
            }
	        data = await response.json();
            //song = data["title"].replace(myReg,"").replace(/&/g,"and");
        }else{
            // fmLaPaz, Melodia, stereo streams fail from time to time, thus
            const response = await withTimeout(2000, fetch(stations[kdx].id3_info));
            data = await response.json();
            /*.then((response) =>{ return response.json();})
            .then((dato)=>{  // console.log("thisData",dato);
                song = dato["title"].replace(myReg,"").replace(/&/g,"and");
                })
            .catch(err => { console.error("connection timed out",err); });*/
        }
        song = data["title"].replace(myReg,"").replace(/&/g,"and");
	    if(kdx < lpb_id3){// prev == 0
            if(Object.keys(data).length < 1){
                console.log("response length",Object.keys(data).length);
                return this_output;
            }
            // console.log("Got",kdx,Object.keys(data).length);
            const auxStr = song.split("-");
            if (auxStr.length < 2){
                auxStr.push("No title");
            }
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
    }catch(err){
        console.error(stations[kdx].name,err);
        return this_output;
    }    
}

async function get_artwork(jdx,artist_name,song_title){
    let album = stations[jdx].xtra_info[1] + "-" + stations[jdx].xtra_info[2] +"kbps", artwork = stations[jdx].logo;
    /*Fetch artwork from another source, must get first id3 */
    const nowPlaying = {
        artist: artist_name, song: song_title };
        //await get_id3(jdx); // {artist,song,artwork}

    if(errTitle.includes(nowPlaying.song.trim()) || (jdx < lpb_id3) || (jdx > (no_id3 - 1))){
        // console.log("No artwork requests for ",stations[jdx].name);
        return {nowPlaying,album,artwork};
    }
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
            album = stations[jdx].xtra_info[1] + "-" + stations[jdx].xtra_info[2] +"kbps";
        }
        // console.log("artwork",artwork,"album",album);
    } catch (error) {
        console.log("got an error",jdx,error);
        //return {nowPlaying, album, artwork};
    }
    if (artwork === defaultImg){
        artwork = stations[jdx].logo;
    }
    // console.log("gotArt:",artwork);
    return {nowPlaying, album, artwork};
}

function openNav(){
    /* open and close Info modal. works onMobil only*/
    if(navigator.userAgent.match(/(iPhone|iPad|Android|IEMobile)/)){
        titleDiv.setAttribute("onclick","closeNav()");
        /*closeBtn.style.margin = "0";
        document.getElementById("stationInfo").style.display = "block";*/
        document.getElementById("amia").style.display = "none";
        document.getElementById("artwork").style.display = "block";
        document.getElementById("controls").style.display = "flex";
        document.getElementById("art_title").style.display = "none";
        document.body.style.overflow = "hidden";
    }
}
function closeNav(){
    titleDiv.setAttribute("onclick","openNav()");
    document.getElementById("artwork").style.display = "none";
    //document.getElementById("dark_bkg").style.display = "none";
    document.getElementById("amia").style.display = "block";
    document.getElementById("controls").style.display = "none";
    document.getElementById("art_title").style.display = "block";
    document.body.style.overflow = "auto";
}
