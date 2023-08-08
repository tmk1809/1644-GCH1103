const http = require('http')
const port = 3000;
const fs = require('fs')
const server = http.createServer((res, req)=>{
    fs.readFile('index.html', (err, data)=>{
        if(err){
            console.error(err)
        }else{
            res.write(data)
            res.end()
        }
    })
})
server.listen(port, ()=>{
    console.log("Web server is running http://localhost: " + port)
})