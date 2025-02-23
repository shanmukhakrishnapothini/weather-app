function submit(){
    const input=document.getElementById('input').value
    console.log(input)
    const location=("https://api.openweathermap.org/data/2.5/weather?q="+input+"&appid=bfb12dd01a60ae5bd8c4e6c3e73af357")
const response=fetch(location)
.then((response)=>{
    const data=response.json()
    return data
}).then((data)=>{
    console.log(data)
    console.log(data.base)
    const sky=document.getElementById('sky')
    sky.innerText=data.weather[0].description
    const name=document.getElementById('name')
    name.innerText=data.name
    const lon=document.getElementById('lon')
    lon.innerText=data.coord.lon
    const lat=document.getElementById('lan')
    lat.innerText=data.coord.lat
    const temp=document.getElementById('temp')
    temp.innerText=Math.floor((data.main.temp)-275)+"°C"
    const  feels_like=document.getElementById('feels_like')
    feels_like.innerText=Math.floor((data.main. feels_like)-273)+"°C"
    const  temp_min=document.getElementById('temp_min')
    temp_min.innerText=Math.floor((data.main. temp_min)-273)+"°C"
    const  temp_max=document.getElementById('temp_max')
    temp_max.innerText=Math.floor((data.main. temp_max)-273)+"°C"
    const  wind=document.getElementById('wind')
    wind.innerText=data.wind.speed
    // the two lines are to be explained
    let timestamp = data.sys.sunrise;
    let date = new Date(timestamp * 1000);
    //
    const sunset=document.getElementById('sunset')
    sunset.innerText=date.toUTCString();
    // the two lines are to be explained
    let timestamp1 = data.sys.sunset;
    let date1 = new Date(timestamp1 * 1000);
    //
    const sunrise=document.getElementById('sunrise')
    sunrise.innerText=date1.toUTCString();
    console.log(data)
    console.log(data.base)
    const sky1 = document.getElementById('sky1')
    sky1.innerText = data.weather[0].description
    const name1 = document.getElementById('name')
    name1.innerText = data.name
    const lon1 = document.getElementById('lon1')
    lon1.innerText = data.coord.lon
    const lat1 = document.getElementById('lan1')
    lat1.innerText = data.coord.lat
    const temp1 = document.getElementById('temp')
    temp1.innerText = Math.floor((data.main.temp) - 275) + "°C"
    const feels_like1 = document.getElementById('feels_like1')
    feels_like1.innerText = Math.floor((data.main.feels_like) - 273) + "°C"
    const temp_min1 = document.getElementById('temp_min1')
    temp_min1.innerText = Math.floor((data.main.temp_min) - 273) + "°C"
    const temp_max1 = document.getElementById('temp_max1')
    temp_max1.innerText = Math.floor((data.main.temp_max) - 273) + "°C"
    const wind1 = document.getElementById('wind1')
    wind1.innerText = data.wind.speed
    // the two lines are to be explained
    let timestamp2 = data.sys.sunrise;
    let date2 = new Date(timestamp1 * 1000);
    //
    //
    const sunset1 = document.getElementById('sunset1')
    sunset1.innerText = date1.toUTCString();
    // the two lines are to be explained
    let timestamp3 = data.sys.sunset;
    let date3 = new Date(timestamp2 * 1000);
    //
    //
    const sunrise1 = document.getElementById('sunrise1')
    sunrise1.innerText = date2.toUTCString();

}).catch(()=>{
    console.log("manchi location ivvu bro")
})
}