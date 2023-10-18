const http = require('http');
const querystring = require('querystring');
const fs = require('fs')


http.createServer((req, res) => {
  if (req.method === 'GET' && req.url === '/') {
      fs.readFile('index.html', 'utf8', (err, data) => {
        if(err) {
          console.log(err)
        } else {
          res.writeHead(200, {'Content-Type': 'text/html'})
          res.end(data);
        }
      })
    }
    if (req.method === 'POST' && req.url === '/login') {
      let body = '';
      req.on('data', (chunk) => {
        body += chunk.toString()
      })
      req.on('end', () => {
        const parseBody = querystring.parse(body)
        const { userName, passWord } = parseBody
        
        console.log(`form`, parseBody)
        console.log(`form`, passWord)
        console.log(`form`, userName)
  
        res.writeHead(200, {'Content-Type': 'text/plain'});
        res.end("hello")
      })
    } 
}).listen(3000, () => {
  console.log(`http://localhost:${PORT}/`)
})
let PORT = 3000;