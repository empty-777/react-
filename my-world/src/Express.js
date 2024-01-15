
const express = require('express');
const cors = require('cors');
const app = express();

// Enable CORS for your domain (replace 'http://localhost:3000' with your React app's domain)
app.use(cors({
    origin: 'http://localhost:3000',
    methods: 'GET', // Specify the allowed HTTP methods
}));

// Serve your JSON data
app.get('http://localhost:3031/users', (req, res) => {
    // Read and serve your JSON data from a file
    const jsonData = require('./db.json'); // Replace with the path to your JSON file
    res.json(jsonData);
});

const port = 3031;
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
