// imports express library to create web server
const express = require('express');
// creating an instance of an 'Express' application
const app = express();
// port number that I am using for my server
const port = 3000;

// Import "pages"
const homePage = require('./pages/home'); // home page in the header
const aboutPage = require('./pages/about'); // about us page in the header

// .get: Defines a route, when visited -> sends the result to the browser (for home and about)
app.get('/', (req, res) => {
  res.send(homePage());
});

app.get('/about', (req, res) => {
  res.send(aboutPage());
});

// starts the server + logs the URL to access the site
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
