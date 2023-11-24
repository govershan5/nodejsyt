const http=require('http');
const fs=require('fs');
const { log } = require('console');
var obj1;
const server=http.createServer((req,res)=>{
    // console.log(req.url);
    const data=fs.readFileSync(`${__dirname}/userApi/userap.json`,"utf-8");
    const objdata=JSON.parse(data);
    if(req.url=="/"){
        res.end('hello from other side');

    }
    else if(req.url=="/about"){
        res.end('hello from about side');

    }
    else if(req.url=="/userapi"){
        // res.end("page userapi")
        console.log(objdata.users[0].firstName);
        const users1=objdata.users;
       const d=users1.map((user)=>user.firstName);
       res.end(JSON.stringify(d));
        // const d=Object.values(users1).map(user=>user.firstName)

    //    res.end(users1);

    }
    else{
        res.writeHead(404)
        res.end("error page not found")
    }
});

server.listen(3000,()=>{
    console.log("listening to port no 3000");
});
