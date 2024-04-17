/*  
    const stream_url = "https://rfcmedia3.streamguys1.com/thirdrock.mp3";
    history: https://player.181fm.com/external.php?http%3A%2F%2Flisten.181fm.com%3A8443%2Fice_history.php?h=listen.181fm.com&p=7080&i=181-90salt_128k.mp3&https=&f=ice&c=802268
    thebuzz_hist: https://player.181fm.com/external.php?http%3A%2F%2Flisten.181fm.com%3A8443%2Fice_history.php?h=listen.181fm.com&p=7080&i=181-buzz_128k.mp3&https=&f=ice&c=128773
    melodia:https://radiomelodia.fm/?qtdir=2968&qtproxycall=Mjk2OFstXWh0dHBzOi8vc3RyZWFtLmNvbnN1bHRvcmFkYXMuY29tLzgxOTQvc3RyZWFt&icymetadata=1&_=1684549254958
*/
// import stations from "./fetch_list.js"; // should not be local
const lpb_id3 = 3;//1 // LaPaz.fm, Me..
const no_id3 = 10;//6; //@stations, from this index no requests

const stations = [
    {
        name: "LaPaz.fm",
        logo: "assets/fmlapaz_logo.png",
        stream_url: "https://cloudstream2030.conectarhosting.com/8042/stream",
        id3_info: "https://cloudstream2030.conectarhosting.com/cp/get_info.php?p=8042",
        description: "Mas m\u00FAsica menos palabras. La mejor radio adulto contemporanea.",
        site: "fmlapaz.html",
        xtra_info: ["Adult Contemporary","English",128,true,"#183a67"]
    },{
        name: "Melodia",
        logo: "assets/melodia.png",
        stream_url: "https://stream.consultoradas.com/8194/stream",
        id3_info: "https://stream.consultoradas.com/cp/get_info.php?p=8194",
        description: "tu grata compa\u00f1ia, que enciende tu alegria, esta en tu sintonia la mejor radio latina.",
        site: "",
        xtra_info: ["M\u00FAsica en espa\u00F1ol", "Espa\u00F1ol",128,true,"#f2f2f2"]
    },{
        name: "Stereo97",
        logo: "assets/stereo97.png",
        stream_url: "https://stream.consultoradas.com/8104/stream",
        id3_info: "https://stream.consultoradas.com/cp/get_info.php?p=8104",
        description: "Soy parte de ti, lleno tu vida con alegria, soy mas que tu amigo yo quiero estar en tu coraz\u00F3n",
        site: "La n\u00FAmero uno",
        xtra_info: ["Top40 & Pop Music", "Espa\u00F1ol",128,true,"#140000"]
    },{
        name: "The Buzz",
        logo: "assets/alt-rock.jpg",
        stream_url: "https://listen.181fm.com/181-buzz_128k.mp3?listenerId=esAdblock0523084&aw_0_1st.playerid=esPlayer&aw_0_1st.skey=1672012878",
        id3_info: "https://player.181fm.com/streamdata.php?h=listen.181fm.com&p=7080&i=181-buzz_128k.mp3&https=&f=ice&c=128782",
        description: "Listen to the new Alternative-Rock hits",
        site: "",
        xtra_info: ["Alternative-Rock","English",128,true,"#51738f"]
    },{
        name: "Aceradio",
        logo: "assets/phantogram.jpg",
        stream_url: "https://bigrradio.cdnstream1.com/5116_128",
        id3_info: "https://player.aceradio.net/streamdata.php?h=bigrradio.cdnstream1.com&p=9980&i=5116_128&https=&f=ice&c=617202",
        description: "Listen to the new Alternative-Rock hits",
        site: "https://player.aceradio.net/album.php?key=The%20Revivalists%20-%20Kid",
        xtra_info: ["Alternative","English",128,true,"#51738f"]
    },{
        name: "181.fm",
        logo: "assets/90s_alt.jpg",
        stream_url: "https://listen.181fm.com/181-90salt_128k.mp3?listenerId=esAdblock0185051&aw_0_1st.playerid=esPlayer&aw_0_1st.skey=1670381772",
        id3_info: "https://player.181fm.com/streamdata.php?h=listen.181fm.com&p=7080&i=181-90salt_128k.mp3&https=&f=ice&c=802257",
        description: "Listen to the best Alternative-Rock hits of the 90s",
        site: "",
        xtra_info: ["Alternative-Rock","English",128,true,"rgb(119,24,19)"]
    },{
        name: "181.fm",
        logo: "assets/awesome80s.jpg",
        stream_url: "https://listen.181fm.com/181-awesome80s_128k.mp3?aw_0_1st.playerid=esPlayer&aw_0_1st.skey=1606271347",
        id3_info: "https://player.181fm.com/streamdata.php?h=listen.181fm.com&p=7080&i=181-awesome80s_128k.mp3&https=&f=ice&c=186052",
        description: "Awesome 80's - The Best Choice for Radio. Your Lifestyle, Your Music.",
        site: "https://lastfm.freetls.fastly.net/i/u/300x300/accb1e554ea0afbac1fcc02a7413ed87.png",
        xtra_info: ["80's Pop","English",128,true,"#03712c"]
    },{
        name: "Aceradio",
        logo: "assets/soft80s_400.jpg",
        stream_url: "https://bigrradio.cdnstream1.com/5115_128",
        id3_info: "https://player.aceradio.net/streamdata.php?h=bigrradio.cdnstream1.com&p=9980&i=5115_128&https=&f=ice&c=605736",
        description: "Soft hits from the 80's",
        site: "",
        xtra_info: ["80's Pop","English",128,true,"#03712c"]
    },{
        name: "Mellow Gold",
        logo: "assets/default_bkg.svg",
        stream_url: "https://listen.181fm.com/181-mellow_128k.mp3?listenerId=esAdblock0526824&aw_0_1st.playerid=esPlayer&aw_0_1st.skey=1683720203",
        id3_info: "https://player.181fm.com/streamdata.php?h=listen.181fm.com&p=7080&i=181-mellow_128k.mp3&https=&f=ice&c=202036",
        description: "A softer mix of classic hits with a '70s, '80s, & 90's focus.",
        site: "",
        xtra_info: ["Relaxing","English",128,true,"#073642"]
    },{
        name: "Good Time Oldies",
        logo: "assets/rockola.png",
        stream_url: "https://listen.181fm.com/181-goodtime_128k.mp3?listenerId=esAdblock0526824&aw_0_1st.playerid=esPlayer&aw_0_1st.skey=1683722389",
        id3_info: "https://player.181fm.com/streamdata.php?h=listen.181fm.com&p=7080&i=181-goodtime_128k.mp3&https=&f=ice&c=223878",
        description: "Dedicated to playing the best oldies music from the 50s and 60s.",
        site: "",
        xtra_info: ["50's and 60's","English",128,true,"#073642"]
    },{
        name: "WDR 4",
        logo: "assets/wdr4_logo.svg",
        stream_url: "https://wdr-wdr4-live.icecastssl.wdr.de/wdr/wdr4/live/mp3/128/stream.mp3",
        id3_info: "https://www.wdr.de/radio/radiotext/streamtitle_wdr4.txt",
        description: "Wir schicken Sie und drei Ihrer engsten Freunde und Freundinnen auf Flussreise.",
        site: "https://www1.wdr.de/radio/wdr4/index.html",
        xtra_info: ["80er", "Deutsch",128,true,"#18375C"]
    },{
        name: "WDR 1Live",
        logo: "assets/1live_logo.svg",
        stream_url: "https://d111.rndfnk.com/ard/wdr/1live/live/mp3/128/stream.mp3?cid=01FBRZTS1K1TCD4KA2YZ1ND8X3&sid=2dO2O2xaoZmBXJ0PlNRg3jZxhJ1&token=eoVaiEeHkZlEhscyVdL82T91MwtZEID3cZ8kceuVBtg&tvf=nI1frZe8uhdkMTExLnJuZGZuay5jb20",
        id3_info: "https://www.wdr.de/radio/radiotext/streamtitle_1live.txt",
        description: "Neue songs auf der 1Live",
        site: "https://www1.wdr.de/radio/",
        xtra_info: ["Sie hören: Neue songs", "Deutsch",128,true,"#18375C"]
    },{
        name:"Heart Radio",
        logo: "assets/heart80s.jpg",
        stream_url:"https://media-ssl.musicradio.com/Heart80s",
        id3_info: "",
        description: "the UK's biggest commercial radio brand.",
        site: "https://www.heart.co.uk/",
        xtra_info:["80's Pop","English",196,false,"#d21e2a"]
    },{
        name: "WDR einsLive",
        logo: "assets/1live_logo.svg",
        stream_url: "https://wdr-1live-rockhits.icecast.wdr.de/wdr/1live/rockhits/mp3/128/stream.mp3",
        id3_info: "https://www.wdr.de/radio/radiotext/streamtitle_1live.txt",
        description: "Hier treffen die beliebtesten Rockhymnen auf den neusten Rocksound",
        site: "https://www1.wdr.de/radio/",
        xtra_info: ["Sie hören: Rock Hits", "Deutsch",128,true,"#18375C"]
    },{
        name: "113.fm",
        logo: "assets/alt-x_113fm.jpg",
        stream_url: "https://113fm-atunwadigital.streamguys1.com/1001",
        id3_info: "",
        description: "From guitar riffs to mellow beats, we've got you covered.",
        site: "",
        xtra_info: ["Alternative-Rock","English",128,true,"#291F1B"]
    },{
        name: "KEXP-FM",
        logo: "assets/kexp_fm.svg",
        stream_url: "https://kexp-mp3-128.streamguys1.com/kexp128.mp3",
        id3_info: "https://api.kexp.org/v2/plays/?format=json&limit=1&ordering=-airdate&airdate_before=2024-01-13T12:45:25.000Z",
        description: "is an affiliate of the University of Washington, Seattle.",
        site: "",
        xtra_info: ["Rock","English",128,true,"#31251C"]
    },{
        name:"WCPE, The Classical Station",
        logo:"assets/classicalStation.png",
        stream_url:"http://playerservices.streamtheworld.com/api/livestream-redirect/WCPE_FMAAC128.aac",
        id3_info:"",
        description:"is a non-commercial, independent, listener-supported station broadcasting from North Carolina, US.",
        site:"https://theclassicalstation.org/",
        xtra_info:["Classical","English",128,true,"#306985"]
    },{
        name: "113.fm",
        logo: "assets/113fm_classicone_1008.jpg",
        stream_url: "https://113fm-atunwadigital.streamguys1.com/1008",
        id3_info: "",
        description: "Classic One - Your radio station for the very best Classical and Piano Greats!",
        site: "",
        xtra_info: ["Classical","English",128,true,"rgb(98,69,11)"]
    },{
        name: "RadiCro",
        logo: "assets/radicro_400x400.jpg",
        stream_url: "https://radicrojapan.out.airtime.pro/radicrojapan_b",
        id3_info: "",
        description: "[人,情報,まち,企業,学校...]すべてが繋がる!!",
        site: "Radio Cross from Kobe,Japan",
        xtra_info: ["Pop","日本語",128,false,"#073642"]
    },{
        name: "rfi",
        logo: "assets/rfi_logo.png",
        stream_url: "https://rfienespagnol64k.ice.infomaniak.ch/rfienespagnol-64.mp3",
        id3_info:"Radio Francia Internacional",
        site:"https://www.rfi.fr/es/en-vivo",
        xtra_info: ["Noticias","Espa\u00f1ol",64,false,"#a50005"]
    },{
        name: "Panamericana",
        logo: "assets/pana148.png",
        stream_url: "https://stream-28.zeno.fm/pnwpbyfambruv?zs=7zM3ROeGQVmyOAzN9Khz5A",
        id3_info: "",
        description: "La radio que todos tienen encendida desde la ma\u00f1ana.",
        site: "https://www.panamericana.bo/blog/section/nacional",
        xtra_info: ["Noticias y m\u00FAsica en espa\u00F1ol", "Espa\u00F1ol",112,true,"#073642"]
    },{
        name: "ATB radio",
        logo: "assets/atb_radio.jpg",
        stream_url: "https://streamingenbolivia.com/8006/stream",
        id3_info: "",
        description: "Asociación de Teledifusoras Boliviana, la red privada de televisión más antigua e importante de Bolivia.",
        site: "https://www.atb.com.bo/atb-radio",
        xtra_info: ["Noticias y m\u00FAsica del ayer y hoy", "Espa\u00F1ol",128,true,"#014171"] 
    },{
        name: "Radio Fides",
        logo: "assets/fides.svg",
        stream_url: "https://usa7.fastcast4u.com/proxy/grflores?mp=/1",
        id3_info: "",
        description: "su voz amiga, a la hora de las noticias, la buena musica, en sintonia nacional, con el placer de su compa\u00f1ia...",
        site: "https://www.online.radiofides.com/",
        xtra_info: ["Noticias y m\u00FAsica en espa\u00F1ol", "Espa\u00f1ol",128,true,"#2e4054"] 
    },{
        name: "Correo del Sur",
        logo: "assets/correodelsur.jpg",
        stream_url: "https://whsh4u-panel.com/proxy/gddupgij?mp=/stream",
        id3_info: "",
        description: "Diario Correo del Sur: Noticias de Sucre, Bolivia y el mundo.",
        site: "https://correodelsur.com/",
        xtra_info: ["Noticias y m\u00FAsica del ayer y hoy en espa\u00F1ol", "Espa\u00F1ol",128,true,"#014171"] 
    },{
        name: "Radio Mundial",
        logo: "assets/mundial.png",
        stream_url: "https://streaming1.locucionar.com/proxy/radiomundial?mp=/stream",
        id3_info: "",
        description: "para amantes de la m\u00FAsica que desean disfrutar de ritmos actuales, grandes exitos.",
        site: "",
        xtra_info: ["M\u00FAsica del ayer y hoy en espa\u00F1ol", "Espanol",64,true,"#014171"] 
    }
];
// id3_info: "https://www.wdr.de/radio/radiotext/streamtitle_wdr4.txt?cb=61024762"
const info_keys = ["Genre","Language","Bitrate","Ads"];
const svg_elm = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 36 36" width="36" height="36" stroke="#2e4054" fill="#bed2e0" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><circle class="paused" cx="18" cy="18" r="18"/><path fill="#2e4054" class="paused" d="M13 8 L13 28 26 18 Z" /></svg>';
const svg_btn = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 60 60" width="60" height="60" stroke="#2e4054" fill="#bed2e0">'
const circle_img = '<circle class="paused" stroke-width="4" cx="30" cy="30" r="26"/>';
const pauseImg = '<path d="M20 40 L20 20 25 20 25 40Z M35 40 L35 20 40 20 40 40Z" />';
const svg_clock = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="28" height="28" fill="#b58900" stroke="#bed2e0" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><circle cx="16" cy="16" r="14" /><path d="M16 8 L16 16 20 20" /></svg>';

