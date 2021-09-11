#!/usr/bin/bash
myDir=$HOME/Public/get_fmLaPaz/
outFile=$myDir/fmLaPaz_now.json
url=https://icecasthd.net:2199/rpc/lapazfm/streaminfo.get

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
	/usr/bin/curl -s $url 2>$errFile 1> $outFile
	err=`ls -l $errFile | awk -F" " '{print $5;}'`
	if [[ -z $err ]];then
		#cd $myDir
		echo "Offline"
	else
		#echo "Downloaded :)"
		/usr/bin/osascript -l JavaScript disp_nowplaying.applescript
		#echo $(cat $outFile | cut -f3 -d',' | cut -f4 -d'"') > $myFile 
	fi
else
	echo "VLC Closed"
fi
