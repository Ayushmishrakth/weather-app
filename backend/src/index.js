import express from 'express';
import cors from 'cors';
import weatherRoutes from './routes/weather.js';
import dotenv from 'dotenv';

dotenv.config();
console.log("Starting backend server...");

const app = express();
app.use(cors());
app.use(express.json());

app.use('/api/weather', weatherRoutes);

const port = process.env.PORT || 4000;
app.listen(port, () => console.log(`Server listening on ${port}`));
