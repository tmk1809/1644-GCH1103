const http = require ('http');
const port = 3000;
const fs = require ('fs');
const server = http.createServer((req, res) => {
   res.statusCode = 200;
   res.setHeader("Content-Type", "text/html");
   switch (req.url) {
      case "/":
         fs.readFile("index.html", (err, data) => {
            if (err) {
              console.error(err);
            }
            else {
               res.writeHead(200);
               res.write(data);
               res.end();
            } 
         });
         break;
      case "/login":
         fs.readFile("login.html", (err, data) => {
            if (err) {
               console.error(err);
            }
            else {
               res.writeHead(200);
               res.write(data);
               res.end();
            }
         });
         break;
      case "/about":
         fs.readFile("about.html", (err, data) => {
            if (err) {
               console.error(err);
            }
            else {
               res.writeHead(200);
               res.write(data);
               res.end();
            }
         });
         break;
      default:
         res.write("<h1>404 - Not found</h1>");
         res.end();
         break;
   }
});
server.listen(port, () => {
   console.log("Server is running at http://localhost:" + port);
})