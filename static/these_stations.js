/*
    const stream_url = "https://rfcmedia3.streamguys1.com/thirdrock.mp3";
    history: https://player.181fm.com/external.php?http%3A%2F%2Flisten.181fm.com%3A8443%2Fice_history.php?h=listen.181fm.com&p=7080&i=181-90salt_128k.mp3&https=&f=ice&c=802268
    thebuzz_hist: https://player.181fm.com/external.php?http%3A%2F%2Flisten.181fm.com%3A8443%2Fice_history.php?h=listen.181fm.com&p=7080&i=181-buzz_128k.mp3&https=&f=ice&c=128773
    melodia:https://radiomelodia.fm/?qtdir=2968&qtproxycall=Mjk2OFstXWh0dHBzOi8vc3RyZWFtLmNvbnN1bHRvcmFkYXMuY29tLzgxOTQvc3RyZWFt&icymetadata=1&_=1684549254958
*/
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
        description:"is a non-commercial, independent, listener-supported station from North Carolina, US",
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
        site: "Radio Cross from Kobe, Japan",
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
        description: "La red privada de televisi&oacute;n m&aacute;s antigua e importante de Bolivia.",
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
        description: "Noticias de Sucre, Bolivia y el mundo.",
        site: "https://correodelsur.com/",
        xtra_info: ["Noticias y m\u00FAsica del ayer y hoy en espa\u00F1ol", "Espa\u00F1ol",128,true,"#014171"] 
    },{
        name: "Radio Mundial",
        logo: "assets/mundial.png",
        stream_url: "https://streaming1.locucionar.com/proxy/radiomundial?mp=/stream",
        id3_info: "",
        description: "para amantes de la m\u00FAsica que desean disfrutar de ritmos actuales y los grandes exitos.",
        site: "",
        xtra_info: ["M\u00FAsica del ayer y hoy en espa\u00F1ol", "Espanol",64,true,"#014171"] 
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
"https://i.scdn.co/image/ab67616d0000b273e8e71ebc372dfa978fc0581f",
"https://i.scdn.co/image/ab67616d0000b27345c679ef4bfdb875b5151ad1"];

const svg_elm = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 36 36" width="36" height="36" stroke="#2e4054" fill="#bed2e0" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><circle class="paused" cx="18" cy="18" r="18"/><path fill="#2e4054" class="paused" d="M13 8 L13 28 26 18 Z" /></svg>';
const svg_btn = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 60 60" width="60" height="60" stroke="#2e4054" fill="#bed2e0">'
const svg_clock = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="28" height="28" fill="#b58900" stroke="#bed2e0" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><circle cx="16" cy="16" r="14" /><path d="M16 8 L16 16 20 20" /></svg>';
const pauseImg = '<path d="M20 40 L20 20 25 20 25 40Z M35 40 L35 20 40 20 40 40Z" />';
const circleImg = '<circle class="paused" stroke-width="4" cx="30" cy="30" r="26"/>';
const playImg  = '<path class="paused" stroke-linecap="round" stroke-linejoin="round" d="M23 40 L23 20 43 30Z"/>'
const stopImg = '<path d="M20 40 L20 20 40 20 40 40 Z" />';
const reloadImg = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="32" height="32" fill="none" stroke="#bed2e0" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><path d="M29 16 C29 22 24 29 16 29 8 29 3 22 3 16 3 10 8 3 16 3 21 3 25 6 27 9 M20 10 L27 9 28 2" /></svg>';

const svg_moon = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="32" height="32" fill="#b58900" stroke="#bed2e0" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><path d="M14 2C 9 2 3 7 3 15 3 23 9 29 17 29 25 29 30 23 30 18 19 25 7 13 14 2Z" /></svg>';
const svg_ff = '<svg id="next_play" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 42 42" width="42" height="42" fill="#bed2e0" stroke="#bed2e0" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><path d= "M12 30 L12 10 30 20Z M31 30 L31 10"/></svg>';
const defaultImg = "https://lastfm.freetls.fastly.net/i/u/300x300/accb1e554ea0afbac1fcc02a7413ed87.png";
const card_bkg = "rgba(0,0,0,0.75)";//linear-gradient(rgba(0,0,0,0),rgba(0,0,0,0.9))
