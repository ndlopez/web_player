/*
  New thirdRock@moji.physics Gnome 42 extension
*/
'use strict';

const {St, Gio, Clutter, Soup, GLib} = imports.gi;

const ExtensionUtils = imports.misc.extensionUtils;
const Me = ExtensionUtils.getCurrentExtension();
const Main = imports.ui.main;
const PanelMenu = imports.ui.panelMenu;

let panelBtn;
let panelBtnLbl;
let _httpSession;
let _currSong;
let sourceId = null;
const myUrl="https://feed.tunein.com/profiles/s151799/nowPlaying";
const upTime = 238; // seconds

function init(){
}

function enable(){
    panelBtn = new St.Bin({
	style_class : "panel-btn",
    });

    get_json_async();
    Main.panel._rightBox.insert_child_at_index(panelBtn,0);
    sourceId = GLib.timeout_add_seconds(GLib.PRIORITY_DEFAULT,upTime,()=>{
	get_json_async();
	return GLib.SOURCE_CONTINUE;
    });

}

function disable(){
    Main.panel._rightBox.remove_child(panelBtn);
    panelBtnLbl = null;
    _httpSession = null;
    _currSong = null;
    if(panelBtn){
	panelBtn.destroy();
	panelBtn = null;
    }
    if(sourceId){
	GLib.Source.remove(sourceId);
	sourceId = null;
    }
}

function get_json_async(){
    var currTime = GLib.DateTime.new_now_local();
    var heure = currTime.format("%H:%M");
    
    if(_httpSession === undefined){
	_httpSession = new Soup.Session();
    }else{
	_httpSession.abort();}

    let msg = Soup.form_request_new_from_hash(
	'GET',myUrl,{});

    _httpSession.queue_message(msg,()=>{
	try{
	    if(!msg.response_body.data){
		panelBtnLbl = new St.Label({
		    text: _currSong,
		    y_align:Clutter.ActorAlign.CENTER,
		});
		panelBtn.set_child(panelBtnLbl);
		_httpSession.abort();
		return;
	    }
	    let gotData = JSON.parse(msg.response_body.data);
	    _currSong = gotData["Header"]["Subtitle"];
	    /*Manage string here, split by '-' if song is too long*/
	    panelBtnLbl = new St.Label({
		text: String.fromCharCode(9835) + heure + " thirdRock",
		y_align: Clutter.ActorAlign.CENTER,
	    });
	    panelBtn.set_child(panelBtnLbl);
	    Main.notify(heure+" Now Playing on ThirdRock Radio",_currSong);
	    _httpSession.abort();
	    return;
	}catch(e){
	    panelBtnLbl = new St.Label({
		text: _currSong,
		y_align: Clutter.ActorAlign.CENTER,
	    });
	    panelBtn.set_child(panelBtnLbl);
	    _httpSession.abort();
	    return;	    
	}
    });
    return;
}
