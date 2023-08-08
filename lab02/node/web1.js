const http = require ('http');
const host = 'localhost';
const port = 3000;
const server = http.createServer((req, res) => {
   res.write("<h1>Greenwich Vietnam</h1>");
   res.write("<h2>Computing Department</h2>");
   res.write("<h3>Cloud Computing - 1644</h3>");
   res.end("<h4>We are learning NodeJS</h4>");
});
server.listen(port, () => {
   console.log("Server is listening at http://" + host + ":" + port);
});