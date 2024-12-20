// Mapbox Access Token
mapboxgl.accessToken = 'YOUR_MAPBOX_ACCESS_TOKEN'; // Replace!

// Initialide Map
const map = new mapboxgl.Map({
    container: 'map-container',
    style: 'mapbox://styles/mapbox/streets-v11',
    center: [22.9375, -30.5595], // Centred on South Africa
    zoom: 5
});

// Sample Chart Data (Replace with API data)
const chartData = {
    labels: ['Eastern Cape', 'Free State', 'Gauteng', 'KwaZulu-Natal', 'Limpopo', 'Mpumalanga', 'North West', 'Northern Cape', 'Western Cape'],
    datasets: [{
        label: 'Average Household Size',
        data: [3.5, 3.2, 3.8, 4.1, 3.9, 3.6, 3.4, 3.0, 3.7],
        backgroundColor: 'rgba(54, 162, 235, 0.2)',
        borderColor: 'rgba(54, 162, 235, 1)',
        borderWidth: 1
    }]
};

// Create Chart
const ctx = document.getElementById('bar-chart').getContext('2d');
const myChart = new Chart(ctx, {
    type: 'bar',
    data: chartData,
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});

// Event listener for filters (update map and charts)
document.getElementById('filter-form').addEventListener('submit', (event) => {
    event.preventDefault();
    const province = document.getElementById('province').value;
    const geoType = document.getElementById('geo_type').value;
    const income = document.getElementById('income').value;

    // Update map and charts based on filter values (Implementation needed)
    // ...
});
