const http = require('http');
const querystring = require('querystring');

http.createServer((req, res) => {
  if (req.method === 'GET' && req.url === '/') {
      res.writeHead(200, {'Content-Type': 'text/html'})
      res.end("");
  }
}).listen(3000)