import dotenv from 'dotenv';
import express from 'express';
import logger from 'morgan';
import path from 'path';
import router from './routes/routes.js';
import { fileURLToPath } from 'url';
import cors from 'cors';

dotenv.config();

const app = express();
// const __filename = fileURLToPath(import.meta.url);
// const __dirname = path.dirname(__filename);
app.use(cors());
app.use(logger('dev'));
app.use(express.json());


app.use(router);

try {
  app.listen(process.env.PORT || 3001, () => {
    console.log(`Listening on port:${process.env.PORT}`)
  })
} catch (error) {
  console.log('Error spinning up server');
}



