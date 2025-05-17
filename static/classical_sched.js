
const wcpe_sched = [
    {
        start: 13,end:18,
        name: "Sleepers awake",
        playlist: ["Berceuse elegiaque, Op. 42","Double Concerto for Violin & Cello in A minor, Op. 102","Flute Sonata in G","Incidental Music from Peer Gynt, Op. 23"],
        day: [0,1,2,3,4,5,6]
    },{
        start: 19,end:7,
        name: "Weekend Classics",
        playlist: ["Concerto in D minor for Flute & Violin, RV 514","String Quartet No. 21 in D, K. 575","The Erl-King, D. 328","Capriccio italien, Op. 45"],
        day: [6]
    },{
        start: 8,end:13,
        name: "Saturday Evening Request Program",
        playlist: ["Concerto in D minor for Flute & Violin, RV 514","String Quartet No. 21 in D, K. 575","The Erl-King, D. 328","Capriccio italien, Op. 45"],
        day: [6]
    },{
        start: 21,end:0,
        name: "Great Sacred Music",
        playlist: ["Concerto in D minor for Flute & Violin, RV 514","String Quartet No. 21 in D, K. 575","The Erl-King, D. 328","Capriccio italien, Op. 45"],
        day: [0]
    },{
        start: 1,end:6,
        name: "Weekend Classics",
        playlist: ["Concerto in D minor for Flute & Violin, RV 514","String Quartet No. 21 in D, K. 575","The Erl-King, D. 328","Capriccio italien, Op. 45"],
        day: [0]
    },{
        start: 7,end:9,
        name: "Preview",
        playlist: ["Concerto in D minor for Flute & Violin, RV 514","String Quartet No. 21 in D, K. 575","The Erl-King, D. 328","Capriccio italien, Op. 45"],
        day: [0]
    },{
        start: 10,end:12,
        name: "Peaceful Reflections",
        playlist: ["Hymne, Op.34 No.2","Chorale Prelude on Sleepers, Awake!, Op. 67 No. 41"],
        day: [0]
    },{
        start: 19,end:22,
        name: "Rise and Shine",
        playlist: ["Concertino in B flat","Sirens from Nocturnes"],
        day: [1,2,3,4,5]
    },{
        start: 23,end:1,
        name: "Classical Cafe",
        playlist: [""],
        day: [1,2,3,4,5]
    },{
        start: 2,end:4,
        name: "As You Like It",
        playlist: ["Symphony No. 6 in D, Op. 60"],
        day: [1,2,3,4,5]
    },{
        start: 5,end:7,
        name: "Allegro!",
        playlist: ["Johannes Brahms-Tragic Overture, Op. 81"],
        day: [1,2,3,4,5]
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
