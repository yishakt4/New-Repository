const http = require('http');
const fs = require('fs');
const path = require('path');

const hostname = 'localhost';
const port = 3027;

const server = http.createServer((req, res) => {
  if (req.url === '/home.css') {
    fs.readFile(path.join(__dirname, 'home.css'), (err, data) => {
      if (err) {
        res.statusCode = 500;
        res.end('Error loading CSS file');
      } else {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/css');
        res.end(data);
      }
    });
  } else if (req.url === '/') {
    fs.readFile(path.join(__dirname, 'index.html'), (err, data) => {
      if (err) {
        res.statusCode = 500;
        res.end('Error loading HTML file');
      } else {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/html');
        res.end(data);
      }
    });
  } else {
    res.statusCode = 404;
    res.end('Not Found');
  }
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
