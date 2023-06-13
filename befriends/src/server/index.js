import dotenv from 'dotenv';
import express from 'express';
import logger from 'morgan';
import path from 'path';
import router from './routes/routes.js';
import { fileURLToPath } from 'url';
import cors from 'cors';
import http from 'http';
import { Server } from 'socket.io';

dotenv.config();

const app = express();
const server = http.createServer(app);
const io = new Server(server, {
  cors: {
    origin: ["http://localhost:3001", "http://localhost:5173", "http://localhost:3000"],
    methods: ["GET", "POST"]
  }
});
// const __filename = fileURLToPath(import.meta.url);
// const __dirname = path.dirname(__filename);
app.use(cors());
app.use(logger('dev'));
app.use(express.json());


app.use(router);

io.on('connection', (socket) => {
  console.log(socket, 'connected!');
  // socket.on('message', (message) => {
  //   socket.broadcast.emit('message', message);
  // })
})

io.on('message', (message) => {
  io.broadcast.emit(message);
})

try {
  server.listen(process.env.PORT || 3001, () => {
    console.log(`Listening on port:${process.env.PORT}`)
  })
} catch (error) {
  console.log('Error spinning up server');
}



