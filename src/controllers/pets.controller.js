import { generatePets } from '../mocking/generatePets.js';
import { PetModel } from '../models/pet.model.js';
import CustomError from '../errors/CustomError.js';
import { ERROR_ENUMS } from '../errors/errorEnums.js';
import { ERROR_DICTIONARY } from '../errors/errorDictionary.js';

export async function getMockingPets(req, res, next) {
  try {
    const pets = generatePets(100);
    const savedPets = await PetModel.insertMany(pets);
    res.status(200).json({ status: 'success', payload: savedPets });
  } catch (error) {
    const petError = new CustomError(
      'MockingError',
      ERROR_DICTIONARY[ERROR_ENUMS.PET_CREATION_ERROR].message,
      ERROR_DICTIONARY[ERROR_ENUMS.PET_CREATION_ERROR].code,
      error.message
    );
    next(petError);
  }
}