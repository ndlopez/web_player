//Should fetch data from fm La Paz
const third_rock = "https://feed.tunein.com/profiles/s151799/nowPlaying";
const fmLaPaz = "https://stream.consultoradas.com/cp/get_info.php?p=8042";

let origTitle = document.title;

//change title when focus
function oldTitle(){
    document.title = origTitle;
}
function newTitle(thisTitle){
    document.title = thisTitle;
}

//window.onfocus = newTitle(display_data());
//window.onfocus = oldTitle();

display_data();


async function display_data(){
    const key = "title";
    const gotData = await get_url(fmLaPaz);
    const img_art = "<img src='"+gotData.artwork+"' alt='Now Playing' width=350>";
    document.getElementById("currSong").innerHTML = gotData.song;
    document.getElementById("currArt").innerHTML = img_art;
    document.title = gotData.song;
    //console.log("Now: "+ gotData.song,gotData.artwork);
}

async function get_url(my_url){
    const response = await fetch(my_url);
    const data = await response.json();
    const song = data['title'];
    const artwork = data['art'];
    return {song,artwork};
}

