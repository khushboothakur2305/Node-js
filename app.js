const http = require("http");
const server = http.createServer((req, res) => {
  console.log(req.url, req.method);
  res.setHeader("Content-type", "text/html");
  res.write(
    "<html><head>My first Server</head><body><h1>Hello from my first NodeJs server</h1></body></html>"
  );
  res.end();
});
server.listen(3000);
