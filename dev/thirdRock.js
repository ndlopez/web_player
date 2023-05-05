
/*async function get_id3(){
    const response = await fetch(this_url);
    const data = await response.json();
    console.log(data);
}
get_id3();*/

//var url= 'http://anotherdomain/test.json';
const this_url = "https://feed.tunein.com/profiles/s151799/nowPlaying?token=eyJwIjpmYWxzZSwidCI6IjIwMjMtMDUtMDVUMDE6NTg6MTMuNDk0ODAwM1oifQ&itemToken=BgUFAAEAAQABAAEAb28B91ACAAEFAAA&formats=mp3,aac,ogg,flash,html,hls&serial=2e6c5a2e-f4c9-4e99-b977-dfe2d6a5cb58&partnerId=RadioTime&version=5.6001&itemUrlScheme=secure&reqAttempt=1";
/*$.ajax({
    url: this_url,
    crossOrigin: true,
    type: 'GET',
    dataType: "jsonp",
    xhrFields: { withCredentials: true },
    accept: 'application/json'
}).done(function (data) {
    //alert(data);
    console.log(data);
}).fail(function (xhr, textStatus, error) {
    var title, message;
    switch (xhr.status) {
        case 403:
            title = xhr.responseJSON.errorSummary;
            message = 'Please login to your server before running the test.';
            break;
        default:
            title = 'Invalid URL or Cross-Origin Request Blocked';
            message = 'You must explictly add this site (' + window.location.origin + ') to the list of allowed websites in your server.';
            break;
    }
});*/
fetch(this_url,{
    method:'get'
})
.then(resp => resp.json())
.then(jsonData => console.log(jsonData))
.catch(err => {console.log(err)})