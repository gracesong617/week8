const PORT = process.env.PORT || 1000;
//creating the express app
let express= require("express");
let app = express();
app.use("/", express.static("public"));

//creating the http server - this is a new step!
let http = require("http");
let server = http.createServer(app);

//initialise socket.io
let io = require("socket.io");
io = new io.Server(server);

//listen for a new connection
io.sockets.on("connection", (socket) => {
  console.log("new connection :", socket.id);

  socket.on("mouseData", (data) => {
    console.log(data);
    //send to all clients
    io.sockets.emit("mouseDataServer", data);
  })

  //incase of disconnection
  socket.on("disconnect", () => {
    console.log("disconnection :", socket.id);
  })

})


//run the app on port 1000
server.listen(PORT, () => {
  console.log("server on port ",PORT);
})

process.env.API-KEY

//1
//setting up an http server
//setting up socket.io

//2
//ensure that the client can connect to the server via sockets
//server recognising the connect
//client attempting to connect

//3
//client draws and sends to server

//4
//server recieves and sends to all the clients

//5
//clients recieve and draw on their screens




