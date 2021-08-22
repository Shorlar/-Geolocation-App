let userLocation = document.getElementById('location');
let timeZone = document.getElementById('timezone');
let isp = document.getElementById('isp');
let address = document.getElementById('address');
let apiSearch = document.querySelector('.api-search');
let button = document.querySelector('.btn');
// let map = document.getElementById('mapid')

window.addEventListener('onload',fetchResult())
button.addEventListener('click', fetchResult)

function fetchResult(e) {
  let value = apiSearch.value
  getIPAddress(value).then((data) => {
    console.log(data);
    userLocation.textContent =` ${data.location.region}, ${data.location.country}`;
    timeZone.textContent = data.location.timezone;
    isp.textContent = data.isp;
    address.textContent = data.ip;
  })
}

function getIPAddress (value) {
    if(value){
         url = `https://geo.ipify.org/api/v1?apiKey=at_Ylj84pglCyFNUi374l2qLE1OB0xE7&    ipAddress=${value}`;
    }
    else{
        url = 'https://geo.ipify.org/api/v1?apiKey=at_Ylj84pglCyFNUi374l2qLE1OB0xE7&    ipAddress='
    }

    let data = fetch(url)
                .then(res => res.json())
                .then(result => result)
                .catch((err) => console.log(err))
    console.log(data);
    return data;
}

let mymap = L.map('mapid').setView([51.505, -0.09], 13);
L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/streets-v11/tiles/512/1/1/0@2x?access_token=pk.eyJ1IjoiYmFhcmJ6IiwiYSI6ImNrczM5azNmbzFzbmEycG1zc2NxZWxiZWcifQ.3-BkrRRSR898Qi7Ll5DMoQ', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox/streets-v11',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: 'pk.eyJ1IjoiYmFhcmJ6IiwiYSI6ImNrczM5azNmbzFzbmEycG1zc2NxZWxiZWcifQ.3-BkrRRSR898Qi7Ll5DMoQ'
}).addTo(mymap);