const awfulArt = ["https://stream.consultoradas.com/cp/musiclibrary/nowplay_fmlapaz.png",
"https://i.scdn.co/image/ab67616d0000b273852527d582b377f1543129a3",
"https://i.scdn.co/image/ab67616d0000b2737515ba4e369a9526d7d4dfde",
"https://i.scdn.co/image/ab67616d0000b27344789c72043033cd97924059",
"https://stream.consultoradas.com/cp/musiclibrary/nocover.png",
"https://i.scdn.co/image/ab67616d0000b273946c1699a48b214e45f765d6",
"https://i.scdn.co/image/ab67616d0000b2736d7a8a34f348d587f007045f",
"https://i.scdn.co/image/ab67616d0000b273d4af276af7f96299274d4b1b",
"https://i.scdn.co/image/ab67616d0000b273e8e71ebc372dfa978fc0581f"];
const circleImg = '<circle class="paused" stroke-width="4" cx="30" cy="30" r="26"/>';
const playImg  = '<path class="paused" stroke-linecap="round" stroke-linejoin="round" d="M23 40 L23 20 43 30Z"/>'
const stopImg = '<path d="M20 40 L20 20 40 20 40 40 Z" />';
const reloadImg = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="32" height="32" fill="none" stroke="#bed2e0" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><path d="M29 16 C29 22 24 29 16 29 8 29 3 22 3 16 3 10 8 3 16 3 21 3 25 6 27 9 M20 10 L27 9 28 2" /></svg>';

