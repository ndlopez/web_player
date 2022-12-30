# Display current playing song

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
