const statins = async ()=>{
    const url = "https://raw.githubusercontent.com/ndlopez/scrapped/main/data/stations.json";
    const resp = await fetch(url);
    if(!resp.ok){
        throw new Error(`couldnt fetch url`);
    }
    const data = await resp.json();
    console.log("running?",data);
    return data;
}