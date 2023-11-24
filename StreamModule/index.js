const http=require('http');
const fs=require("fs");
const server=http.createServer();
server.on('request',(req,res)=>{
    // fs.readFile("input.txt", (err, data)=> {
    // if (err) return console.error(err);
    // res.end(data.toString());
    // })
    const stream=fs.createReadStream("input.txt");
stream.on('data',(chunk)=>{
    res.write(chunk);
});
stream.on("end",()=>{
    res.end();
});
})
//2nd way

server.listen(3000,"127.0.0.1");