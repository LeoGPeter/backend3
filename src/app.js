import express from 'express';
import petsRouter from './routes/pets.routes.js';
import { errorHandler } from './middlewares/errorHandler.js';

const app = express();

app.use(express.json());

app.use('/api', petsRouter);

app.use(errorHandler);

export default app;

