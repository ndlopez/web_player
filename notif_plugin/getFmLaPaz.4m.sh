#!/bin/bash
# <xbar.title>NowPlaying</xbar.title>
# <xbar.version>0.2</xbar.version>
# <xbar.author>Diego Lopez</xbar.author>
# <xbar.author.github>ndlopez</xbar.author.github>
# <xbar.desc>Fetch data from lapaz.fm and scrapes current song and artwork</xbar.desc>
# <xbar.image>https://github.com/ndlopez/fmLaPazNow/raw/main/notif_plugin/fmLaPaz_plugin_prev.png</xbar.image>
# <xbar.dependencies>bash,curl,sed,cut</xbar.dependencies>
# <xbar.abouturl>https://github.com/ndlopez/fmLaPazNow/notif_plugin/</xbar.abouturl>

url=https://stream.consultoradas.com/cp/get_info.php?p=8042

gotData=`/usr/bin/curl -k --silent $url`
#gotData=`cat fmLaPaz_now.json`

if [ ! $? == 0 ];then
    echo "URL error"
    echo "---"
    echo "Cannot access lapaz.fm"
fi

currSong=$(echo $gotData | cut -f4 -d'"')
currArtwork=$(echo $gotData | cut -f8 -d'"' | sed 's%\\%%g')
getArtwork=`curl --silent ${currArtwork} | base64`

echo $currSong
echo "---"
#echo ${currArtwork//\\/}
echo "| image=${getArtwork}"
echo "Now playing on FM La Paz"
