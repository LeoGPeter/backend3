import { Router } from 'express';
import { getMockingPets } from '../controllers/pets.controller.js';

const router = Router();

router.get('/mockingpets', getMockingPets);

export default router;