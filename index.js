import http from "node:http"

// create a local server
const server = http.createServer()

server.on("request", (request, res)=>{
     res.writeHead(200, { 'Content-Type': 'application/json' });
  res.end(JSON.stringify({
    data: 'Hello World!',
  }));
})

server.listen(8000);