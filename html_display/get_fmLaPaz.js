//Should fetch data from fm La Paz
const third_rock = "https://feed.tunein.com/profiles/s151799/nowPlaying";
const fmLaPaz = "https://stream.consultoradas.com/cp/get_info.php?p=8042";

display_data();

async function display_data(){
    const key = "title";
    const gotData = await get_url(fmLaPaz);
    const img_art = "<img src='"+gotData.artwork+"' alt='Now Playing'>";
    document.getElementById("currSong").innerHTML = gotData.song;
    document.getElementById("currArt").innerHTML = img_art;
    console.log("Now: "+ gotData.song,gotData.artwork);
}

async function get_url(my_url){
    const response = await fetch(my_url);
    const data = await response.json();
    const song = data['title'];
    const artwork = data['art'];
    return {song,artwork};
}

