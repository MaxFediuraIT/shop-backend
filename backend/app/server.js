import { app } from "../app.js";
import { connectDB } from "./db.js";
import { createServer } from "http";
import { Server } from "socket.io";

const port = process.env.PORT || 3000;

const server = createServer(app);

connectDB()
  .then(() => {
    server.listen(port, () => {
      console.log(`Server is listening on port ${port}`);
    });
  })
  .catch((error) => {
    console.log(error.message);
  });

const io = new Server(server);

io.on("connection", (socket) => {
  console.log(`New client:${socket.id} connected`);

  socket.on("chat message", (message) => {
    console.log("Message received: " + message);
    io.emit("chat message", message);
  });
  socket.on("disconnect", () => {
    console.log(`Client:${socket.id} disconnected`);
  });
});


