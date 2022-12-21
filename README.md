# Display current song playing on laPaz.fm/thirdRock

[live demo](https://ndlopez.github.io/web_player/)

Since VLC displays *stream* after opening [lapaz.fm](https://stream.consultoradas.com/8042/stream) or *thirdrock-sgplayer* when opening [thirdRock](https://rfcmedia3.streamguys1.com/thirdrock-sgplayer.aac) Thus, I decided to build a script that displays the current song playing on *lapaz.fm* or *thirdrockradio.net*

Update: *www.lapaz.fm* has changed everything. icecasthd JSON file is no longer available. 

Dev only: Open *index.html* in Firefox and access *Web Developer Tools* from Settings Menu.

By clicking on the cloud icon, it is possible to download the playlist in JSON format, obviously from the moment the page was opened.

<!--div id="player" style="position: fixed;bottom: 0;z-index: 100;float:none;box-sizing: content-box;">
  <ul>
    <li><a><div><label for="vol_input" onclick="volume_mute(0)">
      <img id="vol_icon" src="assets/volume-svgrepo.svg" width="38"/></label>
      <input id="vol_input" class="volume-vertical" type="range" min="0" max="100" value="80" step="10" oninput="audioConnect.volume = this.value/100" onchange="this.oninput()"></div>
      <-volume-></a>
    </li>
    <li><a title="back to home" href="../index.html">
      <svg id="prev_play" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 42 42" width="42" height="42" fill="#bed2e0" stroke="#2e4054" stroke-linecap="round" stroke-linejoin="round" stroke-width="4">
        <circle stroke-width="0" cx="21" cy="21" r="20"/><-M30 30 L30 10 12 20Z M11 30 L11 10->
        <path fill= "#2e4054" d="M28 28 L28 14 15 21Z M14 28 L14 14"/></svg>
      </a></li>
    <li><a id="playBtn" title="start stream"></a></li>
    <li><a href="fmlapaz.html" title="Go to FM LaPaz">
      <svg id="next_play" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 42 42" width="42" height="42" fill="#bed2e0" stroke="#2e4054" stroke-linecap="round" stroke-linejoin="round" stroke-width="4">
      <-path d="M9 25 L25 16 9 7Z M25 25 L25 7"/"M12 30 L12 10 30 20Z M31 30 L31 10"->
      <circle stroke-width="0" cx="21" cy="21" r="20"/>
      <path fill="#2e4054" d="M15 28 L15 14 25 21Z M28 28 L28 14" /></svg></a>
    </li>        
    <li><a target="_blank" href="/" title="about this">
      <div id="gifElm" class="equalizer no-audio"><div>
        <span></span><span></span><span></span><span></span><span></span><span></span>
        </div></div></a>
    </li>
  </ul>
</div-->

<!--svg width="18px" height="20px" viewBox="0 0 8 10" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <path transform="translate(-1682.000000, -935.000000)" d="M1687,935 L1687,945 L1690,945 L1690,935 L1687,935 Z M1682,935 L1682,945 L1685,945 L1685,935 L1682,935 Z" fill="currentColor"></path></svg>
    <svg id="sub_play" viewBox="0 0 16 16" width="32px" height="32px" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <path class="paused" d="M12.322 7.576a.5.5 0 010 .848l-6.557 4.098A.5.5 0 015 12.098V3.902a.5.5 0 01.765-.424l6.557 4.098z" fill="currentColor"></path></svg-->