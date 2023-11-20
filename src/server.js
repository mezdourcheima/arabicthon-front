const express = require('express');
const path = require('path');
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 3001;  // Change port if needed

// Use CORS middleware
app.use(cors());

// Serve static files from the 'build' directory
app.use(express.static(path.join(__dirname, '../build')));

// Define your API routes here
app.get('/api/alriyadh/search', (req, res) => {
  // Handle API logic here
  res.header('Access-Control-Allow-Origin', 'http://localhost:3000'); // Replace with the origin of your React app
  res.header('Access-Control-Allow-Headers', 'apikey'); // Add this line to allow 'apikey' header
  res.json({ message: 'Hello from the server!' });
});


// All other routes should serve the React app
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../build', 'index.html'));
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
