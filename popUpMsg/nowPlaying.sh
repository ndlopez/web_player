#!/usr/bin/bash
myDir=$HOME/Public/fmLaPazNow/notif_plugin
outFile=$myDir/fmLaPaz_now.json
old_url=https://icecasthd.net:2199/rpc/lapazfm/streaminfo.get
url=https://stream.consultoradas.com/cp/get_info.php?p=8042

if [ ! -d $myDir ];then
    echo "$myDir Folder not found :("
    exit 2
fi

errFile=$myDir/err.log
if [ -f $errFile ];then
	rm $errFile
fi

getVLC=`/usr/bin/pgrep VLC`
if [ ! -z $getVLC ];then
    cd $myDir
	/usr/bin/curl -k --silent $url 2>$errFile 1> $outFile
	err=`ls -l $errFile | awk -F" " '{print $5;}'`
	if [[ -z $err ]];then
		#cd $myDir
		echo "Offline"
	else
		#echo "Downloaded :)"
		/usr/bin/osascript -l JavaScript nowplaying.js
		#echo $(cat $outFile | cut -f3 -d',' | cut -f4 -d'"') > $myFile 
	fi
else
	echo "VLC Closed"
fi
