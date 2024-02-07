import express from "express";
import { Server } from "socket.io";
import cors from "cors";
import http from "http";

const app = express();

//create http server
const server = http.createServer(app);

//create socket server
const io = new Server(server, {
  cors: {
    origin: "*",
    methods: ["GET", "POST"],
  },
});

//use socket events
io.on("connection", (socket) => {
  console.log("connection is established");

  socket.on("disconnect", () => {
    console.log("Connection is disconnected");
  });
});

server.listen(3000, () => {
  console.log("App is listening on 3000...");
});
