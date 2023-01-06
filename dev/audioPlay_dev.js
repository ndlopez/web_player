// No longer working
/*setInterval(*/async function buildList(){
    /* Wait 'til display_data is finished, then get info from h2 elems */
    await display_data();
    const parentDiv = document.getElementById("music");
    const divList = document.getElementById("playList");
    // Getting data from nowPlaying div
    const gotDiv = document.getElementById('nowPlaying');
    const song = gotDiv.getElementsByTagName("h2");
    let noSec = song[2].innerText;//time HH:MM:SS
    noSec = (noSec.length < 8)? noSec.substring(0,4):noSec.substring(0,5);
    //noSec = noSec.substring(0,5);
    //console.log(song[2].innerText);
    //const playTime = song[2].innerHTML;//.split(" ");
    let artwork = gotDiv.getElementsByTagName("div");
    artwork = artwork[0].innerHTML.split('"');

    //var thisSong = song[1].innerHTML; // .split("-");
    
    const mainDiv = document.createElement("div");
    mainDiv.setAttribute("class","row");
    //divList.setAttribute("class","row");

    const divText = document.createElement("div");
    divText.setAttribute("class","colArtist");

    let gotArtist = song[0].innerText;
    if(gotArtist === "Radio Online" || gotArtist === "LA CASCADA"){
        gotArtist = "CM or Station Id";
        artwork[1] = "../assets/cd-case.svg";
    }
    if((artwork[1] === awfulArt[0]) || (artwork[1] === awfulArt[1]) || (artwork[1] === awfulArt[2]) || artwork[1] === awfulArt[3]){
        artwork[1] = "../assets/cd-case.svg";
        gotArtist = "Sorry, artwork not found in DB";
    }
    const divColImg = document.createElement("div");
    divColImg.setAttribute("class","colImg");
    divColImg.style.backgroundImage = "url('"+ artwork[1] + "')";
    divColImg.style.backgroundSize = "75px";
    divColImg.style.backgroundRepeat = "no-repeat";
    //divColImg.innerHTML = "<img src='"+ artwork[1]+"' width='75'>";
    //it works but it does not turn off :(
    /*if(upCount == myList.length){
        divColImg.innerHTML = "<img src='assets/bars.svg' width='70'>";
    }else{
        console.log("no bars here :(");
        divColImg.innerHTML = "";}*/
    divText.innerHTML = "<span>" + gotArtist + "</span><span>" + song[1].innerText +"</span>";

    const divTime = document.createElement("div");
    divTime.setAttribute("class","colTime");
    divTime.innerHTML = "<span>" + noSec + "</span>";
    
    mainDiv.appendChild(divColImg);
    mainDiv.appendChild(divText);
    mainDiv.appendChild(divTime);

    divList.appendChild(mainDiv);
    //document.body.appendChild(divList);
    parentDiv.appendChild(divList);

    /*Schedule list
    const schedLiz = document.getElementById("schedList");
    const newDate = new Date();
    schedLiz.innerHTML = "<h2>Later today<br/>"+ days[newDate.getDay()] + "</h2>";*/

    /*Saving data into array
    timeStamp.push(noSec);
    songs.push(song[0].innerText + "-" + song[1].innerText);
    artImg.push(artwork[1]);
    tmpData = {"time": timeStamp[upCount], "song": songs[upCount], "artwork": artImg[upCount]};
    myList.push(tmpData);
    //console.log(upCount,myList);
    export_to_file(myList);
    var dLink = document.getElementById("downLink");
    dLink.innerHTML = "<img src='assets/down_cloud.svg' width='32'/>";
    upCount++;*/

}/*,upTime);*/

myDiv.src = 'javascript:void((function(){var script = document.createElement(\'script\');' +
  'script.innerHTML = "(function() {' +
  'document.open();document.domain=\'' + document.domain +
  '\';document.close();})();";' +
  'document.write("<head>" + script.outerHTML + "'+
	'</head><body></body>");})())';
myDiv.contentWindow.document.write(updater);
myDiv.contentWindow.document.write(calljs);
myDiv.contentWindow.document.write(catInfo);
    ///\'<div><h2>'+gotData.song+'</h2></div>'
console.log("Now: "+ gotData.song,gotData.artwork);

