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
const io = new Server(server,  { cors: { origin: '*' } });
// const __filename = fileURLToPath(import.meta.url);
// const __dirname = path.dirname(__filename);
app.use(cors());
app.use(logger('dev'));
app.use(express.json());


app.use(router);

io.on('connection', socket => {
  console.log('New socket connection');
  socket.emit('message', 'This is a chat');
})

try {
  server.listen(process.env.PORT || 3001, () => {
    console.log(`Listening on port:${process.env.PORT}`)
  })
} catch (error) {
  console.log('Error spinning up server');
}



