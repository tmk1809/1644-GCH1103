//1. khai báo thư viện http
const http = require('http')
//2. khai báo host
const host = 'localhost'
//3. khai báo port của server
const port = 1234    //3000: default port of NodeJS server
//4. khai báo server
const server = http.createServer((request, respond) => {
   respond.write("<h1 style='color: red; background-color: yellow;'>Hello world !</h1>")
   respond.write("<h2 style='font-style: italic; text-decoration: underline; '>We are from Greenwich Vietnam !</h2>")
   respond.write("<h3 style='color: blue;'> Coding is interesting.</h3>");
   respond.write("<h4 style='color: green;'> Practice makes perfect !</h4>");
   respond.write("<iframe width='560' height='315' src='https://www.youtube.com/embed/2isYuQZMbdU'></iframe>");
   respond.end()
})
//5. cho server listen port để chạy web
server.listen(port, () => {
  console.log ("Server is running at http://" + host + ":" + port)
})