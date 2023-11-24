const fs=require('fs');
const data={
    name:"vinod",
    age:12,
    add:"5-5-1"
}
const jsondara=JSON.stringify(data);

// console.log(jsondara);
fs.writeFile("json1.json",jsondara,(err)=>{
    console.log("done");
});
fs.readFile('json1.json','utf-8',(err,data)=>{
    console.log(data);
})