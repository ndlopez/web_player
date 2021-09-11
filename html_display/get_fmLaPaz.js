//Should fetch data from fm La Paz
fetch('https://icecasthd.net:2199/rpc/lapazfm/streaminfo.get')
.then((response) => {
	return response.json()
})
.then((json_data)=>{
console.log(json_data['data'][0]['song'])
})
.catch((err)=>{
	console.log("Couldnt fetch json_data")
})

