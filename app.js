const http = require('http');
const querystring = require('querystring');

http.createServer((req, res) => {
  if (req.method === 'POST' && req.url === '/login') {
    let body = '';
    req.on('data', (chunk) => {
      body += chunk.toString()
    })
    req.on('end', () => {
      const parseBody = querystring.parse(body)
      const { userName, passWard } = parseBody

      res.writeHead(200, {'Content-Type': 'text/html'})
      res.end("");
    })
  }
}).listen(3000)