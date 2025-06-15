const express = require("express");
const app = express();

const http =require("http");
const server = http.createServer(app);
const {Server} = require("socket.io");
const io = new Server(server,{
    cors:{
        origin:["http://localhost:3000"]
    }
});

const PORT = 5000;

io.on("connection", (socket)=>{
    console.log("success");

    socket.on("send_message",(data)=>{
        console.log(data);

        io.emit("received_message",{
            id: data.id,
            message: data.message,
        });
    })

    socket.on("disconnect",()=>{
        console.log("disConect")
    });
})
server.listen(PORT,()=> console.log(`success ${PORT}`))