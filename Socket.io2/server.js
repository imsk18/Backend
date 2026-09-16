import app from "./src/app.js"
import {createServer} from "http"           
import { Server } from "socket.io";
/** 
 * io => Server
 * socket => single user
 * 
 * on => event ko listen krna
 * 
 * emit => event ko fire karna 
 *  */ 

const httpServer = createServer(app);
const io = new Server(httpServer, { /* options */ });


io.on("connection", (socket) => {
  console.log("new connection created");

  socket.on("message",(sks)=>{

    console.log("user fired message event");
    console.log(sks);
    socket.emit("abc",sks)

  })
});


httpServer.listen(3000,()=>{
    console.log("server is running on port 3000");
})