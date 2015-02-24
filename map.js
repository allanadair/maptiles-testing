var map = L.map('map').setView([32.835, -96.72], 13)

L.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 18
}).addTo(map);

L.tileLayer('tiles/{z}/{x}/{y}.png', {
    maxZoom: 18
}).addTo(map);
