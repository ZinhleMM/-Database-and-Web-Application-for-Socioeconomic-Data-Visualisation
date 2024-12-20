// Placeholder chart data (replace with API data)
const barChartData = {
    // ...
};

const lineChartData = {
    // ...
};

// Create charts
const barChartCtx = document.getElementById('bar-chart').getContext('2d');
new Chart(barChartCtx, {
    type: 'bar',
    data: barChartData
});

const lineChartCtx = document.getElementById('line-chart').getContext('2d');
new Chart(lineChartCtx, {
    type: 'line',
    data: lineChartData
});