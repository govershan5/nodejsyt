const EventEmitter=require('events');
const event=new EventEmitter();
event.on("myname",()=>{
    console.log("myname is why for u");

});
event.emit("myname");