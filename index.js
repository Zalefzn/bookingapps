import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import db from './config/database.js';
import router from './routes/routes.js';
import './models/models.js';

dotenv.config();
const app = express();
const port = 3008;

try {
    await db.authenticate();
    console.info('Database Connected!');
} catch (er) {
    console.info(er);
}

app.use(cors({ credentials: true, origin: 'http://localhost:3000' }));
app.use(cookieParser());
app.use(express.json());
app.use('/api',router);


app.listen(port, () => {
    console.info("server running at port 3008");
})