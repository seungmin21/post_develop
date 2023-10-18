const http = require('http');
const querystring = require('querystring');

http.createServer((req, res) => {
  if (req.method === 'GET' && req.url === '/') {
      res.writeHead(200, {'Content-Type': 'text/html'})
      res.end("");
  } let body = '';
  if (req.method === 'POST' && req.url === '/sub') {
    req.on('data', chunk => {
      body += chunk, toString()
    })
    req.on('end', () => {
      const parseBody = querystring.parse(body)
      const { userName, passWard } = parseBody
      
    })
  }
}).listen(3000)