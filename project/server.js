const express = require('express');
const app = express();
const db = require('./db'); // Database connection

// API routes (examples)
app.get('/api/households', async (req, res) => {
    // ...
});

app.get('/api/food_security', async (req, res) => {
    // ...
});

// Serve static files from the 'public' directory
app.use(express.static('public'));

// Start the server
const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Server listening on port ${port}`));