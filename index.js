const http = require('http');
const port = process.env.PORT || 8080;

http.createServer((req, res) => {
  res.writeHead(200, {'Content-Type': 'application/json'});
  res.end(JSON.stringify({
    service: 'dxp-demo',
    status: 'ok',
    platform: 'DxP'
  }));
}).listen(port, () => {
  console.log(`dxp-demo running on port ${port}`);
});
