// src/routes/logger.routes.js

import { Router } from 'express';
import { testLoggerController, triggerErrorController } from '../controllers/logger.controller.js';

const router = Router();

router.get('/loggerTest', testLoggerController);
router.get('/loggerError', triggerErrorController); // <-- ruta para probar errores reales

export default router;