var express = require('express');  
var app = express();  
var http = require('http').Server(app);
let io = require('socket.io')(http)


app.get('/' , (req,res)=>{

    res.sendFile(__dirname + '/index.html');
})
http.listen(3000, function(){

    console.log('server has been started...');
})

io.on('connection' , (socket) => {

    console.log("connection created..");
   
  //connections = Object.keys(io.sockets.sockets).length
  //console.log(connections);
   //console.log(Object.keys(io.sockets.connected).length);
  // io.emit('connectons' ,Object.keys(io.sockets.sockets).length )
  //console.log(Object.keys(socket.rooms)); 

     socket.on('disconnect' , ()=>{console.log("disconnected") })

     socket.on('Created' , (data)=>{
         socket.broadcast.emit('Created',(data))
     })

     socket.on('chat-message' , (data)=>{

        socket.broadcast.emit('chat-message' , (data))
     })

     socket.on('typing' , (data)=>{

        socket.broadcast.emit('typing' , (data))
     })

     socket.on('stopTyping' , (data)=>{

        socket.broadcast.emit('stopTyping' , (data))
     })

     socket.on('joined' , (data)=>{

        socket.broadcast.emit('joined' , (data))
     })

     socket.on('leaved' , (data)=> {
         socket.broadcast.emit('leaved' ,(data))
     })

})