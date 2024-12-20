// Mapbox Access Token 
mapboxgl.accessToken = 'pk.eyJ1Ijoiem0xNDAiLCJhIjoiY200d3dwYXpmMGpyaTJpcDdkcnkxYXFiNSJ9.kxZQSy0MiPVg_OE1NqyI0Q'; 

// Initialise Map
const map = new mapboxgl.Map({
    container: 'map-container',
    style: 'mapbox://styles/mapbox/streets-v11',
    center: [22.9375, -30.5595], // Centered on South Africa
    zoom: 5
});

// Load GeoJSON data
fetch('assets/data/SouthAfricaGeoJSON.json')
    .then(response => response.json())
    .then(data => {
        // Add province data as a source
        map.on('load', () => {
            map.addSource('provinces', {
                type: 'geojson',
                data: data
            });

            // Add province layer
            map.addLayer({
                'id': 'province-fills',
                'type': 'fill',
                'source': 'provinces',
                'paint': {
                    'fill-color': '#627BC1',
                    'fill-opacity': 0.5
                }
            });
        });
    });

// Event listener for filters (update map)
document.getElementById('filter-form').addEventListener('submit', (event) => {
    event.preventDefault();
    const province = document.getElementById('province').value;
    const geoType = document.getElementById('geo_type').value;
    const income = document.getElementById('income').value;

    // Filter and update map (Implementation needed)
    // ...
});