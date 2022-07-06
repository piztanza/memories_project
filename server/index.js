import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
import postRoutes from './routes/posts.js';

const app = express();
dotenv.config();

app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());

app.use('/posts', postRoutes);

// const CONNECTION_URL = 'mongodb://piztanza:yelyahwilliams@cluster0-shard-00-00.hee9w.mongodb.net:27017,cluster0-shard-00-01.hee9w.mongodb.net:27017,cluster0-shard-00-02.hee9w.mongodb.net:27017/?ssl=true&replicaSet=atlas-2v0fs5-shard-0&authSource=admin&retryWrites=true&w=majority';
const PORT = process.env.PORT || 5000;

mongoose.connect(process.env.CONNECTION_URL)
    .then(() => app.listen(PORT, () => console.log(`server running on port: ${PORT}`)))
    .catch((error) => console.log(error.message));
