import { Router } from 'express';
import { getMockingPets } from '../controllers/pets.controller.js';
import { getMockingUsers, generateDataController } from '../controllers/mocks.controller.js';

const router = Router();

router.get('/mockingpets', getMockingPets);
router.get('/mockingusers', getMockingUsers);
router.post('/generateData', generateDataController);

export default router;