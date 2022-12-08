# Display current song playing on laPaz.fm/thirdRock

[live demo](https://ndlopez.github.io/fmLaPazNow/)

Since VLC displays *stream* after opening [lapaz.fm](https://stream.consultoradas.com/8042/stream) or *thirdrock-sgplayer* when opening [thirdRock](https://rfcmedia3.streamguys1.com/thirdrock-sgplayer.aac) Thus, I decided to build a script that displays the current song playing on *lapaz.fm* or *thirdrockradio.net*

Update: *www.lapaz.fm* has changed everything. icecasthd JSON file is no longer available. ~~MacOS notification and Gnome-shell extension NO longer work~~. Made them work by running a Shell script, store the info as JSON file and another JS script will display it.

## Web version
click on live demo link above

Dev only: Open *index.html* in Firefox and wait for 3minutes or so. The playlist will populate and update every 3minutes.

By clicking on the cloud icon, it is possible to download the playlist in JSON format, obviously from the moment the page was opened.
