const http = require("http");
const Server = http.createServer((req, res) => {
  const url = req.url;
  console.log(url);
  if (url === "/") {
    res.write(
      '<html><head><title>Enter Message</title></head><body><form action="/message" methos="POST"><input name="message" type="text><button type="submit>Send</button></form></body></html>'
    );
    return res.end();
  }
  res.setHeader("Content-Type", "text/html");
  res.write(
    "<html><head><title>My First Page</title></head><body><h1>Hello from my Node js Server !</h1></body></html>"
  );
  res.end();
});
Server.listen(3000);
