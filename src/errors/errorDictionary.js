import { ERROR_ENUMS } from './errorEnums.js';

export const ERROR_DICTIONARY = {
  [ERROR_ENUMS.INVALID_INPUT]: {
    message: 'Los datos ingresados no son válidos',
    code: 400,
  },
  [ERROR_ENUMS.DUPLICATE_USER]: {
    message: 'El usuario ya está registrado',
    code: 409,
  },
  [ERROR_ENUMS.MISSING_FIELDS]: {
    message: 'Faltan campos obligatorios',
    code: 422,
  },
  [ERROR_ENUMS.PET_CREATION_ERROR]: {
    message: 'No se pudo crear la mascota',
    code: 500,
  },
};