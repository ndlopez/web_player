# Display current song playing on lapaz.fm/thirdRock

Since VLC only displays "live" after opening URL[https://icecasthd.net:6192/live]

I decided to build an small application that displays the current song playing on *www.lapaz.fm* or *thirdrockradio.net*

Update: *lapaz.fm* has changed everything. icecasthd JSON file is no longer available. MacOS notification and Gnome-shell extension NO longer work.

## MacOS version
### Notification App

![Notification](notif_plugin/now_fmLaPaz.png)

Programming language: JavaScript, Bash

Editor: Emacs

### xbar Plugin
1. ThirdRock Radio <get3rdRock.4m.py>

2. FM La Paz <getfmLaPaz.4m.sh>


Environment: MacBookPro / MacOS 15.5

## Gnome-Shell Extension version
### fmLaPaz@moji.physics (Gnome-javascript errors)
![Notification](fmLaPaz@moji.physics/now_fmLaPaz.png)

Programming language: JavaScript

Editor: Emacs

Environment: Panasonic Let'sNote / Fedora 24

## Windows version
Programming language: C#

~~coming as soon as I learn C# connections with JSON~~

I did learn how to code in C#. The Pre-release is available as a ZIP file.

Go to: [https://github.com/ndlopez/NowPlaying]

This version no longer displays current song from fm LaPaz, 'cuz the error mentioned above, I made a version to fetch ThirdRockRadio current Playing song.

## Web version (deprecated)

Open Firefox and check the Developer's log

It is possible to include into any website with some JS code to output JSON data. 
