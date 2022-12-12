# Display current playing song

## FM La Paz - <index.html>

![new design](../assets/new_design.png)

Display and store in a playlist on the same page current song and the prev listened songs.<br>
The URL has some security issues (*expired* SSL certificate) but JavaScript's fetch does not seem to care and gets data without problems. I cannot say the same with C#'s json lib.

About the *expired* certificate:<br>
The URL I am using is hosted somewhere on the west (where the Sun sets), where I am the Sun is rising, there's a UTC+9 hour difference. The URL's certificate is renewed every day at midnight, so by the time I am fetching data it already *expired*. Perhaps if the URL's server would be connected to some CloudFlare service, this issue might not matter.

*small issue*<br>
Update time is set to 3min20s (Asummed average length of a song). Because of this sometimes a song might me missed and not included in the Playlist.

To create some [wavy path in CSS3 and SVG](https://css-tricks.com/how-to-create-wavy-shapes-patterns-in-css/#top-of-site)

## ThirdRock Radio <thirdRock.html>

*The Strumbellas - Spirits*

Display and store in a playlist on the same page current song.<br>
JavaScript seems to have a CORS issue with the URL I am fetching data from, it cannot parse anything. So I found a herokuapp website that appends the required *header* to the URL and JavaScript can fetch ~~without problems~~. There are several problems, the herokuapp no longer accepts requests, so this page no longer works :(

As countermeasure, I decided it was too much hassle on the herokuapp server(it says so on its GitHub page), thus I decided to make a Python script to fetch data from the same URL and store it in a JSON file. Python's urllib doesnt care about headers and fetches data without problems :)

I really do not understand why JavaScript has issues with the URL, I mean I wrote some scripts in Python, Gnome-JavaScript, C#, and Shell (using curl) and they fetch data without problems.

Must create a div of 70% n another of 30%, should be active on mobile
and disabled on Desktop

    <ul>
    <li>
        <ul>          
        <li><a title="reload id3-tag" onclick="reloadMe()"><img src="assets/reload-svgrepo.svg" width="32"/><!--reload--></a></li>
        <li><a title="volume on/off"><div><label for="vol_input" onclick="volume_mute(0)">
        <img id="vol_icon" src="assets/volume-svgrepo.svg" width="32"/></label>
        <input id="vol_input" type="range" min="0" max="100" value="80" step="10" oninput="audioConnect.volume = this.value/100" onchange="this.oninput()"></div>
        <!--volume--></a>
        </li>
        <li><a title="stop stream">
            <svg id="i-stop" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="32" height="32" fill="#cc274c" stroke="#cc274c" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><path d="M5 9 L5 29 27 29 27 9 Z" /></svg>
            <!--stop--></a></li>
        </ul>
    </li>
    <li><a id="playBtn" title="start stream">
        <svg id="i-play" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 60 60" width="60" height="60" stroke="#2e4054" fill="#bed2e0">
        <circle class="paused" stroke-width="4" cx="30" cy="30" r="26"/>
        <path class="paused" stroke-linecap="round" stroke-linejoin="round" d="M23 40 L23 20 43 30Z"/></svg>
        <span id="timerr">00:00</span></a></li>
    <li id="now_song">Alive and Kicking<br/>Simple Minds</li>
    <li><a target="_blank" href="/" title="about this">
        <!--span id="timerr">00:00</span-->
        <div id="gifElm" class="equalizer no-audio"><div>
        <span></span><span></span><span></span><span></span><span></span><span></span>
        </div></div></a>
        </li>
    </ul>
