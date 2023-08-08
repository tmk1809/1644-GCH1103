const http = require('http')
const host = 'localhost'
const port = 3000
const server = http.createServer((request, respond)=>{
    respond.write("<h1 style='color: red;'>Hello world</h1>");
    respond.write("<h2 style='color: blue;'>We are from Greenwich Vietnam</h2>");
    respond.write("<h3>Coding is intersting</h3>");
    respond.write("<h3>Practice makes perfect</h3>");
    respond.write("<iframe width='1280' height='720' src='https://www.youtube.com/embed/XnbsIl2BnWw' title='Frank Ocean - Chanel' frameborder='0' allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share' allowfullscreen></iframe>");
    respond.end();
})

server.listen(port, ()=>{
    console.log("Server is running att http:// " + port + "." + port)
})