const svg_moon = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="32" height="32" fill="#b58900" stroke="#bed2e0" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><path d="M14 2C 9 2 3 7 3 15 3 23 9 29 17 29 25 29 30 23 30 18 19 25 7 13 14 2Z" /></svg>';
const svg_ff = '<svg id="next_play" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 42 42" width="42" height="42" fill="#bed2e0" stroke="#bed2e0" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><path d= "M12 30 L12 10 30 20Z M31 30 L31 10"/></svg>';
const defaultImg = "https://lastfm.freetls.fastly.net/i/u/300x300/accb1e554ea0afbac1fcc02a7413ed87.png";
const card_bkg = "rgba(0,0,0,0.75)";//linear-gradient(rgba(0,0,0,0),rgba(0,0,0,0.9))
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

init_this();
// topBtn functions
if(navigator.userAgent.match(/(iPhone|iPad|Android|IEMobile)/)){
    // Load onMobile only:console.log("User is using a Mobile device");
    window.onscroll = () => {scrollFunction("topBtn");};
}/*else{
    window.onscroll = () => {scrollFunction("player2");}
}*/
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
    
    for(let idx = 0; idx < (stations.length -1); idx++){
        /* here should consider replacing Fides by Mundial
        based on local time */
        const rowDiv = document.createElement("div");
        rowDiv.setAttribute("class","row round-border bottom-10px card");
        rowDiv.setAttribute("id","station_"+idx);
        rowDiv.setAttribute("onclick","init_player("+idx+")");
        rowDiv.style.float = "left";
        /*rowDiv.style.backgroundColor = stations[idx].xtra_info[4];
        /*rowDiv.style.background = card_bkg;*/
        rowDiv.style.height = cardHeight;
        rowDiv.style.width = img_size;
        rowDiv.style.backgroundImage = "url('" + stations[idx].logo +"')";
        rowDiv.style.backgroundRepeat = "no-repeat";
        rowDiv.style.backgroundSize = "cover";
        rowDiv.style.backgroundPosition = "center";
        /*colImg:class=float_left; colArtist:class=float_left*/
        let auxStr = "";
        //if( idx < no_id3 ){
        auxStr = `<div class='info_block'><div><span id='timer_${idx}' class='small glass_circle'> 00:00 </span></div>`;
        //}
        rowDiv.innerHTML = `<div class='colImg pos_rel linear_bkg round-border' id='imgDiv_${idx}'> 
        ${auxStr}<div class='colArtist' id='artistDiv_${idx}'></div></div>`;
        // <!--img src='${stations[idx].logo}' width='${img_size}%' height='${img_size}%'/-->
        /*stations[idx].name + "</span><span>" + stations[idx].xtra_info[0] + "</span></div>";<div class='colTime float_left'><span id='timer_" + idx + "'>00:00</span></div>";*/
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

function playStop(idx){
    svgPlay.addEventListener("click",stopPlay);
    svgPlay.removeEventListener("click",playStop); 
    /*function(){console.log("passing index",idx); stopPlay(idx);});*/
    let getTimer = "", mmss = "";
    for (let jdx = 0; jdx < stations.length -1; jdx++) {
        getTimer = document.getElementById("timer_"+jdx);
        // console.log("timer",jdx,getTimer.innerText);
        if (idx == jdx){
            mmss = getTimer.innerText;
        }
    }
    
    if(audioConnect.paused){
        const stream_info = document.getElementById("title_stat");
        // top_title.innerText = "";
        audioConnect.addEventListener('error',()=>{
            stopPlay();
            // Should be displayed also on GUI
            stream_info.innerText = `Cannot connect to ${stations[idx].name}`;
            // console.error(`Error loading: ${stations[idx].stream_url}`);
        });
        
        audioConnect.src = stations[idx].stream_url;
        audioConnect.play();//if not success -> then timer should not start
        audioConnect.loop = true;
        // Once audio changes this func starts.
        audioConnect.ontimeupdate = updateBar();
        //console.log("audio?",audioConnect.duration());
        //counter starts or restarts mmss = "00:00";
        play_elapsed(parseInt(mmss.substring(0,2)),parseInt(mmss.substring(3,5)),idx); 
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
function stopPlay(){/* param: idx=0 */
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
    //
    const timeNow = new Date();
    let msg = `Streaming will end at ${String(timeNow.getHours() + 1).padStart(2,'0')}:${String(timeNow.getMinutes()).padStart(2,'0')}, ok?`;
    if(confirm(msg)){
        setTimeout(stopPlay,(60*60*1000));//1hour=60*60*1000
        clearInterval(updater);
    }else{
        console.log("Sleepy canceled");return;}
}

async function update_stations(){
    let gotData = "", auxLink = "";

    for(let idx = 0; idx < (stations.length -1); idx++){
        gotData = {
            artist: stations[idx].xtra_info[0],song: stations[idx].name};
        /*nowPlaying:{artist: stations[idx].description, song:stations[idx].name},
            album: stations[idx].xtra_info[0],artwork: stations[idx].logo;*/

        if(idx < no_id3){
            gotData = await get_id3(idx);// {artist,song,artwork}
            //get_artwork(idx);//returns {{artist, song},album,artwork}
        }
        if (idx >= no_id3 && idx <= (no_id3+1)){
            const response = await fetch(stations[idx].id3_info);
            auxLink = await response.text();
            auxLink = auxLink.split("-");
            if(auxLink.length < 2){auxLink.push(stations[idx].name);}
            gotData = {artist: auxLink[1], song:auxLink[0]};
        }
        
        auxLink = "";
        const this_artist = document.getElementById("artistDiv_"+idx);
        //auxLink = "<span class='small'>" + stations[idx].name + "</span>";/*stations[idx].xtra_info[0] +*/
        /*if( idx < no_id3 ){
            auxLink = "<span class='small'>" + stations[idx].name + "</span>"; }*/
        if(isPlaying == idx){
            //auxLink = "";//img_size = 80;played.push(idx); 
            document.title = gotData.artist + "-" + gotData.song;
            document.getElementById("station_"+idx).style.display = "none";
            // console.log("Removing:",isPlaying);
        }else{
            document.getElementById("station_"+idx).style.display = "block";
        }
        
        this_artist.innerHTML = `<span class='bold_medium oneLine'> ${gotData.song}
        </span><span class='oneLine'> ${gotData.artist} </span>`; 
        //+ auxLink;

        /*Update artwork of station by artist
        auxLink = stations[idx].logo;
        const this_img = document.getElementById("imgDiv_"+idx);
        this_img.innerHTML = "<img src='" + auxLink + "' width='"+ img_size + "' height='" + img_size + "'/>";*/

        /* adding album info to <data-?> tag */
        auxLink = gotData.artwork;
        if(idx < lpb_id3){//==0 LaPaz.fm, gotData={artist,song,artwork}
            if(awfulArt.includes(gotData.artwork)){
                auxLink = stations[0].logo;
            }else{
                auxLink = gotData.artwork;
            }
        }else{ auxLink = ""; }
        const this_row = document.getElementById("station_"+idx);
        this_row.setAttribute("data-album",auxLink);
    }
}

async function display_data(idx){
    // reset timer zoey = 3, cindy = 5;
    // Function to request artwork from ext-source, not valid for idx=0
    await update_stations();
    
    const got_row = document.getElementById("station_"+idx);
    const got_artist = got_row.getElementsByClassName("colArtist");
    
    let gotSong = got_artist[0].firstChild.childNodes[0].data;
    let gotArtist = got_artist[0].childNodes[1].firstChild.data;
    if( (typeof gotSong === 'undefined') || (typeof gotArtist === 'undefined')){
        gotSong = "No id3 found"; gotArtist = "No artist";
    }
    
    let gotData = "";
    if(idx >= lpb_id3){ gotData = await get_artwork(idx,gotArtist,gotSong);}

    let this_artwork = gotData.artwork;
    if(idx < lpb_id3){ this_artwork = got_row.getAttribute("data-album"); }
    if(gotData.artwork === ""){
        console.log("Error: No artwork found",idx,gotData.artwork);
        this_artwork = stations[idx].logo;//"assets/cd_case.svg";
    }
    const coverDiv = document.getElementById("artwork");
    /*coverDiv.innerHTML = build_case(idx, got_artist[0].childNodes[1].firstChild.data, gotSong, got_row.getAttribute("data-album"),newArt);*/
    coverDiv.style.backgroundImage = `url("${this_artwork}")`;

    /* append dark_bkg div to coverDiv*/
    coverDiv.innerHTML = `<div id="dark_bkg" class="pos_rel">${build_case(idx, gotArtist, gotSong, gotData.album, this_artwork)}</div>`;//flexy class

    /*const auxDiv = document.getElementById("dark_bkg");
    auxDiv.classList.add("pos_rel");
    auxDiv.style.background = card_bkg;
    auxDiv.style.height = "100vh";
    auxDiv.innerHTML = build_case(idx, gotArtist, gotSong, gotData.album, this_artwork);*/
    // Update artwork of each station_idx Div
    /*const got_artwork  = document.getElementById("imgDiv_" + idx);
    let newArt = this_artwork;//got_artwork[0].firstChild.src;
    got_artwork.innerHTML = "<img src='" + newArt + "' width='" + img_size + 
    "' height='"+ img_size + "'/>"*/
    //console.log("newArt",newArt.substring(newArt.length-3));
    /*if(newArt.substring(newArt.length - 3) === "svg"){
        newArt = stations[idx].logo;//console.log("is it cd_case?");}*/
    
    // Updating player2: elements
    let auxText = "";
    const reloadMe = document.getElementById("reload_this");//"update_stations()"
    reloadMe.setAttribute("onclick","display_data(" + idx + ")");
    reloadMe.innerHTML = reloadImg;
    const cover_art = document.getElementById("cover_art");
    // cover_art.setAttribute("onclick","display_data(" + idx + ")");
    // auxText = `<div class='above_img'> ${reloadImg} </div>`;
    cover_art.innerHTML = `<img src='${this_artwork}' width='48' height='48'/>`
    // ${auxText}`;

    auxText = gotArtist;
    let play_stat = stations[idx].name + " - " + stations[idx].description;
    if(idx > no_id3){
        auxText = stations[idx].xtra_info[0];
        //play_stat = "";
    }
    
    /*let newTitle = gotSong + " - " + gotArtist;
    if(gotSong.length < 21){ newTitle = gotSong; }else{ auxText = ""; }*/
    document.getElementById("cover_title").innerHTML = 
    `<span class="headLabel oneLine"> ${gotSong} </span><span class="oneLine"> ${auxText} </span>`;
    
    /* current song title next to burger menu
    const currDiv = document.getElementById('curr_song');
    let strText = "";    
    if(navigator.userAgent.match(/(iPhone|iPad|Android|IEMobile)/) && (idx < no_id3)){ 
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

async function get_id3(idx){
    const this_output = {
        artist:stations[idx].name,
        song:stations[idx].xtra_info[0],
        artwork:stations[idx].logo};
    let artist = "", artwork = "";
    let data = {}, song = "";
    
    try{
	    if (idx > (lpb_id3 - 1) ){
            //avoid the 1st tree streams
            const response = await fetch(stations[idx].id3_info);
            if(!response.ok){
                throw new Error(`couldnt fetch ${stations[idx].id3_info}`);
            }
	        data = await response.json();
            //song = data["title"].replace(myReg,"").replace(/&/g,"and");
        }else{
            // fmLaPaz, Melodia, stereo streams fail from time to time, thus
            const response = await withTimeout(2000, fetch(stations[idx].id3_info));
            data = await response.json();
            /*.then((response) =>{ return response.json();})
            .then((dato)=>{  // console.log("thisData",dato);
                song = dato["title"].replace(myReg,"").replace(/&/g,"and");
                })
            .catch(err => { console.error("connection timed out",err); });*/
        }
        song = data["title"].replace(myReg,"").replace(/&/g,"and");
	    if(idx < lpb_id3){// prev == 0
            if(Object.keys(data).length < 1){
                console.log("response length",Object.keys(data).length);
                return this_output;
            }
            // console.log("Got",idx,Object.keys(data).length);
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
		    artwork = stations[idx].logo;
	    }
	    return {artist,song,artwork};
    }catch(err){
        console.error(stations[idx].name,err);
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
        closeBtn.setAttribute("class","col10 float_left closeBtn");
        closeBtn.setAttribute("href","javascript:void(0)");
        closeBtn.setAttribute("onclick","closeNav()");
        document.getElementById("stationInfo").style.display = "block";*/
        document.getElementById("amia").style.display = "none";
        document.getElementById("artwork").style.display = "block";
        //document.getElementById("dark_bkg").style.display = "block";
        document.getElementById("controls").style.display = "flex";
        document.getElementById("art_title").style.display = "none";
        document.body.style.overflow = "hidden";
        // top_title.style.display = "none";
    }
}
function closeNav(){
    titleDiv.setAttribute("onclick","openNav()");
    document.getElementById("artwork").style.display = "none";
    //document.getElementById("dark_bkg").style.display = "none";
    document.getElementById("amia").style.display = "block";
    /*document.getElementById("stationInfo").style.display = "none";*/
    document.getElementById("controls").style.display = "none";
    document.getElementById("art_title").style.display = "block";
    // top_title.style.display = "block";
    document.body.style.overflow = "auto";
}
