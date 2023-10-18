const http = require('http');
const fs = require('fs');

http.createServer((req, res) => {
  if (req.method === 'GET' && req.url === '/') {
   fs.readFile('index.html', 'utf8', (err, data) => {
    if (err) {
      throw err
    } else {
      res.writeHead(200, {'Content-Type': 'text/html'})
      res.end(data);
    }
  })
 } 
}).listen(3000)