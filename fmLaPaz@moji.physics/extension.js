/*
  Gnome-Shell Extension
  Display current song from LaPaz.fm
  Data fetched from icecast.
  References:
  [1] https://gitlab.com/justperfection.channel/how-to-create-a-gnome-shell-extension/-/tree/master/example@example.com
  [2] https://smasue.github.io/gnome-shell-tw
  Developer: ndlopez (https://github.com/ndlopez)
  Last updated on 2021-09-06
*/
const {St,GLib} = imports.gi;
const Main = imports.ui.main;
const Soup = imports.gi.Soup;
const Lang = imports.lang;
const Mainloop = imports.mainloop;
const Clutter = imports.gi.Clutter;
const PanelMenu = imports.ui.panelMenu;

const streamURL = 'https://icecasthd.net:2199/rpc/lapazfm/streaminfo.get'
let _httpSession;

const NowPlaying = new Lang.Class({
    Name:"NowPlaying",Extends:PanelMenu.Button,
    _init:function(){
        this.parent(0.0,"Now Playing",false);
        this.buttonText= new St.Label({
            text:_("FM La Paz"),
            y_align:Clutter.ActorAlign.CENTER
        });
        this.actor.add_actor(this.buttonText);
        this._refresh();
    },
    _refresh:function(){
        this._loadData(this._refreshUI);
        this._removeTimeout();
        this._timeout = Mainloop.timeout_add_seconds(240,Lang.bind(this,this._refresh));
        return true;
    },
    _loadData:function(){
        _httpSession = new Soup.Session();
        let msg = Soup.Message.new('GET',streamURL);
        msg.connect('got_headers', Lang.bind(this, function(message) {
            log("FM La Paz status: "+message.status_code);
        }));
        _httpSession.queue_message(msg,Lang.bind(this,function(_httpSession,msg){
            if (msg.status_code !== 200){
            return;}
            let json = JSON.parse(msg.response_body.data);
            this._refreshUI(json);
        }));
    },
    _refreshUI:function(data){
        var musicChar = String.fromCharCode(9835);
        var now = GLib.DateTime.new_now_local();
        var hora = now.format("%H:%M ");
        let currSong = data['data'][0]['song'];
        //if (currSong == 'Ads - Block'){extend updating time}
        let listenNow = data['data'][0]['listeners'] + musicChar;

        log(hora+"Now Playing "+currSong);
        Main.notify(hora+" Now Playing on FM La Paz",currSong);
        this.buttonText.set_text(listenNow);
    },
    _removeTimeout:function(){
        if(this._timeout){
            Mainloop.source_remove(this._timeout);
            this._timeout=null;
        }
    },
    stop:function(){
        if(_httpSession !== undefined){
            _httpSession.abort();
        }
        _httpSession=undefined;
        if(this._timeout){
            Mainloop.source_remove(this._timeout);
        }
        this._timeout=undefined;
        this.menu.removeAll();
    }
});

let nowPlayingMenu;

function init(){
}

function enable(){
    nowPlayingMenu=new NowPlaying;
    Main.panel.addToStatusArea('np-indicator',nowPlayingMenu);
}

function disable(){
    nowPlayingMenu.stop();
    nowPlayingMenu.destroy();
}
