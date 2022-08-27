#!/usr/bin/python3
# ignore verify peer
# curl -k https://stream.consultoradas.com/cp/get_info.php?p=8042
# <xbar.title>NowPlaying on ThirdRock</xbar.title>
# <xbar.version>0.2</xbar.version>
# <xbar.author>Diego Lopez</xbar.author>
# <xbar.author.github>ndlopez</xbar.author.github>
# <xbar.desc>Fetch current song playing on thirdRock from tune.in</xbar.desc>
# <xbar.image></xbar.image>
# <xbar.dependencies>python3,json,urllib</xbar.dependencies>
# Add this file to: /Users/username/Library/Application Support/xbar/plugins

from urllib.request import urlopen
from urllib.error import URLError
import json

this_url = "https://stream.consultoradas.com/cp/get_info.php?p=8042"
that_url = "https://feed.tunein.com/profiles/s151799/nowPlaying"

def get_info(param):
    try:
        currData = json.load(urlopen(that_url,context=None))
    except URLError:
        return False

    return currData[param]

jsonHead = get_info('Header')
currSong = jsonHead['Subtitle']
dispArtist=[]
if len(currSong) > 30:
    dispArtist=currSong.split("-")
else:
    dispArtist.append(currSong)
print("♫",dispArtist[0])
print("---\nNow playing on Third Rock.")
print(dispArtist)
