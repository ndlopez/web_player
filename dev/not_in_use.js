/* Not working functions
but helpful as code sample*/
function init_player(stream_idx){
    document.getElementById("title_stat").innerText = stations[stream_idx].name + stations[stream_idx].description;
    const span_name = document.getElementById("nowLabel");
    span_name.innerHTML = "<h2 class='col90 float_left' id='mainTitle'>Now playing</h2>" + 
    "<h2 id='list-icon' class='col10 float_left closeBtn'></h2>";
    switch (stream_idx) {
        case 0:
            stopPlay();
            playStop(0);
            display_data(0);
            // if(navigator.userAgent.match(/(iPhone|iPad|Android|IEMobile)/)){openNav();}
            break;
        case 1:
            stopPlay();
            playStop(1);
            display_data(1);
            //if(navigator.userAgent.match(/(iPhone|iPad|Android|IEMobile)/)){openNav();}
            break;
        case 2:
            stopPlay();
            playStop(2);
            display_data(2);
            break;
        case 3:
            stopPlay();
            playStop(3);
            display_data(3);
            break;
        default:
            stopPlay();
            playStop(4);
            display_data(4);
            break;
    }
    document.title = stations[stream_idx].name;
}

function playStop(idx){
    let get_sub_timer;
    for(let jdx=0;jdx < stations.length; jdx++){
        // this loops disables/enables background and text-color
        //const get_row = document.getElementById("station_"+jdx);
        get_sub_timer = document.getElementById("timer_"+jdx);
        if(idx == jdx){
            //get_row.classList.remove("dashed-border");
            //get_row.classList.add("smoke-bkg");            
            //get_sub_timer.classList.add("headLabel");
            // getTimer = get_sub_timer.innerText;
            mmss = get_sub_timer.innerText;
        }else{
            get_row.classList.remove("smoke-bkg");
            get_row.classList.add("dashed-border");
            get_sub_timer.classList.remove("headLabel");
        }
    }

}