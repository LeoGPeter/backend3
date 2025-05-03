import express from 'express';
import petsRouter from './routes/pets.routes.js';
import { errorHandler } from './middlewares/errorHandler.js';
import { logger } from './config/logger.js';
import loggerRouter from './routes/logger.routes.js';

const app = express();

app.use(express.json());

app.use((req, res, next) => {
    req.logger = logger;
    next();
  });

app.use('/api', petsRouter);
app.use('/api', loggerRouter);

app.use(errorHandler);

export default app;

