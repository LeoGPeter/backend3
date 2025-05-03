import CustomError from '../errors/CustomError.js';
import { ERROR_ENUMS } from '../errors/errorEnums.js';
import { ERROR_DICTIONARY } from '../errors/errorDictionary.js';

export function testLoggerController(req, res) {
  req.logger.debug('Debug log');
  req.logger.http('HTTP log');
  req.logger.info('Info log');
  req.logger.warning('Warning log');
  req.logger.error('Error log');
  req.logger.fatal('Fatal log');

  res.send('Logs enviados. Revisá la consola y el archivo errors.log');
}

export function triggerErrorController(req, res, next) {
  const error = new CustomError(
    'RutaInvalida',
    ERROR_DICTIONARY[ERROR_ENUMS.INVALID_INPUT].message,
    ERROR_DICTIONARY[ERROR_ENUMS.INVALID_INPUT].code,
    'Este error fue generado intencionalmente para testear el logger.'
  );
  next(error);
}